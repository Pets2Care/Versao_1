(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legal-legal-module"],{

/***/ "4UmX":
/*!****************************************************!*\
  !*** ./src/app/home/profile/legal/legal.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9sZWdhbC9sZWdhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "4yr+":
/*!************************************************************!*\
  !*** ./src/app/home/profile/legal/legal-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LegalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalPageRoutingModule", function() { return LegalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _legal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal.page */ "jKdc");




const routes = [
    {
        path: '',
        component: _legal_page__WEBPACK_IMPORTED_MODULE_3__["LegalPage"]
    }
];
let LegalPageRoutingModule = class LegalPageRoutingModule {
};
LegalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LegalPageRoutingModule);



/***/ }),

/***/ "I1hY":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/legal/legal.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/profile\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>Informações Legais</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "NoPu":
/*!****************************************************!*\
  !*** ./src/app/home/profile/legal/legal.module.ts ***!
  \****************************************************/
/*! exports provided: LegalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalPageModule", function() { return LegalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _legal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legal-routing.module */ "4yr+");
/* harmony import */ var _legal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legal.page */ "jKdc");







let LegalPageModule = class LegalPageModule {
};
LegalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _legal_routing_module__WEBPACK_IMPORTED_MODULE_5__["LegalPageRoutingModule"]
        ],
        declarations: [_legal_page__WEBPACK_IMPORTED_MODULE_6__["LegalPage"]]
    })
], LegalPageModule);



/***/ }),

/***/ "jKdc":
/*!**************************************************!*\
  !*** ./src/app/home/profile/legal/legal.page.ts ***!
  \**************************************************/
/*! exports provided: LegalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalPage", function() { return LegalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_legal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./legal.page.html */ "I1hY");
/* harmony import */ var _legal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legal.page.scss */ "4UmX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LegalPage = class LegalPage {
    constructor() { }
    ngOnInit() {
    }
};
LegalPage.ctorParameters = () => [];
LegalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-legal',
        template: _raw_loader_legal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LegalPage);



/***/ })

}]);
//# sourceMappingURL=legal-legal-module-es2015.js.map