(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{cW5t:function(e,t,o){"use strict";o.r(t),o.d(t,"LotesModule",function(){return T});var r=o("ofXK"),i=o("tyNb"),n=o("XNiG"),s=o("1G5W"),c=o("AytR"),a=o("PSD3"),l=o.n(a),d=o("3Pt+"),b=o("ZLyn"),u=o("fXoL"),m=o("N+K7"),p=o("T9Ob"),h=o("FQRV");function g(e,t){if(1&e){const e=u.Qb();u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",4),u.Pb(3,"app-table",5),u.Wb("onRecargar",function(t){return u.gc(e),u.Yb().recargarLotes(t)})("onCreate",function(){return u.gc(e),u.Yb().creatLote()})("onEdit",function(t){return u.gc(e),u.Yb().editarLote(t)})("onDelete",function(t){return u.gc(e),u.Yb().borrarLote(t)}),u.Ob(),u.Ob(),u.Ob(),u.Ob()}if(2&e){const e=u.Yb();u.zb(3),u.dc("title","Lotes")("filasTabla",e.tableData)("encabezadosTabla",e.encabezadosTabla)("totalSection",null==e.tableData?null:e.tableData.length)}}function f(e,t){if(1&e&&(u.Pb(0,"span",28),u.mc(1),u.Ob()),2&e){const e=u.Yb(2);u.zb(1),u.nc(e.creationImageError)}}function v(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Los formatos aceptados son JPG, JPEG y PNG"),u.Ob())}function O(e,t){if(1&e&&(u.Pb(0,"option",18),u.mc(1),u.Ob()),2&e){const e=t.$implicit;u.dc("value",e.id),u.zb(1),u.oc(" ",e.nombre," ")}}function P(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Este dato es requerido"),u.Ob())}function F(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Este dato es requerido"),u.Ob())}function L(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Debe tener al menos 6 caracteres"),u.Ob())}function y(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Este dato es requerido"),u.Ob())}function C(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Debe tener al menos 10 caracteres"),u.Ob())}function D(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Este dato es requerido"),u.Ob())}function I(e,t){1&e&&(u.Pb(0,"span",28),u.mc(1,"Debe ser mayor a 1"),u.Ob())}function S(e,t){if(1&e){const e=u.Qb();u.Pb(0,"div",2),u.Pb(1,"div",3),u.Pb(2,"div",6),u.Pb(3,"h1",7),u.mc(4),u.Ob(),u.Ob(),u.Pb(5,"form",8),u.Wb("ngSubmit",function(){return u.gc(e),u.Yb().formSubmit()}),u.Pb(6,"div",4),u.Pb(7,"div",9),u.Pb(8,"div",10),u.Wb("click",function(){return u.gc(e),u.fc(11).click()}),u.Lb(9,"img",11),u.Pb(10,"input",12,13),u.Wb("change",function(t){return u.gc(e),u.Yb().showSelectedImage(t)}),u.Ob(),u.Pb(12,"div",14),u.kc(13,f,2,1,"span",15),u.kc(14,v,2,0,"span",15),u.Ob(),u.Ob(),u.Ob(),u.Pb(15,"div",16),u.Pb(16,"label"),u.mc(17,"Zona de construcci\xf3n*"),u.Ob(),u.Pb(18,"select",17),u.Pb(19,"option",18),u.mc(20,"--Seleccionar una zona--"),u.Ob(),u.kc(21,O,2,2,"option",19),u.Ob(),u.Pb(22,"div",14),u.kc(23,P,2,0,"span",15),u.Ob(),u.Ob(),u.Pb(24,"div",0),u.Pb(25,"div",2),u.Pb(26,"div",16),u.Pb(27,"div",20),u.Lb(28,"input",21),u.Pb(29,"div",14),u.kc(30,F,2,0,"span",15),u.kc(31,L,2,0,"span",15),u.Ob(),u.Ob(),u.Ob(),u.Pb(32,"div",16),u.Pb(33,"div",20),u.Lb(34,"textarea",22),u.Pb(35,"div",14),u.kc(36,y,2,0,"span",15),u.kc(37,C,2,0,"span",15),u.Ob(),u.Ob(),u.Ob(),u.Pb(38,"div",16),u.Pb(39,"div",20),u.Lb(40,"input",23),u.Pb(41,"div",14),u.kc(42,D,2,0,"span",15),u.kc(43,I,2,0,"span",15),u.Ob(),u.Ob(),u.Ob(),u.Pb(44,"div",16),u.Pb(45,"label"),u.mc(46,"Vendido*"),u.Ob(),u.Pb(47,"select",24),u.Pb(48,"option",18),u.mc(49,"Si"),u.Ob(),u.Pb(50,"option",18),u.mc(51,"No"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(52,"div",25),u.Pb(53,"button",26),u.mc(54," Confirmar "),u.Ob(),u.Pb(55,"button",27),u.Wb("click",function(){return u.gc(e),u.Yb().recargarLotes(!0)}),u.mc(56," Volver "),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob()}if(2&e){const e=u.Yb();u.zb(4),u.oc("",e.crudAction," lote"),u.zb(1),u.dc("formGroup",e.loteForm),u.zb(4),u.dc("src",e.imageToShow,u.hc),u.zb(1),u.dc("hidden",!0),u.zb(3),u.dc("ngIf",e.creationImageError),u.zb(1),u.dc("ngIf",!e.acceptedFileTypes),u.zb(5),u.dc("value",null),u.zb(2),u.dc("ngForOf",e.zonasDeConstruccion),u.zb(2),u.dc("ngIf",(null==e.loteForm.controls.category.errors?null:e.loteForm.controls.category.errors.required)&&e.loteForm.controls.category.touched),u.zb(7),u.dc("ngIf",(null==e.loteForm.controls.title.errors?null:e.loteForm.controls.title.errors.required)&&e.loteForm.controls.title.touched),u.zb(1),u.dc("ngIf",(null==e.loteForm.controls.title.errors?null:e.loteForm.controls.title.errors.minlength)&&e.loteForm.controls.title.touched),u.zb(5),u.dc("ngIf",(null==e.loteForm.controls.description.errors?null:e.loteForm.controls.description.errors.required)&&e.loteForm.controls.description.touched),u.zb(1),u.dc("ngIf",(null==e.loteForm.controls.description.errors?null:e.loteForm.controls.description.errors.minlength)&&e.loteForm.controls.description.touched),u.zb(5),u.dc("ngIf",(null==e.loteForm.controls.price.errors?null:e.loteForm.controls.price.errors.required)&&e.loteForm.controls.price.touched),u.zb(1),u.dc("ngIf",(null==e.loteForm.controls.price.errors?null:e.loteForm.controls.price.errors.min)&&e.loteForm.controls.price.touched),u.zb(5),u.dc("value","true"),u.zb(2),u.dc("value","false")}}const E=[{path:"",component:(()=>{class e{constructor(e,t,o){this.httpSrv=e,this.adminPanelCrudService=t,this.fb=o,this.someClass=!0,this.encabezadosTabla=["T\xedtulo","Descripci\xf3n","Precio","Vendido"],this.tableData=[],this.lotes=[],this.isCreating=!1,this.isEditing=!1,this.crudAction="",this.zonasDeConstruccion=[],this.imageToShow="../../../../../assets/no-image.png",this.acceptedFileTypes=!0,this.creationImageError="",this.destroy$=new n.a,this.crearForm()}ngOnInit(){this.getLotes()}crearForm(){this.loteForm=this.fb.group({title:["",[d.m.required,d.m.minLength(6)]],description:["",[d.m.required,d.m.minLength(10)]],image:[""],price:["",[d.m.required,d.m.min(1)]],sold:["false"],category:[null,[d.m.required]]})}showSelectedImage(e){var t;if("Crear"===this.crudAction&&!this.loteForm.controls.image.value)return void(this.creationImageError="La im\xe1gen es obligatoria");this.creationImageError="";const o=null===(t=e.target)||void 0===t?void 0:t.files[0];if(this.acceptedFileTypes="image/jpg"===o.type||"image/jpeg"===o.type||"image/png"===o.type,o&&this.acceptedFileTypes){this.fileToUpload=o;const e=new FileReader;e.readAsDataURL(o),e.onload=()=>this.imageToShow=e.result}else this.imageToShow="../../../../../assets/no-image.png"}formSubmit(){var e,t,o,r,i;if(this.loteForm.markAllAsTouched(),"Crear"!==this.crudAction||this.loteForm.controls.image.value){if(this.loteForm.valid){const n=new FormData;n.append("title",null===(e=this.loteForm.controls.title)||void 0===e?void 0:e.value),n.append("description",null===(t=this.loteForm.controls.description)||void 0===t?void 0:t.value),n.append("price",null===(o=this.loteForm.controls.price)||void 0===o?void 0:o.value),n.append("sold",null===(r=this.loteForm.controls.sold)||void 0===r?void 0:r.value),n.append("image",this.fileToUpload),n.append("category",null===(i=this.loteForm.controls.category)||void 0===i?void 0:i.value),"Crear"===this.crudAction?this.crearLoteEnLaDb(n):this.editarLoteEnLaDb(n)}}else this.creationImageError="La im\xe1gen es obligatoria"}getLotes(){this.httpSrv.getAllZones().pipe(Object(s.a)(this.destroy$)).subscribe(e=>{for(const t of e.data)this.zonasDeConstruccion.push({id:t.id,nombre:t.title}),this.httpSrv.getLotes(t.id.toString()).pipe(Object(s.a)(this.destroy$)).subscribe(e=>{var t,o;(null===(t=null==e?void 0:e.meta)||void 0===t?void 0:t.status.toString().includes("20"))?null===(o=null==e?void 0:e.data)||void 0===o||o.Batches.forEach(e=>this.setTableData(e)):Object(b.d)(e)},e=>Object(b.c)(e))},e=>Object(b.c)(e))}setTableData(e){var t,o;this.tableData.push({imagen:`${c.a.API_IMAGE_URL}/${e.image}`,item2:e.title?e.title:"Vac\xedo",item3:e.description?e.description:"Vac\xedo",item4:(null===(t=e.price)||void 0===t?void 0:t.toString())?null===(o=e.price)||void 0===o?void 0:o.toString():"Vac\xedo",item6:this.setearElEstadoVendidoONo(e.sold),id:e.id}),this.lotes.push(e)}setearElEstadoVendidoONo(e){let t="";return t="true"===e?"Si":"No",t}recargarLotes(e){e&&(this.resetsetControls(),this.tableData=[],this.zonasDeConstruccion=[],this.lotes=[],this.isEditing=!1,this.isCreating=!1,this.getLotes())}resetsetControls(){this.loteForm.controls.title.setValue(""),this.loteForm.controls.description.setValue(""),this.loteForm.controls.category.setValue(""),this.loteForm.controls.price.setValue(""),this.loteForm.controls.sold.setValue(""),this.loteForm.controls.image.setValue(""),this.imageToShow="../../../../../assets/no-image.png"}creatLote(){this.crudAction="Crear",this.isCreating=!0,this.isEditing=!1}crearLoteEnLaDb(e){this.adminPanelCrudService.create(e,"batches").pipe(Object(s.a)(this.destroy$)).subscribe(e=>{this.recargarLotes(!0),Object(b.a)(e,"cre\xf3","lote")},e=>{this.recargarLotes(!0),Object(b.c)(e)})}editarLote(e){if(this.encontrarLoteSeleccionado(e)){this.crudAction="Editar",this.isEditing=!0,this.isCreating=!1;const t=this.lotes.find(t=>t.id===e);t&&(this.loteID=e,this.loteForm.controls.title.setValue(t.title),this.loteForm.controls.description.setValue(t.description),this.loteForm.controls.category.setValue(t.categories_id),this.loteForm.controls.price.setValue(t.price),this.loteForm.controls.sold.setValue(t.sold),this.imageToShow=`${c.a.API_IMAGE_URL}/${t.image}`)}}editarLoteEnLaDb(e){this.adminPanelCrudService.edit(this.loteID,e,"batches").pipe(Object(s.a)(this.destroy$)).subscribe(e=>{this.recargarLotes(!0),Object(b.a)(e,"edit\xf3","lote")},e=>{this.recargarLotes(!0),Object(b.c)(e)})}borrarLote(e){this.encontrarLoteSeleccionado(e)&&l.a.fire({title:"\xbfSeguro quer\xe9s elimninar el lote seleccionado?",showDenyButton:!0,confirmButtonText:"Si, borrar",denyButtonText:"No"}).then(t=>{t.isConfirmed&&this.borrarLoteDeLaDb(e)})}borrarLoteDeLaDb(e){this.adminPanelCrudService.delete(e,"batches").pipe(Object(s.a)(this.destroy$)).subscribe(e=>{this.recargarLotes(!0),Object(b.a)(e,"borr\xf3","lote")},e=>{this.recargarLotes(!0),Object(b.c)(e)})}encontrarLoteSeleccionado(e){return this.lotes.find(t=>t.id===e)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(m.a),u.Kb(p.a),u.Kb(d.c))},e.\u0275cmp=u.Eb({type:e,selectors:[["app-lotes"]],hostVars:2,hostBindings:function(e,t){2&e&&u.Cb("admin-panel-container",t.someClass)},decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],[3,"title","filasTabla","encabezadosTabla","totalSection","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"row","justify-content-center"],[1,"col-md-4","mb-2",3,"click"],["alt","Lote",1,"img-responsive",3,"src"],["type","file","formControlName","image",3,"hidden","change"],["imageInput",""],[1,"p-2"],["class","text-danger",4,"ngIf"],[1,"form-group"],["formControlName","category",1,"form-control","custom-select"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"input-group"],["type","text","id","exampleInputuname2","placeholder","T\xedtulo*","formControlName","title",1,"form-control"],["type","text","id","exampleInputuname2","placeholder","Descripci\xf3n*","formControlName","description","rows","5",1,"form-control"],["type","number","id","exampleInputuname2","placeholder","Precio*","formControlName","price",1,"form-control"],["formControlName","sold",1,"form-control","custom-select"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],[1,"text-danger"]],template:function(e,t){1&e&&(u.Pb(0,"div",0),u.kc(1,g,4,4,"div",1),u.kc(2,S,57,17,"div",1),u.Ob()),2&e&&(u.zb(1),u.dc("ngIf",!t.isEditing&&!t.isCreating),u.zb(1),u.dc("ngIf",t.isCreating||t.isEditing))},directives:[r.m,h.a,d.n,d.h,d.e,d.b,d.g,d.d,d.l,d.i,d.o,r.l,d.j],styles:[""]}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[i.f.forChild(E)],i.f]}),e})();var w=o("6eV/");let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({imports:[[r.c,z,w.a,d.k]]}),e})()}}]);