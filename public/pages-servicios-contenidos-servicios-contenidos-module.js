(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servicios-contenidos-servicios-contenidos-module"],{

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

/***/ "fQkW":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios-contenidos/servicios-contenidos.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ServiciosContenidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosContenidosComponent", function() { return ServiciosContenidosComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http.service */ "N+K7");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");












function ServiciosContenidosComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onRecargar", function ServiciosContenidosComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r3.recargarServiceContents($event); })("onCreate", function ServiciosContenidosComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.crearContenido(); })("onEdit", function ServiciosContenidosComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.editarContenido($event); })("onDelete", function ServiciosContenidosComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.borrarContenido($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Servicios/contenidos")("filasTabla", ctx_r2.tableData)("encabezadosTabla", ctx_r2.encabezadosTabla)("totalSection", ctx_r2.tableData == null ? null : ctx_r2.tableData.length)("noImage", true);
} }
function ServiciosContenidosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ServiciosContenidosComponent_div_1_app_table_3_Template, 1, 5, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.tableData);
} }
function ServiciosContenidosComponent_div_2_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Categor\u00EDa de servicio: ", categoria_r12.title, "");
} }
function ServiciosContenidosComponent_div_2_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ServiciosContenidosComponent_div_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Debe tener al menos 10 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ServiciosContenidosComponent_div_2_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Debes llenar al menos 1 de los dos campos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ServiciosContenidosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ServiciosContenidosComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ServiciosContenidosComponent_div_2_label_9_Template, 2, 1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ServiciosContenidosComponent_div_2_span_16_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ServiciosContenidosComponent_div_2_span_21_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ServiciosContenidosComponent_div_2_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.recargarServiceContents(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ServiciosContenidosComponent_div_2_span_28_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " contenido de un servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.serviceContentsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.categoriaDeServicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.serviceContentsForm.controls.subtitle.errors == null ? null : ctx_r1.serviceContentsForm.controls.subtitle.errors.minlength) && ctx_r1.serviceContentsForm.controls.subtitle.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.serviceContentsForm.controls.text.errors == null ? null : ctx_r1.serviceContentsForm.controls.text.errors.minlength) && ctx_r1.serviceContentsForm.controls.text.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.serviceContentsForm.controls.text.errors == null ? null : ctx_r1.serviceContentsForm.controls.text.errors.required) && ctx_r1.serviceContentsForm.controls.text.touched);
} }
class ServiciosContenidosComponent {
    constructor(httpSrv, adminPanelCrudService, fb, activatedRoute) {
        this.httpSrv = httpSrv;
        this.adminPanelCrudService = adminPanelCrudService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.someClass = true;
        this.encabezadosTabla = ['Título', 'Descripción'];
        this.tableData = [];
        this.isCreating = false;
        this.isEditing = false;
        this.crudAction = '';
        this.categoriaDeServicio = [];
        this.contentCounter = 0;
        this.contents = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.createForm();
    }
    createForm() {
        this.serviceContentsForm = this.fb.group({
            serviceId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)],
            text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)],
        }, {
            validator: this.checkAtLeastOneTextFieldIsRequired,
        });
    }
    checkAtLeastOneTextFieldIsRequired(form) {
        const subtitle = form.get('subtitle');
        const text = form.get('text');
        if (!(subtitle === null || subtitle === void 0 ? void 0 : subtitle.value) &&
            !(text === null || text === void 0 ? void 0 : text.value) &&
            ((subtitle === null || subtitle === void 0 ? void 0 : subtitle.touched) || (text === null || text === void 0 ? void 0 : text.touched))) {
            text === null || text === void 0 ? void 0 : text.setErrors({ required: true });
        }
        else {
            text === null || text === void 0 ? void 0 : text.setErrors(null);
        }
    }
    ngOnInit() {
        this.getServicios();
    }
    formSubmit() {
        this.serviceContentsForm.markAllAsTouched();
        if (this.serviceContentsForm.valid) {
            const formData = this.createFormData();
            if (formData) {
                this.crudAction === 'Crear'
                    ? this.crearContenidoEnLaDb(formData)
                    : this.editarContenidoEnLaDb(formData);
            }
        }
    }
    createFormData() {
        let formData = {
            subtitle: undefined,
            text: undefined,
            serviceId: this.serviceContentsForm.controls.serviceId.value,
        };
        this.serviceContentsForm.controls.subtitle.value
            ? (formData.subtitle = this.serviceContentsForm.controls.subtitle.value)
            : null;
        this.serviceContentsForm.controls.text.value
            ? (formData.text = this.serviceContentsForm.controls.text.value)
            : null;
        if (!formData.subtitle) {
            delete formData.subtitle;
        }
        else if (!formData.text) {
            delete formData.text;
        }
        return formData;
    }
    getServicios() {
        this.httpSrv
            .getAllServices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((servicios) => {
            for (const servicio of servicios.data) {
                this.categoriaDeServicio.push(servicio);
                this.httpSrv
                    .getOneService(servicio.id.toString())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
                    .subscribe((serv) => {
                    serv.meta.status.toString().includes('20')
                        ? this.setTableData(serv, servicios.data.length)
                        : Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["unknownErrorAlert"])(serv);
                }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
            }
        });
    }
    setTableData(serv, totalDeServicios) {
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe({
            next: (params) => {
                var _a, _b, _c;
                this.contentCounter++;
                this.categoriaDeServicio = this.categoriaDeServicio.filter((categoria) => categoria.id === +params.servicioId);
                (_a = this.serviceContentsForm.controls.serviceId) === null || _a === void 0 ? void 0 : _a.setValue(this.categoriaDeServicio[0].id);
                if (!this.contents.length) {
                    this.contents = (_b = serv === null || serv === void 0 ? void 0 : serv.data) === null || _b === void 0 ? void 0 : _b.Contents.filter((content) => content.services_a_id === +params.servicioId);
                }
                if (this.contentCounter === totalDeServicios) {
                    (_c = this.contents) === null || _c === void 0 ? void 0 : _c.forEach((content) => {
                        this.tableData.push({
                            item2: content.subtitle ? content.subtitle : 'Vacío',
                            item3: content.text ? content.text : 'Vacío',
                            id: content.id,
                        });
                    });
                }
            },
            error: (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err),
        });
    }
    recargarServiceContents(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.contentCounter = 0;
            this.categoriaDeServicio = [];
            this.contents = [];
            this.isCreating = false;
            this.isEditing = false;
            this.getServicios();
        }
    }
    resetsetControls() {
        this.serviceContentsForm.controls.serviceId.setValue('');
        this.serviceContentsForm.controls.subtitle.setValue('');
        this.serviceContentsForm.controls.text.setValue('');
    }
    crearContenido() {
        this.crudAction = 'Crear';
        this.isCreating = true;
        this.isEditing = false;
    }
    crearContenidoEnLaDb(formData) {
        this.adminPanelCrudService
            .createContentOrPictureInService(formData, 'contents')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServiceContents(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'contenido');
        }, (err) => {
            this.recargarServiceContents(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err);
        });
    }
    editarContenido(id) {
        var _a, _b, _c, _d;
        this.crudAction = 'Editar';
        this.isEditing = true;
        this.isCreating = false;
        const contenido = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.find((cont) => cont.id === id);
        if (contenido) {
            this.contentId = contenido.id;
            (_b = this.serviceContentsForm.controls.subtitle) === null || _b === void 0 ? void 0 : _b.setValue(contenido.subtitle);
            (_c = this.serviceContentsForm.controls.text) === null || _c === void 0 ? void 0 : _c.setValue(contenido.text);
            (_d = this.serviceContentsForm.controls.type) === null || _d === void 0 ? void 0 : _d.setValue(contenido.services_a_id);
        }
    }
    editarContenidoEnLaDb(formData) {
        this.adminPanelCrudService
            .editContentOrPictureInService(this.contentId, formData, 'contents')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServiceContents(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'contenido');
        }, (err) => {
            this.recargarServiceContents(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err);
        });
    }
    borrarContenido(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
            .deleteContentOrImageFromService(id, 'contents')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServiceContents(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'contenido');
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_4__["noConnectionAlert"])(err));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ServiciosContenidosComponent.ɵfac = function ServiciosContenidosComponent_Factory(t) { return new (t || ServiciosContenidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_7__["AdminPanelCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
ServiciosContenidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ServiciosContenidosComponent, selectors: [["app-servicios-contenidos"]], hostVars: 2, hostBindings: function ServiciosContenidosComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "noImage", "onRecargar", "onCreate", "onEdit", "onDelete", 4, "ngIf"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "noImage", "onRecargar", "onCreate", "onEdit", "onDelete"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "form-group"], [4, "ngFor", "ngForOf"], [1, "input-group"], ["type", "text", "placeholder", "T\u00EDtulo", "formControlName", "subtitle", 1, "form-control"], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "id", "exampleInputuname2", "placeholder", "Descripci\u00F3n", "formControlName", "text", "rows", "5", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "text-danger"]], template: function ServiciosContenidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ServiciosContenidosComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ServiciosContenidosComponent_div_2_Template, 29, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNpb3MtY29udGVuaWRvcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "gOo9":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios-contenidos/servicios-contenidos.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ServiciosContenidosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosContenidosModule", function() { return ServiciosContenidosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicios_contenidos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios-contenidos-routing.module */ "qLpb");
/* harmony import */ var _servicios_contenidos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios-contenidos.component */ "fQkW");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ServiciosContenidosModule {
}
ServiciosContenidosModule.ɵfac = function ServiciosContenidosModule_Factory(t) { return new (t || ServiciosContenidosModule)(); };
ServiciosContenidosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ServiciosContenidosModule });
ServiciosContenidosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _servicios_contenidos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosContenidosRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ServiciosContenidosModule, { declarations: [_servicios_contenidos_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosContenidosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _servicios_contenidos_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosContenidosRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "qLpb":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios-contenidos/servicios-contenidos-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ServiciosContenidosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosContenidosRoutingModule", function() { return ServiciosContenidosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_contenidos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios-contenidos.component */ "fQkW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _servicios_contenidos_component__WEBPACK_IMPORTED_MODULE_1__["ServiciosContenidosComponent"],
    },
];
class ServiciosContenidosRoutingModule {
}
ServiciosContenidosRoutingModule.ɵfac = function ServiciosContenidosRoutingModule_Factory(t) { return new (t || ServiciosContenidosRoutingModule)(); };
ServiciosContenidosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ServiciosContenidosRoutingModule });
ServiciosContenidosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiciosContenidosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-servicios-contenidos-servicios-contenidos-module.js.map