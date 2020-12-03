(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "9JrI":
/*!************************************************!*\
  !*** ./src/app/home/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "9VSt":
/*!*********************************************!*\
  !*** ./src/app/services/PetsDataService.ts ***!
  \*********************************************/
/*! exports provided: PetsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsDataService", function() { return PetsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _pets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pets.js */ "t1Ja");






let PetsDataService = class PetsDataService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
        this.data = [];
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const storageData = (yield this.storage.get('pets'));
            if (storageData) {
                this.data.push(...storageData);
            }
            else {
                this.data.push(..._pets_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
            }
        });
    }
    storeData() {
        this.storage.set('pets', this.data);
    }
    getAll() {
        return this.data;
    }
    getById(id) {
        return Object.assign({}, this.data.find(i => i.id === id));
    }
    getByUserId(userId) {
        const returnValue = [...this.data.filter(i => i.userId === userId)];
        return returnValue;
    }
    update(entry) {
        const id = this.data.findIndex(i => i.id === entry.id);
        if (id >= 0) {
            this.data[id] = entry;
            this.storeData();
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
    deleteByUserId(id) {
        const newData = this.data.filter(pet => pet.userId !== id);
        this.data = [...newData];
        this.storeData();
        return newData.length;
    }
    getAllAPI() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/pets`;
            return (yield this.http.get(url).toPromise());
        });
    }
    getByIdAPI(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/pets/${id}`;
            return (yield this.http.get(url).toPromise());
        });
    }
};
PetsDataService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PetsDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], PetsDataService);



/***/ }),

/***/ "AoIH":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header> </ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item href=\"home/tabs/profile/user-data\">\r\n      <ion-icon slot=\"end\" name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Visualizar e Alterar Dados Pessoais</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/user-password\">\r\n      <ion-icon slot=\"end\" name=\"key-outline\"></ion-icon>\r\n      <ion-label>Alterar Senha</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/user-config\">\r\n      <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon>\r\n      <ion-label>Configurações do Usuário</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/help\">\r\n      <ion-icon slot=\"end\" name=\"help-circle-outline\"></ion-icon>\r\n      <ion-label>Ajuda ao Usuário</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/privacy\">\r\n      <ion-icon slot=\"end\" name=\"document-text-outline\"></ion-icon>\r\n      <ion-label>Política de Privacidade</ion-label>\r\n    </ion-item>\r\n    <ion-item href=\"home/tabs/profile/legal\">\r\n      <ion-icon slot=\"end\" name=\"information-circle-outline\"></ion-icon>\r\n      <ion-label>Informações Legais</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"userLogout()\">\r\n      <ion-icon slot=\"end\" name=\"exit-outline\"></ion-icon>\r\n      <ion-label>Sair da Conta</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"userDelete()\">\r\n      <ion-icon slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n      <ion-label>Excluir Conta</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

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

/***/ "I9jw":
/*!********************************************************!*\
  !*** ./src/app/home/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "fsaT");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
    },
    {
        path: 'user-data',
        loadChildren: () => __webpack_require__.e(/*! import() | user-data-user-data-module */ "user-data-user-data-module").then(__webpack_require__.bind(null, /*! ./user-data/user-data.module */ "pN8O")).then(m => m.UserDataPageModule),
    },
    {
        path: 'user-password',
        loadChildren: () => __webpack_require__.e(/*! import() | user-password-user-password-module */ "user-password-user-password-module").then(__webpack_require__.bind(null, /*! ./user-password/user-password.module */ "NidD")).then(m => m.UserPasswordPageModule),
    },
    {
        path: 'user-config',
        loadChildren: () => __webpack_require__.e(/*! import() | user-config-user-config-module */ "user-config-user-config-module").then(__webpack_require__.bind(null, /*! ./user-config/user-config.module */ "2O0E")).then(m => m.UserConfigPageModule),
    },
    {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ./help/help.module */ "9gdY")).then(m => m.HelpPageModule),
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacy-privacy-module */ "privacy-privacy-module").then(__webpack_require__.bind(null, /*! ./privacy/privacy.module */ "kh/9")).then(m => m.PrivacyPageModule),
    },
    {
        path: 'legal',
        loadChildren: () => __webpack_require__.e(/*! import() | legal-legal-module */ "legal-legal-module").then(__webpack_require__.bind(null, /*! ./legal/legal.module */ "NoPu")).then(m => m.LegalPageModule),
    },
    {
        path: 'user-logout',
        loadChildren: () => __webpack_require__.e(/*! import() | user-logout-user-logout-module */ "user-logout-user-logout-module").then(__webpack_require__.bind(null, /*! ./user-logout/user-logout.module */ "p9Ql")).then(m => m.UserLogoutPageModule),
    },
    {
        path: 'user-delete',
        loadChildren: () => __webpack_require__.e(/*! import() | user-delete-user-delete-module */ "user-delete-user-delete-module").then(__webpack_require__.bind(null, /*! ./user-delete/user-delete.module */ "qE7I")).then(m => m.UserDeletePageModule)
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



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

/***/ "be/P":
/*!************************************************!*\
  !*** ./src/app/home/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "I9jw");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "fsaT");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
    })
], ProfilePageModule);



/***/ }),

