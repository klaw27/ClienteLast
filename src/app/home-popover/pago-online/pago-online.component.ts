import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pago-online',
  templateUrl: './pago-online.component.html',
  styleUrls: ['./pago-online.component.scss'],
})
export class PagoOnlineComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverCtrl.dismiss();
  }

}

