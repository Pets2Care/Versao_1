(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-donate-module"],{

/***/ "1fDV":
/*!***************************************************************************************!*\
  !*** ./src/app/components/pet-card-donation-page/pet-card-donation-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PetCardDonationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetCardDonationPageComponent", function() { return PetCardDonationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pet_card_donation_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pet-card-donation-page.component.html */ "g+us");
/* harmony import */ var _pet_card_donation_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pet-card-donation-page.component.scss */ "TVdR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/PetsDataServiceNew */ "8dLr");






var PetCardDonationPageComponent = /** @class */ (function () {
    function PetCardDonationPageComponent(router, petsDataService) {
        this.router = router;
        this.petsDataService = petsDataService;
    }
    PetCardDonationPageComponent.prototype.ngOnInit = function () { };
    PetCardDonationPageComponent.prototype.getFormattedDate = function () {
        return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
    };
    PetCardDonationPageComponent.prototype.editDonation = function () {
        console.log('editDonation -> this.item.id = ', this.item.id);
        //this.router.navigate(['/home/tabs/donate/edit-donation/'], this.item.id);
    };
    PetCardDonationPageComponent.prototype.pauseDonation = function () {
        console.log('pauseDonation -> this.item.id = ', this.item.id);
        //this.petsDataService.pause(this.item.id);
    };
    PetCardDonationPageComponent.prototype.deleteDonation = function () {
        console.log('deleteDonation -> this.item.id = ', this.item.id);
        this.petsDataService.delete(this.item.id).subscribe();
    };
    PetCardDonationPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_5__["PetsDataServiceNew"] }
    ]; };
    PetCardDonationPageComponent.propDecorators = {
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    PetCardDonationPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pet-card-donation-page',
            template: _raw_loader_pet_card_donation_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_pet_card_donation_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], PetCardDonationPageComponent);
    return PetCardDonationPageComponent;
}());



/***/ }),

/***/ "8dLr":
/*!************************************************!*\
  !*** ./src/app/services/PetsDataServiceNew.ts ***!
  \************************************************/
/*! exports provided: PetsDataServiceNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsDataServiceNew", function() { return PetsDataServiceNew; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






var PetsDataServiceNew = /** @class */ (function () {
    function PetsDataServiceNew(http) {
        this.http = http;
        this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    PetsDataServiceNew.prototype.get = function () {
        return this.dataStream.asObservable();
    };
    PetsDataServiceNew.prototype.fetch = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/pets").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            _this.dataStream.next(response);
        }));
    };
    PetsDataServiceNew.prototype.getById = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/pets/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            _this.dataStream.next(response);
        }));
    };
    PetsDataServiceNew.prototype.formatFormData = function (data) {
        var e_1, _a;
        var formData = new FormData();
        formData.append('name', data.name);
        formData.append('place', data.place);
        formData.append('userName', data.userName);
        formData.append('userId', data.userId.toString());
        formData.append('age', data.age.toString());
        formData.append('type', data.type);
        formData.append('description', data.description);
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(data.images), _c = _b.next(); !_c.done; _c = _b.next()) {
                var image = _c.value;
                formData.append('images', image);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return formData;
    };
    PetsDataServiceNew.prototype.create = function (data) {
        var _this = this;
        console.log('petDataService -> create -> data = ', data);
        var formData = this.formatFormData(data);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/pets", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log('create response = ', response);
            _this.fetch().subscribe();
        }));
    };
    PetsDataServiceNew.prototype.update = function (data) {
        var _this = this;
        console.log('petDataService -> update -> data = ', data);
        var formData = this.formatFormData(data);
        return this.http
            .put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/pet/" + data.id, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log('update response = ', response);
            _this.fetch().subscribe();
        }));
    };
    PetsDataServiceNew.prototype.delete = function (id) {
        var _this = this;
        console.log('PetsDataServiceNew -> delete() -> chamou -> id = ', id);
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/pet/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log('delete response = ', response);
            _this.fetch().subscribe();
        }));
    };
    PetsDataServiceNew.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PetsDataServiceNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        })
    ], PetsDataServiceNew);
    return PetsDataServiceNew;
}());



/***/ }),

/***/ "9/bd":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/donate/donate.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n  <ion-title>Minhas Doações ({{(filteredPetData | async)?.length}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button expand=\"full\" (click)=\"createNewDonation()\">Criar nova doação</ion-button>\r\n  <app-pet-card-donation-page [item]=\"i\" *ngFor=\"let i of (filteredPetData | async)\"> </app-pet-card-donation-page>  \r\n</ion-content>\r\n");

/***/ }),

/***/ "J6vW":
/*!**********************************************!*\
  !*** ./src/app/home/donate/donate.module.ts ***!
  \**********************************************/
/*! exports provided: DonatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageModule", function() { return DonatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_pet_card_donation_page_pet_card_donation_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pet-card-donation-page/pet-card-donation-page.component */ "1fDV");
/* harmony import */ var _donate_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-routing.module */ "piCf");
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donate.page */ "LQgz");








var DonatePageModule = /** @class */ (function () {
    function DonatePageModule() {
    }
    DonatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_routing_module__WEBPACK_IMPORTED_MODULE_6__["DonatePageRoutingModule"]],
            declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_7__["DonatePage"], _components_pet_card_donation_page_pet_card_donation_page_component__WEBPACK_IMPORTED_MODULE_5__["PetCardDonationPageComponent"]],
        })
    ], DonatePageModule);
    return DonatePageModule;
}());



