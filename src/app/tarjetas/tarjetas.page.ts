import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {

  constructor(public alertController: AlertController,
    public navCtrl: NavController) {
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
      header: 'Confirme acción',
      message: '¿Está seguro que desea eliminar la tarjeta?',
      buttons: ['Aceptar', 'Cancelar']
    });

    await alert.present();
  }

  
  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }
  
  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }

  salir(){
    this.navCtrl.navigateBack('/dashboard');
  }

}
