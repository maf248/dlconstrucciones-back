(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"5OOt":function(t,e,o){"use strict";o.r(e),o.d(e,"LoteModule",function(){return m});var i=o("ofXK"),s=o("tyNb"),a=o("XNiG"),n=o("1G5W"),r=o("AytR"),l=o("PSD3"),d=o.n(l),c=o("fXoL"),u=o("N+K7"),h=o("TuUY");const p=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.httpService=e,this.lotesToPresent=[],this.localidadID="",this.lotes=[],this.destroy$=new a.a,this.getDataFromRoute()}ngOnInit(){this.subscribeToLotes()}subscribeToLotes(){this.httpService.getLotes(this.localidadID).pipe(Object(n.a)(this.destroy$)).subscribe(t=>{var e,o;this.lotes=null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.Batches,null===(o=this.lotes)||void 0===o||o.forEach(t=>{t.url=`/main/lotes/${t.categories_id}/detalle/${t.id}`,t.image=`${r.a.API_IMAGE_URL}/${t.image}`}),this.mapLotesToPresent(),this.checkLotesLength()},t=>{d.a.fire("\xa1Lo sentimos!","No pudimos cargar la informaci\xf3n, prob\xe1 recargando la p\xe1gina. Si el problema persiste contactate con el adminitrador","error")})}checkLotesLength(){var t;(null===(t=this.lotes)||void 0===t?void 0:t.length)||this.router.navigateByUrl("/lotes")}getDataFromRoute(){var t,e,o;this.localidadID=null===(o=null===(e=null===(t=this.router.getCurrentNavigation())||void 0===t?void 0:t.extras)||void 0===e?void 0:e.state)||void 0===o?void 0:o.data}mapLotesToPresent(){var t;null===(t=this.lotes)||void 0===t||t.forEach(t=>{this.lotesToPresent.push({titulo:t.title,urlFoto:t.image,ruta:t.url,descripcion:t.description,sendDataByRoute:!1,vendido:t.sold})})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(s.c),c.Kb(u.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-lote"]],decls:2,vars:1,consts:[[1,"lote-container","animate__animated","animate__fadeIn","animate__slow"],[3,"presentationCard"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.Lb(1,"app-presentation-card",1),c.Ob()),2&t&&(c.zb(1),c.dc("presentationCard",e.lotesToPresent))},directives:[h.a],styles:[""]}),t})()},{path:"detalle/:lote_id",loadChildren:()=>o.e(22).then(o.bind(null,"gPlH")).then(t=>t.DetalleLoteModule)}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({imports:[[s.f.forChild(p)],s.f]}),t})();var v=o("bqc1");let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({imports:[[i.b,b,v.a]]}),t})()}}]);