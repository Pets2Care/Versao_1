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






let PetsDataServiceNew = class PetsDataServiceNew {
    constructor(http) {
        this.http = http;
        this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    get() {
        return this.dataStream.asObservable();
    }
    fetch() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL}/pets`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            this.dataStream.next(response);
        }));
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL}/pets/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            this.dataStream.next(response);
        }));
    }
    formatFormData(data) {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('place', data.place);
        formData.append('userName', data.userName);
        formData.append('userId', data.userId.toString());
        formData.append('age', data.age.toString());
        formData.append('type', data.type);
        formData.append('description', data.description);
        for (const image of data.images) {
            formData.append('images', image);
        }
        return formData;
    }
    create(data) {
        console.log('petDataService -> create -> data = ', data);
        const formData = this.formatFormData(data);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL}/pets`, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            console.log('create response = ', response);
            this.fetch().subscribe();
        }));
    }
    update(data) {
        console.log('petDataService -> update -> data = ', data);
        const formData = this.formatFormData(data);
        return this.http
            .put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL}/pets/${data.id}`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            console.log('update response = ', response);
            this.fetch().subscribe();
        }));
    }
    delete(id) {
        console.log('PetsDataServiceNew -> delete() -> chamou -> id = ', id);
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL}/pets/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            console.log('delete response = ', response);
            this.fetch().subscribe();
        }));
    }
};
PetsDataServiceNew.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PetsDataServiceNew = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], PetsDataServiceNew);



/***/ }),

/***/ "BwrQ":
/*!**************************!*\
  !*** ./src/app/users.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const users = [
  {
    id: 0,
    name: 'José Assis',
    email: 'jose.assis@email.com',
    password: '1234',
  },
  {
    id: 1,
    name: 'Maria do Carmo',
    email: 'maria.carmo@email.com',
    password: '1234',
  },
  {
    id: 2,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    password: '1234',
  },
  {
    id: 3,
    name: 'Lucas Costa',
    email: 'lucas.costa@email.com',
    password: '1234',
  },
];

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
/* harmony default export */ __webpack_exports__["default"] = (".cardImg {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by1jYXJkL3Bob3RvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tY2FyZC9waG90by1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRJbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufSJdfQ== */");

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







let PhotoCardComponent = class PhotoCardComponent {
    constructor(usersDataService, alertController, userDataService) {
        this.usersDataService = usersDataService;
        this.alertController = alertController;
        this.userDataService = userDataService;
    }
    ngOnInit() { }
    presentAlertDonation(contact) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Oba!',
                message: 'Para combinar os detalhes da adoção com o tutor temporário, entre em contato através do e-mail: <strong>' +
                    contact +
                    '</strong>',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentAlertDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                message: 'Você disponibilizou esse animal para adoção.',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    selectAnimal(donationUserId) {
        const currentUser = this.userDataService.get();
        const donationUser = this.usersDataService.getById(donationUserId);
        if (currentUser.id !== donationUser.id) {
            this.presentAlertDonation(donationUser.email);
        }
        else {
            this.presentAlertDetails();
        }
    }
    getFormattedDate() {
        return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
    }
};
PhotoCardComponent.ctorParameters = () => [
    { type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__["UsersDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] }
];
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



let UserDataService = class UserDataService {
    constructor(storage) {
        this.storage = storage;
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('UserDataService -> loadData()');
            const storageData = (yield this.storage.get('user'));
            if (storageData) {
                this.data = storageData;
            }
        });
    }
    storeData() {
        this.storage.set('user', this.data);
    }
    get() {
        return this.data;
    }
    set(newData) {
        this.data = newData;
        this.storeData();
    }
    clear() {
        console.log('UserDataService -> clear()');
        this.storage.remove('user');
    }
};
UserDataService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
UserDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserDataService);



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




let UsersDataService = class UsersDataService {
    constructor(storage) {
        this.storage = storage;
        this.data = [];
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const storageData = (yield this.storage.get('users'));
            if (storageData) {
                this.data.push(...storageData);
            }
            else {
                this.data.push(..._users_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
            }
        });
    }
    storeData() {
        this.storage.set('users', this.data);
    }
    getAll() {
        return this.data;
    }
    getById(id) {
        return Object.assign({}, this.data.find(i => i.id === id));
    }
    update(entry) {
        console.log('UsersDataService -> update, entry = ', entry);
        const id = this.data.findIndex(i => i.id === entry.id);
        if (id >= 0) {
            this.data[id] = entry;
            this.storeData();
            console.log('UsersDataService -> update, was updated');
        }
        return id;
    }
    create(entry) {
        const currentId = Math.max(...this.data.map(i => i.id)) + 1;
        this.data.push(Object.assign(Object.assign({}, entry), { id: currentId }));
        this.storeData();
        return currentId;
    }
    delete(entry) {
        const id = this.data.findIndex(i => i.id === entry.id);
        if (id >= 0) {
            this.data.splice(id, 1);
            this.storeData();
        }
        return id;
    }
};
UsersDataService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
UsersDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UsersDataService);



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
//# sourceMappingURL=default~feed-feed-module~search-search-module-es2015.js.map