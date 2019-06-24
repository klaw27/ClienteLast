import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {

  constructor(public alertController: AlertController) {
    this.items = this.Lista;
   }

  items:any;
  //lista:any;
  Lista=[{numero:"XXXX-XXXX-XXXX-1234",estatus:"Aprobada", expira: "11/19"},
          {numero:"XXXX-XXXX-XXXX-5432",estatus:"Aprobada", expira: "12/19"},
          {numero:"XXXX-XXXX-XXXX-9686",estatus:"Aprobada", expira: "08/19"}];

  ngOnInit() {
  }
  async deleteCard() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Esta seguro que desea eliminar la tarjeta?',
      buttons: ['Aceptar', 'Cancelar']
    });

    await alert.present();
  }



}
