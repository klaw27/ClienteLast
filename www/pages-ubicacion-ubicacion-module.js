(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ubicacion-ubicacion-module"],{

/***/ "./src/app/pages/ubicacion/ubicacion.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.module.ts ***!
  \*****************************************************/
/*! exports provided: UbicacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionPageModule", function() { return UbicacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ubicacion.page */ "./src/app/pages/ubicacion/ubicacion.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionPage"]
    }
];
var UbicacionPageModule = /** @class */ (function () {
    function UbicacionPageModule() {
    }
    UbicacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionPage"]]
        })
    ], UbicacionPageModule);
    return UbicacionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ubicacion/ubicacion.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<ion-content padding>\r\n\r\n  <div *ngIf=\"local\" class=\"animated fadeIn\">\r\n\r\n    <div id=\"mapa\">\r\n  \r\n    </div>\r\n\r\n    <h3 class=\"direccion\">Conócenos</h3>\r\n  \r\n    <div class=\"informacion\">\r\n      <div class=\"direccion\">\r\n        <ion-icon name=\"compass\" class=\"icono\"></ion-icon>\r\n        <p>{{local.colonia}} {{local.callenumero}}, {{local.codigopostal}} {{local.ciudad}}, {{local.estado}}.</p>\r\n      </div>\r\n      <div class=\"horario\">\r\n        <ion-icon name=\"clock\" class=\"icono\"></ion-icon>\r\n        <p>{{textoAbierto}}: {{local.horaapertura}} - {{local.horacierre}}</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n    <div class=\"skell\" *ngIf=\"!local\">\r\n\r\n        <div class=\"mapa\">\r\n            <ion-skeleton-text animated class=\"skell\"  style=\"width: 100%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"tituloSkel\">\r\n          <ion-skeleton-text animated  style=\"width: 40%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"direccion\">\r\n          <ion-skeleton-text animated  style=\"width: 8%\"></ion-skeleton-text>\r\n          <ion-skeleton-text animated  style=\"width: 60%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"direccion\">\r\n            <ion-skeleton-text animated style=\"width: 8%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\r\n        </div>\r\n        <div class=\"direccion\">\r\n            <ion-skeleton-text animated style=\"width: 8%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </div>\r\n    \r\n      </div>\r\n  \r\n    <ion-buttons class=\"atras\"> \r\n        <ion-button size='small' expand=\"full\" fill=\"clear\" class=\"boton\" (click)='salir()'>Atrás</ion-button>\r\n    </ion-buttons>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/ubicacion/ubicacion.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mapa {\n  height: 37.5vh; }\n\n.informacion div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.informacion div p {\n  width: 85%;\n  font-size: .85rem; }\n\n.informacion div .icono {\n  font-size: 1.5rem;\n  color: #cb1300; }\n\n.mapa ion-skeleton-text {\n  line-height: 35vh; }\n\n.skell .direccion, .tituloSkel {\n  margin: 5px 0;\n  display: flex; }\n\n.direccion ion-skeleton-text:first-child {\n  margin-right: 10px;\n  --border-radius: 50%; }\n\n.direccion ion-skeleton-text, .tituloSkel ion-skeleton-text {\n  line-height: 3vh; }\n\n.atras {\n  position: fixed;\n  bottom: 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWJpY2FjaW9uL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxccGFnZXNcXHViaWNhY2lvblxcdWJpY2FjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLG9CQUFnQixFQUFBOztBQUtwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91YmljYWNpb24vdWJpY2FjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbWFwYXtcclxuICAgIGhlaWdodDogMzcuNXZoO1xyXG59XHJcblxyXG4uaW5mb3JtYWNpb24gZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm9ybWFjaW9uIGRpdiBwe1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xyXG59XHJcblxyXG4uaW5mb3JtYWNpb24gZGl2IC5pY29ub3tcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICNjYjEzMDA7XHJcbn1cclxuXHJcbi5tYXBhIGlvbi1za2VsZXRvbi10ZXh0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1dmg7XHJcbn1cclxuXHJcbi5za2VsbCAuZGlyZWNjaW9uLCAudGl0dWxvU2tlbHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGlyZWNjaW9uIGlvbi1za2VsZXRvbi10ZXh0OmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5kaXJlY2Npb24gaW9uLXNrZWxldG9uLXRleHQsIC50aXR1bG9Ta2VsIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzdmg7XHJcbn1cclxuXHJcbi5hdHJhc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMyU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ubicacion/ubicacion.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.page.ts ***!
  \***************************************************/
