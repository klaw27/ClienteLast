import { Injectable } from '@angular/core';
import {AngularFirestore , AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable } from "rxjs";
import {map} from "rxjs/operators";
import {PedidosI} from "../models/pedidos.interface";
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   // private todosColletion: AngularFirestoreCollection <PedidosI>;
   // private todos: Observable <PedidosI[]>;

  constructor( db:AngularFirestore) { 
  /*  this.todosColletion = db.collection<PedidosI>("todos");
    this.todos = this.todosColletion.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));*/
   }


  //Metodos para pedidos

  /*pedidoDetalle(){
    return this.todos;
  }
  pedidosCliente(id:string){
    return this.todosColletion.doc<PedidosI>(id).valueChanges();
  }

  pedidosCancelar(todo: PedidosI, id:string){
    return this.todosColletion.doc(id).update(todo);
  }
*/

}
