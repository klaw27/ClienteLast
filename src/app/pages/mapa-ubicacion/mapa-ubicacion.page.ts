import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { EstoreService } from '../../services/estore.service';
declare var google;

@Component({
  selector: 'app-mapa-ubicacion',
  templateUrl: './mapa-ubicacion.page.html',
  styleUrls: ['./mapa-ubicacion.page.scss'],
})
export class MapaUbicacionPage  {

  mapa:any;
  marker:any;
  locacion:any;
  calle = "";
  ubicacion:any;
  load =  false;

  constructor(public navParamas: NavParams,
    public estore : EstoreService,
    public modalCtrl: ModalController) { }

  ionViewWillEnter() {
    this.locacion = this.navParamas.data.location;
    this.loadmap();
    console.log(this.mapa);
  }

  loadmap(){
    let $mapa = document.getElementById("mapa2");
    console.log($mapa);

     this.mapa = new google.maps.Map($mapa,{
      disableDefaultUI: true,
      center: {
        lat: this.locacion.lat(),
        lng: this.locacion.lng()
      },
      zoom: 18,

      });

      this.marker = new google.maps.Marker({
        position: {
          lat: this.locacion.lat(),
          lng: this.locacion.lng()
        },
        map: this.mapa,
        draggable: true,
        animation: google.maps.Animation.DROP
      });

      var infowindow = new google.maps.InfoWindow({
        content: "Arrastrame o da click en el mapa!"
      });

      infowindow.open(this.mapa, this.marker);

      let geocoder = new google.maps.Geocoder();

      let nombreUbic = geocoder.geocode({'latLng': this.locacion},(results,status)=>{
        if(status == 'OK'){
          this.ubicacion = this.locacion;
          this.calle = this.calle+""+results[0].address_components[1].long_name+" "+results[0].address_components[0].long_name+", "+results[0].address_components[2].long_name;
        }
      });

      this.mapa.addListener("click", event=>{
        console.log(event.latLng);
        this.mapa.panTo(event.latLng);
        this.marker.setPosition(event.latLng);
        geocoder.geocode({ 'latLng': event.latLng }, (results, status)=> {
          if(status == 'OK'){
            this.calle = "";
            this.ubicacion = event.latLng;
            this.calle = this.calle+""+results[0].address_components[1].long_name+" "+results[0].address_components[0].long_name+", "+results[0].address_components[2].long_name;
          }
        });
      });

      this.marker.addListener("dragend", event=>{
        geocoder.geocode({ 'latLng': event.latLng }, (results, status)=> {
          if(status == 'OK'){
            this.calle = "";
            this.ubicacion = event.latLng;
            this.calle = this.calle+""+results[0].address_components[1].long_name+" "+results[0].address_components[0].long_name+", "+results[0].address_components[2].long_name;
          }
        });
        this.mapa.panTo(this.marker.getPosition());
        console.log(this.mapa.getBounds());

      });


    }

    guardar(){
      let body = {
        lat: this.ubicacion.lat(),
        lng: this.ubicacion.lng(),
        calle: this.calle,
        userId: localStorage.getItem('userId'),
      }

      this.load = true;

      this.estore.actualizarPerfil(body, 'perfil.php').subscribe(data=>{
        if(data['success']){
          let ubicacion = [{
            lat: body.lat,
            lng: body.lng
          }];
          localStorage.setItem('ubicacion', JSON.stringify(ubicacion));
          this.modalCtrl.dismiss({
            ubicacion: true
          });

          this.load = false;

        }
      });

      console.log(body);

    }

}
