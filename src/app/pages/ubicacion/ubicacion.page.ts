import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EstoreService } from '../../services/estore.service';
declare var google;


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  id:any;
  local:any;
  hora:any;
  textoAbierto:string = "";

  constructor(public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    public estore: EstoreService) { }

  ngOnInit() {
    this.hora = new Date();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let body = {
      funcion: 'id',
      id_negocio: this.id
    }
    this.estore.locales(body,"negocio.php").subscribe(data=>{
      console.log(this.local);
      this.local = data['local'];
      this.local['latitud'] = parseFloat(this.local['latitud']);
      this.local['longitud'] = parseFloat(this.local['longitud']);
      this.abierto();
      setTimeout(()=>{
        this.loadmap();
      },0);
    });
  }

  abierto(){
    let horas = this.hora.getHours();
    let minutos = this.hora.getMinutes();
    let horaAperturaLocal = this.local['horaapertura'].split(':');
    let horaCierreLocal = this.local['horacierre'].split(':');
    let hoursApertura = horaAperturaLocal[0];
    let minutosApertura = horaAperturaLocal[1];
    let hoursCierre = horaCierreLocal[0];
    let minutosCierre = horaCierreLocal[1];
    if(hoursApertura == '0') hoursApertura = 24;
    if(hoursCierre == '0') hoursCierre = 24;
    if( horas > hoursApertura){
      this.horaCierre(horas,hoursCierre,minutos,minutosCierre);
    }
    //Si la hora es igual que la hora de apertura
    else if(horas == hoursApertura){
      if(minutos >= minutosApertura){
        //la misma funcion
        this.horaCierre(horas,hoursCierre,minutos,minutosCierre);
      }
      else{
        this.textoAbierto = "Abre pronto";
      }

    }
    else{
     this.textoAbierto = "Esta Cerrado";

    }

  }

  horaCierre(horas,hoursCierre, minutos, minutosCierre){
    if(horas < hoursCierre){
      this.textoAbierto = "Esta Abierto";
    }
    else if( horas == hoursCierre){
      if(minutos <= minutosCierre){
        this.textoAbierto = "Cierra Pronto";
      }
      else{
        this.textoAbierto = "Esta Cerrado";
      }

    }
    else{
      this.textoAbierto = "Esta Cerrado";

    }

  }

  loadmap(){
    let $mapa = document.getElementById("mapa");
    console.log($mapa);
    const mapa = new google.maps.Map($mapa,{
      center: {
        lat: this.local['latitud'],
        lng: this.local['longitud']
      },
      zoom: 18,

      });

      const marker = new google.maps.Marker({
        position: {
          lat: this.local['latitud'],
          lng: this.local['longitud']
        },
        map: mapa,
        animation: google.maps.Animation.DROP
      });

      console.log(marker);

    }

    salir(){
      this.navCtrl.pop();
      }
    }

