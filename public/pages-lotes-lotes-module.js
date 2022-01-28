(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lotes-lotes-module"],{

/***/ "0476":
/*!******************************************************************!*\
  !*** ./src/app/modules/main/pages/lotes/lotes-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: LotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesRoutingModule", function() { return LotesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lotes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotes.component */ "cmfB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _lotes_component__WEBPACK_IMPORTED_MODULE_1__["LotesComponent"]
    },
    {
        path: ':loteId',
        loadChildren: () => __webpack_require__.e(/*! import() | lote-lote-module */ "lote-lote-module").then(__webpack_require__.bind(null, /*! ./lote/lote.module */ "5OOt")).then(m => m.LoteModule)
    }
];
class LotesRoutingModule {
}
LotesRoutingModule.ɵfac = function LotesRoutingModule_Factory(t) { return new (t || LotesRoutingModule)(); };
LotesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LotesRoutingModule });
LotesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LotesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "NQ40":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/lotes/lotes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesRoutingModule", function() { return LotesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lotes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotes.component */ "XW1d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _lotes_component__WEBPACK_IMPORTED_MODULE_1__["LotesComponent"]
    }];
class LotesRoutingModule {
}
LotesRoutingModule.ɵfac = function LotesRoutingModule_Factory(t) { return new (t || LotesRoutingModule)(); };
LotesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LotesRoutingModule });
LotesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LotesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "XW1d":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/lotes/lotes.component.ts ***!
  \********************************************************************/
/*! exports provided: LotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesComponent", function() { return LotesComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/http.service */ "N+K7");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");












function LotesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onRecargar", function LotesComponent_div_1_Template_app_table_onRecargar_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.recargarLotes($event); })("onCreate", function LotesComponent_div_1_Template_app_table_onCreate_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.creatLote(); })("onEdit", function LotesComponent_div_1_Template_app_table_onEdit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.editarLote($event); })("onDelete", function LotesComponent_div_1_Template_app_table_onDelete_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.borrarLote($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Lotes")("filasTabla", ctx_r0.tableData)("encabezadosTabla", ctx_r0.encabezadosTabla)("totalSection", ctx_r0.tableData == null ? null : ctx_r0.tableData.length);
} }
function LotesComponent_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.creationImageError);
} }
function LotesComponent_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const zona_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", zona_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", zona_r18.nombre, " ");
} }
function LotesComponent_div_2_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 10 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe ser mayor a 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function LotesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LotesComponent_div_2_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LotesComponent_div_2_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11); return _r7.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function LotesComponent_div_2_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, LotesComponent_div_2_span_13_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, LotesComponent_div_2_span_14_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Zona de construcci\u00F3n*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "--Seleccionar una zona--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, LotesComponent_div_2_option_21_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, LotesComponent_div_2_span_23_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, LotesComponent_div_2_span_30_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, LotesComponent_div_2_span_31_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, LotesComponent_div_2_span_36_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, LotesComponent_div_2_span_37_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, LotesComponent_div_2_span_42_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, LotesComponent_div_2_span_43_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Vendido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LotesComponent_div_2_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.recargarLotes(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " lote");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.loteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.creationImageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.acceptedFileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.zonasDeConstruccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.loteForm.controls.category.errors == null ? null : ctx_r1.loteForm.controls.category.errors.required) && ctx_r1.loteForm.controls.category.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.loteForm.controls.title.errors == null ? null : ctx_r1.loteForm.controls.title.errors.required) && ctx_r1.loteForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.loteForm.controls.title.errors == null ? null : ctx_r1.loteForm.controls.title.errors.minlength) && ctx_r1.loteForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.loteForm.controls.description.errors == null ? null : ctx_r1.loteForm.controls.description.errors.required) && ctx_r1.loteForm.controls.description.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.loteForm.controls.description.errors == null ? null : ctx_r1.loteForm.controls.description.errors.minlength) && ctx_r1.loteForm.controls.description.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.loteForm.controls.price.errors == null ? null : ctx_r1.loteForm.controls.price.errors.required) && ctx_r1.loteForm.controls.price.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.loteForm.controls.price.errors == null ? null : ctx_r1.loteForm.controls.price.errors.min) && ctx_r1.loteForm.controls.price.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "false");
} }
class LotesComponent {
    constructor(httpSrv, adminPanelCrudService, fb) {
        this.httpSrv = httpSrv;
        this.adminPanelCrudService = adminPanelCrudService;
        this.fb = fb;
        this.someClass = true;
        this.encabezadosTabla = [
            'Título',
            'Descripción',
            'Precio',
            'Vendido',
        ];
        this.tableData = [];
        this.lotes = [];
        this.isCreating = false;
        this.isEditing = false;
        this.crudAction = '';
        this.zonasDeConstruccion = [];
        this.imageToShow = '../../../../../assets/no-image.png';
        this.acceptedFileTypes = true;
        this.creationImageError = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.crearForm();
    }
    ngOnInit() {
        this.getLotes();
    }
    crearForm() {
        this.loteForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]],
            image: [''],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
            sold: ['false'],
            category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    showSelectedImage(e) {
        var _a;
        if (this.crudAction === 'Crear' && !this.loteForm.controls.image.value) {
            this.creationImageError = 'La imágen es obligatoria';
            return;
        }
        else {
            this.creationImageError = '';
        }
        const file = (_a = e.target) === null || _a === void 0 ? void 0 : _a.files[0];
        this.acceptedFileTypes =
            file.type === 'image/jpg' ||
                file.type === 'image/jpeg' ||
                file.type === 'image/png';
        if (file && this.acceptedFileTypes) {
            this.fileToUpload = file;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => (this.imageToShow = reader.result);
        }
        else {
            this.imageToShow = '../../../../../assets/no-image.png';
        }
    }
    formSubmit() {
        var _a, _b, _c, _d, _e;
        this.loteForm.markAllAsTouched();
        if (this.crudAction === 'Crear' && !this.loteForm.controls.image.value) {
            this.creationImageError = 'La imágen es obligatoria';
            return;
        }
        if (this.loteForm.valid) {
            const formData = new FormData();
            formData.append('title', (_a = this.loteForm.controls.title) === null || _a === void 0 ? void 0 : _a.value);
            formData.append('description', (_b = this.loteForm.controls.description) === null || _b === void 0 ? void 0 : _b.value);
            formData.append('price', (_c = this.loteForm.controls.price) === null || _c === void 0 ? void 0 : _c.value);
            formData.append('sold', (_d = this.loteForm.controls.sold) === null || _d === void 0 ? void 0 : _d.value);
            this.fileToUpload && formData.append('image', this.fileToUpload);
            formData.append('category', (_e = this.loteForm.controls.category) === null || _e === void 0 ? void 0 : _e.value);
            this.crudAction === 'Crear'
                ? this.crearLoteEnLaDb(formData)
                : this.editarLoteEnLaDb(formData);
        }
    }
    getLotes() {
        this.httpSrv
            .getAllZones()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((zonas) => {
            for (const zona of zonas.data) {
                this.zonasDeConstruccion.push({
                    id: zona.id,
                    nombre: zona.title,
                });
                this.httpSrv
                    .getLotes(zona.id.toString())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
                    .subscribe((lotes) => {
                    var _a, _b;
                    if ((_a = lotes === null || lotes === void 0 ? void 0 : lotes.meta) === null || _a === void 0 ? void 0 : _a.status.toString().includes('20')) {
                        (_b = lotes === null || lotes === void 0 ? void 0 : lotes.data) === null || _b === void 0 ? void 0 : _b.Batches.forEach((lote) => this.setTableData(lote));
                    }
                    else {
                        Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(lotes);
                    }
                }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
    }
    setTableData(lote) {
        var _a, _b;
        this.tableData.push({
            imagen: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${lote.image}`,
            item2: lote.title ? lote.title : 'Vacío',
            item3: lote.description ? lote.description : 'Vacío',
            item4: ((_a = lote.price) === null || _a === void 0 ? void 0 : _a.toString()) ? (_b = lote.price) === null || _b === void 0 ? void 0 : _b.toString() : 'Vacío',
            item6: this.setearElEstadoVendidoONo(lote.sold),
            id: lote.id,
        });
        this.lotes.push(lote);
    }
    setearElEstadoVendidoONo(palabra) {
        let frase = '';
        palabra === 'true' ? (frase = 'Si') : (frase = 'No');
        return frase;
    }
    recargarLotes(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.zonasDeConstruccion = [];
            this.lotes = [];
            this.isEditing = false;
            this.isCreating = false;
            this.getLotes();
        }
    }
    resetsetControls() {
        this.loteForm.controls.title.setValue('');
        this.loteForm.controls.description.setValue('');
        this.loteForm.controls.category.setValue('');
        this.loteForm.controls.price.setValue('');
        this.loteForm.controls.sold.setValue('');
        this.loteForm.controls.image.setValue('');
        this.imageToShow = '../../../../../assets/no-image.png';
    }
    creatLote() {
        this.crudAction = 'Crear';
        this.isCreating = true;
        this.isEditing = false;
    }
    crearLoteEnLaDb(payload) {
        this.adminPanelCrudService
            .create(payload, 'batches')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarLotes(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'lote');
        }, (err) => {
            this.recargarLotes(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    editarLote(id) {
        if (this.encontrarLoteSeleccionado(id)) {
            this.crudAction = 'Editar';
            this.isEditing = true;
            this.isCreating = false;
            const lote = this.lotes.find((lote) => lote.id === id);
            if (lote) {
                this.loteID = id;
                this.loteForm.controls.title.setValue(lote.title);
                this.loteForm.controls.description.setValue(lote.description);
                this.loteForm.controls.category.setValue(lote.categories_id);
                this.loteForm.controls.price.setValue(lote.price);
                this.loteForm.controls.sold.setValue(lote.sold);
                this.imageToShow = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${lote.image}`;
            }
        }
    }
    editarLoteEnLaDb(payload) {
        this.adminPanelCrudService
            .edit(this.loteID, payload, 'batches')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarLotes(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'lote');
        }, (err) => {
            this.recargarLotes(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    borrarLote(id) {
        if (this.encontrarLoteSeleccionado(id)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: '¿Seguro querés elimninar el lote seleccionado?',
                showDenyButton: true,
                confirmButtonText: 'Si, borrar',
                denyButtonText: `No`,
            }).then((result) => {
                result.isConfirmed ? this.borrarLoteDeLaDb(id) : null;
            });
        }
    }
    borrarLoteDeLaDb(id) {
        this.adminPanelCrudService
            .delete(id, 'batches')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarLotes(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'lote');
        }, (err) => {
            this.recargarLotes(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    encontrarLoteSeleccionado(id) {
        const loteSeleccionado = this.lotes.find((lote) => {
            return lote.id === id;
        });
        return loteSeleccionado;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
LotesComponent.ɵfac = function LotesComponent_Factory(t) { return new (t || LotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_8__["AdminPanelCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
LotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: LotesComponent, selectors: [["app-lotes"]], hostVars: 2, hostBindings: function LotesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], [1, "col-md-4", "mb-2", 3, "click"], ["alt", "Lote", 1, "img-responsive", 3, "src"], ["type", "file", "formControlName", "image", 3, "hidden", "change"], ["imageInput", ""], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], [1, "form-group"], ["formControlName", "category", 1, "form-control", "custom-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group"], ["type", "text", "id", "exampleInputuname2", "placeholder", "T\u00EDtulo*", "formControlName", "title", 1, "form-control"], ["type", "text", "id", "exampleInputuname2", "placeholder", "Descripci\u00F3n*", "formControlName", "description", "rows", "5", 1, "form-control"], ["type", "number", "id", "exampleInputuname2", "placeholder", "Precio*", "formControlName", "price", 1, "form-control"], ["formControlName", "sold", 1, "form-control", "custom-select"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "text-danger"]], template: function LotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LotesComponent_div_1_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LotesComponent_div_2_Template, 57, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3Rlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "cW5t":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/lotes/lotes.module.ts ***!
  \*****************************************************************/
/*! exports provided: LotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesModule", function() { return LotesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lotes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotes-routing.module */ "NQ40");
/* harmony import */ var _lotes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lotes.component */ "XW1d");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class LotesModule {
}
LotesModule.ɵfac = function LotesModule_Factory(t) { return new (t || LotesModule)(); };
LotesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LotesModule });
LotesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _lotes_routing_module__WEBPACK_IMPORTED_MODULE_1__["LotesRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LotesModule, { declarations: [_lotes_component__WEBPACK_IMPORTED_MODULE_2__["LotesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _lotes_routing_module__WEBPACK_IMPORTED_MODULE_1__["LotesRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "cmfB":
/*!*************************************************************!*\
  !*** ./src/app/modules/main/pages/lotes/lotes.component.ts ***!
  \*************************************************************/
/*! exports provided: LotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesComponent", function() { return LotesComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/presentation-card/presentation-card.component */ "TuUY");







class LotesComponent {
    constructor(http) {
        this.http = http;
        this.postalZonesToPresent = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.subscribeToPostalZones();
    }
    subscribeToPostalZones() {
        this.http
            .getAllZones()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((pz) => {
            var _a;
            if (pz.meta.status.toString().includes('20')) {
                this.postalZones = pz === null || pz === void 0 ? void 0 : pz.data;
                (_a = this.postalZones) === null || _a === void 0 ? void 0 : _a.forEach((postalZone) => {
                    postalZone.url = `/main/lotes/${postalZone.id}`;
                    postalZone.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${postalZone.image}`;
                });
                this.mapPostalZonesToPresent();
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["unknownErrorAlert"])(pz);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err));
    }
    mapPostalZonesToPresent() {
        var _a;
        (_a = this.postalZones) === null || _a === void 0 ? void 0 : _a.forEach((postalZone) => {
            this.postalZonesToPresent.push({
                titulo: postalZone.title,
                urlFoto: postalZone.image,
                ruta: postalZone.url,
                sendDataByRoute: true,
                urlData: { data: postalZone.id },
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
LotesComponent.ɵfac = function LotesComponent_Factory(t) { return new (t || LotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
LotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LotesComponent, selectors: [["app-lotes"]], decls: 5, vars: 1, consts: [[1, "main-lotes", "animate__animated", "animate__fadeIn", "animate__slow"], [1, "primary-dark"], [3, "presentationCard"]], template: function LotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Lotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-presentation-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("presentationCard", ctx.postalZonesToPresent);
    } }, directives: [_components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_6__["PresentationCardComponent"]], styles: [".main-lotes[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxvdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSiIsImZpbGUiOiJsb3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWxvdGVzIHtcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "r+F7":
/*!**********************************************************!*\
  !*** ./src/app/modules/main/pages/lotes/lotes.module.ts ***!
  \**********************************************************/
/*! exports provided: LotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesModule", function() { return LotesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lotes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotes-routing.module */ "0476");
/* harmony import */ var _lotes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lotes.component */ "cmfB");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "bqc1");
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


/***/ })

}]);
//# sourceMappingURL=pages-lotes-lotes-module.js.map