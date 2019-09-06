import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-pre-cart',
  templateUrl: './pre-cart.page.html',
  styleUrls: ['./pre-cart.page.scss'],
})
export class PreCartPage implements OnInit {

 

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

  mostrar = true; 
  cerrar= false; ;
  ocultar1= true;
  iconAbrir:any;
  iconCerrar:any;

  constructor(public _carrito: CarritoService,private navCtrl : NavController) { }

  ngOnInit() {
      this.carrito = this._carrito.items; 
     console.log(this._carrito);
      this.groupArr = this.carrito.reduce((r,{FK_idNegocio})=>
      {
        if(!r.some(o=>o.FK_idNegocio==FK_idNegocio)){
          r.push({FK_idNegocio,groupItem:this.carrito.filter(v=>v.FK_idNegocio==FK_idNegocio)
      });
    }
    return r;
    },[]);
    //let total = this.groupArr.
    console.log(this.groupArr);
  }


toggle(idCard) { 
  this.ocultar1 = idCard;
  this.mostrar = false; 
  this.cerrar = true;
  
 
}

toggle2(idCard) { 
  this.ocultar1 = false;
  this.mostrar = true; 
  this.cerrar = false;
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
