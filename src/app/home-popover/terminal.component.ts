import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {}
  
close(){
  this.popoverCtrl.dismiss();
}


}