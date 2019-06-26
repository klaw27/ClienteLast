import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient } from '@angular/common/http';
import { MenuController, ToastController } from '@ionic/angular';
import { EstoreService } from 'src/app/services/estore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data:any;
  password:any ='';
  correo:any = '';
  icono = "eye";
  passType = 'password';

  constructor(private fb: Facebook,
    private http: HttpClient,
    private googlePlus: GooglePlus,
    public toastController: ToastController,
    public estore: EstoreService,  
    private router : Router,
    public menu : MenuController) { 
    }

    ionViewWillEnter(){
      this.menu.enable(true);
    }

  ngOnInit() {
  }

  facebooklog(){
    this.fb.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res);
      this.getData(res.authResponse.accessToken);
    }).
    catch(error=>{
      console.log(error);
    });
  }

  googleLogin(){
    this.googlePlus.login({})
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.error(err));
  }

  getData(access_token: string){
    let url = "https://graph.facebook.com/me?fields=id,location,gender,name,last_name,email&access_token="+access_token;
    this.http.get(url).subscribe(data=>{
      this.data = JSON.stringify(data);
      console.log(data);
    });
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
