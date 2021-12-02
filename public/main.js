(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Ory":
/*!*****************************************************************!*\
  !*** ./src/app/shared/splash-screen/splash-screen.component.ts ***!
  \*****************************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class SplashScreenComponent {
    constructor(router) {
        this.router = router;
        this.animationEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.animateSplashScreen();
    }
    animateSplashScreen() {
        const tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        tl.from('img', {
            opacity: 0,
            duration: 2,
        }).from('mat-icon', {
            duration: 0.1,
            opacity: 0,
            y: -20,
            stagger: 0.2,
        }).to('section', {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                this.animationEnded.emit('animación terminada');
            }
        });
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], outputs: { animationEnded: "animationEnded" }, decls: 9, vars: 0, consts: [["id", "splashScreen"], ["src", "../../../assets/logo.png", "alt", ""]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["#splashScreen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5%;\n}\n#splashScreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70%;\n}\n#splashScreen[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n}\n#splashScreen[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  color: #11539e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0UsVUFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0FBRUo7QUFESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBR04iLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGxhc2hTY3JlZW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gICYgaW1nIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG4gICYgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAmIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTcsIDgzLCAxNTgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Public\____Repos\DLNConstrucciones\dlnconstrucciones-front\src\main.ts */"zUnb");


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







const _c0 = ["desktopNavbar"];
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/trabajos-realizados"]; };
const _c3 = function () { return ["/lotes"]; };
const _c4 = function () { return ["/auth/login"]; };
const _c5 = function () { return ["/auth/register"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
        this.animations();
    }
    animations() {
        const toAnimate = document.getElementsByClassName('animated-list');
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].from(toAnimate, {
            duration: 0.5,
            opacity: 0,
            stagger: 0.2,
            delay: 0.5,
            ease: 'fadeIn'
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.desktopNavbar = _t.first);
    } }, decls: 46, vars: 24, consts: [[1, "logo"], ["src", "../assets/logo.png", "alt", "logo", 3, "routerLink"], [1, "navbar", "bgc-primary"], [1, "desktop-menu"], [1, "animated-list", 3, "routerLink"], ["mat-button", "", 1, "bgc-primary"], [1, "animated-list"], ["mat-button", "", "routerLink", "/servicios", 1, "bgc-primary"], [1, "animated-list", 3, "matMenuTriggerFor"], ["yPosition", "below"], ["profileMenu", "matMenu"], ["mat-menu-item", "", 1, "bgc-primary", 3, "routerLink"], [1, "mobile-menu", "bgc-primary", 3, "matMenuTriggerFor"], ["yPosition", "below", 1, "mobile-menu-container"], ["mobileMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/servicios", 1, "bgc-primary"], ["mat-menu-item", "", 1, "bgc-primary", 3, "matMenuTriggerFor"], ["profileMenuMobile", "matMenu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "INICIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " SERVICIOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "TRABAJOS REALIZADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "LOTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MI CUENTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " INICIAR SESI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " REGISTRARSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-menu", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " INICIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " SERVICIOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " TRABAJOS REALIZADOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " LOTES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " MI CUENTA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-menu", 9, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " INICIAR SESI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " REGISTRARSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c5));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  color: white !important;\n}\nmat-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 10pt;\n  height: max-content;\n  cursor: pointer;\n}\nmat-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: auto;\n}\n@media (max-width: 768pt) {\n  mat-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media (max-width: 575pt) {\n  mat-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\nmat-toolbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .desktop-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\nmat-toolbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .desktop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmat-toolbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .desktop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #006ba6 !important;\n}\nmat-toolbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  margin: auto;\n}\n@media (max-width: 575px) {\n  mat-toolbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .desktop-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  mat-toolbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFESTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBR047QUFGTTtFQUhGO0lBSUksVUFBQTtFQUtOO0FBQ0Y7QUFKTTtFQU5GO0lBT0ksVUFBQTtFQU9OO0FBQ0Y7QUFISTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUtOO0FBSFE7RUFDRSxZQUFBO0FBS1Y7QUFIUTtFQUNFLG9DQUFBO0FBS1Y7QUFESTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBR047QUFBSTtFQUNFO0lBQ0UsYUFBQTtFQUVOO0VBQUk7SUFDRSxjQUFBO0VBRU47QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgLmxvZ28ge1xyXG4gICAgcGFkZGluZzogMTBwdDtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB0KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDo1NzVwdCkge1xyXG4gICAgICAgIHdpZHRoOiA0MCVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyIHtcclxuICAgIC5kZXNrdG9wLW1lbnUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZiYTYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5tb2JpbGUtbWVudSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgLmRlc2t0b3AtbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubW9iaWxlLW1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_BASE_URL: 'http://localhost:3000/api',
    API_IMAGE_URL: 'http://localhost:3000/images'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Iye4":
/*!************************************************************************!*\
  !*** ./src/app/components/angular-material/angular-material.module.ts ***!
  \************************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngbmodule/material-carousel */ "fIx/");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"]] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ "/Ory");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");




