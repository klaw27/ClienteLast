import { Component, OnInit } from '@angular/core';
declare var OpenPay;

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
    OpenPay.setId('mzdtln0bmtms6o3kck8f');
    OpenPay.setApiKey('pk_f0660ad5a39f4912872e24a7a660370c');
    var deviceSessionId = OpenPay.deviceData.setup();
    console.log(deviceSessionId);
    OpenPay.setSandboxMode(true);
  }

  pagar(){
    OpenPay.token.extractFormAndCreate('customer-form', (response)=>{
      console.log(response);
    }, (response)=>{
      console.log(response);
    });
  }

}
