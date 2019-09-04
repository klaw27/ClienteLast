import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  noCarrito = 0;
  items:any;

  constructor(public menu: MenuController,private navCtrl : NavController,
    public _carrito: CarritoService) { 
      this.noCarrito = this._carrito.items.length;

    }

  ngOnInit() {
    this.items = this._carrito.items;
    this.noCarrito = this._carrito.items.length;
  }

  toogleMenu(){
    this.menu.toggle();
  }


  goCarrito(){
    
    this.navCtrl.navigateForward('/pre-cart');
    //this.navCtrl.navigateForward('/carrito');
  }

  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }
}
