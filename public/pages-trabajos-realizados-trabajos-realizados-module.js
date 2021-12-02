(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trabajos-realizados-trabajos-realizados-module"],{

/***/ "XKTE":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/trabajos-realizados/trabajos-realizados-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TrabajosRealizadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosRoutingModule", function() { return TrabajosRealizadosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajos-realizados.component */ "ntWx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_1__["TrabajosRealizadosComponent"]
    },
    {
        path: ':idTipoTrabajo',
        loadChildren: () => Promise.all(/*! import() | tipo-trabajo-tipo-trabajo-module */[__webpack_require__.e("default~tipo-servicio-tipo-servicio-module~tipo-trabajo-tipo-trabajo-module"), __webpack_require__.e("tipo-trabajo-tipo-trabajo-module")]).then(__webpack_require__.bind(null, /*! ./tipo-trabajo/tipo-trabajo.module */ "9dl/")).then(m => m.TipoTrabajoModule)
    }
];
class TrabajosRealizadosRoutingModule {
}
TrabajosRealizadosRoutingModule.ɵfac = function TrabajosRealizadosRoutingModule_Factory(t) { return new (t || TrabajosRealizadosRoutingModule)(); };
TrabajosRealizadosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrabajosRealizadosRoutingModule });
TrabajosRealizadosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrabajosRealizadosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ntWx":
/*!****************************************************************************!*\
  !*** ./src/app/pages/trabajos-realizados/trabajos-realizados.component.ts ***!
  \****************************************************************************/
/*! exports provided: TrabajosRealizadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosComponent", function() { return TrabajosRealizadosComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/presentation-card/presentation-card.component */ "hHxT");








function TrabajosRealizadosComponent_mat_grid_tile_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-presentation-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trabajo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("urlFoto", trabajo_r1 == null ? null : trabajo_r1.image)("ruta", trabajo_r1 == null ? null : trabajo_r1.url)("titulo", trabajo_r1 == null ? null : trabajo_r1.title);
} }
class TrabajosRealizadosComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.trabajosData = [];
        this.numberOfColumns = 0;
        this.rowHeight = "";
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.numberOfColumns = (window.innerWidth <= 575) ? 1 : 2;
        this.rowHeight = (window.innerWidth <= 575) ? "2:1" : "90vh";
        this.httpService.getTypesOfJob()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((jobCategories) => {
            var _a;
            this.trabajosComplete = jobCategories;
            this.trabajosData = jobCategories === null || jobCategories === void 0 ? void 0 : jobCategories.data;
            (_a = this.trabajosData) === null || _a === void 0 ? void 0 : _a.forEach(trabajo => {
                trabajo.url = `/trabajos-realizados/${trabajo.id}`;
                trabajo.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${trabajo.image}`;
            });
        });
    }
    onResize(event) {
        var _a, _b;
        this.numberOfColumns = (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.innerWidth) <= 575) ? 1 : 2;
        this.rowHeight = (((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.innerWidth) <= 575) ? "2:1" : "90vh";
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
TrabajosRealizadosComponent.ɵfac = function TrabajosRealizadosComponent_Factory(t) { return new (t || TrabajosRealizadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
TrabajosRealizadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TrabajosRealizadosComponent, selectors: [["app-trabajos-realizados"]], decls: 6, vars: 3, consts: [[1, "main-servicios"], [1, "primary-dark"], ["rows", "1", 3, "cols", "rowHeight", "resize"], [4, "ngFor", "ngForOf"], [3, "urlFoto", "ruta", "titulo"]], template: function TrabajosRealizadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Trabajos realizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function TrabajosRealizadosComponent_Template_mat_grid_list_resize_4_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TrabajosRealizadosComponent_mat_grid_tile_5_Template, 2, 3, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", ctx.numberOfColumns)("rowHeight", ctx.rowHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.trabajosData);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__["PresentationCardComponent"]], styles: [".main-servicios[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main-servicios[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0cmFiYWpvcy1yZWFsaXphZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFBSiIsImZpbGUiOiJ0cmFiYWpvcy1yZWFsaXphZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VydmljaW9zIHtcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "uuyT":
/*!*************************************************************************!*\
  !*** ./src/app/pages/trabajos-realizados/trabajos-realizados.module.ts ***!
  \*************************************************************************/
/*! exports provided: TrabajosRealizadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosModule", function() { return TrabajosRealizadosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _trabajos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajos-realizados-routing.module */ "XKTE");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trabajos-realizados.component */ "ntWx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TrabajosRealizadosModule {
}
TrabajosRealizadosModule.ɵfac = function TrabajosRealizadosModule_Factory(t) { return new (t || TrabajosRealizadosModule)(); };
TrabajosRealizadosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TrabajosRealizadosModule });
TrabajosRealizadosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _trabajos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrabajosRealizadosRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TrabajosRealizadosModule, { declarations: [_trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_3__["TrabajosRealizadosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _trabajos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrabajosRealizadosRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-trabajos-realizados-trabajos-realizados-module.js.map