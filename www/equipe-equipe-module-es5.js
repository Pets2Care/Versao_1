(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipe-equipe-module"], {
    /***/
    "SMMb":
    /*!*****************************************************!*\
      !*** ./src/app/home/messages/equipe/equipe.page.ts ***!
      \*****************************************************/

    /*! exports provided: EquipePage */

    /***/
    function SMMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EquipePage", function () {
        return EquipePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_equipe_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./equipe.page.html */
      "mk3y");
      /* harmony import */


      var _equipe_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./equipe.page.scss */
      "y8Yx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EquipePage = /*#__PURE__*/function () {
        function EquipePage() {
          _classCallCheck(this, EquipePage);
        }

        _createClass(EquipePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EquipePage;
      }();

      EquipePage.ctorParameters = function () {
        return [];
      };

      EquipePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-equipe',
        template: _raw_loader_equipe_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_equipe_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EquipePage);
      /***/
    },

    /***/
    "ked8":
    /*!*******************************************************!*\
      !*** ./src/app/home/messages/equipe/equipe.module.ts ***!
      \*******************************************************/

    /*! exports provided: EquipePageModule */

    /***/
    function ked8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EquipePageModule", function () {
        return EquipePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _equipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./equipe-routing.module */
      "yrpj");
      /* harmony import */


      var _equipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./equipe.page */
      "SMMb");

      var EquipePageModule = function EquipePageModule() {
        _classCallCheck(this, EquipePageModule);
      };

      EquipePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _equipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipePageRoutingModule"]],
        declarations: [_equipe_page__WEBPACK_IMPORTED_MODULE_6__["EquipePage"]]
      })], EquipePageModule);
      /***/
    },

    /***/
    "mk3y":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/messages/equipe/equipe.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mk3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/messages\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Nossos Fundadores</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-card>\r\n  <ion-text color = \"medium\">\r\n  </ion-text>\r\n    <ion-card-header>\r\n      <ion-row class=\"ion-align-item-center\">\r\n        <ion-col size=\"auto\">\r\n      <ion-avatar>\r\n        <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_01.png\">\r\n      </ion-avatar>\r\n      <ion-card-title size=\"10\">Luiz Rioja, 17</ion-card-title>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"text-align: justify;\">\r\n      Garoto prodígio que apadrinhou mais de 100 animais nos últimos três anos, desde que teve contato com ONG's de proteção animal. Desde então promove a causa sempre que pode.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-text color = \"medium\">\r\n    </ion-text>\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-item-center\">\r\n          <ion-col size=\"auto\">\r\n        <ion-avatar>\r\n          <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_03.png\">\r\n        </ion-avatar>\r\n        <ion-card-title size=\"10\">Erika Juliana, 22</ion-card-title>\r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"text-align: justify;\">\r\n        Aficionada por gatos, a empresária realiza parcerias entre clínicas veterinárias e ONG's, nas quais particpa ativamente desde 2009.\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-text color = \"medium\">\r\n      </ion-text>\r\n        <ion-card-header>\r\n          <ion-row class=\"ion-align-item-center\">\r\n            <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_04.png\">\r\n          </ion-avatar>\r\n          <ion-card-title size=\"10\">Caio Capasso, 52</ion-card-title>\r\n          </ion-col>\r\n          </ion-row>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"text-align: justify;\">\r\n          Realiza constribuições sempre que pode para tratamento e alimentação de cães de rua. Parece lenhador hipster, mas não corta árvore nem usa modelador capilar.\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      \r\n      <ion-card>\r\n        <ion-text color = \"medium\">\r\n        </ion-text>\r\n          <ion-card-header>\r\n            <ion-row class=\"ion-align-item-center\">\r\n              <ion-col size=\"auto\">\r\n            <ion-avatar>\r\n              <img src=\"https://dwtrabalhophp.000webhostapp.com/content/img/User_02.png\">\r\n            </ion-avatar>\r\n            <ion-card-title size=\"10\">Jessica Santos, 23</ion-card-title>\r\n            </ion-col>\r\n            </ion-row>\r\n          </ion-card-header>\r\n          <ion-card-content style=\"text-align: justify;\">\r\n            Apaixonada por animais, a estudante é apoiadora de ONG's de proteção animal e realiza doações milionária à causa.\r\n          </ion-card-content>\r\n        </ion-card>\r\n      \r\n\r\n\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "y8Yx":
    /*!*******************************************************!*\
      !*** ./src/app/home/messages/equipe/equipe.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function y8Yx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWVzc2FnZXMvZXF1aXBlL2VxdWlwZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "yrpj":
    /*!***************************************************************!*\
      !*** ./src/app/home/messages/equipe/equipe-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: EquipePageRoutingModule */

    /***/
    function yrpj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EquipePageRoutingModule", function () {
        return EquipePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _equipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./equipe.page */
      "SMMb");

      var routes = [{
        path: '',
        component: _equipe_page__WEBPACK_IMPORTED_MODULE_3__["EquipePage"]
      }];

      var EquipePageRoutingModule = function EquipePageRoutingModule() {
        _classCallCheck(this, EquipePageRoutingModule);
      };

      EquipePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EquipePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=equipe-equipe-module-es5.js.map