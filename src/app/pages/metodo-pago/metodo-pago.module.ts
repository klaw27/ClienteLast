import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MetodoPagoPage } from './metodo-pago.page';
import { HomePopoverComponent } from 'src/app/home-popover/home-popover.component';
import { hostViewClassName } from '@angular/compiler';


const routes: Routes = [
  {
    path: '',
    component: MetodoPagoPage 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [HomePopoverComponent],
  declarations: [MetodoPagoPage, HomePopoverComponent],
})
export class MetodoPagoPageModule {}
