(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{PRKJ:function(e,t,o){"use strict";o.r(t),o.d(t,"TrabajosRealizadosModule",function(){return w});var a=o("ofXK"),r=o("tyNb"),i=o("XNiG"),n=o("1G5W"),s=o("nYR2"),c=o("AytR"),b=o("3Pt+"),l=o("PSD3"),d=o.n(l),u=o("fXoL"),m=o("N+K7"),p=o("T9Ob"),g=o("FQRV");function h(e,t){if(1&e){const e=u.Qb();u.Pb(0,"app-table",6),u.Wb("onRecargar",function(t){return u.gc(e),u.Yb(2).recargarTrabajos(t)})("onCreate",function(){return u.gc(e),u.Yb(2).crearTrabajoRealizado()})("onEdit",function(t){return u.gc(e),u.Yb(2).editarTrabajoRealizado(t)})("onDelete",function(t){return u.gc(e),u.Yb(2).borrarTrabajoRealizado(t)}),u.Ob()}if(2&e){const e=u.Yb(2);u.dc("title","Trabajos realizados")("loading",e.loading)("filasTabla",e.tableData)("encabezadosTabla",e.encabezadosTabla)("totalSection",null==e.tableData?null:e.tableData.length)}}function f(e,t){if(1&e&&(u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",4),u.kc(3,h,1,5,"app-table",5),u.Ob(),u.Ob(),u.Ob()),2&e){const e=u.Yb();u.zb(3),u.dc("ngIf",e.tableData)}}function v(e,t){1&e&&(u.Pb(0,"span",27),u.mc(1,"Este dato es requerido"),u.Ob())}function j(e,t){1&e&&(u.Pb(0,"span",27),u.mc(1,"Los formatos aceptados son JPG, JPEG y PNG"),u.Ob())}function O(e,t){if(1&e&&(u.Pb(0,"option",19),u.mc(1),u.Ob()),2&e){const e=t.$implicit;u.dc("value",e.id),u.zb(1),u.oc(" ",e.title," ")}}function T(e,t){1&e&&(u.Pb(0,"span",27),u.mc(1,"Este dato es requerido"),u.Ob())}function P(e,t){1&e&&(u.Pb(0,"span",27),u.mc(1,"Debe tener al menos 6 caracteres"),u.Ob())}function y(e,t){1&e&&(u.Pb(0,"span",27),u.mc(1,"Debe tener al menos 10 caracteres"),u.Ob())}function F(e,t){if(1&e){const e=u.Qb();u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",7),u.Pb(3,"h1",8),u.mc(4),u.Ob(),u.Ob(),u.Pb(5,"div",4),u.Pb(6,"form",9),u.Wb("ngSubmit",function(){return u.gc(e),u.Yb().formSubmit()}),u.Pb(7,"div",4),u.Pb(8,"div",10),u.Pb(9,"div",11),u.Wb("click",function(){return u.gc(e),u.fc(12).click()}),u.Lb(10,"img",12),u.Pb(11,"input",13,14),u.Wb("change",function(t){return u.gc(e),u.Yb().showSelectedImage(t)}),u.Ob(),u.Pb(13,"div",15),u.kc(14,v,2,0,"span",16),u.kc(15,j,2,0,"span",16),u.Ob(),u.Ob(),u.Ob(),u.Pb(16,"div",17),u.Pb(17,"label"),u.mc(18,"Categor\xeda de trabajo*"),u.Ob(),u.Pb(19,"select",18),u.Pb(20,"option",19),u.mc(21,"--Seleccionar una categor\xeda--"),u.Ob(),u.kc(22,O,2,2,"option",20),u.Ob(),u.Pb(23,"div",15),u.kc(24,T,2,0,"span",16),u.Ob(),u.Ob(),u.Pb(25,"div",0),u.Pb(26,"div",2),u.Pb(27,"div",17),u.Pb(28,"div",21),u.Lb(29,"input",22),u.Pb(30,"div",15),u.kc(31,P,2,0,"span",16),u.Ob(),u.Ob(),u.Ob(),u.Pb(32,"div",17),u.Pb(33,"div",21),u.Lb(34,"textarea",23),u.Pb(35,"div",15),u.kc(36,y,2,0,"span",16),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(37,"div",24),u.Pb(38,"button",25),u.mc(39," Confirmar "),u.Ob(),u.Pb(40,"button",26),u.Wb("click",function(){return u.gc(e),u.Yb().recargarTrabajos(!0)}),u.mc(41," Volver "),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob()}if(2&e){const e=u.Yb();u.zb(4),u.oc("",e.crudAction," trabajo realizado"),u.zb(2),u.dc("formGroup",e.jobForm),u.zb(4),u.dc("src",e.imageToShow,u.hc),u.zb(1),u.dc("hidden",!0),u.zb(3),u.dc("ngIf",(null==e.jobForm.controls.image.errors?null:e.jobForm.controls.image.errors.required)&&e.jobForm.controls.image.touched),u.zb(1),u.dc("ngIf",!e.acceptedFileTypes),u.zb(5),u.dc("value",null),u.zb(2),u.dc("ngForOf",e.categoriaDeTrabajo),u.zb(2),u.dc("ngIf",(null==e.jobForm.controls.type.errors?null:e.jobForm.controls.type.errors.required)&&e.jobForm.controls.type.touched),u.zb(7),u.dc("ngIf",(null==e.jobForm.controls.title.errors?null:e.jobForm.controls.title.errors.minlength)&&e.jobForm.controls.title.touched),u.zb(5),u.dc("ngIf",(null==e.jobForm.controls.description.errors?null:e.jobForm.controls.description.errors.minlength)&&e.jobForm.controls.description.touched)}}const z=[{path:"",component:(()=>{class e{constructor(e,t,o){this.httpSrv=e,this.adminPanelCrudService=t,this.fb=o,this.someClass=!0,this.encabezadosTabla=["T\xedtulo","Descripci\xf3n"],this.tableData=[],this.loading=!0,this.isCreating=!1,this.isEditing=!1,this.crudAction="",this.imageToShow="../../../../../assets/no-image.png",this.acceptedFileTypes=!0,this.categoriaDeTrabajo=[],this.jobs=[],this.destroy$=new i.a,this.createForm()}createForm(){this.jobForm=this.fb.group({type:[null,b.m.required],title:["",b.m.minLength(6)],description:["",b.m.minLength(10)],image:[""]})}ngOnInit(){this.getTrabajos()}formSubmit(){var e,t,o;if(this.jobForm.markAllAsTouched(),this.jobForm.valid){const a=new FormData;a.append("title",null===(e=this.jobForm.controls.title)||void 0===e?void 0:e.value),a.append("description",null===(t=this.jobForm.controls.description)||void 0===t?void 0:t.value),a.append("image",this.fileToUpload),a.append("type",null===(o=this.jobForm.controls.type)||void 0===o?void 0:o.value),"Crear"===this.crudAction?this.crearTrabajoEnLaDb(a):this.editarTrabajoEnLaDb(a)}}showSelectedImage(e){var t;const o=null===(t=e.target)||void 0===t?void 0:t.files[0];if(this.acceptedFileTypes="image/jpg"===o.type||"image/jpeg"===o.type||"image/png"===o.type,o&&this.acceptedFileTypes){this.fileToUpload=o;const e=new FileReader;e.readAsDataURL(o),e.onload=()=>this.imageToShow=e.result}else this.imageToShow="../../../../../assets/no-image.png"}getTrabajos(){this.httpSrv.getTypesOfJob().pipe(Object(n.a)(this.destroy$)).subscribe(e=>{for(const t of e.data)this.categoriaDeTrabajo.push(t),this.httpSrv.getOneTypeOfJob(t.id.toString()).pipe(Object(n.a)(this.destroy$),Object(s.a)(()=>this.loading=!1)).subscribe(e=>{var t;null===(t=null==e?void 0:e.data)||void 0===t||t.Jobs.forEach(e=>{this.tableData.push({imagen:`${c.a.API_IMAGE_URL}/${e.image}`,item2:e.title?e.title:"Vac\xedo",item3:e.description?e.description:"Vac\xedo",id:e.id}),this.jobs.push(e)})})})}recargarTrabajos(e){e&&(this.resetsetControls(),this.tableData=[],this.categoriaDeTrabajo=[],this.jobs=[],this.isCreating=!1,this.isEditing=!1,this.getTrabajos())}resetsetControls(){this.jobForm.controls.title.setValue(""),this.jobForm.controls.description.setValue(""),this.jobForm.controls.type.setValue(""),this.jobForm.controls.image.setValue(""),this.imageToShow="../../../../../assets/no-image.png"}crearTrabajoRealizado(){this.crudAction="Crear",this.isCreating=!0,this.isEditing=!1}crearTrabajoEnLaDb(e){this.adminPanelCrudService.create(e,"jobs").pipe(Object(n.a)(this.destroy$)).subscribe(e=>{var t;this.recargarTrabajos(!0),this.alertFailureOrSuccess(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status)},()=>d.a.fire("Error","No pudimos crear el trabajo, por favor intent\xe1 de nuevo recargando la p\xe1gina","error"))}editarTrabajoRealizado(e){var t;this.crudAction="Editar",this.isEditing=!0,this.isCreating=!1;const o=null===(t=this.jobs)||void 0===t?void 0:t.find(t=>t.id===e);o&&(this.trabajoID=o.id,this.jobForm.controls.title.setValue(o.title),this.jobForm.controls.description.setValue(o.description),this.jobForm.controls.type.setValue(o.types_id),this.imageToShow=`${c.a.API_IMAGE_URL}/${o.image}`)}editarTrabajoEnLaDb(e){this.adminPanelCrudService.edit(this.trabajoID,e,"jobs").pipe(Object(n.a)(this.destroy$)).subscribe(e=>{var t;this.recargarTrabajos(!0),this.alertFailureOrSuccess(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status)},()=>{d.a.fire("Error","No pudimos editar el trabajo, por favor intent\xe1 de nuevo recargando la p\xe1gina","error")})}borrarTrabajoRealizado(e){d.a.fire({title:"\xbfSeguro quer\xe9s elimninar el trabajo seleccionado?",showDenyButton:!0,confirmButtonText:"Si, borrar",denyButtonText:"No"}).then(t=>{t.isConfirmed&&this.borrarTrabajoDeLaDb(e)})}borrarTrabajoDeLaDb(e){this.adminPanelCrudService.delete(e,"jobs").pipe(Object(n.a)(this.destroy$)).subscribe(e=>{var t;this.recargarTrabajos(!0),this.alertFailureOrSuccess(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status)},()=>{d.a.fire("\xa1Lo sentimos!","No pudimos realizar el pedido correctamente, por favor actualiz\xe1 la p\xe1gina e intent\xe1 de nuevo","error")})}alertFailureOrSuccess(e){200===e||201===e?d.a.fire("\xa1Excelente!","La zona se cre\xf3 correctamente","success"):d.a.fire("Error","No pudimos crear la zona, por favor intent\xe1 de nuevo recargando la p\xe1gina","error")}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(m.a),u.Kb(p.a),u.Kb(b.c))},e.\u0275cmp=u.Eb({type:e,selectors:[["app-trabajos-realizados"]],hostVars:2,hostBindings:function(e,t){2&e&&u.Cb("admin-panel-container",t.someClass)},decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],[3,"title","loading","filasTabla","encabezadosTabla","totalSection","onRecargar","onCreate","onEdit","onDelete",4,"ngIf"],[3,"title","loading","filasTabla","encabezadosTabla","totalSection","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"row","justify-content-center"],[1,"col-md-4","mb-2",3,"click"],["alt","Trabajo realizado",1,"img-responsive",3,"src"],["type","file","formControlName","image",3,"hidden","change"],["imageInput",""],[1,"p-2"],["class","text-danger",4,"ngIf"],[1,"form-group"],["formControlName","type",1,"form-control","custom-select"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"input-group"],["type","text","id","exampleInputuname2","placeholder","T\xedtulo","formControlName","title",1,"form-control"],["type","text","id","exampleInputuname2","placeholder","Descripci\xf3n","formControlName","description","rows","5",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],[1,"text-danger"]],template:function(e,t){1&e&&(u.Pb(0,"div",0),u.kc(1,f,4,1,"div",1),u.kc(2,F,42,11,"div",1),u.Ob()),2&e&&(u.zb(1),u.dc("ngIf",!t.isEditing&&!t.isCreating),u.zb(1),u.dc("ngIf",t.isCreating||t.isEditing))},directives:[a.l,g.a,b.n,b.h,b.e,b.b,b.g,b.d,b.l,b.i,b.o,a.k],styles:[""]}),e})()}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[r.f.forChild(z)],r.f]}),e})();var S=o("6eV/");let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[a.b,D,S.a,b.k]]}),e})()}}]);