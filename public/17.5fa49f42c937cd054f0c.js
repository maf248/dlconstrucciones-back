(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{cH24:function(e,r,t){"use strict";t.r(r),t.d(r,"UsersModule",function(){return E});var i=t("ofXK"),o=t("tyNb"),a=t("XNiG"),s=t("1G5W"),n=t("PSD3"),l=t.n(n),c=t("AytR"),b=t("3Pt+"),u=t("ZLyn"),d=t("fXoL"),m=t("3T3M"),f=t("T9Ob"),h=t("IT5Z"),g=t("FQRV");function p(e,r){if(1&e){const e=d.Qb();d.Pb(0,"app-table",6),d.Wb("onRecargar",function(r){return d.gc(e),d.Yb(2).recargarUsuarios(r)})("onCreate",function(){return d.gc(e),d.Yb(2).crearUsuario()})("onEdit",function(r){return d.gc(e),d.Yb(2).changeRole(r)})("onDelete",function(r){return d.gc(e),d.Yb(2).borrarUSuario(r)}),d.Ob()}if(2&e){const e=d.Yb(2);d.dc("encabezadosTabla",e.encabezadosTabla)("filasTabla",e.tableData)("totalSection",null==e.users?null:e.users.length)}}function v(e,r){if(1&e&&(d.Pb(0,"div",2),d.Pb(1,"div",3),d.Pb(2,"div",4),d.kc(3,p,1,3,"app-table",5),d.Ob(),d.Ob(),d.Ob()),2&e){const e=d.Yb();d.zb(3),d.dc("ngIf",e.users&&e.tableData&&!e.isEditingRole)}}function O(e,r){1&e&&(d.Pb(0,"span",19),d.mc(1,"Este dato es requerido"),d.Ob())}function U(e,r){if(1&e){const e=d.Qb();d.Pb(0,"div",2),d.Pb(1,"div",3),d.Pb(2,"div",7),d.Pb(3,"h1",8),d.mc(4,"Editar usuario"),d.Ob(),d.Ob(),d.Pb(5,"form",9),d.Wb("ngSubmit",function(){return d.gc(e),d.Yb().formSubmit()}),d.Pb(6,"div",4),d.Pb(7,"div",10),d.Pb(8,"label"),d.mc(9,"Rol del usuario*"),d.Ob(),d.Pb(10,"select",11),d.Pb(11,"option",12),d.mc(12,"Usuario com\xfan"),d.Ob(),d.Pb(13,"option",13),d.mc(14,"Usuario adminitrativo"),d.Ob(),d.Ob(),d.Pb(15,"div",14),d.kc(16,O,2,0,"span",15),d.Ob(),d.Ob(),d.Ob(),d.Pb(17,"div",16),d.Pb(18,"button",17),d.mc(19," Confirmar "),d.Ob(),d.Pb(20,"button",18),d.Wb("click",function(){return d.gc(e),d.Yb().recargarUsuarios(!0)}),d.mc(21," Volver "),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob()}if(2&e){const e=d.Yb();d.zb(5),d.dc("formGroup",e.editRoleForm),d.zb(11),d.dc("ngIf",(null==e.editRoleForm.controls.role.errors?null:e.editRoleForm.controls.role.errors.required)&&e.editRoleForm.controls.role.touched)}}const P=[{path:"",component:(()=>{class e{constructor(e,r,t,i,o){this.usersService=e,this.router=r,this.adminPanelCrudService=t,this.fb=i,this.authService=o,this.someClass=!0,this.users=[],this.tableData=[],this.encabezadosTabla=["Nombre","Email","Tel\xe9fono","Rol"],this.isEditingRole=!1,this.destroy$=new a.a,this.createForm()}get activeUserRole(){return this.authService.getUser().role}createForm(){this.editRoleForm=this.fb.group({role:["",b.m.required]})}ngOnInit(){this.loadUsers()}formSubmit(){this.editRoleForm.valid?this.changeRoleEnLaDb():this.editRoleForm.markAllAsTouched()}loadUsers(){this.usersService.getAllUsers().pipe(Object(s.a)(this.destroy$)).subscribe(e=>{e.meta.status.toString().includes("20")?(this.setUsers(e),this.mapUsersForTable()):Object(u.d)(e)},e=>Object(u.c)(e))}setUsers(e){var r;this.users=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.map(e=>({id:e.id,apellido:e.last_name,email:e.email,nombre:e.first_name,dni:e.dni,role:e.role,phone:e.phone,avatar:e.avatar,project:e.Projects,getAvatar:()=>{let r="";return r=e.avatar?`${c.a.API_IMAGE_URL}/users/${e.avatar}`:"assets/no-image.png",r}}))}mapUsersForTable(){this.tableData=this.users.map(e=>({imagen:e.getAvatar(),item2:`${e.nombre} ${e.apellido}`,item3:e.email?e.email:"Vac\xedo",item4:e.phone?e.phone:"Vac\xedo",item6:e.role?e.role:"Vac\xedo",id:e.id}))}recargarUsuarios(e){e&&(this.tableData=[],this.isEditingRole=!1,this.loadUsers())}crearUsuario(){this.router.navigateByUrl("/main/auth/register")}changeRole(e){if(this.verificarNiverDeUsuario()){const r=this.users.find(r=>r.id===e);if(r){if("master"===r.role)return void Object(u.b)("Prohibido","El rol de este usuario no se puede editar","OK","warning");this.isEditingRole=!0,this.userID=r.id,this.editRoleForm.controls.role.setValue(r.role)}}}changeRoleEnLaDb(){this.adminPanelCrudService.editUserRole(this.userID,this.editRoleForm.value).pipe(Object(s.a)(this.destroy$)).subscribe(e=>{this.recargarUsuarios(!0),Object(u.a)(e,"edit\xf3","usuario")},e=>{this.recargarUsuarios(!0),Object(u.c)(e)})}borrarUSuario(e){if(this.verificarNiverDeUsuario()){const r=this.users.find(r=>r.id===e);if(r){if("master"===(null==r?void 0:r.role))return void Object(u.b)("Prohibido","Este usuario no se puede borrar","OK","warning");l.a.fire({title:"\xbfEstas seguro?",text:`Estas a punto de borrar al usuario: ${null==r?void 0:r.nombre} ${null==r?void 0:r.apellido}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si",cancelButtonText:"No"}).then(e=>{e.isConfirmed&&this.borrarUsuarioDeLaDb(r)})}}}borrarUsuarioDeLaDb(e){this.adminPanelCrudService.delete(null==e?void 0:e.id,"users").pipe(Object(s.a)(this.destroy$)).subscribe(()=>this.showConfirmationOfDelete(`${null==e?void 0:e.nombre} ${null==e?void 0:e.apellido}`),e=>Object(u.c)(e))}verificarNiverDeUsuario(){return"master"===this.activeUserRole||(l.a.fire("No permitido","No ten\xe9s los permisos para realizar esa acci\xf3n. Comunicate con el due\xf1o de la p\xe1gina","warning"),!1)}showConfirmationOfDelete(e){l.a.fire({title:"Eliminado",text:`El usuario ${e} fue eliminado con \xe9xito`,icon:"success",confirmButtonText:"OK"}).then(e=>{e.isConfirmed&&this.recargarUsuarios(!0)})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(d.Kb(m.a),d.Kb(o.c),d.Kb(f.a),d.Kb(b.c),d.Kb(h.a))},e.\u0275cmp=d.Eb({type:e,selectors:[["app-users"]],hostVars:2,hostBindings:function(e,r){2&e&&d.Cb("admin-panel-container",r.someClass)},decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],["title","Usuarios",3,"encabezadosTabla","filasTabla","totalSection","onRecargar","onCreate","onEdit","onDelete",4,"ngIf"],["title","Usuarios",3,"encabezadosTabla","filasTabla","totalSection","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","role",1,"form-control","custom-select"],["value","user"],["value","admin"],[1,"p-2"],["class","text-danger",4,"ngIf"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],[1,"text-danger"]],template:function(e,r){1&e&&(d.Pb(0,"div",0),d.kc(1,v,4,1,"div",1),d.kc(2,U,22,2,"div",1),d.Ob()),2&e&&(d.zb(1),d.dc("ngIf",!r.isEditingRole),d.zb(1),d.dc("ngIf",r.isEditingRole))},directives:[i.m,g.a,b.n,b.h,b.e,b.l,b.g,b.d,b.i,b.o],styles:[""]}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d.Ib({type:e}),e.\u0275inj=d.Hb({imports:[[o.f.forChild(P)],o.f]}),e})();var D=t("6eV/");let E=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d.Ib({type:e}),e.\u0275inj=d.Hb({imports:[[i.c,R,b.f,D.a,b.k]]}),e})()}}]);