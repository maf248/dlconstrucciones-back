(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "CPbr":
/*!****************************************************************!*\
  !*** ./src/app/modules/main/pages/auth/auth-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_profile_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/profile.guard */ "Fu3E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | log-in-log-in-module */ "log-in-log-in-module").then(__webpack_require__.bind(null, /*! ./log-in/log-in.module */ "ho4t")).then((m) => m.LogInModule),
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "Zg4R")).then((m) => m.RegisterModule),
    },
    {
        path: 'profile',
        canActivate: [_guards_profile_guard__WEBPACK_IMPORTED_MODULE_1__["ProfileGuard"]],
        canLoad: [_guards_profile_guard__WEBPACK_IMPORTED_MODULE_1__["ProfileGuard"]],
        loadChildren: () => Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./user-profile/user-profile.module */ "0st6")).then((m) => m.UserProfileModule),
    },
    {
        path: 'recuperar-contrasenia',
        loadChildren: () => __webpack_require__.e(/*! import() | recuperar-contrasenia-recuperar-contrasenia-module */ "recuperar-contrasenia-recuperar-contrasenia-module").then(__webpack_require__.bind(null, /*! ./recuperar-contrasenia/recuperar-contrasenia.module */ "aBP5")).then((m) => m.RecuperarContraseniaModule),
    },
    {
        path: 'recuperar-contrasenia-step2',
        loadChildren: () => __webpack_require__.e(/*! import() | recuperar-contrasenia-paso-dos-recuperar-contrasenia-paso-dos-module */ "recuperar-contrasenia-paso-dos-recuperar-contrasenia-paso-dos-module").then(__webpack_require__.bind(null, /*! ./recuperar-contrasenia-paso-dos/recuperar-contrasenia-paso-dos.module */ "Svib")).then((m) => m.RecuperarContraseniaPasoDosModule),
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Fu3E":
/*!******************************************************!*\
  !*** ./src/app/modules/main/guards/profile.guard.ts ***!
  \******************************************************/
/*! exports provided: ProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuard", function() { return ProfileGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-store.service */ "R3Qk");



class ProfileGuard {
    constructor(router, userStore) {
        this.router = router;
        this.userStore = userStore;
        this.userStore.loggedUser$.subscribe((res) => res.id ? (this.user = res) : (this.user = undefined));
    }
    canActivate(route, state) {
        if (localStorage.getItem('access-token') && this.user) {
            return true;
        }
        this.router.navigate(['main', 'home']);
        return false;
    }
    canLoad(route, segments) {
        if (localStorage.getItem('access-token') && this.user) {
            return true;
        }
        this.router.navigate(['main', 'home']);
        return false;
    }
}
ProfileGuard.ɵfac = function ProfileGuard_Factory(t) { return new (t || ProfileGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"])); };
ProfileGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileGuard, factory: ProfileGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pbx/":
/*!********************************************************!*\
  !*** ./src/app/modules/main/pages/auth/auth.module.ts ***!
  \********************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ "CPbr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__["AuthRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__["AuthRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map