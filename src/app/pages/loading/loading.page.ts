import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  contador = 0;
  intervalo:any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {

     this.intervalo = setInterval(()=>{
      // this.contador = this.contador - 1;
       if(this.contador <= 0){
         clearInterval(this.intervalo);
         this.modalController.dismiss();      
       }
     },5000);
    
  }
}
