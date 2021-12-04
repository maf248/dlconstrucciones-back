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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/presentation-card/presentation-card.component */ "hHxT");








function TipoServicioComponent_ng_container_4_div_1_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r3.subtitle);
} }
function TipoServicioComponent_ng_container_4_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r3.text);
} }
function TipoServicioComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TipoServicioComponent_ng_container_4_div_1_h3_1_Template, 2, 1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TipoServicioComponent_ng_container_4_div_1_p_2_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", content_r3.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", content_r3.text);
} }
function TipoServicioComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TipoServicioComponent_ng_container_4_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tipoServicioContents);
} }
function TipoServicioComponent_ng_container_5_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-presentation-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("urlFoto", picture_r9.picture)("imageSizeInRelationOfCols", 3);
} }
function TipoServicioComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-grid-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function TipoServicioComponent_ng_container_5_Template_mat_grid_list_resize_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TipoServicioComponent_ng_container_5_mat_grid_tile_2_Template, 2, 2, "mat-grid-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", ctx_r1.numberOfColumns)("rowHeight", ctx_r1.rowHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.tipoServicioPictures);
} }
class TipoServicioComponent {
    constructor(httpService, activeRoute) {
        this.httpService = httpService;
        this.activeRoute = activeRoute;
        this.numberOfColumns = 0;
        this.rowHeight = '';
        this.galleryId = 'mixedExample';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.numberOfColumns = window.innerWidth <= 575 ? 1 : 3;
        this.rowHeight = window.innerWidth <= 575 ? '2:1' : '50vh';
        const serviceId = this.activeRoute.snapshot.params.servicioId;
        this.httpService.getOneService(serviceId).subscribe((serv) => {
            var _a, _b, _c;
            this.tipoServicioComplete = serv;
            this.tipoServicio = serv === null || serv === void 0 ? void 0 : serv.data;
            this.tipoServicioContents = (_a = serv === null || serv === void 0 ? void 0 : serv.data) === null || _a === void 0 ? void 0 : _a.Contents;
            this.tipoServicioPictures = (_b = serv === null || serv === void 0 ? void 0 : serv.data) === null || _b === void 0 ? void 0 : _b.Pictures;
            (_c = this.tipoServicioPictures) === null || _c === void 0 ? void 0 : _c.forEach((picture) => {
                picture.picture = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_IMAGE_URL}/${picture.picture}`;
            });
        });
    }
    onResize(event) {
        var _a, _b;
        this.numberOfColumns = ((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.innerWidth) <= 575 ? 1 : 3;
        this.rowHeight = ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.innerWidth) <= 575 ? '2:1' : '50vh';
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
TipoServicioComponent.ɵfac = function TipoServicioComponent_Factory(t) { return new (t || TipoServicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
TipoServicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TipoServicioComponent, selectors: [["app-tipo-servicio"]], decls: 6, vars: 3, consts: [[1, "main-tipo-servicio"], [1, "primary-dark", "text-center"], [4, "ngIf"], ["class", "description", 4, "ngFor", "ngForOf"], [1, "description"], ["class", "primary", 4, "ngIf"], [1, "primary"], [3, "cols", "rowHeight", "resize"], [4, "ngFor", "ngForOf"], [3, "urlFoto", "imageSizeInRelationOfCols"]], template: function TipoServicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TipoServicioComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TipoServicioComponent_ng_container_5_Template, 3, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tipoServicio == null ? null : ctx.tipoServicio.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tipoServicioContents);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tipoServicioPictures.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__["PresentationCardComponent"]], styles: [".main-tipo-servicio[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0px auto 8px auto;\n}\n.main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n.main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.main-tipo-servicio[_ngcontent-%COMP%]   gallery[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: inherit;\n  border-radius: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGlwby1zZXJ2aWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBQ0k7RUFDRSxTQUFBO0FBQ047QUFFRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoidGlwby1zZXJ2aWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRpcG8tc2VydmljaW8ge1xyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDhweCBhdXRvO1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBoMywgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgZ2FsbGVyeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TipoServicioModule {
}
TipoServicioModule.ɵfac = function TipoServicioModule_Factory(t) { return new (t || TipoServicioModule)(); };
TipoServicioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TipoServicioModule });
TipoServicioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tipo_servicio_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoServicioRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TipoServicioModule, { declarations: [_tipo_servicio_component__WEBPACK_IMPORTED_MODULE_2__["TipoServicioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tipo_servicio_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoServicioRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();


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