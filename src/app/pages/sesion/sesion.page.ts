import { Component, OnInit, Renderer, ElementRef, ViewChildren} from '@angular/core';
import { EstoreService } from '../../services/estore.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { FormControl, ValidatorFn,AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss']
})

export class SesionPage implements OnInit {


  //myForm: FormGroup;

  password:any ='';
  correo:any = '';
  icono = "eye";
  passType = 'password';


  constructor(public estore: EstoreService, 
    private router : Router,
    public toastController: ToastController,
    private renderer: Renderer) { }
    

  ngOnInit() {
  }

  cambiarIcono(){
      this.icono = this.icono == 'eye' ? 'eye-off' : 'eye';
      this.passType = this.passType == 'password' ? 'text' : 'password';
    
  }


  iniciar(){
    let body= {
      password: this.password,
      correo: this.correo
    }

    let regEpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(this.correo == '' && this.password == '' ) 
    this.presentarToast('Capture su usuario y contraseña');
    else if (this.password == ''){
    this.presentarToast('Capture su contraseña');
    }else if (this.correo == ''){
    this.presentarToast('Capture su email');
    }else if( !this.correo.match(regEpr) ){
    this.presentarToast('Formato de correo invalido');
    } //SI SE CAPTURO TODA LA INFORMACION REALIZA EL LOGIN
    else{
    this.estore.iniciarSesion(body, 'ingresar.php').subscribe((data)=>{
      if(data['success'] != false){
        localStorage.setItem('user',JSON.stringify(data['user']));
        this.router.navigateByUrl(`/dashboard`);
      }
      else{
        this.presentarToast(data['msg']);
      }

    });
  }
    


  }
  getElementById(arg0: string) {
    throw new Error("Method not implemented.");
  }

  async presentarToast(error) {
    const toast = await this.toastController.create({
      message: 'Error: '+ error,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  enter(e){
    if(e.keyCode == 13){
      this.iniciar();
    }
  }

}
