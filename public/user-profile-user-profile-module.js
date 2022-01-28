(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "0st6":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main/pages/auth/user-profile/user-profile.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile-routing.module */ "H3Tw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.component */ "sWGQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "sBlo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class UserProfileModule {
}
UserProfileModule.ɵfac = function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); };
UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UserProfileModule });
UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["UserProfileRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["UserProfileRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();


/***/ }),

/***/ "H3Tw":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/main/pages/auth/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component */ "sWGQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"]
    }];
class UserProfileRoutingModule {
}
UserProfileRoutingModule.ɵfac = function UserProfileRoutingModule_Factory(t) { return new (t || UserProfileRoutingModule)(); };
UserProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserProfileRoutingModule });
UserProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "M4oq":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/main/pages/auth/components/proyects/proyects.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProyectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectsComponent", function() { return ProyectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _admin_panel_services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../admin-panel/services/projects.service */ "o1z6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ProyectsComponent_div_3_div_21_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const encabezado_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", encabezado_r8, " ");
} }
function ProyectsComponent_div_3_div_21_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const payment_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r9.wayToPay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 11, payment_r9.datetime, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", payment_r9.receipt, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r9.coin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, payment_r9.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r9.iva ? "Si" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 16, payment_r9.subTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 18, payment_r9.cotizacionUsd));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 20, payment_r9.totalUsd));
} }
function ProyectsComponent_div_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProyectsComponent_div_3_div_21_th_8_Template, 2, 1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProyectsComponent_div_3_div_21_tr_10_Template, 28, 22, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proyecto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.encabezados);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyecto_r1.Payments);
} }
function ProyectsComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectsComponent_div_3_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const proyecto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.descargarCashFlow(proyecto_r1.cashflow); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Descargar cashflow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProyectsComponent_div_3_div_23_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", a_r15.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProyectsComponent_div_3_div_23_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", a_r15.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("autoplay", false)("muted", true)("loop", true)("controls", true);
} }
function ProyectsComponent_div_3_div_23_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProyectsComponent_div_3_div_23_div_5_div_2_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProyectsComponent_div_3_div_23_div_5_div_3_Template, 2, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r15 = ctx.$implicit;
    const proyecto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r14.showGalleryCard(a_r15, proyecto_r1) ? "display-block" : "display-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.showGalleryImage(a_r15, proyecto_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.showGalleryVideo(a_r15, proyecto_r1));
} }
function ProyectsComponent_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Galer\u00EDa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProyectsComponent_div_3_div_23_div_5_Template, 4, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.assets);
} }
function ProyectsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProyectsComponent_div_3_div_21_Template, 11, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProyectsComponent_div_3_div_22_Template, 4, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProyectsComponent_div_3_div_23_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proyecto_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proyecto_r1.title ? proyecto_r1.title : "Proyecto sin t\u00EDtulo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.porcentaje[i_r2], "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.progressBarStyle[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, proyecto_r1.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!proyecto_r1.balance ? "text-success" : "text-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !proyecto_r1.balance ? "\u00A1Estas al d\u00EDa!" : "Falta pagar", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!proyecto_r1.balance ? "ti ti-face-smile" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, proyecto_r1.balance));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", proyecto_r1.Payments == null ? null : proyecto_r1.Payments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", proyecto_r1.cashflow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.assets.length);
} }
class ProyectsComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.onDownloadCashflow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.encabezados = [
            'Descripción',
            'Detalle de pago',
            'Fecha',
            'Factura',
            'Subtotal',
            'Moneda',
            'IVA',
            'Total',
            'Cotización USD',
            'Total en USD',
        ];
        this.proyectos = [];
        this.assets = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    set setProyectos(user) {
        if (user && user.projects) {
            this.proyectos = user.projects;
        }
    }
    ngOnInit() {
        this.setAssets();
    }
    get progressBarStyle() {
        var _a;
        const pb_Style = [];
        (_a = this.proyectos) === null || _a === void 0 ? void 0 : _a.forEach((pr) => {
            const num = this.setPorcentaje(pr.total, pr.balance);
            pb_Style.push(`width: ${num}%`);
        });
        return pb_Style;
    }
    get porcentaje() {
        var _a;
        const porcentajes = [];
        (_a = this.proyectos) === null || _a === void 0 ? void 0 : _a.forEach((pr) => {
            const num = this.setPorcentaje(pr.total, pr.balance);
            porcentajes.push(num);
        });
        return porcentajes;
    }
    setPorcentaje(total, pagado) {
        let result = total - pagado;
        result = (result * 100) / total;
        return Math.round(result);
    }
    descargarCashFlow(cashflow) {
        this.onDownloadCashflow.emit(cashflow);
    }
    setAssets() {
        var _a;
        (_a = this.proyectos) === null || _a === void 0 ? void 0 : _a.forEach((proj) => {
            proj.Assets.forEach((asset) => {
                this.projectsService
                    .getAssetsDeUnProyecto(asset.asset)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
                    .subscribe({
                    next: (blob) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onload = () => {
                            this.assets.push({
                                base64: reader.result,
                                project_id: proj.id,
                                type: blob.type,
                                asset_id: asset.id,
                            });
                        };
                    },
                    error: (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["unknownErrorAlert"])(err),
                });
            });
        });
    }
    showGalleryCard(asset, proyecto) {
        return asset.project_id === proyecto.id;
    }
    showGalleryImage(asset, proyecto) {
        return asset.type.includes('image') && asset.project_id === proyecto.id;
    }
    showGalleryVideo(asset, proyecto) {
        return asset.type.includes('video') && asset.project_id === proyecto.id;
    }
    expandImage(img) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            imageUrl: img,
            imageWidth: 400,
            imageHeight: 400,
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
        });
    }
}
ProyectsComponent.ɵfac = function ProyectsComponent_Factory(t) { return new (t || ProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_panel_services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"])); };
ProyectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProyectsComponent, selectors: [["app-proyects"]], inputs: { setProyectos: "setProyectos" }, outputs: { onDownloadCashflow: "onDownloadCashflow" }, decls: 4, vars: 1, consts: [[1, "font-medium", "m-t-30"], [4, "ngFor", "ngForOf"], [1, "m-t-30", "primary-dark"], [1, "pull-right"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bgc-primary-dark"], [1, "m-t-10", "primary-dark"], [1, "pull-right", "primary-dark"], [1, "m-t-10"], ["class", "row animated fadeIn rows-container", 4, "ngIf"], ["class", "cashflow m-t-5 b-b-5", 4, "ngIf"], ["class", "row proyect-carrousel m-t-5 b-b-5", 4, "ngIf"], [1, "row", "animated", "fadeIn", "rows-container"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered"], ["class", "text-nowrap primary-dark", 4, "ngFor", "ngForOf"], [1, "text-nowrap", "primary-dark"], [1, "cashflow", "m-t-5", "b-b-5"], [1, "btn", "bgc-primary-dark", "text-white", 3, "click"], [1, "ti", "ti-file"], [1, "row", "proyect-carrousel", "m-t-5", "b-b-5"], [1, "card-group"], ["class", "col-lg-4 col-md-6", 3, "class", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "card", "m-0", "p-0"], [4, "ngIf"], ["class", "embed-responsive embed-responsive-21by9", 4, "ngIf"], ["alt", "Construcci\u00F3n", 1, "img-responsive", 3, "src"], [1, "embed-responsive", "embed-responsive-21by9"], [1, "embed-responsive-item", 3, "src", "autoplay", "muted", "loop", "controls"]], template: function ProyectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Proyectos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProyectsComponent_div_3_Template, 24, 18, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n}\n\n.cashflow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n}\n\n.card[_ngcontent-%COMP%]   .embed-responsive[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .embed-responsive-21by9[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: black;\n}\n\n.card[_ngcontent-%COMP%]   .embed-responsive[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .embed-responsive-21by9[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.display-block[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxccHJveWVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtBQUdGOztBQUZFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFJSjs7QUFGRTs7RUFFRSxZQUFBO0VBQ0EsdUJBQUE7QUFJSjs7QUFISTs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU1OOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtBQUlGIiwiZmlsZSI6InByb3llY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbn1cclxuLmNhc2hmbG93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIC5lbWJlZC1yZXNwb25zaXZlLFxyXG4gIC5lbWJlZC1yZXNwb25zaXZlLTIxYnk5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdmlkZW8ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRpc3BsYXktbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRpc3BsYXktYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "sBlo":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main/pages/auth/components/components.module.ts ***!
  \*************************************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyects/proyects.component */ "M4oq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_1__["ProyectsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_1__["ProyectsComponent"]] }); })();


