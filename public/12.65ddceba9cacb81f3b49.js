(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{trXN:function(t,e,o){"use strict";o.r(e),o.d(e,"PaymentsModule",function(){return S});var r=o("ofXK"),n=o("tyNb"),a=o("1G5W"),i=o("XNiG"),s=o("3Pt+"),c=o("PSD3"),b=o.n(c),m=o("ZLyn"),l=o("fXoL"),d=o("o1z6"),u=o("T9Ob"),p=o("FQRV");function g(t,e){if(1&t){const t=l.Qb();l.Pb(0,"app-table",6),l.Wb("onRecargar",function(e){return l.gc(t),l.Yb(2).recargarPagos(e)})("onCreate",function(){return l.gc(t),l.Yb(2).crearPagos()})("onEdit",function(e){return l.gc(t),l.Yb(2).editarPagos(e)})("onDelete",function(e){return l.gc(t),l.Yb(2).borrarPagos(e)}),l.Ob()}if(2&t){const t=l.Yb(2);l.dc("encabezadosTabla",t.encabezadosTabla)("filasTabla",t.tableData)("totalSection",null==t.payments?null:t.payments.length)("noImage",!0)}}function h(t,e){if(1&t&&(l.Pb(0,"div",2),l.Pb(1,"div",3),l.Pb(2,"div",4),l.kc(3,g,1,4,"app-table",5),l.Ob(),l.Ob(),l.Ob()),2&t){const t=l.Yb();l.zb(3),l.dc("ngIf",t.payments&&t.tableData)}}function f(t,e){1&t&&(l.Pb(0,"label",23),l.mc(1,"N\xfamero de comprobante*"),l.Ob())}function y(t,e){1&t&&(l.Pb(0,"span",24),l.mc(1,"Este campo es requerido"),l.Ob())}function v(t,e){1&t&&(l.Pb(0,"label",25),l.mc(1,"Monto del pago*"),l.Ob())}function P(t,e){1&t&&(l.Pb(0,"span",24),l.mc(1,"Este campo es requerido"),l.Ob())}function O(t,e){1&t&&(l.Pb(0,"span",24),l.mc(1,"El valor debe ser mayor a 0"),l.Ob())}function I(t,e){1&t&&(l.Pb(0,"span",24),l.mc(1,"El monto introducido es inv\xe1lido"),l.Ob())}function F(t,e){1&t&&(l.Pb(0,"label",26),l.mc(1,"Fecha del pago*"),l.Ob())}function j(t,e){1&t&&(l.Pb(0,"span",24),l.mc(1,"Este campo es requerido"),l.Ob())}function E(t,e){if(1&t){const t=l.Qb();l.Pb(0,"div",2),l.Pb(1,"div",3),l.Pb(2,"div",7),l.Pb(3,"h1",8),l.mc(4),l.Ob(),l.Ob(),l.Pb(5,"div",4),l.Pb(6,"form",9),l.Wb("ngSubmit",function(){return l.gc(t),l.Yb().formSubmit()}),l.Pb(7,"div",4),l.Pb(8,"div",0),l.Pb(9,"div",2),l.Pb(10,"div",10),l.kc(11,f,2,0,"label",11),l.Pb(12,"div",12),l.Lb(13,"input",13),l.Pb(14,"div",14),l.kc(15,y,2,0,"span",15),l.Ob(),l.Ob(),l.Ob(),l.Pb(16,"div",10),l.kc(17,v,2,0,"label",16),l.Pb(18,"div",12),l.Pb(19,"input",17),l.Wb("change",function(){return l.gc(t),l.Yb().checkAmountInputValue()}),l.Ob(),l.Pb(20,"div",14),l.kc(21,P,2,0,"span",15),l.kc(22,O,2,0,"span",15),l.kc(23,I,2,0,"span",15),l.Ob(),l.Ob(),l.Ob(),l.Pb(24,"div",10),l.kc(25,F,2,0,"label",18),l.Pb(26,"div",12),l.Lb(27,"input",19),l.Pb(28,"div",14),l.kc(29,j,2,0,"span",15),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(30,"div",20),l.Pb(31,"button",21),l.mc(32," Confirmar "),l.Ob(),l.Pb(33,"button",22),l.Wb("click",function(){return l.gc(t),l.Yb().recargarPagos(!0)}),l.mc(34," Volver "),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob()}if(2&t){const t=l.Yb();l.zb(4),l.oc("",t.crudAction," Pago"),l.zb(2),l.dc("formGroup",t.paymentsForm),l.zb(5),l.dc("ngIf","Editar"===t.crudAction),l.zb(4),l.dc("ngIf",(null==t.paymentsForm.controls.receipt.errors?null:t.paymentsForm.controls.receipt.errors.required)&&t.paymentsForm.controls.receipt.touched),l.zb(2),l.dc("ngIf","Editar"===t.crudAction),l.zb(4),l.dc("ngIf",(null==t.paymentsForm.controls.amount.errors?null:t.paymentsForm.controls.amount.errors.required)&&t.paymentsForm.controls.amount.touched),l.zb(1),l.dc("ngIf",(null==t.paymentsForm.controls.amount.errors?null:t.paymentsForm.controls.amount.errors.min)&&t.paymentsForm.controls.amount.touched),l.zb(1),l.dc("ngIf",(null==t.paymentsForm.controls.amount.errors?null:t.paymentsForm.controls.amount.errors.invalidAmount)&&t.paymentsForm.controls.amount.touched),l.zb(2),l.dc("ngIf","Editar"===t.crudAction),l.zb(4),l.dc("ngIf",(null==t.paymentsForm.controls.datetime.errors?null:t.paymentsForm.controls.datetime.errors.required)&&t.paymentsForm.controls.datetime.touched)}}const C=[{path:"",component:(()=>{class t{constructor(t,e,o,r){this.router=t,this.projectsService=e,this.fb=o,this.adminPanelCrudService=r,this.payments=[],this.tableData=[],this.encabezadosTabla=["Comprobante","Total","Fecha"],this.isCreating=!1,this.isEditing=!1,this.crudAction="",this.invalidPaymentMsg="",this.destroy$=new i.a,this.getprojectId(),this.projectID?this.createForm():this.router.navigateByUrl("/admin/proyectos")}getprojectId(){var t,e,o;this.projectID=null===(o=null===(e=null===(t=this.router.getCurrentNavigation())||void 0===t?void 0:t.extras)||void 0===e?void 0:e.state)||void 0===o?void 0:o.id}createForm(){this.paymentsForm=this.fb.group({amount:[null,[s.m.required,s.m.min(1)]],receipt:["",[s.m.required]],datetime:[null,s.m.required]})}checkAmountInputValue(){var t;null===(t=this.paymentsForm.controls.amount)||void 0===t||t.valueChanges.pipe(Object(a.a)(this.destroy$)).subscribe(t=>this.validatePaymentAmount(t))}validatePaymentAmount(t){var e;this.project.balance<t&&(null===(e=this.paymentsForm.controls.amount)||void 0===e||e.setErrors({invalidAmount:!0}))}formSubmit(){if(this.paymentsForm.markAllAsTouched(),this.paymentsForm.valid){const t=this.paymentsForm.controls.datetime.value.toString(),e={projects_id:this.projectID,amount:this.paymentsForm.controls.amount.value,datetime:t,receipt:this.paymentsForm.controls.receipt.value};"Crear"===this.crudAction?this.crearPagoEnLaDb(e):this.editarPagoEnLaDb(e)}}ngOnInit(){this.getProject()}getProject(){this.projectsService.getOneProject(this.projectID).pipe(Object(a.a)(this.destroy$)).subscribe(t=>{var e,o;(null===(e=null==t?void 0:t.meta)||void 0===e?void 0:e.status.toString().includes("20"))?(this.project=t.data,this.payments=null===(o=null==t?void 0:t.data)||void 0===o?void 0:o.Payments,this.setTableData()):Object(m.d)(t)},t=>Object(m.c)(t))}setTableData(){this.payments.forEach(t=>this.tableData.push({id:t.id,item2:t.receipt,item3:t.amount.toString(),item4:t.datetime.substring(0,10)}))}recargarPagos(t){t&&(this.resetsetControls(),this.tableData=[],this.payments=[],this.isCreating=!1,this.isEditing=!1,this.getProject())}resetsetControls(){var t,e,o;null===(t=this.paymentsForm.controls.amount)||void 0===t||t.setValue(null),null===(e=this.paymentsForm.controls.receipt)||void 0===e||e.setValue(""),null===(o=this.paymentsForm.controls.datetime)||void 0===o||o.setValue(null)}crearPagos(){this.crudAction="Crear",this.isCreating=!0,this.isEditing=!1}crearPagoEnLaDb(t){this.projectsService.create(t,"payments").pipe(Object(a.a)(this.destroy$)).subscribe(t=>{this.recargarPagos(!0),Object(m.a)(t,"cre\xf3","pago")},t=>{this.recargarPagos(!0),Object(m.d)(t)})}editarPagos(t){this.crudAction="Editar",this.isEditing=!0,this.isCreating=!1;const e=this.payments.find(e=>e.id===t);if(e){const o=new Date(e.datetime).toISOString().substring(0,16);this.pagoId=t,this.paymentsForm.controls.amount.setValue(e.amount),this.paymentsForm.controls.receipt.setValue(e.receipt),this.paymentsForm.controls.datetime.setValue(o)}}editarPagoEnLaDb(t){this.projectsService.edit(this.pagoId,t,"payments").pipe(Object(a.a)(this.destroy$)).subscribe(t=>{this.recargarPagos(!0),Object(m.a)(t,"edit\xf3","pago")},t=>{this.recargarPagos(!0),Object(m.d)(t)})}borrarPagos(t){b.a.fire({title:"\xbfSeguro quer\xe9s elimninar el pago seleccionado?",showDenyButton:!0,confirmButtonText:"Si, borrar",denyButtonText:"No"}).then(e=>{e.isConfirmed&&this.borrarPagoEnLaDb(t)})}borrarPagoEnLaDb(t){this.adminPanelCrudService.delete(t,"payments").pipe(Object(a.a)(this.destroy$)).subscribe(t=>{this.recargarPagos(!0),Object(m.a)(t,"borr\xf3","pago")},t=>Object(m.d)(t))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(l.Kb(n.c),l.Kb(d.a),l.Kb(s.c),l.Kb(u.a))},t.\u0275cmp=l.Eb({type:t,selectors:[["app-payments"]],decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],["title","Pagos",3,"encabezadosTabla","filasTabla","totalSection","noImage","onRecargar","onCreate","onEdit","onDelete",4,"ngIf"],["title","Pagos",3,"encabezadosTabla","filasTabla","totalSection","noImage","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"form-group"],["for","comprobanteInput",4,"ngIf"],[1,"input-group"],["type","text","id","comprobanteInput","placeholder","N\xfamero de comprobante","formControlName","receipt",1,"form-control"],[1,"p-2"],["class","text-danger",4,"ngIf"],["for","amountInput",4,"ngIf"],["type","number","placeholder","Monto del pago","formControlName","amount","id","amountInput",1,"form-control",3,"change"],["for","fechaPagoInput",4,"ngIf"],["type","datetime-local","placeholder","Fecha del pago","formControlName","datetime","id","fechaPagoInput",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],["for","comprobanteInput"],[1,"text-danger"],["for","amountInput"],["for","fechaPagoInput"]],template:function(t,e){1&t&&(l.Pb(0,"div",0),l.kc(1,h,4,1,"div",1),l.kc(2,E,35,10,"div",1),l.Ob()),2&t&&(l.zb(1),l.dc("ngIf",!e.isEditing&&!e.isCreating),l.zb(1),l.dc("ngIf",e.isCreating||e.isEditing))},directives:[r.m,p.a,s.n,s.h,s.e,s.b,s.g,s.d,s.j],styles:[""]}),t})()}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({imports:[[n.f.forChild(C)],n.f]}),t})();var k=o("6eV/");let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({imports:[[r.c,D,s.k,k.a]]}),t})()}}]);