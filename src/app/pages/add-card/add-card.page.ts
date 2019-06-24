import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
 
  myForm: FormGroup;

  error_messages = {
    'email': [
      { type: "required", message: "El email es requerido"},
      { type: "minLength", message: "Minimo 6444444444444444444444444444444444444"},
      { type: "maxLength", message: "Maximo 9444444444444"},
    ],
  }

  constructor(public alertController: AlertController, private router : Router,
    public navCtrl: NavController,
    public fb: FormBuilder
    ){
      this.myForm = this.fb.group({
        numberCard: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{16}$/)]],
        titular: ['', [Validators.required]],
        vencimiento: ['', [Validators.required]],
        cvv: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,4}$/)]]
        //url: ['', [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
        //password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      });
     }

  ngOnInit() {
  }

  saveData(){
    console.log(JSON.stringify(this.myForm.value));
    this.addCard();
    this.router.navigateByUrl(`/tarjetas`);

  }

  async addCard() {
    const alert = await this.alertController.create({
      header: '!La tarjeta se agrego correctamente!'
      //message: '!La tarjeta se agrego correctamente!',
     // buttons: ['Aceptar', 'Cancelar']
    });

    await alert.present();
  }


}
