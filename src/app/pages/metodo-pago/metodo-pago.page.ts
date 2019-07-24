import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { HomePopoverComponent } from 'src/app/home-popover/home-popover.component';
import { TerminalComponent } from 'src/app/home-popover/terminal/terminal.component';
import { PagoOnlineComponent } from 'src/app/home-popover/pago-online/pago-online.component';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.page.html',
  styleUrls: ['./metodo-pago.page.scss'],
})
export class MetodoPagoPage implements OnInit {

  constructor(public popoverCtrl: PopoverController,private navCtrl : NavController) { }

  ngOnInit() {
  }


async presentPopover(event){
  const popover = await this.popoverCtrl.create({
    component: HomePopoverComponent,
    event,
    translucent: true
    });
  return await popover.present();
}

async Terminal(event){
  const popover = await this.popoverCtrl.create({
    component: TerminalComponent,
    event,
    translucent: true
    });
  return await popover.present();
}

async PagoOnlineInfo(event){
  const popover = await this.popoverCtrl.create({
    component: PagoOnlineComponent,
    event,
    translucent: true
    });
  return await popover.present();
}



goCarrito(){
  this.navCtrl.navigateForward('/carrito');
}

goBuscar(){
  this.navCtrl.navigateForward("/buscar");
}
}
