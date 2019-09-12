(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-repartidor-repartidor-module"],{

/***/ "./src/app/pages/repartidor/repartidor.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/repartidor/repartidor.module.ts ***!
  \*******************************************************/
/*! exports provided: RepartidorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepartidorPageModule", function() { return RepartidorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _repartidor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repartidor.page */ "./src/app/pages/repartidor/repartidor.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading/loading.module */ "./src/app/pages/loading/loading.module.ts");
/* harmony import */ var _cliente_ubic_cliente_ubic_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cliente-ubic/cliente-ubic.module */ "./src/app/pages/cliente-ubic/cliente-ubic.module.ts");
/* harmony import */ var _loading_loading_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loading/loading.page */ "./src/app/pages/loading/loading.page.ts");
/* harmony import */ var _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cliente-ubic/cliente-ubic.page */ "./src/app/pages/cliente-ubic/cliente-ubic.page.ts");












var routes = [
    {
        path: '',
        component: _repartidor_page__WEBPACK_IMPORTED_MODULE_6__["RepartidorPage"]
    }
];
var RepartidorPageModule = /** @class */ (function () {
    function RepartidorPageModule() {
    }
    RepartidorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_11__["ClienteUbicPage"],
                _loading_loading_page__WEBPACK_IMPORTED_MODULE_10__["LoadingPage"]
            ], imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _cliente_ubic_cliente_ubic_module__WEBPACK_IMPORTED_MODULE_9__["ClienteUbicPageModule"],
                _loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingPageModule"]
            ],
            declarations: [_repartidor_page__WEBPACK_IMPORTED_MODULE_6__["RepartidorPage"]]
        })
    ], RepartidorPageModule);
    return RepartidorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/repartidor/repartidor.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/repartidor/repartidor.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Solicita a tu Repartidor</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <!--<ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n        <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>-->\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n\r\n    <div class=\"data principal\">\r\n   <!--<h4 class=\"tit\">Solicita a tu Repartidor</h4>--> \r\n\r\n    \r\n    <div id=\"mapa3\"></div>\r\n\r\n    <ion-card class=\"pedido\">\r\n  \r\n      <ion-card-header>\r\n        <div class=\"ubicacion\">\r\n          <div class=\"dirOpcion\">\r\n            <ion-label class=\"calle\" >\r\n              <h6 class=\"titori\">ORIGEN:</h6>\r\n             <ion-input class=\"titdest\" disabled  [(ngModel)]='usuario.nombre + \" \" + usuario.apellidoPat + \" \" +  usuario.apellidoMat'></ion-input> \r\n             <ion-input class=\"titdest\" disabled  [(ngModel)]='usuario.telefono'></ion-input> \r\n              <h6 class=\"titCalle\">{{calle}}</h6>\r\n              <p class=\"calleSec\">{{calleSecundario}}</p>\r\n            </ion-label> \r\n            <div class=\"direccion\">\r\n              <ion-button fill=\"clear\" (click)=\"ubicacion()\">\r\n                <ion-icon slot=\"start\" class=\"icono\" name=\"pin\"></ion-icon>\r\n                Cambiar ubicación\r\n              </ion-button>  \r\n              <ion-button fill=\"clear\" (click)=\"ubicacionActual()\">\r\n                <ion-icon slot=\"start\" class=\"icono\" name=\"navigate\"></ion-icon>\r\n                Ubicación actual\r\n              </ion-button>                    \r\n            </div>\r\n            <!--<div id=\"mapa3\"></div>-->\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ubicacion\">\r\n            <div class=\"dirOpcion\">\r\n              <ion-label class=\"calle\">\r\n                <h6 class=\"titori\">DESTINO: </h6>\r\n                <ion-item>\r\n                <ion-input class=\"titdest\" type=\"text\" placeholder=\"Nombre destino\" [(ngModel)]='dest_nombre'></ion-input> \r\n              </ion-item>\r\n                <ion-item>\r\n                  <ion-input class=\"titdest\" type=\"number\" placeholder=\"Telefono destino\"[(ngModel)]='dest_tel'></ion-input> \r\n                </ion-item>  \r\n                 <!-- <h6 class=\"titCalle\">{{nomDestino}}</h6>\r\n                <h6 class=\"titCalle\">{{telDestino}}</h6>-->\r\n                <h6 class=\"titCalle\">{{calleDest}}</h6>\r\n                <p class=\"calleSec\">{{calleSecundarioDest}}</p>\r\n              </ion-label>\r\n              <div class=\"direccion\">\r\n                <ion-button fill=\"clear\" (click)=\"ubicacionDestino()\">\r\n                  <ion-icon slot=\"start\" class=\"icono\" name=\"pin\"></ion-icon>\r\n                  Indicar ubicación destino\r\n                </ion-button>                    \r\n              </div>\r\n            </div>\r\n          </div>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>         \r\n              <h6 class=\"titori\">Resumen del pedido:</h6>\r\n                  Instrucciones: \r\n                  <ion-item><ion-textarea rows=\"4\" [(ngModel)]='instrucciones' class=\"input\" placeholder=\"Captura tus indicaciones aqui...\" type=\"text\"></ion-textarea>\r\n                  </ion-item>\r\n              <div class=\"costo\">\r\n                  <div>\r\n                      <span>Distancia Total (Kilometros)</span>\r\n                      <span>{{distancia}} km</span>\r\n                    </div>\r\n                <div>\r\n                  <span>Costo de envio (primeros 3 Kilometros)</span>\r\n                  <span>${{envio3km.toFixed(2)}}</span>\r\n                </div>\r\n                <div>\r\n                    <span>Kilometro adicional: {{Nokmextra}} km</span>\r\n                    <!--<span>${{subTotal.toFixed(2)}}.00</span>-->\r\n                    <span>${{kmextra.toFixed(2)}}</span>\r\n                  </div>\r\n                <div class=\"total\">\r\n                  <span>Total del Envio</span>\r\n                  <span>${{envioTotal.toFixed(2)}}</span>\r\n                </div>\r\n              </div>\r\n\r\n              <ion-item class=\"metPago\">\r\n                <ion-label>¿Quien Paga?</ion-label>\r\n                <ion-select value=\"repartidor\" [(ngModel)]=\"quienPaga\" (ionChange)=\"pagoCliente()\">\r\n                  <ion-select-option selected value=\"repartidor\">Repartidor</ion-select-option>\r\n                  <ion-select-option value=\"cliente\">Cliente</ion-select-option>           \r\n                </ion-select>\r\n              </ion-item>\r\n\r\n              <div class=\"cards\" *ngIf=\"flagMetodos === 1\">\r\n                <ion-item class=\"metPago\">\r\n                    <ion-label>Metodo de Pago</ion-label>\r\n                    <!--<ion-select value=\"efectivo\" [(ngModel)]=\"metPago\" (ionChange)=\"mostrarTarjetas($event)\">-->\r\n                    <ion-select value=\"efectivo\" [(ngModel)]=\"metPago\" (ionChange)=\"getMetPago()\">\r\n                      <ion-select-option selected value=\"efectivo\">Efectivo</ion-select-option>\r\n                      <ion-select-option value=\"tarjeta\">Terminal</ion-select-option>                  \r\n                      <ion-select-option value=\"Pagolinea\">Pago en linea</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n              </div>\r\n\r\n                  <div class=\"cards\" *ngIf=\"flagCard === 1\">\r\n                      <ion-item class=\"metPago\"  >\r\n                          <ion-label>Tarjetas Registradas</ion-label>\r\n                       <!-- <ion-select value=\"cardsList\" [(ngModel)]=\"tarjetaSelect\" (ionChange)=\"getCardSelect()\" >-->\r\n                            <ion-select  #mySelect value=\"cardsList\" [(ngModel)]=\"tarjetaSelect\" (ionChange)=\"getCardSelect()\" >\r\n                          <ion-select-option *ngFor=\"let tarjeta of tarjetas\" value=\"{{tarjeta.id}}\">{{tarjeta.card_number}}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                   </div>\r\n            \r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-button expand =\"block\" (click)=\"validarDestino()\">Solicitar Repartidor</ion-button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/repartidor/repartidor.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/repartidor/repartidor.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".principal {\n  height: 90%;\n  overflow: scroll;\n  display: flex;\n  align-items: center; }\n\n.ubicacion {\n  display: flex;\n  align-items: center; }\n\n#mapa3 {\n  height: 110px;\n  width: 100%; }\n\n#mapa4 {\n  height: 110px;\n  width: 100%; }\n\n.titCalle {\n  font-size: 13px;\n  color: black;\n  margin-left: 8px; }\n\n.titdest {\n  font-size: 13px;\n  color: black;\n  height: 20px; }\n\n.calleSec {\n  font-size: 13px;\n  margin-left: 8px; }\n\n.icono {\n  font-size: 15px;\n  margin-right: 15px; }\n\n.iconoEdit {\n  color: #6ba1d3;\n  font-size: 15px; }\n\n.tituloVacio {\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #000000;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 30px; }\n\n.data {\n  display: block; }\n\n.pedido {\n  --ion-item-background: white;\n  margin: 20px 0;\n  box-shadow: none; }\n\n.titulo {\n  font-size: 1.2rem;\n  font-weight: normal; }\n\n.platillo {\n  margin-bottom: 15px;\n  --ion-item-background-activated: rgb(255, 255, 255); }\n\n.thumbnail {\n  width: 90px;\n  height: 90px; }\n\n.contenidoPlatillo {\n  width: 100%; }\n\n.tituloPlatillo {\n  font-size: 16px; }\n\np {\n  font-size: 13px;\n  margin-top: 5px; }\n\n.precio {\n  font-size: .9rem; }\n\n.costo {\n  margin-top: 30px; }\n\n.costo div {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px; }\n\n.costo div span {\n  font-size: 1rem; }\n\n.total {\n  margin-top: 20px !important; }\n\n.total span {\n  color: black;\n  font-weight: 900; }\n\n.metPago {\n  --padding-start: 0;\n  margin-top: 25px;\n  border-top: 1px solid;\n  --border-style: none; }\n\n.atras {\n  margin-top: 15px; }\n\n.tit {\n  text-align: left; }\n\n.titori {\n  font-size: 1.2rem;\n  color: black;\n  font-weight: bold; }\n\n.input {\n  font-size: 11px;\n  color: black; }\n\na {\n  font: 12px sans-serif; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYXJ0aWRvci9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXENsaWVudGVGaW5hbFxcQ2xpZW50ZUxhc3Qvc3JjXFxhcHBcXHBhZ2VzXFxyZXBhcnRpZG9yXFxyZXBhcnRpZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFFWixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBT3BCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBS25CO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLDRCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1CQUFtQjtFQUNuQixtREFBZ0MsRUFBQTs7QUFHcEM7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLDJCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixvQkFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBRVosaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFLaEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBhcnRpZG9yL3JlcGFydGlkb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udWJpY2FjaW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4jbWFwYTN7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNtYXBhNHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdENhbGxle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4udGl0ZGVzdHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhbGxlU2Vje1xyXG4gICAgZm9udC1zaXplOiAgMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uaWNvbm97XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uaWNvbm9FZGl0e1xyXG4gICAgY29sb3I6ICM2YmExZDM7IFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4udGl0dWxvVmFjaW97XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxufVxyXG5cclxuLmRhdGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBlZGlkb3tcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5wbGF0aWxsb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi50aHVtYm5haWx7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLmNvbnRlbmlkb1BsYXRpbGxve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXR1bG9QbGF0aWxsb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnByZWNpb3tcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn1cclxuXHJcbi5jb3N0b3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb3N0byBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNvc3RvIGRpdiBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udG90YWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvdGFsIHNwYW57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ubWV0UGFnb3tcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7IFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5hdHJhc3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi50aXR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0b3Jpe1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgLy8gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5he1xyXG4gICAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmljb25jYXJyaXRve1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pY29uYnVzY2Fye1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/repartidor/repartidor.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/repartidor/repartidor.page.ts ***!
  \*****************************************************/
