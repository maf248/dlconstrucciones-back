(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2FVf":function(e,i,r){"use strict";r.r(i),r.d(i,"ServiciosModule",function(){return E});var t=r("ofXK"),o=r("tyNb"),s=r("XNiG"),a=r("1G5W"),n=r("nYR2"),c=r("AytR"),l=r("PSD3"),d=r.n(l),b=r("3Pt+"),u=r("fXoL"),v=r("N+K7"),m=r("T9Ob"),g=r("FQRV");function h(e,i){if(1&e){const e=u.Qb();u.Pb(0,"app-table",6),u.Wb("onRecargar",function(i){return u.gc(e),u.Yb(2).recargarServicios(i)})("onCreate",function(){return u.gc(e),u.Yb(2).crearServicio()})("onEdit",function(i){return u.gc(e),u.Yb(2).editarServicio(i)})("onDelete",function(i){return u.gc(e),u.Yb(2).borrarServicio(i)}),u.Ob()}if(2&e){const e=u.Yb(2);u.dc("loading",e.loading)("filasTabla",e.tableData)("encabezadosTabla",e.encabezadosTabla)("title","Servicios")("totalSection",null==e.tableData?null:e.tableData.length)}}function p(e,i){if(1&e&&(u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",4),u.kc(3,h,1,5,"app-table",5),u.Ob(),u.Ob(),u.Ob()),2&e){const e=u.Yb();u.zb(3),u.dc("ngIf",e.tableData)}}function f(e,i){1&e&&(u.Pb(0,"span",23),u.mc(1,"Este dato es requerido"),u.Ob())}function S(e,i){1&e&&(u.Pb(0,"span",23),u.mc(1,"Los formatos aceptados son JPG, JPEG y PNG"),u.Ob())}function O(e,i){1&e&&(u.Pb(0,"span",23),u.mc(1,"Este campo es requerido"),u.Ob())}function P(e,i){1&e&&(u.Pb(0,"span",23),u.mc(1,"Debe tener al menos 6 caracteres"),u.Ob())}function y(e,i){if(1&e){const e=u.Qb();u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",7),u.Pb(3,"h1",8),u.mc(4),u.Ob(),u.Ob(),u.Pb(5,"div",4),u.Pb(6,"form",9),u.Wb("ngSubmit",function(){return u.gc(e),u.Yb().formSubmit()}),u.Pb(7,"div",4),u.Pb(8,"div",10),u.Pb(9,"div",11),u.Wb("click",function(){return u.gc(e),u.fc(12).click()}),u.Lb(10,"img",12),u.Pb(11,"input",13,14),u.Wb("change",function(i){return u.gc(e),u.Yb().showSelectedImage(i)}),u.Ob(),u.Pb(13,"div",15),u.kc(14,f,2,0,"span",16),u.kc(15,S,2,0,"span",16),u.Ob(),u.Ob(),u.Ob(),u.Pb(16,"div",0),u.Pb(17,"div",2),u.Pb(18,"div",17),u.Pb(19,"div",18),u.Lb(20,"input",19),u.Pb(21,"div",15),u.kc(22,O,2,0,"span",16),u.kc(23,P,2,0,"span",16),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(24,"div",20),u.Pb(25,"button",21),u.mc(26," Confirmar "),u.Ob(),u.Pb(27,"button",22),u.Wb("click",function(){return u.gc(e),u.Yb().recargarServicios(!0)}),u.mc(28," Volver "),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob()}if(2&e){const e=u.Yb();u.zb(4),u.oc("",e.crudAction," servicio"),u.zb(2),u.dc("formGroup",e.servicesForm),u.zb(4),u.dc("src",e.imageToShow,u.hc),u.zb(1),u.dc("hidden",!0),u.zb(3),u.dc("ngIf",(null==e.servicesForm.controls.image.errors?null:e.servicesForm.controls.image.errors.required)&&e.servicesForm.controls.image.touched),u.zb(1),u.dc("ngIf",!e.acceptedFileTypes),u.zb(7),u.dc("ngIf",(null==e.servicesForm.controls.title.errors?null:e.servicesForm.controls.title.errors.required)&&e.servicesForm.controls.title.touched),u.zb(1),u.dc("ngIf",(null==e.servicesForm.controls.title.errors?null:e.servicesForm.controls.title.errors.minlength)&&e.servicesForm.controls.title.touched)}}const F=[{path:"",component:(()=>{class e{constructor(e,i,r){this.httpSrv=e,this.fb=i,this.adminPanelCrudService=r,this.someClass=!0,this.encabezadosTabla=["T\xedtulo"],this.tableData=[],this.servicios=[],this.loading=!0,this.isEditing=!1,this.isCreating=!1,this.crudAction="",this.imageToShow="../../../../../assets/no-image.png",this.acceptedFileTypes=!0,this.destroy$=new s.a,this.createForm()}createForm(){this.servicesForm=this.fb.group({image:[""],title:["",[b.m.required,b.m.minLength(6)]]})}ngOnInit(){this.getServicios()}getServicios(){this.httpSrv.getAllServices().pipe(Object(a.a)(this.destroy$),Object(n.a)(()=>this.loading=!1)).subscribe(e=>{var i;null===(i=null==e?void 0:e.data)||void 0===i||i.forEach(e=>{this.tableData.push({imagen:`${c.a.API_IMAGE_URL}/${e.image}`,item2:e.title,id:e.id}),this.servicios.push(e)})},()=>{d.a.fire("\xa1Lo sentimos!","No pudimos cargar los servicios como esperabamos, intent\xe1 de nuevo y sino ponete en contacto con tu proveedor de internet","warning")})}formSubmit(){var e;if(this.servicesForm.markAllAsTouched(),this.servicesForm.valid){const i=new FormData;i.append("title",null===(e=this.servicesForm.controls.title)||void 0===e?void 0:e.value),i.append("image",this.fileToUpload),"Crear"===this.crudAction?this.crearServicioEnLaDb(i):this.editarServicioEnLaDb(i)}}recargarServicios(e){e&&(this.resetsetControls(),this.tableData=[],this.servicios=[],this.isCreating=!1,this.isEditing=!1,this.getServicios())}resetsetControls(){var e,i,r,t;null===(i=null===(e=this.servicesForm.controls)||void 0===e?void 0:e.title)||void 0===i||i.setValue(""),null===(t=null===(r=this.servicesForm.controls)||void 0===r?void 0:r.image)||void 0===t||t.setValue(""),this.imageToShow="../../../../../assets/no-image.png"}showSelectedImage(e){var i;const r=null===(i=e.target)||void 0===i?void 0:i.files[0];if(this.acceptedFileTypes="image/jpg"===r.type||"image/jpeg"===r.type||"image/png"===r.type,r&&this.acceptedFileTypes){this.fileToUpload=r;const e=new FileReader;e.readAsDataURL(r),e.onload=()=>this.imageToShow=e.result}else this.imageToShow="../../../../../assets/no-image.png"}crearServicio(){this.isEditing=!1,this.isCreating=!0,this.crudAction="Crear"}crearServicioEnLaDb(e){this.adminPanelCrudService.create(e,"services").pipe(Object(a.a)(this.destroy$)).subscribe(e=>{var i;this.recargarServicios(!0),this.alertFailureOrSuccess(null===(i=null==e?void 0:e.meta)||void 0===i?void 0:i.status)},()=>d.a.fire("Error","No pudimos crear el inter\xe9s, por favor intent\xe1 de nuevo recargando la p\xe1gina","error"))}editarServicio(e){this.isEditing=!0,this.isCreating=!1,this.crudAction="Editar";const i=this.servicios.find(i=>i.id===e);i&&(this.servicioID=e,this.servicesForm.controls.title.setValue(i.title),this.imageToShow=`${c.a.API_IMAGE_URL}/${i.image}`)}editarServicioEnLaDb(e){this.adminPanelCrudService.edit(this.servicioID,e,"services").pipe(Object(a.a)(this.destroy$)).subscribe(e=>{var i;this.recargarServicios(!0),this.alertFailureOrSuccess(null===(i=null==e?void 0:e.meta)||void 0===i?void 0:i.status)},()=>{this.recargarServicios(!0),d.a.fire("Error","Tuvimos un error desconocido, por favor intenta recargar la p\xe1gina o espera un rato.","error")})}borrarServicio(e){d.a.fire({title:"\xbfSeguro quer\xe9s elimninar el trabajo seleccionado?",showDenyButton:!0,confirmButtonText:"Si, borrar",denyButtonText:"No"}).then(i=>{i.isConfirmed&&this.borrarServicioEnLaDb(e)})}borrarServicioEnLaDb(e){this.adminPanelCrudService.delete(e,"services").pipe(Object(a.a)(this.destroy$)).subscribe(e=>{var i;this.recargarServicios(!0),this.alertFailureOrSuccess(null===(i=null==e?void 0:e.meta)||void 0===i?void 0:i.status)},()=>{d.a.fire("\xa1Lo sentimos!","No pudimos realizar el pedido correctamente, por favor actualiz\xe1 la p\xe1gina e intent\xe1 de nuevo","error")})}alertFailureOrSuccess(e){200===e||201===e?d.a.fire("\xa1Excelente!","La zona se cre\xf3 correctamente","success"):d.a.fire("Error","No pudimos crear la zona, por favor intent\xe1 de nuevo recargando la p\xe1gina","error")}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(u.Kb(v.a),u.Kb(b.c),u.Kb(m.a))},e.\u0275cmp=u.Eb({type:e,selectors:[["app-servicios"]],hostVars:2,hostBindings:function(e,i){2&e&&u.Cb("admin-panel-container",i.someClass)},decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],[3,"loading","filasTabla","encabezadosTabla","title","totalSection","onRecargar","onCreate","onEdit","onDelete",4,"ngIf"],[3,"loading","filasTabla","encabezadosTabla","title","totalSection","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"row","justify-content-center"],[1,"col-md-4","mb-2",3,"click"],["alt","Trabajo realizado",1,"img-responsive",3,"src"],["type","file","formControlName","image",3,"hidden","change"],["imageInput",""],[1,"p-2"],["class","text-danger",4,"ngIf"],[1,"form-group"],[1,"input-group"],["type","text","id","exampleInputuname2","placeholder","T\xedtulo","formControlName","title",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],[1,"text-danger"]],template:function(e,i){1&e&&(u.Pb(0,"div",0),u.kc(1,p,4,1,"div",1),u.kc(2,y,29,8,"div",1),u.Ob()),2&e&&(u.zb(1),u.dc("ngIf",!i.isEditing&&!i.isCreating),u.zb(1),u.dc("ngIf",i.isCreating||i.isEditing))},directives:[t.l,g.a,b.n,b.h,b.e,b.b,b.g,b.d],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[o.f.forChild(F)],o.f]}),e})();var T=r("6eV/");let E=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[t.b,w,T.a,b.k]]}),e})()}}]);