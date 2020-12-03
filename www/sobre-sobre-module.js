(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sobre-sobre-module"],{

/***/ "H+Lt":
/*!*****************************************************!*\
  !*** ./src/app/home/messages/sobre/sobre.module.ts ***!
  \*****************************************************/
/*! exports provided: SobrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sobre-routing.module */ "z2v0");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobre.page */ "t1If");







var SobrePageModule = /** @class */ (function () {
    function SobrePageModule() {
    }
    SobrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__["SobrePageRoutingModule"]],
            declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]],
        })
    ], SobrePageModule);
    return SobrePageModule;
}());



/***/ }),

/***/ "MOFC":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/messages/sobre/sobre.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/tabs/messages\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Sobre</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title size=\"10\">Missão <ion-icon name=\"move\"></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"text-align: justify;\">\n      A petS2care surgiu com o objetivo de oferecer uma perspectiva de vida digna a todos os animais abandonados e carentes de atenção e cuidado. <br>\n      O nosso maior propósito é unir um humano que possui disponibilidade e amor para adotar com um animal que por sua vez necessita de um lar.\n    </ion-card-content>\n\n    <ion-card-header>\n      <ion-card-title size=\"10\">Visão <ion-icon name=\"eye\"></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"text-align: justify;\">\n      A petS2care espera se tornar uma empresa referência na saúde e bem-estar animal, unindo pessoas dispostas a dar o cuidado e carinho necessário à animais em situação de abandono e negligência. <br>\n      Através de parcerias com indivíduos, empresas, ONGs, e outras entidades da sociedade civil, visamos promover a união das ações ligadas à nossa missão por todo o Brasil.\n    </ion-card-content>\n\n    <ion-card-header>\n      <ion-card-title size=\"10\">Valores <ion-icon name=\"heart\"></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"text-align: justify;\">\n      Carregamos na petS2care os seguintes valores:\n      <br>\n        O Cuidado;\n      <br>\n      O Profissionalismo;\n      <br>\n      O Amor e Respeito incondicionais aos animais;\n      <br>\n      A Idoneidade, ética e transparência em todas as nossas atividades e relações.\n      <br>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "b/Bi":
/*!*****************************************************!*\
  !*** ./src/app/home/messages/sobre/sobre.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWVzc2FnZXMvc29icmUvc29icmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "t1If":
/*!***************************************************!*\
  !*** ./src/app/home/messages/sobre/sobre.page.ts ***!
  \***************************************************/
/*! exports provided: SobrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePage", function() { return SobrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sobre_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sobre.page.html */ "MOFC");
/* harmony import */ var _sobre_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sobre.page.scss */ "b/Bi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SobrePage = /** @class */ (function () {
    function SobrePage() {
    }
    SobrePage.prototype.ngOnInit = function () { };
    SobrePage.ctorParameters = function () { return []; };
    SobrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sobre',
            template: _raw_loader_sobre_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sobre_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], SobrePage);
    return SobrePage;
}());



/***/ }),

/***/ "z2v0":
/*!*************************************************************!*\
  !*** ./src/app/home/messages/sobre/sobre-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SobrePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageRoutingModule", function() { return SobrePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sobre.page */ "t1If");




var routes = [
    {
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_3__["SobrePage"],
    },
];
var SobrePageRoutingModule = /** @class */ (function () {
    function SobrePageRoutingModule() {
    }
    SobrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SobrePageRoutingModule);
    return SobrePageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=sobre-sobre-module.js.map