(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lote-lote-module"],{

/***/ "5OOt":
/*!**************************************************************!*\
  !*** ./src/app/modules/main/pages/lotes/lote/lote.module.ts ***!
  \**************************************************************/
/*! exports provided: LoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteModule", function() { return LoteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lote_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lote-routing.module */ "Pas5");
/* harmony import */ var _lote_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lote.component */ "W5c5");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/components.module */ "bqc1");
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


/***/ }),

/***/ "Pas5":
/*!**********************************************************************!*\
  !*** ./src/app/modules/main/pages/lotes/lote/lote-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteRoutingModule", function() { return LoteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lote.component */ "W5c5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _lote_component__WEBPACK_IMPORTED_MODULE_1__["LoteComponent"],
    },
    {
        path: 'detalle/:lote_id',
        loadChildren: () => __webpack_require__.e(/*! import() | detalle-lote-detalle-lote-module */ "detalle-lote-detalle-lote-module").then(__webpack_require__.bind(null, /*! ./detalle-lote/detalle-lote.module */ "gPlH")).then((m) => m.DetalleLoteModule),
    },
];
class LoteRoutingModule {
}
LoteRoutingModule.ɵfac = function LoteRoutingModule_Factory(t) { return new (t || LoteRoutingModule)(); };
LoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoteRoutingModule });
LoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "W5c5":
/*!*****************************************************************!*\
  !*** ./src/app/modules/main/pages/lotes/lote/lote.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoteComponent", function() { return LoteComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/presentation-card/presentation-card.component */ "TuUY");








class LoteComponent {
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.lotesToPresent = [];
        this.localidadID = '';
        this.lotes = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.getDataFromRoute();
    }
    ngOnInit() {
        this.subscribeToLotes();
    }
    subscribeToLotes() {
        this.httpService
            .getLotes(this.localidadID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            var _a, _b;
            if (res.meta.status.toString().includes('20')) {
                this.lotes = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Batches;
                (_b = this.lotes) === null || _b === void 0 ? void 0 : _b.forEach((lote) => {
                    lote.url = `/main/lotes/${lote.categories_id}/detalle/${lote.id}`;
                    lote.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${lote.image}`;
                });
                this.mapLotesToPresent();
                this.checkLotesLength();
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["unknownErrorAlert"])(res);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err));
    }
    checkLotesLength() {
        var _a;
        if (!((_a = this.lotes) === null || _a === void 0 ? void 0 : _a.length)) {
            this.router.navigateByUrl('/lotes');
        }
    }
    getDataFromRoute() {
        var _a, _b, _c;
        this.localidadID = (_c = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.data;
    }
    mapLotesToPresent() {
        var _a;
        (_a = this.lotes) === null || _a === void 0 ? void 0 : _a.forEach((lote) => {
            this.lotesToPresent.push({
                titulo: lote.title,
                urlFoto: lote.image,
                ruta: lote.url,
                descripcion: lote.description,
                sendDataByRoute: false,
                vendido: lote.sold,
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
LoteComponent.ɵfac = function LoteComponent_Factory(t) { return new (t || LoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
LoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoteComponent, selectors: [["app-lote"]], decls: 2, vars: 1, consts: [[1, "lote-container", "animate__animated", "animate__fadeIn", "animate__slow"], [3, "presentationCard"]], template: function LoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-presentation-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("presentationCard", ctx.lotesToPresent);
    } }, directives: [_components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__["PresentationCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3RlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=lote-lote-module.js.map