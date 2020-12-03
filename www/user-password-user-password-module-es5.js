(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-password-user-password-module"], {
    /***/
    "NidD":
    /*!********************************************************************!*\
      !*** ./src/app/home/profile/user-password/user-password.module.ts ***!
      \********************************************************************/

    /*! exports provided: UserPasswordPageModule */

    /***/
    function NidD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPasswordPageModule", function () {
        return UserPasswordPageModule;
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


      var _user_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-password-routing.module */
      "iNLP");
      /* harmony import */


      var _user_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-password.page */
      "ytuf");

      var UserPasswordPageModule = function UserPasswordPageModule() {
        _classCallCheck(this, UserPasswordPageModule);
      };

      UserPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPasswordPageRoutingModule"]],
        declarations: [_user_password_page__WEBPACK_IMPORTED_MODULE_6__["UserPasswordPage"]]
      })], UserPasswordPageModule);
      /***/
    },

    /***/
    "WqUJ":
    /*!********************************************************************!*\
      !*** ./src/app/home/profile/user-password/user-password.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function WqUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS91c2VyLXBhc3N3b3JkL3VzZXItcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "iNLP":
    /*!****************************************************************************!*\
      !*** ./src/app/home/profile/user-password/user-password-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: UserPasswordPageRoutingModule */

    /***/
    function iNLP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPasswordPageRoutingModule", function () {
        return UserPasswordPageRoutingModule;
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


      var _user_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-password.page */
      "ytuf");

      var routes = [{
        path: '',
        component: _user_password_page__WEBPACK_IMPORTED_MODULE_3__["UserPasswordPage"]
      }];

      var UserPasswordPageRoutingModule = function UserPasswordPageRoutingModule() {
        _classCallCheck(this, UserPasswordPageRoutingModule);
      };

      UserPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserPasswordPageRoutingModule);
      /***/
    },

    /***/
    "u4K4":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/user-password/user-password.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u4K4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/profile\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>Alterar Senha</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "ytuf":
    /*!******************************************************************!*\
      !*** ./src/app/home/profile/user-password/user-password.page.ts ***!
      \******************************************************************/

    /*! exports provided: UserPasswordPage */

    /***/
    function ytuf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPasswordPage", function () {
        return UserPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-password.page.html */
      "u4K4");
      /* harmony import */


      var _user_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-password.page.scss */
      "WqUJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserPasswordPage = /*#__PURE__*/function () {
        function UserPasswordPage() {
          _classCallCheck(this, UserPasswordPage);
        }

        _createClass(UserPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserPasswordPage;
      }();

      UserPasswordPage.ctorParameters = function () {
        return [];
      };

      UserPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-password',
        template: _raw_loader_user_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-password-user-password-module-es5.js.map