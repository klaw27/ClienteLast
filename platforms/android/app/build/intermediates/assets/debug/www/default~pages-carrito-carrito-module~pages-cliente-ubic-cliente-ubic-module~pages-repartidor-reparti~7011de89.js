(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-carrito-carrito-module~pages-cliente-ubic-cliente-ubic-module~pages-repartidor-reparti~7011de89"],{

/***/ "./src/app/animaciones/entrada.ts":
/*!****************************************!*\
  !*** ./src/app/animaciones/entrada.ts ***!
  \****************************************/
/*! exports provided: entrada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entrada", function() { return entrada; });
function entrada(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateX', '100%', '0%');
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(1000)
        .beforeAddClass('show-modal')
        .add(wrapperAnimation));
}


/***/ }),

/***/ "./src/app/animaciones/salida.ts":
/*!***************************************!*\
  !*** ./src/app/animaciones/salida.ts ***!
  \***************************************/
/*! exports provided: salida */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salida", function() { return salida; });
function salida(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateX', '0%', '100%');
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(1000)
        .beforeAddClass('show-modal')
        .add(wrapperAnimation));
}


/***/ }),

/***/ "./src/app/pages/cliente-ubic/cliente-ubic.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/cliente-ubic/cliente-ubic.module.ts ***!
  \***********************************************************/
/*! exports provided: ClienteUbicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteUbicPageModule", function() { return ClienteUbicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cliente_ubic_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente-ubic.page */ "./src/app/pages/cliente-ubic/cliente-ubic.page.ts");
/* harmony import */ var _mapa_ubicacion_mapa_ubicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mapa-ubicacion/mapa-ubicacion.page */ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.ts");
/* harmony import */ var _mapa_ubicacion_mapa_ubicacion_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mapa-ubicacion/mapa-ubicacion.module */ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.module.ts");








var ClienteUbicPageModule = /** @class */ (function () {
    function ClienteUbicPageModule() {
    }
    ClienteUbicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _mapa_ubicacion_mapa_ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["MapaUbicacionPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _mapa_ubicacion_mapa_ubicacion_module__WEBPACK_IMPORTED_MODULE_7__["MapaUbicacionPageModule"]
            ],
            declarations: [_cliente_ubic_page__WEBPACK_IMPORTED_MODULE_5__["ClienteUbicPage"]]
        })
    ], ClienteUbicPageModule);
    return ClienteUbicPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cliente-ubic/cliente-ubic.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/cliente-ubic/cliente-ubic.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ingresa tu domicilio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-progress-bar *ngIf=\"!load\" type=\"indeterminate\"></ion-progress-bar>\r\n\r\n  <div class=\"buscar\">\r\n    <ion-searchbar mode=\"ios\" placeholder=\"Agrega tu direccion\" id=\"direccion\" search-icon=\"pin\" [(ngModel)]=\"query\" (ionChange)=\"updateSearchResults()\"></ion-searchbar>\r\n    <ion-list *ngIf=\"lugares.length!=0\">\r\n      <ion-item *ngFor=\"let lugar of lugares; let i = index; trackBy: customTB\" class=\"local animated fadeIn\" (click)=\"lugarMapa(lugar.place_id)\">\r\n        <ion-icon name=\"pin\" class=\"pin\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n              {{lugar.structured_formatting.main_text}}\r\n              <p>{{lugar.structured_formatting.secondary_text}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n<div id=\"mapa\">\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/cliente-ubic/cliente-ubic.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/cliente-ubic/cliente-ubic.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pin {\n  color: #ea4335; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50ZS11YmljL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxccGFnZXNcXGNsaWVudGUtdWJpY1xcY2xpZW50ZS11YmljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGUtdWJpYy9jbGllbnRlLXViaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucGlue1xyXG4gICAgY29sb3I6ICNlYTQzMzU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cliente-ubic/cliente-ubic.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cliente-ubic/cliente-ubic.page.ts ***!
  \*********************************************************/
/*! exports provided: ClienteUbicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteUbicPage", function() { return ClienteUbicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _mapa_ubicacion_mapa_ubicacion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapa-ubicacion/mapa-ubicacion.page */ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.ts");
/* harmony import */ var _animaciones_entrada__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animaciones/entrada */ "./src/app/animaciones/entrada.ts");
/* harmony import */ var _animaciones_salida__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animaciones/salida */ "./src/app/animaciones/salida.ts");







