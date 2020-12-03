(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"], {
    /***/
    "+yOm":
    /*!************************************************!*\
      !*** ./src/app/home/messages/messages.page.ts ***!
      \************************************************/

    /*! exports provided: MessagesPage */

    /***/
    function yOm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messages.page.html */
      "mpYo");
      /* harmony import */


      var _messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messages.page.scss */
      "3cYS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage() {
          _classCallCheck(this, MessagesPage);
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MessagesPage);
      /***/
    },

    /***/
    "3cYS":
    /*!**************************************************!*\
      !*** ./src/app/home/messages/messages.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function cYS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main-logo {\n  position: absolute;\n  display: block;\n  width: 200px;\n  height: 200px;\n  top: calc(50% - 100px);\n  left: calc(50% - 100px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbG9nbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTAwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "aARe":
    /*!**************************************************!*\
      !*** ./src/app/home/messages/messages.module.ts ***!
      \**************************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function aARe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
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


      var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./messages-routing.module */
      "uw1M");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "+yOm");

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "mpYo":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/messages/messages.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function mpYo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n      <ion-item href=\"home/tabs/messages/equipe\">\r\n        <ion-icon slot=\"end\" name=\"people-outline\"></ion-icon>\r\n        <ion-label>Equipe</ion-label>\r\n      </ion-item>\r\n      <ion-item href=\"home/tabs/messages/sobre\">\r\n        <ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon>\r\n        <ion-label>Sobre</ion-label>        \r\n      </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "uw1M":
    /*!**********************************************************!*\
      !*** ./src/app/home/messages/messages-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: MessagesPageRoutingModule */

    /***/
    function uw1M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
        return MessagesPageRoutingModule;
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


      var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages.page */
      "+yOm");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
      }, {
        path: 'equipe',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | equipe-equipe-module */
          "equipe-equipe-module").then(__webpack_require__.bind(null,
          /*! ./equipe/equipe.module */
          "ked8")).then(function (m) {
            return m.EquipePageModule;
          });
        }
      }, {
        path: 'sobre',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sobre-sobre-module */
          "sobre-sobre-module").then(__webpack_require__.bind(null,
          /*! ./sobre/sobre.module */
          "H+Lt")).then(function (m) {
            return m.SobrePageModule;
          });
        }
      }];

      var MessagesPageRoutingModule = function MessagesPageRoutingModule() {
        _classCallCheck(this, MessagesPageRoutingModule);
      };

      MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=messages-messages-module-es5.js.map