import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modaladdbijou',
    loadChildren: () => import('./modaladdbijou/modaladdbijou.module').then( m => m.ModaladdbijouPageModule)
  },
  {
    path: 'modaldetailsjewel',
    loadChildren: () => import('./modaldetailsjewel/modaldetailsjewel.module').then( m => m.ModaldetailsjewelPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
