import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'sesion', loadChildren: './pages/sesion/sesion.module#SesionPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'carrito', loadChildren: './pages/carrito/carrito.module#CarritoPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'locales/:id', loadChildren: './pages/locales/locales.module#LocalesPageModule' },
  { path: 'local-menu/:id', loadChildren: './pages/local-menu/local-menu.module#LocalMenuPageModule' },
  { path: 'ubicacion/:id', loadChildren: './pages/ubicacion/ubicacion.module#UbicacionPageModule' },
  { path: 'producto/:id/:funcion/:negocio', loadChildren: './pages/producto/producto.module#ProductoPageModule' },
  { path: 'buscar', loadChildren: './pages/buscar/buscar.module#BuscarPageModule' },
  { path: 'cliente-ubic', loadChildren: './pages/cliente-ubic/cliente-ubic.module#ClienteUbicPageModule' },
  { path: 'mapa-ubicacion', loadChildren: './pages/mapa-ubicacion/mapa-ubicacion.module#MapaUbicacionPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
  { path: 'soporte', loadChildren: './pages/soporte/soporte.module#SoportePageModule' },
  { path: 'metodo-pago', loadChildren: './pages/metodo-pago/metodo-pago.module#MetodoPagoPageModule' },
  { path: 'pedidos', loadChildren: './pages/pedidos/pedidos.module#PedidosPageModule' },
  { path: 'tarjetas', loadChildren: './tarjetas/tarjetas.module#TarjetasPageModule' },
  { path: 'add-card', loadChildren: './pages/add-card/add-card.module#AddCardPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
