(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-donate-module"], {
    /***/
    "1fDV":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/pet-card-donation-page/pet-card-donation-page.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PetCardDonationPageComponent */

    /***/
    function fDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PetCardDonationPageComponent", function () {
        return PetCardDonationPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pet_card_donation_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pet-card-donation-page.component.html */
      "g+us");
      /* harmony import */


      var _pet_card_donation_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pet-card-donation-page.component.scss */
      "TVdR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/PetsDataServiceNew */
      "8dLr");

      var PetCardDonationPageComponent = /*#__PURE__*/function () {
        function PetCardDonationPageComponent(router, petsDataService) {
          _classCallCheck(this, PetCardDonationPageComponent);

          this.router = router;
          this.petsDataService = petsDataService;
        }

        _createClass(PetCardDonationPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getFormattedDate",
          value: function getFormattedDate() {
            return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
          }
        }, {
          key: "editDonation",
          value: function editDonation() {
            console.log('editDonation -> this.item.id = ', this.item.id); //this.router.navigate(['/home/tabs/donate/edit-donation/'], this.item.id);
          }
        }, {
          key: "pauseDonation",
          value: function pauseDonation() {
            console.log('pauseDonation -> this.item.id = ', this.item.id); //this.petsDataService.pause(this.item.id);
          }
        }, {
          key: "deleteDonation",
          value: function deleteDonation() {
            console.log('deleteDonation -> this.item.id = ', this.item.id);
            this.petsDataService["delete"](this.item.id).subscribe();
          }
        }]);

        return PetCardDonationPageComponent;
      }();

      PetCardDonationPageComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_5__["PetsDataServiceNew"]
        }];
      };

      PetCardDonationPageComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PetCardDonationPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pet-card-donation-page',
        template: _raw_loader_pet_card_donation_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pet_card_donation_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PetCardDonationPageComponent);
      /***/
    },

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
    "9/bd":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/donate/donate.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function bd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n  <ion-title>Minhas Doações ({{(filteredPetData | async)?.length}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button expand=\"full\" (click)=\"createNewDonation()\">Criar nova doação</ion-button>\r\n  <app-pet-card-donation-page [item]=\"i\" *ngFor=\"let i of (filteredPetData | async)\"> </app-pet-card-donation-page>  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "J6vW":
    /*!**********************************************!*\
      !*** ./src/app/home/donate/donate.module.ts ***!
      \**********************************************/

    /*! exports provided: DonatePageModule */

    /***/
    function J6vW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePageModule", function () {
        return DonatePageModule;
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


      var _components_pet_card_donation_page_pet_card_donation_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/pet-card-donation-page/pet-card-donation-page.component */
      "1fDV");
      /* harmony import */


      var _donate_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donate-routing.module */
      "piCf");
      /* harmony import */


      var _donate_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./donate.page */
      "LQgz");

      var DonatePageModule = function DonatePageModule() {
        _classCallCheck(this, DonatePageModule);
      };

      DonatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_routing_module__WEBPACK_IMPORTED_MODULE_6__["DonatePageRoutingModule"]],
        declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_7__["DonatePage"], _components_pet_card_donation_page_pet_card_donation_page_component__WEBPACK_IMPORTED_MODULE_5__["PetCardDonationPageComponent"]]
      })], DonatePageModule);
      /***/
    },

    /***/
    "LQgz":
    /*!********************************************!*\
      !*** ./src/app/home/donate/donate.page.ts ***!
      \********************************************/

    /*! exports provided: DonatePage */

    /***/
    function LQgz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePage", function () {
        return DonatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donate.page.html */
      "9/bd");
      /* harmony import */


      var _donate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donate.page.scss */
      "OHFl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/PetsDataServiceNew */
      "8dLr");
      /* harmony import */


      var _services_UserDataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/UserDataService */
      "YaVU");

      var DonatePage = /*#__PURE__*/function () {
        function DonatePage(router, petsDataService, userDataService) {
          _classCallCheck(this, DonatePage);

          this.router = router;
          this.petsDataService = petsDataService;
          this.userDataService = userDataService;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.isLoading = false;
        }

        _createClass(DonatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.userData = this.userDataService.get();
            console.log('cucucucucu');
            this.filteredPetData = this.petsDataService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
              console.log('data = ', data);
              return data.filter(function (i) {
                return i.userId === _this6.userData.id;
              });
            }));
            console.log('filterPetData', this.filteredPetData); // .subscribe(data => {
            //   this.filteredPetData = data.filter(i => i.userId === this.userData.id);
            // });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subject.next();
            this.subject.complete();
          } //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this7 = this;

            console.log('donate.page -> ionViewWillEnter');
            this.userData = this.userDataService.get();
            this.isLoading = true;
            this.petsDataService.fetch().subscribe(function () {
              _this7.isLoading = false;
            });
          }
        }, {
          key: "createNewDonation",
          value: function createNewDonation() {
            this.router.navigate(['/home/tabs/donate/new-donation/']);
          }
        }]);

        return DonatePage;
      }();

      DonatePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_7__["PetsDataServiceNew"]
        }, {
          type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_8__["UserDataService"]
        }];
      };

      DonatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-donate',
        template: _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonatePage);
      /***/
    },

    /***/
    "OHFl":
    /*!**********************************************!*\
      !*** ./src/app/home/donate/donate.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function OHFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZG9uYXRlL2RvbmF0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "TVdR":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/pet-card-donation-page/pet-card-donation-page.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function TVdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cardImg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  max-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXQtY2FyZC1kb25hdGlvbi1wYWdlL3BldC1jYXJkLWRvbmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BldC1jYXJkLWRvbmF0aW9uLXBhZ2UvcGV0LWNhcmQtZG9uYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkSW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxufSJdfQ== */";
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
    "g+us":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pet-card-donation-page/pet-card-donation-page.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gUs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title><strong>{{item.name}}</strong></ion-card-title>\r\n  </ion-card-header>\r\n  <img class=\"cardImg\" [src]=\"item && item.images[0] && item.images[0].url\" alt={{item.name}}/>\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button disabled=\"true\" fill=\"clear\" expand=\"full\" (click)=\"editDonation()\">\r\n            <span>\r\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon><br>\r\n              <small>Editar</small>\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button disabled=\"true\" fill=\"clear\" expand=\"full\" (click)=\"pauseDonation()\">\r\n            <span>\r\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon><br>\r\n              <small>Pausar</small>\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button fill=\"clear\" expand=\"full\" (click)=\"deleteDonation()\">\r\n            <span>\r\n              <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon><br>\r\n              <small>Excluir</small>\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>";
      /***/
    },

    /***/
    "piCf":
    /*!******************************************************!*\
      !*** ./src/app/home/donate/donate-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: DonatePageRoutingModule */

    /***/
    function piCf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePageRoutingModule", function () {
        return DonatePageRoutingModule;
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


      var _donate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate.page */
      "LQgz");

      var routes = [{
        path: '',
        component: _donate_page__WEBPACK_IMPORTED_MODULE_3__["DonatePage"]
      }, {
        path: 'new-donation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | new-donation-new-donation-module */
          "new-donation-new-donation-module").then(__webpack_require__.bind(null,
          /*! ./new-donation/new-donation.module */
          "n93T")).then(function (m) {
            return m.NewDonationPageModule;
          });
        }
      }, {
        path: 'edit-donation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | edit-donation-edit-donation-module */
          "edit-donation-edit-donation-module").then(__webpack_require__.bind(null,
          /*! ./edit-donation/edit-donation.module */
          "dTjE")).then(function (m) {
            return m.EditDonationPageModule;
          });
        }
      }];

      var DonatePageRoutingModule = function DonatePageRoutingModule() {
        _classCallCheck(this, DonatePageRoutingModule);
      };

      DonatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonatePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=donate-donate-module-es5.js.map