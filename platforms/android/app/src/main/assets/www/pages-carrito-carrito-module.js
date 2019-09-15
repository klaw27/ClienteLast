(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carrito-carrito-module"],{

/***/ "./src/app/pages/carrito/carrito.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.module.ts ***!
  \*************************************************/
/*! exports provided: CarritoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageModule", function() { return CarritoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrito.page */ "./src/app/pages/carrito/carrito.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cliente-ubic/cliente-ubic.page */ "./src/app/pages/cliente-ubic/cliente-ubic.page.ts");
/* harmony import */ var _cliente_ubic_cliente_ubic_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cliente-ubic/cliente-ubic.module */ "./src/app/pages/cliente-ubic/cliente-ubic.module.ts");
/* harmony import */ var _loading_loading_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loading/loading.page */ "./src/app/pages/loading/loading.page.ts");
/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loading/loading.module */ "./src/app/pages/loading/loading.module.ts");












var routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_6__["CarritoPage"]
    }
];
var CarritoPageModule = /** @class */ (function () {
    function CarritoPageModule() {
    }
    CarritoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_8__["ClienteUbicPage"],
                _loading_loading_page__WEBPACK_IMPORTED_MODULE_10__["LoadingPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _cliente_ubic_cliente_ubic_module__WEBPACK_IMPORTED_MODULE_9__["ClienteUbicPageModule"],
                _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingPageModule"]
            ],
            declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_6__["CarritoPage"]]
        })
    ], CarritoPageModule);
    return CarritoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/carrito/carrito.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"danger\">\r\n      <ion-buttons slot=\"start\" >\r\n        <ion-back-button (click)='salir()'></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Mi Carrito</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content padding>\r\n  <!--  <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>-->\r\n  \r\n    <div class=\"data principal\" *ngIf=\"carrito.length != 0\">\r\n    <ion-card class=\"pedido\">\r\n      <ion-card-header>\r\n        <div class=\"ubicacion\">\r\n          <div id=\"mapa3\"></div>\r\n          <div class=\"dirOpcion\">\r\n            <ion-label class=\"calle\">\r\n              <h6 class=\"titCalle\">{{calle}}</h6>\r\n              <p class=\"calleSec\">{{calleSecundario}}</p>\r\n            </ion-label>\r\n            <div class=\"direccion\">\r\n              <ion-button fill=\"clear\" (click)=\"ubicacion()\">\r\n                <ion-icon slot=\"start\" class=\"icono\" name=\"pin\"></ion-icon>\r\n                Cambiar ubicación\r\n              </ion-button>  \r\n              <ion-button fill=\"clear\" (click)=\"ubicacionActual()\">\r\n                <ion-icon slot=\"start\" class=\"icono\" name=\"navigate\"></ion-icon>\r\n                Ubicación actual\r\n              </ion-button>                    \r\n            </div>\r\n          </div>\r\n        </div>\r\n            <ion-card-title class=\"titulo\">Tu pedido</ion-card-title>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n              <ion-item class=\"platillo ion-activatable\"  lines=\"none\" *ngFor=\"let producto of carrito\">\r\n                  <ion-ripple-effect></ion-ripple-effect>\r\n                  <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n                    <img src=\"/assets/img/enchiladas.jpg\" onError= \"this.src='/assets/img/default_productos.png'\">\r\n                  </ion-thumbnail>\r\n                  <!-- <div class=\"contenidoPlatillo\" (click)=\"editarProducto(producto.id_producto)\"> -->\r\n                      <div class=\"contenidoPlatillo\" (click)=\"editarProducto(producto.id_producto)\">\r\n                  \r\n                    <ion-label>\r\n                      <h6 class=tituloPlatillo>{{producto.nombre}}</h6>\r\n                      <p>{{producto.descripcion}}</p>\r\n                      <p>Tiempo de preparacion: {{producto.tiempopreparacion}} Min.</p>\r\n                    </ion-label>\r\n                    <div>\r\n                        <p class=\"precio\"> {{producto.cantidadCarrito}} X ${{producto.precio}} MXN</p>\r\n                    </div>\r\n                  </div>\r\n                  <ion-icon name =\"trash\" slot = \"end\" (click)=\"eliminar(producto.id_producto)\"></ion-icon>\r\n              </ion-item>\r\n              \r\n              <div class=\"costo\">\r\n                <div>\r\n                  <span>Subtotal</span>\r\n                  <span>${{subTotal.toFixed(2)}}</span>\r\n                </div>\r\n                <div>\r\n                  <span>Costo de Envio</span>\r\n                  <span>${{costEnvio}}.00</span>\r\n                </div>\r\n                <div class=\"total\">\r\n                  <span>Total</span>\r\n                  <span>${{total.toFixed(2)}}</span>\r\n                </div>\r\n              </div>\r\n              <ion-item class=\"metPago\" *ngIf=\"flagTotal === 0\">\r\n                  <ion-label>Metodo de Pago</ion-label>\r\n                  <ion-select value=null placeholder =\"Seleccionar...\" [(ngModel)]=\"metPago\" (ionChange)=\"getMetPago()\" >\r\n                    <ion-select-option value=\"tarjeta\">Terminal</ion-select-option>                  \r\n                    <ion-select-option value=\"Pagolinea\">Pago en linea</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n              <ion-item class=\"metPago\" *ngIf=\"flagTotal === 1\">\r\n                <ion-label>Metodo de Pago</ion-label>\r\n                <ion-select value=null placeholder =\"Seleccionar...\" [(ngModel)]=\"metPago\" (ionChange)=\"getMetPago()\" >\r\n                  <ion-select-option value=\"efectivo\" >Efectivo</ion-select-option>\r\n                  <ion-select-option value=\"tarjeta\">Terminal</ion-select-option>                  \r\n                  <ion-select-option value=\"Pagolinea\">Pago en linea</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              \r\n              <div class=\"cards\" *ngIf=\"flagCard === 1\">\r\n              <ion-item class=\"customerCards\"  >\r\n                  <ion-label>Tarjetas Registradas</ion-label>\r\n                    <ion-select  #mySelect value=\"cardsList\" [(ngModel)]=\"tarjetaSelect\" (ionChange)=\"getCardSelect()\" >\r\n                  <ion-select-option *ngFor=\"let tarjeta of tarjetas\" value=\"{{tarjeta.id}}\">{{tarjeta.card_number}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              </div>\r\n              \r\n              <ion-label class=\"infopago\" *ngIf=\"flagTerminal === 1\">\r\n                  <ion-icon class=\"alert\" name=\"information-circle\"></ion-icon>\r\n                  Nuestros repartidores llevaran una terminal móvil. ¡Recuerda tener a la mano tu IFE y tarjeta bancaria!\r\n              </ion-label>\r\n              \r\n              <ion-label class=\"infopago\" *ngIf=\"flagEfectivo === 1\">\r\n                  <ion-icon class=\"alert\" name=\"information-circle\"></ion-icon>\r\n                  Paga al repartidor cuando te entregue tu mercancía. Monto máximo $350.00\r\n              </ion-label>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-button expand=\"full\" (click)=\"RealizandoCobro()\">Confirmar Pedido</ion-button>\r\n  </div>\r\n\r\n  <div class=\"nada principal\" *ngIf=\"carrito.length == 0\">\r\n \r\n      <ion-label class=\"tituloVacio\">\r\n        Aún no hay productos en el carrito\r\n      </ion-label>\r\n\r\n  </div>\r\n\r\n\r\n  <!--<ion-buttons class=\"atras\"> \r\n      <ion-button size='small' expand=\"full\" fill=\"clear\" class=\"boton\" (click)='salir()'>Atrás</ion-button>\r\n  </ion-buttons>-->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/carrito/carrito.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal {\n  height: 90%;\n  overflow: scroll;\n  display: flex;\n  align-items: center; }\n\n.ubicacion {\n  display: flex;\n  align-items: center; }\n\n#mapa3 {\n  height: 110px;\n  width: 100%; }\n\n.titCalle {\n  font-size: 1.2rem;\n  color: black;\n  margin-left: 15px; }\n\n.calleSec {\n  font-size: 1rem;\n  margin-left: 15px; }\n\n.direccion {\n  margin-top: 10px; }\n\n.icono {\n  font-size: 20px;\n  margin-right: 15px; }\n\n.tituloVacio {\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #000000;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 30px; }\n\n.data {\n  display: block; }\n\n.pedido {\n  --ion-item-background: white;\n  margin: 20px 0;\n  box-shadow: none; }\n\n.titulo {\n  font-size: 1.2rem;\n  font-weight: normal; }\n\n.platillo {\n  margin-bottom: 15px;\n  --ion-item-background-activated: rgb(255, 255, 255); }\n\n.thumbnail {\n  width: 90px;\n  height: 90px; }\n\n.contenidoPlatillo {\n  width: 100%; }\n\n.tituloPlatillo {\n  font-size: 16px; }\n\np {\n  font-size: 13px;\n  margin-top: 5px; }\n\n.precio {\n  font-size: .9rem; }\n\n.costo {\n  margin-top: 30px; }\n\n.costo div {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px; }\n\n.costo div span {\n  font-size: 1rem; }\n\n.total {\n  margin-top: 20px !important; }\n\n.total span {\n  color: black;\n  font-weight: 900; }\n\n.metPago {\n  --padding-start: 0;\n  margin-top: 25px;\n  border-top: 1px solid;\n  --border-style: none; }\n\n.atras {\n  margin-top: 15px; }\n\n.customerCards {\n  --padding-start: 0;\n  margin-top: 25px;\n  border-top: 1px solid;\n  --border-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2Fycml0by9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXENsaWVudGVGaW5hbFxcQ2xpZW50ZUxhc3Qvc3JjXFxhcHBcXHBhZ2VzXFxjYXJyaXRvXFxjYXJyaXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUluQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSw0QkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtQkFBbUI7RUFDbkIsbURBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwyQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixvQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2Fycml0by9jYXJyaXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY2lwYWx7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnViaWNhY2lvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuI21hcGEze1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0Q2FsbGV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FsbGVTZWN7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbn1cclxuXHJcbi5kaXJlY2Npb257XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbm97XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4udGl0dWxvVmFjaW97XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxufVxyXG5cclxuLmRhdGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBlZGlkb3tcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5wbGF0aWxsb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi50aHVtYm5haWx7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLmNvbnRlbmlkb1BsYXRpbGxve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXR1bG9QbGF0aWxsb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnByZWNpb3tcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn1cclxuXHJcbi5jb3N0b3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb3N0byBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNvc3RvIGRpdiBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udG90YWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvdGFsIHNwYW57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ubWV0UGFnb3tcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7IFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5hdHJhc3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b21lckNhcmRze1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDsgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/carrito/carrito.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.ts ***!
  \***********************************************/
