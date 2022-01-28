(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-proyectos-proyectos-module"],{

/***/ "HW5h":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/proyectos/proyectos.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/projects.service */ "o1z6");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/users.service */ "3T3M");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");













function ProyectosComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onRecargar", function ProyectosComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r3.recargarProyectos($event); })("onCreate", function ProyectosComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.crearProyecto(); })("onEdit", function ProyectosComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.editarProyecto($event); })("onDelete", function ProyectosComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.borrarProyecto($event); })("onAddPayments", function ProyectosComponent_div_1_app_table_3_Template_app_table_onAddPayments_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.addPayment($event); })("onAddAssets", function ProyectosComponent_div_1_app_table_3_Template_app_table_onAddAssets_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.addAsset($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("encabezadosTabla", ctx_r2.encabezadosTabla)("filasTabla", ctx_r2.tableData)("totalSection", ctx_r2.projects == null ? null : ctx_r2.projects.length)("noImage", true)("addAssets", true)("addPayments", true);
} }
function ProyectosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProyectosComponent_div_1_app_table_3_Template, 1, 6, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.projects && ctx_r0.tableData);
} }
function ProyectosComponent_div_2_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", user_r22 == null ? null : user_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (user_r22 == null ? null : user_r22.first_name) + " " + (user_r22 == null ? null : user_r22.last_name) + " / email: " + (user_r22 == null ? null : user_r22.email), " ");
} }
function ProyectosComponent_div_2_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "T\u00EDtulo*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Este campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Debe tener al menos 10 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Total*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Este campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El valor debe ser mayor a 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_label_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cashflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Los formatos aceptados son PDF o XLSX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProyectosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProyectosComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Usuario*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "--Seleccionar un usuario--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ProyectosComponent_div_2_option_16_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ProyectosComponent_div_2_span_18_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProyectosComponent_div_2_label_20_Template, 2, 0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ProyectosComponent_div_2_span_24_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ProyectosComponent_div_2_span_25_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ProyectosComponent_div_2_label_27_Template, 2, 0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ProyectosComponent_div_2_span_31_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ProyectosComponent_div_2_label_33_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ProyectosComponent_div_2_span_37_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, ProyectosComponent_div_2_span_38_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ProyectosComponent_div_2_label_40_Template, 2, 0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProyectosComponent_div_2_Template_input_change_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.validateCashflowExtension($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ProyectosComponent_div_2_span_44_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProyectosComponent_div_2_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.recargarProyectos(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " Proyecto/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.proyectForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.selectData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.proyectForm.controls.user.errors == null ? null : ctx_r1.proyectForm.controls.user.errors.required) && ctx_r1.proyectForm.controls.user.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.proyectForm.controls.title.errors == null ? null : ctx_r1.proyectForm.controls.title.errors.required) && ctx_r1.proyectForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.proyectForm.controls.title.errors == null ? null : ctx_r1.proyectForm.controls.title.errors.minlength) && ctx_r1.proyectForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.proyectForm.controls.description.errors == null ? null : ctx_r1.proyectForm.controls.description.errors.minlength) && ctx_r1.proyectForm.controls.description.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.proyectForm.controls.total.errors == null ? null : ctx_r1.proyectForm.controls.total.errors.required) && ctx_r1.proyectForm.controls.total.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.proyectForm.controls.total.errors == null ? null : ctx_r1.proyectForm.controls.total.errors.min) && ctx_r1.proyectForm.controls.total.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.acceptedFileTypes);
} }
class ProyectosComponent {
    constructor(adminPanelCrudService, currencyPipe, fb, router, projectService, usersService) {
        this.adminPanelCrudService = adminPanelCrudService;
        this.currencyPipe = currencyPipe;
        this.fb = fb;
        this.router = router;
        this.projectService = projectService;
        this.usersService = usersService;
        this.someClass = true;
        this.selectData = [];
        this.projects = [];
        this.tableData = [];
        this.encabezadosTabla = [
            'Nombre del proyecto',
            'Anotaciones',
            'Total',
            'Debe',
            'Cashflow',
            'Usuario',
        ];
        this.isCreating = false;
        this.isEditing = false;
        this.crudAction = '';
        this.fileToUpload = null;
        this.acceptedFileTypes = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.createForm();
    }
    createForm() {
        this.proyectForm = this.fb.group({
            title: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
            total: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)]],
            cashflow: [undefined],
            user: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getProyects();
        this.getSelectData();
    }
    getSelectData() {
        this.usersService
            .getAllUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe({
            next: (res) => {
                var _a;
                (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.forEach((user) => {
                    const data = {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                    };
                    this.selectData.push(data);
                });
            },
            error: (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["unknownErrorAlert"])(err),
        });
    }
    formSubmit() {
        var _a, _b, _c, _d, _e;
        this.proyectForm.markAllAsTouched();
        if (this.proyectForm.valid) {
            const formData = new FormData();
            formData.append('title', (_a = this.proyectForm.controls.title) === null || _a === void 0 ? void 0 : _a.value);
            formData.append('total', (_b = this.proyectForm.controls.total) === null || _b === void 0 ? void 0 : _b.value);
            formData.append('user', (_c = this.proyectForm.controls.user) === null || _c === void 0 ? void 0 : _c.value);
            this.fileToUpload
                ? formData.append('cashflow', this.fileToUpload)
                : null;
            ((_d = this.proyectForm.controls.description) === null || _d === void 0 ? void 0 : _d.value) ? formData.append('description', (_e = this.proyectForm.controls.description) === null || _e === void 0 ? void 0 : _e.value)
                : null;
            this.crudAction === 'Crear'
                ? this.crearProyectoEnLaDb(formData)
                : this.editarProyectoEnLaDb(formData);
        }
    }
    validateCashflowExtension(e) {
        var _a;
        const file = (_a = e.target) === null || _a === void 0 ? void 0 : _a.files[0];
        this.acceptedFileTypes =
            file.type ===
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                file.type === 'application/pdf';
        this.acceptedFileTypes
            ? (this.fileToUpload = file)
            : (this.fileToUpload = null);
    }
    getProyects() {
        this.projectService
            .getAllProjects()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            var _a;
            if ((_a = res === null || res === void 0 ? void 0 : res.meta) === null || _a === void 0 ? void 0 : _a.status.toString().includes('20')) {
                this.projects = res === null || res === void 0 ? void 0 : res.data;
                this.setTableData();
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["unknownErrorAlert"])(res);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
    }
    setTableData() {
        this.projects.forEach((proyecto) => {
            var _a, _b, _c, _d;
            return this.tableData.push({
                imagen: '../../../../../assets/no-image.png',
                id: proyecto.id,
                item2: proyecto.title ||
                    `Proyecto usuario: ${(_a = proyecto.Users) === null || _a === void 0 ? void 0 : _a.first_name} ${(_b = proyecto.Users) === null || _b === void 0 ? void 0 : _b.last_name}`,
                item3: proyecto.description || '-',
                item4: proyecto.total ? this.setCurrencyFormat(proyecto.total) : 'NULL',
                item6: proyecto.balance !== null || proyecto.balance !== undefined
                    ? this.setCurrencyFormat(proyecto.balance)
                    : 'NULL',
                item7: proyecto.cashflow ? 'Si' : 'No',
                item8: `${(_c = proyecto.Users) === null || _c === void 0 ? void 0 : _c.first_name} ${(_d = proyecto.Users) === null || _d === void 0 ? void 0 : _d.last_name}`,
            });
        });
    }
    setCurrencyFormat(total) {
        return this.currencyPipe.transform(total, '$');
    }
    recargarProyectos(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.projects = [];
            this.isCreating = false;
            this.isEditing = false;
            this.getProyects();
        }
    }
    resetsetControls() {
        var _a, _b, _c, _d;
        (_a = this.proyectForm.controls.title) === null || _a === void 0 ? void 0 : _a.setValue('');
        (_b = this.proyectForm.controls.total) === null || _b === void 0 ? void 0 : _b.setValue('');
        (_c = this.proyectForm.controls.description) === null || _c === void 0 ? void 0 : _c.setValue('');
        (_d = this.proyectForm.controls.user) === null || _d === void 0 ? void 0 : _d.setValue('');
    }
    crearProyecto() {
        this.crudAction = 'Crear';
        this.isCreating = true;
        this.isEditing = false;
    }
    crearProyectoEnLaDb(formData) {
        this.adminPanelCrudService
            .create(formData, 'projects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarProyectos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'proyecto');
        }, (err) => {
            this.recargarProyectos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err);
        });
    }
    editarProyecto(id) {
        var _a;
        this.crudAction = 'Editar';
        this.isEditing = true;
        this.isCreating = false;
        const proyecto = this.projects.find((proj) => proj.id === id);
        if (proyecto) {
            this.projectID = id;
            this.proyectForm.controls.title.setValue(proyecto.title);
            this.proyectForm.controls.title.setValue(proyecto.description);
            this.proyectForm.controls.total.setValue(proyecto.total);
            this.proyectForm.controls.user.setValue((_a = proyecto.Users) === null || _a === void 0 ? void 0 : _a.id);
        }
    }
    editarProyectoEnLaDb(formData) {
        this.adminPanelCrudService
            .edit(this.projectID, formData, 'projects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarProyectos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'proyecto');
        }, (err) => {
            this.recargarProyectos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err);
        });
    }
    borrarProyecto(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '¿Seguro querés elimninar el proyecto seleccionado?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No`,
        }).then((result) => {
            result.isConfirmed ? this.borrarProyectoEnLaDb(id) : null;
        });
    }
    borrarProyectoEnLaDb(id) {
        this.adminPanelCrudService
            .delete(id, 'projects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarProyectos(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'proyecto');
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
    }
    addPayment(projectId) {
        this.router.navigateByUrl('/admin/proyectos/payments', {
            state: { id: projectId },
        });
    }
    addAsset(projectId) {
        this.router.navigateByUrl('/admin/proyectos/assets', {
            state: { id: projectId },
        });
    }
    alertFailureOrSuccess(status) {
        if (status === 200 || status === 201) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('¡Excelente!', 'El proyecto se eliminó correctamente', 'success');
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('¡Lo sentimos!', 'No pudimos cargar la información, por favor recarga la página', 'error');
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) { return new (t || ProyectosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_6__["AdminPanelCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_9__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"])); };
ProyectosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProyectosComponent, selectors: [["app-proyectos"]], hostVars: 2, hostBindings: function ProyectosComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], ["title", "Proyectos", 3, "encabezadosTabla", "filasTabla", "totalSection", "noImage", "addAssets", "addPayments", "onRecargar", "onCreate", "onEdit", "onDelete", "onAddPayments", "onAddAssets", 4, "ngIf"], ["title", "Proyectos", 3, "encabezadosTabla", "filasTabla", "totalSection", "noImage", "addAssets", "addPayments", "onRecargar", "onCreate", "onEdit", "onDelete", "onAddPayments", "onAddAssets"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "userSelectInput"], ["formControlName", "user", "id", "userSelectInput", 1, "form-control", "custom-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], ["for", "titleInput", 4, "ngIf"], [1, "input-group"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "title", "id", "titleInput", 1, "form-control"], ["for", "descriptionTextArea", 4, "ngIf"], ["id", "descriptionTextArea", "placeholder", "Descripci\u00F3n", "formControlName", "description", "cols", "30", "rows", "5", 1, "form-control"], ["for", "totalInput", 4, "ngIf"], ["type", "number", "placeholder", "Total", "formControlName", "total", "id", "totalInput", 1, "form-control"], ["for", "cashFlowInput", 4, "ngIf"], ["type", "file", "placeholder", "Cashflow", "formControlName", "cashflow", "id", "cashFlowInput", 1, "form-control", 3, "change"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "text-danger"], ["for", "titleInput"], ["for", "descriptionTextArea"], ["for", "totalInput"], ["for", "cashFlowInput"]], template: function ProyectosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProyectosComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProyectosComponent_div_2_Template, 50, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm95ZWN0b3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Ptbo":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/proyectos/proyectos.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProyectosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosModule", function() { return ProyectosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyectos-routing.module */ "qo1N");
/* harmony import */ var _proyectos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyectos.component */ "HW5h");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProyectosModule {
}
ProyectosModule.ɵfac = function ProyectosModule_Factory(t) { return new (t || ProyectosModule)(); };
ProyectosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProyectosModule });
ProyectosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProyectosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProyectosModule, { declarations: [_proyectos_component__WEBPACK_IMPORTED_MODULE_2__["ProyectosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProyectosRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();


/***/ }),

/***/ "qo1N":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/proyectos/proyectos-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProyectosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosRoutingModule", function() { return ProyectosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _proyectos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyectos.component */ "HW5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _proyectos_component__WEBPACK_IMPORTED_MODULE_1__["ProyectosComponent"],
    },
];
class ProyectosRoutingModule {
}
ProyectosRoutingModule.ɵfac = function ProyectosRoutingModule_Factory(t) { return new (t || ProyectosRoutingModule)(); };
ProyectosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProyectosRoutingModule });
ProyectosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProyectosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-proyectos-proyectos-module.js.map