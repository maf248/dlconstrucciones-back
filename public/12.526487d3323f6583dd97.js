(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{cH24:function(e,a,t){"use strict";t.r(a),t.d(a,"UsersModule",function(){return U});var s=t("ofXK"),n=t("tyNb"),o=t("XNiG"),r=t("nYR2"),i=t("PSD3"),l=t.n(i),c=t("AytR"),u=t("fXoL"),b=t("3T3M"),d=t("FQRV");function h(e,a){if(1&e){const e=u.Pb();u.Ob(0,"app-table",1),u.Vb("onRecargar",function(a){return u.ec(e),u.Xb().recargarUsuarios(a)}),u.Nb()}if(2&e){const e=u.Xb();u.bc("encabezadosTabla",e.encabezadosTabla)("filasTabla",e.tableData)("totalSection",null==e.users?null:e.users.length)("loading",e.loading)}}const f=[{path:"",component:(()=>{class e{constructor(e){this.usersService=e,this.someClass=!0,this.users=[],this.encabezadosTabla=["Nombre","Email","Tel\xe9fono","Rol"],this.tableData=[],this.loading=!0,this.destroy$=new o.a}ngOnInit(){this.loadUsers()}loadUsers(){this.loading=!0,this.usersService.getAllUsers().pipe(Object(r.a)(()=>this.loading=!1)).subscribe(e=>{this.setUsers(e),this.mapUsersForTable()})}setUsers(e){var a;this.users=null===(a=null==e?void 0:e.data)||void 0===a?void 0:a.map(e=>({apellido:e.last_name,email:e.email,nombre:e.first_name,dni:e.dni,role:e.role,phone:e.phone,avatar:e.avatar,getAvatar:()=>{let a="";return a=e.avatar?`${c.a.API_IMAGE_URL}/users/${e.avatar}`:"assets/no-image.png",a}}))}mapUsersForTable(){this.tableData=this.users.map(e=>({imagen:e.getAvatar(),item2:`${e.nombre} ${e.apellido}`,item3:e.email?e.email:"Vac\xedo",item4:e.phone?e.phone:"Vac\xedo",item6:e.role?e.role:"Vac\xedo"}))}recargarUsuarios(e){e&&(this.tableData=[],this.loadUsers())}deleteUser(e){l.a.fire({title:"Are you sure?",text:`You are about to delete user: ${e.nombre}`,icon:"question",showCancelButton:!0,confirmButtonText:"Yes"}).then(e=>{})}showConfirmationOfDelete(e){l.a.fire({title:"Deleted",text:`User ${e} has been succesfully deleted`,icon:"success",confirmButtonText:"OK"}).then(e=>{e.isConfirmed&&this.loadUsers()})}changeRole(e){}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(a){return new(a||e)(u.Jb(b.a))},e.\u0275cmp=u.Db({type:e,selectors:[["app-users"]],hostVars:2,hostBindings:function(e,a){2&e&&u.Bb("full-width",a.someClass)},decls:1,vars:1,consts:[["title","Usuarios",3,"encabezadosTabla","filasTabla","totalSection","loading","onRecargar",4,"ngIf"],["title","Usuarios",3,"encabezadosTabla","filasTabla","totalSection","loading","onRecargar"]],template:function(e,a){1&e&&u.hc(0,h,1,4,"app-table",0),2&e&&u.bc("ngIf",a.users&&a.tableData)},directives:[s.j,d.a],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({imports:[[n.f.forChild(f)],n.f]}),e})();var p=t("3Pt+"),g=t("6eV/");let U=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({imports:[[s.b,m,p.f,g.a]]}),e})()}}]);