class AppComponent {
    constructor() { }
    closeSidenav() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();


/***/ }),

/***/ "hHxT":
/*!*****************************************************************************!*\
  !*** ./src/app/components/presentation-card/presentation-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PresentationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationCardComponent", function() { return PresentationCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = ["image"];
class PresentationCardComponent {
    constructor(router) {
        this.router = router;
        this.ruta = '';
        this.urlFoto = '';
        this.titulo = '';
        this.sendDataByRoute = false;
    }
    navigate(ruta) {
        if (!this.sendDataByRoute) {
            this.router.navigateByUrl(ruta);
        }
        else {
            this.router.navigateByUrl(ruta, { state: this.urlData });
        }
    }
}
PresentationCardComponent.ɵfac = function PresentationCardComponent_Factory(t) { return new (t || PresentationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PresentationCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresentationCardComponent, selectors: [["app-presentation-card"]], viewQuery: function PresentationCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
    } }, inputs: { ruta: "ruta", urlFoto: "urlFoto", titulo: "titulo", sendDataByRoute: "sendDataByRoute", urlData: "urlData" }, decls: 6, vars: 2, consts: [[1, "tile-content", 3, "click"], [3, "src"], ["image", ""], [1, "title-container", "bgc-primary-dark"], [1, "primary-light"]], template: function PresentationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresentationCardComponent_Template_div_click_0_listener() { return ctx.ruta ? ctx.navigate(ctx.ruta) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.urlFoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
    } }, styles: [".tile-content[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-content: center;\n  padding: 10pt;\n  transition: transform 0.2s;\n  \n  position: relative;\n}\n.tile-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 80vh;\n  z-index: 0;\n}\n@media (max-width: 575px) {\n  .tile-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n.tile-content[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 10vh;\n  z-index: 999;\n}\n@media (max-width: 575px) {\n  .tile-content[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n    position: static;\n    bottom: unset;\n  }\n}\n.tile-content[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tile-content[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmVzZW50YXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUEyQixjQUFBO0VBQzNCLGtCQUFBO0FBRUY7QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUdKO0FBRkk7RUFKRjtJQUtJLFdBQUE7SUFDQSxZQUFBO0VBS0o7QUFDRjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBS0o7QUFKSTtFQU5GO0lBT0ksZ0JBQUE7SUFDQSxhQUFBO0VBT0o7QUFDRjtBQU5JO0VBQ0Usa0JBQUE7QUFRTjtBQUpBO0VBQ0Usc0JBQUE7RUFBd0IscUZBQUE7QUFRMUIiLCJmaWxlIjoicHJlc2VudGF0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZS1jb250ZW50IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgYm90dG9tOiB1bnNldDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udGlsZS1jb250ZW50OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "Iye4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentation-card/presentation-card.component */ "hHxT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_3__["PresentationCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
        _presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_3__["PresentationCardComponent"]] }); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function FooterComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FooterComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Asegurate de que el formato sea v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FooterComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(fb) {
        this.fb = fb;
        this.formularioContacto = this.fb.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                ]],
            comentario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    send(e) {
        console.log('me enveeeeeeeeeeeeeee', e);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 49, vars: 5, consts: [[1, "bgc-primary"], [1, "contact-info"], [1, "primary-dark"], [1, "spinIcon"], [3, "formGroup", "submit"], ["appearance", "fill"], ["matInput", "", "formControlName", "email", "placeholder", "email@dominio.com"], [4, "ngIf"], ["formControlName", "comentario", "matInput", ""], ["mat-raised-button", "", "type", "submit", 1, "bgc-primary-dark", 3, "disabled"], [1, "logo"], ["src", "assets/logo.png", "alt", "", "routerLink", "/"], [1, "social-icons-container"], ["href", "https://www.facebook.com/dlnconstrucciones/"], ["src", "assets/icon-facebook.png", "alt", "Facebook logo"], ["href", "https://www.instagram.com/dln_construcciones/"], ["src", "assets/icon-instagram.png", "alt", "Instagram logo"], [1, "copyright", "m-2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00BFTen\u00E9s alguna consulta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Estamos para asesorarte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "+54 9 2267 531541");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "info@dlnconstrucciones.com.ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Pinamar, Buenos Aires");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function FooterComponent_Template_form_submit_21_listener($event) { return ctx.send($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FooterComponent_mat_error_26_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, FooterComponent_mat_error_27_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Dejanos tu comentario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, FooterComponent_mat_error_32_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Enviar consulta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "@2021 DLN Construcciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " todos los derechos reservados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Pinamar, provincia de Buenos Aires");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formularioContacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formularioContacto.controls.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formularioContacto.controls.email.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formularioContacto.controls.comentario.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formularioContacto.invalid);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["footer[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-around;\n  color: white !important;\n}\n@media (max-width: 575px) {\n  footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 48%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n@media (max-width: 575px) {\n  footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  cursor: pointer;\n}\n@media (max-width: 450px) {\n  footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .social-icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .social-icons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 10pt;\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .social-icons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  width: 48%;\n}\n@media (max-width: 575px) {\n  footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: end;\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2396bd;\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  animation: spin 1s linear both;\n}\n@keyframes spin {\n  100% {\n    transform: rotate(90deg);\n  }\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFORjtJQU9JLHNCQUFBO0lBQ0EsbUJBQUE7RUFHRjtBQUNGO0FBRkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUlKO0FBSEk7RUFORjtJQU9JLFdBQUE7RUFNSjtBQUNGO0FBTEk7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQU9OO0FBTk07RUFIRjtJQUlJLFdBQUE7RUFTTjtBQUNGO0FBUEk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFTTjtBQVJNO0VBQ0UsWUFBQTtBQVVSO0FBVFE7RUFDRSxXQUFBO0FBV1Y7QUFQSTtFQUNFLGtCQUFBO0FBU047QUFORTtFQUNFLFVBQUE7QUFRSjtBQVBJO0VBRkY7SUFHSSxXQUFBO0VBVUo7QUFDRjtBQVRJO0VBQ0UsZUFBQTtBQVdOO0FBVk07RUFDRSxjQUFBO0FBWVI7QUFUSTtFQUdFLDhCQUFBO0FBV047QUFISTtFQUNJO0lBRUksd0JBQUE7RUFlVjtBQUNGO0FBYkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBZU47QUFiSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBZU47QUFkTTtFQUNFLFdBQUE7QUFnQlI7QUFkTTtFQUNFLFlBQUE7QUFnQlIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAmIC5sb2dvIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgICYgaW1nIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiAuc29jaWFsLWljb25zLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAmIGEge1xyXG4gICAgICAgIG1hcmdpbjogMTBwdDtcclxuICAgICAgICAmIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgLmNvcHlyaWdodCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgJiAuY29udGFjdC1pbmZvIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICYgc3Ryb25nIHtcclxuICAgICAgICBjb2xvcjogcmdiKDM1LCAxNTAsIDE4OSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgbWF0LWljb246aG92ZXIge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjpzcGluIDFzIGxpbmVhciBib3RoO1xyXG4gICAgICAtbW96LWFuaW1hdGlvbjpzcGluIDFzIGxpbmVhciBib3RoO1xyXG4gICAgICBhbmltYXRpb246c3BpbiAxcyBsaW5lYXIgYm90aDtcclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyBzcGluIHtcclxuICAgICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-auth-module */ "pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ./pages/auth/auth.module */ "lBUW")).then(m => m.AuthModule)
    },
    {
        path: 'servicios',
        loadChildren: () => Promise.all(/*! import() | pages-servicios-servicios-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-servicios-servicios-module")]).then(__webpack_require__.bind(null, /*! ./pages/servicios/servicios.module */ "ys2q")).then(m => m.ServiciosModule)
    },
    {
        path: 'lotes',
        loadChildren: () => Promise.all(/*! import() | pages-lotes-lotes-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-lotes-lotes-module")]).then(__webpack_require__.bind(null, /*! ./pages/lotes/lotes.module */ "foLS")).then(m => m.LotesModule)
    },
    {
        path: 'trabajos-realizados',
        loadChildren: () => Promise.all(/*! import() | pages-trabajos-realizados-trabajos-realizados-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-trabajos-realizados-trabajos-realizados-module")]).then(__webpack_require__.bind(null, /*! ./pages/trabajos-realizados/trabajos-realizados.module */ "uuyT"))
            .then(m => m.TrabajosRealizadosModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map