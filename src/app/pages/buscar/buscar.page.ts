import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { EstoreService } from '../../services/estore.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
 itemsflag: [];
 itemsflagNeg: [];
 // prod: [];


  items:any = {
    id_producto:'',
    nombre: '',
    descripcion: '',
    tiempopreparacion: '',
    precio: ''
  };

  itemsNeg:any = {
    id_negocio:'',
    nombre: '',
    callenumero: '',
    colonia: '',
    horaapertura: '',
    horacierre: ''
  };

  lista=[{id_producto:"",nombre:"Tortas",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"",nombre:"Carnitas",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"",nombre:"Tortas `Las tortugas`",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"},
  {id_producto:"", nombre:"Cerveza",descripcion:"tortas.png",cantidad:"tortas.png",precio:"200"}];

  criterio :any;
  indexCount = 0;
  errorCount: any =null;
  idNegocio:any;
  id:any;
  //productos: [];
  productos:any = [{
    id_producto:'',
    nombre: '',
    descripcion: '',
    tiempopreparacion: '',
    precio: ''
  }];
  negocios:any = [{
    id_negocio:'',
    nombre: '',
    callenumero: '',
    colonia: '',
    horaapertura: '',
    horacierre: ''
  }];


  constructor(public alertCtrl: AlertController,public estore : EstoreService,
    private activatedRoute: ActivatedRoute,public navCtrl: NavController,
    public alertController: AlertController,
    public http: HttpClient) { 
      //this.ionViewDidLoad();
     // this.iniBusqueda();
      }

    

  iniBusqueda(){
    //this.items = this.lista;
    this.items = this.productos;
    this.itemsNeg = this.negocios;
    this.itemsflag = this.productos;
    this.itemsflagNeg = this.negocios;
}

  ngOnInit() {  

       //productos
        console.log(this.productos);
        this.id = "0";
        let body = {
          id: this.id,
          funcion: "p"
        };
        console.log(body);

        //obtener productos
        this.http.post("http://localhost/api/dashbusqueda.php",body).subscribe(data => {
           console.log(data);
           if(data['success']){
            this.productos = data['productos'];
            console.log(this.productos);
          }
          }, error => {
           console.log(error);
         }); 
     
         //Obtener negocios
         console.log(this.negocios);
         this.id = "0";
          body = {
           id: this.id,
           funcion: "all"
         };
         console.log(body);
 
         this.http.post("http://localhost/api/dashbusqueda.php",body).subscribe(data => {
            console.log(data);
            if(data['success']){
             this.negocios = data['negocios'];
             console.log(this.negocios);
           }
           }, error => {
            console.log(error);
          });

      /*  console.log(this.productos);
        this.id = "0";
        let body = {
          id: this.id,
          funcion: "p"
        };
        console.log(body);
        this.estore.productos(body, "dashbusqueda.php").subscribe(data=>{
          console.log(data);
          if(data['success']){
            this.productos = data['productos'];
            console.log(this.productos);
          }
        });*/
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

      if(this.items.length === 0){
        this.itemsflag = null; 
      }
      
      this.itemsNeg = this.itemsNeg.filter((item) =>{
        return (item.nombre.toLowerCase().indexOf(this.criterio.toLowerCase()) >-1);  
        console.log(this.itemsNeg); 
      })

      if(this.itemsNeg.length === 0){
        this.itemsflagNeg = null; 
      }

         
    }
    else{     
      this.indexCount = 1;
      console.log ("no capturo nada");
     this.items = null;
     this.itemsNeg = null;
    this.itemsflag = null; 
    this.itemsflagNeg = null;
    }
  }
  

  agregarProducto(id){
   
    //Funcion editar
    console.log("id del producto: " + id);
    if ( localStorage.getItem('productos') ){
      this.items = JSON.parse( localStorage.getItem('productos') );
      this.idNegocio = JSON.parse( localStorage.getItem('idNegocio') );
    }

  
    let indicex;
    console.log("get item");
    console.log(this.items);

      let item = this.items.map((data,indice)=>{
      if(data.id_producto == id){
        //
        console.log("se encontro producto"); 
        ///this.alertEditar();
        console.log(indice);
        indicex = indice;
         //return indice;
      }
    });
     // return this.items[item[0]];
     //return this.items[item[indicex]];
    
     if(indicex >=0){
      console.log("el producto ya existe en carrito")
        this.alertEditar();
        this.navCtrl.navigateForward('/producto/'+id+"/editar"+"/"+this.id);
        return this.items[item[indicex]];
     }else {
      console.log("No existe en carrito");
      this.navCtrl.navigateForward('/producto/'+id+"/agregar"+"/"+this.id);
     }


      }




  menu(id) {
    this.navCtrl.navigateForward('/local-menu/' + id);
  }


  
  async alertEditar() {
    const alert = await this.alertController.create({
      header: 'Informacion',
      message: 'El producto ya existe en el carrito ¿Desea modificar la cantidad?',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm aceptar');
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          this.navCtrl.navigateForward("/buscar");
          }
        },
      ]
    });

    await alert.present();
  }

}
