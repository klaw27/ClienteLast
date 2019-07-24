import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EstoreService } from '../../services/estore.service';
import { CarritoService } from '../../services/carrito.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

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
    public _carrito: CarritoService
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

    else{
      this.editar = true;
      this.producto =  this._carrito.getItem(this.id);
      //como se muestra en carrito
      this.cantidad = this.producto['cantidadCarrito'];
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
    this.navCtrl.pop();

  }

  eliminar(){
    this._carrito.eliminarItem(this.id);
    this.navCtrl.pop();
  }



  

}
