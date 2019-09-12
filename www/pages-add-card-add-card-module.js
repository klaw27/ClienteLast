(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"],{

/***/ "./src/app/pages/add-card/add-card.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.module.ts ***!
  \***************************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");







var routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]
    }
];
var AddCardPageModule = /** @class */ (function () {
    function AddCardPageModule() {
    }
    AddCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
        })
    ], AddCardPageModule);
    return AddCardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Agregar Tarjeta</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n        <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <!--<img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>-->\r\n    \r\n    <div class=\"backTarjeta\">\r\n        <div class=\"contenTarjeta\">\r\n          <div class=\"esfera\"></div>\r\n          <div class=\"esfera2\"></div>\r\n          <img class=\"chip\" src=\"/assets/img/chip.png\" alt=\"\" srcset=\"\">\r\n          <div class=\"masterCard\">\r\n            <div class=\"rojo\"></div>\r\n            <div class=\"amarillo\"></div>\r\n          </div>\r\n          <div class=\"infoTarjeta\">\r\n              <div class=\"numTarjeta\">\r\n                  <span class=\"cuarteto\">1234</span>\r\n                  <span class=\"cuarteto\">****</span>\r\n                  <span class=\"cuarteto\">****</span>\r\n                  <span class=\"cuarteto\">****</span>\r\n                </div>\r\n                <div class=\"nomFecha\">\r\n                  <span class=nombre></span>\r\n                  <span class=\"fecha\"></span>\r\n                </div>    \r\n          </div>  \r\n        </div>\r\n     </div>\r\n    \r\n     <P>DATOS DE LA TARJETA</P>\r\n  <!-- <form [formGroup]=\"myForm\" (ngSubmit)=\"saveData()\" novalidate> \r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Nombre del titular:</ion-label>\r\n            <ion-input formControlName=\"titular\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <div class = \"error-messages\" *ngIf=\"myForm.get('titular').errors && myForm.get('titular').dirty\">\r\n            <ng-container>\r\n                <p color=\"danger\" ion-text *ngIf=\"myForm.get('titular').hasError('required')\">Campo requerido</p>\r\n            </ng-container>            \r\n          </div>\r\n\r\n          <ion-item>\r\n              <ion-label position=\"stacked\">Número de tarjeta:</ion-label>\r\n              <ion-input formControlName=\"numberCard\" type=\"number\" placeholder=\"XXXX-XXXX-XXXX-XXXX\"></ion-input>\r\n            </ion-item>\r\n            <div class = \"error-messages\" *ngIf=\"myForm.get('numberCard').errors && myForm.get('numberCard').dirty\">\r\n              <ng-container>\r\n                  <p color=\"danger\" ion-text *ngIf=\"myForm.get('numberCard').hasError('required')\">Campo requerido</p>\r\n                  <p color=\"danger\" ion-text *ngIf=\"myForm.get('numberCard').hasError('pattern')\">Debe capturar 16 caracteres</p>\r\n              </ng-container>            \r\n            </div>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">Fecha de vencimiento:</ion-label>\r\n                <ion-datetime formControlName=\"vencimiento\" display-format=\"MM/YYYY\" min=\"2019\" max=\"2025-12-31\" placeholder=\"MM / YYYY\"></ion-datetime> \r\n                   </ion-item>\r\n              <div class = \"error-messages\" *ngIf=\"myForm.get('vencimiento').errors && myForm.get('vencimiento').dirty\">\r\n                <ng-container>\r\n                    <p color=\"danger\" ion-text *ngIf=\"myForm.get('vencimiento').hasError('required')\">Campo requerido</p>\r\n               </ng-container>            \r\n              </div>\r\n\r\n              <ion-item>\r\n                  <ion-label position=\"stacked\">Código de seguridad:</ion-label>\r\n                  <ion-input formControlName=\"cvv\" type=\"number\" placeholder=\"(CVV)\"></ion-input>\r\n                </ion-item>\r\n                <div class = \"error-messages\" *ngIf=\"myForm.get('cvv').errors && myForm.get('cvv').dirty\">\r\n                  <ng-container>\r\n                      <p color=\"danger\" ion-text *ngIf=\"myForm.get('cvv').hasError('required')\">Campo requerido</p>\r\n                      <p color=\"danger\" ion-text *ngIf=\"myForm.get('cvv').hasError('pattern')\">Máximo 4 caracteres</p>\r\n                  </ng-container>            \r\n                </div>\r\n\r\n  <div class =\"btn\">\r\n      <ion-button expand =\"block\" color =\"primary\" [disabled]=\"myForm.invalid\" (click)=\"saveData()\">Guardar</ion-button>\r\n  </div>\r\n  </form>--> \r\n\r\n  <ion-item>\r\n      <ion-label position=\"stacked\">Nombre del Cliente:</ion-label>\r\n      <ion-input disabled type=\"text\" size=\"20\" autocomplete=\"on\" name=\"client_name\" (keyup)=\"getClient($event)\"[(ngModel)]='usuario.nombre + \" \" + usuario.apellidoPat + \" \" +  usuario.apellidoMat'> </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n \r\n      <ion-label position=\"stacked\">Correo Electr&oacute;nico:</ion-label>\r\n      <ion-input disabled type=\"text\" size=\"20\" autocomplete=\"on\" name=\"cliente_email\"  (keyup)=\"getEmail($event)\" [(ngModel)]='usuario.email'> </ion-input>\r\n    </ion-item>\r\n \r\n\r\n  \r\n\r\n  <form method=\"POST\" id=\"customer-form\" [formGroup]=\"myForm\" novalidate>\r\n    <input type=\"hidden\" name=\"token_id\" id=\"token_id\"/>\r\n\r\n   \r\n      <ion-item>\r\n      <ion-label position=\"stacked\">Nombre del titular:</ion-label>\r\n      <ion-input formControlName=\"titular\" type=\"text\" autocomplete=\"off\"   data-openpay-card=\"holder_name\" ></ion-input>\r\n      </ion-item>\r\n      <div class = \"error-messages\" *ngIf=\"myForm.get('titular').errors && myForm.get('titular').dirty\">\r\n        <ng-container>\r\n            <p color=\"danger\" ion-text *ngIf=\"myForm.get('titular').hasError('required')\">Campo requerido</p>\r\n        </ng-container>            \r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Número de tarjeta:</ion-label>\r\n      <ion-input  formControlName=\"numberCard\" autocomplete=\"off\" data-openpay-card=\"card_number\" type=\"number\" placeholder=\"XXXX-XXXX-XXXX-XXXX\"></ion-input>\r\n      </ion-item>\r\n      <div class = \"error-messages\" *ngIf=\"myForm.get('numberCard').errors && myForm.get('numberCard').dirty\">\r\n        <ng-container>\r\n            <p color=\"danger\" ion-text *ngIf=\"myForm.get('numberCard').hasError('required')\">Campo requerido</p>\r\n            <p color=\"danger\" ion-text *ngIf=\"myForm.get('numberCard').hasError('pattern')\">Debe capturar de 15 a 16 caracteres</p>\r\n        </ng-container>            \r\n      </div>\r\n   \r\n      <ion-item>\r\n      <ion-label position=\"stacked\">Código de seguridad (CVV2):</ion-label>\r\n      <ion-input formControlName=\"cvv\" type=\"number\" size=\"4\" autocomplete=\"off\"  data-openpay-card=\"cvv2\" type=\"number\" placeholder=\"CVV2\" ></ion-input>\r\n    </ion-item>\r\n    <div class = \"error-messages\" *ngIf=\"myForm.get('cvv').errors && myForm.get('cvv').dirty\">\r\n        <ng-container>\r\n            <p color=\"danger\" ion-text *ngIf=\"myForm.get('cvv').hasError('required')\">Campo requerido</p>\r\n            <p color=\"danger\" ion-text *ngIf=\"myForm.get('cvv').hasError('pattern')\">Máximo 4 caracteres</p>\r\n        </ng-container>            \r\n      </div>\r\n\r\n\r\n    <p>\r\n      <ion-label position=\"stacked\" class = \"fecha\">Fecha de vencimiento (MM/YY):</ion-label>\r\n      <input formControlName=\"vencimiento\"  type=\"number\" size=\"2\" data-openpay-card=\"expiration_month\" class = \"venci\"/> \r\n      <ion-label class = \"tab\">/</ion-label>\r\n      <input formControlName=\"vencimiento\"  type=\"number\" size=\"2\" data-openpay-card=\"expiration_year\" class = \"venci\"/>\r\n    </p>\r\n    <div class = \"error-messages\" *ngIf=\"myForm.get('vencimiento').errors && myForm.get('vencimiento').dirty\">\r\n        <ng-container>\r\n            <p color=\"danger\" ion-text *ngIf=\"myForm.get('vencimiento').hasError('required')\">Campo requerido</p>\r\n            <p color=\"danger\" ion-text *ngIf=\"myForm.get('vencimiento').hasError('pattern')\">Máximo 2 caracteres</p>\r\n       </ng-container>            \r\n      </div>\r\n  \r\n \r\n   <!--  <input type=\"submit\" id=\"save-button\" value=\"Pagar\"/>-->\r\n   <div class =\"btn\">\r\n   <ion-button [disabled]=\"myForm.invalid\" (click)=\"pagar()\" expand =\"block\" color =\"primary\" >Guardar</ion-button>\r\n  </div>\r\n\r\n\r\n</form>\r\n\r\n\r\n\r\n </ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  font-size: 10px;\n  color: red;\n  text-align: left;\n  margin-left: 17px; }\n\n.etiquetas {\n  font-size: 0.7cm;\n  color: red;\n  text-align: left; }\n\n.backTarjeta {\n  background-color: #f3f3f3;\n  width: 100%;\n  height: 35%;\n  display: inline-block; }\n\n.contenTarjeta {\n  width: 90%;\n  height: 75%;\n  background-color: #d8d8d8;\n  border-radius: 8px;\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n  margin-top: 30px; }\n\n.esfera {\n  border-radius: 50%;\n  background-color: #bfbfbf;\n  position: absolute;\n  width: 115%;\n  height: 172%;\n  top: 5%;\n  left: -22%; }\n\n.esfera2 {\n  border-radius: 50%;\n  position: absolute;\n  width: 110%;\n  height: 172%;\n  top: -130%;\n  left: 27%;\n  border: dotted white; }\n\n.chip {\n  position: absolute;\n  width: 55px;\n  top: 29%;\n  left: 5%;\n  height: 45px; }\n\n.masterCard {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  display: flex; }\n\n.rojo, .amarillo {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%; }\n\n.rojo {\n  background-color: red;\n  position: absolute;\n  right: 50%; }\n\n.amarillo {\n  background-color: yellow;\n  opacity: 0.85; }\n\n.infoTarjeta {\n  position: absolute;\n  bottom: 0%;\n  width: 100%;\n  height: 50%;\n  padding: 0 20px; }\n\n.cuarteto {\n  font-family: 'IBM Plex Sans';\n  font-size: 1.5rem;\n  margin-right: 20px;\n  color: white;\n  text-shadow: 0 0 5px black; }\n\n.btn {\n  margin-top: 25px; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n.fecha {\n  margin-left: 17px; }\n\n.venci {\n  width: 55px;\n  margin-left: 15px; }\n\n.tab {\n  margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xcYWRkLWNhcmRcXGFkZC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0VBRWhCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSx3QkFBd0I7RUFDeEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUk5QjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR3JCO0VBRUksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtY2FyZC9hZGQtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZXMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmV0aXF1ZXRhc3tcclxuICAgIGZvbnQtc2l6ZTogMC43Y207XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5iYWNrVGFyamV0YXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jb250ZW5UYXJqZXRhe1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7IFxyXG59XHJcblxyXG5cclxuLmVzZmVyYXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTE1JTtcclxuICAgIGhlaWdodDogMTcyJTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiAtMjIlO1xyXG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4uZXNmZXJhMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgaGVpZ2h0OiAxNzIlO1xyXG4gICAgdG9wOiAtMTMwJTtcclxuICAgIGxlZnQ6IDI3JTtcclxuICAgIGJvcmRlcjogZG90dGVkIHdoaXRlO1xyXG59XHJcblxyXG4uY2hpcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgdG9wOiAyOSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuLm1hc3RlckNhcmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJvam8sIC5hbWFyaWxsb3tcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucm9qb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5hbWFyaWxsb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbn1cclxuXHJcbi5pbmZvVGFyamV0YXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uY3VhcnRldG97XHJcbiAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcclxufVxyXG5cclxuXHJcbi5idG57XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uaWNvbmNhcnJpdG97XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmljb25idXNjYXJ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZlY2hhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbn1cclxuXHJcbi52ZW5jaXtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi50YWJ7XHJcbiBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.ts ***!
  \*************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AddCardPage = /** @class */ (function () {
    function AddCardPage(alertController, router, navCtrl, fb, http, toastCtrl) {
        this.alertController = alertController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.http = http;
        this.toastCtrl = toastCtrl;
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
        //class
        this.clienteOpen = '';
        this.customerOpenid = '';
        this.clientName = '';
        this.clientEmail = '';
        this.Customer = {};
        this.cardData = {};
        this.cliente = "";
        this.deviceSessionId = "";
        this.token_id = "";
        this.result = "";
        this.items = "";
        this.allData = "";
        this.error_messages = {
            'email': [
                { type: "required", message: "El email es requerido" },
                { type: "minLength", message: "Minimo 6444444444444444444444444444444444444" },
                { type: "maxLength", message: "Maximo 9444444444444" },
            ],
        };
        this.myForm = this.fb.group({
            numberCard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-z0-9_-]{15,16}$/)]],
            titular: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            vencimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-z0-9_-]{2}$/)]],
            cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-z0-9_-]{3,4}$/)]]
            //url: ['', [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
            //password: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
        });
    }
    AddCardPage.prototype.ngOnInit = function () {
        this.customerOpenid = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, JSON.parse(localStorage.getItem('userOpen')));
        this.usuario = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, JSON.parse(localStorage.getItem('user')));
        this.clientName = this.usuario['nombre'];
        this.clientEmail = this.usuario['email'];
        console.log(this.clientEmail + " " + this.clientName + " id de openpay: ");
        console.log(this.customerOpenid);
        console.log(this.customerOpenid.id);
        //datos de openpay
        OpenPay.setId('mwvt7x3ehfnlgluepwng');
        OpenPay.setApiKey('pk_1a559d9438714db7b1b88ae6b5756358');
        //para sistema antifraude
        this.deviceSessionId = OpenPay.deviceData.setup();
        console.log(this.deviceSessionId);
        OpenPay.setSandboxMode(true);
        //OpenPay.getSandboxMode(); */
    };
    AddCardPage.prototype.iniciar = function () {
        var account = false;
        this.Customer = {
            name: this.clientName,
            email: this.clientEmail,
            requires_account: account
        };
    };
    AddCardPage.prototype.pagar = function () {
        var _this = this;
        this.iniciar();
        //formulario correcto
        OpenPay.token.extractFormAndCreate('customer-form', function (response) {
            _this.token_id = response.data.id;
            console.log(response);
            console.log(_this.token_id + " se enviara formulario " + "Cliente: " + _this.clientName + "Email: " + _this.clientEmail);
            console.log(_this.Customer);
            // this.presentarToast("La tarjeta se agrego correctamente");
            _this.postDatos();
        }, function (response) {
            //error en el formulario
            var desc = response.data.description != undefined ? response.data.description : response.message;
            _this.presentarToast("ERROR [" + response.status + "] " + desc);
            console.log("ERROR [" + response.status + "] " + desc);
            console.log("El boton se bloquea");
        });
    };
    AddCardPage.prototype.postDatos = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        //CREAR TARJETA
        this.cardData = {
            id: this.customerOpenid.id,
            token_id: this.token_id,
            device_session_id: this.deviceSessionId
        };
        //return this.http.post("http://localhost/api/Openpay/save_card.php",JSON.stringify(this.cardData),{headers:headers}).subscribe(
        return this.http.post("https://localhost:5010/api/card/add", JSON.stringify(this.cardData), httpOptions).subscribe(function (data) {
            console.log("Tarjeta agregada al cliente");
            console.log(data);
            _this.addCard();
        }, function (error) {
            console.log(error);
        });
    };
    AddCardPage.prototype.presentarToast = function (mensaje) {
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
    AddCardPage.prototype.addCard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Operacion exitosa',
                            message: '¡La tarjeta se guardó correctamente!',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    handler: function (data) {
                                        _this.router.navigateByUrl("/tarjetas");
                                    }
                                }
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
    AddCardPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    AddCardPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    AddCardPage.prototype.getEmail = function (event) {
        this.clientEmail = event.target.value;
    };
    AddCardPage.prototype.getClient = function (event) {
        this.clientName = event.target.value;
    };
    AddCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-card',
            template: __webpack_require__(/*! ./add-card.page.html */ "./src/app/pages/add-card/add-card.page.html"),
            styles: [__webpack_require__(/*! ./add-card.page.scss */ "./src/app/pages/add-card/add-card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], AddCardPage);
    return AddCardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-card-add-card-module.js.map