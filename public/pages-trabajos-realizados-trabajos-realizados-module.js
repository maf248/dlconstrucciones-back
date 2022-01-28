(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trabajos-realizados-trabajos-realizados-module"],{

/***/ "7Ped":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/pages/trabajos-realizados/trabajos-realizados-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: TrabajosRealizadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosRoutingModule", function() { return TrabajosRealizadosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajos-realizados.component */ "zvYM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_1__["TrabajosRealizadosComponent"]
    },
    {
        path: ':idTipoTrabajo',
        loadChildren: () => __webpack_require__.e(/*! import() | tipo-trabajo-tipo-trabajo-module */ "tipo-trabajo-tipo-trabajo-module").then(__webpack_require__.bind(null, /*! ./tipo-trabajo/tipo-trabajo.module */ "Hcsx")).then(m => m.TipoTrabajoModule)
    }
];
class TrabajosRealizadosRoutingModule {
}
TrabajosRealizadosRoutingModule.ɵfac = function TrabajosRealizadosRoutingModule_Factory(t) { return new (t || TrabajosRealizadosRoutingModule)(); };
TrabajosRealizadosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrabajosRealizadosRoutingModule });
TrabajosRealizadosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrabajosRealizadosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "JFAf":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/trabajos-realizados/trabajos-realizados.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TrabajosRealizadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosComponent", function() { return TrabajosRealizadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/http.service */ "N+K7");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");













