import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, PopoverController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EstoreService } from 'src/app/services/estore.service';
import { RepartoTipoComponent } from 'src/app/home-popover/reparto-tipo/reparto-tipo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  subcategorias: [];
  id:any;

  slideOpts = {
    effect: 'flip',
    slidesPerView: 3.3,
    freeMode: true
  };
 
  constructor(public menu: MenuController,public estore : EstoreService,
    private navCtrl : NavController,public popoverCtrl: PopoverController,public alertCtrl: AlertController) {}



    

  negocios = {
    comida: [{
      nombre: 'Restaurantes',
      icono: 'Resto.png'
    },
    
    {
      nombre: 'Tacos',
      icono: 'Tacos.png'

    },
    {
      nombre: 'Hamburguesas y Hotdogs',
      icono: 'Hotdogs.png'

    },
    {
      nombre: 'Pizza',
      icono: 'Pizza.png'

    },
    {
      nombre: 'Cafeterias',
      icono: 'Cafe.png'
    }
  ],
  bebidas: [
    {
      nombre: 'Vinos y Licores',
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
      nombre: 'Frutas y Verduras',
      icono: 'Frutas y Verduras.png'
    },
    {
      nombre: 'Carniceria',
      icono: 'Carniceria.png'
    },
    {
      nombre: 'Polleria',
      icono: 'Polleria.png'
    },
    {
      nombre: 'Pescados y Mariscos',
      icono: 'Pescados y Mariscos.png'
    }
  ]
  };


  ngOnInit() {
    this.menu.enable(true);

    console.log(this.subcategorias);
    this.id = "1";
    let body2 = {
      id: this.id,
      funcion: "all"
    };
    console.log(body2);
    this.estore.dashboardSub(body2, "subcategorias.php").subscribe(data=>{
      console.log(data);
      if(data['success']){
        this.subcategorias = data['subcategorias'];
        console.log(this.subcategorias);
      }
    });


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

  async TipoReparto(){
    const alert = await this.alertCtrl.create({
      header: '¿Que tipo de servicio deseas?',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Solicitar Repartidor',
          value: 'repartidor',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Mandado',
          value: 'mandado'
        }
      ],
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            console.log();
          }
        }, {
          text: 'Aceptar',
          handler:(data:string) => {
            console.log('OK clicked. Data -> ' + data);
            if(data == "mandado"){
              this.navCtrl.navigateForward("/mandado");
            }else {
              this.navCtrl.navigateForward("/repartidor");
            }
          }
        }
      ]
    });
    await alert.present();

}

}
