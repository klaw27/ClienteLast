import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ModalController, AlertController } from '@ionic/angular';
import { CarritoService } from '../../services/carrito.service';
import { ClienteUbicPage } from '../cliente-ubic/cliente-ubic.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingPage } from '../loading/loading.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { EstoreService } from '../../services/estore.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

declare var google;
declare var OpenPay: any;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

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
  costEnvio = 0;
  coordenadas={};
  calle = "";
  calleSecundario = "";
  metPago="";
  idEliminar:any;
  flagCard:any;
  customerOpenid:any ='';
  tarjetas: any;
  customerCargo:any ='';
  ChargeRequest:any ='';
  tarjetaSelect:any ='';
  deviceSessionId:any="";

  constructor(public menu: MenuController,
    public navCtrl: NavController,
    public _carrito: CarritoService,
    public _estore: EstoreService,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    public alertController: AlertController,
    private AfDb: AngularFireDatabase,
    public http: HttpClient) { 

    }

  ionViewWillEnter() {
    
    this.carrito = this._carrito.items;
    console.log ("productos del carrito: ");
    console.log (this.carrito);
    this.ubicacionActual();
    this.deviceSessionId = OpenPay.deviceData.setup();
   console.log(this.deviceSessionId);
    //this.mostrarTarjetas();

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

        this.costEnvio = 25;
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

  
  getMetPago(){

    console.log(this.metPago);
    if (this.metPago == "Pagolinea"){
      this.flagCard=1;
      this.mostrarTarjetas();
    }else{
      this.flagCard=0;
    }
  }

  getCardSelect(){
    console.log(this.tarjetaSelect);
      }

  mostrarTarjetas() {
    //Obtener tarjetas con id de cliente
    this.customerOpenid = {...JSON.parse(localStorage.getItem('userOpen'))};
    let customer_id =  JSON.stringify(this.customerOpenid.id);
    console.log(this.customerOpenid.id);
    return this.http.post("https://localhost:5010/api/card/get",customer_id,httpOptions).subscribe(
      data => {
         console.log("Tarjetas guardadas del cliente");
         this.tarjetas = data;
         console.log(this.tarjetas);
       }, 
    error => {
     console.log(error);
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

  realizarPago(){
    console.log(this.metPago);
    if (this.metPago == "Pagolinea"){
      this.flagCard=1;
      this.AddCargo();
    }else{
      this.flagCard=0;
      this.pedido();
    }
  }


  
  async AddCargo(){
    //let customer_id =  JSON.stringify(this.customerCargo.id);
    console.log(this.customerCargo);
    this.ChargeRequest={
      Method: "card",
      SourceId: this.tarjetaSelect,
      Amount:this.total,
      Description: "Pago de servicio - ElEstore",
      DeviceSessionId: this.deviceSessionId,
      CustomerId: this.customerOpenid.id
    }
    console.log(this.ChargeRequest);

    return this.http.post("https://localhost:5010/api/charge/add",JSON.stringify(this.ChargeRequest),httpOptions).subscribe(
      data => {
         console.log("Pago realizado con exito");
         //this.tarjetas = data;
         console.log(data);
       }, 
    error => {
     console.log(error);
   }); 

  }


  async pedido(){
    
   console.log(this._carrito);
    let usuario = {...JSON.parse(localStorage.getItem('user'))};
    console.log(usuario);
    let hora = Date.now();
    let body = {
          hora: hora,
          productos: this._carrito.items,
          total: this.total,
          envio: this.costEnvio,
          subtotal: this.subTotal,
          ubicacionCliente: this.coordenadas,
          status: 1,
          metPago: this.metPago,
          cliente: {
            id_cliente: usuario['id_cliente'],
            apellidoPat: usuario['apellidoPat'],
            apellidoMat: usuario['apellidoMat'],
            nombre: usuario['nombre'],
            telefono: usuario['telefono'],
          }
    }
    console.log(body);
    this.AfDb.database.ref("pedidos/"+this._carrito.idNegocio+"/"+hora).set(body);
    const modal = await this.modalController.create({
      component: LoadingPage,
      cssClass: "loading",
      backdropDismiss: false,
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
    this.idEliminar = id;
    this.alertEliminar();
  //this.navCtrl.pop();
  }

    
  async alertEliminar() {
    const alert = await this.alertController.create({
      header: 'Confirme accion',
      message: '¿Esta seguro que desea eliminar el producto?',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm aceptar');
            this._carrito.eliminarItem(this.idEliminar);
            this.ionViewWillEnter();
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          this.navCtrl.navigateForward("/carrito");
          }
        },
      ]
    });

    await alert.present();
  }

}

