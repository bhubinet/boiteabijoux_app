import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaladdbijouPage } from './modaladdbijou.page';

const routes: Routes = [
  {
    path: '',
    component: ModaladdbijouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaladdbijouPageRoutingModule {}
