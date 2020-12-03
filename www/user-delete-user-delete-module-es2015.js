(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-delete-user-delete-module"],{

/***/ "3tAU":
/*!**************************************************************!*\
  !*** ./src/app/home/profile/user-delete/user-delete.page.ts ***!
  \**************************************************************/
/*! exports provided: UserDeletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePage", function() { return UserDeletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_delete_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-delete.page.html */ "JvBk");
/* harmony import */ var _user_delete_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-delete.page.scss */ "c+fz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserDeletePage = class UserDeletePage {
    constructor() { }
    ngOnInit() {
    }
};
UserDeletePage.ctorParameters = () => [];
UserDeletePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-delete',
        template: _raw_loader_user_delete_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_delete_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserDeletePage);



/***/ }),

/***/ "JvBk":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/user-delete/user-delete.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/profile\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>Excluir Conta</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "c+fz":
/*!****************************************************************!*\
  !*** ./src/app/home/profile/user-delete/user-delete.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS91c2VyLWRlbGV0ZS91c2VyLWRlbGV0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "qE7I":
/*!****************************************************************!*\
  !*** ./src/app/home/profile/user-delete/user-delete.module.ts ***!
  \****************************************************************/
/*! exports provided: UserDeletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePageModule", function() { return UserDeletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-delete-routing.module */ "u17z");
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-delete.page */ "3tAU");







let UserDeletePageModule = class UserDeletePageModule {
};
UserDeletePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDeletePageRoutingModule"]
        ],
        declarations: [_user_delete_page__WEBPACK_IMPORTED_MODULE_6__["UserDeletePage"]]
    })
], UserDeletePageModule);



/***/ }),

/***/ "u17z":
/*!************************************************************************!*\
  !*** ./src/app/home/profile/user-delete/user-delete-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserDeletePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePageRoutingModule", function() { return UserDeletePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-delete.page */ "3tAU");




const routes = [
    {
        path: '',
        component: _user_delete_page__WEBPACK_IMPORTED_MODULE_3__["UserDeletePage"]
    }
];
let UserDeletePageRoutingModule = class UserDeletePageRoutingModule {
};
UserDeletePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDeletePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=user-delete-user-delete-module-es2015.js.map