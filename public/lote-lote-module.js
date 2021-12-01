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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ "N+K7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/presentation-card/presentation-card.component */ "hHxT");






function LoteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-presentation-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lote_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("urlFoto", lote_r1.image)("ruta", lote_r1.url)("titulo", lote_r1.title);
} }
class LoteComponent {
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.localidadID = '';
        this.lotes = [];
        this.getDataFromRoute();
    }
    ngOnInit() {
        this.httpService.getLotes(this.localidadID).subscribe((res) => {
            var _a, _b;
            this.lotes = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Batches;
            (_b = this.lotes) === null || _b === void 0 ? void 0 : _b.forEach(lote => {
                lote.url = '/';
                lote.image = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_IMAGE_URL}/${lote.image}`;
            });
        }, (err) => console.log(err));
    }
    getDataFromRoute() {
        var _a, _b, _c;
        this.localidadID = (_c = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.data;
    }
}
LoteComponent.ɵfac = function LoteComponent_Factory(t) { return new (t || LoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
LoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoteComponent, selectors: [["app-lote"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [3, "urlFoto", "ruta", "titulo"]], template: function LoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoteComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_5__["PresentationCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3RlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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