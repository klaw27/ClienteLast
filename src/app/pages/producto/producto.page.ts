import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EstoreService } from '../../services/estore.service';
import { CarritoService } from '../../services/carrito.service';
import { CarritoPage } from '../carrito/carrito.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  noCarrito = 0;
  carrito = [];
  items = [];
  id:any;
  idNegocio:any;
  producto:any = {
    nombre: '',
    tiempopreparacion: '',
    descripcion: '',
    precio: ''
  };
  cantidad:any = 1;
  editar:any = false;
  cantidadActual: any;
;

  constructor(
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    public estore : EstoreService,
    public _carrito: CarritoService,
    private router: Router
    ) { }

  ngOnInit() {

    let funcion = this.activatedRoute.snapshot.paramMap.get('funcion');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idNegocio = this.activatedRoute.snapshot.paramMap.get('negocio');

    if( funcion == "agregar"){
      this.editar = false;
      let body = {
        id: this.id,
        funcion: "id"
      };
      this.estore.producto(body, "productos.php").subscribe(data=>{
        console.log(data);
        if(data['success']){
          this.producto = data['producto'];
        }
      });

    }
    //edita
    else{

 
      this.carrito = this._carrito.items;
      console.log(this.carrito);
      this.editar = true;
      console.log("id del producto a editar " + this.id);
      this.producto =  this._carrito.getItem(this.id);
      console.log(this._carrito.getItem(this.id));
      this.cantidad = this.producto['cantidadCarrito'];
      console.log(this.producto['cantidadCarrito']);
    }

    if(this.cantidad == 1){
      let remove = document.getElementById('remove');
      remove.setAttribute("disabled","true");
    }


  }

  add(){
    this.cantidad += 1;
    if(this.cantidad >1){
        let remove = document.getElementById('remove');
        remove.removeAttribute("disabled");
    }

  }

  remove(){
    this.cantidad -= 1;
    if(this.cantidad == 1){
      let remove = document.getElementById('remove');
      remove.setAttribute("disabled","true");
    }

  }


  agregar(){
    this.producto['cantidadCarrito'] =  this.cantidad;
    this.producto['precioCarrito'] = this.cantidad * this.producto.precio;
    this._carrito.agregarProducto(this.id,this.producto);
    this._carrito.idNegocio = this.idNegocio;
    this._carrito.guardar_idNegocio();
    this.noCarrito = this._carrito.items.length;
   // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.navCtrl.navigateForward('/carrito');
    //this.navCtrl.pop();
}

  actualizar(){
    console.log(this.producto['cantidadCarrito']);
    this.producto['cantidadCarrito'] = this.cantidad;
    //this.producto['cantidadCarrito'] = this.producto['cantidadCarrito']  + this.cantidad;
    this.producto['precioCarrito'] = this.cantidad * this.producto.precio;
    this._carrito.actualizarItem(this.id,this.producto);
    this._carrito.idNegocio = this.idNegocio;
    this._carrito.guardar_idNegocio();
  //  this.navCtrl.pop();
   // this.navCtrl.navigateForward('/carrito');
   // this.navCtrl.push("CarritoPage");
   this.router.navigate(['/carrito']);
   // this.navCtrl.navigateRoot('/carrito');

  }

  eliminar(){
    this._carrito.eliminarItem(this.id);
    this.navCtrl.pop();
  }


  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }
  
  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }
  

}
