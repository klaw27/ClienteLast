(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-producto-producto-module"],{

/***/ "./src/app/pages/producto/producto.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/producto/producto.module.ts ***!
  \***************************************************/
/*! exports provided: ProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageModule", function() { return ProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto.page */ "./src/app/pages/producto/producto.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_6__["ProductoPage"]
    }
];
var ProductoPageModule = /** @class */ (function () {
    function ProductoPageModule() {
    }
    ProductoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_6__["ProductoPage"]]
        })
    ], ProductoPageModule);
    return ProductoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/producto/producto.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/producto/producto.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"danger\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Detalles del Producto</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n          <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n       </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title class = \"nomprod\">{{producto.nombre}}</ion-card-title>\r\n  </ion-card-header>\r\n\r\n    <img class = \"imgProducto\" src=\"/assets/img/default_productos.png\" onError= \"this.src='/assets/img/default_productos.png'\">\r\n    \r\n      <ion-card-content class=\"contenido\">\r\n        <ion-label class=\"parrafo\">\r\n          {{producto.descripcion}}\r\n        </ion-label>\r\n        <ion-label class=\"parrafo\">\r\n          Tiempo de preparacion: {{producto.tiempopreparacion}} Min.\r\n        </ion-label>\r\n        <ion-label class=\"precio\">\r\n          $ {{producto.precio * cantidad}}.00 MXN\r\n        </ion-label>\r\n      </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n  <div [ngClass]=\"{'margen': editar == false}\" class=\"sumador\">\r\n      <ion-button class=\"boton\" (click)='add()' size=\"small\" fill='outline'>\r\n        <ion-icon slot=\"icon-only\" name='add'></ion-icon>\r\n      </ion-button>\r\n      <p>{{cantidad}}</p>\r\n      <ion-button class=\"boton\" id='remove' size=\"small\" fill=\"outline\" (click)='remove()'>\r\n        <ion-icon slot=\"icon-only\" name='remove'></ion-icon>\r\n      </ion-button>\r\n\r\n  </div>\r\n\r\n  <div  *ngIf=\"editar\">\r\n      <ion-button color=\"gmail\" class=\"eliminar\" fill=\"clear\" (click)='eliminar(producto.FK_idNegocio)'>\r\n        Eliminar producto del Carrito\r\n      </ion-button>\r\n  </div>\r\n\r\n  <div class=\"agregar\">\r\n    <ion-button *ngIf=\"!editar\" color=\"estore\" (click)=\"agregar(producto.FK_idNegocio)\" class=\"addBoton\" expand=\"full\">Agregar {{cantidad}} al carrito</ion-button>\r\n    <ion-button *ngIf=\"editar\" color=\"estore\" (click)=\"actualizar(producto.FK_idNegocio)\" class=\"addBoton\" expand=\"full\">Actualizar el carrito</ion-button>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/producto/producto.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/producto/producto.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenido {\n  padding: 10px 20px; }\n\n.parrafo {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 1em; }\n\n.sumador {\n  margin: 30px auto 0 auto;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row-reverse; }\n\n.margen {\n  margin-bottom: 65px; }\n\n.boton {\n  height: 48.766px;\n  --border-radius: 50%;\n  --background: white;\n  --color: black;\n  --background-activated: #e6e6e6;\n  --border-color: black;\n  --color-activated: black; }\n\n.eliminar {\n  margin: 20px auto 65px auto;\n  display: block; }\n\n.agregar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.addBoton {\n  margin: 0; }\n\n.imgProducto {\n  width: 70%;\n  display: block;\n  margin: auto; }\n\n.precio {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 20px;\n  text-align: right;\n  color: red;\n  font-weight: bolder; }\n\n.nomprod {\n  display: block;\n  font-size: 20px;\n  font-weight: bolder; }\n\n.iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdG8vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdG9cXHByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG9CQUFnQjtFQUNoQixtQkFBYTtFQUNiLGNBQVE7RUFDUiwrQkFBdUI7RUFDdkIscUJBQWU7RUFDZix3QkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwyQkFBMkI7RUFDM0IsY0FBYyxFQUFBOztBQUlsQjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVEsRUFBQTs7QUFHWjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFVBQVU7RUFDVixjQUFhO0VBQ2pCLFlBQVcsRUFBQTs7QUFHWDtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0by9wcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuaWRve1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG4ucGFycmFmb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5zdW1hZG9ye1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5tYXJnZW57XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG5cclxufVxyXG5cclxuLmJvdG9ue1xyXG4gICAgaGVpZ2h0OiA0OC43NjZweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2U2ZTZlNjtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiBibGFjaztcclxufVxyXG5cclxuLmVsaW1pbmFye1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gNjVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uYWdyZWdhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmFkZEJvdG9ue1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW1nUHJvZHVjdG97XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxubWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5wcmVjaW97XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLm5vbXByb2R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5pY29uY2Fycml0b3tcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uaWNvbmJ1c2NhcntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/producto/producto.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/producto/producto.page.ts ***!
  \*************************************************/
