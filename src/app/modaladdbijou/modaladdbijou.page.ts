import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-modaladdbijou',
  templateUrl: './modaladdbijou.page.html',
  styleUrls: ['./modaladdbijou.page.scss'],
})
export class ModaladdbijouPage implements OnInit {
  captureDataUrl: string;
  name: string;
  price = 0;
  stock = 1;

  constructor(
      public modalCtrl: ModalController,
      public afDB: AngularFireDatabase
  ) {}

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }

  capture() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };

    Camera.getPicture(cameraOptions)
        .then((imageData) => {
          // imageData is either a base64 encoded string or a file URI // If it's base64:

          this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          // Handle error

        });
  } // End of capture camera

  upload() {

  }

  createJewel(){
    if (typeof this.name !== 'undefined') {
      const storageRef = firebase.storage().ref();
      // Create a timestamp as filename

      const filename = Math.floor(Date.now() / 1000);

      // Create a reference to 'images/todays-date.jpg'

      const imageRef = storageRef.child(`images/${filename}.jpg`);

      imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
          .then((snapshot) => {
            // Do something here when the data is succesfully uploaded!
            this.afDB.list('bijoux/').push({
              name: this.name,
              price: this.price,
              stock: this.stock,
              image: 'gs://boite-a-bijoux.appspot.com/' + snapshot.metadata.fullPath
            }).then(() => {
              this.dismiss();
            });
          });
    } else {
      alert('Remplir le nom');
    }
  }

}
