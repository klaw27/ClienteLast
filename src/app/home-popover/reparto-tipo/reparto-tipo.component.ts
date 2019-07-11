import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-reparto-tipo',
  templateUrl: './reparto-tipo.component.html',
  styleUrls: ['./reparto-tipo.component.scss'],
})
export class RepartoTipoComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverCtrl.dismiss();
  }
}
