(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"],{

/***/ "./src/app/pages/registro/registro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/pages/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot='start'> \r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div class=\"logo\">\r\n        <img src=\"../../assets/img/EstoCuadro.png\" alt=\"logo Estor\">\r\n      </div>\r\n      <div class=\"registro\">\r\n        <h2 text-center class=\"titulo\">Ingresa tu información</h2>\r\n        <ion-input [(ngModel)]='nombre' class=\"input\" placeholder=\"Nombre(s)\" type='text'></ion-input>\r\n        <ion-input [(ngModel)]='apellidoPat' class=\"input\" placeholder=\"Apellido Paterno\" type='text'></ion-input>\r\n        <ion-input [(ngModel)]='apellidoMat' class=\"input\" placeholder=\"Apellido Materno\" type='text'></ion-input>\r\n        <ion-input [(ngModel)]='numero' class=\"input\" placeholder=\"Número Telefónico\" type='tel'></ion-input>\r\n        <ion-input [(ngModel)]='correo' class=\"input\" placeholder=\"Correo Electronico\" type='email'></ion-input>\r\n        <div class=\"pass\">\r\n          <ion-input [(ngModel)]='password' [type]=\"passType\" class=\"input\" placeholder=\"Contraseña\" type='password'></ion-input>\r\n          <ion-button class=\"eye\" color=\"light\" (click)=\"cambiarIcono(1)\">\r\n              <ion-icon slot=\"icon-only\" name=\"{{icono}}\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"pass\">\r\n          <ion-input [(ngModel)]='passVerficada' [type]=\"passType2\" class=\"input\" placeholder=\"Repetir contraseña\" type='password' (ionBlur)='contrasena()'></ion-input>\r\n          <ion-button class=\"eye\" color=\"light\" (click)=\"cambiarIcono(2)\">\r\n              <ion-icon slot=\"icon-only\" name=\"{{icono2}}\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n        <ion-checkbox [(ngModel)]='politica'></ion-checkbox><ion-label> He leido y acepto la </ion-label><a routerLink='/politica'>Politica de privacidad</a>\r\n\r\n  \r\n        <ion-button size='small' expand=\"full\" class=\"boton\" (click)='registrarse()'>Registrarme</ion-button>\r\n        \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/registro/registro.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarBack {\n  --background: rgb(250, 250, 250); }\n\n.logo img {\n  width: 90%;\n  margin: 0 auto;\n  display: block; }\n\n.titulo {\n  font-size: 18px;\n  margin-bottom: 25px; }\n\n.input {\n  border: 1px solid #a5a5a5;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0px auto;\n  padding: 0 0 0 15px !important;\n  margin-bottom: 15px; }\n\n.boton:first-of-type {\n  margin-top: 20px; }\n\n.boton {\n  width: 65%;\n  margin: 0 auto 10px auto;\n  font-size: 16px;\n  text-transform: capitalize;\n  letter-spacing: normal; }\n\n.pass {\n  position: relative; }\n\n.eye {\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 0;\n  right: 8%;\n  width: 35px;\n  height: 35px; }\n\na {\n  font: 16px sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0cm9cXHJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFhLEVBQUE7O0FBR2pCO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyQmFja3tcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG4ubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjUsIDE2NSwgMTY1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxufVxyXG5cclxuLmJvdG9uOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYm90b257XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG4ucGFzc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmV5ZXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogOCU7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250OiAxNnB4IHNhbnMtc2VyaWY7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/registro/registro.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var RegistroPage = /** @class */ (function () {
    function RegistroPage(toastController, estore, router, alertController, http) {
        this.toastController = toastController;
        this.estore = estore;
        this.router = router;
        this.alertController = alertController;
        this.http = http;
        this.clienteOpen = '';
        this.Customer = {};
        this.nombre = '';
        this.numero = '';
        this.correo = '';
        this.password = '';
        this.passVerficada = '';
        this.apellidoPat = "";
        this.apellidoMat = "";
        this.politica = false;
        this.icono = "eye";
        this.passType = 'password';
        this.icono2 = "eye";
        this.passType2 = 'password';
        this.deviceSessionId = "";
    }
    RegistroPage.prototype.ngOnInit = function () {
    };
    RegistroPage.prototype.cambiarIcono = function (pass) {
        if (pass == 1) {
            this.icono = this.icono == 'eye' ? 'eye-off' : 'eye';
            this.passType = this.passType == 'password' ? 'text' : 'password';
        }
        else {
            this.icono2 = this.icono2 == 'eye' ? 'eye-off' : 'eye';
            this.passType2 = this.passType2 == 'password' ? 'text' : 'password';
        }
        //datos de openpay
        OpenPay.setId('mwvt7x3ehfnlgluepwng');
        OpenPay.setApiKey('pk_1a559d9438714db7b1b88ae6b5756358');
        //para sistema antifraude
        this.deviceSessionId = OpenPay.deviceData.setup();
        console.log(this.deviceSessionId);
        OpenPay.setSandboxMode(true);
    };
    RegistroPage.prototype.contrasena = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.password == this.passVerficada)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Contraseñas correctas',
                                showCloseButton: true,
                                position: 'bottom',
                                closeButtonText: 'Done',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.toastController.create({
                            message: 'Contraseñas diferentes',
                            showCloseButton: true,
                            position: 'bottom',
                            closeButtonText: 'Done',
                            duration: 2000
                        })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'El usuario ya existe',
                            message: 'Verifica tu correo.',
                            buttons: ['OK']
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
    RegistroPage.prototype.presentToast = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
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
    RegistroPage.prototype.registrarse = function () {
        var _this = this;
        var regEpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        //let regEpr2 = /^[a-zA-Z0-9-]*$/;
        var regEpr2 = /^[a-z0-9_-]{8,16}$/;
        var regEpr3 = /^[a-z0-9_-]{10}$/;
        if (this.nombre == '' && this.numero == '' && this.correo == '' && this.password == '')
            this.presentToast('Todos los campos son obligatorios');
        else if (this.nombre == '') {
            this.presentToast('Debe capturar su nombre');
        }
        else if (this.apellidoPat == '') {
            this.presentToast('Debe capturar su apellido Paterno');
        }
        else if (this.apellidoMat == '') {
            this.presentToast('Debe capturar su apellido Materno');
        }
        else if (this.numero == '') {
            this.presentToast('Debe capturar su numero');
        }
        else if (this.correo == '') {
            this.presentToast('Debe capturar su correo');
        }
        else if (this.password == '') {
            this.presentToast('Debe capturar su password');
        }
        else if (!this.correo.match(regEpr)) {
            this.presentToast('Formato de correo invalido');
        }
        else if (!this.password.match(regEpr2)) {
            this.presentToast('El password debe de ser de 8 a 16 caracteres ');
        }
        else if (!this.numero.match(regEpr3)) {
            this.presentToast("El telefono solo debe contener 10 digitos");
        }
        else if (this.politica == false) {
            this.presentToast("Debe aceptar la politica de privacidad");
        }
        else if (this.password == this.passVerficada) {
            var userId = Date.now();
            var body = {
                nombre: this.nombre,
                apellidoPat: this.apellidoPat,
                apellidoMat: this.apellidoMat,
                telefono: this.numero,
                correo: this.correo,
                password: this.password,
                userId: userId
            };
            this.estore.registrarUsuario(body, 'registrar.php').subscribe(function (data) {
                if (data['success'] == false) {
                    _this.presentAlert();
                }
                else {
                    localStorage.setItem('user', JSON.stringify(data['user']));
                    //registrar cliente en OpenPay
                    _this.addCustomerOpen();
                    _this.router.navigateByUrl("/dashboard");
                }
            });
        }
        else {
            this.presentToast('Las contraseñas no son iguales');
        }
    };
    RegistroPage.prototype.addCustomerOpen = function () {
        var _this = this;
        var account = false;
        this.Customer = {
            name: this.nombre,
            email: this.correo,
            requires_account: account
        };
        var customer = JSON.stringify(this.Customer);
        //CREAR CLIENTE
        this.http.post("https://localhost:5010/api/customer/add", customer, httpOptions).subscribe(function (response) {
            console.log("Cliente Nuevo");
            _this.clienteOpen = response;
            console.log(_this.clienteOpen.id);
            localStorage.setItem('userOpen', JSON.stringify(_this.clienteOpen));
        }, function (error) {
            console.log(error);
        });
    };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.page.html */ "./src/app/pages/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/pages/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_estore_service__WEBPACK_IMPORTED_MODULE_3__["EstoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registro-registro-module.js.map