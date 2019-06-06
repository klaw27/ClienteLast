import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoadingPage } from './loading.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    ],
  declarations: [LoadingPage]
})
export class LoadingPageModule {}
