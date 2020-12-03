(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-donation-detail-donation-module"], {
    /***/
    "Q5NW":
    /*!***********************************************************************!*\
      !*** ./src/app/home/search/detail-donation/detail-donation.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DetailDonationPageModule */

    /***/
    function Q5NW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailDonationPageModule", function () {
        return DetailDonationPageModule;
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


      var _detail_donation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-donation-routing.module */
      "cHav");
      /* harmony import */


      var _detail_donation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail-donation.page */
      "qoLv");

      var DetailDonationPageModule = function DetailDonationPageModule() {
        _classCallCheck(this, DetailDonationPageModule);
      };

      DetailDonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_donation_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailDonationPageRoutingModule"]],
        declarations: [_detail_donation_page__WEBPACK_IMPORTED_MODULE_6__["DetailDonationPage"]]
      })], DetailDonationPageModule);
      /***/
    },

    /***/
    "SsW1":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/detail-donation/detail-donation.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SsW1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>detail-donation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "X8xh":
    /*!***********************************************************************!*\
      !*** ./src/app/home/search/detail-donation/detail-donation.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function X8xh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VhcmNoL2RldGFpbC1kb25hdGlvbi9kZXRhaWwtZG9uYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "cHav":
    /*!*******************************************************************************!*\
      !*** ./src/app/home/search/detail-donation/detail-donation-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: DetailDonationPageRoutingModule */

    /***/
    function cHav(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailDonationPageRoutingModule", function () {
        return DetailDonationPageRoutingModule;
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


      var _detail_donation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail-donation.page */
      "qoLv");

      var routes = [{
        path: '',
        component: _detail_donation_page__WEBPACK_IMPORTED_MODULE_3__["DetailDonationPage"]
      }];

      var DetailDonationPageRoutingModule = function DetailDonationPageRoutingModule() {
        _classCallCheck(this, DetailDonationPageRoutingModule);
      };

      DetailDonationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailDonationPageRoutingModule);
      /***/
    },

    /***/
    "qoLv":
    /*!*********************************************************************!*\
      !*** ./src/app/home/search/detail-donation/detail-donation.page.ts ***!
      \*********************************************************************/

    /*! exports provided: DetailDonationPage */

    /***/
    function qoLv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailDonationPage", function () {
        return DetailDonationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detail_donation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detail-donation.page.html */
      "SsW1");
      /* harmony import */


      var _detail_donation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detail-donation.page.scss */
      "X8xh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DetailDonationPage = /*#__PURE__*/function () {
        function DetailDonationPage() {
          _classCallCheck(this, DetailDonationPage);
        }

        _createClass(DetailDonationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetailDonationPage;
      }();

      DetailDonationPage.ctorParameters = function () {
        return [];
      };

      DetailDonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-donation',
        template: _raw_loader_detail_donation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_donation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailDonationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detail-donation-detail-donation-module-es5.js.map