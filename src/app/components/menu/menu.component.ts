import { Component, OnInit, Injectable } from '@angular/core';
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

export class MenuComponent implements OnInit {

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

  ngOnInit() {
    this.perfilMenu();
  }

  actualizacion(){
    this.perfilMenu();
  }

  perfilMenu(){
    let userId = localStorage.getItem('userId');
    let body={
      funcion: 'menu',
      userId: userId
    };
    this.estore.menuPerfil(body, 'perfil.php').subscribe(data=>{
      if(data['success']){
        this.usuario = data['usuario'];
        this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);
      }
      else{
        console.log("algo salio mal");
      }
    });
  }

  inicio(){
    this.router.navigateByUrl(`/dashboard`);
    this.cerrarMenu();

  }

  perfil(){
    this.router.navigateByUrl(`/perfil`);
    this.cerrarMenu();
  }

  logout(){
    this.menu.close();
    localStorage.removeItem('userId');
    this.router.navigateByUrl(`/login`);

  }

  cerrarMenu(){
    this.menu.close();

  }

}
