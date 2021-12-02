(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipo-trabajo-tipo-trabajo-module"],{

/***/ "9dl/":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/trabajos-realizados/tipo-trabajo/tipo-trabajo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TipoTrabajoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTrabajoModule", function() { return TipoTrabajoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tipo_trabajo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-trabajo-routing.module */ "TsRn");
/* harmony import */ var _tipo_trabajo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipo-trabajo.component */ "qV+k");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TipoTrabajoModule {
}
TipoTrabajoModule.ɵfac = function TipoTrabajoModule_Factory(t) { return new (t || TipoTrabajoModule)(); };
TipoTrabajoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TipoTrabajoModule });
TipoTrabajoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tipo_trabajo_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoTrabajoRoutingModule"],
            ng_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TipoTrabajoModule, { declarations: [_tipo_trabajo_component__WEBPACK_IMPORTED_MODULE_2__["TipoTrabajoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tipo_trabajo_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoTrabajoRoutingModule"],
        ng_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"]] }); })();


/***/ }),

/***/ "TsRn":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/trabajos-realizados/tipo-trabajo/tipo-trabajo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TipoTrabajoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTrabajoRoutingModule", function() { return TipoTrabajoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tipo_trabajo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-trabajo.component */ "qV+k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _tipo_trabajo_component__WEBPACK_IMPORTED_MODULE_1__["TipoTrabajoComponent"]
    }
];
class TipoTrabajoRoutingModule {
}
TipoTrabajoRoutingModule.ɵfac = function TipoTrabajoRoutingModule_Factory(t) { return new (t || TipoTrabajoRoutingModule)(); };
TipoTrabajoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TipoTrabajoRoutingModule });
TipoTrabajoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TipoTrabajoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "qV+k":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/trabajos-realizados/tipo-trabajo/tipo-trabajo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TipoTrabajoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTrabajoComponent", function() { return TipoTrabajoComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http.service */ "N+K7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TipoTrabajoComponent_ng_template_7_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4 == null ? null : data_r4.title, " ");
} }
function TipoTrabajoComponent_ng_template_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4 == null ? null : data_r4.description, " ");
} }
function TipoTrabajoComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TipoTrabajoComponent_ng_template_7_span_0_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TipoTrabajoComponent_ng_template_7_span_1_Template, 2, 1, "span", 5);
} if (rf & 2) {
    const index_r2 = ctx.index;
    const type_r3 = ctx.type;
    const currIndex_r5 = ctx.currIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", type_r3 === "image" && index_r2 === currIndex_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", type_r3 === "image" && index_r2 === currIndex_r5);
} }
class TipoTrabajoComponent {
    constructor(httpService, activatedRoute, gallery) {
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
        this.gallery = gallery;
        this.galleryId = 'mixedExample';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        const idTipoTrabajo = this.activatedRoute.snapshot.params.idTipoTrabajo;
        this.httpService.getOneTypeOfJob(idTipoTrabajo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((jobFull) => {
            var _a, _b;
            this.trabajoCompleto = jobFull;
            this.trabajoBaseInfo = jobFull === null || jobFull === void 0 ? void 0 : jobFull.data;
            this.trabajoInfo = (_a = jobFull === null || jobFull === void 0 ? void 0 : jobFull.data) === null || _a === void 0 ? void 0 : _a.Jobs;
            (_b = this.trabajoInfo) === null || _b === void 0 ? void 0 : _b.forEach((trabajo) => {
                const imagePath = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${trabajo.image}`;
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
                    src: imagePath,
                    thumb: imagePath,
                });
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
TipoTrabajoComponent.ɵfac = function TipoTrabajoComponent_Factory(t) { return new (t || TipoTrabajoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_6__["Gallery"])); };
TipoTrabajoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TipoTrabajoComponent, selectors: [["app-tipo-trabajo"]], decls: 9, vars: 2, consts: [[1, "main-trabajo"], [1, "primary-dark"], [1, "primary"], ["id", "mixedExample", 1, "gallery", 3, "itemTemplate"], ["itemTemplate", ""], ["class", "item-text", 4, "ngIf"], [1, "item-text"]], template: function TipoTrabajoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cheque\u00E1 nuestra galer\u00EDa de trabajos realizados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "gallery", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TipoTrabajoComponent_ng_template_7_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.trabajoBaseInfo == null ? null : ctx.trabajoBaseInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemTemplate", _r0);
    } }, directives: [ng_gallery__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".main-trabajo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.main-trabajo[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.main-trabajo[_ngcontent-%COMP%]   gallery[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: inherit;\n  border-radius: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGlwby10cmFiYWpvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoidGlwby10cmFiYWpvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdHJhYmFqbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaHIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbiAgZ2FsbGVyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=tipo-trabajo-tipo-trabajo-module.js.map