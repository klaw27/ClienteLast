import { Component, OnInit, ElementRef,ViewChild  } from '@angular/core';
import { MenuController, NavController, ModalController, AlertController, ToastController } from '@ionic/angular';
import { CarritoService } from '../../services/carrito.service';
import { ClienteUbicPage } from '../cliente-ubic/cliente-ubic.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingPage } from '../loading/loading.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { EstoreService } from '../../services/estore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoadingController} from "@ionic/angular";
import { SPINNERS } from '@ionic/core/dist/types/components/spinner/spinner-configs';
import {IonSelect} from "@ionic/angular";

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
  
  @ViewChild('mySelect') selectRef: IonSelect;

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
  flagTerminal:any;
  flagEfectivo:any;
  flagTotal:any;
  customerOpenid:any ='';
  tarjetas: any;
  noCarrito:any;
  tarjetaSelect:any ='';
  cardCobro:any ='';
  deviceSessionId:any="";
  customerCargo:any ='';
  ChargeRequest:any ='';
  id:any;

  constructor(public menu: MenuController,
    public navCtrl: NavController,
    public _carrito: CarritoService,
    public _estore: EstoreService,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    public alertController: AlertController,
    private AfDb: AngularFireDatabase,
    public http: HttpClient,
    public toastCtrl: ToastController ,
    private loadingCtrl:LoadingController,private router : Router) { 

    }

  ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.noCarrito = this._carrito.items.length;  
    console.log("numero de productos en carrito INICIO" + this.noCarrito);
    this.metPago = null;
    //this.carrito = this._carrito.items;
    this.carrito = this._carrito.items.filter(v=>v.FK_idNegocio==this.id);
    console.log ("productos del carrito: ");
    console.log (this.carrito);
    this.ubicacionActual();
    this.deviceSessionId = OpenPay.deviceData.setup();
   console.log(this.deviceSessionId);
    //this.mostrarTarjetas();

  }



  callDistancia(){
    // let origin = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng'] );
    // let destination = new google.maps.LatLng(this.carrito[0]['latitud'], this.carrito[0]['longitud']);
    let destination= new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng'] );
    let origin  = new google.maps.LatLng(this.carrito[0]['latitud'], this.carrito[0]['longitud']);
    
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
        if ( this.total <350){

          this.flagTotal=1;
          console.log("se acepta efectivo " + this.total + "bandera " +  this.flagTotal)
        }else{
          
          this.flagTotal=0;
          console.log("NO efectivo " + this.total + "bandera " +  this.flagTotal)
        }
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
   

    console.log("metodo de pago" + this.metPago);
    if (this.metPago == null){
      this.flagCard=0;
      this.flagEfectivo=0;
      this.flagTerminal=0;
    }
    
    if (this.metPago == "Pagolinea"){
      this.flagCard=1;
      this.mostrarTarjetas();
    }else{
      this.flagCard=0;
    }
    if (this.metPago == "tarjeta"){
      this.flagTerminal=1;
      this.mostrarTarjetas();
    }else{
      this.flagTerminal=0;
    }
    if (this.metPago == "efectivo"){
      this.flagEfectivo=1;
      this.mostrarTarjetas();
    }else{
      this.flagEfectivo=0;
    }

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
    this.noCarrito = this._carrito.items.length;  
    console.log("numero de productos en carrito " + this.noCarrito);
    this.ionViewWillEnter();
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

  async RealizandoCobro() {

    
    if (this.metPago == "Pagolinea"){
      this.getCardSelect();
      if(this.cardCobro != ""){
        let loading = await this.loadingCtrl.create({
          message:"Tu pago se esta procesando...",
          duration:5000,
          showBackdrop:false,
          spinner: "lines"
        });
          loading.present();  
          setTimeout(()=>{
            loading.dismiss();
            this.AddCargo();
          },5000)
      }else{
          this.validationCard();
      }  
    }else{
        this.flagCard=0;
        this.pedido();
    }
  }

  async PedidoProcesado() {
          let loading = await this.loadingCtrl.create({
          message:"Guardando Pedido...",
          duration:3000,
          showBackdrop:false,
          spinner: "lines"
        });
          loading.present();  
          setTimeout(()=>{
            loading.dismiss();
            this.alertPedidoSave(); 
          },3000)
  }


  getCardSelect(){
    // console.log("tarjeta seleccionada: " + this.tarjetaSelect);
      if (this.tarjetaSelect != "" && this.tarjetaSelect != null  ){
       this.cardCobro= this.tarjetaSelect;
       console.log("tarjeta seleccionada: " + this.tarjetaSelect);
     }else{
       console.log("no se selecciono ninguna tarjeta")
       this.cardCobro="";
     }
     }

  async validationCard() {
    this.getCardSelect();
    const alert = await this.alertController.create({
      header: 'Informacion',
      message: 'Para continuar debe seleccionar o agregar una tarjeta ',
      buttons: [
        {
          text: 'Agregar nueva tarjeta',
          cssClass: 'secondary',
          handler: () => {
            console.log('agregar');
           this.navCtrl.navigateForward("/add-card");
          }
        },
        {
          text: 'Seleccionar Tarjeta',
          cssClass: 'secondary',
          handler: () => {
            console.log('seleccionar');
            this.selectRef.open();
          }
        },
      ]
    });

    await alert.present();
  }
  
  AddCargo(){
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
         console.log(data);
         this.pedido();
       }, 
    error => {
     console.log(error);
   }); 

  }


  async pedido(){
    
    if(this.metPago != null){
     
   console.log(this._carrito);
    let usuario = {...JSON.parse(localStorage.getItem('user'))};
    console.log(usuario);
    let hora = Date.now();
    let body = {
          hora: hora,
          //productos: this._carrito.items,
          productos: this.carrito,     
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
    // this.AfDb.database.ref("pedidos/"+this._carrito.idNegocio+"/"+hora).set(body);
    
    this.AfDb.database.ref("pedidos/"+this.id+"/"+hora).set(body);
    
   /* const modal = await this.modalController.create({
      component: LoadingPage,
      cssClass: "loading",
      backdropDismiss: false,
    });*/
      

    this.PedidoProcesado();
      //await modal.present();  
 
    //this.navCtrl.navigateForward("/dashboard");
  }else{
    console.log("debes seleccionar un metodo de pago");
    this.presentarToast("Debes seleccionar un metodo de pago");
  }
  }

  async presentarToast(mensaje) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: ClienteUbicPage,
      cssClass: "ubicacion",
    });
    await modal.present();
   // duration:5000
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

  async alertPedidoSave() {
   // this._carrito.deteleCarrito();
    //this.carrito  =  this._carrito.items;  
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.carrito = this._carrito.items.filter(v=>v.FK_idNegocio==this.id);
    this.navCtrl.navigateForward("/dashboard");
    const alert = await this.alertController.create({
      header: 'Operacion Exitosa',
      message: 'Hemos recibido tu pedido y sera entregado lo antes posible. ¡Gracias por confiar en ElEstore!',
      buttons: [
        {
          text: 'Ver pedido',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm aceptar');
           // this.navCtrl.navigateForward("/pedidos"+ "13");
            
        this.router.navigateByUrl(`/pedidos/` + "13");
             }
        },{
          text: 'Regresar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          this.navCtrl.navigateForward("/dashboard");
          }
        },
      ]
    });

    await alert.present();
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

