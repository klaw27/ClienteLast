import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EstoreService } from 'ClienteLast/src/app/services/estore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  items:any;
  //lista:any;
  lista=[{nombre:"Tortas",foto:"tortas.png"},
          {nombre:"Carnitas",foto:"tortas.png"},
          {nombre:"Tortas `Las tortugas`",foto:"tortas.png"},
          {nombre:"Cerveza", foto:"tortas.png"}];


  constructor(public alertCtrl: AlertController,public estore : EstoreService,
    private activatedRoute: ActivatedRoute) { 
      //this.ionViewDidLoad();
     

/*para la BD
      let body = {
        categoria: "",
        funcion: 'all'
      }
      this.estore.locales(body,"negocio.php").subscribe(data=>{
        console.log(data);
        this.lista = data['negocio'];
        console.log(this.lista);
      });*/    
    this.iniBusqueda();
  }

  /*ionViewDidLoad(){ 
    this.estore.obtenerDatos()
    .suscribe((data)=>{this.lista + data;}, 
    (error)=>{console.log(error);})
    
    }*/
    

  iniBusqueda(){ 
    this.items = this.lista;

}
  ngOnInit() {
  }

  buscarEstore(event){
    const criterio = event.target.value;
    console.log(criterio);
    
    
    if(criterio && criterio.trim() != ""){
     
     this.items = this.items.filter((item) =>{
        return (item.nombre.toLowerCase().indexOf(criterio.toLowerCase()) >-1);
      })      
    }else {
      this.iniBusqueda();
    }
  }


}
