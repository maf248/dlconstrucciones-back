(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lotes-lotes-module"],{

/***/ "5zwW":
/*!*****************************************************!*\
  !*** ./src/app/pages/lotes/lotes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesRoutingModule", function() { return LotesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lotes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotes.component */ "kz/B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _lotes_component__WEBPACK_IMPORTED_MODULE_1__["LotesComponent"]
    },
    {
        path: ':loteId',
        loadChildren: () => __webpack_require__.e(/*! import() | lote-lote-module */ "lote-lote-module").then(__webpack_require__.bind(null, /*! ./lote/lote.module */ "rkEB")).then(m => m.LoteModule)
    }
];
class LotesRoutingModule {
}
LotesRoutingModule.ɵfac = function LotesRoutingModule_Factory(t) { return new (t || LotesRoutingModule)(); };
LotesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LotesRoutingModule });
LotesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LotesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "foLS":
/*!*********************************************!*\
  !*** ./src/app/pages/lotes/lotes.module.ts ***!
  \*********************************************/
/*! exports provided: LotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesModule", function() { return LotesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lotes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotes-routing.module */ "5zwW");
/* harmony import */ var _lotes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lotes.component */ "kz/B");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class LotesModule {
}
LotesModule.ɵfac = function LotesModule_Factory(t) { return new (t || LotesModule)(); };
LotesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LotesModule });
LotesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _lotes_routing_module__WEBPACK_IMPORTED_MODULE_1__["LotesRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LotesModule, { declarations: [_lotes_component__WEBPACK_IMPORTED_MODULE_2__["LotesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _lotes_routing_module__WEBPACK_IMPORTED_MODULE_1__["LotesRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();


/***/ }),

/***/ "kz/B":
/*!************************************************!*\
  !*** ./src/app/pages/lotes/lotes.component.ts ***!
  \************************************************/
/*! exports provided: LotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesComponent", function() { return LotesComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "N+K7");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/presentation-card/presentation-card.component */ "hHxT");








const _c0 = function (a0) { return { data: a0 }; };
function LotesComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-presentation-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lote_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("urlFoto", lote_r1.image)("ruta", lote_r1.url)("titulo", lote_r1.title)("sendDataByRoute", true)("urlData", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, lote_r1.id));
} }
class LotesComponent {
    constructor(http) {
        this.http = http;
        this.numberOfColumns = 0;
        this.rowHeight = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.numberOfColumns = window.innerWidth <= 575 ? 1 : 2;
        this.rowHeight = window.innerWidth <= 575 ? '2:1' : '90vh';
        this.http
            .getAllZones()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((pz) => {
            this.postalZones = pz === null || pz === void 0 ? void 0 : pz.data;
            this.postalZones.forEach((postalZone) => {
                postalZone.url = `/lotes/${postalZone.id}`;
                postalZone.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${postalZone.image}`;
            });
        }, (err) => console.warn(err, 'Error en el pedido de las categorías'));
    }
    onResize(event) {
        var _a, _b;
        this.numberOfColumns = ((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.innerWidth) <= 575 ? 1 : 2;
        this.rowHeight = ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.innerWidth) <= 575 ? '2:1' : '90vh';
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
LotesComponent.ɵfac = function LotesComponent_Factory(t) { return new (t || LotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
LotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LotesComponent, selectors: [["app-lotes"]], decls: 2, vars: 3, consts: [["rows", "1", 3, "cols", "rowHeight", "resize"], [4, "ngFor", "ngForOf"], [3, "urlFoto", "ruta", "titulo", "sendDataByRoute", "urlData"]], template: function LotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function LotesComponent_Template_mat_grid_list_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LotesComponent_mat_grid_tile_1_Template, 2, 7, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", ctx.numberOfColumns)("rowHeight", ctx.rowHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.postalZones);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__["PresentationCardComponent"]], styles: ["mat-grid-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoibG90ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-lotes-lotes-module.js.map