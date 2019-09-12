(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buscar-buscar-module"],{

/***/ "./src/app/pages/buscar/buscar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.module.ts ***!
  \***********************************************/
/*! exports provided: BuscarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPageModule", function() { return BuscarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscar.page */ "./src/app/pages/buscar/buscar.page.ts");







var routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_6__["BuscarPage"]
    }
];
var BuscarPageModule = /** @class */ (function () {
    function BuscarPageModule(menu, navCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
    }
    BuscarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_6__["BuscarPage"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], BuscarPageModule);
    return BuscarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buscar/buscar.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Búsqueda</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>-->\r\n<!-- Barra de busqueda -->\r\n<ion-searchbar (keyup.enter)=\"buscarEstore($event)\" placeholder=\"Búsqueda por producto o negocio\" ></ion-searchbar>\r\n\r\n<ion-content>\r\n\r\n\r\n<!--<ion-list >-->\r\n    <div *ngIf=\"itemsflag\" >\r\n    <p class = \"tit_res\">Productos</p>\r\n  </div>\r\n\t\t<ion-item *ngFor=\"let item of items\" (click)='agregarProducto(item.id_producto)'>\r\n    <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n          <!-- <img  src= \"{{item.fotografia}}\"> -->\r\n           <!--<img  [src]=\"fotografiaProd\" >-->\r\n      <img src=\"test.jpg\" [src]=\"fotografiaProd\"  onError= \"this.src='/assets/img/default_productos.png'\">\r\n      </ion-thumbnail>\r\n      <div class=\"contenidoPlatillo\">\r\n      <ion-label>\r\n          <h6 class=tituloPlatillo>{{item.nombre}}</h6>\r\n          <p>{{item.descripcion}}</p>\r\n      </ion-label>\r\n      <div class=\"footerPlatillo\">\r\n        <p>${{item.precio}}.00 MXN</p>\r\n        <ion-button fill=\"clear\" slot=\"end\" (click)='agregarProducto(item.id_producto)'>Ver Detalle</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-item>\r\n\r\n  <div *ngIf=\"itemsflagNeg\" >\r\n    <p class = \"tit_res\">Negocios</p>\r\n  </div>\r\n  <ion-item *ngFor=\"let item of itemsNeg\" (click)='menu(local.id_negocio)'>\r\n    <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n      <img src=\"tests.png\" onError= \"this.src='/assets/img/default_negocio.png'\" (click)='menu(local.id_negocio)' >\r\n    </ion-thumbnail>\r\n    <div class=\"contenidoLocal\" (click)='menu(item.id_negocio)'>\r\n      <ion-label>\r\n        <h6 class=tituloLocal>{{item.nombre}}</h6>\r\n        <p>{{item.colonia}} {{item.callenumero}}</p>\r\n        <p>Horario: {{item.horaapertura}} - {{item.horacierre}}</p>\r\n      </ion-label>\r\n       <!--<ion-button fill=\"clear\" slot=\"end\" (click)='menu(local.id_negocio)' class = \"menuver\">Ver Menú</ion-button>-->\r\n      <div class=\"footerLocal\">\r\n         <!-- <ion-button fill=\"clear\" slot=\"end\" (click)='menu(local.id_negocio)'>Ver Menú</ion-button>-->\r\n \r\n          <div class=\"contenedorEstrellas\">\r\n            <ion-icon class=\"estrella\" name='star'></ion-icon>\r\n            <ion-icon class=\"estrella\" name='star'></ion-icon>\r\n            <ion-icon class=\"estrella\" name='star'></ion-icon>\r\n            <ion-icon class=\"estrella\" name='star'></ion-icon>\r\n            <ion-icon class=\"estrella\" name='star'></ion-icon>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</ion-item>\r\n\r\n  <ion-item *ngIf=\"!items &&  !itemsNeg \">\r\n      <p class = \"tit_res\">No hay resultados de la busqueda</p>\r\n</ion-item>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/buscar/buscar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulo {\n  margin-left: 25px; }\n\n.contBanner {\n  position: relative;\n  margin-top: 135px; }\n\n.logo {\n  position: absolute;\n  bottom: -30%;\n  left: 0;\n  right: 0;\n  width: 100%;\n  margin: 0 auto; }\n\n.principal {\n  margin-top: 5%; }\n\n.boton {\n  margin-left: 12px;\n  margin-bottom: 16px;\n  font-size: 1rem; }\n\n.titulo {\n  font-size: 1.2rem;\n  margin: 0 0 16px 16px; }\n\n.platillo {\n  margin-bottom: 15px; }\n\n.thumbnail {\n  width: 80px;\n  height: 80px; }\n\n.contenidoPlatillo {\n  width: 100%; }\n\n.tituloPlatillo {\n  font-size: 16px; }\n\np {\n  font-size: 13px; }\n\n.tit_res {\n  font-size: 15px;\n  margin-left: 20px; }\n\n.footerPlatillo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.skellFoot {\n  display: flex;\n  justify-content: space-between; }\n\n.estrella {\n  color: #FDC300;\n  font-size: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnVzY2FyL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxccGFnZXNcXGJ1c2NhclxcYnVzY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUVJLGVBQWUsRUFBQTs7QUFHbkI7RUFFSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1c2Nhci9idXNjYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udEJhbm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDEzNXB4O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTMwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5wcmluY2lwYWx7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmJvdG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4IDE2cHg7XHJcbn1cclxuXHJcbi5wbGF0aWxsb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWx7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmNvbnRlbmlkb1BsYXRpbGxve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXR1bG9QbGF0aWxsb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxucHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4udGl0X3Jlc3tcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9vdGVyUGxhdGlsbG97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNrZWxsRm9vdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5lc3RyZWxsYXtcclxuICAgIGNvbG9yOiAjRkRDMzAwO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/buscar/buscar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/buscar/buscar.page.ts ***!
  \*********************************************/
/*! exports provided: BuscarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPage", function() { return BuscarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var BuscarPage = /** @class */ (function () {
    function BuscarPage(alertCtrl, estore, activatedRoute, navCtrl, alertController, http, _sanitizer) {
        this.alertCtrl = alertCtrl;
        this.estore = estore;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.http = http;
        this._sanitizer = _sanitizer;
        // prod: [];
        this.items = {
            id_producto: '',
            nombre: '',
            descripcion: '',
            tiempopreparacion: '',
            precio: '',
            fotografia: ""
        };
        this.itemsNeg = {
            id_negocio: '',
            nombre: '',
            callenumero: '',
            colonia: '',
            horaapertura: '',
            horacierre: '',
            fotografia: ""
        };
        this.indexCount = 0;
        this.errorCount = null;
        //productos: [];
        this.productos = [{
                id_producto: '',
                nombre: '',
                descripcion: '',
                tiempopreparacion: '',
                precio: '',
                fotografia: ''
            }];
        this.negocios = [{
                id_negocio: '',
                nombre: '',
                callenumero: '',
                colonia: '',
                horaapertura: '',
                horacierre: '',
                fotografia: ''
            }];
        //this.ionViewDidLoad();
        // this.iniBusqueda();
    }
    BuscarPage.prototype.iniBusqueda = function () {
        //this.items = this.lista;
        this.items = this.productos;
        this.itemsNeg = this.negocios;
        this.itemsflag = this.productos;
        this.itemsflagNeg = this.negocios;
        console.log(this.items.id_producto);
        //console.log("Base64 Image: ",imageData);
        //this.fotografiaProd = this._sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.items.fotografia);
        // this.fotografiaProd = this._sanitizer.bypassSecurityTrustResourceUrl(this.items.fotografia);
        // this.fotografiaProd = this._sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+this.items.fotografia);
    };
    BuscarPage.prototype.ngOnInit = function () {
        var _this = this;
        //productos
        console.log(this.productos);
        this.id = "0";
        var body = {
            id: this.id,
            funcion: "p"
        };
        console.log(body);
        //obtener productos
        this.http.post("http://localhost/api/dashbusqueda.php", body).subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.productos = data['productos'];
                console.log(_this.productos);
            }
        }, function (error) {
            console.log(error);
        });
        //Obtener negocios
        console.log(this.negocios);
        this.id = "0";
        body = {
            id: this.id,
            funcion: "all"
        };
        console.log(body);
        this.http.post("http://localhost/api/dashbusqueda.php", body).subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.negocios = data['negocios'];
                console.log(_this.negocios);
            }
        }, function (error) {
            console.log(error);
        });
    };
    BuscarPage.prototype.buscarEstore = function (event) {
        var _this = this;
        this.criterio = event.target.value;
        console.log(this.criterio);
        if (this.criterio && this.criterio.trim() != "") {
            this.iniBusqueda();
            console.log(this.items);
            this.items = this.items.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(_this.criterio.toLowerCase()) > -1);
            });
            if (this.items.length === 0) {
                this.itemsflag = null;
            }
            this.itemsNeg = this.itemsNeg.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(_this.criterio.toLowerCase()) > -1);
            });
            if (this.itemsNeg.length === 0) {
                this.itemsflagNeg = null;
            }
        }
        else {
            this.indexCount = 1;
            console.log("no capturo nada");
            this.items = null;
            this.itemsNeg = null;
            this.itemsflag = null;
            this.itemsflagNeg = null;
        }
    };
    BuscarPage.prototype.agregarProducto = function (id) {
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
    BuscarPage.prototype.menu = function (id) {
        this.navCtrl.navigateForward('/local-menu/' + id);
    };
    BuscarPage.prototype.alertEditar = function () {
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
                                        _this.navCtrl.navigateForward("/buscar");
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
    BuscarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar',
            template: __webpack_require__(/*! ./buscar.page.html */ "./src/app/pages/buscar/buscar.page.html"),
            styles: [__webpack_require__(/*! ./buscar.page.scss */ "./src/app/pages/buscar/buscar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_estore_service__WEBPACK_IMPORTED_MODULE_3__["EstoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], BuscarPage);
    return BuscarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buscar-buscar-module.js.map