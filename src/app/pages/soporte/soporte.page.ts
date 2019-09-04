import { Component, OnInit, Renderer } from '@angular/core';
import { EstoreService } from 'src/app/services/estore.service';
import { Router } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {


  nombre:any ='';
  correo:any = '';
  consulta:any = '';
  telefono:any = '';
  email:any = '';

  constructor( public estore: EstoreService,
    private router : Router,
    public toastController: ToastController,
   // private emailComposer: EmailComposer,
    public alertController: AlertController,
    private renderer: Renderer,public navCtrl: NavController) { }

  ngOnInit() {
  }

  Contactar() {
    let regEpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if(this.nombre == '' && this.correo == '' &&  this.consulta == '' &&  this.telefono == ''  ) {
    this.presentToast('Todos los campos son obligatorios');
    }else if (this.nombre == ''){
      this.presentToast('Debe capturar su nombre');
    }else if (this.telefono == ''){
      this.presentToast('Debe capturar su Telefono');
    }else if (this.correo == ''){
      this.presentToast('Debe capturar su correo');
    }else if (this.consulta == ''){
      this.presentToast('Debe capturar su consulta');
    }else if( !this.correo.match(regEpr) ){
      this.presentToast('Formato de correo invalido');
    } //SI SE CAPTURO TODA LA INFORMACION REALIZA EL LOGIN
    else{
      this.email= {
        nombre: this.nombre,
        correo: this.correo,
        consulta: this.consulta,
        telefono: this.telefono
            } 
      console.log(this.email);

      this.enviarCorreo();
      
    } 
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: "Error: " + mensaje,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  enviarCorreo() {
    this.estore.soporte(this.email,'soporte.php').subscribe(data => {
        this.alertEmailSend();  
       }, 
    error => {
     console.log(error);
   });
  }

  
  
  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }
  
  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }

  async alertEmailSend() {
    const alert = await this.alertController.create({
      header: 'Operacion Exitosa',
      message: 'Hemos recibido tu consulta, te contactaremos lo antes posible. ¡Gracias por confiar en ElEstore!',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm aceptar');
            this.navCtrl.navigateForward("/dashboard");
             }
        },
      ]
    });

    await alert.present();
  }

}
