import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {ModalController} from '@ionic/angular';
import { ModaladdbijouPage } from '../modaladdbijou/modaladdbijou.page';
import {ModaldetailsjewelPage} from '../modaldetailsjewel/modaldetailsjewel.page';
import firebase from 'firebase';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  bijoux: Array<object>;

  constructor(
      public afDB: AngularFireDatabase,
      public modalCtrl: ModalController
  ) {
    this.getJewels();
  }

  async getJewels(){
    const list = this.afDB.database.ref('bijoux/');
    list.on('value', (snapshot) => {
      if (snapshot.val() != null) {
        this.bijoux = Object.keys(snapshot.val()).map((personNamedIndex) => {
          const bijou = snapshot.val()[personNamedIndex];
          bijou.key = personNamedIndex;
          const storageRef = firebase.storage();
          if (typeof bijou.image !== 'undefined') {
            const gsReference = storageRef.refFromURL(bijou.image);

            gsReference.getDownloadURL().then((url) => {
              bijou.image = url;
            }).catch((error) => {
              // Handle any errors
            });
          }
          return bijou;
        });
      }
    });
  }

  async add() {
    const modal = await this.modalCtrl.create({
      component: ModaladdbijouPage
    });
    modal.onDidDismiss().then(() => {
      this.getJewels();
    });
    return await modal.present();
  }

  async detail(jewel) {
    const modal = await this.modalCtrl.create({
      component: ModaldetailsjewelPage,
      componentProps: {
        object: jewel
      }
    });
    modal.onDidDismiss().then(() => {
      this.getJewels();
    });
    return await modal.present();
  }

}
