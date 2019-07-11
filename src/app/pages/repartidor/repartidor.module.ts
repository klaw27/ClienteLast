import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RepartidorPage } from './repartidor.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { LoadingPageModule } from '../loading/loading.module';
import { ClienteUbicPageModule } from '../cliente-ubic/cliente-ubic.module';
import { LoadingPage } from '../loading/loading.page';
import { ClienteUbicPage } from '../cliente-ubic/cliente-ubic.page';

const routes: Routes = [
  {
    path: '',
    component: RepartidorPage
  }
];

@NgModule({
  entryComponents: [
    ClienteUbicPage,
    LoadingPage
  ],  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    ClienteUbicPageModule,
    LoadingPageModule
  ],
  declarations: [RepartidorPage]
})
export class RepartidorPageModule {}
