(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2FVf":function(e,i,t){"use strict";t.r(i),t.d(i,"ServiciosModule",function(){return I});var r=t("ofXK"),s=t("tyNb"),o=t("XNiG"),a=t("1G5W"),n=t("AytR"),c=t("PSD3"),d=t.n(c),b=t("3Pt+"),l=t("ZLyn"),u=t("fXoL"),v=t("N+K7"),m=t("T9Ob"),h=t("FQRV");function g(e,i){if(1&e){const e=u.Qb();u.Pb(0,"app-table",6),u.Wb("onRecargar",function(i){return u.gc(e),u.Yb(2).recargarServicios(i)})("onCreate",function(){return u.gc(e),u.Yb(2).crearServicio()})("onEdit",function(i){return u.gc(e),u.Yb(2).editarServicio(i)})("onDelete",function(i){return u.gc(e),u.Yb(2).borrarServicio(i)})("onAddAssets",function(i){return u.gc(e),u.Yb(2).addAssets(i)})("onAddContents",function(i){return u.gc(e),u.Yb(2).addContents(i)}),u.Ob()}if(2&e){const e=u.Yb(2);u.dc("filasTabla",e.tableData)("encabezadosTabla",e.encabezadosTabla)("title","Servicios")("totalSection",null==e.tableData?null:e.tableData.length)("addAssets",!0)("addContents",!0)}}function p(e,i){if(1&e&&(u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",4),u.kc(3,g,1,6,"app-table",5),u.Ob(),u.Ob(),u.Ob()),2&e){const e=u.Yb();u.zb(3),u.dc("ngIf",e.tableData)}}function f(e,i){if(1&e&&(u.Pb(0,"span",23),u.mc(1),u.Ob()),2&e){const e=u.Yb(2);u.zb(1),u.nc(e.creationImageError)}}function S(e,i){1&e&&(u.Pb(0,"span",23),u.mc(1,"Los formatos aceptados son JPG, JPEG y PNG"),u.Ob())}function O(e,i){1&e&&(u.Pb(0,"span",23),u.mc(1,"Este campo es requerido"),u.Ob())}function P(e,i){1&e&&(u.Pb(0,"span",23),u.mc(1,"Debe tener al menos 6 caracteres"),u.Ob())}function y(e,i){if(1&e){const e=u.Qb();u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",7),u.Pb(3,"h1",8),u.mc(4),u.Ob(),u.Ob(),u.Pb(5,"div",4),u.Pb(6,"form",9),u.Wb("ngSubmit",function(){return u.gc(e),u.Yb().formSubmit()}),u.Pb(7,"div",4),u.Pb(8,"div",10),u.Pb(9,"div",11),u.Wb("click",function(){return u.gc(e),u.fc(12).click()}),u.Lb(10,"img",12),u.Pb(11,"input",13,14),u.Wb("change",function(i){return u.gc(e),u.Yb().showSelectedImage(i)}),u.Ob(),u.Pb(13,"div",15),u.kc(14,f,2,1,"span",16),u.kc(15,S,2,0,"span",16),u.Ob(),u.Ob(),u.Ob(),u.Pb(16,"div",0),u.Pb(17,"div",2),u.Pb(18,"div",17),u.Pb(19,"div",18),u.Lb(20,"input",19),u.Pb(21,"div",15),u.kc(22,O,2,0,"span",16),u.kc(23,P,2,0,"span",16),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(24,"div",20),u.Pb(25,"button",21),u.mc(26," Confirmar "),u.Ob(),u.Pb(27,"button",22),u.Wb("click",function(){return u.gc(e),u.Yb().recargarServicios(!0)}),u.mc(28," Volver "),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob()}if(2&e){const e=u.Yb();u.zb(4),u.oc("",e.crudAction," servicio"),u.zb(2),u.dc("formGroup",e.servicesForm),u.zb(4),u.dc("src",e.imageToShow,u.hc),u.zb(1),u.dc("hidden",!0),u.zb(3),u.dc("ngIf",e.creationImageError),u.zb(1),u.dc("ngIf",!e.acceptedFileTypes),u.zb(7),u.dc("ngIf",(null==e.servicesForm.controls.title.errors?null:e.servicesForm.controls.title.errors.required)&&e.servicesForm.controls.title.touched),u.zb(1),u.dc("ngIf",(null==e.servicesForm.controls.title.errors?null:e.servicesForm.controls.title.errors.minlength)&&e.servicesForm.controls.title.touched)}}const C=[{path:"",component:(()=>{class e{constructor(e,i,t,r){this.httpSrv=e,this.fb=i,this.adminPanelCrudService=t,this.router=r,this.someClass=!0,this.encabezadosTabla=["T\xedtulo"],this.tableData=[],this.servicios=[],this.isEditing=!1,this.isCreating=!1,this.crudAction="",this.imageToShow="../../../../../assets/no-image.png",this.acceptedFileTypes=!0,this.creationImageError="",this.destroy$=new o.a,this.createForm()}createForm(){this.servicesForm=this.fb.group({image:[""],title:["",[b.m.required,b.m.minLength(6)]]})}ngOnInit(){this.getServicios()}getServicios(){this.httpSrv.getAllServices().pipe(Object(a.a)(this.destroy$)).subscribe(e=>{var i;(null===(i=e.meta)||void 0===i?void 0:i.status.toString().includes("20"))?this.setTableData(e):Object(l.e)(e)},e=>Object(l.d)(e))}setTableData(e){var i;null===(i=null==e?void 0:e.data)||void 0===i||i.forEach(e=>{this.tableData.push({imagen:`${n.a.API_IMAGE_URL}/${e.image}`,item2:e.title,id:e.id}),this.servicios.push(e)})}formSubmit(){var e;if(this.servicesForm.markAllAsTouched(),"Crear"!==this.crudAction||this.servicesForm.controls.image.value){if(this.servicesForm.valid){const i=new FormData;i.append("title",null===(e=this.servicesForm.controls.title)||void 0===e?void 0:e.value),this.fileToUpload&&i.append("image",this.fileToUpload),"Crear"===this.crudAction?this.crearServicioEnLaDb(i):this.editarServicioEnLaDb(i)}}else this.creationImageError="La im\xe1gen es obligatoria"}recargarServicios(e){e&&(this.resetsetControls(),this.tableData=[],this.servicios=[],this.isCreating=!1,this.isEditing=!1,this.getServicios())}resetsetControls(){var e,i,t,r;null===(i=null===(e=this.servicesForm.controls)||void 0===e?void 0:e.title)||void 0===i||i.setValue(""),null===(r=null===(t=this.servicesForm.controls)||void 0===t?void 0:t.image)||void 0===r||r.setValue(""),this.imageToShow="../../../../../assets/no-image.png"}showSelectedImage(e){var i;if("Crear"===this.crudAction&&!this.servicesForm.controls.image.value)return void(this.creationImageError="La im\xe1gen es obligatoria");this.creationImageError="";const t=null===(i=e.target)||void 0===i?void 0:i.files[0];if(this.acceptedFileTypes="image/jpg"===t.type||"image/jpeg"===t.type||"image/png"===t.type,t&&this.acceptedFileTypes){this.fileToUpload=t;const e=new FileReader;e.readAsDataURL(t),e.onload=()=>this.imageToShow=e.result}else this.imageToShow="../../../../../assets/no-image.png"}crearServicio(){this.isEditing=!1,this.isCreating=!0,this.crudAction="Crear"}crearServicioEnLaDb(e){this.adminPanelCrudService.create(e,"services").pipe(Object(a.a)(this.destroy$)).subscribe(e=>{this.recargarServicios(!0),Object(l.a)(e,"cre\xf3","servicio")},e=>{this.recargarServicios(!0),Object(l.e)(e)})}editarServicio(e){this.isEditing=!0,this.isCreating=!1,this.crudAction="Editar";const i=this.servicios.find(i=>i.id===e);i&&(this.servicioID=e,this.servicesForm.controls.title.setValue(i.title),this.imageToShow=`${n.a.API_IMAGE_URL}/${i.image}`)}editarServicioEnLaDb(e){this.adminPanelCrudService.edit(this.servicioID,e,"services").pipe(Object(a.a)(this.destroy$)).subscribe(e=>{this.recargarServicios(!0),Object(l.a)(e,"cre\xf3","servicio")},e=>{this.recargarServicios(!0),Object(l.e)(e)})}borrarServicio(e){d.a.fire({title:"\xbfSeguro quer\xe9s elimninar el servicio seleccionado?",showDenyButton:!0,confirmButtonText:"Si, borrar",denyButtonText:"No"}).then(i=>{i.isConfirmed&&this.borrarServicioEnLaDb(e)})}borrarServicioEnLaDb(e){this.adminPanelCrudService.delete(e,"services").pipe(Object(a.a)(this.destroy$)).subscribe(e=>{this.recargarServicios(!0),Object(l.a)(e,"borr\xf3","servicio")},e=>{Object(l.e)(e)})}addAssets(e){this.router.navigateByUrl(`/admin/servicios/pictures/${e}`)}addContents(e){this.router.navigateByUrl(`/admin/servicios/contenidos/${e}`)}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(u.Kb(v.a),u.Kb(b.c),u.Kb(m.a),u.Kb(s.c))},e.\u0275cmp=u.Eb({type:e,selectors:[["app-servicios"]],hostVars:2,hostBindings:function(e,i){2&e&&u.Cb("admin-panel-container",i.someClass)},decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],[3,"filasTabla","encabezadosTabla","title","totalSection","addAssets","addContents","onRecargar","onCreate","onEdit","onDelete","onAddAssets","onAddContents",4,"ngIf"],[3,"filasTabla","encabezadosTabla","title","totalSection","addAssets","addContents","onRecargar","onCreate","onEdit","onDelete","onAddAssets","onAddContents"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"row","justify-content-center"],[1,"col-md-4","mb-2",3,"click"],["alt","Trabajo realizado",1,"img-responsive",3,"src"],["type","file","formControlName","image",3,"hidden","change"],["imageInput",""],[1,"p-2"],["class","text-danger",4,"ngIf"],[1,"form-group"],[1,"input-group"],["type","text","id","exampleInputuname2","placeholder","T\xedtulo","formControlName","title",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],[1,"text-danger"]],template:function(e,i){1&e&&(u.Pb(0,"div",0),u.kc(1,p,4,1,"div",1),u.kc(2,y,29,8,"div",1),u.Ob()),2&e&&(u.zb(1),u.dc("ngIf",!i.isEditing&&!i.isCreating),u.zb(1),u.dc("ngIf",i.isCreating||i.isEditing))},directives:[r.m,h.a,b.n,b.h,b.e,b.b,b.g,b.d],styles:[""]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[s.f.forChild(C)],s.f]}),e})();var T=t("6eV/");let I=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[r.c,A,T.a,b.k]]}),e})()}}]);