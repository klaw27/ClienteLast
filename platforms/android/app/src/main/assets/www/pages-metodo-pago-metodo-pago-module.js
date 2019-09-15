(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-metodo-pago-metodo-pago-module"],{

/***/ "./src/app/home-popover/home-popover.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home-popover/home-popover.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--EFECTIVO -->\r\n<ion-content>\r\n    <div class=\"title\">   \r\n    <ion-item> \r\n    <label>INFORMACIÓN:</label>\r\n    <ion-icon name=\"close\" slot = \"end\" (click)=\"close()\"></ion-icon>\r\n  </ion-item> \r\n</div> \r\n  <div class=\"info\"> \r\n    <p>Paga al repartidor cuando te entregue tu mercancía.</p>\r\n    <p>Monto máximo $350.00</p>   \r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home-popover/home-popover.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/home-popover/home-popover.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--background\tBackground of the popover\r\n--box-shadow\tBox shadow of the popover\r\n--height\tHeight of the popover\r\n--max-height\tMaximum height of the popover\r\n--max-width\tMaximum width of the popover\r\n--min-height\tMinimum height of the popover\r\n--min-width\tMinimum width of the popover\r\n--width\tWidth of the popover*/\nlabel {\n  font-weight: bold; }\n.info {\n  margin-left: 10px;\n  color: black;\n  margin-top: 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wb3BvdmVyL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxcaG9tZS1wb3BvdmVyXFxob21lLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcG9wb3Zlci9ob21lLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7NkJDTzZCO0FERzVCO0VBQU8saUJBQWdCLEVBQUE7QUFFdkI7RUFDRyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcG9wb3Zlci9ob21lLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tYmFja2dyb3VuZFx0QmFja2dyb3VuZCBvZiB0aGUgcG9wb3ZlclxyXG4tLWJveC1zaGFkb3dcdEJveCBzaGFkb3cgb2YgdGhlIHBvcG92ZXJcclxuLS1oZWlnaHRcdEhlaWdodCBvZiB0aGUgcG9wb3ZlclxyXG4tLW1heC1oZWlnaHRcdE1heGltdW0gaGVpZ2h0IG9mIHRoZSBwb3BvdmVyXHJcbi0tbWF4LXdpZHRoXHRNYXhpbXVtIHdpZHRoIG9mIHRoZSBwb3BvdmVyXHJcbi0tbWluLWhlaWdodFx0TWluaW11bSBoZWlnaHQgb2YgdGhlIHBvcG92ZXJcclxuLS1taW4td2lkdGhcdE1pbmltdW0gd2lkdGggb2YgdGhlIHBvcG92ZXJcclxuLS13aWR0aFx0V2lkdGggb2YgdGhlIHBvcG92ZXIqL1xyXG5cclxuXHJcbiBsYWJlbCB7Zm9udC13ZWlnaHQ6Ym9sZDt9XHJcblxyXG4gLmluZm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiB9XHJcblxyXG4iLCIvKi0tYmFja2dyb3VuZFx0QmFja2dyb3VuZCBvZiB0aGUgcG9wb3ZlclxyXG4tLWJveC1zaGFkb3dcdEJveCBzaGFkb3cgb2YgdGhlIHBvcG92ZXJcclxuLS1oZWlnaHRcdEhlaWdodCBvZiB0aGUgcG9wb3ZlclxyXG4tLW1heC1oZWlnaHRcdE1heGltdW0gaGVpZ2h0IG9mIHRoZSBwb3BvdmVyXHJcbi0tbWF4LXdpZHRoXHRNYXhpbXVtIHdpZHRoIG9mIHRoZSBwb3BvdmVyXHJcbi0tbWluLWhlaWdodFx0TWluaW11bSBoZWlnaHQgb2YgdGhlIHBvcG92ZXJcclxuLS1taW4td2lkdGhcdE1pbmltdW0gd2lkdGggb2YgdGhlIHBvcG92ZXJcclxuLS13aWR0aFx0V2lkdGggb2YgdGhlIHBvcG92ZXIqL1xubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home-popover/home-popover.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home-popover/home-popover.component.ts ***!
  \********************************************************/
/*! exports provided: HomePopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePopoverComponent", function() { return HomePopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HomePopoverComponent = /** @class */ (function () {
    function HomePopoverComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    HomePopoverComponent.prototype.ngOnInit = function () { };
    HomePopoverComponent.prototype.close = function () {
        this.popoverCtrl.dismiss();
    };
    HomePopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-popover',
            template: __webpack_require__(/*! ./home-popover.component.html */ "./src/app/home-popover/home-popover.component.html"),
            styles: [__webpack_require__(/*! ./home-popover.component.scss */ "./src/app/home-popover/home-popover.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], HomePopoverComponent);
    return HomePopoverComponent;
}());



/***/ }),

/***/ "./src/app/home-popover/pago-online/pago-online.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home-popover/pago-online/pago-online.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--PAGO EN LINEA-->\r\n<ion-content>\r\n    <div class=\"title\">   \r\n    <ion-item> \r\n    <label>INFORMACIÓN:</label>\r\n    <ion-icon name=\"close\" slot = \"end\" (click)=\"close()\"></ion-icon>\r\n  </ion-item> \r\n</div> \r\n  <div class=\"info\"> \r\n    <p>Registra tu tarjeta de crédito o débito.</p>\r\n    <p>¡Tu información estará en zona segura!</p>   \r\n  </div>\r\n</ion-content> "

/***/ }),

