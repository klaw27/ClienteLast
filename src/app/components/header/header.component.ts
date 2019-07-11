import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public menu: MenuController,private navCtrl : NavController) { }

  ngOnInit() {
  }

  toogleMenu(){
    this.menu.toggle();
  }


  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }

  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }
}
