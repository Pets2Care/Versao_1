(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-user-new-user-module"], {
    /***/
    "GY1L":
    /*!**************************************************!*\
      !*** ./src/app/auth/new-user/new-user.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function GY1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbmV3LXVzZXIvbmV3LXVzZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "GtFw":
    /*!************************************************!*\
      !*** ./src/app/auth/new-user/new-user.page.ts ***!
      \************************************************/

    /*! exports provided: NewUserPage */

    /***/
    function GtFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewUserPage", function () {
        return NewUserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-user.page.html */
      "IX0C");
      /* harmony import */


      var _new_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-user.page.scss */
      "GY1L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/UserDataService */
      "YaVU");
      /* harmony import */


      var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/UsersDataService */
      "wmZG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var Usuario = function Usuario() {
        _classCallCheck(this, Usuario);
      };

      var NewUserPage = /*#__PURE__*/function () {
        function NewUserPage(usersDataService, userDataService, alertController, router) {
          _classCallCheck(this, NewUserPage);

          this.usersDataService = usersDataService;
          this.userDataService = userDataService;
          this.alertController = alertController;
          this.router = router;
          this.loadData();
        }

        _createClass(NewUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loadData",
          value: function loadData() {
            this.user = {
              id: 0,
              email: '',
              name: '',
              password: '',
              pets: []
            };
          }
        }, {
          key: "loginUser",
          value: function loginUser(userId) {
            var user = this.usersDataService.getById(userId);
            this.userDataService.set(user);
            this.router.navigate(['/home']);
          }
        }, {
          key: "isFormComplete",
          value: function isFormComplete() {
            var _a, _b, _c, _d, _e;

            return !(((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_d = (_c = this.user) === null || _c === void 0 ? void 0 : _c.email) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((_e = this.user) === null || _e === void 0 ? void 0 : _e.password) && this.confirmPassword);
          }
        }, {
          key: "postForm",
          value: function postForm() {
            if (this.verifyPassword()) {
              this.newUser = this.usersDataService.create(this.user);

              if (this.newUser) {
                this.loginUser(this.newUser);
              }
            }
          }
        }, {
          key: "verifyPassword",
          value: function verifyPassword() {
            if (this.user.password === this.confirmPassword) {
              return true;
            } else {
              this.presentAlertErrorPassword();
              return false;
            }
          }
        }, {
          key: "presentAlertErrorPassword",
          value: function presentAlertErrorPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        message: 'Senhas não coincidem!',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return NewUserPage;
      }();

      NewUserPage.ctorParameters = function () {
        return [{
          type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__["UsersDataService"]
        }, {
          type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__["UserDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      NewUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-user',
        template: _raw_loader_new_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewUserPage);
      /***/
    },

    /***/
    "IX0C":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/new-user/new-user.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function IX0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Novo Usuário</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"stacked\">Nome:</ion-label>\n        <ion-input clearInput type=\"text\" name=\"name\"[(ngModel)]=\"user.name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">E-mail:</ion-label>\n        <ion-input clearInput type=\"email\" name=\"email\"[(ngModel)]=\"user.email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Endereço:</ion-label>        \n        <ion-input clearInput type=\"text\" name=\"street\"></ion-input> \n     </ion-item>\n     <ion-item>\n      <ion-label position=\"stacked\">Complemento:</ion-label>        \n      <ion-input clearInput type=\"text\" name=\"complement\"></ion-input> \n    </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Cidade:</ion-label>\n        <ion-input clearInput type=\"text\" name=\"place\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Estado:</ion-label>        \n        <ion-input clearInput type=\"text\" name=\"state\"></ion-input> \n     </ion-item>\n     <ion-item>\n      <ion-label position=\"stacked\">Senha:</ion-label>        \n      <ion-input clearInput name=\"password\" [(ngModel)]=\"user.password\"></ion-input> \n   </ion-item>\n   <ion-item>\n    <ion-label position=\"stacked\">Confirme a Senha:</ion-label>        \n    <ion-input clearInput name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\"></ion-input> \n </ion-item>\n <br>\n  </ion-col>\n    <div style=\"text-align: center\">\n      <ion-button disabled={{isFormComplete()}} type=\"submit\" (click)=\"postForm()\">Confirmar</ion-button>\n    </div>\n  </ion-content>\n";
      /***/
    },

    /***/
    "Wl81":
    /*!**********************************************************!*\
      !*** ./src/app/auth/new-user/new-user-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: NewUserPageRoutingModule */

    /***/
    function Wl81(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewUserPageRoutingModule", function () {
        return NewUserPageRoutingModule;
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


      var _new_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-user.page */
      "GtFw");

      var routes = [{
        path: '',
        component: _new_user_page__WEBPACK_IMPORTED_MODULE_3__["NewUserPage"]
      }];

      var NewUserPageRoutingModule = function NewUserPageRoutingModule() {
        _classCallCheck(this, NewUserPageRoutingModule);
      };

      NewUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewUserPageRoutingModule);
      /***/
    },

    /***/
    "xeKJ":
    /*!**************************************************!*\
      !*** ./src/app/auth/new-user/new-user.module.ts ***!
      \**************************************************/

    /*! exports provided: NewUserPageModule */

    /***/
    function xeKJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewUserPageModule", function () {
        return NewUserPageModule;
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


      var _new_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-user-routing.module */
      "Wl81");
      /* harmony import */


      var _new_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-user.page */
      "GtFw");

      var NewUserPageModule = function NewUserPageModule() {
        _classCallCheck(this, NewUserPageModule);
      };

      NewUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewUserPageRoutingModule"]],
        declarations: [_new_user_page__WEBPACK_IMPORTED_MODULE_6__["NewUserPage"]]
      })], NewUserPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-user-new-user-module-es5.js.map