import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaladdbijouPageRoutingModule } from './modaladdbijou-routing.module';

import { ModaladdbijouPage } from './modaladdbijou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaladdbijouPageRoutingModule
  ],
  declarations: [ModaladdbijouPage]
})
export class ModaladdbijouPageModule {}
