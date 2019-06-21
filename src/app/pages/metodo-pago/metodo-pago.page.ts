import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { HomePopoverComponent } from 'src/app/home-popover/home-popover.component';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.page.html',
  styleUrls: ['./metodo-pago.page.scss'],
})
export class MetodoPagoPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }




async presentPopover(event){
  const popover = await this.popoverCtrl.create({
    component: HomePopoverComponent,
    event
    });
  return await popover.present();
}
 

}