/***/ }),

/***/ "sWGQ":
/*!********************************************************************************!*\
  !*** ./src/app/modules/main/pages/auth/user-profile/user-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auth.service */ "IT5Z");
/* harmony import */ var _admin_panel_services_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../admin-panel/services/projects.service */ "o1z6");
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/user-store.service */ "R3Qk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/proyects/proyects.component */ "M4oq");














function UserProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Formato de im\u00E1gen inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Administrar p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-proyects", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDownloadCashflow", function UserProfileComponent_ng_container_58_Template_app_proyects_onDownloadCashflow_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.descargarCashflow($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("setProyectos", ctx_r3.user);
} }
function UserProfileComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Proyectos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Todav\u00EDa no tenes un proyecto asignado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00A1No te quedes esperando y escribinos!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 3 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 3 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe contenter al menos 7 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "N\u00FAmero m\u00E1ximo 999.999.999");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Por favor ingres\u00E1 un email v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "La contrase\u00F1a debe tener un m\u00EDnimo de 8 caracteres, incluyendo una min\u00FAscula, una may\u00FAscula, un n\u00FAmero y un s\u00EDmbolo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_100_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " La contrase\u00F1a debe tener al menos 8 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_100_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos un n\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_100_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos una letra min\u00FAscula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_100_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " La contrase\u00F1a debe tener al menos una letra may\u00FAscula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_100_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " La contrase\u00F1a debe tener al menos alguno de los siguientes s\u00EDmbolos *._%+- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, UserProfileComponent_div_100_li_2_Template, 2, 0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UserProfileComponent_div_100_li_3_Template, 2, 0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UserProfileComponent_div_100_li_4_Template, 2, 0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, UserProfileComponent_div_100_li_5_Template, 2, 0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UserProfileComponent_div_100_li_6_Template, 2, 0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.showStrongPasswordErrorMsgs());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.showStrongPasswordErrorMsgs());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.showStrongPasswordErrorMsgs());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.showStrongPasswordErrorMsgs());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.showStrongPasswordErrorMsgs());
} }
function UserProfileComponent_div_101_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_101_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Las contrase\u00F1as no coinciden");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_div_101_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.showRepeatPassword(_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, UserProfileComponent_div_101_span_8_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, UserProfileComponent_div_101_span_9_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r18.repeatPasswordEye);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r18.editProfileForm.controls.passwordRepeat.errors == null ? null : ctx_r18.editProfileForm.controls.passwordRepeat.errors.required) && ctx_r18.editProfileForm.controls.passwordRepeat.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r18.editProfileForm.controls.passwordRepeat.errors == null ? null : ctx_r18.editProfileForm.controls.passwordRepeat.errors.notMatch) && ctx_r18.editProfileForm.controls.passwordRepeat.touched);
} }
class UserProfileComponent {
    constructor(authService, fb, projectsService, renderer, userStore) {
        this.authService = authService;
        this.fb = fb;
        this.projectsService = projectsService;
        this.renderer = renderer;
        this.userStore = userStore;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mostrarRepetirContrasena = false;
        this.formatoImagenNoAceptado = false;
        this.passwordEye = 'fa fa-eye-slash';
        this.userWantsToSeePassword = false;
        this.repeatPasswordEye = 'fa fa-eye-slash';
        this.userWantsToSeeRepeatPassword = false;
        this.setUserAndCreateForm();
    }
    setUserAndCreateForm() {
        this.userStore.loggedUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            if (res.id) {
                this.user = res;
                this.userAvatar = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_IMAGE_URL}/users/${res.avatar}`;
                this.userName = res.nombre;
                this.userLastName = res.apellido;
                this.userEmail = res.email;
                this.userPhone = res.phone;
                this.userProjects = res.projects;
                this.createForm();
            }
            else {
                this.createForm();
            }
        });
    }
    createForm() {
        var _a, _b, _c, _d, _e;
        this.editProfileForm = this.fb.group({
            first_name: [
                (_a = this.user) === null || _a === void 0 ? void 0 : _a.nombre,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)],
            ],
            last_name: [
                (_b = this.user) === null || _b === void 0 ? void 0 : _b.apellido,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)],
            ],
            dni: [
                (_c = this.user) === null || _c === void 0 ? void 0 : _c.dni,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(999999999),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1000000),
                ],
            ],
            email: [
                (_d = this.user) === null || _d === void 0 ? void 0 : _d.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailPattern)],
            ],
            phone: [(_e = this.user) === null || _e === void 0 ? void 0 : _e.phone],
            password: [''],
            passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        }, {
            validator: [
                this.passwordMatchFormValidator,
                this.validateStrongPassword,
            ],
        });
    }
    passwordMatchFormValidator(form) {
        const pass1Control = form.get('password');
        const pass2Control = form.get('passwordRepeat');
        if (pass1Control.value === pass2Control.value) {
            pass2Control.setErrors(null);
        }
        else {
            pass2Control.setErrors({ notMatch: true });
        }
    }
    validateStrongPassword(form) {
        const password = form.get('password');
        if (password === null || password === void 0 ? void 0 : password.value) {
            if (!/\d/.test(password === null || password === void 0 ? void 0 : password.value)) {
                password === null || password === void 0 ? void 0 : password.setErrors({ notDigits: true });
            }
            else if (!/[a-z]/.test(password === null || password === void 0 ? void 0 : password.value)) {
                password === null || password === void 0 ? void 0 : password.setErrors({ noLowercase: true });
            }
            else if (!/[A-Z]/.test(password === null || password === void 0 ? void 0 : password.value)) {
                password === null || password === void 0 ? void 0 : password.setErrors({ noUppercase: true });
            }
            else if (!/[*._%+-]/.test(password === null || password === void 0 ? void 0 : password.value)) {
                password === null || password === void 0 ? void 0 : password.setErrors({ notSymbols: true });
            }
            else if ((password === null || password === void 0 ? void 0 : password.value.length) < 8) {
                password === null || password === void 0 ? void 0 : password.setErrors({ minlength: true });
            }
        }
    }
    showStrongPasswordErrorMsgs() {
        var _a, _b, _c, _d, _e;
        return (this.editProfileForm.controls.password.touched &&
            (((_a = this.editProfileForm.controls.password.errors) === null || _a === void 0 ? void 0 : _a.notDigits) || ((_b = this.editProfileForm.controls.password.errors) === null || _b === void 0 ? void 0 : _b.noLowercase) || ((_c = this.editProfileForm.controls.password.errors) === null || _c === void 0 ? void 0 : _c.noUppercase) || ((_d = this.editProfileForm.controls.password.errors) === null || _d === void 0 ? void 0 : _d.notSymbols) || ((_e = this.editProfileForm.controls.password.errors) === null || _e === void 0 ? void 0 : _e.minlength)));
    }
    showPassword(e) {
        this.userWantsToSeePassword = !this.userWantsToSeePassword;
        this.userWantsToSeePassword
            ? (this.passwordEye = 'fa fa-eye')
            : (this.passwordEye = 'fa fa-eye-slash');
        this.userWantsToSeePassword ? (e.type = 'text') : (e.type = 'password');
    }
    showRepeatPassword(e) {
        this.userWantsToSeeRepeatPassword = !this.userWantsToSeeRepeatPassword;
        this.userWantsToSeeRepeatPassword
            ? (this.repeatPasswordEye = 'fa fa-eye')
            : (this.repeatPasswordEye = 'fa fa-eye-slash');
        this.userWantsToSeeRepeatPassword
            ? (e.type = 'text')
            : (e.type = 'password');
    }
    cambiarFoto(e) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('avatar', file);
        if (formData.get('avatar')) {
            switch (file === null || file === void 0 ? void 0 : file.type) {
                case 'image/jpg':
                case 'image/png':
                case 'image/jpeg':
                    this.formatoImagenNoAceptado = false;
                    this.actualizarImagenEnDB(formData);
                    return;
                default:
                    this.formatoImagenNoAceptado = true;
                    break;
            }
        }
    }
    actualizarImagenEnDB(formData) {
        this.authService
            .actualizarImagenUsuario(formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((user) => {
            if (user.meta.status.toString().includes('20')) {
                this.modifyLoggedUser(user === null || user === void 0 ? void 0 : user.data);
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["unknownErrorAlert"])(user);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
    }
    cambiarPerfil() {
        this.editProfileForm.markAllAsTouched();
        if (this.editProfileForm.valid) {
            this.editProfileForm.controls.password.value
                ? this.confirmAndModifyLoggedUser()
                : this.guardarCambiosEnBaseDeDatos();
        }
    }
    guardarCambiosEnBaseDeDatos() {
        this.authService
            .actualizarUsuario(this.editProfileForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            var _a;
            if ((_a = res === null || res === void 0 ? void 0 : res.meta) === null || _a === void 0 ? void 0 : _a.status.toString().includes('20')) {
                this.modifyLoggedUser(res === null || res === void 0 ? void 0 : res.data);
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["unknownErrorAlert"])(res);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
    }
    confirmAndModifyLoggedUser() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '¿Estás seguro que querés cambiar tu contraseña?',
            showDenyButton: true,
            confirmButtonText: 'Si, continuar',
            denyButtonText: `No`,
        })
            .then((result) => {
            if (result.isConfirmed) {
                this.guardarCambiosEnBaseDeDatos();
            }
        })
            .catch((err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
    }
    modifyLoggedUser(usuario) {
        const loggedUser = {
            id: usuario.id,
            nombre: usuario.first_name,
            apellido: usuario.last_name,
            email: usuario.email,
            role: usuario.role,
            dni: usuario.dni,
            avatar: usuario.avatar,
            phone: usuario.phone,
            projects: usuario.Projects,
        };
        this.userStore.setUser(loggedUser);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('¡Excelente!', 'Actualizamos tus datos sin problemas', 'success');
    }
    toggleRepetirConstrasena() {
        this.editProfileForm.controls.password.value
            ? (this.mostrarRepetirContrasena = true)
            : (this.mostrarRepetirContrasena = false);
    }
    descargarCashflow(cashflow) {
        this.projectsService
            .getCashflow(cashflow)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            const newBlob = new Blob([res], { type: res.type });
            const data = window.URL.createObjectURL(newBlob);
            const fileName = 'Cashflow';
            let link = this.renderer.createElement('a');
            link.href = data;
            link.download = fileName;
            link.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window,
            }));
            setTimeout(() => {
                window.URL.revokeObjectURL(data);
                link.remove();
                this.renderer.destroy();
            }, 100);
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
    }
    logout() {
        this.userStore.logout();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_admin_panel_services_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_store_service__WEBPACK_IMPORTED_MODULE_9__["UserStoreService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 106, vars: 30, consts: [[1, "row", "animate__animated", "animate__fadeIn", "animate__slow"], [1, "col-lg-4", "col-xlg-3", "col-md-5"], [1, "card"], [1, "card-body"], [1, "m-t-30", "text-center"], ["width", "150", "height", "150", 1, "img-circle", "pointer", 3, "src", "click"], ["class", "p-2", 4, "ngIf"], ["type", "file", 1, "d-none", 3, "change"], ["inputFoto", ""], [1, "card-title", "m-t-10", "primary-dark"], [1, "text-muted"], [1, "text-muted", "p-t-30", "db", 3, "hidden"], [3, "hidden"], [1, "col-lg-8", "col-xlg-9", "col-md-7"], ["role", "tablist", 1, "nav", "nav-tabs", "profile-tab"], [1, "nav-item"], ["data-toggle", "tab", "href", "#profile", "role", "tab", "aria-expanded", "true", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#settings", "role", "tab", "aria-expanded", "false", 1, "nav-link"], ["class", "nav-item bgc-primary", 4, "ngIf"], [1, "nav-item", "bg-danger", "text-white", "pointer", 3, "click"], ["id", "admin-pag", "aria-expanded", "false", 1, "nav-link"], [1, "tab-content"], ["id", "profile", "role", "tabpanel", "aria-expanded", "true", 1, "tab-pane", "active"], [1, "row"], [1, "col-md-4", "col-xs-6", "b-r"], [1, "col-md-4", "col-xs-6"], [4, "ngIf", "ngIfElse"], ["noProjects", ""], ["id", "settings", "role", "tabpanel", "aria-expanded", "false", 1, "tab-pane"], [1, "form-horizontal", "form-material", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-md-12"], ["type", "text", "formControlName", "first_name", "placeholder", "Nombre", 1, "form-control", "form-control-line", "primary-dark"], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "last_name", "placeholder", "Apellido", 1, "form-control", "form-control-line", "primary-dark"], ["type", "text", "formControlName", "dni", "placeholder", "DNI", 1, "form-control", "form-control-line", "primary-dark"], ["type", "email", "formControlName", "email", "placeholder", "Email", "name", "example-email", "id", "example-email", 1, "form-control", "form-control-line", "primary-dark"], ["type", "number", "placeholder", "Tel\u00E9fono", "formControlName", "phone", 1, "form-control", "form-control-line", "primary-dark"], [1, "input-group"], ["type", "password", "placeholder", "Escrib\u00ED tu contrase\u00F1a nueva", "formControlName", "password", 1, "form-control", "primary-dark", 3, "change"], ["inputPassword", ""], [1, "input-group-addon"], [3, "click"], ["class", "form-group animate__animated animate__slideInLeft animate__fast", 4, "ngIf"], [1, "col-sm-12"], ["type", "submit", 1, "btn", "btn-success"], [1, "text-danger"], [1, "nav-item", "bgc-primary"], ["id", "admin-pag", "routerLink", "/admin", "aria-expanded", "false", 1, "nav-link"], [3, "setProyectos", "onDownloadCashflow"], [1, "font-medium", "m-t-30"], [1, "m-t-30"], [1, "form-text", "text-danger", "list-unstyled"], [4, "ngIf"], [1, "form-group", "animate__animated", "animate__slideInLeft", "animate__fast"], ["type", "password", "placeholder", "Repet\u00ED tu contrase\u00F1a nueva", "formControlName", "passwordRepeat", 1, "form-control"], ["inputRepeatPassword", ""]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UserProfileComponent_div_6_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_7_listener($event) { return ctx.cambiarFoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Yo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Editar perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, UserProfileComponent_li_31_Template, 3, 0, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_Template_li_click_32_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Cerrar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Nombre completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, UserProfileComponent_ng_container_58_Template, 2, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, UserProfileComponent_ng_template_59_Template, 7, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_63_listener() { return ctx.cambiarPerfil(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, UserProfileComponent_span_68_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, UserProfileComponent_span_69_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, UserProfileComponent_span_74_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, UserProfileComponent_span_75_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, UserProfileComponent_span_80_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, UserProfileComponent_span_81_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, UserProfileComponent_span_82_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, UserProfileComponent_span_87_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, UserProfileComponent_span_88_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserProfileComponent_Template_input_change_95_listener() { return ctx.toggleRepetirConstrasena(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserProfileComponent_Template_i_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](96); return ctx.showPassword(_r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, UserProfileComponent_span_99_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, UserProfileComponent_div_100_Template, 7, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](101, UserProfileComponent_div_101_Template, 10, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " Actualizar perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.userAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formatoImagenNoAceptado);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.userName, " ", ctx.userLastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.userPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.userPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.role) === "admin" || (ctx.user == null ? null : ctx.user.role) === "master");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.userName, " ", ctx.userLastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userProjects)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.first_name.errors == null ? null : ctx.editProfileForm.controls.first_name.errors.required) && ctx.editProfileForm.controls.first_name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.first_name.errors == null ? null : ctx.editProfileForm.controls.first_name.errors.minlength) && ctx.editProfileForm.controls.first_name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.last_name.errors == null ? null : ctx.editProfileForm.controls.last_name.errors.required) && ctx.editProfileForm.controls.last_name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.last_name.errors == null ? null : ctx.editProfileForm.controls.last_name.errors.minlength) && ctx.editProfileForm.controls.last_name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.dni.errors == null ? null : ctx.editProfileForm.controls.dni.errors.required) && ctx.editProfileForm.controls.dni.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.dni.errors == null ? null : ctx.editProfileForm.controls.dni.errors.min) && ctx.editProfileForm.controls.dni.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.dni.errors == null ? null : ctx.editProfileForm.controls.dni.errors.max) && ctx.editProfileForm.controls.dni.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.email.errors == null ? null : ctx.editProfileForm.controls.email.errors.required) && ctx.editProfileForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.email.errors == null ? null : ctx.editProfileForm.controls.email.errors.pattern) && ctx.editProfileForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.passwordEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.editProfileForm.controls.password.errors == null ? null : ctx.editProfileForm.controls.password.errors.pattern) && ctx.editProfileForm.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showStrongPasswordErrorMsgs());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mostrarRepetirContrasena);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_12__["ProyectsComponent"]], styles: ["#admin-pag[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FkbWluLXBhZyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map