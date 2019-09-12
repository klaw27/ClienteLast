(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pedidos-pedidos-module"],{

/***/ "./src/app/pages/pedidos/pedidos.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pedidos/pedidos.module.ts ***!
  \*************************************************/
/*! exports provided: PedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos.page */ "./src/app/pages/pedidos/pedidos.page.ts");







var routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]
    }
];
var PedidosPageModule = /** @class */ (function () {
    function PedidosPageModule() {
    }
    PedidosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
        })
    ], PedidosPageModule);
    return PedidosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pedidos/pedidos.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/pedidos/pedidos.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Mis Pedidos</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon class=\"iconbuscar\" name='search' (click)=\"goBuscar()\"></ion-icon>\r\n      <ion-icon class=\"iconcarrito\" name='cart' (click)=\"goCarrito()\"></ion-icon>\r\n   </ion-buttons>\r\n  </ion-toolbar>\r\n      <!-- Segmentacion de pantallas -->\r\n<ion-segment [(ngModel)]=\"segment\">\r\n    <ion-segment-button value=\"Entregados\" color =\"primary\" (click)=\"Pendientes()\">\r\n  <ion-label>Pendientes</ion-label>\r\n  </ion-segment-button>\r\n    <ion-segment-button value=\"Finalizados\" color =\"primary\" (click)=\"Finalizados()\" >\r\n  <ion-label>Finalizados</ion-label>\r\n  </ion-segment-button>\r\n    <ion-segment-button value=\"Cancelados\" color =\"primary\" (click)=\"Cancelados()\">\r\n  <ion-label>Cancelados</ion-label>\r\n  </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n    <ion-item *ngFor=\"let ped of peds | async\" [class.done]=\"ped.done\">\r\n      <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n          <img src=\"/assets/img/toks.png\" > </ion-thumbnail>\r\n     {{ ped | json}}\r\n    </ion-item>\r\n</ion-content>\r\n\r\n \r\n  <!--  <img src=\"/assets/img/EstoCuadro.png\" alt=\"logo estor\" class='logoPrinipal'>\r\n <ion-list >\r\n\t\t<ion-item *ngFor=\"let item of items\">\r\n        <ion-thumbnail slot=\"start\" class=\"thumbnail\">\r\n            <img src=\"/assets/img/toks.png\" >\r\n        </ion-thumbnail>\r\n      <ion-label>\r\n          <h6 class=tituloLocal>{{item.nombre}}</h6>\r\n          <p>{{item.foto}} {{item.foto}}</p>\r\n          <p>Horario: {{item.foto}} - {{item.foto}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\t</ion-list>--> \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/pedidos/pedidos.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/pedidos/pedidos.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconcarrito {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px; }\n\n.iconbuscar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVkaWRvcy9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXENsaWVudGVGaW5hbFxcQ2xpZW50ZUxhc3Qvc3JjXFxhcHBcXHBhZ2VzXFxwZWRpZG9zXFxwZWRpZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlZGlkb3MvcGVkaWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmNhcnJpdG97XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmljb25idXNjYXJ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pedidos/pedidos.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pedidos/pedidos.page.ts ***!
  \***********************************************/
/*! exports provided: PedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPage", function() { return PedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PedidosPage = /** @class */ (function () {
    //constructor(public navCtrl: NavController) {
    // Eliminar si causa error 
    function PedidosPage(navCtrl, todoService, AfDb) {
        this.navCtrl = navCtrl;
        this.todoService = todoService;
        this.AfDb = AfDb;
        this.segment = "Entregados";
        //lista:any;
        this.Finalizado = [{ nombre: "Tortas", foto: "FINALIZADO" },
            { nombre: "Carnitas", foto: "FINALIZADO" },
            { nombre: "Tortas `Las tortugas`", foto: "FINALIZADO" }];
        this.Pendiente = [{ nombre: "Zapatos", foto: "PENDIENTE" },
            { nombre: "Vino", foto: "PENDIENTE.png" }];
        this.Cancelado = [{ nombre: "Zapatos", foto: "CANCELADO" }];
        this.Pendientes();
        this.itemsRef = AfDb.list('pedidos/');
        this.peds = this.itemsRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
        this.peds.subscribe(function (res) { return console.log(res); });
        //this.peds.subscribe(res => console.log(res.filter(x => x.key== "77")));
    }
    PedidosPage.prototype.ngOnInit = function () {
    };
    PedidosPage.prototype.Pendientes = function () {
        this.items = this.Pendiente;
    };
    PedidosPage.prototype.Finalizados = function () {
        this.items = this.Finalizado;
    };
    PedidosPage.prototype.Cancelados = function () {
        this.items = this.Cancelado;
    };
    PedidosPage.prototype.goCarrito = function () {
        this.navCtrl.navigateForward('/carrito');
    };
    PedidosPage.prototype.goBuscar = function () {
        this.navCtrl.navigateForward("/buscar");
    };
    PedidosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pedidos',
            template: __webpack_require__(/*! ./pedidos.page.html */ "./src/app/pages/pedidos/pedidos.page.html"),
            styles: [__webpack_require__(/*! ./pedidos.page.scss */ "./src/app/pages/pedidos/pedidos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], PedidosPage);
    return PedidosPage;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var TodoService = /** @class */ (function () {
    function TodoService(AfDb) {
        this.AfDb = AfDb;
    }
    TodoService.prototype.getPedidos = function () {
        return this.AfDb.list('pedidos/');
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], TodoService);
    return TodoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pedidos-pedidos-module.js.map