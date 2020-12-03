(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~feed-feed-module~search-search-module"], {
    /***/
    "8dLr":
    /*!************************************************!*\
      !*** ./src/app/services/PetsDataServiceNew.ts ***!
      \************************************************/

    /*! exports provided: PetsDataServiceNew */

    /***/
    function dLr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PetsDataServiceNew", function () {
        return PetsDataServiceNew;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var PetsDataServiceNew = /*#__PURE__*/function () {
        function PetsDataServiceNew(http) {
          _classCallCheck(this, PetsDataServiceNew);

          this.http = http;
          this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        }

        _createClass(PetsDataServiceNew, [{
          key: "get",
          value: function get() {
            return this.dataStream.asObservable();
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL, "/pets")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
              _this.dataStream.next(response);
            }));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            var _this2 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL, "/pets/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
              _this2.dataStream.next(response);
            }));
          }
        }, {
          key: "formatFormData",
          value: function formatFormData(data) {
            var formData = new FormData();
            formData.append('name', data.name);
            formData.append('place', data.place);
            formData.append('userName', data.userName);
            formData.append('userId', data.userId.toString());
            formData.append('age', data.age.toString());
            formData.append('type', data.type);
            formData.append('description', data.description);

            var _iterator = _createForOfIteratorHelper(data.images),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var image = _step.value;
                formData.append('images', image);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return formData;
          }
        }, {
          key: "create",
          value: function create(data) {
            var _this3 = this;

            console.log('petDataService -> create -> data = ', data);
            var formData = this.formatFormData(data);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL, "/pets"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
              console.log('create response = ', response);

              _this3.fetch().subscribe();
            }));
          }
        }, {
          key: "update",
          value: function update(data) {
            var _this4 = this;

            console.log('petDataService -> update -> data = ', data);
            var formData = this.formatFormData(data);
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL, "/pets/").concat(data.id), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
              console.log('update response = ', response);

              _this4.fetch().subscribe();
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this5 = this;

            console.log('PetsDataServiceNew -> delete() -> chamou -> id = ', id);
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL, "/pets/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
              console.log('delete response = ', response);

              _this5.fetch().subscribe();
            }));
          }
        }]);

        return PetsDataServiceNew;
      }();

      PetsDataServiceNew.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PetsDataServiceNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], PetsDataServiceNew);
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
    "DBv0":
    /*!*****************************************************************!*\
      !*** ./src/app/components/photo-card/photo-card.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function DBv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cardImg {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by1jYXJkL3Bob3RvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tY2FyZC9waG90by1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRJbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "QOe8":
    /*!***************************************************************!*\
      !*** ./src/app/components/photo-card/photo-card.component.ts ***!
      \***************************************************************/

    /*! exports provided: PhotoCardComponent */

    /***/
    function QOe8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoCardComponent", function () {
        return PhotoCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_photo_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./photo-card.component.html */
      "z+ag");
      /* harmony import */


      var _photo_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./photo-card.component.scss */
      "DBv0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/UserDataService */
      "YaVU");
      /* harmony import */


      var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/UsersDataService */
      "wmZG");

      var PhotoCardComponent = /*#__PURE__*/function () {
        function PhotoCardComponent(usersDataService, alertController, userDataService) {
          _classCallCheck(this, PhotoCardComponent);

          this.usersDataService = usersDataService;
          this.alertController = alertController;
          this.userDataService = userDataService;
        }

        _createClass(PhotoCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlertDonation",
          value: function presentAlertDonation(contact) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Oba!',
                        message: 'Para combinar os detalhes da adoção com o tutor temporário, entre em contato através do e-mail: <strong>' + contact + '</strong>',
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
        }, {
          key: "presentAlertDetails",
          value: function presentAlertDetails() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        message: 'Você disponibilizou esse animal para adoção.',
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
          key: "selectAnimal",
          value: function selectAnimal(donationUserId) {
            var currentUser = this.userDataService.get();
            var donationUser = this.usersDataService.getById(donationUserId);

            if (currentUser.id !== donationUser.id) {
              this.presentAlertDonation(donationUser.email);
            } else {
              this.presentAlertDetails();
            }
          }
        }, {
          key: "getFormattedDate",
          value: function getFormattedDate() {
            return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
          }
        }]);

        return PhotoCardComponent;
      }();

      PhotoCardComponent.ctorParameters = function () {
        return [{
          type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__["UsersDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__["UserDataService"]
        }];
      };

      PhotoCardComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PhotoCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-photo-card',
        template: _raw_loader_photo_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_photo_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PhotoCardComponent);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var storageData;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('UserDataService -> loadData()');
                      _context3.next = 3;
                      return this.storage.get('user');

                    case 3:
                      storageData = _context3.sent;

                      if (storageData) {
                        this.data = storageData;
                      }

                    case 5:
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var storageData, _this$data, _this$data2;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.get('users');

                    case 2:
                      storageData = _context4.sent;

                      if (storageData) {
                        (_this$data = this.data).push.apply(_this$data, _toConsumableArray(storageData));
                      } else {
                        (_this$data2 = this.data).push.apply(_this$data2, _toConsumableArray(_users_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
                      }

                    case 4:
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
    },

    /***/
    "z+ag":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-card/photo-card.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zAg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title><strong>{{item.name}} - {{item.age}} {{item.age > 1 ? 'Meses' : 'Mês'}} </strong></ion-card-title>\r\n    <ion-card-subtitle>{{item.place}}</ion-card-subtitle>\r\n    <ion-card-subtitle>Criado em: {{getFormattedDate()}}</ion-card-subtitle>\r\n    <ion-card-subtitle>Tutor temporário: {{item.userName}}</ion-card-subtitle>\r\n  </ion-card-header>\r\n<ion-card-content>\r\n  <ion-img class=\"cardImg\" [src]=\"item && item.images[0] && item.images[0].url\" alt={{item.name}}></ion-img>\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"ion-text-wrap\">{{item.description}}</ion-label>\r\n  </ion-item>  \r\n</ion-card-content>\r\n  \r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button fill=\"clear\" (click)=\"selectAnimal(item.userId)\">\r\n        <span>\r\n          <ion-icon slot=\"icon-only\" name=\"paw-outline\"></ion-icon>\r\n          <small> Cuidar </small>\r\n        </span>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~feed-feed-module~search-search-module-es5.js.map