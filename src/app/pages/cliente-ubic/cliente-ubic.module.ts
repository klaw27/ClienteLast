import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteUbicPage } from './cliente-ubic.page';

import { MapaUbicacionPage } from '../mapa-ubicacion/mapa-ubicacion.page';
import { MapaUbicacionPageModule } from '../mapa-ubicacion/mapa-ubicacion.module';


@NgModule({
  entryComponents:[
    MapaUbicacionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaUbicacionPageModule
    ],
  declarations: [ClienteUbicPage]
})
export class ClienteUbicPageModule {}
