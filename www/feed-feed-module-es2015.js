(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"],{

/***/ "1kVM":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/feed/feed.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"selectedSegment\">\r\n      <ion-segment-button value=\"featured\">\r\n        <ion-label>Destaques</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"custom\">\r\n        <ion-label>Personalizado</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div [ngSwitch]=\"selectedSegment\" >\r\n  <ion-grid *ngSwitchCase=\"'featured'\">\r\n    <div *ngIf=\"isLoading\" class=\"ion-text-center\">\r\n      <ion-spinner color=\"primary\"></ion-spinner>\r\n    </div>\r\n    <div *ngIf=\"!isLoading && petsData.length <= 0\">\r\n      <p>Nenhum Anúncio Encontrado!</p>\r\n    </div>\r\n    <div *ngIf=\"!isLoading && petsData.length > 0\">\r\n      <app-photo-card [item]=\"i\" *ngFor=\"let i of petsData\"> </app-photo-card>\r\n    </div>   \r\n  </ion-grid>\r\n  <ion-grid *ngSwitchCase=\"'custom'\">\r\n    <ion-item>\r\n      conteúdo custom do usuário {{userData.name}}\r\n    </ion-item>\r\n  </ion-grid>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "98VG":
/*!**************************************************!*\
  !*** ./src/app/home/feed/feed-routing.module.ts ***!
  \**************************************************/
/*! exports provided: FeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function() { return FeedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed.page */ "fpXI");




const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"],
    },
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedPageRoutingModule);



/***/ }),

/***/ "9MSB":
/*!******************************************!*\
  !*** ./src/app/home/feed/feed.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-logo {\n  width: 4em;\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mZWVkL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1sb2dvIHtcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "TNnC":
/*!******************************************!*\
  !*** ./src/app/home/feed/feed.module.ts ***!
  \******************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/photo-card/photo-card.component */ "QOe8");
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-routing.module */ "98VG");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed.page */ "fpXI");








let FeedPageModule = class FeedPageModule {
};
FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_6__["FeedPageRoutingModule"]],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_7__["FeedPage"], _components_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_5__["PhotoCardComponent"]],
    })
], FeedPageModule);



/***/ }),

/***/ "fpXI":
/*!****************************************!*\
  !*** ./src/app/home/feed/feed.page.ts ***!
  \****************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed.page.html */ "1kVM");
/* harmony import */ var _feed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed.page.scss */ "9MSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/PetsDataServiceNew */ "8dLr");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/UserDataService */ "YaVU");








let FeedPage = class FeedPage {
    constructor(petsDataService, userDataService) {
        this.petsDataService = petsDataService;
        this.userDataService = userDataService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isLoading = false;
        this.selectedSegment = 'featured';
    }
    ngOnInit() {
        this.userData = this.userDataService.get();
        this.petsDataService
            .get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.subject))
            .subscribe(data => {
            this.petsData = data;
        });
    }
    ngOnDestroy() {
        this.subject.next();
        this.subject.complete();
    }
    //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
    ionViewWillEnter() {
        this.isLoading = true;
        this.petsDataService.fetch().subscribe(() => {
            this.isLoading = false;
        });
    }
};
FeedPage.ctorParameters = () => [
    { type: _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_6__["PetsDataServiceNew"] },
    { type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_7__["UserDataService"] }
];
FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedPage);



/***/ })

}]);
//# sourceMappingURL=feed-feed-module-es2015.js.map