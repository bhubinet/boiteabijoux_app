import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaldetailsjewelPageRoutingModule } from './modaldetailsjewel-routing.module';

import { ModaldetailsjewelPage } from './modaldetailsjewel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaldetailsjewelPageRoutingModule
  ],
  declarations: [ModaldetailsjewelPage]
})
export class ModaldetailsjewelPageModule {}