/***/ "./src/app/home-popover/pago-online/pago-online.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home-popover/pago-online/pago-online.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  font-weight: bold; }\n\n.info {\n  margin-left: 10px;\n  color: black;\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wb3BvdmVyL3BhZ28tb25saW5lL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxcaG9tZS1wb3BvdmVyXFxwYWdvLW9ubGluZVxccGFnby1vbmxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxpQkFBZ0IsRUFBQTs7QUFFdkI7RUFDRyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcG9wb3Zlci9wYWdvLW9ubGluZS9wYWdvLW9ubGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtmb250LXdlaWdodDpib2xkO31cclxuXHJcbi5pbmZvIHtcclxuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-popover/pago-online/pago-online.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home-popover/pago-online/pago-online.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagoOnlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoOnlineComponent", function() { return PagoOnlineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PagoOnlineComponent = /** @class */ (function () {
    function PagoOnlineComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PagoOnlineComponent.prototype.ngOnInit = function () { };
    PagoOnlineComponent.prototype.close = function () {
        this.popoverCtrl.dismiss();
    };
    PagoOnlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pago-online',
            template: __webpack_require__(/*! ./pago-online.component.html */ "./src/app/home-popover/pago-online/pago-online.component.html"),
            styles: [__webpack_require__(/*! ./pago-online.component.scss */ "./src/app/home-popover/pago-online/pago-online.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], PagoOnlineComponent);
    return PagoOnlineComponent;
}());



/***/ }),

/***/ "./src/app/home-popover/terminal/terminal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home-popover/terminal/terminal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--TERMINAL -->\r\n<ion-content>\r\n  <div class=\"title\">   \r\n  <ion-item> \r\n  <label>INFORMACIÓN:</label>\r\n  <ion-icon name=\"close\" slot = \"end\" (click)=\"close()\"></ion-icon>\r\n</ion-item> \r\n</div> \r\n<div class=\"info\"> \r\n  <p>Nuestros repartidores llevaran una terminal móvil.</p>\r\n  <p>¡Recuerda tener a la mano tu IFE y tarjeta bancaria!</p>   \r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home-popover/terminal/terminal.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home-popover/terminal/terminal.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--background\tBackground of the popover\r\n--box-shadow\tBox shadow of the popover\r\n--height\tHeight of the popover\r\n--max-height\tMaximum height of the popover\r\n--max-width\tMaximum width of the popover\r\n--min-height\tMinimum height of the popover\r\n--min-width\tMinimum width of the popover\r\n--width\tWidth of the popover*/\nlabel {\n  font-weight: bold; }\n.info {\n  margin-left: 10px;\n  color: black;\n  margin-top: 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wb3BvdmVyL3Rlcm1pbmFsL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcQ2xpZW50ZUZpbmFsXFxDbGllbnRlTGFzdC9zcmNcXGFwcFxcaG9tZS1wb3BvdmVyXFx0ZXJtaW5hbFxcdGVybWluYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcG9wb3Zlci90ZXJtaW5hbC90ZXJtaW5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs2QkNPNkI7QURHN0I7RUFBTyxpQkFBZ0IsRUFBQTtBQUV2QjtFQUNHLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wb3BvdmVyL3Rlcm1pbmFsL3Rlcm1pbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLWJhY2tncm91bmRcdEJhY2tncm91bmQgb2YgdGhlIHBvcG92ZXJcclxuLS1ib3gtc2hhZG93XHRCb3ggc2hhZG93IG9mIHRoZSBwb3BvdmVyXHJcbi0taGVpZ2h0XHRIZWlnaHQgb2YgdGhlIHBvcG92ZXJcclxuLS1tYXgtaGVpZ2h0XHRNYXhpbXVtIGhlaWdodCBvZiB0aGUgcG9wb3ZlclxyXG4tLW1heC13aWR0aFx0TWF4aW11bSB3aWR0aCBvZiB0aGUgcG9wb3ZlclxyXG4tLW1pbi1oZWlnaHRcdE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBwb3BvdmVyXHJcbi0tbWluLXdpZHRoXHRNaW5pbXVtIHdpZHRoIG9mIHRoZSBwb3BvdmVyXHJcbi0td2lkdGhcdFdpZHRoIG9mIHRoZSBwb3BvdmVyKi9cclxuXHJcblxyXG5sYWJlbCB7Zm9udC13ZWlnaHQ6Ym9sZDt9XHJcblxyXG4uaW5mbyB7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIG1hcmdpbi10b3A6IDVweDtcclxufSIsIi8qLS1iYWNrZ3JvdW5kXHRCYWNrZ3JvdW5kIG9mIHRoZSBwb3BvdmVyXHJcbi0tYm94LXNoYWRvd1x0Qm94IHNoYWRvdyBvZiB0aGUgcG9wb3ZlclxyXG4tLWhlaWdodFx0SGVpZ2h0IG9mIHRoZSBwb3BvdmVyXHJcbi0tbWF4LWhlaWdodFx0TWF4aW11bSBoZWlnaHQgb2YgdGhlIHBvcG92ZXJcclxuLS1tYXgtd2lkdGhcdE1heGltdW0gd2lkdGggb2YgdGhlIHBvcG92ZXJcclxuLS1taW4taGVpZ2h0XHRNaW5pbXVtIGhlaWdodCBvZiB0aGUgcG9wb3ZlclxyXG4tLW1pbi13aWR0aFx0TWluaW11bSB3aWR0aCBvZiB0aGUgcG9wb3ZlclxyXG4tLXdpZHRoXHRXaWR0aCBvZiB0aGUgcG9wb3ZlciovXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/home-popover/terminal/terminal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home-popover/terminal/terminal.component.ts ***!
  \*************************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TerminalComponent = /** @class */ (function () {
    function TerminalComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    TerminalComponent.prototype.ngOnInit = function () { };
    TerminalComponent.prototype.close = function () {
        this.popoverCtrl.dismiss();
    };
    TerminalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terminal',
            template: __webpack_require__(/*! ./terminal.component.html */ "./src/app/home-popover/terminal/terminal.component.html"),
            styles: [__webpack_require__(/*! ./terminal.component.scss */ "./src/app/home-popover/terminal/terminal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], TerminalComponent);
    return TerminalComponent;
}());



/***/ }),

/***/ "./src/app/pages/metodo-pago/metodo-pago.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/metodo-pago/metodo-pago.module.ts ***!
  \*********************************************************/
/*! exports provided: MetodoPagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoPagoPageModule", function() { return MetodoPagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _metodo_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metodo-pago.page */ "./src/app/pages/metodo-pago/metodo-pago.page.ts");
/* harmony import */ var src_app_home_popover_home_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/home-popover/home-popover.component */ "./src/app/home-popover/home-popover.component.ts");
/* harmony import */ var src_app_home_popover_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/home-popover/terminal/terminal.component */ "./src/app/home-popover/terminal/terminal.component.ts");
/* harmony import */ var src_app_home_popover_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/home-popover/pago-online/pago-online.component */ "./src/app/home-popover/pago-online/pago-online.component.ts");










