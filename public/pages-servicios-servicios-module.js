(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servicios-servicios-module"],{

/***/ "2FVf":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios/servicios.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServiciosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosModule", function() { return ServiciosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios-routing.module */ "krAS");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios.component */ "6BDb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ServiciosModule {
}
ServiciosModule.ɵfac = function ServiciosModule_Factory(t) { return new (t || ServiciosModule)(); };
ServiciosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ServiciosModule });
ServiciosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ServiciosModule, { declarations: [_servicios_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _servicios_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServiciosRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "6BDb":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios/servicios.component.ts ***!
  \****************************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");













function ServiciosComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onRecargar", function ServiciosComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r3.recargarServicios($event); })("onCreate", function ServiciosComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r5.crearServicio(); })("onEdit", function ServiciosComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.editarServicio($event); })("onDelete", function ServiciosComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.borrarServicio($event); })("onAddAssets", function ServiciosComponent_div_1_app_table_3_Template_app_table_onAddAssets_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r8.addAssets($event); })("onAddContents", function ServiciosComponent_div_1_app_table_3_Template_app_table_onAddContents_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.addContents($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("filasTabla", ctx_r2.tableData)("encabezadosTabla", ctx_r2.encabezadosTabla)("title", "Servicios")("totalSection", ctx_r2.tableData == null ? null : ctx_r2.tableData.length)("addAssets", true)("addContents", true);
} }
function ServiciosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ServiciosComponent_div_1_app_table_3_Template, 1, 6, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.tableData);
} }
function ServiciosComponent_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.creationImageError);
} }
function ServiciosComponent_div_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ServiciosComponent_div_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ServiciosComponent_div_2_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ServiciosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ServiciosComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ServiciosComponent_div_2_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); return _r10.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ServiciosComponent_div_2_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ServiciosComponent_div_2_span_14_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ServiciosComponent_div_2_span_15_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ServiciosComponent_div_2_span_22_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ServiciosComponent_div_2_span_23_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ServiciosComponent_div_2_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.recargarServicios(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.servicesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.creationImageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.acceptedFileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.servicesForm.controls.title.errors == null ? null : ctx_r1.servicesForm.controls.title.errors.required) && ctx_r1.servicesForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.servicesForm.controls.title.errors == null ? null : ctx_r1.servicesForm.controls.title.errors.minlength) && ctx_r1.servicesForm.controls.title.touched);
} }
class ServiciosComponent {
    constructor(httpSrv, fb, adminPanelCrudService, router) {
        this.httpSrv = httpSrv;
        this.fb = fb;
        this.adminPanelCrudService = adminPanelCrudService;
        this.router = router;
        this.someClass = true;
        this.encabezadosTabla = ['Título'];
        this.tableData = [];
        this.servicios = [];
        this.isEditing = false;
        this.isCreating = false;
        this.crudAction = '';
        this.imageToShow = '../../../../../assets/no-image.png';
        this.acceptedFileTypes = true;
        this.creationImageError = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.createForm();
    }
    createForm() {
        this.servicesForm = this.fb.group({
            image: [''],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
        });
    }
    ngOnInit() {
        this.getServicios();
    }
    getServicios() {
        this.httpSrv
            .getAllServices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((servicios) => {
            var _a;
            ((_a = servicios.meta) === null || _a === void 0 ? void 0 : _a.status.toString().includes('20')) ? this.setTableData(servicios)
                : Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(servicios);
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
    }
    setTableData(servicios) {
        var _a;
        (_a = servicios === null || servicios === void 0 ? void 0 : servicios.data) === null || _a === void 0 ? void 0 : _a.forEach((servicio) => {
            this.tableData.push({
                imagen: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${servicio.image}`,
                item2: servicio.title,
                id: servicio.id,
            });
            this.servicios.push(servicio);
        });
    }
    formSubmit() {
        var _a;
        this.servicesForm.markAllAsTouched();
        if (this.crudAction === 'Crear' &&
            !this.servicesForm.controls.image.value) {
            this.creationImageError = 'La imágen es obligatoria';
            return;
        }
        if (this.servicesForm.valid) {
            const formData = new FormData();
            formData.append('title', (_a = this.servicesForm.controls.title) === null || _a === void 0 ? void 0 : _a.value);
            this.fileToUpload && formData.append('image', this.fileToUpload);
            this.crudAction === 'Crear'
                ? this.crearServicioEnLaDb(formData)
                : this.editarServicioEnLaDb(formData);
        }
    }
    recargarServicios(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.servicios = [];
            this.isCreating = false;
            this.isEditing = false;
            this.getServicios();
        }
    }
    resetsetControls() {
        var _a, _b, _c, _d;
        (_b = (_a = this.servicesForm.controls) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.setValue('');
        (_d = (_c = this.servicesForm.controls) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.setValue('');
        this.imageToShow = '../../../../../assets/no-image.png';
    }
    showSelectedImage(e) {
        var _a;
        if (this.crudAction === 'Crear' &&
            !this.servicesForm.controls.image.value) {
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
    crearServicio() {
        this.isEditing = false;
        this.isCreating = true;
        this.crudAction = 'Crear';
    }
    crearServicioEnLaDb(formData) {
        this.adminPanelCrudService
            .create(formData, 'services')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServicios(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'servicio');
        }, (err) => {
            this.recargarServicios(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(err);
        });
    }
    editarServicio(id) {
        this.isEditing = true;
        this.isCreating = false;
        this.crudAction = 'Editar';
        const servicio = this.servicios.find((s) => s.id === id);
        if (servicio) {
            this.servicioID = id;
            this.servicesForm.controls.title.setValue(servicio.title);
            this.imageToShow = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${servicio.image}`;
        }
    }
    editarServicioEnLaDb(formData) {
        this.adminPanelCrudService
            .edit(this.servicioID, formData, 'services')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServicios(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'servicio');
        }, (err) => {
            this.recargarServicios(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(err);
        });
    }
    borrarServicio(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '¿Seguro querés elimninar el servicio seleccionado?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No`,
        }).then((result) => {
            result.isConfirmed ? this.borrarServicioEnLaDb(id) : null;
        });
    }
    borrarServicioEnLaDb(id) {
        this.adminPanelCrudService
            .delete(id, 'services')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarServicios(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'servicio');
        }, (err) => {
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(err);
        });
    }
    addAssets(id) {
        this.router.navigateByUrl(`/admin/servicios/pictures/${id}`);
    }
    addContents(id) {
        this.router.navigateByUrl(`/admin/servicios/contenidos/${id}`);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ServiciosComponent.ɵfac = function ServiciosComponent_Factory(t) { return new (t || ServiciosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_8__["AdminPanelCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ServiciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ServiciosComponent, selectors: [["app-servicios"]], hostVars: 2, hostBindings: function ServiciosComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], [3, "filasTabla", "encabezadosTabla", "title", "totalSection", "addAssets", "addContents", "onRecargar", "onCreate", "onEdit", "onDelete", "onAddAssets", "onAddContents", 4, "ngIf"], [3, "filasTabla", "encabezadosTabla", "title", "totalSection", "addAssets", "addContents", "onRecargar", "onCreate", "onEdit", "onDelete", "onAddAssets", "onAddContents"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], [1, "col-md-4", "mb-2", 3, "click"], ["alt", "Trabajo realizado", 1, "img-responsive", 3, "src"], ["type", "file", "formControlName", "image", 3, "hidden", "change"], ["imageInput", ""], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], [1, "form-group"], [1, "input-group"], ["type", "text", "id", "exampleInputuname2", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "text-danger"]], template: function ServiciosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ServiciosComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ServiciosComponent_div_2_Template, 29, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNpb3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JZTM":
/*!******************************************************************!*\
  !*** ./src/app/modules/main/pages/servicios/servicios.module.ts ***!
  \******************************************************************/
/*! exports provided: ServiciosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosModule", function() { return ServiciosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "bqc1");
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios-routing.module */ "mk+z");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios.component */ "YS0O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ServiciosModule {
}
ServiciosModule.ɵfac = function ServiciosModule_Factory(t) { return new (t || ServiciosModule)(); };
ServiciosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ServiciosModule });
ServiciosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiciosRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ServiciosModule, { declarations: [_servicios_component__WEBPACK_IMPORTED_MODULE_3__["ServiciosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _servicios_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiciosRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]] }); })();


/***/ }),

/***/ "YS0O":
/*!*********************************************************************!*\
  !*** ./src/app/modules/main/pages/servicios/servicios.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/presentation-card/presentation-card.component */ "TuUY");







class ServiciosComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.servicios = [];
        this.servicesToPresent = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.subscribeToServices();
    }
    subscribeToServices() {
        this.httpService
            .getAllServices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.destroy$))
            .subscribe((servicios) => {
            if (servicios.meta.status.toString().includes('20')) {
                this.serviciosComplete = servicios;
                this.servicios = servicios.data;
                this.servicios.forEach((servicio) => {
                    servicio.url = `/main/servicios/${servicio.id}`;
                    servicio.image = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${servicio.image}`;
                });
                this.mapServicesToPresent();
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["unknownErrorAlert"])(servicios);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err));
    }
    mapServicesToPresent() {
        this.servicios.forEach((service) => {
            this.servicesToPresent.push({
                titulo: service.title,
                urlFoto: service.image,
                ruta: service.url,
                sendDataByRoute: false,
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
ServiciosComponent.ɵfac = function ServiciosComponent_Factory(t) { return new (t || ServiciosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
ServiciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ServiciosComponent, selectors: [["app-servicios"]], decls: 5, vars: 1, consts: [[1, "main-servicios", "animate__animated", "animate__fadeIn", "animate__slow"], [1, "primary-dark"], [3, "presentationCard"]], template: function ServiciosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-presentation-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("presentationCard", ctx.servicesToPresent);
    } }, directives: [_components_presentation_card_presentation_card_component__WEBPACK_IMPORTED_MODULE_6__["PresentationCardComponent"]], styles: [".main-servicios[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlcnZpY2lvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FBQUoiLCJmaWxlIjoic2VydmljaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VydmljaW9zIHtcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "krAS":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/servicios/servicios-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiciosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosRoutingModule", function() { return ServiciosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.component */ "6BDb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _servicios_component__WEBPACK_IMPORTED_MODULE_1__["ServiciosComponent"]
    }];
class ServiciosRoutingModule {
}
ServiciosRoutingModule.ɵfac = function ServiciosRoutingModule_Factory(t) { return new (t || ServiciosRoutingModule)(); };
ServiciosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ServiciosRoutingModule });
ServiciosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiciosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "mk+z":
/*!**************************************************************************!*\
  !*** ./src/app/modules/main/pages/servicios/servicios-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ServiciosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosRoutingModule", function() { return ServiciosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.component */ "YS0O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _servicios_component__WEBPACK_IMPORTED_MODULE_1__["ServiciosComponent"],
        pathMatch: 'full',
    },
    {
        path: ':servicioId',
        loadChildren: () => __webpack_require__.e(/*! import() | tipo-servicio-tipo-servicio-module */ "tipo-servicio-tipo-servicio-module").then(__webpack_require__.bind(null, /*! ./tipo-servicio/tipo-servicio.module */ "J8fO")).then(m => m.TipoServicioModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class ServiciosRoutingModule {
}
ServiciosRoutingModule.ɵfac = function ServiciosRoutingModule_Factory(t) { return new (t || ServiciosRoutingModule)(); };
ServiciosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ServiciosRoutingModule });
ServiciosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiciosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-servicios-servicios-module.js.map