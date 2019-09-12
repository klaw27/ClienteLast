(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/home-popover/reparto-tipo/reparto-tipo.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home-popover/reparto-tipo/reparto-tipo.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"title\">   \r\n    <ion-item> \r\n    <label>Tipo de Servicio</label>\r\n    <ion-icon name=\"close\" slot = \"end\" (click)=\"close()\"></ion-icon>\r\n  </ion-item> \r\n  </div> \r\n  <div class=\"info\"> \r\n    <ion-list>\r\n        <ion-radio-group>\r\n          <ion-list-header>\r\n            <ion-label>¿Que tipo de servicio deseas?</ion-label>\r\n          </ion-list-header>\r\n      \r\n          <ion-item>\r\n            <ion-label>Solicitar Repartidor</ion-label>\r\n            <ion-radio slot=\"start\" value=\"biff\" checked></ion-radio>\r\n          </ion-item>\r\n      \r\n          <ion-item>\r\n            <ion-label>Mandado</ion-label>\r\n            <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n          </ion-item>\r\n\r\n        </ion-radio-group>\r\n      </ion-list>\r\n      \r\n  </div>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/home-popover/reparto-tipo/reparto-tipo.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home-popover/reparto-tipo/reparto-tipo.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcG9wb3Zlci9yZXBhcnRvLXRpcG8vcmVwYXJ0by10aXBvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home-popover/reparto-tipo/reparto-tipo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home-popover/reparto-tipo/reparto-tipo.component.ts ***!
  \*********************************************************************/
/*! exports provided: RepartoTipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepartoTipoComponent", function() { return RepartoTipoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var RepartoTipoComponent = /** @class */ (function () {
    function RepartoTipoComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    RepartoTipoComponent.prototype.ngOnInit = function () { };
    RepartoTipoComponent.prototype.close = function () {
        this.popoverCtrl.dismiss();
    };
    RepartoTipoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reparto-tipo',
            template: __webpack_require__(/*! ./reparto-tipo.component.html */ "./src/app/home-popover/reparto-tipo/reparto-tipo.component.html"),
            styles: [__webpack_require__(/*! ./reparto-tipo.component.scss */ "./src/app/home-popover/reparto-tipo/reparto-tipo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], RepartoTipoComponent);
    return RepartoTipoComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_home_popover_reparto_tipo_reparto_tipo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/home-popover/reparto-tipo/reparto-tipo.component */ "./src/app/home-popover/reparto-tipo/reparto-tipo.component.ts");









var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [src_app_home_popover_reparto_tipo_reparto_tipo_component__WEBPACK_IMPORTED_MODULE_8__["RepartoTipoComponent"]],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], src_app_home_popover_reparto_tipo_reparto_tipo_component__WEBPACK_IMPORTED_MODULE_8__["RepartoTipoComponent"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<ion-content >\r\n\r\n  \r\n    <!--<ion-searchbar class=\"busqueda\" (click)=\"goBuscar()\" placeholder=\"Búsqueda por producto o negocio\"></ion-searchbar>\r\n-->\r\n    <div class=\"principal\">\r\n<!--\r\n        <h6 class='tituloLugar' *ngFor='let categoria of categorias'>{{categoria.nombre}}</h6>\r\n        <ion-slides [options]=\"slideOpts\" class=\"slide\">\r\n            <ion-slide *ngFor='let subcategoria of subcategorias' class='lugar' (click)=\"locales(subcategoria.nombre)\"> \r\n            <img src='/assets/img/comida/{{subcategoria.nombre}}.png' alt=\"\" class='icono'>  \r\n              <p class='titulo'>{{subcategoria.nombre}}</p>\r\n            </ion-slide>\r\n        </ion-slides>-->\r\n\r\n\r\n      <h6 class='tituloLugar'>COMIDA PREPARADA</h6>\r\n      <ion-slides [options]=\"slideOpts\" class=\"slide\">\r\n          <ion-slide *ngFor='let preparada of preparadas' class='lugar' (click)=\"locales(preparada.nombre)\">\r\n            <img src='/assets/img/comida/{{preparada.nombre}}.png' alt=\"\" class='icono'>  \r\n            <p class='titulo'>{{preparada.nombre}}</p>\r\n          </ion-slide>\r\n      </ion-slides>\r\n    \r\n      <h6 class='tituloLugar'>BEBIDAS</h6>\r\n      <ion-slides [options]=\"slideOpts\" class=\"slide\">\r\n          <ion-slide *ngFor='let bebida of bebidas' class='lugar' (click)=\"locales(bebida.nombre)\">\r\n            <img src='/assets/img/bebidas/{{bebida.nombre}}.png' alt=\"\" class='icono'>  \r\n            <p class='titulo'>{{bebida.nombre}}</p>\r\n          </ion-slide>\r\n      </ion-slides>\r\n  \r\n        <h6 class='tituloLugar'>POSTRES</h6>\r\n        <ion-slides [options]=\"slideOpts\" class=\"slide\">\r\n            <ion-slide *ngFor='let postre of postres' class='lugar' (click)=\"locales(postre.nombre)\">\r\n              <img src='/assets/img/postres/{{postre.nombre}}.png' alt=\"\" class='icono'>  \r\n              <p class='titulo'>{{postre.nombre}}</p>\r\n            </ion-slide>\r\n        </ion-slides>\r\n  \r\n          <h6 class='tituloLugar'>SUMINISTROS</h6>\r\n          <ion-slides [options]=\"slideOpts\" class=\"slide\">\r\n              <ion-slide *ngFor='let suministro of suministros' class='lugar' (click)=\"locales(suministro.nombre)\">\r\n                <img src='/assets/img/suministros/{{suministro.nombre}}.png' alt=\"\" class='icono'>  \r\n                <p class='titulo'>{{suministro.nombre}}</p>\r\n              </ion-slide>\r\n          </ion-slides>\r\n\r\n \r\n    </div>\r\n    \r\n\r\n   <!-- <ion-fab vertical=\"bottom\" class=\"fab\" horizontal=\"start\" slot=\"fixed\">\r\n        <ion-fab-button class=\"faBoton\" size=\"large\" (click)=\"goCarrito()\" translucent>\r\n            <ion-icon class=\"iconoFab\" name='cart'></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n-->\r\n    <ion-fab  vertical=\"bottom\" class=\"fab\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button class=\"faBoton\" size=\"large\" (click)=\"TipoReparto($event)\" translucent color=\"light\">\r\n        <!--<ion-fab-button class=\"faBoton\" size=\"large\" (click)=\"goUbicacion()\" translucent color=\"success\">-->\r\n          <!-- <ion-icon  class=\"iconoFab\" name='bicycle'></ion-icon> -->\r\n          <img src='/assets/img/rep.png' class='iconoFab'> \r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n   \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide {\n  margin: 0 10px; }\n\n.lugar {\n  flex-direction: column; }\n\n.tituloLugar {\n  margin: 20px;\n  font-weight: bold;\n  color: #6ba1d3;\n  background-color: #FAFAFA; }\n\n.icono {\n  width: 80px;\n  height: 80px; }\n\n.titulo {\n  font-size: 14px;\n  margin: 10px 0;\n  color: #6ba1d3;\n  font-weight: bold; }\n\n.principal {\n  margin-bottom: 80px; }\n\n.faBoton {\n  width: 70px;\n  height: 70px; }\n\n.iconoFab {\n  width: 50px;\n  height: 50px;\n  align-content: center; }\n\n.busqueda {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zbGlkZXtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4ubHVnYXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGl0dWxvTHVnYXJ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNmJhMWQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuLmljb25ve1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGNvbG9yOiAjNmJhMWQzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcmluY2lwYWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4uZmFCb3RvbntcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4OyAgXHJcbn1cclxuXHJcbi5pY29ub0ZhYntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnVzcXVlZGF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_estore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");





var DashboardPage = /** @class */ (function () {
    function DashboardPage(menu, estore, navCtrl, popoverCtrl, alertCtrl, _carrito) {
        this.menu = menu;
        this.estore = estore;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this._carrito = _carrito;
        this.noCarrito = 0;
        this.slideOpts = {
            effect: 'flip',
            slidesPerView: 3.3,
            freeMode: true
        };
        this.noCarrito = this._carrito.items.length;
    }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.noCarrito = this._carrito.items.length;
        //suministros
        this.menu.enable(true);
        console.log(this.suministros);
        this.id = "1";
        var body2 = {
            id: this.id,
            funcion: "all"
        };
        console.log(body2);
        this.estore.dashboardSub(body2, "subcategorias.php").subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.suministros = data['subcategorias'];
                console.log(_this.suministros);
            }
        });
        //Commida Preparada
        this.menu.enable(true);
        console.log(this.preparadas);
        this.id = "2";
        var body3 = {
            id: this.id,
            funcion: "all"
        };
        console.log(body3);
        this.estore.dashboardSub(body3, "subcategorias.php").subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.preparadas = data['subcategorias'];
                console.log(_this.preparadas);
            }
        });
        //Bebidas 
        this.menu.enable(true);
        console.log(this.bebidas);
        this.id = "4";
        var body4 = {
            id: this.id,
            funcion: "all"
        };
        console.log(body4);
        this.estore.dashboardSub(body4, "subcategorias.php").subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.bebidas = data['subcategorias'];
                console.log(_this.bebidas);
            }
        });
        //Postres 
        this.menu.enable(true);
        console.log(this.postres);
        this.id = "3";
        var body5 = {
            id: this.id,
            funcion: "all"
        };
        console.log(body5);
        this.estore.dashboardSub(body5, "subcategorias.php").subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.postres = data['subcategorias'];
                console.log(_this.postres);
            }
        });
    };
    DashboardPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    DashboardPage.prototype.toogleMenu = function () {
        this.menu.toggle();
    };
    DashboardPage.prototype.locales = function (id) {
        this.navCtrl.navigateForward("/locales/" + id);
    };
    DashboardPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    DashboardPage.prototype.goUbicacion = function () {
        this.navCtrl.navigateForward('/card');
    };
    DashboardPage.prototype.TipoReparto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '¿Que tipo de servicio deseas?',
                            inputs: [
                                {
                                    name: 'radio1',
                                    type: 'radio',
                                    label: 'Solicitar Repartidor',
                                    value: 'repartidor',
                                    checked: true
                                },
                                {
                                    name: 'radio2',
                                    type: 'radio',
                                    label: 'Mandado',
                                    value: 'mandado'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        console.log();
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function (data) {
                                        console.log('OK clicked. Data -> ' + data);
                                        if (data == "mandado") {
                                            _this.navCtrl.navigateForward("/mandado");
                                        }
                                        else {
                                            _this.navCtrl.navigateForward("/repartidor");
                                        }
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
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_estore_service__WEBPACK_IMPORTED_MODULE_3__["EstoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_4__["CarritoService"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map