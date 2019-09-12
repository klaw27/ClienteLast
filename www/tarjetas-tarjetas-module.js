(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tarjetas-tarjetas-module"],{

/***/ "./src/app/tarjetas/tarjetas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tarjetas/tarjetas.module.ts ***!
  \*********************************************/
/*! exports provided: TarjetasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetasPageModule", function() { return TarjetasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tarjetas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tarjetas.page */ "./src/app/tarjetas/tarjetas.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _tarjetas_page__WEBPACK_IMPORTED_MODULE_6__["TarjetasPage"]
    }
];
var TarjetasPageModule = /** @class */ (function () {
    function TarjetasPageModule() {
    }
    TarjetasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tarjetas_page__WEBPACK_IMPORTED_MODULE_6__["TarjetasPage"]]
        })
    ], TarjetasPageModule);
    return TarjetasPageModule;
}());



/***/ }),

/***/ "./src/app/tarjetas/tarjetas.page.html":
/*!*********************************************!*\
  !*** ./src/app/tarjetas/tarjetas.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)='salir()'></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Formas de Pago</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n      <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n   </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>\r\n    <h3>Mis tarjetas registradas</h3>\r\n    <ion-list >\r\n      <ion-item *ngFor=\"let tarjeta of tarjetas\" id=\"{{tarjeta.id}}\">\r\n          <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n              <img src=\"/assets/img/card.jpg\"  class=\"card\">\r\n          </ion-thumbnail>\r\n        <ion-label>\r\n            <h6 class=tituloLocal>{{tarjeta.card_number}}</h6>\r\n            <p>{{tarjeta.brand}}</p>\r\n            <p>Expira: {{tarjeta.expiration_month}}/{{tarjeta.expiration_year}}</p>\r\n        </ion-label>\r\n        <!--<ion-input type=\"text\" [(ngModel)]='id_card'>{{tarjeta.id}}</ion-input>-->\r\n        <ion-icon name =\"trash\" slot = \"end\" (click)= \"deleteCardConfirm(tarjeta.id)\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-item>\r\n        <ion-icon class=\"alert\" name=\"alert\"></ion-icon>\r\n      <div class=\"nada principal\" *ngIf=\"tarjetas.length ==0\">\r\n      <ion-label class=\"tituloVacio\">\r\n        Aún no tienes tarjetas registradas\r\n      </ion-label>\r\n      </div>\r\n  </ion-item>\r\n  <ion-button  class=\"agregar\"  fill = \"clear\" routerLink=\"/add-card\">Agregar tarjeta de crédito y débito</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tarjetas/tarjetas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tarjetas/tarjetas.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 150%; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n.alert {\n  color: #332c2cc2; }\n\n.tituloVacio {\n  padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyamV0YXMvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFx0YXJqZXRhc1xcdGFyamV0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUlmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFyamV0YXMvdGFyamV0YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuXHJcbn1cclxuXHJcbi5pY29uY2Fycml0b3tcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uaWNvbmJ1c2NhcntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYWxlcnR7XHJcbiAgICBjb2xvcjogIzMzMmMyY2MyO1xyXG59XHJcblxyXG4udGl0dWxvVmFjaW8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLy9tYXJnaW4tdG9wOiAxNXB4LFxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/tarjetas/tarjetas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tarjetas/tarjetas.page.ts ***!
  \*******************************************/
/*! exports provided: TarjetasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetasPage", function() { return TarjetasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var TarjetasPage = /** @class */ (function () {
    function TarjetasPage(alertController, navCtrl, http, router) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.router = router;
        this.customerOpenid = '';
    }
    TarjetasPage.prototype.ngOnInit = function () {
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
    TarjetasPage.prototype.deleteCard = function (idDeleteCard) {
        //let customer_id =  JSON.stringify(this.customerOpenid.id);
        var _this = this;
        var DeleteCard = {
            customer_id: this.customerOpenid.id,
            card_id: idDeleteCard
        };
        console.log(DeleteCard);
        return this.http.post("https://localhost:5010/api/card/delete", JSON.stringify(DeleteCard), httpOptions).subscribe(function (data) {
            console.log("Tarjetas eliminada");
            //this.navCtrl.navigateForward('/tarjetas');
            _this.removeCardAlert();
            _this.ngOnInit();
            console.log(_this.tarjetas);
        }, function (error) {
            console.log(error);
        });
    };
    TarjetasPage.prototype.deleteCardConfirm = function (id_card) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirme acción',
                            message: '¿Está seguro que desea eliminar la tarjeta?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                }, {
                                    text: 'Aceptar',
                                    handler: function (data) {
                                        _this.deleteCard(id_card);
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
    TarjetasPage.prototype.removeCardAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Operacion exitosa',
                            message: '¡La tarjeta fue eliminada!',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    handler: function (data) {
                                        //this.router.navigateByUrl(`/tarjetas`);
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
    TarjetasPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    TarjetasPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    TarjetasPage.prototype.salir = function () {
        this.navCtrl.navigateBack('/metodo-pago');
        //this.navCtrl.navigateBack('/dashboard');
    };
    TarjetasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tarjetas',
            template: __webpack_require__(/*! ./tarjetas.page.html */ "./src/app/tarjetas/tarjetas.page.html"),
            styles: [__webpack_require__(/*! ./tarjetas.page.scss */ "./src/app/tarjetas/tarjetas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TarjetasPage);
    return TarjetasPage;
}());



/***/ })

}]);
//# sourceMappingURL=tarjetas-tarjetas-module.js.map