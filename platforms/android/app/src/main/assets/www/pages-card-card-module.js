(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-card-module"],{

/***/ "./src/app/pages/card/card.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.module.ts ***!
  \*******************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/pages/card/card.page.ts");







var routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]
    }
];
var CardPageModule = /** @class */ (function () {
    function CardPageModule() {
    }
    CardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
        })
    ], CardPageModule);
    return CardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/card/card.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <div class=\"backTarjeta\">\r\n    <div class=\"contenTarjeta\">\r\n      <div class=\"esfera\"></div>\r\n      <div class=\"esfera2\"></div>\r\n      <img class=\"chip\" src=\"/assets/img/chip.png\" alt=\"\" srcset=\"\">\r\n      <div class=\"masterCard\">\r\n        <div class=\"rojo\"></div>\r\n        <div class=\"amarillo\"></div>\r\n      </div>\r\n      <div class=\"infoTarjeta\">\r\n          <div class=\"numTarjeta\">\r\n              <span class=\"cuarteto\">1234</span>\r\n              <span class=\"cuarteto\">****</span>\r\n              <span class=\"cuarteto\">****</span>\r\n              <span class=\"cuarteto\">****</span>\r\n            </div>\r\n            <div class=\"nomFecha\">\r\n              <span class=nombre></span>\r\n              <span class=\"fecha\"></span>\r\n            </div>    \r\n      </div>  \r\n    </div>\r\n </div>\r\n\r\n\r\n    <form  method=\"POST\" id=\"customer-form\">\r\n      <input type=\"text\" name=\"token_id\" id=\"token_id\"/>\r\n      <fieldset>\r\n        <legend>Datos del cliente</legend>\r\n      <p>\r\n        <label>Nombre</label>\r\n        <input type=\"text\" size=\"20\" autocomplete=\"on\" name=\"client_name\"/>\r\n      </p>\r\n      <p>\r\n        <label>Correo Electr&oacute;nico</label>\r\n        <input type=\"text\" size=\"20\" autocomplete=\"on\" name=\"cliente_email\"/>\r\n      </p>\r\n      </fieldset>\r\n      <fieldset>\r\n        <legend>Datos de la tarjeta</legend>\r\n      <p>\r\n        <label>Nombre</label>\r\n        <input type=\"text\" size=\"20\" autocomplete=\"off\"\r\n          data-openpay-card=\"holder_name\" />\r\n      </p>\r\n      <p>\r\n        <label>N&uacute;mero</label>\r\n        <input type=\"text\" size=\"20\" autocomplete=\"off\"\r\n          data-openpay-card=\"card_number\" />\r\n      </p>\r\n      <p>\r\n        <label>CVV2</label>\r\n        <input type=\"text\" size=\"4\" autocomplete=\"off\"\r\n          data-openpay-card=\"cvv2\" />\r\n      </p>\r\n      <p>\r\n        <label>Fecha de expiraci&oacute;n (MM/YY)</label>\r\n        <input type=\"text\" size=\"2\" data-openpay-card=\"expiration_month\" /> \r\n        <input type=\"text\" size=\"2\" data-openpay-card=\"expiration_year\" />\r\n      </p>\r\n      </fieldset>\r\n      <ion-button (click)=\"pagar()\">Pagar</ion-button>\r\n</form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/card/card.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backTarjeta {\n  background-color: #f3f3f3;\n  width: 100%;\n  height: 35%;\n  display: inline-block; }\n\n.contenTarjeta {\n  width: 80%;\n  height: 73%;\n  background-color: #d8d8d8;\n  border-radius: 8px;\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n  margin-top: 30px; }\n\n.esfera {\n  border-radius: 50%;\n  background-color: #bfbfbf;\n  position: absolute;\n  width: 115%;\n  height: 172%;\n  top: 5%;\n  left: -22%; }\n\n.esfera2 {\n  border-radius: 50%;\n  position: absolute;\n  width: 110%;\n  height: 172%;\n  top: -130%;\n  left: 27%;\n  border: dotted white; }\n\n.chip {\n  position: absolute;\n  width: 55px;\n  top: 29%;\n  left: 5%;\n  height: 45px; }\n\n.masterCard {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  display: flex; }\n\n.rojo, .amarillo {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%; }\n\n.rojo {\n  background-color: red;\n  position: absolute;\n  right: 50%; }\n\n.amarillo {\n  background-color: yellow;\n  opacity: 0.85; }\n\n.infoTarjeta {\n  position: absolute;\n  bottom: 0%;\n  width: 100%;\n  height: 50%;\n  padding: 0 20px; }\n\n.cuarteto {\n  font-family: 'IBM Plex Sans';\n  font-size: 1.5rem;\n  margin-right: 20px;\n  color: white;\n  text-shadow: 0 0 5px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZC9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXENsaWVudGVGaW5hbFxcQ2xpZW50ZUxhc3Qvc3JjXFxhcHBcXHBhZ2VzXFxjYXJkXFxjYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksd0JBQXdCO0VBQ3hCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUduQjtFQUNJLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQvY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja1RhcmpldGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uY29udGVuVGFyamV0YXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDczJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyBcclxufVxyXG5cclxuXHJcbi5lc2ZlcmF7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDExNSU7XHJcbiAgICBoZWlnaHQ6IDE3MiU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogLTIyJTtcclxufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuLmVzZmVyYTJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTEwJTtcclxuICAgIGhlaWdodDogMTcyJTtcclxuICAgIHRvcDogLTEzMCU7XHJcbiAgICBsZWZ0OiAyNyU7XHJcbiAgICBib3JkZXI6IGRvdHRlZCB3aGl0ZTtcclxufVxyXG5cclxuLmNoaXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIHRvcDogMjklO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5tYXN0ZXJDYXJke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yb2pvLCAuYW1hcmlsbG97XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnJvam97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTAlO1xyXG59XHJcblxyXG4uYW1hcmlsbG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG59XHJcblxyXG4uaW5mb1RhcmpldGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLmN1YXJ0ZXRve1xyXG4gICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBTYW5zJztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/card/card.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/card/card.page.ts ***!
  \*****************************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardPage = /** @class */ (function () {
    function CardPage() {
    }
    CardPage.prototype.ngOnInit = function () {
        /*OpenPay.setId('mzdtln0bmtms6o3kck8f');
        OpenPay.setApiKey('pk_f0660ad5a39f4912872e24a7a660370c');
        var deviceSessionId = OpenPay.deviceData.setup();
        console.log(deviceSessionId);
        OpenPay.setSandboxMode(true);*/
        OpenPay.setId('mwvt7x3ehfnlgluepwng');
        OpenPay.setApiKey('pk_1a559d9438714db7b1b88ae6b5756358');
        //OpenPay.setPrivateKey('sk_8c673c762ece48359ed29e4dcb2501d7');
        var deviceSessionId = OpenPay.deviceData.setup();
        console.log(deviceSessionId);
        OpenPay.setSandboxMode(true);
    };
    CardPage.prototype.pagar = function () {
        OpenPay.token.extractFormAndCreate('customer-form', function (response) {
            console.log(response);
        }, function (response) {
            console.log(response);
        });
    };
    CardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.page.html */ "./src/app/pages/card/card.page.html"),
            styles: [__webpack_require__(/*! ./card.page.scss */ "./src/app/pages/card/card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardPage);
    return CardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-card-card-module.js.map