(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sesion-sesion-module"],{

/***/ "./src/app/pages/sesion/sesion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sesion/sesion.module.ts ***!
  \***********************************************/
/*! exports provided: SesionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionPageModule", function() { return SesionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sesion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sesion.page */ "./src/app/pages/sesion/sesion.page.ts");







var routes = [
    {
        path: '',
        component: _sesion_page__WEBPACK_IMPORTED_MODULE_6__["SesionPage"]
    }
];
var SesionPageModule = /** @class */ (function () {
    function SesionPageModule() {
    }
    SesionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sesion_page__WEBPACK_IMPORTED_MODULE_6__["SesionPage"]]
        })
    ], SesionPageModule);
    return SesionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sesion/sesion.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/sesion/sesion.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\"> \r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div class=\"logo\">\r\n        <img src=\"../../assets/img/EstoCuadro.png\" alt=\"logo Estor\">\r\n      </div>\r\n\r\n\r\n      <div class=\"registrar\">\r\n        <h2 text-center class=\"titulo\">Ingresa tu información</h2>\r\n        \r\n        <ion-input #swiper (keyup)=\"enter($event)\" [(ngModel)]=\"correo\" class=\"input\" placeholder=\"Correo electronico\" type=\"email\">\r\n        <ion-icon name=\"person\"></ion-icon> </ion-input>    \r\n      \r\n      </div>\r\n        <div class=\"pass\">\r\n        <ion-input (keyup)=\"enter($event)\" [type]=\"passType\" [(ngModel)]=\"password\" class=\"input\" placeholder=\"Contraseña\" type=\"password\">\r\n        <ion-icon name=\"key\"></ion-icon> </ion-input> \r\n\r\n        <ion-button class=\"eye\" color=\"light\" (click)=\"cambiarIcono()\">\r\n              <ion-icon slot=\"icon-only\" name=\"{{icono}}\"></ion-icon>\r\n          </ion-button>\r\n          </div>\r\n\r\n        <ion-button class=\"botonEntrar\" size=\"small\" expand=\"full\" (click)=\"iniciar()\">Entrar</ion-button>\r\n        <ion-button class=\"botonRec\" size=\"small\" expand=\"full\" fill=\"clear\"  routerLink=\"/registro\">¿Olvidaste tu contraseña?</ion-button>\r\n\r\n      </ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/sesion/sesion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/sesion/sesion.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarBack {\n  --background: rgb(250, 250, 250); }\n\n.logo img {\n  width: 90%;\n  margin: 0 auto;\n  display: block; }\n\n.titulo {\n  font-size: 18px;\n  margin-bottom: 40px; }\n\n.input {\n  border: 1px solid #a5a5a5;\n  border-radius: 5px;\n  width: 65%;\n  margin: 0px auto;\n  margin-bottom: 15px;\n  text-align: left;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px; }\n\n.boton:first-of-type {\n  margin-top: center; }\n\n.botonEntrar {\n  width: 65%;\n  margin: 10px auto 25px auto;\n  font-size: 16px; }\n\n.botonRec {\n  width: 70%;\n  margin: 0 auto 25px auto;\n  font-size: 16px;\n  position: relative; }\n\n.pass {\n  position: relative; }\n\n.eye {\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 0;\n  right: 8%;\n  width: 35px;\n  height: 35px; }\n\n.input ion-icon {\n  right: 50px;\n  color: lightgrey; }\n\n.error {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VzaW9uL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxccGFnZXNcXHNlc2lvblxcc2VzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFhLEVBQUE7O0FBR2pCO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBRWhCLHVCQUF1QjtFQUN2QiwwQkFBMEIsRUFBQTs7QUFJOUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFSSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFLdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFQSxVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXNpb24vc2VzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyQmFja3tcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG4ubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjUsIDE2NSwgMTY1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcbi5ib3RvbjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLXRvcDogY2VudGVyO1xyXG59XHJcblxyXG4uYm90b25FbnRyYXJ7XHJcbiAgICBcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAyNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcbi5ib3RvblJlY3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG5cclxuLnBhc3N7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5leWV7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDglO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5pbnB1dCBpb24taWNvbiB7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5lcnJvclxyXG57XHJcbmNvbG9yOnJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/sesion/sesion.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/sesion/sesion.page.ts ***!
  \*********************************************/
/*! exports provided: SesionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionPage", function() { return SesionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SesionPage = /** @class */ (function () {
    function SesionPage(estore, router, toastController, renderer) {
        this.estore = estore;
        this.router = router;
        this.toastController = toastController;
        this.renderer = renderer;
        //myForm: FormGroup;
        this.password = '';
        this.correo = '';
        this.icono = "eye";
        this.passType = 'password';
    }
    SesionPage.prototype.ngOnInit = function () {
    };
    SesionPage.prototype.cambiarIcono = function () {
        this.icono = this.icono == 'eye' ? 'eye-off' : 'eye';
        this.passType = this.passType == 'password' ? 'text' : 'password';
    };
    SesionPage.prototype.iniciar = function () {
        var _this = this;
        var body = {
            password: this.password,
            correo: this.correo
        };
        var regEpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.correo == '' && this.password == '')
            this.presentarToast('Capture su usuario y contraseña');
        else if (this.password == '') {
            this.presentarToast('Capture su contraseña');
        }
        else if (this.correo == '') {
            this.presentarToast('Capture su email');
        }
        else if (!this.correo.match(regEpr)) {
            this.presentarToast('Formato de correo invalido');
        } //SI SE CAPTURO TODA LA INFORMACION REALIZA EL LOGIN
        else {
            this.estore.iniciarSesion(body, 'ingresar.php').subscribe(function (data) {
                if (data['success'] != false) {
                    localStorage.setItem('user', JSON.stringify(data['user']));
                    _this.router.navigateByUrl("/dashboard");
                }
                else {
                    _this.presentarToast(data['msg']);
                }
            });
        }
    };
    SesionPage.prototype.getElementById = function (arg0) {
        throw new Error("Method not implemented.");
    };
    SesionPage.prototype.presentarToast = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Error: ' + error,
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
    SesionPage.prototype.enter = function (e) {
        if (e.keyCode == 13) {
            this.iniciar();
        }
    };
    SesionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sesion',
            template: __webpack_require__(/*! ./sesion.page.html */ "./src/app/pages/sesion/sesion.page.html"),
            styles: [__webpack_require__(/*! ./sesion.page.scss */ "./src/app/pages/sesion/sesion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_estore_service__WEBPACK_IMPORTED_MODULE_2__["EstoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], SesionPage);
    return SesionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sesion-sesion-module.js.map