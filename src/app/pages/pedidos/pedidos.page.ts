import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  segment: string ="Entregados";

  items:any;
  //lista:any;
  Finalizado=[{nombre:"Tortas",foto:"FINALIZADO"},
          {nombre:"Carnitas",foto:"FINALIZADO"},
          {nombre:"Tortas `Las tortugas`",foto:"FINALIZADO"}];
  
  Pendiente=[{nombre:"Zapatos",foto:"PENDIENTE"},
          {nombre:"Vino",foto:"PENDIENTE.png"}];
  
  Cancelado=[{nombre:"Zapatos",foto:"CANCELADO"}];


  constructor() {
    this.Pendientes();
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


}

