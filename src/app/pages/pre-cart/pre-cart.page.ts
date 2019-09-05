import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-pre-cart',
  templateUrl: './pre-cart.page.html',
  styleUrls: ['./pre-cart.page.scss'],
})
export class PreCartPage implements OnInit {

  public ocultar1: boolean = true;

  carrito:any = {
         id_producto:'',
        nombre: '',
       descripcion: '',
         tiempopreparacion: '',
         precio: '',
         fotografia:"",
        FK_idNegocio: ''
    };
  groupArr:  any;
  visible = false; 

  constructor(public _carrito: CarritoService,private navCtrl : NavController) { }

  ngOnInit() {
      this.carrito = this._carrito.items; 
     
      this.groupArr = this.carrito.reduce((r,{FK_idNegocio})=>
      {
        if(!r.some(o=>o.FK_idNegocio==FK_idNegocio)){
          r.push({FK_idNegocio,groupItem:this.carrito.filter(v=>v.FK_idNegocio==FK_idNegocio)
      });
    }
    return r;
    },[]);
  }


toggle() { 
  this.visible = !this.visible; 
} 

accion1(){
this.ocultar1 = !this.ocultar1;
}

menu(id) {
  this.navCtrl.navigateForward('/local-menu/' + id);
}


goCarrito(id){
 // this.navCtrl.navigateForward('/pre-cart');
  this.navCtrl.navigateForward('/carrito/'+ id);
}

salir(){
  this.navCtrl.navigateBack('/dashboard');
}

}
