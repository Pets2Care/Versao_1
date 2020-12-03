(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipe-equipe-module"],{

/***/ "SMMb":
/*!*****************************************************!*\
  !*** ./src/app/home/messages/equipe/equipe.page.ts ***!
  \*****************************************************/
/*! exports provided: EquipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipePage", function() { return EquipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_equipe_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./equipe.page.html */ "mk3y");
/* harmony import */ var _equipe_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipe.page.scss */ "y8Yx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var EquipePage = /** @class */ (function () {
    function EquipePage() {
    }
    EquipePage.prototype.ngOnInit = function () { };
    EquipePage.ctorParameters = function () { return []; };
    EquipePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-equipe',
            template: _raw_loader_equipe_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_equipe_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], EquipePage);
    return EquipePage;
}());



/***/ }),

/***/ "ked8":
/*!*******************************************************!*\
  !*** ./src/app/home/messages/equipe/equipe.module.ts ***!
  \*******************************************************/
/*! exports provided: EquipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipePageModule", function() { return EquipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _equipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipe-routing.module */ "yrpj");
/* harmony import */ var _equipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipe.page */ "SMMb");







var EquipePageModule = /** @class */ (function () {
    function EquipePageModule() {
    }
    EquipePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _equipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipePageRoutingModule"]],
            declarations: [_equipe_page__WEBPACK_IMPORTED_MODULE_6__["EquipePage"]],
        })
    ], EquipePageModule);
    return EquipePageModule;
}());



/***/ }),

/***/ "mk3y":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/messages/equipe/equipe.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/tabs/messages\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nossos Fundadores</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-card>\n  <ion-text color = \"medium\">\n  </ion-text>\n    <ion-card-header>\n      <ion-row class=\"ion-align-item-center\">\n        <ion-col size=\"auto\">\n      <ion-avatar>\n        <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_01.png\">\n      </ion-avatar>\n      <ion-card-title size=\"10\">Luiz Rioja, 17</ion-card-title>\n      </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content style=\"text-align: justify;\">\n      Garoto prodígio que apadrinhou mais de 100 animais nos últimos três anos, desde que teve contato com ONG's de proteção animal. Desde então promove a causa sempre que pode.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-text color = \"medium\">\n    </ion-text>\n      <ion-card-header>\n        <ion-row class=\"ion-align-item-center\">\n          <ion-col size=\"auto\">\n        <ion-avatar>\n          <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_03.png\">\n        </ion-avatar>\n        <ion-card-title size=\"10\">Erika Juliana, 22</ion-card-title>\n        </ion-col>\n        </ion-row>\n      </ion-card-header>\n      <ion-card-content style=\"text-align: justify;\">\n        Aficionada por gatos, a empresária realiza parcerias entre clínicas veterinárias e ONG's, nas quais particpa ativamente desde 2009.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-text color = \"medium\">\n      </ion-text>\n        <ion-card-header>\n          <ion-row class=\"ion-align-item-center\">\n            <ion-col size=\"auto\">\n          <ion-avatar>\n            <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_04.png\">\n          </ion-avatar>\n          <ion-card-title size=\"10\">Caio Capasso, 52</ion-card-title>\n          </ion-col>\n          </ion-row>\n        </ion-card-header>\n        <ion-card-content style=\"text-align: justify;\">\n          Realiza constribuições sempre que pode para tratamento e alimentação de cães de rua. Parece lenhador hipster, mas não corta árvore nem usa modelador capilar.\n        </ion-card-content>\n      </ion-card>\n\n      \n      <ion-card>\n        <ion-text color = \"medium\">\n        </ion-text>\n          <ion-card-header>\n            <ion-row class=\"ion-align-item-center\">\n              <ion-col size=\"auto\">\n            <ion-avatar>\n              <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_02.png\">\n            </ion-avatar>\n            <ion-card-title size=\"10\">Jessica Santos, 23</ion-card-title>\n            </ion-col>\n            </ion-row>\n          </ion-card-header>\n          <ion-card-content style=\"text-align: justify;\">\n            Apaixonada por animais, a estudante é apoiadora de ONG's de proteção animal e realiza doações milionária à causa.\n          </ion-card-content>\n        </ion-card>\n      \n\n\n</ion-content>\n\n");

/***/ }),

/***/ "y8Yx":
/*!*******************************************************!*\
  !*** ./src/app/home/messages/equipe/equipe.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWVzc2FnZXMvZXF1aXBlL2VxdWlwZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "yrpj":
/*!***************************************************************!*\
  !*** ./src/app/home/messages/equipe/equipe-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EquipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipePageRoutingModule", function() { return EquipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _equipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipe.page */ "SMMb");




var routes = [
    {
        path: '',
        component: _equipe_page__WEBPACK_IMPORTED_MODULE_3__["EquipePage"],
    },
];
var EquipePageRoutingModule = /** @class */ (function () {
    function EquipePageRoutingModule() {
    }
    EquipePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EquipePageRoutingModule);
    return EquipePageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=equipe-equipe-module.js.map