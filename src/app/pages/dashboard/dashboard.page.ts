import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  slideOpts = {
    effect: 'flip',
    slidesPerView: 3.3,
    freeMode: true
  };
 
  constructor(public menu: MenuController,
    private navCtrl : NavController) {}

  negocios = {
    comida: [{
      nombre: 'Restaurantes',
      icono: 'Resto.png'
    },
    
    {
      nombre: 'Taquerias',
      icono: 'Tacos.png'

    },
    {
      nombre: 'Hotdogs',
      icono: 'Hotdogs.png'

    },
    {
      nombre: 'Pizzerias',
      icono: 'Pizza.png'

    },
    {
      nombre: 'Cafeterias',
      icono: 'Cafe.png'
    }
  ],
  bebidas: [
    {
      nombre: 'Vinos',
      icono: 'Vino.png'
    },
    {
      nombre: 'Depositos',
      icono: 'Cerveza.png'
    },
    {
      nombre: 'Preparados',
      icono: 'Preparados.png'
      
    },
    {
      nombre: 'Purificadoras',
      icono: 'Agua.png'
    }
  ],
  postres: [
    {
      nombre: 'Crepería',
      icono: 'Crepas.png'
    },
    {
      nombre: 'Pastelerias',
      icono: 'Pastelerias.png'
    },
    {
      nombre: 'Panaderías',
      icono: 'Pan.png'
    },
    {
      nombre: 'Churrerías',
      icono: 'Churros.png'
    }
  ],
  suministros: [
    {
      nombre: 'Bolsos',
      icono: 'Bolsos.png'
    },
    {
      nombre: 'Zapatos',
      icono: 'Zapatos.png'
    },
    {
      nombre: 'Joyerías',
      icono: 'Joyeria.png'
    },
    {
      nombre: 'Boutiques',
      icono: 'Ropa.png'
    }
  ]
  };

  ngOnInit() {
    this.menu.enable(true);

  }

  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }

  toogleMenu(){
    this.menu.toggle();
  }

  locales(id:string){
    this.navCtrl.navigateForward(`/locales/${id}`);
  }

  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }

  goUbicacion(){
    this.navCtrl.navigateForward('/card');
  }

}
