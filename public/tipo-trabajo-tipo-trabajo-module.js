(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipo-trabajo-tipo-trabajo-module"],{

/***/ "Gerj":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/pages/trabajos-realizados/tipo-trabajo/tipo-trabajo.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TipoTrabajoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTrabajoComponent", function() { return TipoTrabajoComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/presentation-card/presentation-card.component */ "TuUY");








class TipoTrabajoComponent {
    constructor(httpService, activatedRoute) {
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
        this.tipoTrabajoToPresent = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.getJob();
    }
    getJob() {
        const idTipoTrabajo = this.activatedRoute.snapshot.params.idTipoTrabajo;
        this.httpService
            .getOneTypeOfJob(idTipoTrabajo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((jobFull) => {
            var _a, _b;
            if (jobFull.meta.status.toString().includes('20')) {
                this.trabajoCompleto = jobFull;
                this.trabajoBaseInfo = jobFull === null || jobFull === void 0 ? void 0 : jobFull.data;
                this.trabajoInfo = (_a = jobFull === null || jobFull === void 0 ? void 0 : jobFull.data) === null || _a === void 0 ? void 0 : _a.Jobs;
                (_b = this.trabajoInfo) === null || _b === void 0 ? void 0 : _b.forEach((trabajo) => {
                    trabajo.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${trabajo.image}`;
                });
                this.mapTrabajosToPresent();
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["unknownErrorAlert"])(jobFull);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err));
    }
    mapTrabajosToPresent() {
        this.trabajoInfo.forEach((trabajo) => {
            this.tipoTrabajoToPresent.push({
                titulo: trabajo.title,
                urlFoto: trabajo.image,
                openModal: true,
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
TipoTrabajoComponent.ɵfac = function TipoTrabajoComponent_Factory(t) { return new (t || TipoTrabajoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
TipoTrabajoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TipoTrabajoComponent, selectors: [["app-tipo-trabajo"]], decls: 7, vars: 2, consts: [[1, "main-trabajo", "animate__animated", "animate__fadeIn", "animate__slow"], [1, "primary-dark"], [1, "primary"], [3, "presentationCard"]], template: function TipoTrabajoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cheque\u00E1 nuestra galer\u00EDa de trabajos realizados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-presentation-card", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.trabajoBaseInfo == null ? null : ctx.trabajoBaseInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("presentationCard", ctx.tipoTrabajoToPresent);
    } }, directives: [_components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_7__["PresentationCardComponent"]], styles: [".main-trabajo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0aXBvLXRyYWJham8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoidGlwby10cmFiYWpvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdHJhYmFqbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Hcsx":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/pages/trabajos-realizados/tipo-trabajo/tipo-trabajo.module.ts ***!
  \********************************************************************************************/
/*! exports provided: TipoTrabajoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTrabajoModule", function() { return TipoTrabajoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tipo_trabajo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-trabajo-routing.module */ "t3PY");
/* harmony import */ var _tipo_trabajo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipo-trabajo.component */ "Gerj");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/components.module */ "bqc1");
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

/***/ "t3PY":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/pages/trabajos-realizados/tipo-trabajo/tipo-trabajo-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: TipoTrabajoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTrabajoRoutingModule", function() { return TipoTrabajoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tipo_trabajo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-trabajo.component */ "Gerj");
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


/***/ })

}]);
//# sourceMappingURL=tipo-trabajo-tipo-trabajo-module.js.map