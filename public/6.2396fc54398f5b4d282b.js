(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{bqc1:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var o=e("ofXK"),i=e("tyNb"),r=e("fXoL");let a=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[o.b,i.f]]}),n})()},ebwL:function(n,t,e){"use strict";e.r(t),e.d(t,"MainModule",function(){return D});var o=e("ofXK"),i=e("tyNb"),r=e("fXoL"),a=e("IT5Z");function c(n,t){if(1&n&&(r.Ob(0,"li"),r.Ob(1,"a",23),r.Ob(2,"h5",24),r.jc(3),r.Nb(),r.Nb(),r.Nb()),2&n){const n=t.$implicit;r.zb(1),r.bc("routerLink",n.redirectTo),r.zb(2),r.kc(n.description)}}function s(n,t){if(1&n&&(r.Ob(0,"div",21),r.Ob(1,"ul"),r.hc(2,c,4,2,"li",22),r.Nb(),r.Nb()),2&n){const n=r.Xb(2).$implicit;r.zb(2),r.bc("ngForOf",n.subMenu)}}function l(n,t){if(1&n&&(r.Mb(0),r.Ob(1,"a",19),r.jc(2),r.Nb(),r.hc(3,s,3,1,"div",20),r.Lb()),2&n){const n=r.Xb().$implicit;r.zb(1),r.bc("routerLink",n.redirectTo),r.zb(1),r.lc(" ",n.description," "),r.zb(1),r.bc("ngIf",n.moreOptions)}}function b(n,t){if(1&n&&(r.Ob(0,"li",18),r.hc(1,l,4,3,"ng-container",16),r.Nb()),2&n){const n=t.$implicit;r.zb(1),r.bc("ngIf",n.toggle)}}function d(n,t){if(1&n&&(r.Ob(0,"p",42),r.jc(1),r.Yb(2,"slice"),r.Nb()),2&n){const n=r.Xb(2);r.zb(1),r.mc(" ",r.ac(2,2,null==n.user?null:n.user.email,0,20),"",(null==n.user||null==n.user.email?null:n.user.email.length)>20?"...":""," ")}}function u(n,t){1&n&&r.Kb(0,"li",37)}function m(n,t){1&n&&(r.Ob(0,"li",43),r.Ob(1,"a"),r.Kb(2,"i",44),r.jc(3," Administrar p\xe1gina"),r.Nb(),r.Nb())}function g(n,t){if(1&n){const n=r.Pb();r.Ob(0,"li",25),r.Ob(1,"a",26),r.Kb(2,"img",27),r.jc(3),r.Nb(),r.Ob(4,"div",28),r.Ob(5,"ul",13),r.Ob(6,"li"),r.Ob(7,"div",29),r.Ob(8,"div",30),r.Kb(9,"img",31),r.Nb(),r.Ob(10,"div",32),r.Ob(11,"h4"),r.jc(12),r.Nb(),r.hc(13,d,3,6,"p",33),r.Ob(14,"a",34),r.jc(15,"Ver perfil"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.hc(16,u,1,0,"li",35),r.hc(17,m,4,0,"li",36),r.Kb(18,"li",37),r.Ob(19,"li",38),r.Ob(20,"a"),r.Kb(21,"i",39),r.jc(22," Mi Balance"),r.Nb(),r.Nb(),r.Kb(23,"li",37),r.Ob(24,"li",40),r.Vb("click",function(){return r.ec(n),r.Xb().logout()}),r.Ob(25,"a"),r.Kb(26,"i",41),r.jc(27," Cerrar sesi\xf3n"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&n){const n=r.Xb();r.zb(2),r.bc("src",n.getUserImg(),r.fc),r.zb(1),r.mc(" ",null==n.user?null:n.user.nombre," ",null==n.user?null:n.user.apellido," "),r.zb(6),r.bc("src",n.getUserImg(),r.fc),r.zb(3),r.mc("",null==n.user?null:n.user.nombre," ",null==n.user?null:n.user.apellido,""),r.zb(1),r.bc("ngIf",null==n.user?null:n.user.email),r.zb(3),r.bc("ngIf","admin"===(null==n.user?null:n.user.role)||"master"===(null==n.user?null:n.user.role)),r.zb(1),r.bc("ngIf","admin"===(null==n.user?null:n.user.role)||"master"===(null==n.user?null:n.user.role))}}function p(n,t){if(1&n&&(r.Mb(0),r.Ob(1,"a",46),r.jc(2),r.Nb(),r.Lb()),2&n){const n=r.Xb().$implicit;r.zb(1),r.bc("routerLink",n.redirectTo),r.zb(1),r.lc(" ",n.description,"")}}function f(n,t){if(1&n&&(r.Ob(0,"li",45),r.hc(1,p,3,2,"ng-container",16),r.Nb()),2&n){const n=t.$implicit;r.bc("routerLink",n.redirectTo),r.zb(1),r.bc("ngIf",n.toggle&&n.inMobile)}}function h(n,t){1&n&&(r.Mb(0),r.Ob(1,"a",47),r.jc(2," INICIAR SESI\xd3N"),r.Nb(),r.Lb())}function O(n,t){1&n&&(r.Mb(0),r.Ob(1,"a",47),r.jc(2," REGISTRARSE"),r.Nb(),r.Lb())}let v=(()=>{class n{constructor(n,t){this.authService=n,this.router=t,this.menu=[{description:"INICIO",redirectTo:"/main/home",moreOptions:!1,toggle:!0,inMobile:!0},{description:"SERVICIOS",redirectTo:"/main/servicios",moreOptions:!1,toggle:!0,inMobile:!0},{description:"TRABAJOS REALIZADOS",redirectTo:"/main/trabajos-realizados",moreOptions:!1,toggle:!0,inMobile:!0},{description:"LOTES",redirectTo:"/main/lotes",moreOptions:!1,toggle:!0,inMobile:!0},{description:"ACREDITARSE",moreOptions:!0,toggle:!0,inMobile:!1,subMenu:[{description:"INICIAR SESI\xd3N",redirectTo:"/main/auth/login",toggle:!0,inMobile:!0},{description:"REGISTRARSE",redirectTo:"/main/auth/register",toggle:!0,inMobile:!0}]}],this._acreditarse={description:"ACREDITARSE",moreOptions:!0,toggle:!0,inMobile:!0,subMenu:[{description:"INICIAR SESI\xd3N",redirectTo:"/auth/login",toggle:!0,icon:"ti-user",inMobile:!0},{description:"REGISTRARSE",redirectTo:"/auth/register",toggle:!0,icon:"ti-plus",inMobile:!0}]}}get user(){return this.authService.getUser()?this.menu=this.menu.filter(n=>"ACREDITARSE"!==n.description):this.menu.find(n=>"ACREDITARSE"===n.description)||this.menu.push(this._acreditarse),this.authService.getUser()}getUserImg(){var n;return this.user?null===(n=this.user)||void 0===n?void 0:n.getAvatar():""}logout(){this.authService.logout()}}return n.\u0275fac=function(t){return new(t||n)(r.Jb(a.a),r.Jb(i.c))},n.\u0275cmp=r.Db({type:n,selectors:[["app-header"]],decls:20,vars:5,consts:[[1,"topbar","animate__animated","animate__slideInDown","animate__slow"],[1,"navbar","top-navbar","navbar-expand-md","navbar-light"],[1,"navbar-header","d-inline-block"],["routerLink","/",1,"navbar-brand"],["src","../../../assets/logo.png","alt","homepage",1,"logo"],[1,"navbar-collapse","d-inline-block"],[1,"navbar-nav","my-lg-0"],["class","nav-item dropdown d-none d-sm-block",4,"ngFor","ngForOf"],["class","nav-item dropdown",4,"ngIf"],[1,"nav-item","dropdown","d-sm-none"],["data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle","waves-effect","waves-dark","primary-dark"],[1,"ti-menu"],[1,"dropdown-menu","dropdown-menu","animated","flipInY"],[1,"dropdown-user"],["class","pointer",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/main/auth/login",1,"pointer"],[4,"ngIf"],["routerLink","/main/auth/register",1,"pointer"],[1,"nav-item","dropdown","d-none","d-sm-block"],["data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle","waves-effect","waves-dark","primary-dark",3,"routerLink"],["class","dropdown-menu dropdown-menu-right animated fadeIn",4,"ngIf"],[1,"dropdown-menu","dropdown-menu-right","animated","fadeIn"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"primary-dark"],[1,"nav-item","dropdown"],["href","","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle","waves-effect","waves-dark","primary-dark"],["alt","user",1,"profile-pic",3,"src"],[1,"dropdown-menu","dropdown-menu-right","animated","flipInY"],[1,"dw-user-box"],[1,"u-img"],["alt","user",3,"src"],[1,"u-text"],["class","text-muted",4,"ngIf"],["routerLink","/main/auth/profile",1,"btn","btn-sm","bgc-primary-dark","pointer"],["role","separator","class","divider",4,"ngIf"],["class","pointer bgc-primary text-white","routerLink","/admin",4,"ngIf"],["role","separator",1,"divider"],["routerLink","/main/auth/profile",1,"pointer"],[1,"ti-wallet"],[1,"pointer",3,"click"],[1,"fa","fa-power-off"],[1,"text-muted"],["routerLink","/admin",1,"pointer","bgc-primary","text-white"],[1,"ti-settings"],[1,"pointer",3,"routerLink"],[1,"nav-link","dropdown-toggle","waves-effect","waves-dark","primary-dark",3,"routerLink"],[1,"nav-link","dropdown-toggle","waves-effect","waves-dark","primary-dark"]],template:function(n,t){1&n&&(r.Ob(0,"header",0),r.Ob(1,"nav",1),r.Ob(2,"div",2),r.Ob(3,"a",3),r.Ob(4,"b"),r.Kb(5,"img",4),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"div",5),r.Ob(7,"ul",6),r.hc(8,b,2,1,"li",7),r.hc(9,g,28,9,"li",8),r.Ob(10,"li",9),r.Ob(11,"a",10),r.Kb(12,"i",11),r.Nb(),r.Ob(13,"div",12),r.Ob(14,"ul",13),r.hc(15,f,2,2,"li",14),r.Ob(16,"li",15),r.hc(17,h,3,0,"ng-container",16),r.Nb(),r.Ob(18,"li",17),r.hc(19,O,3,0,"ng-container",16),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&n&&(r.zb(8),r.bc("ngForOf",t.menu),r.zb(1),r.bc("ngIf",t.user),r.zb(6),r.bc("ngForOf",t.menu),r.zb(2),r.bc("ngIf",!t.user),r.zb(2),r.bc("ngIf",!t.user))},directives:[i.e,o.i,o.j,i.d],pipes:[o.m],styles:[".topbar[_ngcontent-%COMP%]{margin-bottom:10px;background-color:inherit;position:relative}.topbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%}"]}),n})();var N=e("XNiG"),C=e("1G5W"),M=e("AytR"),w=e("N+K7");function _(n,t){if(1&n&&(r.Ob(0,"div",6),r.Ob(1,"div",7),r.Ob(2,"div",8),r.Ob(3,"h4",9),r.jc(4),r.Nb(),r.Ob(5,"button",10),r.jc(6," X "),r.Nb(),r.Nb(),r.Ob(7,"div",11),r.Kb(8,"img",12),r.Nb(),r.Ob(9,"div",13),r.Ob(10,"p"),r.jc(11),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&n){const n=t.$implicit;r.zb(4),r.kc(n.title),r.zb(4),r.bc("src",n.image,r.fc),r.zb(3),r.lc(" ",n.description," ")}}function P(n,t){if(1&n&&(r.Ob(0,"section"),r.Ob(1,"div",1),r.Ob(2,"button",2),r.Kb(3,"i",3),r.Nb(),r.Nb(),r.Ob(4,"div",4),r.hc(5,_,12,3,"div",5),r.Nb(),r.Nb()),2&n){const n=r.Xb();r.zb(5),r.bc("ngForOf",n.interestsData)}}let I=(()=>{class n{constructor(n){this.http=n,this.interestsData=[],this.destroy$=new N.a}ngOnInit(){this.getInterests()}getInterests(){this.http.getInterests().pipe(Object(C.a)(this.destroy$)).subscribe(n=>{var t;this.interestsComplete=n,this.interestsData=n.data,null===(t=this.interestsData)||void 0===t||t.forEach(n=>n.image=`${M.a.API_IMAGE_URL}/${n.image}`)},n=>console.log(n))}}return n.\u0275fac=function(t){return new(t||n)(r.Jb(w.a))},n.\u0275cmp=r.Db({type:n,selectors:[["app-wheel-modal"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,""],["alt","default","data-toggle","modal","data-target","#responsive-modal",1,"right-side-toggle","waves-effect","waves-light","btn-inverse","btn","btn-circle","btn-sm","pull-right","m-l-10","bgc-primary-dark"],[1,"ti-settings","text-white"],["id","responsive-modal","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade",2,"display","none"],["class","modal-dialog",4,"ngFor","ngForOf"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","text-center"],["type","button","data-dismiss","modal","aria-hidden","true",1,"close","btn"],[1,"modal-body"],["alt","",1,"img-responsive",3,"src"],[1,"modal-footer"]],template:function(n,t){1&n&&r.hc(0,P,6,1,"section",0),2&n&&r.bc("ngIf",t.interestsData)},directives:[o.j,o.i],styles:[""]}),n})();var k=e("3Pt+"),y=e("PSD3"),j=e.n(y);function z(n,t){1&n&&(r.Ob(0,"span"),r.jc(1," Este campo es requerido "),r.Nb())}function x(n,t){1&n&&(r.Ob(0,"span"),r.jc(1," Asegurate de que el formato sea v\xe1lido "),r.Nb())}function L(n,t){1&n&&(r.Ob(0,"span"),r.jc(1," Este campo es requerido "),r.Nb())}function E(n,t){1&n&&(r.Ob(0,"span"),r.jc(1," Debe tener al menos 10 caracteres "),r.Nb())}let S=(()=>{class n{constructor(n,t){this.fb=n,this.httpSrv=t,this.formularioContacto=this.fb.group({email:["",[k.k.required,k.k.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],comment:["",[k.k.required,k.k.minLength(10)]]}),this.destroy$=new N.a}ngOnInit(){}send(){this.formularioContacto.markAllAsTouched(),this.formularioContacto.valid&&this.httpSrv.sendContactForm(this.formularioContacto.value).pipe(Object(C.a)(this.destroy$)).subscribe(n=>{j.a.fire("\xa1Gracias!","Recibimos correctamente tu comentario. Te responderemos a la brevedad","success")},()=>{j.a.fire("\xa1Lo sentimos!, Tuvimos un inconveniente inesperado, por favor intent\xe1 de nuevo","error")})}}return n.\u0275fac=function(t){return new(t||n)(r.Jb(k.c),r.Jb(w.a))},n.\u0275cmp=r.Db({type:n,selectors:[["app-footer"]],decls:47,vars:6,consts:[[1,"bgc-primary"],[1,"contact-info"],[1,"primary-dark"],[1,"form-material","m-t-40",3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","email","placeholder","email@dominio.com",1,"form-control","form-control-line"],[4,"ngIf"],["formControlName","comment","rows","5",1,"form-control"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","bgc-primary-dark",3,"disabled"],[1,"logo"],["src","assets/logo.png","alt","","routerLink","/"],[1,"social-icons-container"],["href","https://www.facebook.com/dlnconstrucciones/","target","_blank"],["src","assets/icon-facebook.png","alt","Facebook logo"],["href","https://www.instagram.com/dln_construcciones/","target","_blank"],["src","assets/icon-instagram.png","alt","Instagram logo"],[1,"copyright","m-2"]],template:function(n,t){1&n&&(r.Ob(0,"footer",0),r.Ob(1,"div",1),r.Ob(2,"p"),r.Ob(3,"strong",2),r.jc(4,"\xbfTen\xe9s alguna consulta?"),r.Nb(),r.jc(5," Estamos para asesorarte "),r.Nb(),r.Ob(6,"div"),r.Ob(7,"p"),r.jc(8,"+54 9 2267 531541"),r.Nb(),r.Kb(9,"i"),r.Nb(),r.Ob(10,"div"),r.Ob(11,"p"),r.jc(12,"info@dlnconstrucciones.com.ar"),r.Nb(),r.Kb(13,"i"),r.Nb(),r.Ob(14,"div"),r.Ob(15,"p"),r.jc(16,"Pinamar, Buenos Aires"),r.Nb(),r.Kb(17,"i"),r.Nb(),r.Ob(18,"form",3),r.Vb("ngSubmit",function(){return t.send()}),r.Ob(19,"div",4),r.Ob(20,"label"),r.jc(21,"Email:"),r.Nb(),r.Kb(22,"input",5),r.hc(23,z,2,0,"span",6),r.hc(24,x,2,0,"span",6),r.Nb(),r.Ob(25,"div",4),r.Ob(26,"label"),r.jc(27,"Dejanos tu comentario:"),r.Nb(),r.Kb(28,"textarea",7),r.hc(29,L,2,0,"span",6),r.hc(30,E,2,0,"span",6),r.Nb(),r.Ob(31,"button",8),r.jc(32," Enviar consulta "),r.Nb(),r.Nb(),r.Nb(),r.Ob(33,"div",9),r.Kb(34,"img",10),r.Ob(35,"div",11),r.Ob(36,"a",12),r.Kb(37,"img",13),r.Nb(),r.Ob(38,"a",14),r.Kb(39,"img",15),r.Nb(),r.Nb(),r.Ob(40,"div",16),r.Ob(41,"p"),r.Ob(42,"strong",2),r.jc(43,"@2021 DLN Construcciones"),r.Nb(),r.jc(44," todos los derechos reservados "),r.Nb(),r.Ob(45,"p"),r.jc(46,"Pinamar, provincia de Buenos Aires"),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&n&&(r.zb(18),r.bc("formGroup",t.formularioContacto),r.zb(5),r.bc("ngIf",t.formularioContacto.controls.email.hasError("required")&&t.formularioContacto.controls.email.touched),r.zb(1),r.bc("ngIf",t.formularioContacto.controls.email.hasError("pattern")&&t.formularioContacto.controls.email.touched),r.zb(5),r.bc("ngIf",t.formularioContacto.controls.comment.hasError("required")&&t.formularioContacto.controls.comment.touched),r.zb(1),r.bc("ngIf",t.formularioContacto.controls.comment.hasError("minlength")&&t.formularioContacto.controls.comment.touched),r.zb(1),r.bc("disabled",t.formularioContacto.invalid))},directives:[k.l,k.h,k.e,k.b,k.g,k.d,o.j,i.d],styles:["footer[_ngcontent-%COMP%]{padding:10px;margin-top:10px;display:flex;justify-content:space-around;color:#fff!important}@media (max-width:575px){footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:48%;display:flex;flex-direction:column;align-items:center;justify-content:space-around}@media (max-width:575px){footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%}}footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;cursor:pointer}@media (max-width:450px){footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}}footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .social-icons-container[_ngcontent-%COMP%]{display:flex;justify-content:space-around}footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .social-icons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:10pt}footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .social-icons-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{text-align:center}footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{width:48%}@media (max-width:575px){footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{width:100%}}footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:end}footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2396bd}@keyframes spin{to{transform:rotate(90deg)}}footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end}footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:center}footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}"]}),n})();const A=[{path:"main",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Db({type:n,selectors:[["app-main"]],decls:4,vars:0,template:function(n,t){1&n&&(r.Kb(0,"app-header"),r.Kb(1,"router-outlet"),r.Kb(2,"app-wheel-modal"),r.Kb(3,"app-footer"))},directives:[v,i.g,I,S],styles:[""]}),n})(),children:[{path:"home",loadChildren:()=>e.e(17).then(e.bind(null,"r8tI")).then(n=>n.HomeModule)},{path:"auth",loadChildren:()=>e.e(13).then(e.bind(null,"pbx/")).then(n=>n.AuthModule)},{path:"servicios",loadChildren:()=>Promise.all([e.e(0),e.e(21)]).then(e.bind(null,"JZTM")).then(n=>n.ServiciosModule)},{path:"lotes",loadChildren:()=>Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"r+F7")).then(n=>n.LotesModule)},{path:"trabajos-realizados",loadChildren:()=>Promise.all([e.e(0),e.e(24)]).then(e.bind(null,"wqAm")).then(n=>n.TrabajosRealizadosModule)},{path:"**",redirectTo:"home"}]},{path:"**",redirectTo:"main"}];let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[i.f.forChild(A)],i.f]}),n})();var K=e("bqc1");let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[o.b,K.a,i.f,k.j,K.a]]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[o.b,T,i.f,K.a,R]]}),n})()}}]);