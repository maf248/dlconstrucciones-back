(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "+iOL":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-routing.module */ "ZgzY");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "bMYK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class RegisterModule {
}
RegisterModule.ɵfac = function RegisterModule_Factory(t) { return new (t || RegisterModule)(); };
RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RegisterModule });
RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegisterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RegisterModule, { declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _register_routing_module__WEBPACK_IMPORTED_MODULE_1__["RegisterRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();


/***/ }),

/***/ "ZgzY":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "bMYK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
    }
];
class RegisterRoutingModule {
}
RegisterRoutingModule.ɵfac = function RegisterRoutingModule_Factory(t) { return new (t || RegisterRoutingModule)(); };
RegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RegisterRoutingModule });
RegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bMYK":
/*!***********************************************************!*\
  !*** ./src/app/pages/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function RegisterComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N\u00FAmero m\u00E1ximo 99.999.999");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Debe contenter al menos 8 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Por favor ingres\u00E1 un email v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este dato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(fb) {
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
        this.registerForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(99999999), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailPattern)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            terminosYCondiciones: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    register() {
        this.registerForm.markAllAsTouched();
        console.log(this.registerForm.value);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 38, vars: 10, consts: [[1, "register-container"], [1, "box"], [3, "formGroup", "ngSubmit"], ["formControlName", "nombre", "type", "text", "matInput", ""], [4, "ngIf"], ["formControlName", "dni", "type", "number", "matInput", ""], ["formControlName", "email", "matInput", "", "autocomplete", "email"], ["formControlName", "password", "matInput", "", "type", "password", "autocomplete", "new-password"], ["formControlName", "confirmPassword", "matInput", "", "type", "password", "autocomplete", "new-password"], ["formControlName", "terminosYCondiciones", 1, "primary-dark"], ["routerLink", "/"], ["mat-button", "", "type", "submit", 1, "primary-dark"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Nombre completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterComponent_mat_error_7_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_mat_error_12_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_mat_error_13_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RegisterComponent_mat_error_14_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_mat_error_19_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RegisterComponent_mat_error_20_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterComponent_mat_error_25_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Repetir contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RegisterComponent_mat_error_30_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Acepto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "t\u00E9rminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegisterComponent_span_35_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.nombre.errors == null ? null : ctx.registerForm.controls.nombre.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.dni.errors == null ? null : ctx.registerForm.controls.dni.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.dni.hasError("max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.dni.hasError("min-length"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.email.errors == null ? null : ctx.registerForm.controls.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.email.errors == null ? null : ctx.registerForm.controls.email.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.password.errors == null ? null : ctx.registerForm.controls.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm.controls.confirmPassword.errors == null ? null : ctx.registerForm.controls.confirmPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.registerForm.controls.terminosYCondiciones.value && ctx.registerForm.controls.terminosYCondiciones.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]], styles: [".register-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.register-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin: 24px 0px;\n  padding: 16px;\n  border-radius: 24px;\n}\n.register-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n}\n.register-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.register-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.register-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.register-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFFTjtBQURNO0VBQ0UsV0FBQTtBQUdSO0FBRE07RUFDRSxlQUFBO0FBR1I7QUFETTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7QUFHUjtBQURNO0VBQ0UsZ0JBQUE7QUFHUiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNGJiMGQwO1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBtYXQtY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgICAgICBmb250LXNpemU6IDc1JTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map