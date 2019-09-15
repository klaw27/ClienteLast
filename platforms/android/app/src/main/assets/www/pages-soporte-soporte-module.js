(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-soporte-soporte-module"],{

/***/ "./src/app/pages/soporte/soporte.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/soporte/soporte.module.ts ***!
  \*************************************************/
/*! exports provided: SoportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoportePageModule", function() { return SoportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soporte.page */ "./src/app/pages/soporte/soporte.page.ts");







var routes = [
    {
        path: '',
        component: _soporte_page__WEBPACK_IMPORTED_MODULE_6__["SoportePage"]
    }
];
var SoportePageModule = /** @class */ (function () {
    function SoportePageModule() {
    }
    SoportePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soporte_page__WEBPACK_IMPORTED_MODULE_6__["SoportePage"]]
        })
    ], SoportePageModule);
    return SoportePageModule;
}());



/***/ }),

/***/ "./src/app/pages/soporte/soporte.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/soporte/soporte.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Soporte Técnico</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n        <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n    <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>\r\n    <p class=\"text1\">¿Estas teniendo problemas con tu app?</p>\r\n    <!--<p class=\"text2\">soporte@elestor.mx</p>-->\r\n    <img class=\"perfil\" src=\"/assets/img/perfil.jpg\" alt=\"\">\r\n    <p class=\"text3\">¡Sera un placer atenderte!</p>\r\n\r\n    <ion-input [(ngModel)]='nombre' class=\"input\" placeholder=\"Nombre\" type=\"text\"></ion-input>\r\n    <ion-input [(ngModel)]='telefono' class=\"input\" placeholder=\"Teléfono\" type=\"number\"></ion-input>\r\n    <ion-input [(ngModel)]='correo' class=\"input\" placeholder=\"Email\" type=\"email\"></ion-input>\r\n    <ion-textarea rows=\"4\" [(ngModel)]='consulta' class=\"input\" placeholder=\"Comentarios...\" type=\"text\"></ion-textarea>\r\n    <ion-button expand=\"full\" class=\"boton\" (click)=\"Contactar()\" >Enviar</ion-button>\r\n\r\n   <!-- <ion-fab vertical=\"bottom\" class=\"fab\" horizontal=\"start\" slot=\"fixed\">\r\n      <ion-fab-button class=\"faBoton\" size=\"large\" (click)=\"goCarrito()\" translucent>\r\n          <ion-icon class=\"iconoFab\" name='cart'></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/soporte/soporte.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/soporte/soporte.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text1 {\n  text-align: center;\n  font-size: 1,1rem; }\n\n.text2 {\n  text-align: center;\n  font-size: 1,1rem; }\n\n.perfil {\n  width: 60%;\n  margin: 0 auto;\n  display: block; }\n\n.text3 {\n  text-align: center;\n  font-size: 1,1rem; }\n\n.boton {\n  width: 65%;\n  margin: 0 auto 10px auto;\n  font-size: 16px;\n  letter-spacing: normal; }\n\n.input {\n  width: 65%;\n  margin: 0 auto 10px auto;\n  font-size: 16px;\n  letter-spacing: normal; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29wb3J0ZS9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXENsaWVudGVGaW5hbFxcQ2xpZW50ZUxhc3Qvc3JjXFxhcHBcXHBhZ2VzXFxzb3BvcnRlXFxzb3BvcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvcG9ydGUvc29wb3J0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEsMXJlbTtcclxufVxyXG4udGV4dDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEsMXJlbTtcclxufVxyXG4ucGVyZmlse1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnRleHQze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLDFyZW07XHJcbn1cclxuLmJvdG9ue1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuLmlucHV0e1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbi5pY29uY2Fycml0b3tcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uaWNvbmJ1c2NhcntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/soporte/soporte.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/soporte/soporte.page.ts ***!
  \***********************************************/
/*! exports provided: SoportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoportePage", function() { return SoportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_estore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





//import { EmailComposer } from '@ionic-native/email-composer/ngx';
var SoportePage = /** @class */ (function () {
    function SoportePage(estore, router, toastController, 
    // private emailComposer: EmailComposer,
    alertController, renderer, navCtrl) {
        this.estore = estore;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.nombre = '';
        this.correo = '';
        this.consulta = '';
        this.telefono = '';
        this.email = '';
    }
    SoportePage.prototype.ngOnInit = function () {
    };
    SoportePage.prototype.Contactar = function () {
        var regEpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.nombre == '' && this.correo == '' && this.consulta == '' && this.telefono == '') {
            this.presentToast('Todos los campos son obligatorios');
        }
        else if (this.nombre == '') {
            this.presentToast('Debe capturar su nombre');
        }
        else if (this.telefono == '') {
            this.presentToast('Debe capturar su Telefono');
        }
        else if (this.correo == '') {
            this.presentToast('Debe capturar su correo');
        }
        else if (this.consulta == '') {
            this.presentToast('Debe capturar su consulta');
        }
        else if (!this.correo.match(regEpr)) {
            this.presentToast('Formato de correo invalido');
        } //SI SE CAPTURO TODA LA INFORMACION REALIZA EL LOGIN
        else {
            this.email = {
                nombre: this.nombre,
                correo: this.correo,
                consulta: this.consulta,
                telefono: this.telefono
            };
            console.log(this.email);
            this.enviarCorreo();
        }
    };
    SoportePage.prototype.presentToast = function (mensaje) {
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
    SoportePage.prototype.enviarCorreo = function () {
        var _this = this;
        this.estore.soporte(this.email, 'soporte.php').subscribe(function (data) {
            _this.alertEmailSend();
        }, function (error) {
            console.log(error);
        });
    };
    SoportePage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    SoportePage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    SoportePage.prototype.alertEmailSend = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Operacion Exitosa',
                            message: 'Hemos recibido tu consulta, te contactaremos lo antes posible. ¡Gracias por confiar en ElEstore!',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm aceptar');
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
    SoportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soporte',
            template: __webpack_require__(/*! ./soporte.page.html */ "./src/app/pages/soporte/soporte.page.html"),
            styles: [__webpack_require__(/*! ./soporte.page.scss */ "./src/app/pages/soporte/soporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_estore_service__WEBPACK_IMPORTED_MODULE_2__["EstoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], SoportePage);
    return SoportePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-soporte-soporte-module.js.map