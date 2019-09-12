(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacto-contacto-module"],{

/***/ "./src/app/pages/contacto/contacto.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.module.ts ***!
  \***************************************************/
/*! exports provided: ContactoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function() { return ContactoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto.page */ "./src/app/pages/contacto/contacto.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]
    }
];
var ContactoPageModule = /** @class */ (function () {
    function ContactoPageModule() {
    }
    ContactoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
        })
    ], ContactoPageModule);
    return ContactoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Contáctanos</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n        <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n    <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>\r\n    <h3>Ubicación</h3>\r\n    <p>Pino 219, Jardines de Irapuato</p>\r\n    <div class=\"ubicacion\">\r\n      <div id=\"mapa\"></div>\r\n    </div>\r\n    <div class=\"telefonos\">\r\n      <h3>Teléfonos</h3>\r\n      <div class=\"telefono\">\r\n        <ion-icon class=\"phoneIcono\" name=\"call\"></ion-icon>\r\n        <p>462 153 10 01 Reparto</p>\r\n      </div>\r\n      <div class=\"telefono\">\r\n          <ion-icon class=\"phoneIcono\" name=\"call\"></ion-icon>\r\n          <p>462 215 6190 Oficina</p>        \r\n      </div>\r\n    </div>\r\n    <h3>Redes Sociales</h3> \r\n    <ion-grid>\r\n      \r\n        <ion-row>\r\n            <ion-col size=\"3\" offset=\"2.5\">\r\n                <img src=\"/assets/img/facebook.png\" alt=\"Facebook\" (click)=\"OpenFB();\" > \r\n            </ion-col>\r\n            <ion-col size=\"3\" offset=\"0.5\">\r\n                <img src=\"/assets/img/instagram.png\" alt=\"Instagram\" (click)=\"OpenIG();\">\r\n            </ion-col>\r\n          </ion-row>\r\n    </ion-grid>\r\n    <div class=\"ventas\">\r\n      <p>¿Te gustaría inscribir tu empresa o negocio, ventas@elestor.mx, estamos para servirte?</p>\r\n    </div>\r\n\r\n    <!-- <ion-fab vertical=\"bottom\" class=\"fab\" horizontal=\"start\" slot=\"fixed\">\r\n     <ion-fab-button class=\"faBoton\" size=\"large\" (click)=\"goCarrito()\" translucent>\r\n          <ion-icon class=\"iconoFab\" name='cart'></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ubicacion {\n  height: 30%;\n  padding: 10px; }\n\n#mapa {\n  height: 100%; }\n\n.telefono {\n  display: flex;\n  align-items: center; }\n\n.phoneIcono {\n  width: 20px;\n  height: 20px;\n  margin-right: 20px; }\n\n.redes {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  grid-template-columns: 1fr 1fr; }\n\n.ventas {\n  text-align: center; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdG8vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdG9cXGNvbnRhY3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUVsQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0by9jb250YWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWJpY2FjaW9ue1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jbWFwYXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRlbGVmb25ve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG9uZUljb25ve1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWRlc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG5cclxuLnZlbnRhc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25jYXJyaXRve1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pY29uYnVzY2Fye1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.ts ***!
  \*************************************************/
/*! exports provided: ContactoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPage", function() { return ContactoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ContactoPage = /** @class */ (function () {
    function ContactoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactoPage.prototype.ngOnInit = function () {
        this.loadmap();
    };
    ContactoPage.prototype.loadmap = function () {
        var $mapa = document.getElementById("mapa");
        console.log($mapa);
        var mapa = new google.maps.Map($mapa, {
            disableDefaultUI: true,
            center: {
                lat: 20.686099,
                lng: -101.353188
            },
            zoom: 14,
        });
        var marker = new google.maps.Marker({
            position: {
                lat: 20.686099,
                lng: -101.353188
            },
            map: mapa,
            animation: google.maps.Animation.DROP
        });
        console.log(marker);
    };
    ContactoPage.prototype.OpenFB = function () {
        window.open("https://www.facebook.com/ElEstorMexico", '_system', 'location=yes');
    };
    ContactoPage.prototype.OpenIG = function () {
        window.open("https://www.instagram.com/", '_system', 'location=yes');
    };
    ContactoPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    ContactoPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    ContactoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.page.html */ "./src/app/pages/contacto/contacto.page.html"),
            styles: [__webpack_require__(/*! ./contacto.page.scss */ "./src/app/pages/contacto/contacto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ContactoPage);
    return ContactoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contacto-contacto-module.js.map