import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { EstoreService } from '../../services/estore.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class MenuComponent {

  usuario :any = {
    nombre: '',
    apellidoMat: '',
    apellidoPat: '',
    fotografia: ''
  }

  fotografia:any;

  constructor(private router : Router, 
    private menu: MenuController,
    public estore: EstoreService,
    private _sanitizer: DomSanitizer) {}

  actualizacion(){
    this.perfilMenu();
  }

  perfilMenu(){
    this.usuario = {...JSON.parse(localStorage.getItem('user'))};
    this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);
  }

  inicio(){
    this.router.navigateByUrl(`/dashboard`);
    this.cerrarMenu();

  }

  contacto(){
    this.router.navigateByUrl(`/contacto`);
    this.cerrarMenu();
  }

  perfil(){
    this.router.navigateByUrl(`/perfil`);
    this.cerrarMenu();
  }

  soporte(){
    this.router.navigateByUrl(`/soporte`);
    this.cerrarMenu();
  }

  metodosPago(){
    this.router.navigateByUrl(`/metodo-pago`);
    this.cerrarMenu();
  }


  logout(){
    this.menu.close();
    localStorage.removeItem('user');
    this.router.navigateByUrl(`/login`);

  }

  cerrarMenu(){
    this.menu.close();

  }

  pedidos(){
    //pasar id de cliente
    this.router.navigateByUrl(`/pedidos/` + "13");
    this.cerrarMenu();

  }

}
