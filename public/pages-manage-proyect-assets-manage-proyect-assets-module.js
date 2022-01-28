(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-proyect-assets-manage-proyect-assets-module"],{

/***/ "NN10":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/manage-proyect-assets/manage-proyect-assets.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ManageProyectAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProyectAssetsComponent", function() { return ManageProyectAssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/alerts */ "ZLyn");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/projects.service */ "o1z6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/admin-panel-crud.service */ "T9Ob");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/table/table.component */ "FQRV");












const _c0 = ["imageInput"];
function ManageProyectAssetsComponent_div_1_app_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onRecargar", function ManageProyectAssetsComponent_div_1_app_table_3_Template_app_table_onRecargar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r3.recargarAssets($event); })("onCreate", function ManageProyectAssetsComponent_div_1_app_table_3_Template_app_table_onCreate_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.crearAsset(); })("onEdit", function ManageProyectAssetsComponent_div_1_app_table_3_Template_app_table_onEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.editarAssets($event); })("onDelete", function ManageProyectAssetsComponent_div_1_app_table_3_Template_app_table_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.borrarAsset($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("encabezadosTabla", ctx_r2.encabezadosTabla)("filasTabla", ctx_r2.tableData)("totalSection", ctx_r2.assets == null ? null : ctx_r2.assets.length);
} }
function ManageProyectAssetsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManageProyectAssetsComponent_div_1_app_table_3_Template, 1, 3, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.assets && ctx_r0.tableData);
} }
function ManageProyectAssetsComponent_div_2_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", file_r12.path, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ManageProyectAssetsComponent_div_2_div_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "video", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", file_r12.path, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("autoplay", false)("muted", true)("loop", true)("controls", true);
} }
function ManageProyectAssetsComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageProyectAssetsComponent_div_2_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r18.openInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManageProyectAssetsComponent_div_2_div_9_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ManageProyectAssetsComponent_div_2_div_9_ng_template_2_Template, 2, 5, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r12 = ctx.$implicit;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", file_r12.type.includes("image"))("ngIfElse", _r14);
} }
function ManageProyectAssetsComponent_div_2_ng_container_10_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r21.creationImageError);
} }
function ManageProyectAssetsComponent_div_2_ng_container_10_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageProyectAssetsComponent_div_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManageProyectAssetsComponent_div_2_ng_container_10_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ManageProyectAssetsComponent_div_2_ng_container_10_span_4_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManageProyectAssetsComponent_div_2_ng_container_10_span_5_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.creationImageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.acceptedFileTypes);
} }
function ManageProyectAssetsComponent_div_2_ng_template_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Los formatos aceptados son JPG, JPEG y PNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ManageProyectAssetsComponent_div_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 27, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManageProyectAssetsComponent_div_2_ng_template_11_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.showSelectedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManageProyectAssetsComponent_div_2_ng_template_11_span_3_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r11.acceptedFileTypes);
} }
function ManageProyectAssetsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ManageProyectAssetsComponent_div_2_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.formSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ManageProyectAssetsComponent_div_2_div_9_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ManageProyectAssetsComponent_div_2_ng_container_10_Template, 6, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ManageProyectAssetsComponent_div_2_ng_template_11_Template, 4, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageProyectAssetsComponent_div_2_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.recargarAssets(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.crudAction, " Galer\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.assetsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.imageToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.crudAction === "Crear")("ngIfElse", _r10);
} }
class ManageProyectAssetsComponent {
    constructor(router, projectsService, fb, adminPanelCrudService) {
        this.router = router;
        this.projectsService = projectsService;
        this.fb = fb;
        this.adminPanelCrudService = adminPanelCrudService;
        this.someClass = true;
        this.assets = [];
        this.tableData = [];
        this.encabezadosTabla = [];
        this.isCreating = false;
        this.isEditing = false;
        this.crudAction = '';
        this.imageToShow = [
            {
                path: '../../../../../assets/no-image.png',
                type: 'image/png',
            },
        ];
        this.fileToUpload = [];
        this.acceptedFileTypes = true;
        this.creationImageError = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getprojectId();
        if (this.projectID)
            this.createForm();
        else
            this.router.navigateByUrl('/admin/proyectos');
    }
    getprojectId() {
        var _a, _b, _c;
        this.projectID = (_c = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.id;
    }
    createForm() {
        this.assetsForm = this.fb.group({
            asset: [''],
        });
    }
    openInput() {
        this.imageInput.nativeElement.click();
    }
    showSelectedImage(e) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!((_a = this.assetsForm.controls.asset) === null || _a === void 0 ? void 0 : _a.value)) {
                this.creationImageError = 'El archivo es obligatorio';
                return;
            }
            else {
                this.creationImageError = '';
            }
            let files = Array.from((_b = e.target) === null || _b === void 0 ? void 0 : _b.files);
            files = yield this.checkAmountOfFiles(files);
            this.acceptedFileTypes = yield this.checkFilesType(files);
            if (files.length && this.acceptedFileTypes) {
                this.imageToShow = [];
                this.fileToUpload = files;
                files.forEach((file) => {
                    // if (file.type.includes('image')) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => this.imageToShow.push({
                        path: reader.result,
                        type: file.type,
                    });
                    // } else {
                    //   this.imageToShow.push('../../../../../assets/no-image-video.jpg');
                    // }
                });
            }
            else {
                this.imageToShow = [
                    {
                        path: '../../../../../assets/no-image.png',
                        type: 'image/png',
                    },
                ];
                this.fileToUpload = [];
            }
        });
    }
    checkAmountOfFiles(files) {
        let filesHaveVideo = false;
        let acceptedLength = 10;
        files.forEach((file) => {
            file.type.includes('video') ? (filesHaveVideo = true) : null;
        });
        if (filesHaveVideo) {
            acceptedLength = 5;
        }
        return new Promise((resolve) => {
            if (files.length > acceptedLength) {
                Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["customMessageAlert"])('Atención', `No se pueden subir mas de ${acceptedLength} archivos`, 'OK', 'info');
                files = files.slice(0, acceptedLength);
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
                    file.type.includes('image/png') ||
                    file.type.includes('video/mp4') ||
                    file.type.includes('video/avi') ||
                    file.type.includes('video/mov') ||
                    file.type.includes('video/wmv') ||
                    file.type.includes('video/mkv')) {
                }
                else {
                    validator = false;
                }
            });
            validator === 'valido' ? resolve(true) : resolve(false);
        });
    }
    formSubmit() {
        var _a;
        this.assetsForm.markAllAsTouched();
        if (!((_a = this.assetsForm.controls.asset) === null || _a === void 0 ? void 0 : _a.value)) {
            this.creationImageError = 'El archivo es obligatorio';
            return;
        }
        else {
            this.creationImageError = '';
        }
        if (this.assetsForm.valid) {
            const formData = new FormData();
            if (this.fileToUpload.length) {
                formData.append('projects_id', this.projectID.toString());
                this.fileToUpload.forEach((file) => {
                    formData.append('asset', file);
                });
                this.crudAction === 'Crear'
                    ? this.crearAssetEnLaDb(formData)
                    : this.editarAssetEnLaDb(formData);
            }
        }
    }
    ngOnInit() {
        this.getAssets();
    }
    getAssets() {
        this.projectsService
            .getOneProject(this.projectID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            var _a, _b;
            if ((_a = res === null || res === void 0 ? void 0 : res.meta) === null || _a === void 0 ? void 0 : _a.status.toString().includes('20')) {
                this.assets = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.Assets;
                this.getProjectAssetsFiles();
            }
            else {
                Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["unknownErrorAlert"])(res);
            }
        }, (err) => Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err));
    }
    getProjectAssetsFiles() {
        for (const asset of this.assets) {
            this.projectsService
                .getAssetsDeUnProyecto(asset.asset)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
                .subscribe({
                next: (blob) => {
                    this.setTableData(blob, asset);
                },
                error: (err) => Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err),
            });
        }
    }
    setTableData(blob, asset) {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            this.tableData.push({
                id: asset.id,
                imagen: reader.result,
                tipoDeArchivo: blob.type,
            });
        };
    }
    recargarAssets(recargar) {
        if (recargar) {
            this.resetsetControls();
            this.tableData = [];
            this.assets = [];
            this.isCreating = false;
            this.isEditing = false;
            this.fileToUpload = [];
            this.imageToShow = [
                {
                    path: '../../../../../assets/no-image.png',
                    type: 'image/png',
                },
            ];
            this.getAssets();
        }
    }
    resetsetControls() {
        var _a;
        (_a = this.assetsForm.controls.asset) === null || _a === void 0 ? void 0 : _a.setValue('');
    }
    crearAsset() {
        this.crudAction = 'Crear';
        this.isCreating = true;
        this.isEditing = false;
    }
    crearAssetEnLaDb(payload) {
        this.adminPanelCrudService
            .create(payload, 'assets')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarAssets(true);
            Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["alertFailureOrSuccessOnCRUDAction"])(res, 'creó', 'archivo');
        }, (err) => {
            this.recargarAssets(true);
            Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err);
        });
    }
    editarAssets(assetId) {
        this.crudAction = 'Editar';
        this.isEditing = true;
        this.isCreating = false;
        const asset = this.assets.find((asset) => asset.id === assetId);
        asset ? (this.assetId = assetId) : null;
    }
    editarAssetEnLaDb(payload) {
        this.adminPanelCrudService
            .edit(this.assetId, payload, 'assets')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarAssets(true);
            Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["alertFailureOrSuccessOnCRUDAction"])(res, 'editó', 'archivo');
        }, (err) => {
            this.recargarAssets(true);
            Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err);
        });
    }
    borrarAsset(assetId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿Seguro querés elimninar el archivo seleccionado?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No`,
        }).then((result) => {
            result.isConfirmed ? this.borrarAssetEnLaDb(assetId) : null;
        });
    }
    borrarAssetEnLaDb(assetId) {
        this.adminPanelCrudService
            .delete(assetId, 'assets')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.recargarAssets(true);
            Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["alertFailureOrSuccessOnCRUDAction"])(res, 'borró', 'archivo');
        }, (err) => {
            this.recargarAssets(true);
            Object(src_app_helpers_alerts__WEBPACK_IMPORTED_MODULE_3__["noConnectionAlert"])(err);
        });
    }
}
ManageProyectAssetsComponent.ɵfac = function ManageProyectAssetsComponent_Factory(t) { return new (t || ManageProyectAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_panel_crud_service__WEBPACK_IMPORTED_MODULE_9__["AdminPanelCrudService"])); };
ManageProyectAssetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManageProyectAssetsComponent, selectors: [["app-manage-proyect-assets"]], viewQuery: function ManageProyectAssetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
    } }, hostVars: 2, hostBindings: function ManageProyectAssetsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("admin-panel-container", ctx.someClass);
    } }, decls: 3, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "card"], [1, "card-body"], ["title", "Galer\u00EDa", 3, "encabezadosTabla", "filasTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete", 4, "ngIf"], ["title", "Galer\u00EDa", 3, "encabezadosTabla", "filasTabla", "totalSection", "onRecargar", "onCreate", "onEdit", "onDelete"], [1, "card-header"], [1, "primary-dark"], [1, "form", "p-t-20", "form-material", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], ["class", "col-md-4 text-center mb-2", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["isEditingTemplate", ""], [1, "card-footer", "text-center"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", "m-r-10", "bgc-primary-dark"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", "m-r-10", 3, "click"], [1, "col-md-4", "text-center", "mb-2", 3, "click"], ["videoTemplate", ""], ["alt", "Proyecto", 1, "img-responsive", "image-gallery", 3, "src"], [1, "embed-responsive", "embed-responsive-21by9"], [1, "embed-responsive-item", "w-100", 3, "src", "autoplay", "muted", "loop", "controls"], ["type", "file", "formControlName", "asset", "multiple", "", 3, "hidden", "change"], ["imageInput", ""], [1, "p-2", "text-center"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["type", "file", "formControlName", "asset", 3, "hidden", "change"]], template: function ManageProyectAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManageProyectAssetsComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ManageProyectAssetsComponent_div_2_Template, 18, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isEditing && !ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCreating || ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcHJveWVjdC1hc3NldHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "oEgE":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/manage-proyect-assets/manage-proyect-assets-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ManageProyectAssetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProyectAssetsRoutingModule", function() { return ManageProyectAssetsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _manage_proyect_assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-proyect-assets.component */ "NN10");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _manage_proyect_assets_component__WEBPACK_IMPORTED_MODULE_1__["ManageProyectAssetsComponent"],
    },
];
class ManageProyectAssetsRoutingModule {
}
ManageProyectAssetsRoutingModule.ɵfac = function ManageProyectAssetsRoutingModule_Factory(t) { return new (t || ManageProyectAssetsRoutingModule)(); };
ManageProyectAssetsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManageProyectAssetsRoutingModule });
ManageProyectAssetsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageProyectAssetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "qJPh":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/pages/manage-proyect-assets/manage-proyect-assets.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ManageProyectAssetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProyectAssetsModule", function() { return ManageProyectAssetsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _manage_proyect_assets_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-proyect-assets-routing.module */ "oEgE");
/* harmony import */ var _manage_proyect_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-proyect-assets.component */ "NN10");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "6eV/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ManageProyectAssetsModule {
}
ManageProyectAssetsModule.ɵfac = function ManageProyectAssetsModule_Factory(t) { return new (t || ManageProyectAssetsModule)(); };
ManageProyectAssetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ManageProyectAssetsModule });
ManageProyectAssetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _manage_proyect_assets_routing_module__WEBPACK_IMPORTED_MODULE_1__["ManageProyectAssetsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ManageProyectAssetsModule, { declarations: [_manage_proyect_assets_component__WEBPACK_IMPORTED_MODULE_2__["ManageProyectAssetsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _manage_proyect_assets_routing_module__WEBPACK_IMPORTED_MODULE_1__["ManageProyectAssetsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-manage-proyect-assets-manage-proyect-assets-module.js.map