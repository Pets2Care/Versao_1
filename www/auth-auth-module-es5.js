(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthPageRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function () {
        return AuthPageRoutingModule;
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


      var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.page */
      "kV0F");

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
      }, {
        path: 'new-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | new-user-new-user-module */
          "new-user-new-user-module").then(__webpack_require__.bind(null,
          /*! ./new-user/new-user.module */
          "xeKJ")).then(function (m) {
            return m.NewUserPageModule;
          });
        }
      }];

      var AuthPageRoutingModule = function AuthPageRoutingModule() {
        _classCallCheck(this, AuthPageRoutingModule);
      };

      AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthPageRoutingModule);
      /***/
    },

    /***/
    "Buvn":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Buvn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>E-mail</ion-label>\r\n    <ion-input clearInput type=\"email\" [(ngModel)]=\"userName\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Senha</ion-label>\r\n    <ion-input clearInput type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n  </ion-item>\r\n  <br>\r\n\r\n  <div style=\"text-align: center\">\r\n    <ion-button (click)=\"verifyUser($event)\" >Login</ion-button>\r\n  </div>\r\n  <br>\r\n\r\n  <br>\r\n  <div style=\"text-align: center\">\r\n    <ion-button fill=\"clear\" (click)=\"createUser()\">\r\n      <span>\r\n        <ion-icon name=\"man-outline\"></ion-icon><br>\r\n      <small> Ainda não tem uma conta? Registre-se Aqui!</small> \r\n      </span> \r\n    </ion-button>\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "BwrQ":
    /*!**************************!*\
      !*** ./src/app/users.js ***!
      \**************************/

    /*! exports provided: default */

    /***/
    function BwrQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var users = [{
        id: 0,
        name: 'José Assis',
        email: 'jose.assis@email.com',
        password: '1234'
      }, {
        id: 1,
        name: 'Maria do Carmo',
        email: 'maria.carmo@email.com',
        password: '1234'
      }, {
        id: 2,
        name: 'Pedro Oliveira',
        email: 'pedro.oliveira@email.com',
        password: '1234'
      }, {
        id: 3,
        name: 'Lucas Costa',
        email: 'lucas.costa@email.com',
        password: '1234'
      }];
      /* harmony default export */

      __webpack_exports__["default"] = users;
      /***/
    },

    /***/
    "YaVU":
    /*!*********************************************!*\
      !*** ./src/app/services/UserDataService.ts ***!
      \*********************************************/

    /*! exports provided: UserDataService */

    /***/
    function YaVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataService", function () {
        return UserDataService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var UserDataService = /*#__PURE__*/function () {
        function UserDataService(storage) {
          _classCallCheck(this, UserDataService);

          this.storage = storage;
          this.loadData();
        }

        _createClass(UserDataService, [{
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var storageData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('UserDataService -> loadData()');
                      _context.next = 3;
                      return this.storage.get('user');

                    case 3:
                      storageData = _context.sent;

                      if (storageData) {
                        this.data = storageData;
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "storeData",
          value: function storeData() {
            this.storage.set('user', this.data);
          }
        }, {
          key: "get",
          value: function get() {
            return this.data;
          }
        }, {
          key: "set",
          value: function set(newData) {
            this.data = newData;
            this.storeData();
          }
        }, {
          key: "clear",
          value: function clear() {
            console.log('UserDataService -> clear()');
            this.storage.remove('user');
          }
        }]);

        return UserDataService;
      }();

      UserDataService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      UserDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserDataService);
      /***/
    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthPageModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
        return AuthPageModule;
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


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth.page */
      "kV0F");

      var AuthPageModule = function AuthPageModule() {
        _classCallCheck(this, AuthPageModule);
      };

      AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
      })], AuthPageModule);
      /***/
    },

    /***/
    "jMPm":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function jMPm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "kV0F":
    /*!***********************************!*\
      !*** ./src/app/auth/auth.page.ts ***!
      \***********************************/

    /*! exports provided: AuthPage */

    /***/
    function kV0F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
        return AuthPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth.page.html */
      "Buvn");
      /* harmony import */


      var _auth_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.page.scss */
      "jMPm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/UserDataService */
      "YaVU");
      /* harmony import */


      var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/UsersDataService */
      "wmZG");

      var AuthPage = /*#__PURE__*/function () {
        function AuthPage(usersDataService, userDataService, alertController, router) {
          _classCallCheck(this, AuthPage);

          this.usersDataService = usersDataService;
          this.userDataService = userDataService;
          this.alertController = alertController;
          this.router = router;
          this.loadData();
        }

        _createClass(AuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loadData",
          value: function loadData() {
            this.users = this.usersDataService.getAll();
          }
        }, {
          key: "verifyUser",
          value: function verifyUser(ev) {
            var _this = this;

            var hasUser = this.users.find(function (e) {
              return e.email === _this.userName;
            });

            if (hasUser) {
              if (hasUser.password === this.password) {
                this.loginUser(hasUser.id);
              }
            } else {
              this.presentAlertError();
            }
          }
        }, {
          key: "presentAlertError",
          value: function presentAlertError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        message: 'Usuário e/ou Senha incorretos!',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loginUser",
          value: function loginUser(userId) {
            var user = this.usersDataService.getById(userId);
            this.userDataService.set(user);
            this.router.navigate(['/home']);
          }
        }, {
          key: "createUser",
          value: function createUser() {
            this.router.navigate(['/auth/new-user']);
          }
        }]);

        return AuthPage;
      }();

      AuthPage.ctorParameters = function () {
        return [{
          type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__["UsersDataService"]
        }, {
          type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthPage);
      /***/
    },

    /***/
    "wmZG":
    /*!**********************************************!*\
      !*** ./src/app/services/UsersDataService.ts ***!
      \**********************************************/

    /*! exports provided: UsersDataService */

    /***/
    function wmZG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersDataService", function () {
        return UsersDataService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _users_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../users.js */
      "BwrQ");

      var UsersDataService = /*#__PURE__*/function () {
        function UsersDataService(storage) {
          _classCallCheck(this, UsersDataService);

          this.storage = storage;
          this.data = [];
          this.loadData();
        }

        _createClass(UsersDataService, [{
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var storageData, _this$data, _this$data2;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.get('users');

                    case 2:
                      storageData = _context3.sent;

                      if (storageData) {
                        (_this$data = this.data).push.apply(_this$data, _toConsumableArray(storageData));
                      } else {
                        (_this$data2 = this.data).push.apply(_this$data2, _toConsumableArray(_users_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
                      }

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "storeData",
          value: function storeData() {
            this.storage.set('users', this.data);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.data;
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return Object.assign({}, this.data.find(function (i) {
              return i.id === id;
            }));
          }
        }, {
          key: "update",
          value: function update(entry) {
            console.log('UsersDataService -> update, entry = ', entry);
            var id = this.data.findIndex(function (i) {
              return i.id === entry.id;
            });

            if (id >= 0) {
              this.data[id] = entry;
              this.storeData();
              console.log('UsersDataService -> update, was updated');
            }

            return id;
          }
        }, {
          key: "create",
          value: function create(entry) {
            var currentId = Math.max.apply(Math, _toConsumableArray(this.data.map(function (i) {
              return i.id;
            }))) + 1;
            this.data.push(Object.assign(Object.assign({}, entry), {
              id: currentId
            }));
            this.storeData();
            return currentId;
          }
        }, {
          key: "delete",
          value: function _delete(entry) {
            var id = this.data.findIndex(function (i) {
              return i.id === entry.id;
            });

            if (id >= 0) {
              this.data.splice(id, 1);
              this.storeData();
            }

            return id;
          }
        }]);

        return UsersDataService;
      }();

      UsersDataService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      UsersDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UsersDataService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map