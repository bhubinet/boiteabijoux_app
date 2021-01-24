import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/database';
import Swal from 'sweetalert2';
import firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import {Camera} from '@ionic-native/camera';

@Component({
  selector: 'app-modaldetailsjewel',
  templateUrl: './modaldetailsjewel.page.html',
  styleUrls: ['./modaldetailsjewel.page.scss'],
})
export class ModaldetailsjewelPage implements OnInit {
  jewel: any;

  constructor(
      public modalCtrl: ModalController,
      public afDB: AngularFireDatabase,
      public navParams: NavParams,
      public alertController: AlertController
  ) {
    this.jewel = navParams.get('object');
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }

  async presentAlertDelete() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Supprimer ce bijou ?',
      buttons: [
        {
          text: 'Supprimer',
          handler: () => {
            this.deleteJewel();
          }
        }, {
          text: 'Annuler',
          role: 'cancel',
        }
      ]
    });

    await alert.present();
  }

  sellJewel() {
    Swal.fire({
      title: 'Vendre 1 bijou ?',
      input: 'number',
      inputValue: this.jewel.price,
      showCancelButton: true,
      confirmButtonText: 'Vendre',
      cancelButtonText: 'Annuler'
    }).then((value) => {
      console.log(value);
      if (value.isConfirmed){
        const storageRef = firebase.storage().ref();

        this.afDB.list('ventes/').push({
          name: this.jewel.name,
          price: this.jewel.price,
          date: new Date(),
        }).then(() => {
          this.dismiss();
        });
      }
    });
  }

  commandJewel() {
    Swal.fire({
      title: 'Placer 1 bijou en commande ?',
      input: 'number',
      inputValue: this.jewel.price,
      showCancelButton: true,
      confirmButtonText: 'Commander',
      cancelButtonText: 'Annuler'
    }).then((value) => {
      console.log(value);
      if (value.isConfirmed){
        const storageRef = firebase.storage().ref();

        this.afDB.list('commandes/').push({
          name: this.jewel.name,
          price: this.jewel.price,
        }).then(() => {
          this.dismiss();
        });
      }
    });
  }

  deleteJewel(){
    firebase.database().ref('bijoux/' + this.jewel.key).remove().then(() => {
      this.dismiss();
    });
  }

}
