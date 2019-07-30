import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidosI } from 'src/app/models/pedidos.interface';
import { TodoService } from 'src/app/services/todo.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})



export class PedidosPage implements OnInit {
 
  
  peds: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  pedidosFinal: [];

  count: Observable<number>;


  todos$: AngularFireList<any[]>;
  segment: string ="Entregados";

  items:any;
  //lista:any;
  Finalizado=[{nombre:"Tortas",foto:"FINALIZADO"},
          {nombre:"Carnitas",foto:"FINALIZADO"},
          {nombre:"Tortas `Las tortugas`",foto:"FINALIZADO"}];
  
  Pendiente=[{nombre:"Zapatos",foto:"PENDIENTE"},
          {nombre:"Vino",foto:"PENDIENTE.png"}];
  
  Cancelado=[{nombre:"Zapatos",foto:"CANCELADO"}];


  //constructor(public navCtrl: NavController) {
   
  // Eliminar si causa error 
  constructor(public navCtrl: NavController, private todoService: TodoService, private AfDb: AngularFireDatabase) {
    this.Pendientes();
    
  
  this.itemsRef = AfDb.list('pedidos/');

    this.peds = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.peds.subscribe(res => console.log(res));
    //this.peds.subscribe(res => console.log(res.filter(x => x.key== "77")));

}

  ngOnInit() {
  }

  Pendientes(){ 
    this.items = this.Pendiente;
  }

  Finalizados(){ 
    this.items = this.Finalizado;
  }

  Cancelados(){ 
    this.items = this.Cancelado;
  }

  goCarrito(){
    this.navCtrl.navigateForward('/carrito');
  }
  
  goBuscar(){
    this.navCtrl.navigateForward("/buscar");
  }



}

