(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-data-user-data-module"], {
    /***/
    "5kAm":
    /*!************************************************************!*\
      !*** ./src/app/home/profile/user-data/user-data.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function kAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS91c2VyLWRhdGEvdXNlci1kYXRhLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "YlKq":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/user-data/user-data.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YlKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/profile\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Dados Pessoais</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-col>\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Nome:</ion-label>\r\n      <ion-icon slot=\"end\" name=\"pencil-outline\"></ion-icon>\r\n      <ion-label>Manuel Costa</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Email:</ion-label>\r\n      <ion-icon slot=\"end\" name=\"pencil-outline\"></ion-icon>\r\n      <ion-label>Manuel.costa@gmail.com</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Cidade:</ion-label>\r\n      <ion-icon slot=\"end\" name=\"pencil-outline\"></ion-icon>\r\n      <ion-label>Guarulhos</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Estado:</ion-label>\r\n      <ion-icon slot=\"end\" name=\"pencil-outline\"></ion-icon>\r\n      <ion-label>Sao Paulo</ion-label>\r\n    </ion-item>\r\n  </ion-col>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "a7Fx":
    /*!**********************************************************!*\
      !*** ./src/app/home/profile/user-data/user-data.page.ts ***!
      \**********************************************************/

    /*! exports provided: UserDataPage */

    /***/
    function a7Fx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataPage", function () {
        return UserDataPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_data_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-data.page.html */
      "YlKq");
      /* harmony import */


      var _user_data_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-data.page.scss */
      "5kAm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserDataPage = /*#__PURE__*/function () {
        function UserDataPage() {
          _classCallCheck(this, UserDataPage);
        }

        _createClass(UserDataPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserDataPage;
      }();

      UserDataPage.ctorParameters = function () {
        return [];
      };

      UserDataPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-data',
        template: _raw_loader_user_data_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_data_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserDataPage);
      /***/
    },

    /***/
    "pN8O":
    /*!************************************************************!*\
      !*** ./src/app/home/profile/user-data/user-data.module.ts ***!
      \************************************************************/

    /*! exports provided: UserDataPageModule */

    /***/
    function pN8O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataPageModule", function () {
        return UserDataPageModule;
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


      var _user_data_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-data-routing.module */
      "yYgE");
      /* harmony import */


      var _user_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-data.page */
      "a7Fx");

      var UserDataPageModule = function UserDataPageModule() {
        _classCallCheck(this, UserDataPageModule);
      };

      UserDataPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_data_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDataPageRoutingModule"]],
        declarations: [_user_data_page__WEBPACK_IMPORTED_MODULE_6__["UserDataPage"]]
      })], UserDataPageModule);
      /***/
    },

    /***/
    "yYgE":
    /*!********************************************************************!*\
      !*** ./src/app/home/profile/user-data/user-data-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: UserDataPageRoutingModule */

    /***/
    function yYgE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataPageRoutingModule", function () {
        return UserDataPageRoutingModule;
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


      var _user_data_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-data.page */
      "a7Fx");

      var routes = [{
        path: '',
        component: _user_data_page__WEBPACK_IMPORTED_MODULE_3__["UserDataPage"]
      }];

      var UserDataPageRoutingModule = function UserDataPageRoutingModule() {
        _classCallCheck(this, UserDataPageRoutingModule);
      };

      UserDataPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserDataPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-data-user-data-module-es5.js.map