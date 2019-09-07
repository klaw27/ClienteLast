import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { NavController } from '@ionic/angular';

declare var google;

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
         precioCarrito:"",
        FK_idNegocio: ''
    };
  groupArr:  any;

  mostrar = true; 
  cerrar= false; ;
  ocultar1= true;
  icono = "arrow-dropdown";
  coordenadas={};
  total: any = [];
  ArrayTotal:any;
  // name="arrow-dropdown"
  // name="arrow-dropup"

  constructor(public _carrito: CarritoService,private navCtrl : NavController) { }

  ngOnInit() {
      this.carrito = this._carrito.items; 
     console.log(this._carrito);
      this.groupArr = this.carrito.reduce((r,{FK_idNegocio})=>
      {
        if(!r.some(o=>o.FK_idNegocio==FK_idNegocio)){
          r.push({FK_idNegocio,groupItem:this.carrito.filter(v=>v.FK_idNegocio==FK_idNegocio)});
          this.suma(FK_idNegocio);
          //console.log(this.total); 
        }
        this.ArrayTotal = r;
    return r;
    },[]);  
    
 // this.suma(this.groupArr.FK_idNegocio);
  //console.log(this.total); 
 console.log(this.ArrayTotal); 

  }



suma(id){
 // suma(){
   
 this.ArrayTotal = this.carrito.filter(v=>v.FK_idNegocio==id)
  var tot = 0;
  this.ArrayTotal.forEach(function (obj) { tot += parseInt(obj.precioCarrito)});
  this.total.push(tot);
}
 
menu(id) {
  this.navCtrl.navigateForward('/local-menu/' + id);
}


editarProducto(id){
  this.navCtrl.navigateForward('/producto/'+id+"/editar/"+this.carrito.FK_idNegocio);
}

goCarrito(id){
 // this.navCtrl.navigateForward('/pre-cart');
  this.navCtrl.navigateForward('/carrito/'+ id);
}

salir(){
  this.navCtrl.navigateBack('/dashboard');
}


}