var routes = [
    {
        path: '',
        component: _metodo_pago_page__WEBPACK_IMPORTED_MODULE_6__["MetodoPagoPage"]
    }
];
var MetodoPagoPageModule = /** @class */ (function () {
    function MetodoPagoPageModule() {
    }
    MetodoPagoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [src_app_home_popover_home_popover_component__WEBPACK_IMPORTED_MODULE_7__["HomePopoverComponent"], src_app_home_popover_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_8__["TerminalComponent"], src_app_home_popover_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_9__["PagoOnlineComponent"]],
            declarations: [_metodo_pago_page__WEBPACK_IMPORTED_MODULE_6__["MetodoPagoPage"], src_app_home_popover_home_popover_component__WEBPACK_IMPORTED_MODULE_7__["HomePopoverComponent"], src_app_home_popover_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_8__["TerminalComponent"], src_app_home_popover_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_9__["PagoOnlineComponent"]],
        })
    ], MetodoPagoPageModule);
    return MetodoPagoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/metodo-pago/metodo-pago.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/metodo-pago/metodo-pago.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"danger\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Métodos de Pago</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n          <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n       </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content padding>\r\n      <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>\r\n \r\n  <ion-list >\r\n  <!--<div class=\"pago\">\r\n    <ion-item>\r\n      <ion-icon class=\"card\" name=\"card\"></ion-icon>\r\n      <ion-label class =\"etiqueta\"> Tarjeta Bancaria </ion-label>\r\n      <ion-icon name=\"arrow-dropright-circle\" slot=\"end\" routerLink=\"/tarjetas\"></ion-icon>\r\n    </ion-item>\r\n  </div>-->\r\n  <div class=\"pago\">\r\n    <ion-item>\r\n      <ion-icon class=\"efectivo\" name=\"cash\" ></ion-icon>\r\n      <ion-label class =\"etiqueta\"> Efectivo </ion-label>     \r\n      <ion-icon name=\"information-circle\" slot=\"end\" (click)=\"presentPopover($event)\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"pago\">\r\n     <ion-item> \r\n      <ion-icon class=\"terminal\" name=\"wallet\"></ion-icon>      \r\n      <ion-label class =\"etiqueta\"> Terminal </ion-label>        \r\n      <ion-icon name=\"information-circle\" slot=\"end\"  (click)=\"Terminal($event)\"></ion-icon>\r\n     </ion-item> \r\n  </div>\r\n  <div class=\"pago\">\r\n    <ion-item> \r\n      <!--<ion-icon class=\"online\" name=\"desktop\"></ion-icon>      -->\r\n      <ion-icon class=\"card\" name=\"card\"></ion-icon>\r\n      <ion-label class =\"etiqueta\"> Pago en línea  <p>Mis tarjetas registradas </p></ion-label>\r\n      <ion-icon name=\"arrow-dropright-circle\" slot=\"end\" routerLink=\"/tarjetas\"></ion-icon>\r\n      \r\n\r\n      <ion-icon name=\"information-circle\" slot=\"end\" (click)=\"PagoOnlineInfo($event)\"></ion-icon>\r\n    </ion-item>\r\n  <!--  <ion-label class =\"mycard\"> Mis tarjetas registradas </ion-label>-->\r\n\r\n\r\n\r\n  </div>\r\n</ion-list>\r\n  <!--  <ion-button fill = \"clear\" routerLink=\"/add-card\">Agregar tarjeta de crédito y débito</ion-button>-->\r\n  <ion-button fill = \"clear\" routerLink=\"/add-card\">Agregar tarjeta de crédito y débito</ion-button>\r\n<!--  <ion-fab vertical=\"bottom\" class=\"fab\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button class=\"faBoton\" size=\"large\" (click)=\"goCarrito()\" translucent>\r\n        <ion-icon class=\"iconoFab\" name='cart'></ion-icon>\r\n    </ion-fab-button>\r\n</ion-fab>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/metodo-pago/metodo-pago.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/metodo-pago/metodo-pago.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pago {\n  margin-bottom: 10px; }\n\n.card, .efectivo, .terminal, .online {\n  width: 45px;\n  height: 45px; }\n\n.card {\n  color: #332c2cc2; }\n\n.efectivo {\n  color: #6cdc0d; }\n\n.terminal {\n  color: #7676f9; }\n\n.etiqueta {\n  padding-left: 15px; }\n\n.mycard {\n  padding-left: 63px;\n  font-size: 14px; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWV0b2RvLXBhZ28vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xcbWV0b2RvLXBhZ29cXG1ldG9kby1wYWdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDQSxrQkFBa0IsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUtmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWV0b2RvLXBhZ28vbWV0b2RvLXBhZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ297XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZCwuZWZlY3Rpdm8sLnRlcm1pbmFsLC5vbmxpbmV7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBjb2xvcjogIzMzMmMyY2MyO1xyXG59XHJcblxyXG4uZWZlY3Rpdm97XHJcbiAgICBjb2xvcjogIzZjZGMwZDtcclxufVxyXG5cclxuLnRlcm1pbmFse1xyXG4gICAgY29sb3I6ICM3Njc2Zjk7XHJcbn1cclxuXHJcbi5ldGlxdWV0YSB7XHJcbnBhZGRpbmctbGVmdDogMTVweDtcclxuLy9tYXJnaW4tdG9wOiAxNXB4LFxyXG59XHJcblxyXG4ubXljYXJkIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5pY29uY2Fycml0b3tcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaWNvbmJ1c2NhcntcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/metodo-pago/metodo-pago.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/metodo-pago/metodo-pago.page.ts ***!
  \*******************************************************/
