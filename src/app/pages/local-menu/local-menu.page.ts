import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EstoreService } from '../../services/estore.service';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-local-menu',
  templateUrl: './local-menu.page.html',
  styleUrls: ['./local-menu.page.scss'],
})
export class LocalMenuPage implements OnInit {

  id:any;
  productos: [];
  carrito:boolean = false;
  
  items:any = {
    id_producto:'',
    nombre: '',
    descripcion: '',
    tiempopreparacion: '',
    precio: ''
  };
  idNegocio:any;

  constructor(public navCtrl: NavController,public alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    public estore : EstoreService,
    public _carrito: CarritoService) { }

    ionViewDidEnter(){
      if(this._carrito.items.length != 0) this.carrito = true;
    }

  ngOnInit() {
  //  console.log(this.productos);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let body = {
      id: this.id,
      funcion: "all"
    };
    console.log(body);
    this.estore.productos(body, "productos.php").subscribe(data=>{
      console.log(data);
      if(data['success']){
        this.productos = data['productos'];
        console.log(this.productos);
      }
    });


  }

  salir(){
    this.navCtrl.pop();
  }

  agregarProducto(id){
   
    //Funcion editar
    //console.log("id del producto: " + id);
    if ( localStorage.getItem('productos') ){
      this.items = JSON.parse( localStorage.getItem('productos') );
      this.idNegocio = JSON.parse( localStorage.getItem('idNegocio') );
      console.log("hay productos ");

      let indicex;
      let item = this.items.map((data,indice)=>{
      if(data.id_producto == id){
        indicex = indice;
      }
    });
    
     if(indicex >=0){
      console.log("el producto ya existe en carrito")
        this.alertEditar();
        this.navCtrl.navigateForward('/producto/'+id+"/editar"+"/"+this.id);
        return this.items[item[indicex]];
     }else {
      console.log("No existe en carrito");
      this.navCtrl.navigateForward('/producto/'+id+"/agregar"+"/"+this.id);
     }
    }
    else{
       console.log("NO HAY productos ");
       this.navCtrl.navigateForward('/producto/'+id+"/agregar"+"/"+this.id);
       }

      }


  ubicacion(){
    this.navCtrl.navigateForward('/ubicacion/'+this.id);
  }

  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }


  async alertEditar() {
    const alert = await this.alertController.create({
      header: 'Informacion',
      message: 'El producto ya existe en el carrito ¿Desea modificar la cantidad?',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm aceptar');
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          this.navCtrl.navigateForward("/local-menu"+"/"+this.id);
          }
        },
      ]
    });

    await alert.present();
  }

}
