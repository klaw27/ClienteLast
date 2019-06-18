import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, MenuController, NavController } from '@ionic/angular';

import { BuscarPage } from './buscar.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarPage]
})
export class BuscarPageModule {

  
  constructor(public menu: MenuController,
    private navCtrl : NavController) {}
    
  

}
