(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-donation-new-donation-module"], {
    /***/
    "8S4G":
    /*!*************************************************************************!*\
      !*** ./src/app/home/donate/new-donation/new-donation-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: NewDonationPageRoutingModule */

    /***/
    function S4G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDonationPageRoutingModule", function () {
        return NewDonationPageRoutingModule;
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


      var _new_donation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-donation.page */
      "LTg/");

      var routes = [{
        path: '',
        component: _new_donation_page__WEBPACK_IMPORTED_MODULE_3__["NewDonationPage"]
      }];

      var NewDonationPageRoutingModule = function NewDonationPageRoutingModule() {
        _classCallCheck(this, NewDonationPageRoutingModule);
      };

      NewDonationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewDonationPageRoutingModule);
      /***/
    },

    /***/
    "B+hZ":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/donate/new-donation/new-donation.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/tabs/donate\"></ion-back-button>\r\n    </ion-buttons>    \r\n    <ion-title>Nova Doação</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<form (ngSubmit)=\"postForm()\">\r\n  <ion-col>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Nome:</ion-label>\r\n      <ion-input type=\"text\" name=\"name\"[(ngModel)]=\"newPet.name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Idade (meses):</ion-label>\r\n      <ion-input type=\"number\" name=\"age\"[(ngModel)]=\"newPet.age\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Cidade:</ion-label>\r\n      <ion-input type=\"text\" name=\"place\"[(ngModel)]=\"newPet.place\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Espécie:</ion-label>\r\n      <ion-select name=\"type\" [(ngModel)]=\"newPet.type\">\r\n        <ion-select-option value=\"cat\">Gato</ion-select-option>\r\n        <ion-select-option value=\"dog\">Cachorro</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Descrição:</ion-label>        \r\n      <ion-textarea name=\"description\" [(ngModel)]=\"newPet.description\" rows=\"5\" placeholder=\"Descreva as principais características do animal\"></ion-textarea> \r\n   </ion-item>\r\n   <ion-item>\r\n    <ion-label position=\"stacked\">Foto do Animal:</ion-label>\r\n    <ion-input type=\"file\" name=\"images\" (change)=\"uploadFiles($event)\"></ion-input>\r\n  </ion-item>\r\n  </ion-col>\r\n  <ion-button disabled={{isFormComplete()}} type=\"submit\" >Confirmar</ion-button>\r\n</form>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "LTg/":
    /*!***************************************************************!*\
      !*** ./src/app/home/donate/new-donation/new-donation.page.ts ***!
      \***************************************************************/

    /*! exports provided: NewDonationPage */

    /***/
    function LTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDonationPage", function () {
        return NewDonationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_donation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-donation.page.html */
      "B+hZ");
      /* harmony import */


      var _new_donation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-donation.page.scss */
      "s4OM");
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


      var _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/PetsDataServiceNew */
      "8dLr");
      /* harmony import */


      var _services_UserDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/UserDataService */
      "YaVU");

      var PetFormData = function PetFormData() {
        _classCallCheck(this, PetFormData);
      };

      var NewDonationPage = /*#__PURE__*/function () {
        function NewDonationPage(alertController, router, petsDataService, userDataService) {
          _classCallCheck(this, NewDonationPage);

          this.alertController = alertController;
          this.router = router;
          this.petsDataService = petsDataService;
          this.userDataService = userDataService;
          this.newPet = new PetFormData();
          this.loadData();
        }

        _createClass(NewDonationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loadData",
          value: function loadData() {
            this.user = this.userDataService.get();
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles(event) {
            var files = event.target.files;
            console.log('uploadFiles -> files = ', files);
            this.newPet.images = files;
          }
        }, {
          key: "postForm",
          value: function postForm() {
            var _this = this;

            this.newPet.userId = this.user.id;
            this.newPet.userName = this.user.name;
            this.petsDataService.create(this.newPet).subscribe(function () {
              _this.newPet = new PetFormData();

              _this.presentAlertSuccess();
            });
          }
        }, {
          key: "isFormComplete",
          value: function isFormComplete() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

            return !(((_b = (_a = this.newPet) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_d = (_c = this.newPet) === null || _c === void 0 ? void 0 : _c.place) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((_e = this.newPet) === null || _e === void 0 ? void 0 : _e.images) && ((_f = this.newPet) === null || _f === void 0 ? void 0 : _f.age) && ((_h = (_g = this.newPet) === null || _g === void 0 ? void 0 : _g.type) === null || _h === void 0 ? void 0 : _h.length) > 0 && ((_k = (_j = this.newPet) === null || _j === void 0 ? void 0 : _j.description) === null || _k === void 0 ? void 0 : _k.length) > 0);
          }
        }, {
          key: "presentAlertSuccess",
          value: function presentAlertSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Doação criada com sucesso!',
                        buttons: [{
                          text: 'Entendi',
                          handler: function handler() {
                            console.log('clicou, volta pra lista de doações');

                            _this2.router.navigate(['/home/tabs/donate/']);
                          }
                        }]
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
          key: "presentAlertError",
          value: function presentAlertError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Houve um erro na criação da doação',
                        message: 'Por favor tente novamente mais tarde',
                        buttons: [{
                          text: 'Entendi',
                          handler: function handler() {
                            _this3.router.navigate(['/home/tabs/donate/']);
                          }
                        }]
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
        }]);

        return NewDonationPage;
      }();

      NewDonationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_6__["PetsDataServiceNew"]
        }, {
          type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_7__["UserDataService"]
        }];
      };

      NewDonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-donation',
        template: _raw_loader_new_donation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_donation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewDonationPage);
      /***/
    },

    /***/
    "n93T":
    /*!*****************************************************************!*\
      !*** ./src/app/home/donate/new-donation/new-donation.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NewDonationPageModule */

    /***/
    function n93T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDonationPageModule", function () {
        return NewDonationPageModule;
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


      var _new_donation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-donation-routing.module */
      "8S4G");
      /* harmony import */


      var _new_donation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-donation.page */
      "LTg/");

      var NewDonationPageModule = function NewDonationPageModule() {
        _classCallCheck(this, NewDonationPageModule);
      };

      NewDonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_donation_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewDonationPageRoutingModule"]],
        declarations: [_new_donation_page__WEBPACK_IMPORTED_MODULE_6__["NewDonationPage"]]
      })], NewDonationPageModule);
      /***/
    },

    /***/
    "s4OM":
    /*!*****************************************************************!*\
      !*** ./src/app/home/donate/new-donation/new-donation.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function s4OM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZG9uYXRlL25ldy1kb25hdGlvbi9uZXctZG9uYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-donation-new-donation-module-es5.js.map