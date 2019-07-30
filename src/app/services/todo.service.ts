import { Injectable } from '@angular/core';
import {AngularFirestore , AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable } from "rxjs";
import {map} from "rxjs/operators";
import {PedidosI} from "../models/pedidos.interface";
import { Action } from 'rxjs/internal/scheduler/Action';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(public AfDb: AngularFireDatabase) {  }

public getPedidos(){
  return this.AfDb.list('pedidos/');

}

}
