(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-logout-user-logout-module"], {
    /***/
    "8+9z":
    /*!**************************************************************!*\
      !*** ./src/app/home/profile/user-logout/user-logout.page.ts ***!
      \**************************************************************/

    /*! exports provided: UserLogoutPage */

    /***/
    function z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLogoutPage", function () {
        return UserLogoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_logout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-logout.page.html */
      "eWFg");
      /* harmony import */


      var _user_logout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-logout.page.scss */
      "buIN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserLogoutPage = /*#__PURE__*/function () {
        function UserLogoutPage() {
          _classCallCheck(this, UserLogoutPage);
        }

        _createClass(UserLogoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserLogoutPage;
      }();

      UserLogoutPage.ctorParameters = function () {
        return [];
      };

      UserLogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-logout',
        template: _raw_loader_user_logout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_logout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserLogoutPage);
      /***/
    },

    /***/
    "buIN":
    /*!****************************************************************!*\
      !*** ./src/app/home/profile/user-logout/user-logout.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function buIN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS91c2VyLWxvZ291dC91c2VyLWxvZ291dC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "eWFg":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/user-logout/user-logout.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eWFg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    \r\n    <ion-title>Sair da Conta</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "p9Ql":
    /*!****************************************************************!*\
      !*** ./src/app/home/profile/user-logout/user-logout.module.ts ***!
      \****************************************************************/

    /*! exports provided: UserLogoutPageModule */

    /***/
    function p9Ql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLogoutPageModule", function () {
        return UserLogoutPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _user_logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-logout-routing.module */
      "ucPq");
      /* harmony import */


      var _user_logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-logout.page */
      "8+9z");

      var UserLogoutPageModule = function UserLogoutPageModule() {
        _classCallCheck(this, UserLogoutPageModule);
      };

      UserLogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserLogoutPageRoutingModule"]],
        declarations: [_user_logout_page__WEBPACK_IMPORTED_MODULE_6__["UserLogoutPage"]]
      })], UserLogoutPageModule);
      /***/
    },

    /***/
    "ucPq":
    /*!************************************************************************!*\
      !*** ./src/app/home/profile/user-logout/user-logout-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: UserLogoutPageRoutingModule */

    /***/
    function ucPq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLogoutPageRoutingModule", function () {
        return UserLogoutPageRoutingModule;
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


      var _user_logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-logout.page */
      "8+9z");

      var routes = [{
        path: '',
        component: _user_logout_page__WEBPACK_IMPORTED_MODULE_3__["UserLogoutPage"]
      }];

      var UserLogoutPageRoutingModule = function UserLogoutPageRoutingModule() {
        _classCallCheck(this, UserLogoutPageRoutingModule);
      };

      UserLogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserLogoutPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-logout-user-logout-module-es5.js.map