/*! exports provided: ProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPage", function() { return ProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_estore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _services_carrito_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/carrito.service */ "./src/app/services/carrito.service.ts");







var ProductoPage = /** @class */ (function () {
    function ProductoPage(navCtrl, activatedRoute, estore, _carrito, router) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.estore = estore;
        this._carrito = _carrito;
        this.router = router;
        this.noCarrito = 0;
        this.carrito = [];
        this.items = [];
        this.producto = {
            nombre: '',
            tiempopreparacion: '',
            descripcion: '',
            precio: '',
            FK_idNegocio: ''
        };
        this.cantidad = 1;
        this.editar = false;
    }
    ;
    ProductoPage.prototype.ngOnInit = function () {
        var _this = this;
        var funcion = this.activatedRoute.snapshot.paramMap.get('funcion');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.idNegocio = this.activatedRoute.snapshot.paramMap.get('negocio');
        if (funcion == "agregar") {
            this.editar = false;
            var body = {
                id: this.id,
                funcion: "id"
            };
            this.estore.producto(body, "productos.php").subscribe(function (data) {
                console.log(data);
                if (data['success']) {
                    _this.producto = data['producto'];
                }
            });
        }
        //edita
        else {
            this.carrito = this._carrito.items;
            console.log(this.carrito);
            this.editar = true;
            console.log("id del producto a editar " + this.id);
            this.producto = this._carrito.getItem(this.id);
            console.log(this._carrito.getItem(this.id));
            this.cantidad = this.producto['cantidadCarrito'];
            console.log(this.producto['cantidadCarrito']);
        }
        if (this.cantidad == 1) {
            var remove = document.getElementById('remove');
            remove.setAttribute("disabled", "true");
        }
    };
    ProductoPage.prototype.add = function () {
        this.cantidad += 1;
        if (this.cantidad > 1) {
            var remove = document.getElementById('remove');
            remove.removeAttribute("disabled");
        }
    };
    ProductoPage.prototype.remove = function () {
        this.cantidad -= 1;
        if (this.cantidad == 1) {
            var remove = document.getElementById('remove');
            remove.setAttribute("disabled", "true");
        }
    };
    ProductoPage.prototype.agregar = function (idNegocio) {
        this.producto['cantidadCarrito'] = this.cantidad;
        this.producto['precioCarrito'] = this.cantidad * this.producto.precio;
        this._carrito.agregarProducto(this.id, this.producto);
        this._carrito.idNegocio = this.idNegocio;
        this._carrito.guardar_idNegocio();
        this.noCarrito = this._carrito.items.length;
        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
        this.navCtrl.navigateForward('/carrito/' + idNegocio);
        //this.navCtrl.pop();
    };
    ProductoPage.prototype.actualizar = function (idNegocio) {
        console.log(this.producto['cantidadCarrito']);
        this.producto['cantidadCarrito'] = this.cantidad;
        //this.producto['cantidadCarrito'] = this.producto['cantidadCarrito']  + this.cantidad;
        this.producto['precioCarrito'] = this.cantidad * this.producto.precio;
        this._carrito.actualizarItem(this.id, this.producto);
        this._carrito.idNegocio = this.idNegocio;
        this._carrito.guardar_idNegocio();
        //  this.navCtrl.pop();
        // this.navCtrl.navigateForward('/carrito');
        // this.navCtrl.push("CarritoPage");
        this.navCtrl.navigateForward('/carrito/' + idNegocio);
        //this.router.navigate(['/carrito/'+idNegocio]);
        // this.navCtrl.navigateRoot('/carrito');
    };
    ProductoPage.prototype.eliminar = function (idNegocio) {
        this._carrito.eliminarItem(this.id);
        //this.navCtrl.pop();
        //filtrar y obtener id  
        this.navCtrl.navigateForward('/carrito/' + idNegocio);
    };
    ProductoPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito/' + this.idNegocio);
    };
    ProductoPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    ProductoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto',
            template: __webpack_require__(/*! ./producto.page.html */ "./src/app/pages/producto/producto.page.html"),
            styles: [__webpack_require__(/*! ./producto.page.scss */ "./src/app/pages/producto/producto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_estore_service__WEBPACK_IMPORTED_MODULE_4__["EstoreService"],
            _services_carrito_service__WEBPACK_IMPORTED_MODULE_5__["CarritoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductoPage);
    return ProductoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-producto-producto-module.js.map