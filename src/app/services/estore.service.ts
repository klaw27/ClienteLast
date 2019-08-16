import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EstoreService {


  //server:string = 'http://ec2-13-57-42-231.us-west-1.compute.amazonaws.com/clienteApi/';
  server:string = 'http://ec2-52-53-191-68.us-west-1.compute.amazonaws.com/clienteApi/';
  //server:string = "http://localhost:8888/apiCliente/";
  serverData: string = "https://jsonplaceholder.typicode.com/users";

  constructor( private http: HttpClient) { 


  }


  registrarUsuario(body, file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }

  addPedidos(body, file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }

  iniciarSesion(body, file){
    return this.http.post(this.server+file,JSON.stringify(body));

  }

  verPerfil(body, file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }

  actualizarPerfil(body, file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }

  menuPerfil(body, file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }

  locales(body,file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }

  productos(body,file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }

  producto(body,file){
    return this.http.post(this.server+file,JSON.stringify(body));
  }


  soporte(body,file){
    return this.http.post("http://localhost/api/"+file,JSON.stringify(body));    
  }

  obtenerDatos(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
    }

    dashboard(body,file){
      return this.http.post(this.server+file,JSON.stringify(body));    
    }

    dashboardSub(body,file){
      return this.http.post(this.server+file,JSON.stringify(body));    
    }

    toolbarbusqueda(body,file){
      return this.http.post(this.server+file,JSON.stringify(body)); 
      }


      //url + archivo.php , body
}
