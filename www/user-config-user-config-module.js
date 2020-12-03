(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-config-user-config-module"],{

/***/ "2O0E":
/*!****************************************************************!*\
  !*** ./src/app/home/profile/user-config/user-config.module.ts ***!
  \****************************************************************/
/*! exports provided: UserConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfigPageModule", function() { return UserConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_config_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-config-routing.module */ "mOVX");
/* harmony import */ var _user_config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-config.page */ "gwBl");







var UserConfigPageModule = /** @class */ (function () {
    function UserConfigPageModule() {
    }
    UserConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _user_config_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserConfigPageRoutingModule"]
            ],
            declarations: [_user_config_page__WEBPACK_IMPORTED_MODULE_6__["UserConfigPage"]]
        })
    ], UserConfigPageModule);
    return UserConfigPageModule;
}());



/***/ }),

/***/ "gwBl":
/*!**************************************************************!*\
  !*** ./src/app/home/profile/user-config/user-config.page.ts ***!
  \**************************************************************/
/*! exports provided: UserConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfigPage", function() { return UserConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_config_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-config.page.html */ "v6HT");
/* harmony import */ var _user_config_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-config.page.scss */ "jbIo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var UserConfigPage = /** @class */ (function () {
    function UserConfigPage() {
    }
    UserConfigPage.prototype.ngOnInit = function () {
    };
    UserConfigPage.ctorParameters = function () { return []; };
    UserConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-config',
            template: _raw_loader_user_config_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_config_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], UserConfigPage);
    return UserConfigPage;
}());



/***/ }),

/***/ "jbIo":
/*!****************************************************************!*\
  !*** ./src/app/home/profile/user-config/user-config.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS91c2VyLWNvbmZpZy91c2VyLWNvbmZpZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "mOVX":
/*!************************************************************************!*\
  !*** ./src/app/home/profile/user-config/user-config-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserConfigPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfigPageRoutingModule", function() { return UserConfigPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-config.page */ "gwBl");




var routes = [
    {
        path: '',
        component: _user_config_page__WEBPACK_IMPORTED_MODULE_3__["UserConfigPage"]
    }
];
var UserConfigPageRoutingModule = /** @class */ (function () {
    function UserConfigPageRoutingModule() {
    }
    UserConfigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserConfigPageRoutingModule);
    return UserConfigPageRoutingModule;
}());



/***/ }),

/***/ "v6HT":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/user-config/user-config.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/tabs/profile\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Configurações do Usuário</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=user-config-user-config-module.js.map