/*! exports provided: RepartidorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepartidorPage", function() { return RepartidorPage; });
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
var RepartidorPage = /** @class */ (function () {
    function RepartidorPage(menu, navCtrl, _carrito, _estore, modalController, activatedRoute, geolocation, alertCtrl, toastController, http, loadingCtrl, router, AfDb) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this._carrito = _carrito;
        this._estore = _estore;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.AfDb = AfDb;
        this.carrito = [];
        this.subTotal = 0;
        this.total = 0;
        this.costEnvio = 0;
        this.coordenadas = {};
        this.coordenadasDes = {};
        this.calle = "";
        this.calleSecundario = "";
        this.calleDest = "";
        this.calleSecundarioDest = "";
        this.metPago = "efectivo";
        this.nomDestino = "";
        this.telDestino = "";
        this.distancia = 0;
        this.kmextra = 0;
        this.Nokmextra = 0;
        this.envio3km = 0;
        this.envioTotal = 0;
        this.clientName = '';
        this.clientTel = '';
        this.usuario = {
            nombre: undefined,
            email: undefined,
            razonSocial: undefined,
            formaPago: undefined,
            telefono: undefined,
            apellidoMat: undefined,
            apellidoPat: undefined,
            calle: undefined,
            colonia: undefined,
            numeroCalle: undefined,
            fotografia: undefined
        };
        this.dest_nombre = '';
        this.dest_tel = '';
        this.instrucciones = '';
        this.tarjetaSelect = '';
        this.cardCobro = '';
        this.customerOpenid = '';
        this.deviceSessionId = "";
        this.customerCargo = '';
        this.ChargeRequest = '';
    }
    RepartidorPage.prototype.ngOnInit = function () {
        this.usuario = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, JSON.parse(localStorage.getItem('user')));
        this.clientName = this.usuario['nombre'];
        this.clientTel = this.usuario['telefono'];
        console.log(this.usuario['nombre']);
        console.log(this.usuario['telefono']);
    };
    RepartidorPage.prototype.ionViewWillEnter = function () {
        //this.carrito = this._carrito.items;
        this.ubicacionActual();
        this.deviceSessionId = OpenPay.deviceData.setup();
        console.log(this.deviceSessionId);
    };
    RepartidorPage.prototype.callDistancia = function () {
        var _this = this;
        var origin = new google.maps.LatLng(this.coordenadas['lat'], this.coordenadas['lng']);
        var destination = new google.maps.LatLng(this.coordenadasDes['latitud'], this.coordenadasDes['longitud']);
        //console.log("direccion del destino " + destination);
        //let destination = new google.maps.LatLng(this.carrito[0]['latitud'], this.carrito[0]['longitud']);
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC
        }, function (response, status) {
            if (status == "OK") {
                console.log(response);
                _this.distancia = response.rows[0].elements[0].distance.value / 1000;
                _this.distancia = Math.floor(_this.distancia);
                _this.costEnvio = 30;
                if (_this.distancia - 2 > 0) {
                    _this.Nokmextra = _this.distancia - 3;
                    _this.kmextra = _this.distancia - 3;
                    _this.envio3km = _this.costEnvio * 3;
                    _this.kmextra = _this.kmextra * 3;
                    _this.costEnvio = _this.costEnvio + _this.kmextra;
                    _this.envioTotal = _this.kmextra + _this.envio3km;
                }
                else {
                    _this.Nokmextra = 0;
                    _this.envio3km = _this.costEnvio * 3;
                    _this.kmextra = 0;
                    _this.costEnvio = _this.costEnvio + _this.kmextra;
                    _this.envioTotal = _this.kmextra + _this.envio3km;
                }
                _this.total = 0;
                _this.subTotal = 0;
                _this.idNegocio = _this._carrito.idNegocio;
                console.log(_this.carrito);
                _this.carrito.map(function (data) {
                    _this.subTotal = _this.subTotal + data['precioCarrito'];
                });
                _this.total = _this.subTotal + _this.costEnvio;
            }
            console.log(response);
        });
    };
    RepartidorPage.prototype.loadMapa = function () {
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
    RepartidorPage.prototype.toogleMenu = function () {
        this.menu.toggle();
    };
    RepartidorPage.prototype.salir = function () {
        this.navCtrl.navigateBack('/dashboard');
    };
    RepartidorPage.prototype.ubicacion = function () {
        this.presentModal();
    };
    RepartidorPage.prototype.ubicacionActual = function () {
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
    RepartidorPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_4__["ClienteUbicPage"],
                            cssClass: "ubicacion"
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
    RepartidorPage.prototype.Solicitar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmacion de Solicitud',
                            message: '¡Tu repartidor va en camino!',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.navCtrl.navigateForward("/dashboard");
                                    }
                                }
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
    RepartidorPage.prototype.getCardSelect = function () {
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
    RepartidorPage.prototype.validarDestino = function () {
        if (this.dest_nombre == '' && this.dest_tel == '' && this.instrucciones == '' && this.envioTotal == 0) {
            this.presentToast('Todos los campos son obligatorios');
        }
        else if (this.dest_nombre == '') {
            this.presentToast('Debe capturar el nombre del destino');
        }
        else if (this.dest_tel == '') {
            this.presentToast('Debe capturar el telefono del destino');
        }
        else if (this.instrucciones == '') {
            this.presentToast('Debe capturar las instrucciones del pedido');
        }
        else if (this.envioTotal == 0) {
            this.presentToast('Debe capturar la direccion de destino');
        }
        else {
            this.RealizandoCobro();
        }
    };
    RepartidorPage.prototype.getMetPago = function () {
        console.log(this.metPago);
        if (this.metPago == "Pagolinea") {
            this.flagCard = 1;
            this.mostrarTarjetas();
        }
        else {
            this.flagCard = 0;
        }
    };
    RepartidorPage.prototype.RealizandoCobro = function () {
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
    RepartidorPage.prototype.pedido = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /* console.log(this._carrito);
                  let usuario = {...JSON.parse(localStorage.getItem('user'))};
                  console.log(usuario);
                  let hora = Date.now();
                  let body = {
                        hora: hora,
                        productos: this._carrito.items,
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
                  }
                  console.log(body);
                  this.AfDb.database.ref("pedidos/"+this._carrito.idNegocio+"/"+hora).set(body);*/
                this.PedidoProcesado();
                return [2 /*return*/];
            });
        });
    };
    RepartidorPage.prototype.PedidoProcesado = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Solicitando Repartidor...",
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
    RepartidorPage.prototype.alertPedidoSave = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //this._carrito.deteleCarrito();
                        this.carrito = this._carrito.items;
                        this.navCtrl.navigateForward("/dashboard");
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Operacion Exitosa',
                                message: 'Hemos recibido tu solicitud de reparto. ¡Gracias por confiar en ElEstore!',
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
                                        text: 'Cancelar',
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
    RepartidorPage.prototype.validationCard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getCardSelect();
                        return [4 /*yield*/, this.alertCtrl.create({
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
    RepartidorPage.prototype.AddCargo = function () {
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
    RepartidorPage.prototype.pagoCliente = function () {
        console.log(this.metPago);
        if (this.quienPaga == "cliente") {
            this.flagMetodos = 1;
            //this.mostrarTarjetas();
        }
        else {
            this.flagMetodos = 0;
        }
    };
    RepartidorPage.prototype.mostrarTarjetas = function () {
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
    RepartidorPage.prototype.presentToast = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Error: " + mensaje,
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
    RepartidorPage.prototype.ubicacionDestino = function () {
        this.presentModal2();
    };
    RepartidorPage.prototype.presentModal2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cliente_ubic_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_4__["ClienteUbicPage"],
                            cssClass: "ubicacion"
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
                            // this.coordenadas['lat'] = data.data['body']['lat'];
                            //this.coordenadas['lng'] = data.data['body']['lng'];
                            this.coordenadasDes['latitud'] = data.data['body']['lat'];
                            this.coordenadasDes['longitud'] = data.data['body']['lng'];
                            console.log("direccion del destino " + this.coordenadasDes['latitud'] + this.coordenadasDes['longitud']);
                            this.calleDest = "";
                            this.calleSecundarioDest = "";
                            this.callDistancia();
                            this.loadMapaDest();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RepartidorPage.prototype.loadMapaDest = function () {
        var _this = this;
        var $mapa = document.getElementById("mapa3");
        var mapa = new google.maps.Map($mapa, {
            disableDefaultUI: true,
            center: {
                lat: this.coordenadasDes['latitud'],
                lng: this.coordenadasDes['longitud']
            },
            zoom: 14,
        });
        var marker = new google.maps.Marker({
            position: {
                lat: this.coordenadasDes['latitud'],
                lng: this.coordenadasDes['longitud']
            },
            map: mapa,
            animation: google.maps.Animation.DROP
        });
        var ubicacion = new google.maps.LatLng(this.coordenadasDes['latitud'], this.coordenadasDes['longitud']);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': ubicacion }, function (results, status) {
            if (status == 'OK') {
                console.log(results);
                _this.calleDest =
                    _this.calleDest + //Vacio
                        results[0].address_components[1].long_name + " " + //Numero de casa
                        results[0].address_components[0].long_name; //Calle
                _this.calleSecundarioDest =
                    _this.calleSecundarioDest + //Secundario Vacio
                        results[0].address_components[2].long_name + ", " + //Colonia
                        results[0].address_components[3].long_name + ", " + //Ciudad
                        results[0].address_components[4].short_name; //Estado
            }
        });
    };
    RepartidorPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    RepartidorPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"])
    ], RepartidorPage.prototype, "selectRef", void 0);
    RepartidorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repartidor',
            template: __webpack_require__(/*! ./repartidor.page.html */ "./src/app/pages/repartidor/repartidor.page.html"),
            styles: [__webpack_require__(/*! ./repartidor.page.scss */ "./src/app/pages/repartidor/repartidor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"],
            _services_estore_service__WEBPACK_IMPORTED_MODULE_7__["EstoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]])
    ], RepartidorPage);
    return RepartidorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-repartidor-repartidor-module.js.map