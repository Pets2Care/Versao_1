(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
    /***/
    "LmBJ":
    /*!**********************************************!*\
      !*** ./src/app/home/search/search.module.ts ***!
      \**********************************************/

    /*! exports provided: SearchPageModule */

    /***/
    function LmBJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
        return SearchPageModule;
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


      var _components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/photo-card/photo-card.component */
      "QOe8");
      /* harmony import */


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-routing.module */
      "v6WS");
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./search.page */
      "Ry/l");

      var SearchPageModule = function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      };

      SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchPageRoutingModule"]],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"], _components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_5__["PhotoCardComponent"]]
      })], SearchPageModule);
      /***/
    },

    /***/
    "Ry/l":
    /*!********************************************!*\
      !*** ./src/app/home/search/search.page.ts ***!
      \********************************************/

    /*! exports provided: SearchPage */

    /***/
    function RyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
        return SearchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search.page.html */
      "Vk/a");
      /* harmony import */


      var _search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search.page.scss */
      "WBpY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/PetsDataServiceNew */
      "8dLr");

      var SearchPage = /*#__PURE__*/function () {
        function SearchPage(petsDataService) {
          _classCallCheck(this, SearchPage);

          this.petsDataService = petsDataService;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.isLoading = false;
          this.selectedSegment = 'all';
        }

        _createClass(SearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.petsDataService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.subject)).subscribe(function (data) {
              _this.petsData = data;
            });
            this.applySegmentFilter(this.selectedSegment);
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
            var _this2 = this;

            this.isLoading = true;
            this.petsDataService.fetch().subscribe(function () {
              _this2.isLoading = false;
            });
          }
        }, {
          key: "applySegmentFilter",
          value: function applySegmentFilter(type) {
            console.log('applySegmentFilter -> type = ', type);

            if (type === 'all') {
              this.filteredPetsData = this.petsData;
            } else {
              this.filteredPetsData = this.petsData.filter(function (i) {
                return i.type === type;
              });
              console.log('filtrados = ', this.filteredPetsData);
            }

            this.result = this.filteredPetsData;
          }
        }, {
          key: "filterArray",
          value: function filterArray(ev) {
            console.log('filterArray -> ev.target.value = ', ev.target.value);
            this.result = this.filteredPetsData;
            var val = ev.target.value;

            if (val && val.trim() !== '') {
              this.result = this.result.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.place.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              return this.filteredPetsData;
            }
          }
        }]);

        return SearchPage;
      }();

      SearchPage.ctorParameters = function () {
        return [{
          type: _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_6__["PetsDataServiceNew"]
        }];
      };

      SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SearchPage);
      /***/
    },

    /***/
    "Vk/a":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/search.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function VkA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"applySegmentFilter($event.detail.value)\">\r\n      <ion-segment-button value=\"all\">\r\n        <ion-label>Todos</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"dog\">\r\n        <ion-label>Cachorros</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"cat\">\r\n        <ion-label>Gatos</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar (ionInput)=\"filterArray($event)\" placeholder=\"Buscar animal\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text color=\"primary\">\r\n    <h1 class=\"ion-text-center\">\r\n      {{result.length}} Animais Encontrados\r\n    </h1>\r\n  </ion-text>\r\n      <app-photo-card [item]=\"i\" *ngFor=\"let i of result\"> </app-photo-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "WBpY":
    /*!**********************************************!*\
      !*** ./src/app/home/search/search.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function WBpY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "v6WS":
    /*!******************************************************!*\
      !*** ./src/app/home/search/search-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: SearchPageRoutingModule */

    /***/
    function v6WS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
        return SearchPageRoutingModule;
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


      var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search.page */
      "Ry/l");

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
      }, {
        path: 'detail-donation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | detail-donation-detail-donation-module */
          "detail-donation-detail-donation-module").then(__webpack_require__.bind(null,
          /*! ./detail-donation/detail-donation.module */
          "Q5NW")).then(function (m) {
            return m.DetailDonationPageModule;
          });
        }
      }];

      var SearchPageRoutingModule = function SearchPageRoutingModule() {
        _classCallCheck(this, SearchPageRoutingModule);
      };

      SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-search-module-es5.js.map