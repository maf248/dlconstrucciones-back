(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-zonas-zonas-module"],{

/***/ "FG3/":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/zonas/zonas.component.ts ***!
  \********************************************************************/
/*! exports provided: ZonasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonasComponent", function() { return ZonasComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/http.service */ "N+K7");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");












function ZonasComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onRecargar", function ZonasComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r3.recargarZonas($event); })("onCreate", function ZonasComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r5.openCrearZona(); })("onEdit", function ZonasComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.openEditarZona($event); })("onDelete", function ZonasComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.openBorrarZona($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Zonas")("filasTabla", ctx_r2.tableData)("encabezadosTabla", ctx_r2.encabezadosTabla)("totalSection", ctx_r2.tableData == null ? null : ctx_r2.tableData.length);
} }
function ZonasComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ZonasComponent_div_1_app_table_3_Template, 1, 4, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.tableData);
} }
function ZonasComponent_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.creationImageError);
} }
function ZonasComponent_div_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ZonasComponent_div_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ZonasComponent_div_2_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ZonasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ZonasComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZonasComponent_div_2_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); return _r8.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ZonasComponent_div_2_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ZonasComponent_div_2_span_14_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ZonasComponent_div_2_span_15_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ZonasComponent_div_2_span_22_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ZonasComponent_div_2_span_23_Template, 2, 0, "span", 16);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZonasComponent_div_2_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.recargarZonas(true); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.zonasForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.creationImageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.acceptedFileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.zonasForm.controls.title.errors == null ? null : ctx_r1.zonasForm.controls.title.errors.required) && ctx_r1.zonasForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.zonasForm.controls.title.errors == null ? null : ctx_r1.zonasForm.controls.title.errors.minlength) && ctx_r1.zonasForm.controls.title.touched);
} }
class ZonasComponent {
    constructor(httpSrv, fb, adminPanelCrudService) {
        this.httpSrv = httpSrv;
        this.fb = fb;
        this.adminPanelCrudService = adminPanelCrudService;
        this.someClass = true;
        this.encabezadosTabla = ['Título'];
        this.tableData = [];
        this.zonas = [];
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
        this.zonasForm = this.fb.group({
            image: [''],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
        });
    }
    ngOnInit() {
        this.getZonas();
    }
    getZonas() {
        this.httpSrv
            .getAllZones()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((zonas) => zonas.meta.status.toString().includes('20')
            ? this.setTableData(zonas)
            : Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(zonas), (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
    }
    setTableData(zonas) {
        var _a;
        (_a = zonas === null || zonas === void 0 ? void 0 : zonas.data) === null || _a === void 0 ? void 0 : _a.forEach((zona) => {
            this.tableData.push({
                imagen: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_IMAGE_URL}/${zona.image}`,
                item2: zona.title,
                id: zona.id,
            });
            this.zonas.push(zona);
        });
    }
    formSubmit() {
        var _a;
        this.zonasForm.markAllAsTouched();
        if (this.crudAction === 'Crear' && !this.zonasForm.controls.image.value) {
            this.creationImageError = 'La imágen es obligatoria';
            return;
        }
        if (this.zonasForm.valid) {
            const formData = new FormData();
            formData.append('title', (_a = this.zonasForm.controls.title) === null || _a === void 0 ? void 0 : _a.value);
            this.fileToUpload && formData.append('image', this.fileToUpload);
            this.crudAction === 'Crear'
                ? this.crearZonaEnLaDb(formData)
                : this.editarZonaEnLaDb(formData);
        }
    }
    recargarZonas(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.tableData = [];
            this.zonas = [];
            this.isCreating = false;
            this.isEditing = false;
            this.getZonas();
        }
    }
    resetsetControls() {
        var _a, _b, _c, _d;
        (_b = (_a = this.zonasForm.controls) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.setValue('');
        (_d = (_c = this.zonasForm.controls) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.setValue('');
        this.imageToShow = '../../../../../assets/no-image.png';
    }
    showSelectedImage(e) {
        var _a;
        if (this.crudAction === 'Crear' && !this.zonasForm.controls.image.value) {
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
    openCrearZona() {
        this.isEditing = false;
        this.isCreating = true;
        this.crudAction = 'Crear';
    }
    crearZonaEnLaDb(formData) {
        this.adminPanelCrudService
            .create(formData, 'categories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarZonas(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'zona');
        }, (err) => {
            this.recargarZonas(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    openEditarZona(id) {
        this.isEditing = true;
        this.isCreating = false;
        this.crudAction = 'Editar';
        const zonaSeleccionada = this.zonas.find((s) => s.id === id);
        if (zonaSeleccionada) {
            this.zonaID = id;
            this.zonasForm.controls.title.setValue(zonaSeleccionada.title);
            this.imageToShow = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_IMAGE_URL}/${zonaSeleccionada.image}`;
        }
    }
    editarZonaEnLaDb(formData) {
        this.adminPanelCrudService
            .edit(this.zonaID, formData, 'categories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarZonas(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'zona');
        }, (err) => {
            this.recargarZonas(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    openBorrarZona(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '¿Seguro querés elimninar la zona seleccionada?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No`,
        }).then((result) => {
            result.isConfirmed ? this.borrarZonaEnLaDb(id) : null;
        });
    }
    borrarZonaEnLaDb(id) {
        this.adminPanelCrudService
            .delete(id, 'categories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarZonas(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'zona');
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
ZonasComponent.ɵfac = function ZonasComponent_Factory(t) { return new (t || ZonasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_8__["AdminPanelCrudService"])); };
ZonasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ZonasComponent, selectors: [["app-zonas"]], hostVars: 2, hostBindings: function ZonasComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete", 4, "ngIf"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], [1, "col-md-4", "mb-2", 3, "click"], ["alt", "Trabajo realizado", 1, "img-responsive", 3, "src"], ["type", "file", "formControlName", "image", 3, "hidden", "change"], ["imageInput", ""], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], [1, "form-group"], [1, "input-group"], ["type", "text", "id", "exampleInputuname2", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "text-danger"]], template: function ZonasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ZonasComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ZonasComponent_div_2_Template, 29, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b25hcy5jb21wb25lbnQuc2NzcyJ9 */"] });


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

/***/ "SKfq":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/zonas/zonas.module.ts ***!
  \*****************************************************************/
/*! exports provided: ZonasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonasModule", function() { return ZonasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _zonas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zonas-routing.module */ "caOK");
/* harmony import */ var _zonas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zonas.component */ "FG3/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ZonasModule {
}
ZonasModule.ɵfac = function ZonasModule_Factory(t) { return new (t || ZonasModule)(); };
ZonasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ZonasModule });
ZonasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _zonas_routing_module__WEBPACK_IMPORTED_MODULE_1__["ZonasRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ZonasModule, { declarations: [_zonas_component__WEBPACK_IMPORTED_MODULE_2__["ZonasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _zonas_routing_module__WEBPACK_IMPORTED_MODULE_1__["ZonasRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "caOK":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/zonas/zonas-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ZonasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonasRoutingModule", function() { return ZonasRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _zonas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zonas.component */ "FG3/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _zonas_component__WEBPACK_IMPORTED_MODULE_1__["ZonasComponent"]
    }];
class ZonasRoutingModule {
}
ZonasRoutingModule.ɵfac = function ZonasRoutingModule_Factory(t) { return new (t || ZonasRoutingModule)(); };
ZonasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ZonasRoutingModule });
ZonasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ZonasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-zonas-zonas-module.js.map