(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-local-menu-local-menu-module"],{

/***/ "./src/app/pages/local-menu/local-menu.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/local-menu/local-menu.module.ts ***!
  \*******************************************************/
/*! exports provided: LocalMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalMenuPageModule", function() { return LocalMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _local_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-menu.page */ "./src/app/pages/local-menu/local-menu.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _local_menu_page__WEBPACK_IMPORTED_MODULE_6__["LocalMenuPage"]
    }
];
var LocalMenuPageModule = /** @class */ (function () {
    function LocalMenuPageModule() {
    }
    LocalMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_local_menu_page__WEBPACK_IMPORTED_MODULE_6__["LocalMenuPage"]]
        })
    ], LocalMenuPageModule);
    return LocalMenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/local-menu/local-menu.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/local-menu/local-menu.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"contBanner\">\r\n    <img class=banner src=\"/assets/img/banner.jpg\" alt=\"\">\r\n    <div class=\"contLogo\">\r\n      <img class=logo src=\"/assets/img/bannernegocio.png\" onError= \"this.src='/assets/img/default_banner.png'\"alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"principal\">\r\n    \r\n    <ion-buttons class=\"atras\"> \r\n      <ion-button size='small' (click)='ubicacion()' expand=\"full\" fill=\"clear\" class=\"boton\">Ubicación y Horario</ion-button>\r\n    </ion-buttons>\r\n    <h6 class=\"titulo\">Nuestro Menú</h6>\r\n\r\n      <div class=\"data\" *ngIf=\"productos\" >\r\n          <ion-item class=\"platillo\" *ngFor=\"let producto of productos\" (click)='agregarProducto(producto.id_producto)'>\r\n            <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n              <img src=\"{{producto.fotografia}}\" onError= \"this.src='/assets/img/default_productos.png'\">\r\n            </ion-thumbnail>\r\n            <div class=\"contenidoPlatillo\">\r\n              <ion-label>\r\n                <h6 class=tituloPlatillo>{{producto.nombre}}</h6>\r\n                <p>{{producto.descripcion}}</p>\r\n                <p>Tiempo de preparacion: {{producto.tiempopreparacion}} Min.</p>\r\n              </ion-label>\r\n              <div class=\"footerPlatillo\">\r\n                  <p>${{producto.precio}} MXN</p>\r\n                  <ion-button fill=\"clear\" slot=\"end\" (click)='agregarProducto(producto.id_producto)'>Ver Detalle</ion-button>\r\n              </div>\r\n            </div>\r\n          </ion-item>\r\n\r\n      </div>\r\n\r\n      <div class=\"skel\" *ngIf=\"!productos\">\r\n        <ion-item class=\"animated infinite slow flash\" *ngFor=\"let item of [1,1,1]\" lines=\"none\">\r\n          <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <div class=\"contenidoPlatillo\">\r\n            <ion-skeleton-text animated  style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated class=\"skellText\" style=\"width: 95%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated class=\"skellText\" style=\"width: 30%\"></ion-skeleton-text>\r\n            <div class=\"skellFoot\">\r\n              <ion-skeleton-text animated class=\"skellText\" style=\"width: 40%\"></ion-skeleton-text>\r\n              <ion-skeleton-text animated class=\"skellText\" style=\"width: 40%\"></ion-skeleton-text>\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n      </div>\r\n      \r\n    </div>\r\n\r\n    <ion-buttons class=\"atras\"> \r\n        <ion-button size='small' expand=\"full\" fill=\"clear\" class=\"boton\" (click)='salir()'>Atrás</ion-button>\r\n    </ion-buttons>\r\n\r\n    <!--<ion-fab *ngIf=\"carrito\" vertical=\"bottom\" class=\"animated fadeIn fab\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button size=\"large\" (click)=\"goCarrito()\" translucent>\r\n            <ion-icon name='cart'></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>-->\r\n  \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/local-menu/local-menu.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/local-menu/local-menu.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contBanner {\n  position: relative;\n  margin-top: 135px; }\n\n.logo {\n  position: absolute;\n  bottom: -30%;\n  left: 0;\n  right: 0;\n  width: 100%;\n  margin: 0 auto; }\n\n.principal {\n  margin-top: 5%; }\n\n.boton {\n  margin-left: 12px;\n  margin-bottom: 16px;\n  font-size: 1rem; }\n\n.titulo {\n  font-size: 1.2rem;\n  margin: 0 0 16px 16px; }\n\n.platillo {\n  margin-bottom: 15px; }\n\n.thumbnail {\n  width: 80px;\n  height: 80px; }\n\n.contenidoPlatillo {\n  width: 100%; }\n\n.tituloPlatillo {\n  font-size: 16px; }\n\np {\n  font-size: 13px; }\n\n.footerPlatillo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.skellFoot {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYWwtbWVudS9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXENsaWVudGVGaW5hbFxcQ2xpZW50ZUxhc3Qvc3JjXFxhcHBcXHBhZ2VzXFxsb2NhbC1tZW51XFxsb2NhbC1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGFBQWE7RUFDYiw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2FsLW1lbnUvbG9jYWwtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udEJhbm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDEzNXB4O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTMwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5wcmluY2lwYWx7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmJvdG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4IDE2cHg7XHJcbn1cclxuXHJcbi5wbGF0aWxsb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWx7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmNvbnRlbmlkb1BsYXRpbGxve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXR1bG9QbGF0aWxsb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmZvb3RlclBsYXRpbGxve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5za2VsbEZvb3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/local-menu/local-menu.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/local-menu/local-menu.page.ts ***!
  \*****************************************************/
