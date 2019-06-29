import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { EstoreService } from '../../services/estore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre:string = '';
  numero:string = '';
  correo:string = '';
  password:string = '';
  passVerficada:string = '';
  apellidoPat:string = "";
  apellidoMat:string = "";
  politica:boolean = false;
  icono = "eye";
  passType = 'password';
  icono2 = "eye";
  passType2 = 'password';

  constructor(public toastController: ToastController,
    public estore: EstoreService,
    private router : Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  cambiarIcono(pass){
    if(pass == 1){
      this.icono = this.icono == 'eye' ? 'eye-off' : 'eye';
      this.passType = this.passType == 'password' ? 'text' : 'password';
    }
    else{
      this.icono2 = this.icono2 == 'eye' ? 'eye-off' : 'eye';
      this.passType2 = this.passType2 == 'password' ? 'text' : 'password';
    }
    
  }

  async contrasena(){
    if(this.password == this.passVerficada){
      const toast = await this.toastController.create({
        message: 'Contraseñas correctas',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: 'Done',
        duration: 2000
      });
      toast.present();

    }
    else{
      const toast = await this.toastController.create({
        message: 'Contraseñas diferentes',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: 'Done',
        duration: 2000
      });
      toast.present();

    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'El usuario ya existe',
      message: 'Verifica tu correo.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  registrarse(){


    let regEpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regEpr2 = /^[a-zA-Z0-9-]*$/;
    let regEpr3 = /^[0-9-]/;

    if(this.nombre == '' && this.numero == '' && this.correo == '' && this.password == '' ) 
    this.presentToast('Todos los campos son obligatorios');
    else if (this.nombre == ''){
      this.presentToast('Debe capturar su nombre');
    }else if (this.apellidoPat == ''){
      this.presentToast('Debe capturar su apellido Paterno');
    }else if (this.apellidoMat == ''){
      this.presentToast('Debe capturar su apellido Materno');
    }else if (this.numero == ''){
      this.presentToast('Debe capturar su numero');
    }else if (this.correo == ''){
      this.presentToast('Debe capturar su correo');
    }else if (this.password == ''){
      this.presentToast('Debe capturar su password');
    }else if( !this.correo.match(regEpr) ){
    this.presentToast('Formato de correo invalido');
    }else if( !this.password.match(regEpr2)) {
      this.presentToast('El password debe de ser de 8 a 16 caracteres ');
    }else if( !this.numero.match(regEpr3)) {
      this.presentToast("El telefono solo debe contener numeros");
    }else if (this.politica == false){
      this.presentToast("Debe aceptar la politica de privacidad");
    }else if(this.password == this.passVerficada){

      let userId = Date.now();
      let body= {
        nombre: this.nombre,
        apellidoPat: this.apellidoPat,
        apellidoMat: this.apellidoMat,
        telefono: this.numero,
        correo: this.correo,
        password: this.password,
        userId: userId
      }
      this.estore.registrarUsuario(body, 'registrar.php').subscribe((data)=>{
        if(data['success'] == false){
          this.presentAlert();
        }
        else {
          localStorage.setItem('user',JSON.stringify(data['user']));
          this.router.navigateByUrl(`/dashboard`);
        }
      });
    }

    else{
      this.presentToast('Las contraseñas no son iguales');
    }
    
  }

}