/***/ "fsaT":
/*!**********************************************!*\
  !*** ./src/app/home/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "AoIH");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "9JrI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_PetsDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/PetsDataService */ "9VSt");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/UserDataService */ "YaVU");
/* harmony import */ var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/UsersDataService */ "wmZG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let ProfilePage = class ProfilePage {
    constructor(userDataService, usersDataService, petsDataService, alertController, router) {
        this.userDataService = userDataService;
        this.usersDataService = usersDataService;
        this.petsDataService = petsDataService;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() { }
    presentAlertLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                message: 'Deseja realmente sair?',
                buttons: [
                    {
                        text: 'Não',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Cancela Operação');
                        }
                    }, {
                        text: 'Sim',
                        handler: () => {
                            console.log('Confirma Operação');
                            this.userDataService.clear();
                            this.router.navigate(['/auth']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                message: 'Essa operação não poderá ser revertida. Deseja realmente excluir a conta?',
                buttons: [
                    {
                        text: 'Não',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Cancela Operação');
                        }
                    }, {
                        text: 'Sim',
                        handler: () => {
                            this.usersDataService.delete(this.userDataService.get());
                            this.petsDataService.deleteByUserId(this.userDataService.get().id);
                            this.router.navigate(['/auth']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    userLogout() {
        this.presentAlertLogout();
    }
    userDelete() {
        this.presentAlertDelete();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] },
    { type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__["UsersDataService"] },
    { type: _services_PetsDataService__WEBPACK_IMPORTED_MODULE_5__["PetsDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "t1Ja":
/*!*************************!*\
  !*** ./src/app/pets.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pets = [
  {
    id: 0,
    userId: 0,
    userName: 'José Assis',
    createdAt: '09/01/2020',
    name: 'Paçoca',
    place: 'São Paulo',
    images: ['../assets/img/1.jpg'],
    age: 5,
    type: 'dog',
    description:
      'Olá, sou o Paçoca! Tenho só 8 meses e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho e já sei usar tapete! Que tal me dar uma oportunidade?',
  },
  {
    id: 1,
    userId: 1,
    userName: 'Maria do Carmo',
    createdAt: '27/03/2020',
    name: 'Darth Vader',
    place: 'Campinas',
    images: ['../assets/img/2.jpg'],
    age: 4,
    type: 'cat',
    description:
      'Olá, sou o Darth! Tenho 2 aninhos e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho e amo brincar! Que tal me dar uma oportunidade?',
  },
  {
    id: 2,
    userId: 2,
    userName: 'Pedro Oliveira',
    createdAt: '11/07/2020',
    name: 'Bolinha',
    place: 'Rio Branco',
    images: ['../assets/img/3.jpg'],
    age: 3,
    type: 'dog',
    description:
      'Olá, sou o Bolinho! Tenho 1 aninho e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinho, mas olha... amo brincar com a minha bolinha! Que tal me dar uma oportunidade?',
  },
  {
    id: 3,
    userId: 1,
    userName: 'Maria do Carmo',
    createdAt: '24/07/2020',
    name: 'Patinha',
    place: 'Manaus',
    images: ['../assets/img/4.jpg'],
    age: 2,
    type: 'cat',
    description:
      'Olá, sou a Patinha! Tenho 2 aninhos e estou procurando uma familia que me dê muiiiiito amor. Juro que sou bonzinha! Que tal me dar uma oportunidade? ',
  },
  {
    id: 4,
    userId: 3,
    userName: 'Lucas Costa',
    createdAt: '12/11/2020',
    name: 'Brothers',
    place: 'São Carlos',
    images: ['../assets/img/5.jpg'],
    age: 1,
    type: 'dog',
    description:
      'Sim, aqui a adoção é em dobro! Precisamos de um lar disposto a receber irmãos que se amam demais! Irmão pintado: Ted. Irmão caramelo: Batman. Que tal nos dar uma oportunidade? ',
  },
];

/* harmony default export */ __webpack_exports__["default"] = (pets);


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



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map