var ClienteUbicPage = /** @class */ (function () {
    function ClienteUbicPage(geolocation, chRef, navCtrl, modalController) {
        this.geolocation = geolocation;
        this.chRef = chRef;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.query = "";
        this.lugares = [];
        this.load = false;
    }
    ClienteUbicPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.search = new google.maps.places.AutocompleteService();
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitud = resp.coords.latitude;
            _this.currentLongitud = resp.coords.longitude;
            _this.loadmap();
            _this.load = true;
            _this.chRef.detectChanges();
            console.log(_this.mapa);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    ClienteUbicPage.prototype.loadmap = function () {
        var _this = this;
        var $mapa = document.getElementById("mapa");
        this.mapa = new google.maps.Map($mapa, {
            disableDefaultUI: true,
            center: {
                lat: this.currentLatitud,
                lng: this.currentLongitud
            },
            zoom: 18,
        });
        this.marker = new google.maps.Marker({
            position: {
                lat: this.currentLatitud,
                lng: this.currentLongitud
            },
            map: this.mapa,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        var geocoder = new google.maps.Geocoder();
        this.mapa.addListener("click", function (event) {
            console.log(event.latLng);
            _this.mapa.panTo(event.latLng);
            _this.marker.setPosition(event.latLng);
            geocoder.geocode({ 'latLng': event.latLng }, function (results, status) {
                console.log(results);
                console.log(status);
            });
        });
        this.marker.addListener("dragend", function (event) {
            geocoder.geocode({ 'latLng': event.latLng }, function (results, status) {
                console.log(results);
                console.log(status);
            });
            _this.mapa.panTo(_this.marker.getPosition());
            console.log(_this.mapa.getBounds());
        });
    };
    ClienteUbicPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.query == '') {
            this.lugares = [];
            return;
        }
        clearTimeout(this.controlTiempo);
        this.controlTiempo = setTimeout(function () {
            _this.search.getPlacePredictions({
                input: _this.query,
                bounds: _this.mapa.getBounds()
            }, function (predictions, status) {
                if (status == "OK") {
                    _this.lugares = predictions;
                    _this.chRef.detectChanges();
                }
                else {
                    _this.lugares = [];
                }
            });
        }, 600);
    };
    ClienteUbicPage.prototype.lugarMapa = function (id) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'placeId': id }, function (results, status) {
            if (status == "OK") {
                _this.lugarPosition = results[0].geometry.location;
                _this.presentModal();
            }
        });
    };
    ClienteUbicPage.prototype.customTB = function (index, item) {
        return index + "-" + item.id;
    };
    ClienteUbicPage.prototype.ubicacion = function () {
        this.presentModal();
    };
    ClienteUbicPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _mapa_ubicacion_mapa_ubicacion_page__WEBPACK_IMPORTED_MODULE_4__["MapaUbicacionPage"],
                            cssClass: "modal",
                            showBackdrop: false,
                            enterAnimation: _animaciones_entrada__WEBPACK_IMPORTED_MODULE_5__["entrada"],
                            leaveAnimation: _animaciones_salida__WEBPACK_IMPORTED_MODULE_6__["salida"],
                            componentProps: {
                                location: this.lugarPosition
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = _a.sent();
                        console.log(data);
                        if (data.data['ubicacion']) {
                            this.modalController.dismiss({
                                ubicacion: true,
                                body: data.data['body']
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ClienteUbicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cliente-ubic',
            template: __webpack_require__(/*! ./cliente-ubic.page.html */ "./src/app/pages/cliente-ubic/cliente-ubic.page.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./cliente-ubic.page.scss */ "./src/app/pages/cliente-ubic/cliente-ubic.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ClienteUbicPage);
    return ClienteUbicPage;
}());



/***/ }),

/***/ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/mapa-ubicacion/mapa-ubicacion.module.ts ***!
  \***************************************************************/
/*! exports provided: MapaUbicacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaUbicacionPageModule", function() { return MapaUbicacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_ubicacion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapa-ubicacion.page */ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.ts");






