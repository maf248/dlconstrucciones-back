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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TipoTrabajoModule {
}
TipoTrabajoModule.ɵfac = function TipoTrabajoModule_Factory(t) { return new (t || TipoTrabajoModule)(); };
TipoTrabajoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TipoTrabajoModule });
TipoTrabajoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tipo_trabajo_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoTrabajoRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TipoTrabajoModule, { declarations: [_tipo_trabajo_component__WEBPACK_IMPORTED_MODULE_2__["TipoTrabajoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tipo_trabajo_routing_module__WEBPACK_IMPORTED_MODULE_1__["TipoTrabajoRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();


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
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/presentation-card/presentation-card.component */ "hHxT");









function TipoTrabajoComponent_mat_grid_tile_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-presentation-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trabajo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("urlFoto", trabajo_r1.image)("titulo", trabajo_r1.title)("imageSizeInRelationOfCols", 3);
} }
class TipoTrabajoComponent {
    constructor(httpService, activatedRoute) {
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
        this.numberOfColumns = 0;
        this.rowHeight = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.numberOfColumns = window.innerWidth <= 575 ? 1 : 3;
        this.rowHeight = window.innerWidth <= 575 ? '2:1' : '50vh';
        const idTipoTrabajo = this.activatedRoute.snapshot.params.idTipoTrabajo;
        this.httpService
            .getOneTypeOfJob(idTipoTrabajo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((jobFull) => {
            var _a, _b;
            this.trabajoCompleto = jobFull;
            this.trabajoBaseInfo = jobFull === null || jobFull === void 0 ? void 0 : jobFull.data;
            this.trabajoInfo = (_a = jobFull === null || jobFull === void 0 ? void 0 : jobFull.data) === null || _a === void 0 ? void 0 : _a.Jobs;
            (_b = this.trabajoInfo) === null || _b === void 0 ? void 0 : _b.forEach((trabajo) => {
                trabajo.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${trabajo.image}`;
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
TipoTrabajoComponent.ɵfac = function TipoTrabajoComponent_Factory(t) { return new (t || TipoTrabajoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
TipoTrabajoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TipoTrabajoComponent, selectors: [["app-tipo-trabajo"]], decls: 8, vars: 4, consts: [[1, "main-trabajo"], [1, "primary-dark"], [1, "primary"], [3, "cols", "rowHeight", "resize"], [4, "ngFor", "ngForOf"], [3, "urlFoto", "titulo", "imageSizeInRelationOfCols"]], template: function TipoTrabajoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cheque\u00E1 nuestra galer\u00EDa de trabajos realizados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function TipoTrabajoComponent_Template_mat_grid_list_resize_6_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TipoTrabajoComponent_mat_grid_tile_7_Template, 2, 3, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.trabajoBaseInfo == null ? null : ctx.trabajoBaseInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", ctx.numberOfColumns)("rowHeight", ctx.rowHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.trabajoInfo);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_8__["PresentationCardComponent"]], styles: [".main-trabajo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.main-trabajo[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGlwby10cmFiYWpvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0FBRUoiLCJmaWxlIjoidGlwby10cmFiYWpvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdHJhYmFqbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaHIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=tipo-trabajo-tipo-trabajo-module.js.map