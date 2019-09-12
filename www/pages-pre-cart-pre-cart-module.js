(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pre-cart-pre-cart-module"],{

/***/ "./src/app/pages/pre-cart/pre-cart.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pre-cart/pre-cart.module.ts ***!
  \***************************************************/
/*! exports provided: PreCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreCartPageModule", function() { return PreCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pre_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pre-cart.page */ "./src/app/pages/pre-cart/pre-cart.page.ts");







var routes = [
    {
        path: '',
        component: _pre_cart_page__WEBPACK_IMPORTED_MODULE_6__["PreCartPage"]
    }
];
var PreCartPageModule = /** @class */ (function () {
    function PreCartPageModule() {
    }
    PreCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pre_cart_page__WEBPACK_IMPORTED_MODULE_6__["PreCartPage"]]
        })
    ], PreCartPageModule);
    return PreCartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pre-cart/pre-cart.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/pre-cart/pre-cart.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\" >\n      <ion-back-button (click)='salir()'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Mi Carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <div class=\"data principal\" *ngIf=\"carrito.length != 0\" *ngFor=\"let producto of carrito\">  -->\n        <div class=\"tituloPlatillo\" *ngFor=\"let item of groupArr; let indice=index\">\n\n        <div class=\"contenidoLocal\" >\n         <!-- <h6 class=tituloPlatillo (click)='menu(item.FK_idNegocio)' >Negocio: {{item.FK_idNegocio}} -->\n            <h6 class=tituloPlatillo (click)='menu(item.FK_idNegocio)' >Nombre de negocio id: {{item.FK_idNegocio}}\n             <!-- <ion-icon name=\"arrow-dropdown\" (click)=\"toggle(item.FK_idNegocio)\" ></ion-icon>\n             <ion-icon name=\"arrow-dropup\" (click)=\"toggle2(item.FK_idNegocio)\" ></ion-icon> -->\n<!-- \n             <ion-icon name=\"arrow-dropdown\" (click)=\"toggle(indice)\" *ngIf=\"mostrar\"></ion-icon>\n             <ion-icon name=\"arrow-dropup\" (click)=\"toggle2(item.FK_idNegocio)\" *ngIf=\"cerrar\"></ion-icon> -->\n          </h6>\n\n        </div>\n           <ion-card style=\"width: 94%;\">\n                <!-- <ion-card *ngIf=\"ocultar1 ===item.FK_idNegocio\"> -->\n                    <!-- <ion-card *ngIf=\"ocultar1\"> -->\n                    <ion-item class=\"contenidoPlatillo\" *ngFor=\"let value of item.groupItem\" (click)=\"editarProducto(value.id_producto)\">\n                    <ion-thumbnail slot=\"start\" class=\"thumbnail\">\n                        <img src=\"/assets/img/default_productos.png\" onError= \"this.src='/assets/img/default_productos.png'\" (click)=\"editarProducto(value.id_producto)\" >\n                      </ion-thumbnail>\n                      <div class=\"contenidoPlatillo\" (click)='editarProducto(value.id_producto)'>\n                          <ion-label>\n                            <h6 class=\"tituloName\">{{value.nombre}}</h6>\n                            <h6 class=\"tituloLocal\">{{value.descripcion}}</h6>\n                            <p> Cantidad: {{value.cantidadCarrito}} X ${{value.precio}} MXN</p>\n                          </ion-label>\n        <!-- <div class=\"contenidoPlatillo\" *ngFor=\"let value of item.groupItem\" (click)=\"editarProducto(producto.id_producto)\">-->\n                  </div>\n                  </ion-item>\n                  <div class=\"tituloPlatillo\">\n                  <div class=\"wrapper\" >\n                    <div class=\"precio\"  style=\"float: left; width: 220px;\" >\n                       <!-- <p class=\"precio\">Costo de envio: $100.00</p> -->\n                       <p class=\"precio\">Total: ${{total[indice]}}.00 MXN</p>\n                       <!-- <span>${{total.toFixed(2)}}</span> -->\n                     </div>\n                   <div class=\"btnBuy\"  style=\"float: right; width: 220px;\" >\n                      <ion-button (click)=\"goCarrito(item.FK_idNegocio)\" class =\"btnBuy\" size=\"small\" > Comprar </ion-button>\n                   </div>\n                </div>\n              </div>\n\n               </ion-card>\n\n      </div>\n\n\n\n      <div class=\"nada principal\" *ngIf=\"carrito.length == 0\">\n        <ion-label class=\"tituloVacio\">\n          Aún no hay productos en el carrito\n        </ion-label>\n\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pre-cart/pre-cart.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/pre-cart/pre-cart.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n  width: 75px;\n  height: 75px; }\n\n.contenidoPlatillo {\n  width: 100%; }\n\n.tituloPlatillo {\n  font-size: 17px;\n  margin-left: 8px;\n  font-weight: bold; }\n\np {\n  font-size: 13px;\n  margin-top: 5px; }\n\n.my-nav {\n  list-style-type: disc; }\n\n.contenidoLocal {\n  width: 100%; }\n\n.tituloVacio {\n  margin-top: 20px;\n  display: inline-block;\n  font-size: 1.5rem;\n  color: #000000;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 30px; }\n\n.tituloName {\n  font-weight: bold;\n  font-size: 15px; }\n\n.tituloLocal {\n  font-size: 14px; }\n\n.btnBuy {\n  text-align: right;\n  margin-top: 3px;\n  margin-left: 25px; }\n\n.precio {\n  margin-bottom: 3px;\n  margin-top: 10px;\n  color: #950505; }\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-gap: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlLWNhcnQvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xccHJlLWNhcnRcXHByZS1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLGtCQUFrQjtFQUVsQixnQkFBZ0I7RUFDaEIsY0FBcUIsRUFBQTs7QUFHekI7RUFDSSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZS1jYXJ0L3ByZS1jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aHVtYm5haWx7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxufVxyXG5cclxuLmNvbnRlbmlkb1BsYXRpbGxve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXR1bG9QbGF0aWxsb3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLm15LW5hdiB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgfVxyXG4gIC5jb250ZW5pZG9Mb2NhbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0dWxvVmFjaW97XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbn1cclxuLnRpdHVsb05hbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnRpdHVsb0xvY2Fse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuQnV5e1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5wcmVjaW97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxNDksIDUsIDUpO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweCAxMDBweDtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAvLyBjb2xvcjogIzQ0NDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/pre-cart/pre-cart.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pre-cart/pre-cart.page.ts ***!
  \*************************************************/