var MapaUbicacionPageModule = /** @class */ (function () {
    function MapaUbicacionPageModule() {
    }
    MapaUbicacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_mapa_ubicacion_page__WEBPACK_IMPORTED_MODULE_5__["MapaUbicacionPage"]]
        })
    ], MapaUbicacionPageModule);
    return MapaUbicacionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Confirma dirección</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-progress-bar *ngIf=\"load\" type=\"indeterminate\"></ion-progress-bar>\r\n\r\n  <h6 class=\"calle\" text-center>{{calle}}</h6>\r\n\r\n  <div id=\"mapa2\">\r\n\r\n  </div>\r\n\r\n  <ion-button (click)=\"guardar()\" color=\"success\" expand=\"full\" class=\"confirmar\">Confirmar</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mapa2 {\n  height: 63%; }\n\n.calle {\n  margin: 40px 0; }\n\n.confirmar {\n  position: fixed;\n  bottom: 0;\n  width: 75%;\n  margin: 0 auto 20px auto;\n  left: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwYS11YmljYWNpb24vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xcbWFwYS11YmljYWNpb25cXG1hcGEtdWJpY2FjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsT0FBTztFQUNQLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcGEtdWJpY2FjaW9uL21hcGEtdWJpY2FjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBhMntcclxuICAgIGhlaWdodDogNjMlO1xyXG59XHJcblxyXG4uY2FsbGV7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLmNvbmZpcm1hcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.ts ***!
  \*************************************************************/
/*! exports provided: MapaUbicacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaUbicacionPage", function() { return MapaUbicacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");




var MapaUbicacionPage = /** @class */ (function () {
    function MapaUbicacionPage(navParamas, estore, modalCtrl) {
        this.navParamas = navParamas;
        this.estore = estore;
        this.modalCtrl = modalCtrl;
        this.calle = "";
        this.load = false;
    }
    MapaUbicacionPage.prototype.ionViewWillEnter = function () {
        this.locacion = this.navParamas.data.location;
        this.loadmap();
        console.log(this.mapa);
    };
    MapaUbicacionPage.prototype.loadmap = function () {
        var _this = this;
        var $mapa = document.getElementById("mapa2");
        console.log($mapa);
        this.mapa = new google.maps.Map($mapa, {
            disableDefaultUI: true,
            center: {
                lat: this.locacion.lat(),
                lng: this.locacion.lng()
            },
            zoom: 18,
        });
        this.marker = new google.maps.Marker({
            position: {
                lat: this.locacion.lat(),
                lng: this.locacion.lng()
            },
            map: this.mapa,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        var infowindow = new google.maps.InfoWindow({
            content: "Arrastrame o da click en el mapa!"
        });
        infowindow.open(this.mapa, this.marker);
        var geocoder = new google.maps.Geocoder();
        var nombreUbic = geocoder.geocode({ 'latLng': this.locacion }, function (results, status) {
            if (status == 'OK') {
                _this.ubicacion = _this.locacion;
                _this.calle = _this.calle + "" + results[0].address_components[1].long_name + " " + results[0].address_components[0].long_name + ", " + results[0].address_components[2].long_name;
            }
        });
        this.mapa.addListener("click", function (event) {
            console.log(event.latLng);
            _this.mapa.panTo(event.latLng);
            _this.marker.setPosition(event.latLng);
            geocoder.geocode({ 'latLng': event.latLng }, function (results, status) {
                if (status == 'OK') {
                    _this.calle = "";
                    _this.ubicacion = event.latLng;
                    _this.calle = _this.calle + "" + results[0].address_components[1].long_name + " " + results[0].address_components[0].long_name + ", " + results[0].address_components[2].long_name;
                }
            });
        });
        this.marker.addListener("dragend", function (event) {
            geocoder.geocode({ 'latLng': event.latLng }, function (results, status) {
                if (status == 'OK') {
                    _this.calle = "";
                    _this.ubicacion = event.latLng;
                    _this.calle = _this.calle + "" + results[0].address_components[1].long_name + " " + results[0].address_components[0].long_name + ", " + results[0].address_components[2].long_name;
                }
            });
            _this.mapa.panTo(_this.marker.getPosition());
            console.log(_this.mapa.getBounds());
        });
    };
    MapaUbicacionPage.prototype.guardar = function () {
        var body = {
            lat: this.ubicacion.lat(),
            lng: this.ubicacion.lng(),
            calle: this.calle,
        };
        this.load = true;
        this.modalCtrl.dismiss({
            ubicacion: true,
            body: body
        });
        this.load = false;
    };
    MapaUbicacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa-ubicacion',
            template: __webpack_require__(/*! ./mapa-ubicacion.page.html */ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.html"),
            styles: [__webpack_require__(/*! ./mapa-ubicacion.page.scss */ "./src/app/pages/mapa-ubicacion/mapa-ubicacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _services_estore_service__WEBPACK_IMPORTED_MODULE_3__["EstoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], MapaUbicacionPage);
    return MapaUbicacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-carrito-carrito-module~pages-cliente-ubic-cliente-ubic-module~pages-repartidor-reparti~7011de89.js.map