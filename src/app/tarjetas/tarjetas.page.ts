import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var OpenPay: any;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {
 
  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    public http: HttpClient,private router : Router) {
   }
  customerOpenid:any ='';
  items:any;
  tarjetas: any;


  ngOnInit() {
    //Obtener tarjetas con id de cliente
    this.customerOpenid = {...JSON.parse(localStorage.getItem('userOpen'))};
    let customer_id =  JSON.stringify(this.customerOpenid.id);
    console.log(this.customerOpenid.id);
    // return this.http.post("https://localhost:5010/api/card/get",customer_id,httpOptions).subscribe(
      return this.http.post("http://ec2-13-57-185-15.us-west-1.compute.amazonaws.com:5011/api/card/get",customer_id,httpOptions).subscribe(
      
      data => {
         console.log("Tarjetas guardadas del cliente");
         this.tarjetas = data;
         console.log(this.tarjetas);
       }, 
    error => {
     console.log(error);
   }); 

  }

  deleteCard(idDeleteCard){
    //let customer_id =  JSON.stringify(this.customerOpenid.id);
    
    let DeleteCard:any = {
      customer_id : this.customerOpenid.id,
      card_id :idDeleteCard
    } 
  
    
    console.log(DeleteCard);
    return this.http.post("http://ec2-13-57-185-15.us-west-1.compute.amazonaws.com:5011/api/card/delete",JSON.stringify(DeleteCard),httpOptions).subscribe(
      data => {
         console.log("Tarjetas eliminada");
         //this.navCtrl.navigateForward('/tarjetas');
         this.removeCardAlert();
         this.ngOnInit();
         console.log(this.tarjetas);
       }, 
    error => {
     console.log(error);
   }); 
  }

  async deleteCardConfirm(id_card) {
    const alert = await this.alertController.create({
      header: 'Confirme acción',
      message: '¿Está seguro que desea eliminar la tarjeta?',
      buttons: [
        {
          text: 'Cancelar',
        }, {
          text: 'Aceptar',
          handler: data => {
          this.deleteCard(id_card);
          }
        }
      ]
    });

    await alert.present();
  }


  
  async removeCardAlert() {
    const alert = await this.alertController.create({
      header: 'Operacion exitosa',
      message: '¡La tarjeta fue eliminada!',
     buttons: [
      {
        text: 'Aceptar',
        handler: data => {
          //this.router.navigateByUrl(`/tarjetas`);
        }
      }
    ]
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
    this.navCtrl.navigateBack('/metodo-pago');
    //this.navCtrl.navigateBack('/dashboard');
  }

}
