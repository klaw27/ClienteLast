(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"],{

/***/ "./src/app/pages/perfil/perfil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Mi Perfil</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n        <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n    <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>\r\n\r\n\r\n  <div class=\"perfil\">\r\n    <img class='fotoPerfil' id='perfil' [src]=\"fotografia\"  onError= \"this.src='/assets/img/default.png'\"  alt=\"Foto de perfil\"> \r\n    <div class=\"camara\">\r\n      <ion-button class=\"botonCamara\" (click)='presentActionSheet()'>\r\n        <ion-icon class=\"botonIcono\" slot=\"icon-only\" name='camera'></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"informacion\">\r\n\r\n      <ion-input position=\"floating\" class=\"input\" [(ngModel)]='usuario.nombre' id=\"1\" placeholder=\"Nombre (s)\" type='text'></ion-input>\r\n      <ion-input  class=\"input\" [(ngModel)]='usuario.apellidoPat' id = \"2\" placeholder=\"Apellido Paterno\" type='text'></ion-input>\r\n      <ion-input  class=\"input\" [(ngModel)]='usuario.apellidoMat' id=\"3\" placeholder=\"Apellido Materno\" type='text'></ion-input>\r\n      <ion-input disabled  class=\"input\" [(ngModel)]='usuario.email' placeholder=\"Correo\" type='email'></ion-input>\r\n      <ion-input disabled class=\"input\" [(ngModel)]='usuario.telefono' placeholder=\"Número Telefónico\" type='phone'></ion-input>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"Envio\">\r\n      <h4 class='tituloEnvio'>Domicilio Más Actual</h4>\r\n      <ion-input  class=\"input\" [(ngModel)]='usuario.calle' placeholder=\"Colonia\" type='text'></ion-input>\r\n      <div class=\"opciones\">\r\n        <ion-button fill=\"outline\" color=\"dark\" class=\"ubicacion\"> \r\n          <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\r\n          Escoger Ubicación\r\n        </ion-button>\r\n        <ion-button fill=\"outline\" color=\"dark\" class=\"ubicacion\">\r\n          <ion-icon slot=\"start\" name=\"navigate\"></ion-icon>\r\n          Ubicación Actual\r\n        </ion-button>\r\n      </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"Envio\">\r\n    <h4 class='tituloEnvio'>Datos fiscales</h4>\r\n    <ion-input  class=\"input\" [(ngModel)]='usuario.razonSocial' placeholder=\"Razón Social\" type='text'></ion-input>\r\n    <ion-input  class=\"input\" [(ngModel)]='usuario.rfc' placeholder=\"RFC\" type='text'></ion-input>\r\n</div> -->\r\n\r\n    <ion-button size='default' expand=\"block\" class=\"btnUpdate\" (click)='validar()'>Guardar Cambios</ion-button>\r\n\r\n  <!--  <ion-fab vertical=\"bottom\" class=\"fab\" horizontal=\"start\" slot=\"fixed\">\r\n      <ion-fab-button class=\"faBoton\" size=\"large\" (click)=\"goCarrito()\" translucent>\r\n          <ion-icon class=\"iconoFab\" name='cart'></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>-->\r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".perfil {\n  margin: 30px 0 30px 0;\n  position: relative;\n  overflow: hidden; }\n\n.fotoPerfil {\n  margin: 0 auto;\n  width: 150px;\n  height: 150px;\n  display: block;\n  position: relative;\n  border-radius: 50%; }\n\n.camara {\n  position: absolute;\n  bottom: 0;\n  left: 60%; }\n\n.botonCamara {\n  --background: #d00b00;\n  --background-activated: rgb(226, 2, 2);\n  --background-focused: rgb(255, 2, 2);\n  --border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  box-sizing: content-box; }\n\n.titulo {\n  margin: 0;\n  text-align: center; }\n\n.tituloEnvio {\n  margin: 40px 0 20px 20px; }\n\n.select {\n  margin: 0 auto;\n  width: 100%; }\n\n.actualizar {\n  margin: 0 auto;\n  width: 65%;\n  margin-top: 20px; }\n\n.opciones {\n  display: flex;\n  flex-direction: column; }\n\n.ubicacion {\n  width: 59%;\n  margin: 10px auto; }\n\n.input {\n  width: 70%; }\n\n.btnUpdate {\n  width: 70%;\n  margin: 0 auto 25px auto;\n  font-size: 16px;\n  position: relative; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxccGFnZXNcXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVMsRUFBQTs7QUFHYjtFQUNJLHFCQUFhO0VBQ2Isc0NBQXVCO0VBQ3ZCLG9DQUFxQjtFQUNyQixvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVLEVBQUE7O0FBTWQ7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJmaWx7XHJcbiAgICBtYXJnaW46IDMwcHggMCAzMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLmZvdG9QZXJmaWx7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNhbWFyYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDYwJTtcclxufVxyXG5cclxuLmJvdG9uQ2FtYXJhe1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZDAwYjAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiKDIyNiwgMiwgMik7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogcmdiKDI1NSwgMiwgMik7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcblxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxvRW52aW97XHJcbiAgICBtYXJnaW46IDQwcHggMCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3R7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWN0dWFsaXphcntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5vcGNpb25lc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udWJpY2FjaW9ue1xyXG4gICAgd2lkdGg6IDU5JTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAvLyBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XHJcbiAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgLy8gbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLmJ0blVwZGF0ZXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG4uaWNvbmNhcnJpdG97XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmljb25idXNjYXJ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var PerfilPage = /** @class */ (function () {
    function PerfilPage(estore, navCtrl, toastCtrl, camara, actionSheetController, toastController, _sanitizer) {
        this.estore = estore;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.camara = camara;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this._sanitizer = _sanitizer;
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
        this.ipnNom = "";
        this.ipnApeMat = "";
        this.ipnApePat = "";
    }
    PerfilPage.prototype.ngOnInit = function () {
        this.usuario = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, JSON.parse(localStorage.getItem('user')));
        this.fotografia = this._sanitizer.bypassSecurityTrustUrl("" + this.usuario.fotografia);
    };
    PerfilPage.prototype.validar = function () {
        var body = {
            ipnNom: this.ipnNom = document.getElementById('1').value,
            ipnApePat: this.ipnApePat = document.getElementById('2').value,
            ipnApeMat: this.ipnApeMat = document.getElementById('3').value
        };
        if (this.ipnNom == '' && this.ipnApeMat == '' && this.ipnApePat == '') {
            this.presentarToast('Todos los campos son obligatorios');
        }
        else if (this.ipnNom == '') {
            this.presentarToast('El nombre es obligatorio');
        }
        else if (this.ipnApeMat == '') {
            this.presentarToast('El Apellido Materno es obligatorio');
        }
        else if (this.ipnApePat == '') {
            this.presentarToast('El Apellido Paterno es obligatorio');
        } //SI SE CAPTURO TODA LA INFORMACION REALIZA EL LOGIN
        else {
            console.log("hola " + this.ipnNom + " " + this.ipnApePat + " " + this.ipnApeMat);
            this.actualizar();
        }
    };
    PerfilPage.prototype.actualizar = function () {
        var _this = this;
        console.log(this.usuario);
        this.estore.actualizarPerfil(this.usuario, 'perfil.php').subscribe(function (data) {
            console.log(data);
            if (data['success'] == true) {
                _this.presentarToast("¡El Perfil se actualizo correctamente!");
                localStorage.setItem('user', JSON.stringify(_this.usuario));
                setTimeout(function () {
                    _this.navCtrl.navigateBack('/dashboard');
                }, 750);
            }
            else
                _this.presentarToast("Error, algo salio mal");
        });
    };
    PerfilPage.prototype.presentarToast = function (mensaje) {
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
    PerfilPage.prototype.imgPreAlb = function () {
        var _this = this;
        var imagen = document.getElementById("perfil");
        this.camara.getPicture({
            quality: 100,
            destinationType: this.camara.DestinationType.DATA_URL,
            sourceType: this.camara.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: this.camara.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        }).then(function (foto) {
            foto = escape(foto);
            _this.usuario.fotografia = 'data:image/jpg;base64,' + foto;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustUrl("" + _this.usuario.fotografia);
        });
    };
    PerfilPage.prototype.imgPreCam = function () {
        var _this = this;
        var imagen = document.getElementById("perfil");
        this.camara.getPicture({
            quality: 100,
            destinationType: this.camara.DestinationType.DATA_URL,
            sourceType: this.camara.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.camara.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            saveToPhotoAlbum: true
        }).then(function (foto) {
            foto = escape(foto);
            _this.usuario.fotografia = 'data:image/jpg;base64,' + foto;
            _this.fotografia = _this._sanitizer.bypassSecurityTrustUrl("" + _this.usuario.fotografia);
        });
    };
    PerfilPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Cámara',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.imgPreCam();
                                    }
                                }, {
                                    text: 'Galeria',
                                    icon: 'images',
                                    handler: function () {
                                        _this.imgPreAlb();
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    icon: 'close',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    PerfilPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.page.html */ "./src/app/pages/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/pages/perfil/perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_estore_service__WEBPACK_IMPORTED_MODULE_2__["EstoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-perfil-perfil-module.js.map