/*! exports provided: PreCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreCartPage", function() { return PreCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/carrito.service */ "./src/app/services/carrito.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PreCartPage = /** @class */ (function () {
    // name="arrow-dropdown"
    // name="arrow-dropup"
    function PreCartPage(_carrito, navCtrl) {
        this._carrito = _carrito;
        this.navCtrl = navCtrl;
        this.carrito = {
            id_producto: '',
            nombre: '',
            descripcion: '',
            tiempopreparacion: '',
            precio: '',
            fotografia: "",
            precioCarrito: "",
            FK_idNegocio: ''
        };
        this.mostrar = true;
        this.cerrar = false;
        this.ocultar1 = true;
        this.icono = "arrow-dropdown";
        this.coordenadas = {};
        this.total = [];
    }
    ;
    PreCartPage.prototype.ngOnInit = function () {
        var _this = this;
        this.carrito = this._carrito.items;
        console.log(this._carrito);
        this.groupArr = this.carrito.reduce(function (r, _a) {
            var FK_idNegocio = _a.FK_idNegocio;
            if (!r.some(function (o) { return o.FK_idNegocio == FK_idNegocio; })) {
                r.push({ FK_idNegocio: FK_idNegocio, groupItem: _this.carrito.filter(function (v) { return v.FK_idNegocio == FK_idNegocio; }) });
                _this.suma(FK_idNegocio);
                //console.log(this.total); 
            }
            _this.ArrayTotal = r;
            return r;
        }, []);
        // this.suma(this.groupArr.FK_idNegocio);
        //console.log(this.total); 
        console.log(this.ArrayTotal);
    };
    PreCartPage.prototype.suma = function (id) {
        // suma(){
        this.ArrayTotal = this.carrito.filter(function (v) { return v.FK_idNegocio == id; });
        var tot = 0;
        this.ArrayTotal.forEach(function (obj) { tot += parseInt(obj.precioCarrito); });
        this.total.push(tot);
    };
    PreCartPage.prototype.menu = function (id) {
        this.navCtrl.navigateForward('/local-menu/' + id);
    };
    PreCartPage.prototype.editarProducto = function (id) {
        this.navCtrl.navigateForward('/producto/' + id + "/editar/" + this.carrito.FK_idNegocio);
    };
    PreCartPage.prototype.goCarrito = function (id) {
        // this.navCtrl.navigateForward('/pre-cart');
        this.navCtrl.navigateForward('/carrito/' + id);
    };
    PreCartPage.prototype.salir = function () {
        this.navCtrl.navigateBack('/dashboard');
    };
    PreCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pre-cart',
            template: __webpack_require__(/*! ./pre-cart.page.html */ "./src/app/pages/pre-cart/pre-cart.page.html"),
            styles: [__webpack_require__(/*! ./pre-cart.page.scss */ "./src/app/pages/pre-cart/pre-cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_carrito_service__WEBPACK_IMPORTED_MODULE_2__["CarritoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], PreCartPage);
    return PreCartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pre-cart-pre-cart-module.js.map