/***/ }),

/***/ "LQgz":
/*!********************************************!*\
  !*** ./src/app/home/donate/donate.page.ts ***!
  \********************************************/
/*! exports provided: DonatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePage", function() { return DonatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donate.page.html */ "9/bd");
/* harmony import */ var _donate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate.page.scss */ "OHFl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/PetsDataServiceNew */ "8dLr");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/UserDataService */ "YaVU");









var DonatePage = /** @class */ (function () {
    function DonatePage(router, petsDataService, userDataService) {
        this.router = router;
        this.petsDataService = petsDataService;
        this.userDataService = userDataService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isLoading = false;
    }
    DonatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userData = this.userDataService.get();
        console.log('cucucucucu');
        this.filteredPetData = this.petsDataService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            console.log('data = ', data);
            return data.filter(function (i) { return i.userId === _this.userData.id; });
        }));
        console.log('filterPetData', this.filteredPetData);
        // .subscribe(data => {
        //   this.filteredPetData = data.filter(i => i.userId === this.userData.id);
        // });
    };
    DonatePage.prototype.ngOnDestroy = function () {
        this.subject.next();
        this.subject.complete();
    };
    //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
    DonatePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('donate.page -> ionViewWillEnter');
        this.userData = this.userDataService.get();
        this.isLoading = true;
        this.petsDataService.fetch().subscribe(function () {
            _this.isLoading = false;
        });
    };
    DonatePage.prototype.createNewDonation = function () {
        this.router.navigate(['/home/tabs/donate/new-donation/']);
    };
    DonatePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_PetsDataServiceNew__WEBPACK_IMPORTED_MODULE_7__["PetsDataServiceNew"] },
        { type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_8__["UserDataService"] }
    ]; };
    DonatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-donate',
            template: _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_donate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DonatePage);
    return DonatePage;
}());



/***/ }),

/***/ "OHFl":
/*!**********************************************!*\
  !*** ./src/app/home/donate/donate.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZG9uYXRlL2RvbmF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "TVdR":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pet-card-donation-page/pet-card-donation-page.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardImg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  max-height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXQtY2FyZC1kb25hdGlvbi1wYWdlL3BldC1jYXJkLWRvbmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BldC1jYXJkLWRvbmF0aW9uLXBhZ2UvcGV0LWNhcmQtZG9uYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkSW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "YaVU":
/*!*********************************************!*\
  !*** ./src/app/services/UserDataService.ts ***!
  \*********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");



var UserDataService = /** @class */ (function () {
    function UserDataService(storage) {
        this.storage = storage;
        this.loadData();
    }
    UserDataService.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var storageData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UserDataService -> loadData()');
                        return [4 /*yield*/, this.storage.get('user')];
                    case 1:
                        storageData = (_a.sent());
                        if (storageData) {
                            this.data = storageData;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataService.prototype.storeData = function () {
        this.storage.set('user', this.data);
    };
    UserDataService.prototype.get = function () {
        return this.data;
    };
    UserDataService.prototype.set = function (newData) {
        this.data = newData;
        this.storeData();
    };
    UserDataService.prototype.clear = function () {
        console.log('UserDataService -> clear()');
        this.storage.remove('user');
    };
    UserDataService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    UserDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], UserDataService);
    return UserDataService;
}());



/***/ }),

/***/ "g+us":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pet-card-donation-page/pet-card-donation-page.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title><strong>{{item.name}}</strong></ion-card-title>\r\n  </ion-card-header>\r\n  <img class=\"cardImg\" [src]=\"item && item.images[0] && item.images[0].url\" alt={{item.name}}/>\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button disabled=\"true\" fill=\"clear\" expand=\"full\" (click)=\"editDonation()\">\r\n            <span>\r\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon><br>\r\n              <small>Editar</small>\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button disabled=\"true\" fill=\"clear\" expand=\"full\" (click)=\"pauseDonation()\">\r\n            <span>\r\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon><br>\r\n              <small>Pausar</small>\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button fill=\"clear\" expand=\"full\" (click)=\"deleteDonation()\">\r\n            <span>\r\n              <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon><br>\r\n              <small>Excluir</small>\r\n            </span>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "piCf":
/*!******************************************************!*\
  !*** ./src/app/home/donate/donate-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DonatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageRoutingModule", function() { return DonatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donate.page */ "LQgz");




var routes = [
    {
        path: '',
        component: _donate_page__WEBPACK_IMPORTED_MODULE_3__["DonatePage"],
    },
    {
        path: 'new-donation',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | new-donation-new-donation-module */ "new-donation-new-donation-module").then(__webpack_require__.bind(null, /*! ./new-donation/new-donation.module */ "n93T")).then(function (m) { return m.NewDonationPageModule; });
        },
    },
    {
        path: 'edit-donation',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | edit-donation-edit-donation-module */ "edit-donation-edit-donation-module").then(__webpack_require__.bind(null, /*! ./edit-donation/edit-donation.module */ "dTjE")).then(function (m) { return m.EditDonationPageModule; });
        },
    },
];
var DonatePageRoutingModule = /** @class */ (function () {
    function DonatePageRoutingModule() {
    }
    DonatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DonatePageRoutingModule);
    return DonatePageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=donate-donate-module.js.map