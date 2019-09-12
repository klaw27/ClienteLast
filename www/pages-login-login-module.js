(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbarBack\" color=\"danger\">\r\n    <ion-title text-center >\r\n     ¡Bienvenido!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n<div class=\"logo\">\r\n  <img src=\"../../assets/img/EstoCuadro.png\" alt=\"logo Estor\">\r\n</div>\r\n\r\n  <h1 class=\"titulo\">Ingresa con usuario y contraseña:</h1>\r\n  \r\n   <ion-item class=\"login\">\r\n      <ion-icon class = \"iconinput\" name=\"person\"></ion-icon> \r\n      <ion-input class = \"inplogin\" #swiper (keyup)=\"enter($event)\" [(ngModel)]=\"correo\"  placeholder=\"Correo electronico\"></ion-input>    \r\n   </ion-item>    \r\n\r\n  <div class=\"pass\">\r\n    <ion-item>  \r\n      <ion-icon class = \"iconinput\" name=\"unlock\"></ion-icon>    \r\n      <ion-input class = \"inplogin\" (keyup)=\"enter($event)\" [type]=\"passType\" [(ngModel)]=\"password\" placeholder=\"Contraseña\" type=\"password\"></ion-input>\r\n\r\n    <ion-button class=\"eye\" color=\"light\" (click)=\"cambiarIcono()\">\r\n        <ion-icon slot=\"icon-only\" name=\"{{icono}}\"></ion-icon></ion-button> \r\n      </ion-item>\r\n  </div> \r\n\r\n<ion-button class=\"botonEntrar\"  expand =\"block\"  (click)=\"iniciar()\">ENTRAR</ion-button>\r\n<div class=\"botonRec\">\r\n    <a (click)=\"forgot(correo)\">¿Olvidaste tu contraseña?</a>\r\n    </div>\r\n\r\n\r\n<div class=\"titulo2\">\r\n  <h2 class=\"linea\"><span>Ó inicia sesión con:</span></h2> \r\n</div>\r\n\r\n\r\n    <div class=\"redes\">\r\n    <ion-grid>     \r\n        <ion-row>\r\n            <ion-col offset=\"0\">\r\n                <img class =\"imagen\" src=\"/assets/img/fb.png\" alt=\"Facebook\" (click)=\"facebooklog();\" > \r\n            </ion-col>\r\n            <ion-col  offset=\"-3\">\r\n                <img class =\"imagen\" src=\"/assets/img/google.png\" alt=\"Google\" (click)=\"googleLogin();\">\r\n            </ion-col>\r\n          </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n     <h3 class=\"registro\">¿Aún no tienes cuenta? <a routerLink='/registro'>REGISTRATE</a> </h3>\r\n     \r\n</ion-content> \r\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbarBack {\n  --background: rgb(250, 250, 250); }\n\n.logo img {\n  width: 80%;\n  margin: 0 auto;\n  display: block; }\n\n.titulo {\n  font-size: 18px;\n  margin-bottom: 20px;\n  letter-spacing: normal;\n  text-align: left;\n  margin-left: 15px; }\n\n.titulo2 {\n  font-size: 16px;\n  letter-spacing: normal;\n  text-align: center; }\n\n.copyright {\n  position: fixed;\n  bottom: 3%;\n  right: 0;\n  left: 0;\n  width: 100%; }\n\n.empresa {\n  font-size: 16px; }\n\n.toolbarBack {\n  --background: rgb(250, 250, 250); }\n\n.logo img {\n  width: 75%;\n  margin: 0 auto;\n  display: block; }\n\n.input {\n  width: 65%;\n  margin-bottom: 15px;\n  text-align: left; }\n\n.botonEntrar {\n  width: 80%;\n  margin: 10px auto 0px auto;\n  font-size: 16px; }\n\n.botonRec {\n  margin: 10px auto 15px auto;\n  font-size: 12px;\n  text-align: center; }\n\n.registro {\n  font-size: 16px; }\n\n.btnregistro {\n  font-size: 13px;\n  margin: 0px auto 0px auto; }\n\n.pass {\n  position: relative;\n  width: 80%;\n  margin-left: 25px;\n  margin-bottom: 25px; }\n\n.eye {\n  top: 0;\n  width: 35px;\n  height: 35px; }\n\n.input ion-icon {\n  right: 50px;\n  color: lightgrey; }\n\n.error {\n  color: red; }\n\n.redes {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  grid-template-columns: 1fr 1fr;\n  margin: 0px auto 0px auto; }\n\n.imagen {\n  width: 110px; }\n\n.iconinput {\n  margin-left: 0px; }\n\n.login {\n  width: 80%;\n  margin-left: 25px; }\n\n.inplogin {\n  margin-left: 15px; }\n\nh2 {\n  font: 16px sans-serif;\n  margin-top: 40px;\n  text-align: center;\n  margin-bottom: 20px; }\n\nh2.linea {\n  position: relative;\n  z-index: 1; }\n\nh2.linea:before {\n  border-top: 1px solid lightgray;\n  content: \"\";\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 85%;\n  z-index: -1; }\n\nh2.linea span {\n  background: #fff;\n  padding: 0 15px; }\n\na {\n  font: 14px sans-serif; }\n\nh3 {\n  margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxDbGllbnRlRmluYWxcXENsaWVudGVMYXN0L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFhLEVBQUE7O0FBR2pCO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFFZixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQ0FBYSxFQUFBOztBQUdqQjtFQUNJLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUlsQjtFQUNJLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixlQUFlLEVBQUE7O0FBSW5CO0VBRUksMkJBQTJCO0VBQzNCLGVBQWU7RUFDaEIsa0JBQWtCLEVBQUE7O0FBS3JCO0VBRUksZUFBZSxFQUFBOztBQUduQjtFQUVJLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFJN0I7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFJSSxNQUFNO0VBRU4sV0FBVztFQUNYLFlBQVksRUFBQTs7QUFNaEI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBRUEsVUFBUyxFQUFBOztBQUdUO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDRyxZQUFZLEVBQUE7O0FBSWY7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBT3JCO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0Msa0JBQWtCO0VBQ2pCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFYjtFQUVFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3ZCO0VBRUEsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhckJhY2t7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuLmxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnRpdHVsbzJ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5lbXByZXNhe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhckJhY2t7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuLmxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uaW5wdXR7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4uYm90b25FbnRyYXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcblxyXG4uYm90b25SZWN7XHJcbiAgICAvL3dpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAxNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgLy8gbWFyZ2luLXJpZ2h0OiA0M3B4O1xyXG5cclxufVxyXG5cclxuLnJlZ2lzdHJve1xyXG4gICAgLy93aWR0aDogODAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRucmVnaXN0cm97XHJcbiAgICAvL3dpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG59XHJcblxyXG5cclxuLnBhc3N7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uZXlle1xyXG4gICAvLyAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgIC8vIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIC8vcmlnaHQ6IDglO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgIC8vIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gICAgXHJcbiAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmlucHV0IGlvbi1pY29uIHtcclxuICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmVycm9yXHJcbntcclxuY29sb3I6cmVkO1xyXG59XHJcblxyXG4ucmVkZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZW4ge1xyXG4gICB3aWR0aDogMTEwcHg7XHJcbiAgIC8vaGVpZ2h0OiAxNTAlO1xyXG59XHJcblxyXG4uaWNvbmlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufSAgICBcclxuXHJcbi5sb2dpbntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiBtYXJnaW4tbGVmdDogMjVweDtcclxuICB9XHJcblxyXG4gIC5pbnBsb2dpbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgIH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmgyIHtcclxuICBmb250OiAxNnB4IHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5oMi5saW5lYSB7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5oMi5saW5lYTpiZWZvcmUge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDg1JTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5oMi5saW5lYSBzcGFuIHtcclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBmb250OiAxNHB4IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_estore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/estore.service */ "./src/app/services/estore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LoginPage = /** @class */ (function () {
    function LoginPage(fb, http, googlePlus, toastController, estore, router, menu) {
        this.fb = fb;
        this.http = http;
        this.googlePlus = googlePlus;
        this.toastController = toastController;
        this.estore = estore;
        this.router = router;
        this.menu = menu;
        this.password = '';
        this.correo = '';
        this.icono = "eye";
        this.passType = 'password';
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true);
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.facebooklog = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email']).then(function (res) {
            console.log('Logged into Facebook!', res);
            _this.getData(res.authResponse.accessToken);
        }).
            catch(function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        this.googlePlus.login({})
            .then(function (res) { return console.log(JSON.stringify(res)); })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.getData = function (access_token) {
        var _this = this;
        var url = "https://graph.facebook.com/me?fields=id,location,gender,name,last_name,email&access_token=" + access_token;
        this.http.get(url).subscribe(function (data) {
            _this.data = JSON.stringify(data);
            console.log(data);
        });
    };
    LoginPage.prototype.cambiarIcono = function () {
        this.icono = this.icono == 'eye' ? 'eye-off' : 'eye';
        this.passType = this.passType == 'password' ? 'text' : 'password';
    };
    LoginPage.prototype.iniciar = function () {
        var _this = this;
        var body = {
            password: this.password,
            correo: this.correo
        };
        var regEpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.correo == '' && this.password == '')
            this.presentarToast('Capture su usuario y contraseña');
        else if (this.password == '') {
            this.presentarToast('Capture su contraseña');
        }
        else if (this.correo == '') {
            this.presentarToast('Capture su email');
        }
        else if (!this.correo.match(regEpr)) {
            this.presentarToast('Formato de correo invalido');
        } //SI SE CAPTURO TODA LA INFORMACION REALIZA EL LOGIN
        else {
            this.estore.iniciarSesion(body, 'ingresar.php').subscribe(function (data) {
                if (data['success'] != false) {
                    localStorage.setItem('user', JSON.stringify(data['user']));
                    _this.router.navigateByUrl("/dashboard");
                }
                else {
                    _this.presentarToast(data['msg']);
                }
            });
        }
    };
    LoginPage.prototype.getElementById = function (arg0) {
        throw new Error("Method not implemented.");
    };
    LoginPage.prototype.presentarToast = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Error: ' + error,
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
    LoginPage.prototype.enter = function (e) {
        if (e.keyCode == 13) {
            this.iniciar();
        }
    };
    LoginPage.prototype.forgot = function (email) {
        console.log(email);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            src_app_services_estore_service__WEBPACK_IMPORTED_MODULE_6__["EstoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map