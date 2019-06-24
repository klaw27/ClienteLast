import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstoreService } from '../../services/estore.service';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {

  titulo: any;
  locales = [];
  carrito: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    public estore: EstoreService,
    public _carrito: CarritoService) { }

  ionViewDidEnter() {
    if (this._carrito.items.length != 0) this.carrito = true;
  }

  ngOnInit() {
    console.log(this.locales);
    this.titulo = this.activatedRoute.snapshot.paramMap.get('id');
    let body = {
      categoria: this.titulo,
      funcion: 'all'
    }
    debugger
    this.estore.locales(body, "negocio.php").subscribe(data => {
      debugger
      console.log(data);
      this.locales = data['negocio'];
      console.log(this.locales);
    });
  }

  salir() {
    this.navCtrl.navigateBack('/dashboard');
  }

  menu(id) {
    this.navCtrl.navigateForward('/local-menu/' + id);
  }

  goCarrito() {
    this.navCtrl.navigateForward('/carrito');
  }


}
