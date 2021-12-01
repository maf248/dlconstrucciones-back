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
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal.component */ "giAW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "N+K7");
/* harmony import */ var _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngbmodule/material-carousel */ "fIx/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");












function HomeComponent_mat_card_92_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_mat_card_92_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const index_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.openDialog(index_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 30);
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
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.http.getInterests()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(interestsFull => {
            var _a;
            this.interestsComplete = interestsFull;
            this.interestsData = interestsFull.data;
            (_a = this.interestsData) === null || _a === void 0 ? void 0 : _a.forEach(interest => interest.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_IMAGE_URL}/${interest.image}`);
        });
    }
    openDialog(index) {
        this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"], {
            data: this.interestsData[index]
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 93, vars: 15, consts: [[1, "home-main"], [1, "banner-img"], ["src", "../../../assets/quienes-somos-2.jpg", "alt", ""], [1, "title-container"], [1, "primary-light"], [1, "first-section"], [1, "carousel"], [3, "timings", "autoplay", "interval", "loop", "hideArrows", "hideIndicators", "color", "maxWidth", "maintainAspectRatio", "proportion", "slides", "useKeyboard", "useMouseWheel", "orientation"], ["src", "../../../assets/slider1.jpg", "alt", ""], [1, "info-container"], ["src", "../../../assets/slider2.jpg", "alt", ""], [1, "masterplan-container"], [1, "primary-dark"], ["mat-raised-button", "", "routerLink", "/auth", 1, "bgc-primary-dark"], ["mat-raised-button", "", "href", "../../../assets/masterplan.pdf", "download", "", 1, "bgc-primary-dark"], [1, "second-section"], [1, "sociedad"], ["src", "../../../assets/socio.jpeg", "alt", "logo"], [1, "call-to-action"], ["src", "../../../assets/lote.jpg", "alt", ""], ["mat-raised-button", "", "routerLink", "/lotes", 1, "bgc-primary-dark"], [1, "third-section", "bgc-primary-light"], [1, "box1"], [1, "primary-dark", "text-justify"], [1, "box2"], ["src", "../../../assets/quienes-somos-home.jpg", "alt", ""], [1, "section-four"], [1, "cards"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["alt", "", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-carousel-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "M\u00E1s de 15 a\u00F1os construyendo confianza");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Nuestro \u00E9xito se basa en los exigentes controles de calidad a los que sometemos todos los proyectos que realizamos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-carousel-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Antenas de Telecomunicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Servicio de ejecuci\u00F3n de obras a empresas de telecomunicaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " \u00BFYa ten\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "tu lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " en Costa Esmeralda? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Ingres\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "MASTERPLAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Con m\u00E1s de 40 a\u00F1os en el mercado, podemos asesorarte en construcciones de casas de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "alta gama.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " En alianza con ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "DUBOURG aruitectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, ", tenemos la capacidad y la experiencia para asesorarte en todo tipo de construcciones pero especialmente en aquellas que superan los ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "400m2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " Todo para que ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "vos,");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " puedas tener la casa de tus sue\u00F1os. Sin ocuparte de nada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Proyecto, ejecuci\u00F3n y direcci\u00F3n de obra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Llave en mano.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Consultanos, podemos ayudarte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Lotes en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Ver m\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, " DLN Construcciones es una joven empresa dedicada a la construccion de hogares modernos, confortables, seguros y respetuosos del medio ambiente, donde vos y tu familia puedan tener la descanso y la recreaci\u00F3n que merecen. Cubrimos toda la regi\u00F3n de la Costa Atl\u00E1ntica, pero la mayor parte de nuestros trabajos se han realizado en el barrio Costa Esmeralda. Nos ocupamos de todos los aspectos: desde el anteproyecto, estudio de suelo, la realizaci\u00F3n de planos, im\u00E1genes digitales, los tr\u00E1mites municipales, compra de materiales, la direcci\u00F3n de obra y la ejecuci\u00F3n, hasta el posterior mantenimiento y la compra de mobiliario, si as\u00ED lo deseas. Ponemos a tu disposici\u00F3n toda nuestra experiencia, asesor\u00E1ndote desde la idea inicial y la adquisici\u00F3n del terreno, pasando por el dise\u00F1o y desarrollo hasta la ejecuci\u00F3n y posterior mantenimiento de tu nuevo hogar, de la mano de nuestro equipo de profesionales, t\u00E9cnicos y operarios de primera l\u00EDnea. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Decenas de clientes satisfechos nos avalan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Contactanos, podemos asesorarte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Te puede ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "interesar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, HomeComponent_mat_card_92_Template, 5, 2, "mat-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("timings", "350ms ease-in")("autoplay", true)("interval", 5000)("loop", true)("hideArrows", false)("hideIndicators", true)("color", "accent")("maxWidth", "auto")("maintainAspectRatio", true)("proportion", 50)("slides", 2)("useKeyboard", true)("useMouseWheel", false)("orientation", "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.interestsData);
    } }, directives: [_ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__["MatCarouselComponent"], _ngbmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__["MatCarouselSlideComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: [".home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n}\n.home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 65vh;\n}\n.home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3rem;\n  text-align: center;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%] {\n  margin: 10pt auto;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  width: 65%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 10pt;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n  background-color: black;\n  opacity: 0.7;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  text-align: center;\n  max-height: 40%;\n  padding: 10pt;\n}\n@media (max-width: 425pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2rem;\n  display: inline;\n}\n@media (max-width: 768pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 425pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin: auto;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10pt auto;\n}\n@media (max-width: 425pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 1pt auto;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin: auto;\n  display: inline;\n}\n@media (max-width: 425pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url('ejecutivos.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  width: 32%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%] {\n    margin-bottom: 10pt;\n    width: 100%;\n    max-width: 100%;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n@media (max-width: 872pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 611pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 5pt;\n  color: white;\n}\n@media (max-width: 679pt) {\n  .home-main[_ngcontent-%COMP%]   .first-section[_ngcontent-%COMP%]   .masterplan-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 10pt 0pt;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%] {\n  width: 48.5%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 5pt;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .sociedad[_ngcontent-%COMP%] {\n    margin: 10pt auto !important;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%] {\n  width: 48.5%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 5pt;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.home-main[_ngcontent-%COMP%]   .second-section[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-content: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 16px;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box2[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 16px;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .third-section[_ngcontent-%COMP%]   .box2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10pt;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30%;\n}\n@media (max-width: 575px) {\n  .home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 5pt;\n  }\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main[_ngcontent-%COMP%]   .section-four[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ047QUFBTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBSkY7SUFLSSxpQkFBQTtFQUlSO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBRUo7QUFESTtFQU5GO0lBT0ksc0JBQUE7SUFDQSxtQkFBQTtFQUlKO0FBQ0Y7QUFISTtFQUNFLFVBQUE7QUFLTjtBQUpNO0VBRkY7SUFHSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBT047QUFDRjtBQU5NO0VBQ0UsV0FBQTtBQVFSO0FBTk07RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFRUjtBQVBRO0VBVkY7SUFXSSxpQkFBQTtFQVVSO0FBQ0Y7QUFUUTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBV1Y7QUFWVTtFQUpGO0lBS0ksZUFBQTtFQWFWO0FBQ0Y7QUFaVTtFQVBGO0lBUUksaUJBQUE7SUFDQSxZQUFBO0VBZVY7QUFDRjtBQWJRO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBZVY7QUFkVTtFQUhGO0lBSUksZ0JBQUE7RUFpQlY7QUFDRjtBQWZRO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWlCVjtBQWhCVTtFQUpGO0lBS0ksaUJBQUE7RUFtQlY7QUFDRjtBQWZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFpQk47QUFoQk07RUFURjtJQVVJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUFtQk47QUFDRjtBQWxCTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFvQlI7QUFuQlE7RUFIRjtJQUlJLGVBQUE7RUFzQlI7QUFDRjtBQXJCUTtFQU5GO0lBT0ksaUJBQUE7RUF3QlI7QUFDRjtBQXRCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBd0JSO0FBdkJRO0VBSEY7SUFJSSxrQkFBQTtFQTBCUjtBQUNGO0FBckJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBdUJKO0FBdEJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBd0JOO0FBdEJJO0VBUEY7SUFRSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7RUF5Qko7QUFDRjtBQXhCSTtFQUNFLFlBQUE7QUEwQk47QUF6Qk07RUFGRjtJQUdJLFdBQUE7SUFDQSxrQkFBQTtFQTRCTjtBQUNGO0FBM0JNO0VBQ0UseUJBQUE7QUE2QlI7QUE1QlE7RUFDRSxXQUFBO0FBOEJWO0FBMUJRO0VBQ0Usa0JBQUE7QUE0QlY7QUF6Qk07RUFqQkY7SUFrQkksNEJBQUE7RUE0Qk47QUFDRjtBQTFCSTtFQUNFLFlBQUE7QUE0Qk47QUEzQk07RUFGRjtJQUdJLFdBQUE7SUFDQSxrQkFBQTtFQThCTjtBQUNGO0FBN0JNO0VBQ0UseUJBQUE7QUErQlI7QUE5QlE7RUFDRSxXQUFBO0FBZ0NWO0FBN0JNO0VBQ0Usa0JBQUE7QUErQlI7QUE3Qk07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUErQlI7QUE5QlE7RUFDRSxZQUFBO0FBZ0NWO0FBMUJFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUE0Qko7QUEzQkk7RUFORjtJQU9JLHNCQUFBO0lBQ0EscUJBQUE7RUE4Qko7QUFDRjtBQTdCSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBK0JOO0FBOUJNO0VBSEY7SUFJSSxXQUFBO0VBaUNOO0FBQ0Y7QUFoQ007RUFDRSxrQkFBQTtBQWtDUjtBQWhDTTtFQUNFLGtCQUFBO0FBa0NSO0FBL0JJO0VBQ0UsVUFBQTtBQWlDTjtBQWhDTTtFQUZGO0lBR0ksV0FBQTtJQUNBLGFBQUE7RUFtQ047QUFDRjtBQWxDTTtFQUNFLFdBQUE7QUFvQ1I7QUE3Qkk7RUFDRSxrQkFBQTtBQStCTjtBQTdCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBK0JOO0FBOUJNO0VBSkY7SUFLSSxzQkFBQTtJQUNBLG1CQUFBO0VBaUNOO0FBQ0Y7QUFoQ007RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQWtDUjtBQWpDUTtFQUhGO0lBSUksV0FBQTtJQUNBLGtCQUFBO0VBb0NSO0FBQ0Y7QUFuQ1E7RUFDRSxXQUFBO0FBcUNWO0FBbkNRO0VBQ0Usa0JBQUE7QUFxQ1YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLW1haW4ge1xyXG4gIC5iYW5uZXItaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA0MCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmZpcnN0LXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAxMHB0IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsIHtcclxuICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHQ7XHJcbiAgICAgIH1cclxuICAgICAgJiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgICYgLmluZm8tY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB0O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVwdCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgaDMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhwdCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHQpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiBociB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB0IGF1dG87XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHQpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHQgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB0KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiAubWFzdGVycGxhbi1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZWplY3V0aXZvcy5qcGcnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgICYgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODcycHQpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYxMXB0KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NzlwdCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY29uZC1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXQtY2FyZCB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAxMHB0IDBwdDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNvY2llZGFkIHtcclxuICAgICAgd2lkdGg6IDQ4LjUlO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHQ7XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIG1hcmdpbjogMTBwdCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYWxsLXRvLWFjdGlvbiB7XHJcbiAgICAgIHdpZHRoOiA0OC41JTtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB0O1xyXG4gICAgICB9XHJcbiAgICAgIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgbWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRoaXJkLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYm94MSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94MiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgLnNlY3Rpb24tZm91ciB7XHJcbiAgICBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jYXJkcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBwdDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIG1hdC1jYXJkIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiBoNCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "giAW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]] }); })();


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

/***/ "giAW":
/*!*****************************************************!*\
  !*** ./src/app/pages/home/modal/modal.component.ts ***!
  \*****************************************************/
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
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 11, vars: 3, consts: [[1, "modal-container"], ["mat-dialog-title", "", 1, "primary-dark"], ["alt", "", 3, "src"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "bgc-primary-dark"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.description);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".modal-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBRUU7RUFLRSxtQkFBQTtBQUpKO0FBQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVOO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUVJO0VBQ0UsWUFBQTtBQUFOIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map