/*! exports provided: LocalMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalMenuPage", function() { return LocalMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/carrito.service */ "./src/app/services/carrito.service.ts");






var LocalMenuPage = /** @class */ (function () {
    function LocalMenuPage(navCtrl, alertController, activatedRoute, estore, _carrito) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.estore = estore;
        this._carrito = _carrito;
        this.carrito = false;
        this.items = {
            id_producto: '',
            nombre: '',
            descripcion: '',
            tiempopreparacion: '',
            precio: ''
        };
    }
    LocalMenuPage.prototype.ionViewDidEnter = function () {
        if (this._carrito.items.length != 0)
            this.carrito = true;
    };
    LocalMenuPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.productos);
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        var body = {
            id: this.id,
            funcion: "all"
        };
        console.log(body);
        this.estore.productos(body, "productos.php").subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.productos = data['productos'];
                console.log(_this.productos);
            }
        });
    };
    LocalMenuPage.prototype.salir = function () {
        this.navCtrl.pop();
    };
    LocalMenuPage.prototype.agregarProducto = function (id) {
        //Funcion editar
        console.log("id del producto: " + id);
        if (localStorage.getItem('productos')) {
            this.items = JSON.parse(localStorage.getItem('productos'));
            this.idNegocio = JSON.parse(localStorage.getItem('idNegocio'));
        }
        var indicex;
        console.log("get item");
        console.log(this.items);
        var item = this.items.map(function (data, indice) {
            if (data.id_producto == id) {
                //
                console.log("se encontro producto");
                ///this.alertEditar();
                console.log(indice);
                indicex = indice;
                //return indice;
            }
        });
        // return this.items[item[0]];
        //return this.items[item[indicex]];
        if (indicex >= 0) {
            console.log("el producto ya existe en carrito");
            this.alertEditar();
            this.navCtrl.navigateForward('/producto/' + id + "/editar" + "/" + this.id);
            return this.items[item[indicex]];
        }
        else {
            console.log("No existe en carrito");
            this.navCtrl.navigateForward('/producto/' + id + "/agregar" + "/" + this.id);
        }
    };
    LocalMenuPage.prototype.ubicacion = function () {
        this.navCtrl.navigateForward('/ubicacion/' + this.id);
    };
    LocalMenuPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    LocalMenuPage.prototype.alertEditar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Informacion',
                            message: 'El producto ya existe en el carrito ¿Desea modificar la cantidad?',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm aceptar');
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.navCtrl.navigateForward("/local-menu" + "/" + _this.id);
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
    LocalMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-local-menu',
            template: __webpack_require__(/*! ./local-menu.page.html */ "./src/app/pages/local-menu/local-menu.page.html"),
            styles: [__webpack_require__(/*! ./local-menu.page.scss */ "./src/app/pages/local-menu/local-menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_estore_service__WEBPACK_IMPORTED_MODULE_4__["EstoreService"],
            _services_carrito_service__WEBPACK_IMPORTED_MODULE_5__["CarritoService"]])
    ], LocalMenuPage);
    return LocalMenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-local-menu-local-menu-module.js.map