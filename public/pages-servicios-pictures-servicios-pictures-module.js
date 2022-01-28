(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servicios-pictures-servicios-pictures-module"],{

/***/ "CQpn":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios-pictures/servicios-pictures.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServiciosPicturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPicturesModule", function() { return ServiciosPicturesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicios_pictures_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios-pictures-routing.module */ "aFq9");
/* harmony import */ var _servicios_pictures_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios-pictures.component */ "a+H1");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ServiciosPicturesModule {
}
ServiciosPicturesModule.ɵfac = function ServiciosPicturesModule_Factory(t) { return new (t || ServiciosPicturesModule)(); };
ServiciosPicturesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ServiciosPicturesModule });
ServiciosPicturesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _servicios_pictures_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosPicturesRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ServiciosPicturesModule, { declarations: [_servicios_pictures_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosPicturesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _servicios_pictures_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosPicturesRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class HttpService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Obtiene las zonas en las cuales se venden lotes y/o construyen casas
     *
     * @return {*}  {Observable<PostalZones>}
     * @memberof HttpService
     */
    getAllZones() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/categories`);
    }
    /**
     * Obtiene los lotes relacionados a una zona
     *
     * @param zonaId: string
     * @return {*}  {Observable<Lotes>}
     * @memberof HttpService
     */
    getLotes(zonaId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/categories/${zonaId}`);
    }
    /**
     * Obtiene el detalle de un lote particular
     *
     * @param loteId: string
     * @return {*}  {Observable<BatchComplete>}
     * @memberof HttpService
     */
    getDetalleLote(loteId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/batches/${loteId}`);
    }
    /**
     * Obtiene todos los servicios que ofrece la compañía
     *
     * @return {*}  {Observable<Services>}
     * @memberof HttpService
     */
    getAllServices() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/services`);
    }
    getOneService(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/services/${id}`);
    }
    /**
     * Obtiene todos los trabajos realizados por la compañía
     *
     * @return {*}  {Observable<TypesOfJobs>}
     * @memberof HttpService
     */
    getTypesOfJob() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/types`);
    }
    /**
     * Obtiene uno de los tipos de trabajo realizados por la compañía
     *
     * @param jobTypeID: string
     * @return {*}  {Observable<Job>}
     * @memberof HttpService
     */
    getOneTypeOfJob(jobTypeID) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/types/${jobTypeID}`);
    }
    /**
     * Obtiene los artículos de interés creados por la compañía
     *
     * @return {*}  {Observable<Interests>}
     * @memberof HttpService
     */
    getInterests() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/interests`);
    }
    /**
     * Envía el formulario de contacto
     *
     * @param form: Contact
     * @return {*}  {Observable<ContactFormRes>}
     * @memberof HttpService
     */
    sendContactForm(form) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/contact`, form);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "a+H1":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios-pictures/servicios-pictures.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ServiciosPicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPicturesComponent", function() { return ServiciosPicturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/http.service */ "N+K7");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");














const _c0 = ["imageInput"];
function ServiciosPicturesComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onRecargar", function ServiciosPicturesComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r3.recargarServicePictures($event); })("onCreate", function ServiciosPicturesComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r5.crearPictures(); })("onEdit", function ServiciosPicturesComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r6.editarPictures($event); })("onDelete", function ServiciosPicturesComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r7.borrarPictures($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Im\u00E1genes de un servicio")("filasTabla", ctx_r2.tableData)("encabezadosTabla", ctx_r2.encabezadosTabla)("totalSection", ctx_r2.tableData == null ? null : ctx_r2.tableData.length);
} }
function ServiciosPicturesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ServiciosPicturesComponent_div_1_app_table_3_Template, 1, 4, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tableData);
} }
function ServiciosPicturesComponent_div_2_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Categor\u00EDa de servicio: ", categoria_r13.title, "");
} }
function ServiciosPicturesComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ServiciosPicturesComponent_div_2_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r15.openInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", file_r14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function ServiciosPicturesComponent_div_2_ng_container_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.creationImageError);
} }
function ServiciosPicturesComponent_div_2_ng_container_12_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ServiciosPicturesComponent_div_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ServiciosPicturesComponent_div_2_ng_container_12_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r20.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ServiciosPicturesComponent_div_2_ng_container_12_span_4_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ServiciosPicturesComponent_div_2_ng_container_12_span_5_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.creationImageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r10.acceptedFileTypes);
} }
function ServiciosPicturesComponent_div_2_ng_template_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ServiciosPicturesComponent_div_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 26, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ServiciosPicturesComponent_div_2_ng_template_13_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r24.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ServiciosPicturesComponent_div_2_ng_template_13_span_3_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r12.acceptedFileTypes);
} }
function ServiciosPicturesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ServiciosPicturesComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ServiciosPicturesComponent_div_2_label_9_Template, 2, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ServiciosPicturesComponent_div_2_div_11_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ServiciosPicturesComponent_div_2_ng_container_12_Template, 6, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ServiciosPicturesComponent_div_2_ng_template_13_Template, 4, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ServiciosPicturesComponent_div_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r28.recargarServicePictures(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " Servicios/Im\u00E1gen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.servicePicturesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.categoriaDeServicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.imageToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Crear")("ngIfElse", _r11);
} }
class ServiciosPicturesComponent {
    constructor(httpSrv, adminPanelCrudService, fb, activatedRoute) {
        this.httpSrv = httpSrv;
        this.adminPanelCrudService = adminPanelCrudService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.someClass = true;
        this.encabezadosTabla = [];
        this.tableData = [];
        this.isCreating = false;
        this.isEditing = false;
        this.crudAction = '';
        this.categoriaDeServicio = [];
        this.creationImageError = '';
        this.imageToShow = ['../../../../../assets/no-image.png'];
        this.fileToUpload = [];
        this.acceptedFileTypes = true;
        this.pictureCounter = 0;
        this.pictures = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.createForm();
    }
    createForm() {
        this.servicePicturesForm = this.fb.group({
            serviceId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: [''],
        });
    }
    showSelectedImage(e) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.crudAction === 'Crear' &&
                !this.servicePicturesForm.controls.image.value) {
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
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["customMessageAlert"])('Atención', 'No se pueden subir más de 10 imágenes', 'OK', 'info');
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
    openInput() {
        this.imageInput.nativeElement.click();
    }
    ngOnInit() {
        this.getServicios();
    }
    formSubmit() {
        var _a, _b;
        if (this.crudAction === 'Crear' &&
            !this.servicePicturesForm.controls.image.value) {
            this.creationImageError = 'La imágen es obligatoria';
            return;
        }
        else {
            this.creationImageError = '';
        }
        this.servicePicturesForm.markAllAsTouched();
        if (this.servicePicturesForm.valid) {
            const formData = new FormData();
            formData.append('serviceId', this.servicePicturesForm.controls.serviceId.value);
            if ((_a = this.fileToUpload) === null || _a === void 0 ? void 0 : _a.length) {
                (_b = this.fileToUpload) === null || _b === void 0 ? void 0 : _b.forEach((file) => {
                    formData.append(`pictures`, file);
                });
            }
            this.crudAction === 'Crear'
                ? this.crearPicturesEnLaDb(formData)
                : this.editarPicturesEnLaDb(formData);
        }
    }
    getServicios() {
        this.httpSrv
            .getAllServices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((servicios) => {
            for (const servicio of servicios.data) {
                this.categoriaDeServicio.push(servicio);
                this.httpSrv
                    .getOneService(servicio.id.toString())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
                    .subscribe((serv) => {
                    serv.meta.status.toString().includes('20')
                        ? this.setTableData(serv, servicios.data.length)
                        : Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(serv);
                }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
            }
        });
    }
    setTableData(serv, totalDeServicios) {
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe({
            next: (params) => {
                var _a, _b, _c;
                this.pictureCounter++;
                this.categoriaDeServicio = this.categoriaDeServicio.filter((categoria) => categoria.id === +params.servicioId);
                (_a = this.servicePicturesForm.controls.serviceId) === null || _a === void 0 ? void 0 : _a.setValue(this.categoriaDeServicio[0].id);
                if (!this.pictures.length) {
                    this.pictures = (_b = serv === null || serv === void 0 ? void 0 : serv.data) === null || _b === void 0 ? void 0 : _b.Pictures.filter((picture) => picture.services_b_id === +params.servicioId);
                }
                if (this.pictureCounter === totalDeServicios) {
                    (_c = this.pictures) === null || _c === void 0 ? void 0 : _c.forEach((picture) => {
                        this.tableData.push({
                            imagen: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_IMAGE_URL}/${picture.picture}`,
                            id: picture.id,
                        });
                    });
                }
            },
            error: (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err),
        });
    }
    recargarServicePictures(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.pictureCounter = 0;
            this.categoriaDeServicio = [];
            this.pictures = [];
            this.isCreating = false;
            this.isEditing = false;
            this.getServicios();
        }
    }
    resetsetControls() {
        this.servicePicturesForm.controls.image.setValue('');
        this.imageToShow = ['../../../../../assets/no-image.png'];
        this.fileToUpload = [];
    }
    crearPictures() {
        this.crudAction = 'Crear';
        this.isCreating = true;
        this.isEditing = false;
    }
    crearPicturesEnLaDb(formData) {
        this.adminPanelCrudService
            .createContentOrPictureInService(formData, 'pictures')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServicePictures(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'imagen de servicio');
        }, (err) => {
            this.recargarServicePictures(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    editarPictures(id) {
        var _a;
        this.crudAction = 'Editar';
        this.isEditing = true;
        this.isCreating = false;
        const picture = (_a = this.pictures) === null || _a === void 0 ? void 0 : _a.find((pic) => pic.id === id);
        if (picture) {
            this.pictureId = picture.id;
            this.imageToShow = [`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_IMAGE_URL}/${picture.picture}`];
        }
    }
    editarPicturesEnLaDb(formData) {
        this.adminPanelCrudService
            .editContentOrPictureInService(this.pictureId, formData, 'pictures')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServicePictures(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'imagen de servicio');
        }, (err) => {
            this.recargarServicePictures(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    borrarPictures(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿Seguro querés elimninar el trabajo realizado seleccionado?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No`,
        }).then((result) => {
            result.isConfirmed ? this.borrarContenidoEnLaDb(id) : null;
        });
    }
    borrarContenidoEnLaDb(id) {
        this.adminPanelCrudService
            .deleteContentOrImageFromService(id, 'pictures')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServicePictures(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'imagen de servicio');
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ServiciosPicturesComponent.ɵfac = function ServiciosPicturesComponent_Factory(t) { return new (t || ServiciosPicturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_9__["AdminPanelCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
ServiciosPicturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ServiciosPicturesComponent, selectors: [["app-servicios-pictures"]], viewQuery: function ServiciosPicturesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
    } }, hostVars: 2, hostBindings: function ServiciosPicturesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete", 4, "ngIf"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "form-group"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-center"], ["class", "col-md-4 mb-2", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["isEditingTemplate", ""], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "col-md-4", "mb-2", 3, "click"], ["alt", "Servicio realizado", 1, "img-responsive", "image-gallery", 3, "src"], ["type", "file", "formControlName", "image", "multiple", "", 3, "hidden", "change"], ["imageInput", ""], [1, "p-2", "text-center"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["type", "file", "formControlName", "image", 3, "hidden", "change"]], template: function ServiciosPicturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ServiciosPicturesComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ServiciosPicturesComponent_div_2_Template, 20, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: [".image-gallery[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlcnZpY2lvcy1waWN0dXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzZXJ2aWNpb3MtcGljdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtZ2FsbGVyeSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "aFq9":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios-pictures/servicios-pictures-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServiciosPicturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPicturesRoutingModule", function() { return ServiciosPicturesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_pictures_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios-pictures.component */ "a+H1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _servicios_pictures_component__WEBPACK_IMPORTED_MODULE_1__["ServiciosPicturesComponent"],
    },
];
class ServiciosPicturesRoutingModule {
}
ServiciosPicturesRoutingModule.ɵfac = function ServiciosPicturesRoutingModule_Factory(t) { return new (t || ServiciosPicturesRoutingModule)(); };
ServiciosPicturesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ServiciosPicturesRoutingModule });
ServiciosPicturesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiciosPicturesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-servicios-pictures-servicios-pictures-module.js.map