(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal/modal.component */ "ZTOT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "N+K7");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "9O7m");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");












function HomeComponent_mat_card_76_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_mat_card_76_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const index_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.openDialog(index_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const interest_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", interest_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](interest_r1.title);
} }
class HomeComponent {
    constructor(dialog, http) {
        this.dialog = dialog;
        this.http = http;
        this.interestsData = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.http.getInterests()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe(interestsFull => {
            var _a;
            this.interestsComplete = interestsFull;
            this.interestsData = interestsFull.data;
            (_a = this.interestsData) === null || _a === void 0 ? void 0 : _a.forEach(interest => interest.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${interest.image}`);
        }, err => console.log(err));
    }
    openDialog(index) {
        this.dialog.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            data: this.interestsData[index]
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 77, vars: 1, consts: [[1, "home-main"], [1, "banner-img"], ["src", "../../../assets/quienes-somos-2.jpg", "alt", ""], [1, "title-container"], [1, "primary-light"], [1, "first-section"], [1, "carousel-component"], [1, "masterplan-container"], [1, "primary-dark"], ["mat-raised-button", "", "routerLink", "/auth", 1, "bgc-primary-dark"], ["mat-raised-button", "", "href", "../../../assets/masterplan.pdf", "download", "", 1, "bgc-primary-dark"], [1, "second-section"], [1, "sociedad"], ["src", "../../../assets/socio.jpeg", "alt", "logo"], [1, "call-to-action"], ["src", "../../../assets/lote.jpg", "alt", ""], ["mat-raised-button", "", "routerLink", "/lotes", 1, "bgc-primary-dark"], [1, "third-section", "bgc-primary-light"], [1, "box1"], [1, "primary-dark", "text-justify"], [1, "box2"], ["src", "../../../assets/quienes-somos-home.jpg", "alt", ""], [1, "section-four"], [1, "cards"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["alt", "", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Tu casa en costa esmeralda, m\u00E1s cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " \u00BFYa ten\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "tu lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " en Costa Esmeralda? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Ingres\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "MASTERPLAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Con m\u00E1s de 40 a\u00F1os en el mercado, podemos asesorarte en construcciones de casas de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "alta gama.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " En alianza con ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "DUBOURG aruitectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, ", tenemos la capacidad y la experiencia para asesorarte en todo tipo de construcciones pero especialmente en aquellas que superan los ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "400m2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Todo para que ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "vos,");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " puedas tener la casa de tus sue\u00F1os. Sin ocuparte de nada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Proyecto, ejecuci\u00F3n y direcci\u00F3n de obra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Llave en mano.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Consultanos, podemos ayudarte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Lotes en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Ver m\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " DLN Construcciones es una joven empresa dedicada a la construccion de hogares modernos, confortables, seguros y respetuosos del medio ambiente, donde vos y tu familia puedan tener la descanso y la recreaci\u00F3n que merecen. Cubrimos toda la regi\u00F3n de la Costa Atl\u00E1ntica, pero la mayor parte de nuestros trabajos se han realizado en el barrio Costa Esmeralda. Nos ocupamos de todos los aspectos: desde el anteproyecto, estudio de suelo, la realizaci\u00F3n de planos, im\u00E1genes digitales, los tr\u00E1mites municipales, compra de materiales, la direcci\u00F3n de obra y la ejecuci\u00F3n, hasta el posterior mantenimiento y la compra de mobiliario, si as\u00ED lo deseas. Ponemos a tu disposici\u00F3n toda nuestra experiencia, asesor\u00E1ndote desde la idea inicial y la adquisici\u00F3n del terreno, pasando por el dise\u00F1o y desarrollo hasta la ejecuci\u00F3n y posterior mantenimiento de tu nuevo hogar, de la mano de nuestro equipo de profesionales, t\u00E9cnicos y operarios de primera l\u00EDnea. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Decenas de clientes satisfechos nos avalan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Contactanos, podemos asesorarte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Te puede ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "interesar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, HomeComponent_mat_card_76_Template, 5, 2, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.interestsData);
    } }, directives: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: [".home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n}\n.home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 65vh;\n}\n.home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3rem;\n  text-align: center;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel-component[_ngcontent-%COMP%] {\n  width: 65%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel-component[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url('ejecutivos.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  width: 32%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    width: 100%;\n    max-width: 100%;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n@media (max-width: 872px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 611px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 5px;\n  color: white;\n}\n@media (max-width: 679px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 10px 0px;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%] {\n  width: 48.5%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 5px;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%] {\n    margin: 10px auto !important;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%] {\n  width: 48.5%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 5px;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-content: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 16px;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box2[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 16px;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 5px;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ047QUFBTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBSkY7SUFLSSxpQkFBQTtFQUlSO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBRUo7QUFESTtFQU5GO0lBT0ksc0JBQUE7SUFDQSxtQkFBQTtFQUlKO0FBQ0Y7QUFISTtFQUNFLFVBQUE7QUFLTjtBQUpNO0VBRkY7SUFHSSxXQUFBO0VBT047QUFDRjtBQUxJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFPTjtBQU5NO0VBVEY7SUFVSSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VBU047QUFDRjtBQVJNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVVSO0FBVFE7RUFIRjtJQUlJLGVBQUE7RUFZUjtBQUNGO0FBWFE7RUFORjtJQU9JLGlCQUFBO0VBY1I7QUFDRjtBQVpNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFjUjtBQWJRO0VBSEY7SUFJSSxrQkFBQTtFQWdCUjtBQUNGO0FBWEU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFhSjtBQVpJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBY047QUFaSTtFQVBGO0lBUUksc0JBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0VBZUo7QUFDRjtBQWRJO0VBQ0UsWUFBQTtBQWdCTjtBQWZNO0VBRkY7SUFHSSxXQUFBO0lBQ0Esa0JBQUE7RUFrQk47QUFDRjtBQWpCTTtFQUNFLHlCQUFBO0FBbUJSO0FBbEJRO0VBQ0UsV0FBQTtBQW9CVjtBQWhCUTtFQUNFLGtCQUFBO0FBa0JWO0FBZk07RUFqQkY7SUFrQkksNEJBQUE7RUFrQk47QUFDRjtBQWhCSTtFQUNFLFlBQUE7QUFrQk47QUFqQk07RUFGRjtJQUdJLFdBQUE7SUFDQSxrQkFBQTtFQW9CTjtBQUNGO0FBbkJNO0VBQ0UseUJBQUE7QUFxQlI7QUFwQlE7RUFDRSxXQUFBO0FBc0JWO0FBbkJNO0VBQ0Usa0JBQUE7QUFxQlI7QUFuQk07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFxQlI7QUFwQlE7RUFDRSxZQUFBO0FBc0JWO0FBaEJFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFrQko7QUFqQkk7RUFORjtJQU9JLHNCQUFBO0lBQ0EscUJBQUE7RUFvQko7QUFDRjtBQW5CSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBcUJOO0FBcEJNO0VBSEY7SUFJSSxXQUFBO0VBdUJOO0FBQ0Y7QUF0Qk07RUFDRSxrQkFBQTtBQXdCUjtBQXRCTTtFQUNFLGtCQUFBO0FBd0JSO0FBckJJO0VBQ0UsVUFBQTtBQXVCTjtBQXRCTTtFQUZGO0lBR0ksV0FBQTtJQUNBLGFBQUE7RUF5Qk47QUFDRjtBQXhCTTtFQUNFLFdBQUE7QUEwQlI7QUFuQkk7RUFDRSxrQkFBQTtBQXFCTjtBQW5CSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBcUJOO0FBcEJNO0VBSkY7SUFLSSxzQkFBQTtJQUNBLG1CQUFBO0VBdUJOO0FBQ0Y7QUF0Qk07RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQXdCUjtBQXZCUTtFQUhGO0lBSUksV0FBQTtJQUNBLGtCQUFBO0VBMEJSO0FBQ0Y7QUF6QlE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQTJCVjtBQXpCUTtFQUNFLGtCQUFBO0FBMkJWIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1tYWluIHtcclxuICAuYmFubmVyLWltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogNjV2aDtcclxuICAgIH1cclxuICAgIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maXJzdC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYgLmNhcm91c2VsLWNvbXBvbmVudCB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmIC5tYXN0ZXJwbGFuLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9lamVjdXRpdm9zLmpwZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgd2lkdGg6IDMyJTtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgJiBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NzJweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjExcHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY3OXB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc29jaWVkYWQge1xyXG4gICAgICB3aWR0aDogNDguNSU7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhbGwtdG8tYWN0aW9uIHtcclxuICAgICAgd2lkdGg6IDQ4LjUlO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGhpcmQtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ib3gxIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3gyIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAuc2VjdGlvbi1mb3VyIHtcclxuICAgIGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhcmRzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWNhcmQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiBoNCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.component */ "ZTOT");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "9O7m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]], exports: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]] }); })();


/***/ }),

/***/ "9O7m":
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/components/carousel/carousel.component.ts ***!
  \**********************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngbmodule/material-carousel */ "fIx/");


class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 18, vars: 14, consts: [[1, "carousel"], [3, "timings", "autoplay", "interval", "loop", "hideArrows", "hideIndicators", "color", "maxWidth", "maintainAspectRatio", "proportion", "slides", "useKeyboard", "useMouseWheel", "orientation"], ["src", "../../../../../assets/slider1.jpg", "alt", ""], [1, "info-container"], ["src", "../../../../../assets/slider2.jpg", "alt", ""]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-carousel-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "M\u00E1s de 15 a\u00F1os construyendo confianza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Nuestro \u00E9xito se basa en los exigentes controles de calidad a los que sometemos todos los proyectos que realizamos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-carousel-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Antenas de Telecomunicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Servicio de ejecuci\u00F3n de obras a empresas de telecomunicaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timings", "350ms ease-in")("autoplay", true)("interval", 5000)("loop", true)("hideArrows", false)("hideIndicators", true)("color", "accent")("maxWidth", "auto")("maintainAspectRatio", true)("proportion", 50)("slides", 2)("useKeyboard", true)("useMouseWheel", false)("orientation", "ltr");
    } }, directives: [_ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_1__["MatCarouselComponent"], _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_1__["MatCarouselSlideComponent"]], styles: [".carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 575px) {\n  .carousel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 10px;\n  }\n}\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n  background-color: black;\n  opacity: 0.7;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  text-align: center;\n  max-height: 40%;\n  padding: 10px;\n}\n@media (max-width: 425px) {\n  .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n}\n.carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2rem;\n  display: inline;\n}\n@media (max-width: 768px) {\n  .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 425px) {\n  .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin: auto;\n  }\n}\n.carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10px auto;\n}\n@media (max-width: 425px) {\n  .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 1px auto;\n  }\n}\n.carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin: auto;\n  display: inline;\n}\n@media (max-width: 425px) {\n  .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFGRjtJQUdJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFHRjtBQUNGO0FBRkU7RUFDRSxXQUFBO0FBSUo7QUFGRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUlKO0FBSEk7RUFWRjtJQVdJLGlCQUFBO0VBTUo7QUFDRjtBQUxJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFPTjtBQU5NO0VBSkY7SUFLSSxlQUFBO0VBU047QUFDRjtBQVJNO0VBUEY7SUFRSSxpQkFBQTtJQUNBLFlBQUE7RUFXTjtBQUNGO0FBVEk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFXTjtBQVZNO0VBSEY7SUFJSSxnQkFBQTtFQWFOO0FBQ0Y7QUFYSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFhTjtBQVpNO0VBSkY7SUFLSSxpQkFBQTtFQWVOO0FBQ0YiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAmIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgJiAuaW5mby1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICAmIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgaHIge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAxcHggYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZTOT":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/components/modal/modal.component.ts ***!
  \****************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 12, vars: 3, consts: [[1, "modal-container"], ["mat-dialog-title", "", 1, "primary-dark"], [1, "text-center"], ["alt", "", 3, "src"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "bgc-primary-dark"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.description);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".modal-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 20px;\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  margin: 10px auto;\n}\n@media (max-width: 575px) {\n  .modal-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBU0UsbUJBQUE7RUFDQSxlQUFBO0FBUko7QUFESTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQUZNO0VBSkY7SUFLSSxZQUFBO0VBS047QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFBSTtFQUNFLFlBQUE7QUFFTiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250YWluZXIge1xyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map