const _c0 = ["imageInput"];
function TrabajosRealizadosComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onRecargar", function TrabajosRealizadosComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r3.recargarTrabajos($event); })("onCreate", function TrabajosRealizadosComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r5.crearTrabajoRealizado(); })("onEdit", function TrabajosRealizadosComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r6.editarTrabajoRealizado($event); })("onDelete", function TrabajosRealizadosComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r7.borrarTrabajoRealizado($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Trabajos realizados")("filasTabla", ctx_r2.tableData)("encabezadosTabla", ctx_r2.encabezadosTabla)("totalSection", ctx_r2.tableData == null ? null : ctx_r2.tableData.length);
} }
function TrabajosRealizadosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TrabajosRealizadosComponent_div_1_app_table_3_Template, 1, 4, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tableData);
} }
function TrabajosRealizadosComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrabajosRealizadosComponent_div_2_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r16.openInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", file_r15, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function TrabajosRealizadosComponent_div_2_ng_container_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r19.creationImageError);
} }
function TrabajosRealizadosComponent_div_2_ng_container_10_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajosRealizadosComponent_div_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function TrabajosRealizadosComponent_div_2_ng_container_10_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r21.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TrabajosRealizadosComponent_div_2_ng_container_10_span_4_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TrabajosRealizadosComponent_div_2_ng_container_10_span_5_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.creationImageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r9.acceptedFileTypes);
} }
function TrabajosRealizadosComponent_div_2_ng_template_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajosRealizadosComponent_div_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 30, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function TrabajosRealizadosComponent_div_2_ng_template_11_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r25.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TrabajosRealizadosComponent_div_2_ng_template_11_span_3_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r11.acceptedFileTypes);
} }
function TrabajosRealizadosComponent_div_2_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", categoria_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", categoria_r27.title, " ");
} }
function TrabajosRealizadosComponent_div_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajosRealizadosComponent_div_2_div_22_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajosRealizadosComponent_div_2_div_22_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Debe tener al menos 10 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajosRealizadosComponent_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TrabajosRealizadosComponent_div_2_div_22_span_6_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, TrabajosRealizadosComponent_div_2_div_22_span_11_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r14.jobForm.controls.title.errors == null ? null : ctx_r14.jobForm.controls.title.errors.minlength) && ctx_r14.jobForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r14.jobForm.controls.description.errors == null ? null : ctx_r14.jobForm.controls.description.errors.minlength) && ctx_r14.jobForm.controls.description.touched);
} }
function TrabajosRealizadosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function TrabajosRealizadosComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, TrabajosRealizadosComponent_div_2_div_9_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, TrabajosRealizadosComponent_div_2_ng_container_10_Template, 6, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, TrabajosRealizadosComponent_div_2_ng_template_11_Template, 4, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Categor\u00EDa de trabajo*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "--Seleccionar una categor\u00EDa--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, TrabajosRealizadosComponent_div_2_option_19_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, TrabajosRealizadosComponent_div_2_span_21_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, TrabajosRealizadosComponent_div_2_div_22_Template, 12, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrabajosRealizadosComponent_div_2_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.recargarTrabajos(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " trabajo realizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.jobForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.imageToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Crear")("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.categoriaDeTrabajo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.jobForm.controls.type.errors == null ? null : ctx_r1.jobForm.controls.type.errors.required) && ctx_r1.jobForm.controls.type.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Editar");
} }
class TrabajosRealizadosComponent {
    constructor(httpSrv, adminPanelCrudService, fb) {
        this.httpSrv = httpSrv;
        this.adminPanelCrudService = adminPanelCrudService;
        this.fb = fb;
        this.someClass = true;
        this.encabezadosTabla = [
            'Título',
            'Descripción',
            'Tipo de trabajo',
        ];
        this.tableData = [];
        this.isCreating = false;
        this.isEditing = false;
        this.crudAction = '';
        this.imageToShow = ['../../../../../assets/no-image.png'];
        this.fileToUpload = [];
        this.acceptedFileTypes = true;
        this.categoriaDeTrabajo = [];
        this.creationImageError = '';
        this.jobs = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.createForm();
    }
    createForm() {
        this.jobForm = this.fb.group({
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)],
            image: [''],
        });
    }
    openInput() {
        this.imageInput.nativeElement.click();
    }
    ngOnInit() {
        this.getTrabajos();
    }
    formSubmit() {
        var _a, _b, _c, _d;
        this.jobForm.markAllAsTouched();
        if (this.crudAction === 'Crear' && !this.jobForm.controls.image.value) {
            this.creationImageError = 'La imágen es obligatoria';
            return;
        }
        if (this.jobForm.valid) {
            const formData = new FormData();
            formData.append('title', (_a = this.jobForm.controls.title) === null || _a === void 0 ? void 0 : _a.value);
            formData.append('description', (_b = this.jobForm.controls.description) === null || _b === void 0 ? void 0 : _b.value);
            formData.append('type', (_c = this.jobForm.controls.type) === null || _c === void 0 ? void 0 : _c.value);
            if ((_d = this.fileToUpload) === null || _d === void 0 ? void 0 : _d.length) {
                this.fileToUpload.forEach((file) => {
                    this.fileToUpload && formData.append('image', file);
                });
            }
            this.crudAction === 'Crear'
                ? this.crearTrabajoEnLaDb(formData)
                : this.editarTrabajoEnLaDb(formData);
        }
    }
    showSelectedImage(e) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.crudAction === 'Crear' && !this.jobForm.controls.image.value) {
                this.creationImageError = 'La imágen es obligatoria';
                return;
            }
            else {
                this.creationImageError = '';
            }
            let files = Array.from((_a = e.target) === null || _a === void 0 ? void 0 : _a.files);
            files = yield this.checkAmountOfFiles(files);
            this.acceptedFileTypes = yield this.checkFilesType(files);
            if (files.length && this.acceptedFileTypes) {
                this.imageToShow = [];
                this.fileToUpload = files;
                this.fileToUpload.forEach((file) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => this.imageToShow.push(reader.result);
                });
            }
            else {
                this.fileToUpload = [];
                this.imageToShow = ['../../../../../assets/no-image.png'];
            }
        });
    }
    checkAmountOfFiles(files) {
        return new Promise((resolve) => {
            if (files.length > 10) {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["customMessageAlert"])('Atención', 'No se pueden subir más de 10 imágenes', 'OK', 'info');
                files = files.slice(0, 10);
            }
            resolve(files);
        });
    }
    checkFilesType(files) {
        return new Promise((resolve) => {
            let validator = 'valido';
            files.forEach((file) => {
                if (file.type.includes('image/jpg') ||
                    file.type.includes('image/jpeg') ||
                    file.type.includes('image/png')) {
                }
                else {
                    validator = false;
                }
            });
            validator === 'valido' ? resolve(true) : resolve(false);
        });
    }
    getTrabajos() {
        this.httpSrv
            .getTypesOfJob()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((typesOfJobs) => {
            for (const typeOfJob of typesOfJobs.data) {
                this.categoriaDeTrabajo.push(typeOfJob);
                this.httpSrv
                    .getOneTypeOfJob(typeOfJob.id.toString())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
                    .subscribe((job) => {
                    job.meta.status.toString().includes('20')
                        ? this.setTableData(job)
                        : Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["unknownErrorAlert"])(job);
                }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["noConnectionAlert"])(err));
            }
        });
    }
    setTableData(job) {
        var _a;
        (_a = job === null || job === void 0 ? void 0 : job.data) === null || _a === void 0 ? void 0 : _a.Jobs.forEach((j) => {
            this.tableData.push({
                imagen: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_IMAGE_URL}/${j.image}`,
                item2: j.title ? j.title : 'Vacío',
                item3: j.description ? j.description : 'Vacío',
                item4: job.data.title,
                id: j.id,
            });
            this.jobs.push(j);
        });
    }
    recargarTrabajos(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.categoriaDeTrabajo = [];
            this.fileToUpload = [];
            this.jobs = [];
            this.isCreating = false;
            this.isEditing = false;
            this.getTrabajos();
        }
    }
    resetsetControls() {
        this.jobForm.controls.title.setValue('');
        this.jobForm.controls.description.setValue('');
        this.jobForm.controls.type.setValue('');
        this.jobForm.controls.image.setValue('');
        this.imageToShow = ['../../../../../assets/no-image.png'];
    }
    crearTrabajoRealizado() {
        this.crudAction = 'Crear';
        this.isCreating = true;
        this.isEditing = false;
    }
    crearTrabajoEnLaDb(formData) {
        this.adminPanelCrudService
            .create(formData, 'jobs')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarTrabajos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'trabajo realizado');
        }, (err) => {
            this.recargarTrabajos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["noConnectionAlert"])(err);
        });
    }
    editarTrabajoRealizado(id) {
        var _a;
        this.crudAction = 'Editar';
        this.isEditing = true;
        this.isCreating = false;
        const trabajo = (_a = this.jobs) === null || _a === void 0 ? void 0 : _a.find((job) => job.id === id);
        if (trabajo) {
            this.trabajoID = trabajo.id;
            this.jobForm.controls.title.setValue(trabajo.title);
            this.jobForm.controls.description.setValue(trabajo.description);
            this.jobForm.controls.type.setValue(trabajo.types_id);
            this.imageToShow = [`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_IMAGE_URL}/${trabajo.image}`];
        }
    }
    editarTrabajoEnLaDb(formData) {
        this.adminPanelCrudService
            .edit(this.trabajoID, formData, 'jobs')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarTrabajos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'trabajo realizado');
        }, (err) => {
            this.recargarTrabajos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["noConnectionAlert"])(err);
        });
    }
    borrarTrabajoRealizado(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: '¿Seguro querés elimninar el trabajo realizado seleccionado?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No`,
        }).then((result) => {
            result.isConfirmed ? this.borrarTrabajoDeLaDb(id) : null;
        });
    }
    borrarTrabajoDeLaDb(id) {
        this.adminPanelCrudService
            .delete(id, 'jobs')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarTrabajos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'trabajo realizado');
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_6__["noConnectionAlert"])(err));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
TrabajosRealizadosComponent.ɵfac = function TrabajosRealizadosComponent_Factory(t) { return new (t || TrabajosRealizadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_9__["AdminPanelCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
TrabajosRealizadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TrabajosRealizadosComponent, selectors: [["app-trabajos-realizados"]], viewQuery: function TrabajosRealizadosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
    } }, hostVars: 2, hostBindings: function TrabajosRealizadosComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete", 4, "ngIf"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], ["class", "col-md-4 mb-2", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["isEditingTemplate", ""], [1, "form-group"], ["formControlName", "type", 1, "form-control", "custom-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "col-md-4", "mb-2", 3, "click"], ["alt", "Servicio realizado", 1, "img-responsive", "image-gallery", 3, "src"], ["type", "file", "formControlName", "image", "multiple", "", 3, "hidden", "change"], ["imageInput", ""], [1, "p-2", "text-center"], [1, "text-danger"], ["type", "file", "formControlName", "image", 3, "hidden", "change"], [1, "input-group"], ["type", "text", "id", "exampleInputuname2", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["type", "text", "id", "exampleInputuname2", "placeholder", "Descripci\u00F3n", "formControlName", "description", "rows", "5", 1, "form-control"]], template: function TrabajosRealizadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrabajosRealizadosComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TrabajosRealizadosComponent_div_2_Template, 28, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvcy1yZWFsaXphZG9zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "PRKJ":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/trabajos-realizados/trabajos-realizados.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TrabajosRealizadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosModule", function() { return TrabajosRealizadosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _trabajos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajos-realizados-routing.module */ "TR16");
/* harmony import */ var _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trabajos-realizados.component */ "JFAf");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class TrabajosRealizadosModule {
}
TrabajosRealizadosModule.ɵfac = function TrabajosRealizadosModule_Factory(t) { return new (t || TrabajosRealizadosModule)(); };
TrabajosRealizadosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TrabajosRealizadosModule });
TrabajosRealizadosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _trabajos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrabajosRealizadosRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TrabajosRealizadosModule, { declarations: [_trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_2__["TrabajosRealizadosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _trabajos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrabajosRealizadosRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "TR16":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/trabajos-realizados/trabajos-realizados-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TrabajosRealizadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosRoutingModule", function() { return TrabajosRealizadosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajos-realizados.component */ "JFAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_1__["TrabajosRealizadosComponent"]
    }];
class TrabajosRealizadosRoutingModule {
}
TrabajosRealizadosRoutingModule.ɵfac = function TrabajosRealizadosRoutingModule_Factory(t) { return new (t || TrabajosRealizadosRoutingModule)(); };
TrabajosRealizadosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrabajosRealizadosRoutingModule });
TrabajosRealizadosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrabajosRealizadosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wqAm":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/main/pages/trabajos-realizados/trabajos-realizados.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TrabajosRealizadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosModule", function() { return TrabajosRealizadosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _trabajos_realizados_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajos-realizados-routing.module */ "7Ped");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ "bqc1");
/* harmony import */ var _trabajos_realizados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trabajos-realizados.component */ "zvYM");
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


