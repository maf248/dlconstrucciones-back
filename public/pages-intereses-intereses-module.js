(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intereses-intereses-module"],{

/***/ "8fTD":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/intereses/intereses.component.ts ***!
  \****************************************************************************/
/*! exports provided: InteresesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresesComponent", function() { return InteresesComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/alerts */ "ZLyn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/http.service */ "N+K7");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");












function InteresesComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onRecargar", function InteresesComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r3.recargarIntereses($event); })("onCreate", function InteresesComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r5.crearInteres(); })("onEdit", function InteresesComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.editarInteres($event); })("onDelete", function InteresesComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.borrarInteres($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Intereses")("filasTabla", ctx_r2.tableData)("encabezadosTabla", ctx_r2.encabezadosTabla)("totalSection", ctx_r2.tableData == null ? null : ctx_r2.tableData.length);
} }
function InteresesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, InteresesComponent_div_1_app_table_3_Template, 1, 4, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.tableData);
} }
function InteresesComponent_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.interestCreationImageValidator);
} }
function InteresesComponent_div_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InteresesComponent_div_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InteresesComponent_div_2_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InteresesComponent_div_2_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Este campo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InteresesComponent_div_2_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe tener al menos 10 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InteresesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function InteresesComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InteresesComponent_div_2_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12); return _r8.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function InteresesComponent_div_2_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, InteresesComponent_div_2_span_14_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, InteresesComponent_div_2_span_15_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, InteresesComponent_div_2_span_22_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, InteresesComponent_div_2_span_23_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, InteresesComponent_div_2_span_28_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, InteresesComponent_div_2_span_29_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InteresesComponent_div_2_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.recargarIntereses(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " Interes/es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.interestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.interestCreationImageValidator);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.acceptedFileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.interestForm.controls.title.errors == null ? null : ctx_r1.interestForm.controls.title.errors.required) && ctx_r1.interestForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.interestForm.controls.title.errors == null ? null : ctx_r1.interestForm.controls.title.errors.minlength) && ctx_r1.interestForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.interestForm.controls.description.errors == null ? null : ctx_r1.interestForm.controls.description.errors.required) && ctx_r1.interestForm.controls.description.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.interestForm.controls.description.errors == null ? null : ctx_r1.interestForm.controls.description.errors.minlength) && ctx_r1.interestForm.controls.description.touched);
} }
class InteresesComponent {
    constructor(httpService, fb, adminPanelCrudService) {
        this.httpService = httpService;
        this.fb = fb;
        this.adminPanelCrudService = adminPanelCrudService;
        this.someClass = true;
        this.encabezadosTabla = ['Título', 'Descripción'];
        this.tableData = [];
        this.interestData = [];
        this.isCreating = false;
        this.isEditing = false;
        this.crudAction = '';
        this.imageToShow = '../../../../../assets/no-image.png';
        this.acceptedFileTypes = true;
        this.interestCreationImageValidator = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.createForm();
    }
    createForm() {
        this.interestForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
            image: [''],
        });
    }
    ngOnInit() {
        this.getIntereses();
    }
    formSubmit() {
        var _a, _b;
        this.interestForm.markAllAsTouched();
        if (this.crudAction === 'Crear' &&
            !this.interestForm.controls.image.value) {
            this.interestCreationImageValidator = 'La imágen es obligatoria';
            return;
        }
        if (this.interestForm.valid) {
            this.interestCreationImageValidator = '';
            const formData = new FormData();
            formData.append('title', (_a = this.interestForm.controls.title) === null || _a === void 0 ? void 0 : _a.value);
            formData.append('description', (_b = this.interestForm.controls.description) === null || _b === void 0 ? void 0 : _b.value);
            this.fileToUpload && formData.append('image', this.fileToUpload);
            this.crudAction === 'Crear'
                ? this.crearInteresEnLaDb(formData)
                : this.editarInteresEnLaDb(formData);
        }
    }
    getIntereses() {
        this.httpService
            .getInterests()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((interests) => {
            var _a;
            if ((_a = interests.meta) === null || _a === void 0 ? void 0 : _a.status.toString().includes('20')) {
                interests.data.forEach((int) => this.setTableData(int));
            }
            else {
                Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["unknownErrorAlert"])(interests);
            }
        }, (err) => Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err));
    }
    setTableData(interes) {
        this.tableData.push({
            imagen: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${interes.image}`,
            item2: interes.title,
            item3: interes.description,
            id: interes.id,
        });
        this.interestData.push(interes);
    }
    recargarIntereses(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.interestData = [];
            this.isCreating = false;
            this.isEditing = false;
            this.getIntereses();
        }
    }
    resetsetControls() {
        this.interestForm.controls.title.setValue('');
        this.interestForm.controls.description.setValue('');
        this.interestForm.controls.image.setValue('');
        this.imageToShow = '../../../../../assets/no-image.png';
    }
    showSelectedImage(e) {
        var _a;
        if (this.crudAction === 'Crear' &&
            !this.interestForm.controls.image.value) {
            this.interestCreationImageValidator = 'La imágen es obligatoria';
            return;
        }
        else {
            this.interestCreationImageValidator = '';
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
    crearInteres() {
        this.crudAction = 'Crear';
        this.isCreating = true;
        this.isEditing = false;
    }
    crearInteresEnLaDb(formData) {
        this.adminPanelCrudService
            .create(formData, 'interests')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarIntereses(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'interés');
        }, (err) => {
            this.recargarIntereses(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    editarInteres(id) {
        this.crudAction = 'Editar';
        this.isEditing = true;
        this.isCreating = false;
        const interes = this.interestData.find((int) => int.id === id);
        if (interes) {
            this.interestsID = id;
            this.interestForm.controls.title.setValue(interes.title);
            this.interestForm.controls.description.setValue(interes.description);
            this.imageToShow = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_IMAGE_URL}/${interes.image}`;
        }
    }
    editarInteresEnLaDb(formData) {
        this.adminPanelCrudService
            .edit(this.interestsID, formData, 'interests')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarIntereses(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'interés');
        }, (err) => {
            this.recargarIntereses(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    borrarInteres(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿Seguro querés elimninar el interés seleccionado?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No`,
        }).then((result) => {
            result.isConfirmed ? this.borrarInteresesDeLaDb(id) : null;
        });
    }
    borrarInteresesDeLaDb(id) {
        this.adminPanelCrudService
            .delete(id, 'interests')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarIntereses(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'interés');
        }, (err) => {
            this.recargarIntereses(true);
            Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_5__["noConnectionAlert"])(err);
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
InteresesComponent.ɵfac = function InteresesComponent_Factory(t) { return new (t || InteresesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_8__["AdminPanelCrudService"])); };
InteresesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InteresesComponent, selectors: [["app-intereses"]], hostVars: 2, hostBindings: function InteresesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete", 4, "ngIf"], [3, "title", "filasTabla", "encabezadosTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], [1, "col-md-4", "mb-2", 3, "click"], ["alt", "Trabajo realizado", 1, "img-responsive", 3, "src"], ["type", "file", "formControlName", "image", 3, "hidden", "change"], ["imageInput", ""], [1, "p-2"], ["class", "text-danger", 4, "ngIf"], [1, "form-group"], [1, "input-group"], ["type", "text", "id", "exampleInputuname2", "placeholder", "T\u00EDtulo", "formControlName", "title", 1, "form-control"], ["type", "text", "id", "exampleInputuname2", "placeholder", "Descripci\u00F3n", "formControlName", "description", "rows", "5", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "text-danger"]], template: function InteresesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, InteresesComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, InteresesComponent_div_2_Template, 35, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmVzZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Dpxv":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/intereses/intereses-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InteresesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresesRoutingModule", function() { return InteresesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intereses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intereses.component */ "8fTD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _intereses_component__WEBPACK_IMPORTED_MODULE_1__["InteresesComponent"]
    }];
class InteresesRoutingModule {
}
InteresesRoutingModule.ɵfac = function InteresesRoutingModule_Factory(t) { return new (t || InteresesRoutingModule)(); };
InteresesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InteresesRoutingModule });
InteresesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InteresesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "IQz/":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/intereses/intereses.module.ts ***!
  \*************************************************************************/
/*! exports provided: InteresesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresesModule", function() { return InteresesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _intereses_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intereses-routing.module */ "Dpxv");
/* harmony import */ var _intereses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intereses.component */ "8fTD");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class InteresesModule {
}
InteresesModule.ɵfac = function InteresesModule_Factory(t) { return new (t || InteresesModule)(); };
InteresesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InteresesModule });
InteresesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _intereses_routing_module__WEBPACK_IMPORTED_MODULE_1__["InteresesRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InteresesModule, { declarations: [_intereses_component__WEBPACK_IMPORTED_MODULE_2__["InteresesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _intereses_routing_module__WEBPACK_IMPORTED_MODULE_1__["InteresesRoutingModule"],
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


/***/ })

}]);
//# sourceMappingURL=pages-intereses-intereses-module.js.map