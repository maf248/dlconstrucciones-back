(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Ptbo:function(e,t,r){"use strict";r.r(t),r.d(t,"ProyectosModule",function(){return S});var o=r("ofXK"),i=r("tyNb"),a=r("XNiG"),s=r("1G5W"),n=r("nYR2"),c=r("PSD3"),l=r.n(c),d=r("3Pt+"),b=r("fXoL"),u=r("3T3M"),p=r("T9Ob"),m=r("IT5Z"),h=r("FQRV");function g(e,t){if(1&e){const e=b.Qb();b.Pb(0,"app-table",6),b.Wb("onRecargar",function(t){return b.gc(e),b.Yb(2).recargarProyectos(t)})("onCreate",function(){return b.gc(e),b.Yb(2).crearProyecto()})("onEdit",function(t){return b.gc(e),b.Yb(2).editarProyecto(t)})("onDelete",function(t){return b.gc(e),b.Yb(2).borrarProyecto(t)}),b.Ob()}if(2&e){const e=b.Yb(2);b.dc("encabezadosTabla",e.encabezadosTabla)("filasTabla",e.tableData)("totalSection",null==e.projects?null:e.projects.length)("loading",e.loading)}}function f(e,t){if(1&e&&(b.Pb(0,"div",2),b.Pb(1,"div",3),b.Pb(2,"div",4),b.kc(3,g,1,4,"app-table",5),b.Ob(),b.Ob(),b.Ob()),2&e){const e=b.Yb();b.zb(3),b.dc("ngIf",e.projects&&e.tableData)}}function y(e,t){1&e&&(b.Pb(0,"span",19),b.mc(1,"Este campo es requerido"),b.Ob())}function v(e,t){1&e&&(b.Pb(0,"span",19),b.mc(1,"Debe tener al menos 6 caracteres"),b.Ob())}function P(e,t){1&e&&(b.Pb(0,"span",19),b.mc(1,"Este campo es requerido"),b.Ob())}function O(e,t){1&e&&(b.Pb(0,"span",19),b.mc(1,"Debe tener al menos 10 caracteres"),b.Ob())}function F(e,t){if(1&e){const e=b.Qb();b.Pb(0,"div",2),b.Pb(1,"div",3),b.Pb(2,"div",7),b.Pb(3,"h1",8),b.mc(4),b.Ob(),b.Ob(),b.Pb(5,"div",4),b.Pb(6,"form",9),b.Wb("ngSubmit",function(){return b.gc(e),b.Yb().formSubmit()}),b.Pb(7,"div",4),b.Pb(8,"div",0),b.Pb(9,"div",2),b.Pb(10,"div",10),b.Pb(11,"div",11),b.Lb(12,"input",12),b.Pb(13,"div",13),b.kc(14,y,2,0,"span",14),b.kc(15,v,2,0,"span",14),b.Ob(),b.Ob(),b.Ob(),b.Pb(16,"div",10),b.Pb(17,"div",11),b.Lb(18,"textarea",15),b.Pb(19,"div",13),b.kc(20,P,2,0,"span",14),b.kc(21,O,2,0,"span",14),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(22,"div",16),b.Pb(23,"button",17),b.mc(24," Confirmar "),b.Ob(),b.Pb(25,"button",18),b.Wb("click",function(){return b.gc(e),b.Yb().recargarProyectos(!0)}),b.mc(26," Volver "),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=b.Yb();b.zb(4),b.oc("",e.crudAction," Proyecto/s"),b.zb(2),b.dc("formGroup",e.proyectForm),b.zb(8),b.dc("ngIf",(null==e.proyectForm.controls.title.errors?null:e.proyectForm.controls.title.errors.required)&&e.proyectForm.controls.title.touched),b.zb(1),b.dc("ngIf",(null==e.proyectForm.controls.title.errors?null:e.proyectForm.controls.title.errors.minlength)&&e.proyectForm.controls.title.touched),b.zb(5),b.dc("ngIf",(null==e.proyectForm.controls.description.errors?null:e.proyectForm.controls.description.errors.required)&&e.proyectForm.controls.description.touched),b.zb(1),b.dc("ngIf",(null==e.proyectForm.controls.description.errors?null:e.proyectForm.controls.description.errors.minlength)&&e.proyectForm.controls.description.touched)}}const C=[{path:"",component:(()=>{class e{constructor(e,t,r,o,i){this.usersService=e,this.adminPanelCrudService=t,this.currencyPipe=r,this.fb=o,this.authService=i,this.someClass=!0,this.projects=[],this.tableData=[],this.encabezadosTabla=["Nombre del proyecto","Total","Debe","Usuario"],this.loading=!0,this.isCreating=!1,this.isEditing=!1,this.crudAction="",this.imageToShow="../../../../../assets/no-image.png",this.acceptedFileTypes=!0,this.destroy$=new a.a,this.createForm()}createForm(){this.proyectForm=this.fb.group({title:["",[d.m.required,d.m.minLength(6)]],description:["",[d.m.required,d.m.minLength(10)]],image:[""]})}ngOnInit(){this.getProyects()}formSubmit(){var e,t;if(this.proyectForm.markAllAsTouched(),this.proyectForm.valid){const r=new FormData;r.append("title",null===(e=this.proyectForm.controls.title)||void 0===e?void 0:e.value),r.append("description",null===(t=this.proyectForm.controls.description)||void 0===t?void 0:t.value),r.append("image",this.fileToUpload),"Crear"===this.crudAction?this.crearProyectoEnLaDb(r):this.editarProyectoEnLaDb(r)}}showSelectedImage(e){var t;const r=null===(t=e.target)||void 0===t?void 0:t.files[0];if(this.acceptedFileTypes="image/jpg"===r.type||"image/jpeg"===r.type||"image/png"===r.type,r&&this.acceptedFileTypes){this.fileToUpload=r;const e=new FileReader;e.readAsDataURL(r),e.onload=()=>this.imageToShow=e.result}else this.imageToShow="../../../../../assets/no-image.png"}getProyects(){this.usersService.getAllProjects().pipe(Object(s.a)(this.destroy$),Object(n.a)(()=>this.loading=!1)).subscribe(e=>{var t;(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status.toString().includes("20"))?(this.projects=null==e?void 0:e.data,this.setTableData()):l.a.fire("\xa1Lo sentimos!","No pudimos cargar la informaci\xf3n, por favor recarga la p\xe1gina","error")},()=>l.a.fire("\xa1Lo sentimos!","No pudimos cargar la informaci\xf3n, por favor recarga la p\xe1gina","error"))}setTableData(){this.projects.forEach(e=>{var t,r,o,i;return this.tableData.push({imagen:"../../../../../assets/no-image.png",id:e.id,item2:e.title?e.title:`Proyecto usuario: ${null===(t=e.Users)||void 0===t?void 0:t.first_name} ${null===(r=e.Users)||void 0===r?void 0:r.last_name}`,item3:e.total?this.setCurrencyFormat(e.total):"NULL",item4:null!==e.balance||void 0!==e.balance?this.setCurrencyFormat(e.balance):"NULL",item6:`${null===(o=e.Users)||void 0===o?void 0:o.first_name} ${null===(i=e.Users)||void 0===i?void 0:i.last_name}`})})}setCurrencyFormat(e){return this.currencyPipe.transform(e,"$")}recargarProyectos(e){e&&(this.resetsetControls(),this.tableData=[],this.projects=[],this.isCreating=!1,this.isEditing=!1,this.getProyects())}resetsetControls(){this.proyectForm.controls.title.setValue(""),this.proyectForm.controls.description.setValue(""),this.proyectForm.controls.image.setValue(""),this.imageToShow="../../../../../assets/no-image.png"}crearProyecto(){this.crudAction="Crear",this.isCreating=!0,this.isEditing=!1}crearProyectoEnLaDb(e){this.adminPanelCrudService.create(e,"projects").pipe(Object(s.a)(this.destroy$)).subscribe(e=>{var t;this.recargarProyectos(!0),this.alertFailureOrSuccess(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status)},()=>{this.recargarProyectos(!0),l.a.fire("Error","No pudimos crear el inter\xe9s, por favor intent\xe1 de nuevo recargando la p\xe1gina","error")})}editarProyecto(e){this.crudAction="Editar",this.isEditing=!0,this.isCreating=!1;const t=this.projects.find(t=>t.id===e);t&&(this.projectID=e,this.proyectForm.controls.title.setValue(t.title))}editarProyectoEnLaDb(e){this.adminPanelCrudService.edit(this.projectID,e,"projects").pipe(Object(s.a)(this.destroy$)).subscribe(e=>{var t;this.recargarProyectos(!0),this.alertFailureOrSuccess(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status)},()=>{this.recargarProyectos(!0),l.a.fire("Error","Tuvimos un error desconocido, por favor intenta recargar la p\xe1gina o espera un rato.","error")})}borrarProyecto(e){l.a.fire({title:"\xbfSeguro quer\xe9s elimninar el trabajo seleccionado?",showDenyButton:!0,confirmButtonText:"Si, borrar",denyButtonText:"No"}).then(t=>{t.isConfirmed&&this.borrarProyectoEnLaDb(e)})}borrarProyectoEnLaDb(e){this.adminPanelCrudService.delete(e,"projects").pipe(Object(s.a)(this.destroy$)).subscribe(e=>{var t;this.recargarProyectos(!0),this.alertFailureOrSuccess(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status)},()=>{l.a.fire("\xa1Lo sentimos!","No pudimos realizar el pedido correctamente, por favor actualiz\xe1 la p\xe1gina e intent\xe1 de nuevo","error")})}alertFailureOrSuccess(e){200===e||201===e?l.a.fire("\xa1Excelente!","La zona se cre\xf3 correctamente","success"):l.a.fire("\xa1Lo sentimos!","No pudimos cargar la informaci\xf3n, por favor recarga la p\xe1gina","error")}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(u.a),b.Kb(p.a),b.Kb(o.c),b.Kb(d.c),b.Kb(m.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-proyectos"]],hostVars:2,hostBindings:function(e,t){2&e&&b.Cb("admin-panel-container",t.someClass)},decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],["title","Proyectos",3,"encabezadosTabla","filasTabla","totalSection","loading","onRecargar","onCreate","onEdit","onDelete",4,"ngIf"],["title","Proyectos",3,"encabezadosTabla","filasTabla","totalSection","loading","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"input-group"],["type","text","id","exampleInputuname2","placeholder","T\xedtulo","formControlName","title",1,"form-control"],[1,"p-2"],["class","text-danger",4,"ngIf"],["type","text","id","exampleInputuname2","placeholder","Descripci\xf3n","formControlName","description","rows","5",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],[1,"text-danger"]],template:function(e,t){1&e&&(b.Pb(0,"div",0),b.kc(1,f,4,1,"div",1),b.kc(2,F,27,6,"div",1),b.Ob()),2&e&&(b.zb(1),b.dc("ngIf",!t.isEditing&&!t.isCreating),b.zb(1),b.dc("ngIf",t.isCreating||t.isEditing))},directives:[o.l,h.a,d.n,d.h,d.e,d.b,d.g,d.d],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({imports:[[i.f.forChild(C)],i.f]}),e})();var D=r("6eV/");let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({providers:[o.c],imports:[[o.b,T,d.k,D.a]]}),e})()}}]);