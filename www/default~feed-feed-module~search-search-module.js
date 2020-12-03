(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~feed-feed-module~search-search-module"],{

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

/***/ "BwrQ":
/*!**************************!*\
  !*** ./src/app/users.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = (users);

/***/ }),

/***/ "DBv0":
/*!*****************************************************************!*\
  !*** ./src/app/components/photo-card/photo-card.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardImg {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by1jYXJkL3Bob3RvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tY2FyZC9waG90by1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRJbWcge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "QOe8":
/*!***************************************************************!*\
  !*** ./src/app/components/photo-card/photo-card.component.ts ***!
  \***************************************************************/
/*! exports provided: PhotoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoCardComponent", function() { return PhotoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_photo_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./photo-card.component.html */ "z+ag");
/* harmony import */ var _photo_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-card.component.scss */ "DBv0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/UserDataService */ "YaVU");
/* harmony import */ var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/UsersDataService */ "wmZG");







var PhotoCardComponent = /** @class */ (function () {
    function PhotoCardComponent(usersDataService, alertController, userDataService) {
        this.usersDataService = usersDataService;
        this.alertController = alertController;
        this.userDataService = userDataService;
    }
    PhotoCardComponent.prototype.ngOnInit = function () { };
    PhotoCardComponent.prototype.presentAlertDonation = function (contact) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Oba!',
                            message: 'Para combinar os detalhes da adoção com o tutor temporário, entre em contato através do e-mail: <strong>' +
                                contact +
                                '</strong>',
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoCardComponent.prototype.presentAlertDetails = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Atenção!',
                            message: 'Você disponibilizou esse animal para adoção.',
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoCardComponent.prototype.selectAnimal = function (donationUserId) {
        var currentUser = this.userDataService.get();
        var donationUser = this.usersDataService.getById(donationUserId);
        if (currentUser.id !== donationUser.id) {
            this.presentAlertDonation(donationUser.email);
        }
        else {
            this.presentAlertDetails();
        }
    };
    PhotoCardComponent.prototype.getFormattedDate = function () {
        return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
    };
    PhotoCardComponent.ctorParameters = function () { return [
        { type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__["UsersDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] }
    ]; };
    PhotoCardComponent.propDecorators = {
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    PhotoCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-photo-card',
            template: _raw_loader_photo_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_photo_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], PhotoCardComponent);
    return PhotoCardComponent;
}());



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

/***/ "wmZG":
/*!**********************************************!*\
  !*** ./src/app/services/UsersDataService.ts ***!
  \**********************************************/
/*! exports provided: UsersDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDataService", function() { return UsersDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.js */ "BwrQ");




var UsersDataService = /** @class */ (function () {
    function UsersDataService(storage) {
        this.storage = storage;
        this.data = [];
        this.loadData();
    }
    UsersDataService.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var storageData;
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.storage.get('users')];
                    case 1:
                        storageData = (_c.sent());
                        if (storageData) {
                            (_a = this.data).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(storageData));
                        }
                        else {
                            (_b = this.data).push.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_users_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersDataService.prototype.storeData = function () {
        this.storage.set('users', this.data);
    };
    UsersDataService.prototype.getAll = function () {
        return this.data;
    };
    UsersDataService.prototype.getById = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data.find(function (i) { return i.id === id; }));
    };
    UsersDataService.prototype.update = function (entry) {
        console.log('UsersDataService -> update, entry = ', entry);
        var id = this.data.findIndex(function (i) { return i.id === entry.id; });
        if (id >= 0) {
            this.data[id] = entry;
            this.storeData();
            console.log('UsersDataService -> update, was updated');
        }
        return id;
    };
    UsersDataService.prototype.create = function (entry) {
        var currentId = Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.data.map(function (i) { return i.id; }))) + 1;
        this.data.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entry), { id: currentId }));
        this.storeData();
        return currentId;
    };
    UsersDataService.prototype.delete = function (entry) {
        var id = this.data.findIndex(function (i) { return i.id === entry.id; });
        if (id >= 0) {
            this.data.splice(id, 1);
            this.storeData();
        }
        return id;
    };
    UsersDataService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    UsersDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], UsersDataService);
    return UsersDataService;
}());



/***/ }),

/***/ "z+ag":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-card/photo-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title><strong>{{item.name}} - {{item.age}} {{item.age > 1 ? 'Meses' : 'Mês'}} </strong></ion-card-title>\r\n    <ion-card-subtitle>{{item.place}}</ion-card-subtitle>\r\n    <ion-card-subtitle>Criado em: {{getFormattedDate()}}</ion-card-subtitle>\r\n    <ion-card-subtitle>Tutor temporário: {{item.userName}}</ion-card-subtitle>\r\n  </ion-card-header>\r\n<ion-card-content>\r\n  <ion-img class=\"cardImg\" [src]=\"item && item.images[0] && item.images[0].url\" alt={{item.name}}></ion-img>\r\n  <ion-item lines=\"full\">\r\n    <ion-label class=\"ion-text-wrap\">{{item.description}}</ion-label>\r\n  </ion-item>  \r\n</ion-card-content>\r\n  \r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button fill=\"clear\" (click)=\"selectAnimal(item.userId)\">\r\n        <span>\r\n          <ion-icon slot=\"icon-only\" name=\"paw-outline\"></ion-icon>\r\n          <small> Cuidar </small>\r\n        </span>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-card>");

/***/ })

}]);
//# sourceMappingURL=default~feed-feed-module~search-search-module.js.map