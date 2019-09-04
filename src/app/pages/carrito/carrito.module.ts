import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CarritoPage } from './carrito.page';
import { ComponentsModule } from '../../components/components.module';
import { ClienteUbicPage } from '../cliente-ubic/cliente-ubic.page';
import { ClienteUbicPageModule } from '../cliente-ubic/cliente-ubic.module';
import { LoadingPage } from '../loading/loading.page';
import { LoadingPageModule } from '../loading/loading.module';


const routes: Routes = [
  {
    path: '',
    component: CarritoPage
  }
];

@NgModule({
  entryComponents: [
    ClienteUbicPage,
    LoadingPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    ClienteUbicPageModule,
    LoadingPageModule
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