/*! exports provided: MetodoPagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoPagoPage", function() { return MetodoPagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_home_popover_home_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home-popover/home-popover.component */ "./src/app/home-popover/home-popover.component.ts");
/* harmony import */ var src_app_home_popover_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home-popover/terminal/terminal.component */ "./src/app/home-popover/terminal/terminal.component.ts");
/* harmony import */ var src_app_home_popover_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/home-popover/pago-online/pago-online.component */ "./src/app/home-popover/pago-online/pago-online.component.ts");






var MetodoPagoPage = /** @class */ (function () {
    function MetodoPagoPage(popoverCtrl, navCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
    }
    MetodoPagoPage.prototype.ngOnInit = function () {
    };
    MetodoPagoPage.prototype.presentPopover = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: src_app_home_popover_home_popover_component__WEBPACK_IMPORTED_MODULE_3__["HomePopoverComponent"],
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MetodoPagoPage.prototype.Terminal = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: src_app_home_popover_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_4__["TerminalComponent"],
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MetodoPagoPage.prototype.PagoOnlineInfo = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: src_app_home_popover_pago_online_pago_online_component__WEBPACK_IMPORTED_MODULE_5__["PagoOnlineComponent"],
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MetodoPagoPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    MetodoPagoPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    MetodoPagoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metodo-pago',
            template: __webpack_require__(/*! ./metodo-pago.page.html */ "./src/app/pages/metodo-pago/metodo-pago.page.html"),
            styles: [__webpack_require__(/*! ./metodo-pago.page.scss */ "./src/app/pages/metodo-pago/metodo-pago.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MetodoPagoPage);
    return MetodoPagoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-metodo-pago-metodo-pago-module.js.map