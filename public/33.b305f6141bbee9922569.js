(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{J8fO:function(t,i,e){"use strict";e.r(i),e.d(i,"TipoServicioModule",function(){return O});var n=e("ofXK"),o=e("tyNb"),c=e("XNiG"),r=e("AytR"),s=e("1G5W"),a=e("ZLyn"),p=e("fXoL"),u=e("N+K7"),d=e("TuUY");function b(t,i){if(1&t&&(p.Pb(0,"h3",6),p.mc(1),p.Ob()),2&t){const t=p.Yb().$implicit;p.zb(1),p.nc(t.subtitle)}}function l(t,i){if(1&t&&(p.Pb(0,"p"),p.mc(1),p.Ob()),2&t){const t=p.Yb().$implicit;p.zb(1),p.nc(t.text)}}function v(t,i){if(1&t&&(p.Pb(0,"div",4),p.kc(1,b,2,1,"h3",5),p.kc(2,l,2,1,"p",2),p.Ob()),2&t){const t=i.$implicit;p.zb(1),p.dc("ngIf",t.subtitle),p.zb(1),p.dc("ngIf",t.text)}}function f(t,i){if(1&t&&(p.Nb(0),p.kc(1,v,3,2,"div",3),p.Mb()),2&t){const t=p.Yb();p.zb(1),p.dc("ngForOf",t.tipoServicioContents)}}function h(t,i){if(1&t&&(p.Nb(0),p.Pb(1,"p",7),p.mc(2,"Cheque\xe1 nuestra galer\xeda de piscinas realizadas:"),p.Ob(),p.Lb(3,"app-presentation-card",8),p.Mb()),2&t){const t=p.Yb();p.zb(3),p.dc("presentationCard",t.picturesToPresent)}}const m=[{path:"",component:(()=>{class t{constructor(t,i){this.httpService=t,this.activeRoute=i,this.picturesToPresent=[],this.destroy$=new c.a}ngOnInit(){this.getTypeOfService()}getTypeOfService(){this.httpService.getOneService(this.activeRoute.snapshot.params.servicioId).pipe(Object(s.a)(this.destroy$)).subscribe(t=>{var i,e,n;t.meta.status.toString().includes("20")?(this.tipoServicioComplete=t,this.tipoServicio=null==t?void 0:t.data,this.tipoServicioContents=null===(i=null==t?void 0:t.data)||void 0===i?void 0:i.Contents,this.tipoServicioPictures=null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.Pictures,null===(n=this.tipoServicioPictures)||void 0===n||n.forEach(t=>{t.picture=`${r.a.API_IMAGE_URL}/${t.picture}`}),this.mapServicesToPresent()):Object(a.e)(t)},t=>Object(a.d)(t))}mapServicesToPresent(){var t;null===(t=this.tipoServicioPictures)||void 0===t||t.forEach(t=>{this.picturesToPresent.push({urlFoto:t.picture,openModal:!0})})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(p.Kb(u.a),p.Kb(o.a))},t.\u0275cmp=p.Eb({type:t,selectors:[["app-tipo-servicio"]],decls:6,vars:3,consts:[[1,"main-tipo-servicio","animate__animated","animate__fadeIn","animate__slow"],[1,"primary-dark","text-center"],[4,"ngIf"],["class","description",4,"ngFor","ngForOf"],[1,"description"],["class","primary",4,"ngIf"],[1,"primary"],[1,"primary","text-center"],[3,"presentationCard"]],template:function(t,i){1&t&&(p.Pb(0,"div",0),p.Pb(1,"h1",1),p.mc(2),p.Ob(),p.Lb(3,"hr"),p.kc(4,f,2,1,"ng-container",2),p.kc(5,h,4,1,"ng-container",2),p.Ob()),2&t&&(p.zb(2),p.nc(null==i.tipoServicio?null:i.tipoServicio.title),p.zb(2),p.dc("ngIf",i.tipoServicioContents),p.zb(1),p.dc("ngIf",null==i.tipoServicioPictures?null:i.tipoServicioPictures.length))},directives:[n.m,n.l,d.a],styles:[".main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{padding:8px 16px}.main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .main-tipo-servicio[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.main-tipo-servicio[_ngcontent-%COMP%]   gallery[_ngcontent-%COMP%]{width:100%;background-color:inherit;border-radius:24px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({imports:[[o.f.forChild(m)],o.f]}),t})();var P=e("bqc1");let O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({imports:[[n.c,g,P.a]]}),t})()}}]);