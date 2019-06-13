import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  productos:any;
  carrito:boolean = false;

  constructor(public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    public estore : EstoreService,
    public _carrito: CarritoService) { }

    ionViewDidEnter(){
      if(this._carrito.items.length != 0) this.carrito = true;
    }

  ngOnInit() {
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
    this.navCtrl.navigateForward('/producto/'+id+"/agregar"+"/"+this.id);
  }

  ubicacion(){
    this.navCtrl.navigateForward('/ubicacion/'+this.id);
  }

  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }

}
