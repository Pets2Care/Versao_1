(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-user-new-user-module"],{

/***/ "GY1L":
/*!**************************************************!*\
  !*** ./src/app/auth/new-user/new-user.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbmV3LXVzZXIvbmV3LXVzZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "GtFw":
/*!************************************************!*\
  !*** ./src/app/auth/new-user/new-user.page.ts ***!
  \************************************************/
/*! exports provided: NewUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserPage", function() { return NewUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-user.page.html */ "IX0C");
/* harmony import */ var _new_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-user.page.scss */ "GY1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/UserDataService */ "YaVU");
/* harmony import */ var _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/UsersDataService */ "wmZG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());
var NewUserPage = /** @class */ (function () {
    function NewUserPage(usersDataService, userDataService, alertController, router) {
        this.usersDataService = usersDataService;
        this.userDataService = userDataService;
        this.alertController = alertController;
        this.router = router;
        this.loadData();
    }
    NewUserPage.prototype.ngOnInit = function () {
    };
    NewUserPage.prototype.loadData = function () {
        this.user = { id: 0, email: '', name: '', password: '', pets: [] };
    };
    NewUserPage.prototype.loginUser = function (userId) {
        var user = this.usersDataService.getById(userId);
        this.userDataService.set(user);
        this.router.navigate(['/home']);
    };
    NewUserPage.prototype.isFormComplete = function () {
        var _a, _b, _c, _d, _e;
        return !(((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
            ((_d = (_c = this.user) === null || _c === void 0 ? void 0 : _c.email) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((_e = this.user) === null || _e === void 0 ? void 0 : _e.password) &&
            this.confirmPassword);
    };
    NewUserPage.prototype.postForm = function () {
        if (this.verifyPassword()) {
            this.newUser = this.usersDataService.create(this.user);
            if (this.newUser) {
                this.loginUser(this.newUser);
            }
        }
    };
    NewUserPage.prototype.verifyPassword = function () {
        if (this.user.password === this.confirmPassword) {
            return true;
        }
        else {
            this.presentAlertErrorPassword();
            return false;
        }
    };
    NewUserPage.prototype.presentAlertErrorPassword = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Atenção!',
                            message: 'Senhas não coincidem!',
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
    NewUserPage.ctorParameters = function () { return [
        { type: _services_UsersDataService__WEBPACK_IMPORTED_MODULE_6__["UsersDataService"] },
        { type: _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NewUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-new-user',
            template: _raw_loader_new_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_new_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], NewUserPage);
    return NewUserPage;
}());



/***/ }),

/***/ "IX0C":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/new-user/new-user.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Novo Usuário</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-col>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Nome:</ion-label>\r\n        <ion-input clearInput type=\"text\" name=\"name\"[(ngModel)]=\"user.name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">E-mail:</ion-label>\r\n        <ion-input clearInput type=\"email\" name=\"email\"[(ngModel)]=\"user.email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Endereço:</ion-label>        \r\n        <ion-input clearInput type=\"text\" name=\"street\"></ion-input> \r\n     </ion-item>\r\n     <ion-item>\r\n      <ion-label position=\"stacked\">Complemento:</ion-label>        \r\n      <ion-input clearInput type=\"text\" name=\"complement\"></ion-input> \r\n    </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Cidade:</ion-label>\r\n        <ion-input clearInput type=\"text\" name=\"place\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Estado:</ion-label>        \r\n        <ion-input clearInput type=\"text\" name=\"state\"></ion-input> \r\n     </ion-item>\r\n     <ion-item>\r\n      <ion-label position=\"stacked\">Senha:</ion-label>        \r\n      <ion-input clearInput name=\"password\" [(ngModel)]=\"user.password\"></ion-input> \r\n   </ion-item>\r\n   <ion-item>\r\n    <ion-label position=\"stacked\">Confirme a Senha:</ion-label>        \r\n    <ion-input clearInput name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\"></ion-input> \r\n </ion-item>\r\n <br>\r\n  </ion-col>\r\n    <div style=\"text-align: center\">\r\n      <ion-button disabled={{isFormComplete()}} type=\"submit\" (click)=\"postForm()\">Confirmar</ion-button>\r\n    </div>\r\n  </ion-content>\r\n");

/***/ }),

/***/ "Wl81":
/*!**********************************************************!*\
  !*** ./src/app/auth/new-user/new-user-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: NewUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserPageRoutingModule", function() { return NewUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-user.page */ "GtFw");




var routes = [
    {
        path: '',
        component: _new_user_page__WEBPACK_IMPORTED_MODULE_3__["NewUserPage"]
    }
];
var NewUserPageRoutingModule = /** @class */ (function () {
    function NewUserPageRoutingModule() {
    }
    NewUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NewUserPageRoutingModule);
    return NewUserPageRoutingModule;
}());



/***/ }),

/***/ "xeKJ":
/*!**************************************************!*\
  !*** ./src/app/auth/new-user/new-user.module.ts ***!
  \**************************************************/
/*! exports provided: NewUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserPageModule", function() { return NewUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-user-routing.module */ "Wl81");
/* harmony import */ var _new_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-user.page */ "GtFw");







var NewUserPageModule = /** @class */ (function () {
    function NewUserPageModule() {
    }
    NewUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _new_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewUserPageRoutingModule"]
            ],
            declarations: [_new_user_page__WEBPACK_IMPORTED_MODULE_6__["NewUserPage"]]
        })
    ], NewUserPageModule);
    return NewUserPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=new-user-new-user-module.js.map