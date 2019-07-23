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
  suministros: [];
  preparadas: [];
  bebidas: [];
  postres: [];
  id:any;

  slideOpts = {
    effect: 'flip',
    slidesPerView: 3.3,
    freeMode: true
  };
 
  constructor(public menu: MenuController,public estore : EstoreService,
    private navCtrl : NavController,public popoverCtrl: PopoverController,public alertCtrl: AlertController) {}


  ngOnInit() {

    //suministros
    this.menu.enable(true);
    console.log(this.suministros);
    this.id = "1";
    let body2 = {
      id: this.id,
      funcion: "all"
    };
    console.log(body2);
    this.estore.dashboardSub(body2, "subcategorias.php").subscribe(data=>{
      console.log(data);
      if(data['success']){
        this.suministros = data['subcategorias'];
        console.log(this.suministros);
      }
    });

    //Commida Preparada
    this.menu.enable(true);
    console.log(this.preparadas);
    this.id = "2";
    let body3 = {
      id: this.id,
      funcion: "all"
    };
    console.log(body3);
    this.estore.dashboardSub(body3, "subcategorias.php").subscribe(data=>{
      console.log(data);
      if(data['success']){
        this.preparadas = data['subcategorias'];
        console.log(this.preparadas);
      }
    });

        //Bebidas 
        this.menu.enable(true);
        console.log(this.bebidas);
        this.id = "4";
        let body4 = {
          id: this.id,
          funcion: "all"
        };
        console.log(body4);
        this.estore.dashboardSub(body4, "subcategorias.php").subscribe(data=>{
          console.log(data);
          if(data['success']){
            this.bebidas = data['subcategorias'];
            console.log(this.bebidas);
          }
        });
  
          //Postres 
          this.menu.enable(true);
          console.log(this.postres);
          this.id = "3";
          let body5 = {
            id: this.id,
            funcion: "all"
          };
          console.log(body5);
          this.estore.dashboardSub(body5, "subcategorias.php").subscribe(data=>{
            console.log(data);
            if(data['success']){
              this.postres = data['subcategorias'];
              console.log(this.postres);
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
