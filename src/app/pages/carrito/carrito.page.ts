import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { CarritoService } from '../../services/carrito.service';
import { ClienteUbicPage } from '../cliente-ubic/cliente-ubic.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingPage } from '../loading/loading.page';
import { EstoreService } from '../../services/estore.service';
import { AngularFireDatabase } from '@angular/fire/database';

declare var google;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss']
})
export class CarritoPage  {

  carrito = [];
  idNegocio: any;
  subTotal = 0;
  total = 0;
  coordenadas:any;
  calle = "";
  calleSecundario = "";

  constructor(public menu: MenuController,
    public navCtrl: NavController,
    public _carrito: CarritoService,
    public _estore: EstoreService,
    public modalController: ModalController,
    private geolocation: Geolocation,
    private AfDb: AngularFireDatabase) { }

  ionViewWillEnter() {
    this.total = 0;
    this.subTotal = 0;
    this.carrito = this._carrito.items;
    this.idNegocio = this._carrito.idNegocio;
    console.log(this.carrito);
    this.carrito.map(data=>{
      this.subTotal = this.subTotal + data['precioCarrito'];
    });
    this.total = this.subTotal + 15;
    setTimeout(()=>{
      this.loadMapa();

    },0);
    this.coordenadas = JSON.parse(localStorage.getItem("ubicacion"));
    this.callDistancia();

  }

  callDistancia(){
    let origin = new google.maps.LatLng(this.coordenadas[0]['lat'], this.coordenadas[0]['lng'] );
    let destination = new google.maps.LatLng(this.carrito[0]['latitud'], this.carrito[0]['longitud']);
    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      { 
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC
    }, (response,status)=>{
      if ( status == "OK"){
        console.log(response);
        let distanica = response.rows[0].elements[0].distance.value / 1000;
        distanica = Math.round(distanica * 100) / 100;
        console.log(distanica);
      }
      console.log(response);
    });


  }

  loadMapa(){

    let $mapa = document.getElementById("mapa3");

     let mapa = new google.maps.Map($mapa,{
      disableDefaultUI: true,
      center: {
        lat: this.coordenadas[0]['lat'],
        lng: this.coordenadas[0]['lng']
      },
      zoom: 14,

      });

      let marker = new google.maps.Marker({
        position: {
          lat: this.coordenadas[0]['lat'],
          lng: this.coordenadas[0]['lng']
        },
        map: mapa,
        animation: google.maps.Animation.DROP
      });

      let ubicacion = new google.maps.LatLng(this.coordenadas[0]['lat'], this.coordenadas[0]['lng'] );

      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({'latLng': ubicacion},(results,status)=>{
        if(status == 'OK'){
          console.log(results);  
          this.calle = 
          this.calle+ //Vacio
          results[0].address_components[1].long_name+" "+   //Numero de casa
          results[0].address_components[0].long_name;  //Calle
          this.calleSecundario =
          this.calleSecundario + //Secundario Vacio
          results[0].address_components[2].long_name+", "+       //Colonia
          results[0].address_components[3].long_name+", "+       //Ciudad
          results[0].address_components[4].short_name;       //Estado
        }
      });

  }


  toogleMenu(){
    this.menu.toggle();
  }

  editarProducto(id){
    this.navCtrl.navigateForward('/producto/'+id+"/editar/"+this.idNegocio);
  }

  salir(){
    this.navCtrl.navigateBack('/dashboard');
  }

  ubicacion(){
    this.presentModal();

  }

  ubicacionActual(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.coordenadas[0]['lat'] = resp.coords.latitude;
      this.coordenadas[0]['lng'] = resp.coords.longitude;
      this.calle = "";
      this.calleSecundario = "";
      this.callDistancia();
      this.loadMapa();
    });

  }

  async pedido(){
    let body = {
      idNegocio : this._carrito.idNegocio,
      productos: this._carrito.items,
      total: this.total,
      subtotal: this.subTotal,
      ubicacionCliente: this.coordenadas,
      status: 1
    };
    this.AfDb.database.ref("pedidos/4").set(body);
    const modal = await this.modalController.create({
      component: LoadingPage,
      cssClass: "loading",
      backdropDismiss: false
    });
    await modal.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ClienteUbicPage,
      cssClass: "ubicacion"
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    if(data.data){
      this.calle = "";
      this.calleSecundario = "";
      this.callDistancia();
      this.loadMapa();
    }
  }
  
}