/*! exports provided: UbicacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionPage", function() { return UbicacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");





var UbicacionPage = /** @class */ (function () {
    function UbicacionPage(navCtrl, activatedRoute, estore) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.estore = estore;
        this.textoAbierto = "";
    }
    UbicacionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.hora = new Date();
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        var body = {
            funcion: 'id',
            clientid: this.id
        };
        this.estore.locales(body, "negocio.php").subscribe(function (data) {
            console.log(_this.local);
            _this.local = data['local'];
            _this.local['latitud'] = parseFloat(_this.local['latitud']);
            _this.local['longitud'] = parseFloat(_this.local['longitud']);
            _this.abierto();
            setTimeout(function () {
                _this.loadmap();
            }, 0);
        });
    };
    UbicacionPage.prototype.abierto = function () {
        var horas = this.hora.getHours();
        var minutos = this.hora.getMinutes();
        var horaAperturaLocal = this.local['horaapertura'].split(':');
        var horaCierreLocal = this.local['horacierre'].split(':');
        var hoursApertura = horaAperturaLocal[0];
        var minutosApertura = horaAperturaLocal[1];
        var hoursCierre = horaCierreLocal[0];
        var minutosCierre = horaCierreLocal[1];
        if (hoursApertura == '0')
            hoursApertura = 24;
        if (hoursCierre == '0')
            hoursCierre = 24;
        if (horas > hoursApertura) {
            this.horaCierre(horas, hoursCierre, minutos, minutosCierre);
        }
        //Si la hora es igual que la hora de apertura
        else if (horas == hoursApertura) {
            if (minutos >= minutosApertura) {
                //la misma funcion
                this.horaCierre(horas, hoursCierre, minutos, minutosCierre);
            }
            else {
                this.textoAbierto = "Abre pronto";
            }
        }
        else {
            this.textoAbierto = "Esta Cerrado";
        }
    };
    UbicacionPage.prototype.horaCierre = function (horas, hoursCierre, minutos, minutosCierre) {
        if (horas < hoursCierre) {
            this.textoAbierto = "Esta Abierto";
        }
        else if (horas == hoursCierre) {
            if (minutos <= minutosCierre) {
                this.textoAbierto = "Cierra Pronto";
            }
            else {
                this.textoAbierto = "Esta Cerrado";
            }
        }
        else {
            this.textoAbierto = "Esta Cerrado";
        }
    };
    UbicacionPage.prototype.loadmap = function () {
        var $mapa = document.getElementById("mapa");
        console.log($mapa);
        var mapa = new google.maps.Map($mapa, {
            center: {
                lat: this.local['latitud'],
                lng: this.local['longitud']
            },
            zoom: 18,
        });
        var marker = new google.maps.Marker({
            position: {
                lat: this.local['latitud'],
                lng: this.local['longitud']
            },
            map: mapa,
            animation: google.maps.Animation.DROP
        });
        console.log(marker);
    };
    UbicacionPage.prototype.salir = function () {
        this.navCtrl.pop();
    };
    UbicacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ubicacion',
            template: __webpack_require__(/*! ./ubicacion.page.html */ "./src/app/pages/ubicacion/ubicacion.page.html"),
            styles: [__webpack_require__(/*! ./ubicacion.page.scss */ "./src/app/pages/ubicacion/ubicacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_estore_service__WEBPACK_IMPORTED_MODULE_4__["EstoreService"]])
    ], UbicacionPage);
    return UbicacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ubicacion-ubicacion-module.js.map