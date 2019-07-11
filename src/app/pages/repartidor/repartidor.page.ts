import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ModalController, AlertController } from '@ionic/angular';
import { CarritoService } from '../../services/carrito.service';
import { ClienteUbicPage } from '../cliente-ubic/cliente-ubic.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingPage } from '../loading/loading.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { EstoreService } from '../../services/estore.service';
import { ActivatedRoute } from '@angular/router';

declare var google;

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.page.html',
  styleUrls: ['./repartidor.page.scss'],
})
export class RepartidorPage {

  carrito = [];
  idNegocio: any;
  subTotal = 0;
  total = 0;
  costEnvio = 0;
  coordenadas={};
  calle = "";
  calleSecundario = "";
  metPago="efectivo";

  constructor(public menu: MenuController,
    public navCtrl: NavController,
    public _carrito: CarritoService,
    public _estore: EstoreService,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    public alertCtrl: AlertController,
    private AfDb: AngularFireDatabase) { }

    ionViewWillEnter() {
      this.carrito = this._carrito.items;
      this.ubicacionActual();
    }

    callDistancia(){
      let origin = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng'] );
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
          let distancia = response.rows[0].elements[0].distance.value / 1000;
          distancia = Math.floor(distancia);
  
          this.costEnvio = 30;
          if(distancia - 2 > 0){
            let kmextra = distancia - 2;
            kmextra = kmextra * 3;
            this.costEnvio = this.costEnvio + kmextra;
          }
          this.total = 0;
          this.subTotal = 0;
          this.idNegocio = this._carrito.idNegocio;
          console.log(this.carrito);
          this.carrito.map(data=>{
            this.subTotal = this.subTotal + data['precioCarrito'];
          });
          this.total = this.subTotal + this.costEnvio;
  
          
        }
        console.log(response);
      });
  
  
    }
  
    loadMapa(){
  
      let $mapa = document.getElementById("mapa3");
  
       let mapa = new google.maps.Map($mapa,{
        disableDefaultUI: true,
        center: {
          lat: this.coordenadas['lat'],
          lng: this.coordenadas['lng']
        },
        zoom: 14,
  
        });
  
        let marker = new google.maps.Marker({
          position: {
            lat: this.coordenadas['lat'],
            lng: this.coordenadas['lng']
          },
          map: mapa,
          animation: google.maps.Animation.DROP
        });
  
        let ubicacion = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng'] );
  
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
        console.log(resp.coords.latitude);
        console.log(this.coordenadas);
        this.coordenadas['lat'] = resp.coords.latitude;
        this.coordenadas['lng'] = resp.coords.longitude;
        this.calle = "";
        this.calleSecundario = "";
        this.callDistancia();
        this.loadMapa();
      });
  
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: ClienteUbicPage,
        cssClass: "ubicacion"
      });
      await modal.present();
      const data = await modal.onDidDismiss();
      console.log(data);
      if(data.data['ubicacion']){
        this.coordenadas['lat'] = data.data['body']['lat'];
        this.coordenadas['lng'] = data.data['body']['lng'];
        this.calle = "";
        this.calleSecundario = "";
        this.callDistancia();
        this.loadMapa();
      }
    }
    
    eliminar(id){
      console.log(id);
    this._carrito.eliminarItem(id);
    //this.navCtrl.pop();
    }


    async Solicitar(){
        const alert = await this.alertCtrl.create({
          header: 'Confirmacion de Solicitud',
          message: '¡Tu repartidor va en camino!',
          buttons: [
            {
              text: 'Aceptar',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              this.navCtrl.navigateForward("/dashboard");
              }
            }
          ]
        });
        await alert.present();
    
    }
}
