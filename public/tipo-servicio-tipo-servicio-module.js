(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipo-servicio-tipo-servicio-module"],{

/***/ "+G5Q":
/*!**************************************************************************!*\
  !*** ./src/app/pages/servicios/tipo-servicio/tipo-servicio.component.ts ***!
  \**************************************************************************/
/*! exports provided: TipoServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoServicioComponent", function() { return TipoServicioComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TipoServicioComponent_ng_container_4_div_1_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r5.subtitle);
} }
function TipoServicioComponent_ng_container_4_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r5.text);
} }
function TipoServicioComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TipoServicioComponent_ng_container_4_div_1_h3_1_Template, 2, 1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TipoServicioComponent_ng_container_4_div_1_p_2_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", content_r5.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", content_r5.text);
} }
function TipoServicioComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TipoServicioComponent_ng_container_4_div_1_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tipoServicioContents);
} }
function TipoServicioComponent_gallery_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "gallery", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemTemplate", _r2);
} }
function TipoServicioComponent_ng_template_6_Template(rf, ctx) { }
class TipoServicioComponent {
    constructor(httpService, activeRoute, gallery) {
        this.httpService = httpService;
        this.activeRoute = activeRoute;
        this.gallery = gallery;
        this.galleryId = 'mixedExample';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        const serviceId = this.activeRoute.snapshot.params.servicioId;
        this.httpService.getOneService(serviceId)
            .subscribe(serv => {
            var _a, _b, _c;
            this.tipoServicioComplete = serv;
            this.tipoServicio = serv === null || serv === void 0 ? void 0 : serv.data;
            this.tipoServicioContents = (_a = serv === null || serv === void 0 ? void 0 : serv.data) === null || _a === void 0 ? void 0 : _a.Contents;
            this.tipoServicioPictures = (_b = serv === null || serv === void 0 ? void 0 : serv.data) === null || _b === void 0 ? void 0 : _b.Pictures;
            (_c = this.tipoServicioPictures) === null || _c === void 0 ? void 0 : _c.forEach(picture => {
                const picturePath = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_IMAGE_URL}/${picture.picture}`;
                const galleryRef = this.gallery.ref(this.galleryId, {
                    autoPlay: true,
                    loop: true,
                    counter: true,
                    counterPosition: 'top',
                    dots: true,
                    dotsPosition: 'bottom',
                    dotsSize: 16,
                    gestures: true,
                    imageSize: 'contain',
                    loadingStrategy: 'lazy',
                    nav: true,
                    panSensitivity: 1,
                    playerInterval: 1,
                    slidingDirection: 'horizontal',
                    thumbMode: 'free',
                    thumbPosition: 'bottom',
                });
                galleryRef.addImage({
                    src: picturePath,
                    thumb: picturePath
                });
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
TipoServicioComponent.ɵfac = function TipoServicioComponent_Factory(t) { return new (t || TipoServicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_5__["Gallery"])); };
TipoServicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TipoServicioComponent, selectors: [["app-tipo-servicio"]], decls: 8, vars: 3, consts: [[1, "main-tipo-servicio"], [1, "primary-dark", "text-center"], [4, "ngIf"], ["id", "mixedExample", "class", "gallery", 3, "itemTemplate", 4, "ngIf"], ["itemTemplate", ""], ["class", "description", 4, "ngFor", "ngForOf"], [1, "description"], ["class", "primary", 4, "ngIf"], [1, "primary"], ["id", "mixedExample", 1, "gallery", 3, "itemTemplate"]], template: function TipoServicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TipoServicioComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TipoServicioComponent_gallery_5_Template, 1, 1, "gallery", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TipoServicioComponent_ng_template_6_Template, 0, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tipoServicio == null ? null : ctx.tipoServicio.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tipoServicioContents);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tipoServicioPictures == null ? null : ctx.tipoServicioPictures.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_gallery__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"]], styles: [".main-tipo-servicio[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0px auto 8px auto;\n}\n.main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n.main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.main-tipo-servicio[_ngcontent-%COMP%]   gallery[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: inherit;\n  border-radius: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGlwby1zZXJ2aWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBQ0k7RUFDRSxTQUFBO0FBQ047QUFFRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoidGlwby1zZXJ2aWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRpcG8tc2VydmljaW8ge1xyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDhweCBhdXRvO1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBoMywgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgZ2FsbGVyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "5r/R":
/*!***********************************************************************!*\
  !*** ./src/app/pages/servicios/tipo-servicio/tipo-servicio.module.ts ***!
  \***********************************************************************/
/*! exports provided: TipoServicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoServicioModule", function() { return TipoServicioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tipo_servicio_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-servicio-routing.module */ "My/u");
/* harmony import */ var _tipo_servicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipo-servicio.component */ "+G5Q");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TipoServicioModule {
}
TipoServicioModule.ɵfac = function TipoServicioModule_Factory(t) { return new (t || TipoServicioModule)(); };
TipoServicioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TipoServicioModule });
TipoServicioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tipo_servicio_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoServicioRoutingModule"],
            ng_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TipoServicioModule, { declarations: [_tipo_servicio_component__WEBPACK_IMPORTED_MODULE_2__["TipoServicioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tipo_servicio_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoServicioRoutingModule"],
        ng_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"]] }); })();


/***/ }),

/***/ "My/u":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/servicios/tipo-servicio/tipo-servicio-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TipoServicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoServicioRoutingModule", function() { return TipoServicioRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tipo_servicio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-servicio.component */ "+G5Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _tipo_servicio_component__WEBPACK_IMPORTED_MODULE_1__["TipoServicioComponent"]
    }
];
class TipoServicioRoutingModule {
}
TipoServicioRoutingModule.ɵfac = function TipoServicioRoutingModule_Factory(t) { return new (t || TipoServicioRoutingModule)(); };
TipoServicioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TipoServicioRoutingModule });
TipoServicioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TipoServicioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=tipo-servicio-tipo-servicio-module.js.map