(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lote-lote-module"],{

/***/ "3Pyw":
/*!****************************************************!*\
  !*** ./src/app/pages/lotes/lote/lote.component.ts ***!
  \****************************************************/
/*! exports provided: LoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteComponent", function() { return LoteComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http.service */ "N+K7");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/presentation-card/presentation-card.component */ "hHxT");









function LoteComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-presentation-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lote_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("urlFoto", lote_r1.image)("ruta", lote_r1.url)("titulo", lote_r1.title)("imageSizeInRelationOfCols", 3);
} }
class LoteComponent {
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.localidadID = '';
        this.lotes = [];
        this.numberOfColumns = 0;
        this.rowHeight = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getDataFromRoute();
    }
    ngOnInit() {
        this.numberOfColumns = window.innerWidth <= 575 ? 1 : 3;
        this.rowHeight = window.innerWidth <= 575 ? '2:1' : '50vh';
        this.httpService
            .getLotes(this.localidadID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            var _a, _b;
            this.lotes = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Batches;
            (_b = this.lotes) === null || _b === void 0 ? void 0 : _b.forEach((lote) => {
                lote.url = '/';
                lote.image = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_IMAGE_URL}/${lote.image}`;
            });
        }, (err) => console.log(err));
    }
    onResize(event) {
        var _a, _b;
        this.numberOfColumns = ((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.innerWidth) <= 575 ? 1 : 3;
        this.rowHeight = ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.innerWidth) <= 575 ? '2:1' : '50vh';
    }
    getDataFromRoute() {
        var _a, _b, _c;
        this.localidadID = (_c = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.data;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
LoteComponent.ɵfac = function LoteComponent_Factory(t) { return new (t || LoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
LoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoteComponent, selectors: [["app-lote"]], decls: 3, vars: 3, consts: [[1, "lote-container"], [3, "cols", "rowHeight", "resize"], [4, "ngFor", "ngForOf"], [3, "urlFoto", "ruta", "titulo", "imageSizeInRelationOfCols"]], template: function LoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function LoteComponent_Template_mat_grid_list_resize_1_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoteComponent_mat_grid_tile_2_Template, 2, 4, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", ctx.numberOfColumns)("rowHeight", ctx.rowHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lotes);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_8__["PresentationCardComponent"]], styles: [".lote-container[_ngcontent-%COMP%] {\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoibG90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb3RlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "K3tl":
/*!*********************************************************!*\
  !*** ./src/app/pages/lotes/lote/lote-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteRoutingModule", function() { return LoteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lote.component */ "3Pyw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _lote_component__WEBPACK_IMPORTED_MODULE_1__["LoteComponent"]
    }];
class LoteRoutingModule {
}
LoteRoutingModule.ɵfac = function LoteRoutingModule_Factory(t) { return new (t || LoteRoutingModule)(); };
LoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoteRoutingModule });
LoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "rkEB":
/*!*************************************************!*\
  !*** ./src/app/pages/lotes/lote/lote.module.ts ***!
  \*************************************************/
/*! exports provided: LoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteModule", function() { return LoteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lote_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lote-routing.module */ "K3tl");
/* harmony import */ var _lote_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lote.component */ "3Pyw");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class LoteModule {
}
LoteModule.ɵfac = function LoteModule_Factory(t) { return new (t || LoteModule)(); };
LoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoteModule });
LoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _lote_routing_module__WEBPACK_IMPORTED_MODULE_1__["LoteRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoteModule, { declarations: [_lote_component__WEBPACK_IMPORTED_MODULE_2__["LoteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _lote_routing_module__WEBPACK_IMPORTED_MODULE_1__["LoteRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=lote-lote-module.js.map