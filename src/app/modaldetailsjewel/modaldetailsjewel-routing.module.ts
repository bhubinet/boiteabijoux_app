import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaldetailsjewelPage } from './modaldetailsjewel.page';

const routes: Routes = [
  {
    path: '',
    component: ModaldetailsjewelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaldetailsjewelPageRoutingModule {}
