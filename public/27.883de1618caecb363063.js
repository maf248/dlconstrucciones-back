(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0st6":function(e,o,r){"use strict";r.r(o),r.d(o,"UserProfileModule",function(){return X});var t=r("ofXK"),s=r("tyNb"),n=r("3Pt+"),a=r("XNiG"),i=r("1G5W"),c=r("PSD3"),l=r.n(c),d=r("ZLyn"),b=r("AytR"),m=r("fXoL"),u=r("IT5Z"),p=r("o1z6"),f=r("R3Qk");function h(e,o){if(1&e&&(m.Pb(0,"th",19),m.mc(1),m.Zb(2,"titlecase"),m.Ob()),2&e){const e=o.$implicit;m.zb(1),m.oc(" ",m.ac(2,1,e)," ")}}function P(e,o){if(1&e&&(m.Pb(0,"tr"),m.Pb(1,"td"),m.mc(2),m.Ob(),m.Pb(3,"td"),m.mc(4),m.Zb(5,"date"),m.Ob(),m.Pb(6,"td"),m.mc(7),m.Zb(8,"currency"),m.Ob(),m.Ob()),2&e){const e=o.$implicit;m.zb(2),m.oc("#",e.receipt,""),m.zb(2),m.nc(m.bc(5,3,e.datetime,"dd/MM/yyyy")),m.zb(3),m.nc(m.ac(8,6,e.amount))}}function g(e,o){if(1&e&&(m.Pb(0,"div",12),m.Pb(1,"div",13),m.Pb(2,"div",14),m.Pb(3,"div",15),m.Pb(4,"div",16),m.Pb(5,"table",17),m.Pb(6,"thead"),m.Pb(7,"tr"),m.kc(8,h,3,3,"th",18),m.Ob(),m.Ob(),m.Pb(9,"tbody"),m.kc(10,P,9,8,"tr",1),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob()),2&e){const e=m.Yb().$implicit,o=m.Yb();m.zb(8),m.dc("ngForOf",o.encabezados),m.zb(2),m.dc("ngForOf",e.Payments)}}function v(e,o){if(1&e){const e=m.Qb();m.Pb(0,"div",20),m.Pb(1,"button",21),m.Wb("click",function(){m.gc(e);const o=m.Yb().$implicit;return m.Yb().descargarCashFlow(o.cashflow)}),m.Lb(2,"i",22),m.mc(3," Descargar cashflow "),m.Ob(),m.Ob()}}function O(e,o){if(1&e&&(m.Pb(0,"div"),m.Lb(1,"img",30),m.Ob()),2&e){const e=m.Yb().$implicit;m.zb(1),m.dc("src",e.base64,m.hc)}}function w(e,o){if(1&e&&(m.Pb(0,"div",31),m.Lb(1,"video",32),m.Ob()),2&e){const e=m.Yb().$implicit;m.zb(1),m.dc("src",e.base64,m.hc)("autoplay",!1)("muted",!0)("loop",!0)("controls",!0)}}function y(e,o){if(1&e&&(m.Pb(0,"div",26),m.Pb(1,"div",27),m.kc(2,O,2,1,"div",28),m.kc(3,w,2,5,"div",29),m.Ob(),m.Ob()),2&e){const e=o.$implicit,r=m.Yb(2).$implicit,t=m.Yb();m.Bb(t.showGalleryCard(e,r)?"display-block":"display-none"),m.zb(2),m.dc("ngIf",t.showGalleryImage(e,r)),m.zb(1),m.dc("ngIf",t.showGalleryVideo(e,r))}}function F(e,o){if(1&e&&(m.Pb(0,"div",23),m.Pb(1,"h6"),m.mc(2,"Galer\xeda:"),m.Ob(),m.Lb(3,"hr"),m.Pb(4,"div",24),m.kc(5,y,4,4,"div",25),m.Ob(),m.Ob()),2&e){const e=m.Yb(2);m.zb(5),m.dc("ngForOf",e.assets)}}function k(e,o){if(1&e&&(m.Pb(0,"div"),m.Pb(1,"h5",2),m.mc(2),m.Pb(3,"span",3),m.mc(4),m.Ob(),m.Ob(),m.Pb(5,"div",4),m.Lb(6,"div",5),m.Ob(),m.Pb(7,"h5",6),m.mc(8," Total "),m.Pb(9,"span",7),m.mc(10),m.Zb(11,"currency"),m.Ob(),m.Ob(),m.Pb(12,"h5",8),m.mc(13," Balance: "),m.Lb(14,"br"),m.Pb(15,"span"),m.mc(16),m.Lb(17,"i"),m.Ob(),m.Pb(18,"span",3),m.mc(19),m.Zb(20,"currency"),m.Ob(),m.Ob(),m.kc(21,g,11,2,"div",9),m.kc(22,v,4,0,"div",10),m.kc(23,F,6,1,"div",11),m.Ob()),2&e){const e=o.$implicit,r=o.index,t=m.Yb();m.zb(2),m.oc(" ",e.title?e.title:"Proyecto sin t\xedtulo"," "),m.zb(2),m.oc("",t.porcentaje[r],"%"),m.zb(2),m.jc(t.progressBarStyle[r]),m.zb(4),m.nc(m.ac(11,14,e.total)),m.zb(2),m.Bb(e.balance?"text-warning":"text-success"),m.zb(4),m.oc(" ",e.balance?"Falta pagar":"\xa1Estas al d\xeda!"," "),m.zb(1),m.Bb(e.balance?"":"ti ti-face-smile"),m.zb(2),m.nc(m.ac(20,16,e.balance)),m.zb(2),m.dc("ngIf",null==e.Payments?null:e.Payments.length),m.zb(1),m.dc("ngIf",e.cashflow),m.zb(1),m.dc("ngIf",t.assets.length)}}let z=(()=>{class e{constructor(e){this.projectsService=e,this.onDownloadCashflow=new m.n,this.proyectos=[],this.assets=[],this.destroy$=new a.a}set setProyectos(e){e&&e.projects&&(this.proyectos=e.projects)}ngOnInit(){this.setAssets()}get encabezados(){var e;let o=[];const r=[];if(null===(e=this.proyectos)||void 0===e||e.forEach(e=>{var r;return null===(r=e.Payments)||void 0===r?void 0:r.forEach(e=>o=Object.keys(e))}),null==o?void 0:o.length)for(const t of o)switch(t){case"amount":r.push("Monto");break;case"receipt":r.push("Comprobante");break;case"datetime":r.push("Fecha")}return r.sort(),r}get progressBarStyle(){var e;const o=[];return null===(e=this.proyectos)||void 0===e||e.forEach(e=>{const r=this.setPorcentaje(e.total,e.balance);o.push(`width: ${r}%`)}),o}get porcentaje(){var e;const o=[];return null===(e=this.proyectos)||void 0===e||e.forEach(e=>{const r=this.setPorcentaje(e.total,e.balance);o.push(r)}),o}setPorcentaje(e,o){let r=e-o;return r=100*r/e,Math.round(r)}descargarCashFlow(e){this.onDownloadCashflow.emit(e)}setAssets(){var e;null===(e=this.proyectos)||void 0===e||e.forEach(e=>{e.Assets.forEach(o=>{this.projectsService.getAssetsDeUnProyecto(o.asset).pipe(Object(i.a)(this.destroy$)).subscribe({next:r=>{const t=new FileReader;t.readAsDataURL(r),t.onload=()=>{this.assets.push({base64:t.result,project_id:e.id,type:r.type,asset_id:o.id})}},error:e=>Object(d.e)(e)})})})}showGalleryCard(e,o){return e.project_id===o.id}showGalleryImage(e,o){return e.type.includes("image")&&e.project_id===o.id}showGalleryVideo(e,o){return e.type.includes("video")&&e.project_id===o.id}expandImage(e){l.a.fire({imageUrl:e,imageWidth:400,imageHeight:400,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})}}return e.\u0275fac=function(o){return new(o||e)(m.Kb(p.a))},e.\u0275cmp=m.Eb({type:e,selectors:[["app-proyects"]],inputs:{setProyectos:"setProyectos"},outputs:{onDownloadCashflow:"onDownloadCashflow"},decls:4,vars:1,consts:[[1,"font-medium","m-t-30"],[4,"ngFor","ngForOf"],[1,"m-t-30","primary-dark"],[1,"pull-right"],[1,"progress"],["role","progressbar","aria-valuenow","80","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bgc-primary-dark"],[1,"m-t-10","primary-dark"],[1,"pull-right","primary-dark"],[1,"m-t-10"],["class","row animated fadeIn rows-container",4,"ngIf"],["class","cashflow m-t-5 b-b-5",4,"ngIf"],["class","row proyect-carrousel m-t-5 b-b-5",4,"ngIf"],[1,"row","animated","fadeIn","rows-container"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-bordered"],["class","text-nowrap primary-dark",4,"ngFor","ngForOf"],[1,"text-nowrap","primary-dark"],[1,"cashflow","m-t-5","b-b-5"],[1,"btn","bgc-primary-dark","text-white",3,"click"],[1,"ti","ti-file"],[1,"row","proyect-carrousel","m-t-5","b-b-5"],[1,"card-group"],["class","col-lg-4 col-md-6",3,"class",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6"],[1,"card","m-0","p-0"],[4,"ngIf"],["class","embed-responsive embed-responsive-21by9",4,"ngIf"],["alt","Construcci\xf3n",1,"img-responsive",3,"src"],[1,"embed-responsive","embed-responsive-21by9"],[1,"embed-responsive-item",3,"src","autoplay","muted","loop","controls"]],template:function(e,o){1&e&&(m.Pb(0,"h4",0),m.mc(1,"Proyectos:"),m.Ob(),m.Lb(2,"hr"),m.kc(3,k,24,18,"div",1)),2&e&&(m.zb(3),m.dc("ngForOf",o.proyectos))},directives:[t.l,t.m],pipes:[t.d,t.q,t.f],styles:[".progress-bar[_ngcontent-%COMP%]{height:6px}.cashflow[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:250px}.card[_ngcontent-%COMP%]   .embed-responsive[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .embed-responsive-21by9[_ngcontent-%COMP%]{height:100%;background-color:#000}.card[_ngcontent-%COMP%]   .embed-responsive-21by9[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .embed-responsive[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}.display-none[_ngcontent-%COMP%]{display:none}.display-block[_ngcontent-%COMP%]{display:block}"]}),e})();function _(e,o){1&e&&(m.Pb(0,"div",33),m.Pb(1,"span",47),m.mc(2,"Formato de im\xe1gen inv\xe1lido"),m.Ob(),m.Ob())}function I(e,o){1&e&&(m.Pb(0,"li",48),m.Pb(1,"a",49),m.mc(2,"Administrar p\xe1gina"),m.Ob(),m.Ob())}function C(e,o){if(1&e){const e=m.Qb();m.Nb(0),m.Pb(1,"app-proyects",50),m.Wb("onDownloadCashflow",function(o){return m.gc(e),m.Yb().descargarCashflow(o)}),m.Ob(),m.Mb()}if(2&e){const e=m.Yb();m.zb(1),m.dc("setProyectos",e.user)}}function E(e,o){1&e&&(m.Pb(0,"h4",51),m.mc(1,"Proyectos:"),m.Ob(),m.Lb(2,"hr"),m.Pb(3,"h5",52),m.mc(4," Todav\xeda no tenes un proyecto asignado "),m.Pb(5,"span"),m.mc(6,"\xa1No te quedes esperando y escribinos!"),m.Ob(),m.Ob())}function L(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Este dato es requerido"),m.Ob())}function j(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Debe tener al menos 3 caracteres"),m.Ob())}function x(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Este dato es requerido"),m.Ob())}function S(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Debe tener al menos 3 caracteres"),m.Ob())}function M(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Este dato es requerido"),m.Ob())}function R(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Debe contenter al menos 7 caracteres"),m.Ob())}function D(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"N\xfamero m\xe1ximo 999.999.999"),m.Ob())}function N(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Este dato es requerido"),m.Ob())}function A(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Por favor ingres\xe1 un email v\xe1lido"),m.Ob())}function U(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"La contrase\xf1a debe tener un m\xednimo de 8 caracteres, incluyendo una min\xfascula, una may\xfascula, un n\xfamero y un s\xedmbolo"),m.Ob())}function $(e,o){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe tener al menos 8 caracteres "),m.Ob())}function W(e,o){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe contener al menos un n\xfamero "),m.Ob())}function T(e,o){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe contener al menos una letra min\xfascula "),m.Ob())}function q(e,o){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe tener al menos una letra may\xfascula "),m.Ob())}function B(e,o){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe tener al menos alguno de los siguientes s\xedmbolos *._%+- "),m.Ob())}function Y(e,o){if(1&e&&(m.Pb(0,"div",33),m.Pb(1,"ul",53),m.kc(2,$,2,0,"li",54),m.kc(3,W,2,0,"li",54),m.kc(4,T,2,0,"li",54),m.kc(5,q,2,0,"li",54),m.kc(6,B,2,0,"li",54),m.Ob(),m.Ob()),2&e){const e=m.Yb();m.zb(2),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs())}}function G(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Este dato es requerido"),m.Ob())}function Z(e,o){1&e&&(m.Pb(0,"span",47),m.mc(1,"Las contrase\xf1as no coinciden"),m.Ob())}function K(e,o){if(1&e){const e=m.Qb();m.Pb(0,"div",55),m.Pb(1,"div",31),m.Pb(2,"div",39),m.Lb(3,"input",56,57),m.Pb(5,"div",42),m.Pb(6,"i",43),m.Wb("click",function(){m.gc(e);const o=m.fc(4);return m.Yb().showRepeatPassword(o)}),m.Ob(),m.Ob(),m.Ob(),m.Pb(7,"div",33),m.kc(8,G,2,0,"span",34),m.kc(9,Z,2,0,"span",34),m.Ob(),m.Ob(),m.Ob()}if(2&e){const e=m.Yb();m.zb(6),m.Bb(e.repeatPasswordEye),m.zb(2),m.dc("ngIf",(null==e.editProfileForm.controls.passwordRepeat.errors?null:e.editProfileForm.controls.passwordRepeat.errors.required)&&e.editProfileForm.controls.passwordRepeat.touched),m.zb(1),m.dc("ngIf",(null==e.editProfileForm.controls.passwordRepeat.errors?null:e.editProfileForm.controls.passwordRepeat.errors.notMatch)&&e.editProfileForm.controls.passwordRepeat.touched)}}const Q=[{path:"",component:(()=>{class e{constructor(e,o,r,t,s){this.authService=e,this.fb=o,this.projectsService=r,this.renderer=t,this.userStore=s,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.destroy$=new a.a,this.mostrarRepetirContrasena=!1,this.formatoImagenNoAceptado=!1,this.passwordEye="fa fa-eye-slash",this.userWantsToSeePassword=!1,this.repeatPasswordEye="fa fa-eye-slash",this.userWantsToSeeRepeatPassword=!1,this.setUserAndCreateForm()}setUserAndCreateForm(){this.userStore.loggedUser$.pipe(Object(i.a)(this.destroy$)).subscribe(e=>{e.id?(this.user=e,this.userAvatar=`${b.a.API_IMAGE_URL}/users/${e.avatar}`,this.userName=e.nombre,this.userLastName=e.apellido,this.userEmail=e.email,this.userPhone=e.phone,this.userProjects=e.projects,this.createForm()):this.createForm()})}createForm(){var e,o,r,t,s;this.editProfileForm=this.fb.group({first_name:[null===(e=this.user)||void 0===e?void 0:e.nombre,[n.m.required,n.m.minLength(3)]],last_name:[null===(o=this.user)||void 0===o?void 0:o.apellido,[n.m.required,n.m.minLength(3)]],dni:[null===(r=this.user)||void 0===r?void 0:r.dni,[n.m.required,n.m.max(999999999),n.m.min(1e6)]],email:[null===(t=this.user)||void 0===t?void 0:t.email,[n.m.required,n.m.pattern(this.emailPattern)]],phone:[null===(s=this.user)||void 0===s?void 0:s.phone],password:[""],passwordRepeat:["",[n.m.required]]},{validator:[this.passwordMatchFormValidator,this.validateStrongPassword]})}passwordMatchFormValidator(e){const o=e.get("password"),r=e.get("passwordRepeat");r.setErrors(o.value===r.value?null:{notMatch:!0})}validateStrongPassword(e){const o=e.get("password");(null==o?void 0:o.value)&&(/\d/.test(null==o?void 0:o.value)?/[a-z]/.test(null==o?void 0:o.value)?/[A-Z]/.test(null==o?void 0:o.value)?/[*._%+-]/.test(null==o?void 0:o.value)?(null==o?void 0:o.value.length)<8&&(null==o||o.setErrors({minlength:!0})):null==o||o.setErrors({notSymbols:!0}):null==o||o.setErrors({noUppercase:!0}):null==o||o.setErrors({noLowercase:!0}):null==o||o.setErrors({notDigits:!0}))}showStrongPasswordErrorMsgs(){var e,o,r,t,s;return this.editProfileForm.controls.password.touched&&((null===(e=this.editProfileForm.controls.password.errors)||void 0===e?void 0:e.notDigits)||(null===(o=this.editProfileForm.controls.password.errors)||void 0===o?void 0:o.noLowercase)||(null===(r=this.editProfileForm.controls.password.errors)||void 0===r?void 0:r.noUppercase)||(null===(t=this.editProfileForm.controls.password.errors)||void 0===t?void 0:t.notSymbols)||(null===(s=this.editProfileForm.controls.password.errors)||void 0===s?void 0:s.minlength))}showPassword(e){this.userWantsToSeePassword=!this.userWantsToSeePassword,this.passwordEye=this.userWantsToSeePassword?"fa fa-eye":"fa fa-eye-slash",e.type=this.userWantsToSeePassword?"text":"password"}showRepeatPassword(e){this.userWantsToSeeRepeatPassword=!this.userWantsToSeeRepeatPassword,this.repeatPasswordEye=this.userWantsToSeeRepeatPassword?"fa fa-eye":"fa fa-eye-slash",e.type=this.userWantsToSeeRepeatPassword?"text":"password"}cambiarFoto(e){const o=e.target.files[0],r=new FormData;if(r.append("avatar",o),r.get("avatar"))switch(null==o?void 0:o.type){case"image/jpg":case"image/png":case"image/jpeg":return this.formatoImagenNoAceptado=!1,void this.actualizarImagenEnDB(r);default:this.formatoImagenNoAceptado=!0}}actualizarImagenEnDB(e){this.authService.actualizarImagenUsuario(e).pipe(Object(i.a)(this.destroy$)).subscribe(e=>{e.meta.status.toString().includes("20")?this.modifyLoggedUser(null==e?void 0:e.data):Object(d.e)(e)},e=>Object(d.d)(e))}cambiarPerfil(){this.editProfileForm.markAllAsTouched(),this.editProfileForm.valid&&(this.editProfileForm.controls.password.value?this.confirmAndModifyLoggedUser():this.guardarCambiosEnBaseDeDatos())}guardarCambiosEnBaseDeDatos(){this.authService.actualizarUsuario(this.editProfileForm.value).pipe(Object(i.a)(this.destroy$)).subscribe(e=>{var o;(null===(o=null==e?void 0:e.meta)||void 0===o?void 0:o.status.toString().includes("20"))?this.modifyLoggedUser(null==e?void 0:e.data):Object(d.e)(e)},e=>Object(d.d)(e))}confirmAndModifyLoggedUser(){l.a.fire({title:"\xbfEst\xe1s seguro que quer\xe9s cambiar tu contrase\xf1a?",showDenyButton:!0,confirmButtonText:"Si, continuar",denyButtonText:"No"}).then(e=>{e.isConfirmed&&this.guardarCambiosEnBaseDeDatos()}).catch(e=>Object(d.d)(e))}modifyLoggedUser(e){this.userStore.setUser({id:e.id,nombre:e.first_name,apellido:e.last_name,email:e.email,role:e.role,dni:e.dni,avatar:e.avatar,phone:e.phone,projects:e.Projects}),l.a.fire("\xa1Excelente!","Actualizamos tus datos sin problemas","success")}toggleRepetirConstrasena(){this.mostrarRepetirContrasena=!!this.editProfileForm.controls.password.value}descargarCashflow(e){this.projectsService.getCashflow(e).pipe(Object(i.a)(this.destroy$)).subscribe(e=>{const o=new Blob([e],{type:e.type}),r=window.URL.createObjectURL(o);let t=this.renderer.createElement("a");t.href=r,t.download="Cashflow",t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{window.URL.revokeObjectURL(r),t.remove(),this.renderer.destroy()},100)},e=>Object(d.d)(e))}logout(){this.userStore.logout()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(m.Kb(u.a),m.Kb(n.c),m.Kb(p.a),m.Kb(m.E),m.Kb(f.a))},e.\u0275cmp=m.Eb({type:e,selectors:[["app-user-profile"]],decls:106,vars:30,consts:[[1,"row","animate__animated","animate__fadeIn","animate__slow"],[1,"col-lg-4","col-xlg-3","col-md-5"],[1,"card"],[1,"card-body"],[1,"m-t-30","text-center"],["width","150","height","150",1,"img-circle","pointer",3,"src","click"],["class","p-2",4,"ngIf"],["type","file",1,"d-none",3,"change"],["inputFoto",""],[1,"card-title","m-t-10","primary-dark"],[1,"text-muted"],[1,"text-muted","p-t-30","db",3,"hidden"],[3,"hidden"],[1,"col-lg-8","col-xlg-9","col-md-7"],["role","tablist",1,"nav","nav-tabs","profile-tab"],[1,"nav-item"],["data-toggle","tab","href","#profile","role","tab","aria-expanded","true",1,"nav-link","active"],["data-toggle","tab","href","#settings","role","tab","aria-expanded","false",1,"nav-link"],["class","nav-item bgc-primary",4,"ngIf"],[1,"nav-item","bg-danger","text-white","pointer",3,"click"],["id","admin-pag","aria-expanded","false",1,"nav-link"],[1,"tab-content"],["id","profile","role","tabpanel","aria-expanded","true",1,"tab-pane","active"],[1,"row"],[1,"col-md-4","col-xs-6","b-r"],[1,"col-md-4","col-xs-6"],[4,"ngIf","ngIfElse"],["noProjects",""],["id","settings","role","tabpanel","aria-expanded","false",1,"tab-pane"],[1,"form-horizontal","form-material",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-md-12"],["type","text","formControlName","first_name","placeholder","Nombre",1,"form-control","form-control-line","primary-dark"],[1,"p-2"],["class","text-danger",4,"ngIf"],["type","text","formControlName","last_name","placeholder","Apellido",1,"form-control","form-control-line","primary-dark"],["type","text","formControlName","dni","placeholder","DNI",1,"form-control","form-control-line","primary-dark"],["type","email","formControlName","email","placeholder","Email","name","example-email","id","example-email",1,"form-control","form-control-line","primary-dark"],["type","number","placeholder","Tel\xe9fono","formControlName","phone",1,"form-control","form-control-line","primary-dark"],[1,"input-group"],["type","password","placeholder","Escrib\xed tu contrase\xf1a nueva","formControlName","password",1,"form-control","primary-dark",3,"change"],["inputPassword",""],[1,"input-group-addon"],[3,"click"],["class","form-group animate__animated animate__slideInLeft animate__fast",4,"ngIf"],[1,"col-sm-12"],["type","submit",1,"btn","btn-success"],[1,"text-danger"],[1,"nav-item","bgc-primary"],["id","admin-pag","routerLink","/admin","aria-expanded","false",1,"nav-link"],[3,"setProyectos","onDownloadCashflow"],[1,"font-medium","m-t-30"],[1,"m-t-30"],[1,"form-text","text-danger","list-unstyled"],[4,"ngIf"],[1,"form-group","animate__animated","animate__slideInLeft","animate__fast"],["type","password","placeholder","Repet\xed tu contrase\xf1a nueva","formControlName","passwordRepeat",1,"form-control"],["inputRepeatPassword",""]],template:function(e,o){if(1&e){const e=m.Qb();m.Pb(0,"div",0),m.Pb(1,"div",1),m.Pb(2,"div",2),m.Pb(3,"div",3),m.Pb(4,"div",4),m.Pb(5,"img",5),m.Wb("click",function(){return m.gc(e),m.fc(8).click()}),m.Ob(),m.kc(6,_,3,0,"div",6),m.Pb(7,"input",7,8),m.Wb("change",function(e){return o.cambiarFoto(e)}),m.Ob(),m.Pb(9,"h4",9),m.mc(10),m.Ob(),m.Ob(),m.Ob(),m.Pb(11,"div"),m.Lb(12,"hr"),m.Ob(),m.Pb(13,"div",3),m.Pb(14,"h4",10),m.mc(15,"Email"),m.Ob(),m.Pb(16,"h6"),m.mc(17),m.Ob(),m.Pb(18,"h4",11),m.mc(19,"Tel\xe9fono"),m.Ob(),m.Pb(20,"h6",12),m.mc(21),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Pb(22,"div",13),m.Pb(23,"div",2),m.Pb(24,"ul",14),m.Pb(25,"li",15),m.Pb(26,"a",16),m.mc(27,"Yo"),m.Ob(),m.Ob(),m.Pb(28,"li",15),m.Pb(29,"a",17),m.mc(30,"Editar perfil"),m.Ob(),m.Ob(),m.kc(31,I,3,0,"li",18),m.Pb(32,"li",19),m.Wb("click",function(){return o.logout()}),m.Pb(33,"a",20),m.mc(34,"Cerrar sesi\xf3n"),m.Ob(),m.Ob(),m.Ob(),m.Pb(35,"div",21),m.Pb(36,"div",22),m.Pb(37,"div",3),m.Pb(38,"div",23),m.Pb(39,"div",24),m.Pb(40,"strong"),m.mc(41,"Nombre completo"),m.Ob(),m.Lb(42,"br"),m.Pb(43,"p",10),m.mc(44),m.Ob(),m.Ob(),m.Pb(45,"div",24),m.Pb(46,"strong"),m.mc(47,"Tel\xe9fono"),m.Ob(),m.Lb(48,"br"),m.Pb(49,"p",10),m.mc(50),m.Ob(),m.Ob(),m.Pb(51,"div",25),m.Pb(52,"strong"),m.mc(53,"Email"),m.Ob(),m.Lb(54,"br"),m.Pb(55,"p",10),m.mc(56),m.Ob(),m.Ob(),m.Ob(),m.Lb(57,"hr"),m.kc(58,C,2,1,"ng-container",26),m.kc(59,E,7,0,"ng-template",null,27,m.lc),m.Ob(),m.Ob(),m.Pb(61,"div",28),m.Pb(62,"div",3),m.Pb(63,"form",29),m.Wb("ngSubmit",function(){return o.cambiarPerfil()}),m.Pb(64,"div",30),m.Pb(65,"div",31),m.Lb(66,"input",32),m.Pb(67,"div",33),m.kc(68,L,2,0,"span",34),m.kc(69,j,2,0,"span",34),m.Ob(),m.Ob(),m.Ob(),m.Pb(70,"div",30),m.Pb(71,"div",31),m.Lb(72,"input",35),m.Ob(),m.Pb(73,"div",33),m.kc(74,x,2,0,"span",34),m.kc(75,S,2,0,"span",34),m.Ob(),m.Ob(),m.Pb(76,"div",30),m.Pb(77,"div",31),m.Lb(78,"input",36),m.Pb(79,"div",33),m.kc(80,M,2,0,"span",34),m.kc(81,R,2,0,"span",34),m.kc(82,D,2,0,"span",34),m.Ob(),m.Ob(),m.Ob(),m.Pb(83,"div",30),m.Pb(84,"div",31),m.Lb(85,"input",37),m.Pb(86,"div",33),m.kc(87,N,2,0,"span",34),m.kc(88,A,2,0,"span",34),m.Ob(),m.Ob(),m.Ob(),m.Pb(89,"div",30),m.Pb(90,"div",31),m.Lb(91,"input",38),m.Lb(92,"div",33),m.Ob(),m.Ob(),m.Pb(93,"div",30),m.Pb(94,"div",39),m.Pb(95,"input",40,41),m.Wb("change",function(){return o.toggleRepetirConstrasena()}),m.Ob(),m.Pb(97,"div",42),m.Pb(98,"i",43),m.Wb("click",function(){m.gc(e);const r=m.fc(96);return o.showPassword(r)}),m.Ob(),m.Ob(),m.kc(99,U,2,0,"span",34),m.Ob(),m.kc(100,Y,7,5,"div",6),m.Ob(),m.kc(101,K,10,4,"div",44),m.Pb(102,"div",30),m.Pb(103,"div",45),m.Pb(104,"button",46),m.mc(105," Actualizar perfil "),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob()}if(2&e){const e=m.fc(60);m.zb(5),m.dc("src",o.userAvatar,m.hc),m.zb(1),m.dc("ngIf",o.formatoImagenNoAceptado),m.zb(4),m.pc(" ",o.userName," ",o.userLastName," "),m.zb(7),m.nc(o.userEmail),m.zb(1),m.dc("hidden",!o.userPhone),m.zb(2),m.dc("hidden",!o.userPhone),m.zb(1),m.nc(o.userPhone),m.zb(10),m.dc("ngIf","admin"===(null==o.user?null:o.user.role)||"master"===(null==o.user?null:o.user.role)),m.zb(13),m.pc(" ",o.userName," ",o.userLastName," "),m.zb(6),m.nc(o.userPhone),m.zb(6),m.nc(o.userEmail),m.zb(2),m.dc("ngIf",o.userProjects)("ngIfElse",e),m.zb(5),m.dc("formGroup",o.editProfileForm),m.zb(5),m.dc("ngIf",(null==o.editProfileForm.controls.first_name.errors?null:o.editProfileForm.controls.first_name.errors.required)&&o.editProfileForm.controls.first_name.touched),m.zb(1),m.dc("ngIf",(null==o.editProfileForm.controls.first_name.errors?null:o.editProfileForm.controls.first_name.errors.minlength)&&o.editProfileForm.controls.first_name.touched),m.zb(5),m.dc("ngIf",(null==o.editProfileForm.controls.last_name.errors?null:o.editProfileForm.controls.last_name.errors.required)&&o.editProfileForm.controls.last_name.touched),m.zb(1),m.dc("ngIf",(null==o.editProfileForm.controls.last_name.errors?null:o.editProfileForm.controls.last_name.errors.minlength)&&o.editProfileForm.controls.last_name.touched),m.zb(5),m.dc("ngIf",(null==o.editProfileForm.controls.dni.errors?null:o.editProfileForm.controls.dni.errors.required)&&o.editProfileForm.controls.dni.touched),m.zb(1),m.dc("ngIf",(null==o.editProfileForm.controls.dni.errors?null:o.editProfileForm.controls.dni.errors.min)&&o.editProfileForm.controls.dni.touched),m.zb(1),m.dc("ngIf",(null==o.editProfileForm.controls.dni.errors?null:o.editProfileForm.controls.dni.errors.max)&&o.editProfileForm.controls.dni.touched),m.zb(5),m.dc("ngIf",(null==o.editProfileForm.controls.email.errors?null:o.editProfileForm.controls.email.errors.required)&&o.editProfileForm.controls.email.touched),m.zb(1),m.dc("ngIf",(null==o.editProfileForm.controls.email.errors?null:o.editProfileForm.controls.email.errors.pattern)&&o.editProfileForm.controls.email.touched),m.zb(10),m.Bb(o.passwordEye),m.zb(1),m.dc("ngIf",(null==o.editProfileForm.controls.password.errors?null:o.editProfileForm.controls.password.errors.pattern)&&o.editProfileForm.controls.password.touched),m.zb(1),m.dc("ngIf",o.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",o.mostrarRepetirContrasena)}},directives:[t.m,n.n,n.h,n.e,n.b,n.g,n.d,n.j,s.e,z],styles:["#admin-pag[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let H=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({imports:[[s.f.forChild(Q)],s.f]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({imports:[[t.c]]}),e})(),X=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({imports:[[t.c,H,s.f,n.k,V]]}),e})()}}]);