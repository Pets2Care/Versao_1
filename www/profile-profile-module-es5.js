(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "9JrI":
    /*!************************************************!*\
      !*** ./src/app/home/profile/profile.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function JrI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "9VSt":
    /*!*********************************************!*\
      !*** ./src/app/services/PetsDataService.ts ***!
      \*********************************************/

    /*! exports provided: PetsDataService */

    /***/
    function VSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PetsDataService", function () {
        return PetsDataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _pets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pets.js */
      "t1Ja");

      var PetsDataService = /*#__PURE__*/function () {
        function PetsDataService(storage, http) {
          _classCallCheck(this, PetsDataService);

          this.storage = storage;
          this.http = http;
          this.data = [];
          this.loadData();
        }

        _createClass(PetsDataService, [{
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var storageData, _this$data, _this$data2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get('pets');

                    case 2:
                      storageData = _context.sent;

                      if (storageData) {
                        (_this$data = this.data).push.apply(_this$data, _toConsumableArray(storageData));
                      } else {
                        (_this$data2 = this.data).push.apply(_this$data2, _toConsumableArray(_pets_js__WEBPACK_IMPORTED_MODULE_5__["default"]));
                      }

                    case 4:
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
            this.storage.set('pets', this.data);
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
          key: "getByUserId",
          value: function getByUserId(userId) {
            var returnValue = _toConsumableArray(this.data.filter(function (i) {
              return i.userId === userId;
            }));

            return returnValue;
          }
        }, {
          key: "update",
          value: function update(entry) {
            var id = this.data.findIndex(function (i) {
              return i.id === entry.id;
            });

            if (id >= 0) {
              this.data[id] = entry;
              this.storeData();
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
        }, {
          key: "deleteByUserId",
          value: function deleteByUserId(id) {
            var newData = this.data.filter(function (pet) {
              return pet.userId !== id;
            });
            this.data = _toConsumableArray(newData);
            this.storeData();
            return newData.length;
          }
        }, {
          key: "getAllAPI",
          value: function getAllAPI() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var url;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL, "/pets");
                      _context2.next = 3;
                      return this.http.get(url).toPromise();

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getByIdAPI",
          value: function getByIdAPI(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var url;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL, "/pets/").concat(id);
                      _context3.next = 3;
                      return this.http.get(url).toPromise();

                    case 3:
                      return _context3.abrupt("return", _context3.sent);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return PetsDataService;
      }();

      PetsDataService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PetsDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], PetsDataService);
      /***/
    },

    /***/
    "AoIH":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function AoIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header> </ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item href=\"home/tabs/profile/user-data\">\r\n      <ion-icon slot=\"end\" name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Visualizar e Alterar Dados Pessoais</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/user-password\">\r\n      <ion-icon slot=\"end\" name=\"key-outline\"></ion-icon>\r\n      <ion-label>Alterar Senha</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/user-config\">\r\n      <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon>\r\n      <ion-label>Configurações do Usuário</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/help\">\r\n      <ion-icon slot=\"end\" name=\"help-circle-outline\"></ion-icon>\r\n      <ion-label>Ajuda ao Usuário</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/privacy\">\r\n      <ion-icon slot=\"end\" name=\"document-text-outline\"></ion-icon>\r\n      <ion-label>Política de Privacidade</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/legal\">\r\n      <ion-icon slot=\"end\" name=\"information-circle-outline\"></ion-icon>\r\n      <ion-label>Informações Legais</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"userLogout()\">\r\n      <ion-icon slot=\"end\" name=\"exit-outline\"></ion-icon>\r\n      <ion-label>Sair da Conta</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"userDelete()\">\r\n      <ion-icon slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n      <ion-label>Excluir Conta</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
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
    "I9jw":
    /*!********************************************************!*\
      !*** ./src/app/home/profile/profile-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function I9jw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "fsaT");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }, {
        path: 'user-data',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-data-user-data-module */
          "user-data-user-data-module").then(__webpack_require__.bind(null,
          /*! ./user-data/user-data.module */
          "pN8O")).then(function (m) {
            return m.UserDataPageModule;
          });
        }
      }, {
        path: 'user-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-password-user-password-module */
          "user-password-user-password-module").then(__webpack_require__.bind(null,
          /*! ./user-password/user-password.module */
          "NidD")).then(function (m) {
            return m.UserPasswordPageModule;
          });
        }
      }, {
        path: 'user-config',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-config-user-config-module */
          "user-config-user-config-module").then(__webpack_require__.bind(null,
          /*! ./user-config/user-config.module */
          "2O0E")).then(function (m) {
            return m.UserConfigPageModule;
          });
        }
      }, {
        path: 'help',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | help-help-module */
          "help-help-module").then(__webpack_require__.bind(null,
          /*! ./help/help.module */
          "9gdY")).then(function (m) {
            return m.HelpPageModule;
          });
        }
      }, {
        path: 'privacy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | privacy-privacy-module */
          "privacy-privacy-module").then(__webpack_require__.bind(null,
          /*! ./privacy/privacy.module */
          "kh/9")).then(function (m) {
            return m.PrivacyPageModule;
          });
        }
      }, {
        path: 'legal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | legal-legal-module */
          "legal-legal-module").then(__webpack_require__.bind(null,
          /*! ./legal/legal.module */
          "NoPu")).then(function (m) {
            return m.LegalPageModule;
          });
        }
      }, {
        path: 'user-logout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-logout-user-logout-module */
          "user-logout-user-logout-module").then(__webpack_require__.bind(null,
          /*! ./user-logout/user-logout.module */
          "p9Ql")).then(function (m) {
            return m.UserLogoutPageModule;
          });
        }
      }, {
        path: 'user-delete',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-delete-user-delete-module */
          "user-delete-user-delete-module").then(__webpack_require__.bind(null,
          /*! ./user-delete/user-delete.module */
          "qE7I")).then(function (m) {
            return m.UserDeletePageModule;
          });
        }
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var storageData;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('UserDataService -> loadData()');
                      _context4.next = 3;
                      return this.storage.get('user');

                    case 3:
                      storageData = _context4.sent;

                      if (storageData) {
                        this.data = storageData;
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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
    "be/P":
    /*!************************************************!*\
      !*** ./src/app/home/profile/profile.module.ts ***!
      \************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function beP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "I9jw");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "fsaT");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "fsaT":
    /*!**********************************************!*\
      !*** ./src/app/home/profile/profile.page.ts ***!
      \**********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function fsaT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "AoIH");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "9JrI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_PetsDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/PetsDataService */
      "9VSt");
      /* harmony import */


      var _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/UserDataService */
      "YaVU");
      /* harmony import */


      var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/UsersDataService */
      "wmZG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(userDataService, usersDataService, petsDataService, alertController, router) {
          _classCallCheck(this, ProfilePage);

          this.userDataService = userDataService;
          this.usersDataService = usersDataService;
          this.petsDataService = petsDataService;
          this.alertController = alertController;
          this.router = router;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlertLogout",
          value: function presentAlertLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        message: 'Deseja realmente sair?',
                        buttons: [{
                          text: 'Não',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Cancela Operação');
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            console.log('Confirma Operação');

                            _this.userDataService.clear();

                            _this.router.navigate(['/auth']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentAlertDelete",
          value: function presentAlertDelete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        message: 'Essa operação não poderá ser revertida. Deseja realmente excluir a conta?',
                        buttons: [{
                          text: 'Não',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Cancela Operação');
                          }
                        }, {
                          text: 'Sim',
                          handler: function handler() {
                            _this2.usersDataService["delete"](_this2.userDataService.get());

                            _this2.petsDataService.deleteByUserId(_this2.userDataService.get().id);

                            _this2.router.navigate(['/auth']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "userLogout",
          value: function userLogout() {
            this.presentAlertLogout();
          }
        }, {
          key: "userDelete",
          value: function userDelete() {
            this.presentAlertDelete();
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }, {
          type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__["UsersDataService"]
        }, {
          type: _services_PetsDataService__WEBPACK_IMPORTED_MODULE_5__["PetsDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "t1Ja":
    /*!*************************!*\
      !*** ./src/app/pets.js ***!
      \*************************/

    /*! exports provided: default */

    /***/
    function t1Ja(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var pets = [{
        id: 0,
        userId: 0,
        userName: 'José Assis',
        createdAt: '09/01/2020',
        name: 'Paçoca',
        place: 'São Paulo',
        images: ['../assets/img/1.jpg'],
        age: 5,
        type: 'dog',
        description: 'Olá, sou o Paçoca! Tenho só 8 meses e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho e já sei usar tapete! Que tal me dar uma oportunidade?'
      }, {
        id: 1,
        userId: 1,
        userName: 'Maria do Carmo',
        createdAt: '27/03/2020',
        name: 'Darth Vader',
        place: 'Campinas',
        images: ['../assets/img/2.jpg'],
        age: 4,
        type: 'cat',
        description: 'Olá, sou o Darth! Tenho 2 aninhos e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho e amo brincar! Que tal me dar uma oportunidade?'
      }, {
        id: 2,
        userId: 2,
        userName: 'Pedro Oliveira',
        createdAt: '11/07/2020',
        name: 'Bolinha',
        place: 'Rio Branco',
        images: ['../assets/img/3.jpg'],
        age: 3,
        type: 'dog',
        description: 'Olá, sou o Bolinho! Tenho 1 aninho e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho, mas olha... amo brincar com a minha bolinha! Que tal me dar uma oportunidade?'
      }, {
        id: 3,
        userId: 1,
        userName: 'Maria do Carmo',
        createdAt: '24/07/2020',
        name: 'Patinha',
        place: 'Manaus',
        images: ['../assets/img/4.jpg'],
        age: 2,
        type: 'cat',
        description: 'Olá, sou a Patinha! Tenho 2 aninhos e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinha! Que tal me dar uma oportunidade? '
      }, {
        id: 4,
        userId: 3,
        userName: 'Lucas Costa',
        createdAt: '12/11/2020',
        name: 'Brothers',
        place: 'São Carlos',
        images: ['../assets/img/5.jpg'],
        age: 1,
        type: 'dog',
        description: 'Sim, aqui a adoção é em dobro! Precisamos de um lar disposto a receber irmãos que se amam demais! Irmão pintado: Ted. Irmão caramelo: Batman. Que tal nos dar uma oportunidade? '
      }];
      /* harmony default export */

      __webpack_exports__["default"] = pets;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var storageData, _this$data3, _this$data4;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.storage.get('users');

                    case 2:
                      storageData = _context7.sent;

                      if (storageData) {
                        (_this$data3 = this.data).push.apply(_this$data3, _toConsumableArray(storageData));
                      } else {
                        (_this$data4 = this.data).push.apply(_this$data4, _toConsumableArray(_users_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
                      }

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
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
//# sourceMappingURL=profile-profile-module-es5.js.map