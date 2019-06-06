import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadmap();
  }

  loadmap(){
    let $mapa = document.getElementById("mapa");
    console.log($mapa);
    const mapa = new google.maps.Map($mapa,{
      disableDefaultUI: true,
      center: {
        lat: 20.686099,
        lng: -101.353188
      },
      zoom: 14,

      });

      const marker = new google.maps.Marker({
        position: {
          lat: 20.686099,
          lng: -101.353188
        },
        map: mapa,
        animation: google.maps.Animation.DROP
      });

      console.log(marker);

    }

}
