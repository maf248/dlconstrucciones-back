(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{trXN:function(t,e,o){"use strict";o.r(e),o.d(e,"PaymentsModule",function(){return z});var n=o("ofXK"),r=o("tyNb"),a=o("1G5W"),i=o("nYR2"),s=o("XNiG"),c=o("3Pt+"),b=o("PSD3"),l=o.n(b),m=o("ZLyn"),d=o("fXoL"),u=o("o1z6"),p=o("T9Ob"),g=o("FQRV");function h(t,e){if(1&t){const t=d.Qb();d.Pb(0,"app-table",6),d.Wb("onRecargar",function(e){return d.gc(t),d.Yb(2).recargarPagos(e)})("onCreate",function(){return d.gc(t),d.Yb(2).crearPagos()})("onEdit",function(e){return d.gc(t),d.Yb(2).editarPagos(e)})("onDelete",function(e){return d.gc(t),d.Yb(2).borrarPagos(e)}),d.Ob()}if(2&t){const t=d.Yb(2);d.dc("encabezadosTabla",t.encabezadosTabla)("filasTabla",t.tableData)("totalSection",null==t.payments?null:t.payments.length)("loading",t.loading)("noImage",!0)}}function f(t,e){if(1&t&&(d.Pb(0,"div",2),d.Pb(1,"div",3),d.Pb(2,"div",4),d.kc(3,h,1,5,"app-table",5),d.Ob(),d.Ob(),d.Ob()),2&t){const t=d.Yb();d.zb(3),d.dc("ngIf",t.payments&&t.tableData)}}function y(t,e){1&t&&(d.Pb(0,"label",23),d.mc(1,"N\xfamero de comprobante*"),d.Ob())}function v(t,e){1&t&&(d.Pb(0,"span",24),d.mc(1,"Este campo es requerido"),d.Ob())}function P(t,e){1&t&&(d.Pb(0,"label",25),d.mc(1,"Monto del pago*"),d.Ob())}function O(t,e){1&t&&(d.Pb(0,"span",24),d.mc(1,"Este campo es requerido"),d.Ob())}function I(t,e){1&t&&(d.Pb(0,"span",24),d.mc(1,"El valor debe ser mayor a 0"),d.Ob())}function F(t,e){1&t&&(d.Pb(0,"span",24),d.mc(1,"El monto introducido es inv\xe1lido"),d.Ob())}function j(t,e){1&t&&(d.Pb(0,"label",26),d.mc(1,"Fecha del pago*"),d.Ob())}function E(t,e){1&t&&(d.Pb(0,"span",24),d.mc(1,"Este campo es requerido"),d.Ob())}function C(t,e){if(1&t){const t=d.Qb();d.Pb(0,"div",2),d.Pb(1,"div",3),d.Pb(2,"div",7),d.Pb(3,"h1",8),d.mc(4),d.Ob(),d.Ob(),d.Pb(5,"div",4),d.Pb(6,"form",9),d.Wb("ngSubmit",function(){return d.gc(t),d.Yb().formSubmit()}),d.Pb(7,"div",4),d.Pb(8,"div",0),d.Pb(9,"div",2),d.Pb(10,"div",10),d.kc(11,y,2,0,"label",11),d.Pb(12,"div",12),d.Lb(13,"input",13),d.Pb(14,"div",14),d.kc(15,v,2,0,"span",15),d.Ob(),d.Ob(),d.Ob(),d.Pb(16,"div",10),d.kc(17,P,2,0,"label",16),d.Pb(18,"div",12),d.Pb(19,"input",17),d.Wb("change",function(){return d.gc(t),d.Yb().checkAmountInputValue()}),d.Ob(),d.Pb(20,"div",14),d.kc(21,O,2,0,"span",15),d.kc(22,I,2,0,"span",15),d.kc(23,F,2,0,"span",15),d.Ob(),d.Ob(),d.Ob(),d.Pb(24,"div",10),d.kc(25,j,2,0,"label",18),d.Pb(26,"div",12),d.Lb(27,"input",19),d.Pb(28,"div",14),d.kc(29,E,2,0,"span",15),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Pb(30,"div",20),d.Pb(31,"button",21),d.mc(32," Confirmar "),d.Ob(),d.Pb(33,"button",22),d.Wb("click",function(){return d.gc(t),d.Yb().recargarPagos(!0)}),d.mc(34," Volver "),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob()}if(2&t){const t=d.Yb();d.zb(4),d.oc("",t.crudAction," Pago"),d.zb(2),d.dc("formGroup",t.paymentsForm),d.zb(5),d.dc("ngIf","Editar"===t.crudAction),d.zb(4),d.dc("ngIf",(null==t.paymentsForm.controls.receipt.errors?null:t.paymentsForm.controls.receipt.errors.required)&&t.paymentsForm.controls.receipt.touched),d.zb(2),d.dc("ngIf","Editar"===t.crudAction),d.zb(4),d.dc("ngIf",(null==t.paymentsForm.controls.amount.errors?null:t.paymentsForm.controls.amount.errors.required)&&t.paymentsForm.controls.amount.touched),d.zb(1),d.dc("ngIf",(null==t.paymentsForm.controls.amount.errors?null:t.paymentsForm.controls.amount.errors.min)&&t.paymentsForm.controls.amount.touched),d.zb(1),d.dc("ngIf",(null==t.paymentsForm.controls.amount.errors?null:t.paymentsForm.controls.amount.errors.invalidAmount)&&t.paymentsForm.controls.amount.touched),d.zb(2),d.dc("ngIf","Editar"===t.crudAction),d.zb(4),d.dc("ngIf",(null==t.paymentsForm.controls.datetime.errors?null:t.paymentsForm.controls.datetime.errors.required)&&t.paymentsForm.controls.datetime.touched)}}const D=[{path:"",component:(()=>{class t{constructor(t,e,o,n){this.router=t,this.projectsService=e,this.fb=o,this.adminPanelCrudService=n,this.payments=[],this.tableData=[],this.encabezadosTabla=["Comprobante","Total","Fecha"],this.loading=!0,this.isCreating=!1,this.isEditing=!1,this.crudAction="",this.invalidPaymentMsg="",this.destroy$=new s.a,this.getprojectId(),this.projectID?this.createForm():this.router.navigateByUrl("/admin/proyectos")}getprojectId(){var t,e,o;this.projectID=null===(o=null===(e=null===(t=this.router.getCurrentNavigation())||void 0===t?void 0:t.extras)||void 0===e?void 0:e.state)||void 0===o?void 0:o.id}createForm(){this.paymentsForm=this.fb.group({amount:[null,[c.m.required,c.m.min(1)]],receipt:["",[c.m.required]],datetime:[null,c.m.required]})}checkAmountInputValue(){var t;null===(t=this.paymentsForm.controls.amount)||void 0===t||t.valueChanges.pipe(Object(a.a)(this.destroy$)).subscribe(t=>this.validatePaymentAmount(t))}validatePaymentAmount(t){var e;this.project.balance<t&&(null===(e=this.paymentsForm.controls.amount)||void 0===e||e.setErrors({invalidAmount:!0}))}formSubmit(){if(this.paymentsForm.markAllAsTouched(),this.paymentsForm.valid){const t=this.paymentsForm.controls.datetime.value.toString(),e={projects_id:this.projectID,amount:this.paymentsForm.controls.amount.value,datetime:t,receipt:this.paymentsForm.controls.receipt.value};"Crear"===this.crudAction?this.crearPagoEnLaDb(e):this.editarPagoEnLaDb(e)}}ngOnInit(){this.getProject()}getProject(){this.projectsService.getOneProject(this.projectID).pipe(Object(a.a)(this.destroy$),Object(i.a)(()=>this.loading=!1)).subscribe(t=>{var e,o;(null===(e=null==t?void 0:t.meta)||void 0===e?void 0:e.status.toString().includes("20"))?(this.project=t.data,this.payments=null===(o=null==t?void 0:t.data)||void 0===o?void 0:o.Payments,this.setTableData()):Object(m.d)(t)},t=>Object(m.c)(t))}setTableData(){this.payments.forEach(t=>this.tableData.push({id:t.id,item2:t.receipt,item3:t.amount.toString(),item4:t.datetime.substring(0,10)}))}recargarPagos(t){t&&(this.resetsetControls(),this.tableData=[],this.payments=[],this.isCreating=!1,this.isEditing=!1,this.getProject())}resetsetControls(){var t,e,o;null===(t=this.paymentsForm.controls.amount)||void 0===t||t.setValue(null),null===(e=this.paymentsForm.controls.receipt)||void 0===e||e.setValue(""),null===(o=this.paymentsForm.controls.datetime)||void 0===o||o.setValue(null)}crearPagos(){this.crudAction="Crear",this.isCreating=!0,this.isEditing=!1}crearPagoEnLaDb(t){this.projectsService.create(t,"payments").pipe(Object(a.a)(this.destroy$)).subscribe(t=>{this.recargarPagos(!0),Object(m.a)(t,"cre\xf3","pago")},t=>{this.recargarPagos(!0),Object(m.d)(t)})}editarPagos(t){this.crudAction="Editar",this.isEditing=!0,this.isCreating=!1;const e=this.payments.find(e=>e.id===t);if(e){const o=new Date(e.datetime).toISOString().substring(0,16);this.pagoId=t,this.paymentsForm.controls.amount.setValue(e.amount),this.paymentsForm.controls.receipt.setValue(e.receipt),this.paymentsForm.controls.datetime.setValue(o)}}editarPagoEnLaDb(t){this.projectsService.edit(this.pagoId,t,"payments").pipe(Object(a.a)(this.destroy$)).subscribe(t=>{this.recargarPagos(!0),Object(m.a)(t,"edit\xf3","pago")},t=>{this.recargarPagos(!0),Object(m.d)(t)})}borrarPagos(t){l.a.fire({title:"\xbfSeguro quer\xe9s elimninar el pago seleccionado?",showDenyButton:!0,confirmButtonText:"Si, borrar",denyButtonText:"No"}).then(e=>{e.isConfirmed&&this.borrarPagoEnLaDb(t)})}borrarPagoEnLaDb(t){this.adminPanelCrudService.delete(t,"payments").pipe(Object(a.a)(this.destroy$)).subscribe(t=>{this.recargarPagos(!0),Object(m.a)(t,"borr\xf3","pago")},t=>Object(m.d)(t))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(r.c),d.Kb(u.a),d.Kb(c.c),d.Kb(p.a))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-payments"]],decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],["title","Pagos",3,"encabezadosTabla","filasTabla","totalSection","loading","noImage","onRecargar","onCreate","onEdit","onDelete",4,"ngIf"],["title","Pagos",3,"encabezadosTabla","filasTabla","totalSection","loading","noImage","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"form-group"],["for","comprobanteInput",4,"ngIf"],[1,"input-group"],["type","text","id","comprobanteInput","placeholder","N\xfamero de comprobante","formControlName","receipt",1,"form-control"],[1,"p-2"],["class","text-danger",4,"ngIf"],["for","amountInput",4,"ngIf"],["type","number","placeholder","Monto del pago","formControlName","amount","id","amountInput",1,"form-control",3,"change"],["for","fechaPagoInput",4,"ngIf"],["type","datetime-local","placeholder","Fecha del pago","formControlName","datetime","id","fechaPagoInput",1,"form-control"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],["for","comprobanteInput"],[1,"text-danger"],["for","amountInput"],["for","fechaPagoInput"]],template:function(t,e){1&t&&(d.Pb(0,"div",0),d.kc(1,f,4,1,"div",1),d.kc(2,C,35,10,"div",1),d.Ob()),2&t&&(d.zb(1),d.dc("ngIf",!e.isEditing&&!e.isCreating),d.zb(1),d.dc("ngIf",e.isCreating||e.isEditing))},directives:[n.l,g.a,c.n,c.h,c.e,c.b,c.g,c.d,c.j],styles:[""]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({imports:[[r.f.forChild(D)],r.f]}),t})();var S=o("6eV/");let z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({imports:[[n.b,k,c.k,S.a]]}),t})()}}]);