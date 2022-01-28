(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3T3M":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin-panel/services/users.service.ts ***!
  \***************************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UsersService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Obtiene una lista de todos los usuarios registrados en la app con su información completa.
     *
     * @return {*}  {Observable<AllUsersRes>}
     * @memberof UsersService
     */
    getAllUsers() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/users`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "o1z6":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin-panel/services/projects.service.ts ***!
  \******************************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProjectsService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Obtiene una lista de todos los proyectos existentes en la app con su información completa.
     *
     * @return {*}  {Observable<AllProjectsRes>}
     * @memberof UsersService
     */
    getAllProjects() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/projects`);
    }
    /**
     * Obtiene el proyecto relacionado al id y el usuario relacionado a ese proyecto.
     *
     * @return {*}  {Observable<OneProjectRes>}
     * @memberof UsersService
     */
    getOneProject(projectId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/projects/${projectId}`);
    }
    /**
     * Crea un nuevo registro en la tabla indicada
     *
     * @param payload: FormData
     * @param tabla: AdminPanelCrudRoutes
     * @return {*}  {Observable<any>}
     * @memberof AdminPanelCrudService
     */
    create(payload, tabla) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/${tabla}/create`, payload);
    }
    /**
     * Edita un registro en la tabla indicada
     *
     * @param id: number
     * @param payload: FormData
     * @return {*}  {Observable<any>}
     * @memberof AdminPanelCrudService
     */
    edit(id, payload, tabla) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/${tabla}/edit/${id}`, payload);
    }
    /**
     * Trae un cashflow de un usuario
     *
     * @param cashflowName: string
     * @return {*}  {Observable<Blob>}
     * @memberof AdminPanelCrudService
     */
    getCashflow(cashflowName) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/projects/cashflow/${cashflowName}`, { responseType: 'blob' });
    }
    /**
     * Trae un asset de un proyecto
     *
     * @param fileName: string
     * @return {*}  {Observable<Blob>}
     * @memberof AdminPanelCrudService
     */
    getAssetsDeUnProyecto(fileName) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_BASE_URL}/projects/assets/${fileName}`, { responseType: 'blob' });
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map