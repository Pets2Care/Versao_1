(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "kV0F");




var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"],
    },
    {
        path: 'new-user',
        loadChildren: function () { return __webpack_require__.e(/*! import() | new-user-new-user-module */ "new-user-new-user-module").then(__webpack_require__.bind(null, /*! ./new-user/new-user.module */ "xeKJ")).then(function (m) { return m.NewUserPageModule; }); }
    },
];
var AuthPageRoutingModule = /** @class */ (function () {
    function AuthPageRoutingModule() {
    }
    AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AuthPageRoutingModule);
    return AuthPageRoutingModule;
}());



/***/ }),

/***/ "Buvn":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>E-mail</ion-label>\r\n    <ion-input clearInput type=\"email\" [(ngModel)]=\"userName\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Senha</ion-label>\r\n    <ion-input clearInput type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n  </ion-item>\r\n  <br>\r\n\r\n  <div style=\"text-align: center\">\r\n    <ion-button (click)=\"verifyUser($event)\" >Login</ion-button>\r\n  </div>\r\n  <br>\r\n\r\n  <br>\r\n  <div style=\"text-align: center\">\r\n    <ion-button fill=\"clear\" (click)=\"createUser()\">\r\n      <span>\r\n        <ion-icon name=\"man-outline\"></ion-icon><br>\r\n      <small> Ainda não tem uma conta? Registre-se Aqui!</small> \r\n      </span> \r\n    </ion-button>\r\n  </div>\r\n</ion-content>");

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

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "kV0F");







var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]],
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "jMPm":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "kV0F":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.page.html */ "Buvn");
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.page.scss */ "jMPm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/UserDataService */ "YaVU");
/* harmony import */ var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/UsersDataService */ "wmZG");








var AuthPage = /** @class */ (function () {
    function AuthPage(usersDataService, userDataService, alertController, router) {
        this.usersDataService = usersDataService;
        this.userDataService = userDataService;
        this.alertController = alertController;
        this.router = router;
        this.loadData();
    }
    AuthPage.prototype.ngOnInit = function () { };
    AuthPage.prototype.loadData = function () {
        this.users = this.usersDataService.getAll();
    };
    AuthPage.prototype.verifyUser = function (ev) {
        var _this = this;
        var hasUser = this.users.find(function (e) { return e.email === _this.userName; });
        if (hasUser) {
            if (hasUser.password === this.password) {
                this.loginUser(hasUser.id);
            }
        }
        else {
            this.presentAlertError();
        }
    };
    AuthPage.prototype.presentAlertError = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Atenção!',
                            message: 'Usuário e/ou Senha incorretos!',
                            buttons: ['OK']
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
    AuthPage.prototype.loginUser = function (userId) {
        var user = this.usersDataService.getById(userId);
        this.userDataService.set(user);
        this.router.navigate(['/home']);
    };
    AuthPage.prototype.createUser = function () {
        this.router.navigate(['/auth/new-user']);
    };
    AuthPage.ctorParameters = function () { return [
        { type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_7__["UsersDataService"] },
        { type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-auth',
            template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AuthPage);
    return AuthPage;
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



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map