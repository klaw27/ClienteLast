import { Component, OnInit } from '@angular/core';
import { EstoreService } from '../../services/estore.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  password:any ='';
  correo:any = '';

  constructor(public estore: EstoreService, 
    private router : Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  iniciar(){
    let body= {
      correo: this.correo,
      password: this.password
    }

    this.estore.iniciarSesion(body, 'ingresar.php').subscribe((data)=>{
      if(data['success'] != false){
        localStorage.setItem('userId',data['userId']);
        this.router.navigateByUrl(`/dashboard`);
      }
      else{
        this.presentarToast(data['msg']);
      }

    });


  }

  async presentarToast(error) {
    const toast = await this.toastController.create({
      message: 'Error, '+error,
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
