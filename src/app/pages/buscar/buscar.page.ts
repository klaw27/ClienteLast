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
  lista=[{nombre:"Tortas"},
          {nombre:"Carnitas"},
          {nombre:"Tortas `Las tortugas`"},
          {nombre:"Cerveza"},];

  constructor(public alertCtrl: AlertController,public estore : EstoreService,
    private activatedRoute: ActivatedRoute,) { 
     this.iniBusqueda();

  }

  iniBusqueda(){ 
    this.items = this.lista;

}
  ngOnInit() {
    /*console.log(this.locales);
    this.titulo = this.activatedRoute.snapshot.paramMap.get('id');
    let body = {
      categoria: this.titulo,
      funcion: 'all'
    }
    this.estore.locales(body,"negocio.php").subscribe(data=>{
      console.log(data);
      this.locales = data['negocio'];
      console.log(this.locales);
    }); */


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
