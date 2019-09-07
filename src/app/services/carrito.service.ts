import { Injectable } from "@angular/core";
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items = [];
  productosPorNegocio = [];

  idNegocio:any;  


  constructor(public navCtrl: NavController) { 
    this.cargar_productos();
  }


  editarProducto(id){
    this.navCtrl.navigateForward('/producto/'+id+"/editar/"+this.idNegocio);
  }

  agregarProducto(id,item){

    let x = this.items.map((data,indice)=>{
      if(data['id_producto']==id){
        return indice;
      }
    });

    if(x>= [0]){    
      console.log("actualiza");
      
      //obtener los productos que ya hay
      this.actualizarItem(id,item);
     //this.editarProducto(id);
    }else{
      console.log("nuevo");

      this.items.push(item);
      this.guardar_productos();
    }
    console.log("productos actuales");
    console.log(this.items);

  }

  getItem(id){

    let indicex;
    console.log("get item");
    console.log(this.items);

      let item = this.items.map((data,indice)=>{
      if(data.id_producto == id){
        //
        console.log("se encontro producto"); 
        console.log(indice);
        indicex = indice;
         return indice;
      }
    });
     // return this.items[item[0]];
     this.guardar_productos();
     return this.items[item[indicex]];
 
  }

  


  actualizarItem(id,newData){
      
    //actualizar
    let item = this.items.map((data,indice)=>{
      if(data.id_producto == id){
        this.items[indice] = newData;
      }
    });
    this.guardar_productos();
  }

  eliminarItem(id){
    let item = this.items.map((data,indice)=>{
      if(data.id_producto == id){
        this.items.splice(indice,1);
      }
    });

    this.guardar_productos();

  }

  
  deteleCarrito(id){            
    this.items = this.items.filter(item=>item.FK_idNegocio!=id);     
    this.guardar_productos();
   
  }

  guardar_productos(){
    localStorage.setItem('productos', JSON.stringify(this.items));
  }

  guardar_idNegocio(){
    localStorage.setItem('idNegocio', JSON.stringify(this.idNegocio));
  }

  cargar_productos(){
    if ( localStorage.getItem('productos') ){
      this.items = JSON.parse( localStorage.getItem('productos') );
      this.idNegocio = JSON.parse( localStorage.getItem('idNegocio') );
    }
  }



  ////////////calculos

  
}