/***/ }),

/***/ "zvYM":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/pages/trabajos-realizados/trabajos-realizados.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TrabajosRealizadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajosRealizadosComponent", function() { return TrabajosRealizadosComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/presentation-card/presentation-card.component */ "TuUY");







class TrabajosRealizadosComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.trabajosData = [];
        this.trabajoDataToPresent = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.getTypesOfJob();
    }
    getTypesOfJob() {
        this.httpService
            .getTypesOfJob()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((jobCategories) => {
            var _a;
            if (jobCategories.meta.status.toString().includes('20')) {
                this.trabajosComplete = jobCategories;
                this.trabajosData = jobCategories === null || jobCategories === void 0 ? void 0 : jobCategories.data;
                (_a = this.trabajosData) === null || _a === void 0 ? void 0 : _a.forEach((trabajo) => {
                    trabajo.url = `/main/trabajos-realizados/${trabajo.id}`;
                    trabajo.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${trabajo.image}`;
                });
                this.mapTrabajosRealizadosToPresent();
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["unknownErrorAlert"])(jobCategories);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err));
    }
    mapTrabajosRealizadosToPresent() {
        this.trabajosData.forEach((trabajo) => {
            this.trabajoDataToPresent.push({
                titulo: trabajo.title,
                urlFoto: trabajo.image,
                ruta: trabajo.url,
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
TrabajosRealizadosComponent.ɵfac = function TrabajosRealizadosComponent_Factory(t) { return new (t || TrabajosRealizadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
TrabajosRealizadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TrabajosRealizadosComponent, selectors: [["app-trabajos-realizados"]], decls: 5, vars: 1, consts: [[1, "main-servicios", "animate__animated", "animate__fadeIn", "animate__slow"], [1, "primary-dark"], [3, "presentationCard"]], template: function TrabajosRealizadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Trabajos realizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-presentation-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("presentationCard", ctx.trabajoDataToPresent);
    } }, directives: [_components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_6__["PresentationCardComponent"]], styles: [".main-servicios[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRyYWJham9zLXJlYWxpemFkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKIiwiZmlsZSI6InRyYWJham9zLXJlYWxpemFkb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zZXJ2aWNpb3Mge1xyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-trabajos-realizados-trabajos-realizados-module.js.map