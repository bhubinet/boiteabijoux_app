import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/database';
import Swal from 'sweetalert2';
import firebase from 'firebase';

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
      public navParams: NavParams
  ) {
    this.jewel = navParams.get('object');
    console.log(this.jewel);
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
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
      /*if (value.isConfirmed){
        console.log(value);
        const storageRef = firebase.storage().ref();

        this.afDB.list('commandes/').push({
          name: this.jewel.name,
          price: this.jewel.price,
          date: new Date(),
        }).then(() => {
          this.dismiss();
        });
      }*/
    });
  }

  deleteJewel(){
    Swal.fire({
      title: 'Supprimer ce bijou ?',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler'
    }).then((value) => {
      if (value.isConfirmed){
        firebase.database().ref('bijoux/' + this.jewel.key).remove().then(() => {
          this.dismiss();
        });
      }
    });
  }

}
