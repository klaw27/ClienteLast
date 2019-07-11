import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EstoreService } from '../../services/estore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  items:any = {
    id_producto:'',
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: ''
  };

  lista=[{id_producto:"",nombre:"Tortas",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"",nombre:"Carnitas",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"",nombre:"Tortas `Las tortugas`",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"", nombre:"Cerveza",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"}];

  criterio :any;
  empty: any = [];
  indexCount = 0;

  id:any;
  //productos: [];
  productos:any = [{
    id_producto:'',
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: ''
  }];


  constructor(public alertCtrl: AlertController,public estore : EstoreService,
    private activatedRoute: ActivatedRoute) { 
      //this.ionViewDidLoad();
     // this.iniBusqueda();
      }

    

  iniBusqueda(){
    this.items = this.lista;
}

  ngOnInit() {  
  }

 buscarEstore(event){
  console.log(this.productos);
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  let body = {
    id: this.id,
    funcion: "all"
  };
  console.log(body);
  this.estore.toolbarbusqueda(body, "toolbarsearch.php").subscribe(data=>{
    console.log(data);
    if(data['success']){
      this.productos = data['productos'];
      console.log(this.productos);
    }
  });

    this.criterio = event.target.value;
    console.log(this.criterio);

    if(this.criterio && this.criterio.trim() != ""){
      this.iniBusqueda();
      console.log(this.items);     

      this.items = this.items.filter((item) =>{
        return (item.nombre.toLowerCase().indexOf(this.criterio.toLowerCase()) >-1);
      })      
    }
    else{     
      this.indexCount = 1;
      console.log ("no capturo nada");
     this.items = this.empty;
    }
  }
  
  

}
