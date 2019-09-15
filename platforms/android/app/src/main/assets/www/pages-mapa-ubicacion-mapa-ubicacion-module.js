(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mapa-ubicacion-mapa-ubicacion-module"],{

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
//# sourceMappingURL=pages-mapa-ubicacion-mapa-ubicacion-module.js.map