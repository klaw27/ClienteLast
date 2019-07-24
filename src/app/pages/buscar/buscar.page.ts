import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { EstoreService } from '../../services/estore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
 itemsflag: [];
 // prod: [];


  items:any = {
    id_producto:'',
    nombre: '',
    descripcion: '',
    tiempopreparacion: '',
    precio: ''
  };

  lista=[{id_producto:"",nombre:"Tortas",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"",nombre:"Carnitas",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"",nombre:"Tortas `Las tortugas`",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"", nombre:"Cerveza",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"}];

  criterio :any;
  indexCount = 0;
  errorCount: any =null;

  id:any;
  //productos: [];
  productos:any = [{
    id_producto:'',
    nombre: '',
    descripcion: '',
    tiempopreparacion: '',
    precio: ''
  }];


  constructor(public alertCtrl: AlertController,public estore : EstoreService,
    private activatedRoute: ActivatedRoute,public navCtrl: NavController) { 
      //this.ionViewDidLoad();
     // this.iniBusqueda();
      }

    

  iniBusqueda(){
    //this.items = this.lista;
    this.items = this.productos;
    this.itemsflag = this.productos;
}

  ngOnInit() {  

       //productos
        console.log(this.productos);
        this.id = "77";
        let body = {
          id: this.id,
          funcion: "all"
        };
        console.log(body);
        this.estore.productos(body, "productos.php").subscribe(data=>{
          console.log(data);
          if(data['success']){
            this.productos = data['productos'];
            console.log(this.productos);
          }
        });
  }

 buscarEstore(event){

    this.criterio = event.target.value;
    console.log(this.criterio);

    if(this.criterio && this.criterio.trim() != ""){
      this.iniBusqueda();
      console.log(this.items);     

      this.items = this.items.filter((item) =>{
        return (item.nombre.toLowerCase().indexOf(this.criterio.toLowerCase()) >-1);  
        console.log(this.items); 
      })
         
    }
    else{     
      this.indexCount = 1;
      console.log ("no capturo nada");
     this.items = null;
     
    this.itemsflag = null;
    }
  }
  
  agregarProducto(id){
    this.navCtrl.navigateForward('/producto/'+id+"/agregar"+"/"+this.id);
  }


}