/*! exports provided: CarritoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPage", function() { return CarritoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cliente-ubic/cliente-ubic.page */ "./src/app/pages/cliente-ubic/cliente-ubic.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var CarritoPage = /** @class */ (function () {
    function CarritoPage(menu, navCtrl, _carrito, _estore, modalController, activatedRoute, geolocation, alertController, AfDb, http, toastCtrl, loadingCtrl, router) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this._carrito = _carrito;
        this._estore = _estore;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.AfDb = AfDb;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.carrito = [];
        this.subTotal = 0;
        this.total = 0;
        this.costEnvio = 0;
        this.coordenadas = {};
        this.calle = "";
        this.calleSecundario = "";
        this.metPago = "";
        this.customerOpenid = '';
        this.tarjetaSelect = '';
        this.cardCobro = '';
        this.deviceSessionId = "";
        this.customerCargo = '';
        this.ChargeRequest = '';
    }
    CarritoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.noCarrito = this._carrito.items.length;
        console.log("numero de productos en carrito INICIO" + this.noCarrito);
        this.metPago = null;
        //this.carrito = this._carrito.items;
        this.carrito = this._carrito.items.filter(function (v) { return v.FK_idNegocio == _this.id; });
        console.log("productos del carrito: ");
        console.log(this.carrito);
        this.ubicacionActual();
        this.deviceSessionId = OpenPay.deviceData.setup();
        console.log(this.deviceSessionId);
        //this.mostrarTarjetas();
    };
    CarritoPage.prototype.callDistancia = function () {
        var _this = this;
        // let origin = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng'] );
        // let destination = new google.maps.LatLng(this.carrito[0]['latitud'], this.carrito[0]['longitud']);
        var destination = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng']);
        var origin = new google.maps.LatLng(this.carrito[0]['latitud'], this.carrito[0]['longitud']);
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC
        }, function (response, status) {
            if (status == "OK") {
                console.log(response);
                var distancia = response.rows[0].elements[0].distance.value / 1000;
                distancia = Math.floor(distancia);
                _this.costEnvio = 25;
                if (distancia - 2 > 0) {
                    var kmextra = distancia - 2;
                    kmextra = kmextra * 3;
                    _this.costEnvio = _this.costEnvio + kmextra;
                }
                _this.total = 0;
                _this.subTotal = 0;
                _this.idNegocio = _this._carrito.idNegocio;
                console.log(_this.carrito);
                _this.carrito.map(function (data) {
                    _this.subTotal = _this.subTotal + data['precioCarrito'];
                });
                _this.total = _this.subTotal + _this.costEnvio;
                if (_this.total < 350) {
                    _this.flagTotal = 1;
                    console.log("se acepta efectivo " + _this.total + "bandera " + _this.flagTotal);
                }
                else {
                    _this.flagTotal = 0;
                    console.log("NO efectivo " + _this.total + "bandera " + _this.flagTotal);
                }
            }
            console.log(response);
        });
    };
    CarritoPage.prototype.loadMapa = function () {
        var _this = this;
        var $mapa = document.getElementById("mapa3");
        var mapa = new google.maps.Map($mapa, {
            disableDefaultUI: true,
            center: {
                lat: this.coordenadas['lat'],
                lng: this.coordenadas['lng']
            },
            zoom: 14,
        });
        var marker = new google.maps.Marker({
            position: {
                lat: this.coordenadas['lat'],
                lng: this.coordenadas['lng']
            },
            map: mapa,
            animation: google.maps.Animation.DROP
        });
        var ubicacion = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng']);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': ubicacion }, function (results, status) {
            if (status == 'OK') {
                console.log(results);
                _this.calle =
                    _this.calle + //Vacio
                        results[0].address_components[1].long_name + " " + //Numero de casa
                        results[0].address_components[0].long_name; //Calle
                _this.calleSecundario =
                    _this.calleSecundario + //Secundario Vacio
                        results[0].address_components[2].long_name + ", " + //Colonia
                        results[0].address_components[3].long_name + ", " + //Ciudad
                        results[0].address_components[4].short_name; //Estado
            }
        });
    };
    CarritoPage.prototype.getMetPago = function () {
        console.log("metodo de pago" + this.metPago);
        if (this.metPago == null) {
            this.flagCard = 0;
            this.flagEfectivo = 0;
            this.flagTerminal = 0;
        }
        if (this.metPago == "Pagolinea") {
            this.flagCard = 1;
            this.mostrarTarjetas();
        }
        else {
            this.flagCard = 0;
        }
        if (this.metPago == "tarjeta") {
            this.flagTerminal = 1;
            this.mostrarTarjetas();
        }
        else {
            this.flagTerminal = 0;
        }
        if (this.metPago == "efectivo") {
            this.flagEfectivo = 1;
            this.mostrarTarjetas();
        }
        else {
            this.flagEfectivo = 0;
        }
    };
    CarritoPage.prototype.mostrarTarjetas = function () {
        var _this = this;
        //Obtener tarjetas con id de cliente
        this.customerOpenid = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, JSON.parse(localStorage.getItem('userOpen')));
        var customer_id = JSON.stringify(this.customerOpenid.id);
        console.log(this.customerOpenid.id);
        return this.http.post("https://localhost:5010/api/card/get", customer_id, httpOptions).subscribe(function (data) {
            console.log("Tarjetas guardadas del cliente");
            _this.tarjetas = data;
            console.log(_this.tarjetas);
        }, function (error) {
            console.log(error);
        });
    };
    CarritoPage.prototype.toogleMenu = function () {
        this.menu.toggle();
    };
    CarritoPage.prototype.editarProducto = function (id) {
        this.navCtrl.navigateForward('/producto/' + id + "/editar/" + this.idNegocio);
    };
    CarritoPage.prototype.salir = function () {
        this.noCarrito = this._carrito.items.length;
        console.log("numero de productos en carrito " + this.noCarrito);
        this.ionViewWillEnter();
        this.navCtrl.navigateBack('/dashboard');
    };
    CarritoPage.prototype.ubicacion = function () {
        this.presentModal();
    };
    CarritoPage.prototype.ubicacionActual = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(_this.coordenadas);
            _this.coordenadas['lat'] = resp.coords.latitude;
            _this.coordenadas['lng'] = resp.coords.longitude;
            _this.calle = "";
            _this.calleSecundario = "";
            _this.callDistancia();
            _this.loadMapa();
        });
    };
    CarritoPage.prototype.realizarPago = function () {
        console.log(this.metPago);
        if (this.metPago == "Pagolinea") {
            this.flagCard = 1;
            this.AddCargo();
        }
        else {
            this.flagCard = 0;
            this.pedido();
        }
    };
    CarritoPage.prototype.RealizandoCobro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.metPago == "Pagolinea")) return [3 /*break*/, 4];
                        this.getCardSelect();
                        if (!(this.cardCobro != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Tu pago se esta procesando...",
                                duration: 5000,
                                showBackdrop: false,
                                spinner: "lines"
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        loading_1.present();
                        setTimeout(function () {
                            loading_1.dismiss();
                            _this.AddCargo();
                        }, 5000);
                        return [3 /*break*/, 3];
                    case 2:
                        this.validationCard();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.flagCard = 0;
                        this.pedido();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CarritoPage.prototype.PedidoProcesado = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Guardando Pedido...",
                            duration: 3000,
                            showBackdrop: false,
                            spinner: "lines"
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                            _this.alertPedidoSave();
                        }, 3000);
                        return [2 /*return*/];
                }
            });
        });
    };
    CarritoPage.prototype.getCardSelect = function () {
        // console.log("tarjeta seleccionada: " + this.tarjetaSelect);
        if (this.tarjetaSelect != "" && this.tarjetaSelect != null) {
            this.cardCobro = this.tarjetaSelect;
            console.log("tarjeta seleccionada: " + this.tarjetaSelect);
        }
        else {
            console.log("no se selecciono ninguna tarjeta");
            this.cardCobro = "";
        }
    };
    CarritoPage.prototype.validationCard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getCardSelect();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Informacion',
                                message: 'Para continuar debe seleccionar o agregar una tarjeta ',
                                buttons: [
                                    {
                                        text: 'Agregar nueva tarjeta',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('agregar');
                                            _this.navCtrl.navigateForward("/add-card");
                                        }
                                    },
                                    {
                                        text: 'Seleccionar Tarjeta',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('seleccionar');
                                            _this.selectRef.open();
                                        }
                                    },
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CarritoPage.prototype.AddCargo = function () {
        var _this = this;
        //let customer_id =  JSON.stringify(this.customerCargo.id);
        console.log(this.customerCargo);
        this.ChargeRequest = {
            Method: "card",
            SourceId: this.tarjetaSelect,
            Amount: this.total,
            Description: "Pago de servicio - ElEstore",
            DeviceSessionId: this.deviceSessionId,
            CustomerId: this.customerOpenid.id
        };
        console.log(this.ChargeRequest);
        return this.http.post("https://localhost:5010/api/charge/add", JSON.stringify(this.ChargeRequest), httpOptions).subscribe(function (data) {
            console.log("Pago realizado con exito");
            console.log(data);
            _this.pedido();
        }, function (error) {
            console.log(error);
        });
    };
    CarritoPage.prototype.pedido = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, hora, body;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.metPago != null) {
                    console.log(this._carrito);
                    usuario = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, JSON.parse(localStorage.getItem('user')));
                    console.log(usuario);
                    hora = Date.now();
                    body = {
                        hora: hora,
                        //productos: this._carrito.items,
                        productos: this.carrito,
                        total: this.total,
                        envio: this.costEnvio,
                        subtotal: this.subTotal,
                        ubicacionCliente: this.coordenadas,
                        status: 1,
                        metPago: this.metPago,
                        cliente: {
                            id_cliente: usuario['id_cliente'],
                            apellidoPat: usuario['apellidoPat'],
                            apellidoMat: usuario['apellidoMat'],
                            nombre: usuario['nombre'],
                            telefono: usuario['telefono'],
                        }
                    };
                    console.log(body);
                    // this.AfDb.database.ref("pedidos/"+this._carrito.idNegocio+"/"+hora).set(body);
                    this.AfDb.database.ref("pedidos/" + this.id + "/" + hora).set(body);
                    /* const modal = await this.modalController.create({
                       component: LoadingPage,
                       cssClass: "loading",
                       backdropDismiss: false,
                     });*/
                    this.PedidoProcesado();
                    //await modal.present();  
                    //this.navCtrl.navigateForward("/dashboard");
                }
                else {
                    console.log("debes seleccionar un metodo de pago");
                    this.presentarToast("Debes seleccionar un metodo de pago");
                }
                return [2 /*return*/];
            });
        });
    };
    CarritoPage.prototype.presentarToast = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: mensaje,
                            position: 'bottom',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CarritoPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_4__["ClienteUbicPage"],
                            cssClass: "ubicacion",
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = _a.sent();
                        console.log(data);
                        if (data.data['ubicacion']) {
                            this.coordenadas['lat'] = data.data['body']['lat'];
                            this.coordenadas['lng'] = data.data['body']['lng'];
                            this.calle = "";
                            this.calleSecundario = "";
                            this.callDistancia();
                            this.loadMapa();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CarritoPage.prototype.eliminar = function (id) {
        console.log(id);
        this.idEliminar = id;
        this.alertEliminar();
        //this.navCtrl.pop();
    };
    CarritoPage.prototype.alertPedidoSave = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._carrito.deteleCarrito(this.id);
                        this.carrito = this._carrito.items;
                        //this.id = this.activatedRoute.snapshot.paramMap.get('id');
                        //  this.carrito = this._carrito.items.filter(v=>v.FK_idNegocio==this.id);
                        this.navCtrl.navigateForward("/dashboard");
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Operacion Exitosa',
                                message: 'Hemos recibido tu pedido y sera entregado lo antes posible. ¡Gracias por confiar en ElEstore!',
                                buttons: [
                                    {
                                        text: 'Ver pedido',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm aceptar');
                                            // this.navCtrl.navigateForward("/pedidos"+ "13");
                                            _this.router.navigateByUrl("/pedidos/" + "13");
                                        }
                                    }, {
                                        text: 'Regresar',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                            _this.navCtrl.navigateForward("/dashboard");
                                        }
                                    },
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CarritoPage.prototype.alertEliminar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirme accion',
                            message: '¿Esta seguro que desea eliminar el producto?',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm aceptar');
                                        _this._carrito.eliminarItem(_this.idEliminar);
                                        _this.ionViewWillEnter();
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.navCtrl.navigateForward("/carrito");
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"])
    ], CarritoPage.prototype, "selectRef", void 0);
    CarritoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrito',
            template: __webpack_require__(/*! ./carrito.page.html */ "./src/app/pages/carrito/carrito.page.html"),
            styles: [__webpack_require__(/*! ./carrito.page.scss */ "./src/app/pages/carrito/carrito.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"],
            _services_estore_service__WEBPACK_IMPORTED_MODULE_7__["EstoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], CarritoPage);
    return CarritoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-carrito-carrito-module.js.map