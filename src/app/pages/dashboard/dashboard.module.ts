import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

import { ComponentsModule } from '../../components/components.module';
import { RepartoTipoComponent } from 'src/app/home-popover/reparto-tipo/reparto-tipo.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [RepartoTipoComponent],
  declarations: [DashboardPage,RepartoTipoComponent]
})
export class DashboardPageModule {}
