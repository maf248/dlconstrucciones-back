(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tipo-servicio-tipo-servicio-module~tipo-trabajo-tipo-trabajo-module"],{

/***/ "4Pm/":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-gallery/__ivy_ngcc__/fesm2015/ng-gallery.js ***!
  \*********************************************************************/
/*! exports provided: CounterPosition, DotsPosition, GALLERY_CONFIG, Gallery, GalleryAction, GalleryComponent, GalleryIframeComponent, GalleryImageComponent, GalleryItemType, GalleryModule, GalleryRef, GalleryVideoComponent, IframeItem, ImageItem, ImageLoaderMode, ImageSize, LoadingStrategy, SlidingDirection, ThumbnailsMode, ThumbnailsPosition, VideoItem, YoutubeItem, ɵ0, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterPosition", function() { return CounterPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsPosition", function() { return DotsPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALLERY_CONFIG", function() { return GALLERY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryAction", function() { return GalleryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryIframeComponent", function() { return GalleryIframeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImageComponent", function() { return GalleryImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryItemType", function() { return GalleryItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRef", function() { return GalleryRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryVideoComponent", function() { return GalleryVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeItem", function() { return IframeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItem", function() { return ImageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderMode", function() { return ImageLoaderMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSize", function() { return ImageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingStrategy", function() { return LoadingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingDirection", function() { return SlidingDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsMode", function() { return ThumbnailsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsPosition", function() { return ThumbnailsPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItem", function() { return VideoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeItem", function() { return YoutubeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GalleryNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GalleryDotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return GalleryCoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GallerySliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GalleryCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GalleryThumbsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GalleryThumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GalleryItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return LazyImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return TapClick; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = ["*"];
const _c1 = ["iframe"];
function GalleryImageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r0.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
} }
function GalleryImageComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.errorTemplate, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function GalleryImageComponent_div_3_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u26A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GalleryImageComponent_div_3_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u26A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Unable to load the image!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GalleryImageComponent_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryImageComponent_div_3_ng_template_2_ng_container_0_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryImageComponent_div_3_ng_template_2_ng_template_1_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isThumbnail)("ngIfElse", _r7);
} }
function GalleryImageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryImageComponent_div_3_div_1_Template, 1, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryImageComponent_div_3_ng_template_2_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.errorTemplate)("ngIfElse", _r4);
} }
function GalleryImageComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r9.loaderTemplate, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function GalleryImageComponent_ng_container_4_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function GalleryImageComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryImageComponent_ng_container_4_ng_template_2_div_0_Template, 1, 0, "div", 14);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isThumbnail);
} }
function GalleryImageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryImageComponent_ng_container_4_div_1_Template, 1, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryImageComponent_ng_container_4_ng_template_2_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loaderTemplate)("ngIfElse", _r10);
} }
const _c2 = ["video"];
function GalleryVideoComponent_source_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 3);
} if (rf & 2) {
    const src_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r2 == null ? null : src_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("type", src_r2 == null ? null : src_r2.type);
} }
function GalleryNavComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapClick", function GalleryNavComponent_i_0_Template_i_tapClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.action.emit("prev"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.navIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function GalleryNavComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapClick", function GalleryNavComponent_i_1_Template_i_tapClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.action.emit("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.navIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function GalleryCoreComponent_gallery_thumbs_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-thumbs", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.action.emit($event); })("thumbClick", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_thumbClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.thumbClick.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.state)("config", ctx_r0.config);
} }
function GalleryCoreComponent_gallery_nav_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function GalleryCoreComponent_gallery_nav_3_Template_gallery_nav_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.action.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r1.state)("config", ctx_r1.config);
} }
function GalleryCoreComponent_gallery_dots_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-dots", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function GalleryCoreComponent_gallery_dots_4_Template_gallery_dots_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.action.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r2.state)("config", ctx_r2.config);
} }
function GalleryCoreComponent_gallery_counter_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gallery-counter", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r3.state);
} }
function GalleryDotsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapClick", function GalleryDotsComponent_div_0_Template_div_tapClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.action.emit(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.config == null ? null : ctx_r0.config.dotsSize, "px")("height", ctx_r0.config == null ? null : ctx_r0.config.dotsSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("g-dot-active", i_r2 === ctx_r0.state.currIndex);
} }
function GalleryThumbsComponent_div_0_gallery_thumb_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-thumb", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapClick", function GalleryThumbsComponent_div_0_gallery_thumb_2_Template_gallery_thumb_tapClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.thumbClick.emit(i_r4); })("error", function GalleryThumbsComponent_div_0_gallery_thumb_2_Template_gallery_thumb_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.error.emit({ itemIndex: i_r4, error: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", item_r3.type)("config", ctx_r2.config)("data", item_r3.data)("currIndex", ctx_r2.state.currIndex)("index", i_r4)("tapClickDisabled", ctx_r2.config.disableThumb);
} }
function GalleryThumbsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryThumbsComponent_div_0_gallery_thumb_2_Template, 1, 6, "gallery-thumb", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sliderState_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("g-no-transition", sliderState_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", sliderState_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.state.items);
} }
function GallerySliderComponent_div_0_gallery_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapClick", function GallerySliderComponent_div_0_gallery_item_2_Template_gallery_item_tapClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.itemClick.emit(i_r4); })("error", function GallerySliderComponent_div_0_gallery_item_2_Template_gallery_item_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.error.emit({ itemIndex: i_r4, error: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", item_r3.type)("config", ctx_r2.config)("data", item_r3.data)("currIndex", ctx_r2.state.currIndex)("index", i_r4);
} }
function GallerySliderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GallerySliderComponent_div_0_gallery_item_2_Template, 1, 5, "gallery-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sliderState_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.zoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("g-no-transition", sliderState_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", sliderState_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.state.items);
} }
function GalleryItemComponent_ng_container_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c3 = function (a0, a1, a2, a3) { return { index: a0, currIndex: a1, type: a2, data: a3 }; };
function GalleryItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gallery-image", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function GalleryItemComponent_ng_container_0_ng_container_1_Template_gallery_image_error_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.error.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryItemComponent_ng_container_0_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.data.src)("loadingIcon", ctx_r1.config.loadingIcon)("loadingError", ctx_r1.config.loadingError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.config.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](5, _c3, ctx_r1.index, ctx_r1.currIndex, ctx_r1.type, ctx_r1.data));
} }
function GalleryItemComponent_ng_container_0_gallery_video_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-video", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function GalleryItemComponent_ng_container_0_gallery_video_2_Template_gallery_video_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.error.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.data.src)("poster", ctx_r2.data.poster)("controls", ctx_r2.data.controls)("play", ctx_r2.isAutoPlay)("pause", ctx_r2.currIndex !== ctx_r2.index);
} }
function GalleryItemComponent_ng_container_0_gallery_iframe_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gallery-iframe", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.youtubeSrc)("autoplay", ctx_r3.isAutoPlay)("pause", ctx_r3.currIndex !== ctx_r3.index);
} }
function GalleryItemComponent_ng_container_0_gallery_iframe_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gallery-iframe", 12);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.data.src);
} }
function GalleryItemComponent_ng_container_0_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function GalleryItemComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryItemComponent_ng_container_0_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.config.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c3, ctx_r5.index, ctx_r5.currIndex, ctx_r5.type, ctx_r5.data));
} }
function GalleryItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryItemComponent_ng_container_0_ng_container_1_Template, 4, 10, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryItemComponent_ng_container_0_gallery_video_2_Template, 1, 5, "gallery-video", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryItemComponent_ng_container_0_gallery_iframe_3_Template, 1, 3, "gallery-iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleryItemComponent_ng_container_0_gallery_iframe_4_Template, 1, 1, "gallery-iframe", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryItemComponent_ng_container_0_ng_container_5_Template, 3, 7, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Types.Image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Types.Video);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Types.Youtube);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.Types.Iframe);
} }
function GalleryThumbComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c4 = function (a0, a1, a2) { return { index: a0, type: a1, data: a2 }; };
function GalleryThumbComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryThumbComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.config.thumbTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c4, ctx_r0.index, ctx_r0.type, ctx_r0.data));
} }
var GalleryAction;
(function (GalleryAction) {
    GalleryAction["INITIALIZED"] = "initialized";
    GalleryAction["ITEMS_CHANGED"] = "itemsChanged";
    GalleryAction["INDEX_CHANGED"] = "indexChanged";
    GalleryAction["PLAY"] = "play";
    GalleryAction["STOP"] = "stop";
})(GalleryAction || (GalleryAction = {}));
var ImageSize;
(function (ImageSize) {
    ImageSize["Cover"] = "cover";
    ImageSize["Contain"] = "contain";
})(ImageSize || (ImageSize = {}));
var LoadingStrategy;
(function (LoadingStrategy) {
    LoadingStrategy["Preload"] = "preload";
    LoadingStrategy["Lazy"] = "lazy";
    LoadingStrategy["Default"] = "default";
})(LoadingStrategy || (LoadingStrategy = {}));
var ThumbnailsPosition;
(function (ThumbnailsPosition) {
    ThumbnailsPosition["Top"] = "top";
    ThumbnailsPosition["Left"] = "left";
    ThumbnailsPosition["Right"] = "right";
    ThumbnailsPosition["Bottom"] = "bottom";
})(ThumbnailsPosition || (ThumbnailsPosition = {}));
var ImageLoaderMode;
(function (ImageLoaderMode) {
    ImageLoaderMode["Determinate"] = "determinate";
    ImageLoaderMode["Indeterminate"] = "indeterminate";
})(ImageLoaderMode || (ImageLoaderMode = {}));
var DotsPosition;
(function (DotsPosition) {
    DotsPosition["Top"] = "top";
    DotsPosition["Bottom"] = "bottom";
})(DotsPosition || (DotsPosition = {}));
var CounterPosition;
(function (CounterPosition) {
    CounterPosition["Top"] = "top";
    CounterPosition["Bottom"] = "bottom";
})(CounterPosition || (CounterPosition = {}));
var ThumbnailsMode;
(function (ThumbnailsMode) {
    ThumbnailsMode["Free"] = "free";
    ThumbnailsMode["Strict"] = "strict";
})(ThumbnailsMode || (ThumbnailsMode = {}));
var SlidingDirection;
(function (SlidingDirection) {
    SlidingDirection["Horizontal"] = "horizontal";
    SlidingDirection["Vertical"] = "vertical";
})(SlidingDirection || (SlidingDirection = {}));
var GalleryItemType;
(function (GalleryItemType) {
    GalleryItemType["Image"] = "image";
    GalleryItemType["Video"] = "video";
    GalleryItemType["Youtube"] = "youtube";
    GalleryItemType["Iframe"] = "iframe";
})(GalleryItemType || (GalleryItemType = {}));

/** Initial state */
const defaultState = {
    action: GalleryAction.INITIALIZED,
    isPlaying: false,
    hasNext: false,
    hasPrev: false,
    currIndex: 0,
    items: []
};
const defaultConfig = {
    nav: true,
    loop: true,
    zoomOut: 0,
    dots: false,
    thumb: true,
    dotsSize: 30,
    counter: true,
    gestures: true,
    autoPlay: false,
    thumbWidth: 120,
    thumbHeight: 90,
    panSensitivity: 25,
    disableThumb: false,
    playerInterval: 3000,
    imageSize: ImageSize.Contain,
    thumbMode: ThumbnailsMode.Strict,
    dotsPosition: DotsPosition.Bottom,
    counterPosition: CounterPosition.Top,
    thumbPosition: ThumbnailsPosition.Bottom,
    loadingStrategy: LoadingStrategy.Default,
    slidingDirection: SlidingDirection.Horizontal,
    navIcon: `<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 240.823 240.823" version="1.1" viewBox="0 0 240.823 240.823" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z" fill="#fff"/></svg>`,
    loadingIcon: `<?xml version="1.0" encoding="UTF-8"?><svg stroke="#fff" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>`
};

class ImageItem {
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Image;
    }
}
class VideoItem {
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Video;
    }
}
class IframeItem {
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Iframe;
    }
}
class YoutubeItem {
    constructor(data) {
        this.data = Object.assign(Object.assign({}, data), {
            src: `https://youtube.com/embed/${data.src}`,
            thumb: data.thumb ? data.thumb : `//img.youtube.com/vi/${data.src}/default.jpg`
        });
        this.type = GalleryItemType.Youtube;
    }
}

const filterActions = (actions) => {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((state) => actions.indexOf(state.action) > -1);
};
const ɵ0 = filterActions;
class GalleryRef {
    constructor(config, deleteInstance) {
        this.deleteInstance = deleteInstance;
        /** Stream that emits on item click */
        this.itemClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** Stream that emits on thumbnail click */
        this.thumbClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** Stream that emits on an error occurs */
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](defaultState);
        this._config = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](config);
        this.state = this._state.asObservable();
        this.config = this._config.asObservable();
    }
    /** Stream that emits when gallery is initialized/reset */
    get initialized() {
        return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
    }
    /** Stream that emits when items is changed (items loaded, item added, item removed) */
    get itemsChanged() {
        return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
    }
    /** Stream that emits when current item is changed */
    get indexChanged() {
        return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
    }
    /** Stream that emits when the player should start or stop */
    get playingChanged() {
        return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
    }
    /** Stream that emits when the player should start or stop */
    get playerActions() {
        return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
    }
    /**
     * Activate player actions listener
     */
    activatePlayer() {
        return this.playerActions.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((e) => e.isPlaying ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this._config.value.playerInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.next())) : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]));
    }
    /**
     * Set gallery state
     */
    setState(state) {
        this._state.next(Object.assign(Object.assign({}, this._state.value), state));
    }
    /**
     * Set gallery config
     */
    setConfig(config) {
        this._config.next(Object.assign(Object.assign({}, this._config.value), config));
    }
    /**
     * Add gallery item
     */
    add(item, active) {
        const items = [...this._state.value.items, item];
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this._state.value.currIndex
        });
    }
    /**
     * Add image item
     */
    addImage(data, active) {
        this.add(new ImageItem(data), active);
    }
    /**
     * Add video item
     */
    addVideo(data, active) {
        this.add(new VideoItem(data), active);
    }
    /**
     * Add iframe item
     */
    addIframe(data, active) {
        this.add(new IframeItem(data), active);
    }
    /**
     * Add youtube item
     */
    addYoutube(data, active) {
        this.add(new YoutubeItem(data), active);
    }
    /**
     * Remove gallery item
     */
    remove(i) {
        const items = [
            ...this._state.value.items.slice(0, i),
            ...this._state.value.items.slice(i + 1, this._state.value.items.length)
        ];
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    }
    /**
     * Load items and reset the state
     */
    load(items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    }
    /**
     * Set active item
     */
    set(i) {
        if (i !== this._state.value.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this._state.value.items.length - 1,
                hasPrev: i > 0
            });
        }
    }
    /**
     * Next item
     */
    next() {
        if (this._state.value.hasNext) {
            this.set(this._state.value.currIndex + 1);
        }
        else if (this._config.value.loop) {
            this.set(0);
        }
    }
    /**
     * Prev item
     */
    prev() {
        if (this._state.value.hasPrev) {
            this.set(this._state.value.currIndex - 1);
        }
        else if (this._config.value.loop) {
            this.set(this._state.value.items.length - 1);
        }
    }
    /**
     * Start gallery player
     */
    play(interval) {
        if (interval) {
            this.setConfig({ playerInterval: interval });
        }
        this.setState({ action: GalleryAction.PLAY, isPlaying: true });
    }
    /**
     * Stop gallery player
     */
    stop() {
        this.setState({ action: GalleryAction.STOP, isPlaying: false });
    }
    /**
     * Reset gallery to initial state
     */
    reset() {
        this.setState(defaultState);
    }
    /**
     * Destroy gallery
     */
    destroy() {
        this._state.complete();
        this._config.complete();
        this.itemClick.complete();
        this.thumbClick.complete();
        this.deleteInstance();
    }
}

const GALLERY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GALLERY_CONFIG');

class Gallery {
    constructor(config) {
        /** Store gallery instances */
        this._instances = new Map();
        this.config = config ? Object.assign(Object.assign({}, defaultConfig), config) : defaultConfig;
    }
    /**
     * Get or create gallery by ID
     * @param id
     * @param config
     */
    ref(id = 'root', config) {
        if (this._instances.has(id)) {
            const galleryRef = this._instances.get(id);
            if (config) {
                galleryRef.setConfig(Object.assign(Object.assign({}, this.config), config));
            }
            return galleryRef;
        }
        else {
            return this._instances.set(id, new GalleryRef(Object.assign(Object.assign({}, this.config), config), this.deleteInstance(id))).get(id);
        }
    }
    /**
     * Destroy all gallery instances
     */
    destroyAll() {
        this._instances.forEach((ref) => ref.destroy());
    }
    /**
     * Reset all gallery instances
     */
    resetAll() {
        this._instances.forEach((ref) => ref.reset());
    }
    /**
     * A destroyer function for each gallery instance
     */
    deleteInstance(id) {
        return () => {
            if (this._instances.has(id)) {
                this._instances.delete(id);
            }
        };
    }
}
Gallery.ɵfac = function Gallery_Factory(t) { return new (t || Gallery)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GALLERY_CONFIG, 8)); };
Gallery.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Gallery_Factory() { return new Gallery(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
Gallery.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [GALLERY_CONFIG,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Gallery, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [GALLERY_CONFIG]
            }] }]; }, null); })();

class GalleryComponent {
    constructor(_gallery) {
        this._gallery = _gallery;
        this.nav = this._gallery.config.nav;
        this.dots = this._gallery.config.dots;
        this.loop = this._gallery.config.loop;
        this.thumb = this._gallery.config.thumb;
        this.zoomOut = this._gallery.config.zoomOut;
        this.counter = this._gallery.config.counter;
        this.dotsSize = this._gallery.config.dotsSize;
        this.autoPlay = this._gallery.config.autoPlay;
        this.gestures = this._gallery.config.gestures;
        this.thumbWidth = this._gallery.config.thumbWidth;
        this.thumbHeight = this._gallery.config.thumbHeight;
        this.disableThumb = this._gallery.config.disableThumb;
        this.panSensitivity = this._gallery.config.panSensitivity;
        this.playerInterval = this._gallery.config.playerInterval;
        this.itemTemplate = this._gallery.config.itemTemplate;
        this.thumbTemplate = this._gallery.config.thumbTemplate;
        this.thumbMode = this._gallery.config.thumbMode;
        this.imageSize = this._gallery.config.imageSize;
        this.dotsPosition = this._gallery.config.dotsPosition;
        this.counterPosition = this._gallery.config.counterPosition;
        this.slidingDirection = this._gallery.config.slidingDirection;
        this.loadingStrategy = this._gallery.config.loadingStrategy;
        this.thumbPosition = this._gallery.config.thumbPosition;
        // Inputs used by the lightbox
        /** Destroy gallery ref on component destroy event */
        this.destroyRef = true;
        /** Skip initializing the config with components inputs (Lightbox mode) */
        this.skipInitConfig = false;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._itemClick$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this._thumbClick$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this._itemChange$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this._indexChange$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this._playingChange$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this._playerListener$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
    }
    getConfig() {
        return {
            nav: this.nav,
            dots: this.dots,
            loop: this.loop,
            thumb: this.thumb,
            zoomOut: this.zoomOut,
            counter: this.counter,
            autoPlay: this.autoPlay,
            gestures: this.gestures,
            dotsSize: this.dotsSize,
            imageSize: this.imageSize,
            thumbMode: this.thumbMode,
            thumbWidth: this.thumbWidth,
            thumbHeight: this.thumbHeight,
            disableThumb: this.disableThumb,
            dotsPosition: this.dotsPosition,
            itemTemplate: this.itemTemplate,
            thumbTemplate: this.thumbTemplate,
            thumbPosition: this.thumbPosition,
            panSensitivity: this.panSensitivity,
            playerInterval: this.playerInterval,
            counterPosition: this.counterPosition,
            loadingStrategy: this.loadingStrategy,
            slidingDirection: this.slidingDirection
        };
    }
    onAction(i) {
        switch (i) {
            case 'next':
                this.galleryRef.next();
                break;
            case 'prev':
                this.galleryRef.prev();
                break;
            default:
                this.galleryRef.set(i);
        }
    }
    ngOnChanges(changes) {
        if (this.galleryRef) {
            this.galleryRef.setConfig(this.getConfig());
            if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
                this.load(this.items);
            }
        }
    }
    ngOnInit() {
        // Get gallery instance by id
        if (this.skipInitConfig) {
            this.galleryRef = this._gallery.ref(this.id);
        }
        else {
            this.galleryRef = this._gallery.ref(this.id, this.getConfig());
        }
        // Load gallery items
        this.load(this.items);
        // Activate player listener
        this._playerListener$ = this.galleryRef.activatePlayer().subscribe();
        // Subscribes to events on demand
        if (this.indexChange.observers.length) {
            this._indexChange$ = this.galleryRef.indexChanged.subscribe((state) => this.indexChange.emit(state));
        }
        if (this.itemsChange.observers.length) {
            this._itemChange$ = this.galleryRef.itemsChanged.subscribe((state) => this.itemsChange.emit(state));
        }
        if (this.playingChange.observers.length) {
            this._playingChange$ = this.galleryRef.playingChanged.subscribe((state) => this.playingChange.emit(state));
        }
        // Start playing if auto-play is set to true
        if (this.autoPlay) {
            this.play();
        }
    }
    ngOnDestroy() {
        this._itemClick$.unsubscribe();
        this._thumbClick$.unsubscribe();
        this._itemChange$.unsubscribe();
        this._indexChange$.unsubscribe();
        this._playingChange$.unsubscribe();
        this._playerListener$.unsubscribe();
        if (this.destroyRef) {
            this.galleryRef.destroy();
        }
    }
    onItemClick(i) {
        this.itemClick.emit(i);
        this.galleryRef.itemClick.next(i);
    }
    onThumbClick(i) {
        this.galleryRef.set(i);
        this.thumbClick.emit(i);
        this.galleryRef.thumbClick.next(i);
    }
    onError(err) {
        this.error.emit(err);
        this.galleryRef.error.next(err);
    }
    load(items) {
        this.galleryRef.load(items);
    }
    add(item, active) {
        this.galleryRef.add(item, active);
    }
    addImage(data, active) {
        this.add(new ImageItem(data), active);
    }
    addVideo(data, active) {
        this.add(new VideoItem(data), active);
    }
    addIframe(data, active) {
        this.add(new IframeItem(data), active);
    }
    addYoutube(data, active) {
        this.add(new YoutubeItem(data), active);
    }
    remove(i) {
        this.galleryRef.remove(i);
    }
    next() {
        this.galleryRef.next();
    }
    prev() {
        this.galleryRef.prev();
    }
    set(i) {
        this.galleryRef.set(i);
    }
    reset() {
        this.galleryRef.reset();
    }
    play(interval) {
        this.galleryRef.play(interval);
    }
    stop() {
        this.galleryRef.stop();
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Gallery)); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["gallery"]], inputs: { nav: "nav", dots: "dots", loop: "loop", thumb: "thumb", zoomOut: "zoomOut", counter: "counter", dotsSize: "dotsSize", autoPlay: "autoPlay", gestures: "gestures", thumbWidth: "thumbWidth", thumbHeight: "thumbHeight", disableThumb: "disableThumb", panSensitivity: "panSensitivity", playerInterval: "playerInterval", itemTemplate: "itemTemplate", thumbTemplate: "thumbTemplate", thumbMode: "thumbMode", imageSize: "imageSize", dotsPosition: "dotsPosition", counterPosition: "counterPosition", slidingDirection: "slidingDirection", loadingStrategy: "loadingStrategy", thumbPosition: "thumbPosition", destroyRef: "destroyRef", skipInitConfig: "skipInitConfig", id: "id", items: "items" }, outputs: { itemClick: "itemClick", thumbClick: "thumbClick", playingChange: "playingChange", indexChange: "indexChange", itemsChange: "itemsChange", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 4, vars: 6, consts: [[3, "state", "config", "action", "itemClick", "thumbClick", "error"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-core", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function GalleryComponent_Template_gallery_core_action_0_listener($event) { return ctx.onAction($event); })("itemClick", function GalleryComponent_Template_gallery_core_itemClick_0_listener($event) { return ctx.onItemClick($event); })("thumbClick", function GalleryComponent_Template_gallery_core_thumbClick_0_listener($event) { return ctx.onThumbClick($event); })("error", function GalleryComponent_Template_gallery_core_error_0_listener($event) { return ctx.onError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.galleryRef.state))("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.galleryRef.config));
    } }, directives: function () { return [GalleryCoreComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]]; }, styles: ["gallery-core[dotsPosition=top] gallery-dots{top:0}  gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}  gallery-dots{left:50%;margin:7px;position:absolute;transform:translateX(-50%)}  .g-dot{cursor:pointer;z-index:20}  .g-dot:hover .g-dot-inner{opacity:1}  .g-dot-active .g-dot-inner{opacity:1;transform:scale(1.5)!important}  .g-dot-inner{background-color:#fff;border-radius:50%;box-shadow:0 0 1px #000;height:30%;opacity:.6;transition:all .2s ease;width:30%}  .g-dot,   .g-dot-inner,   gallery-dots{align-items:center;display:flex;justify-content:center}  .g-nav-next,   .g-nav-prev{cursor:pointer;height:40px;position:absolute;top:50%;width:30px;z-index:999}  .g-nav-next{right:.5em;transform:translateY(-50%) perspective(1px)}  .g-nav-prev{left:.5em;transform:translateY(-50%) perspective(1px) scale(-1)}@media only screen and (max-width:480px){  .g-nav-next{right:.2em}  .g-nav-prev{left:.2em}}  .g-items-container{height:100%}  .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1)}  gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}  gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}  gallery-thumbs{display:block;overflow:unset;z-index:1}  .g-thumbs-container{display:flex;height:100%;left:0;overflow:unset;position:relative;top:0;width:100%;z-index:206}  gallery-core[disableThumb=true] gallery-thumb{cursor:default}  gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,   gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;left:50%;top:0}  gallery-core[thumbPosition=bottom] gallery-thumb,   gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}  gallery-core[thumbPosition=left] gallery-thumbs .g-slider,   gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;left:0;top:50%}  gallery-core[thumbPosition=left] gallery-thumb,   gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}  gallery-core[thumbPosition=top]{flex-direction:column}  gallery-core[thumbPosition=left]{flex-direction:row}  gallery-core[thumbPosition=right]{flex-direction:row-reverse}  gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}  gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}  .g-thumb-loading{background-color:#262626;height:100%;overflow:hidden;position:relative}  .g-thumb-loading:before{-webkit-animation:phAnimation .8s linear infinite;animation:phAnimation .8s linear infinite;background:linear-gradient(90deg,hsla(0,0%,100%,0) 46%,hsla(0,0%,100%,.35) 50%,hsla(0,0%,100%,0) 54%) 50% 50%;bottom:0;content:\"\";left:50%;margin-left:-250%;position:absolute;right:0;top:0;width:500%;z-index:1}@-webkit-keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}  gallery-core[counterPosition=top] .g-counter{border-bottom-left-radius:4px;border-bottom-right-radius:4px;top:0}  gallery-core[counterPosition=bottom] .g-counter{border-top-left-radius:4px;border-top-right-radius:4px;bottom:0}  .g-counter{background-color:rgba(0,0,0,.5);color:#fff;font-size:12px;left:50%;padding:4px 10px;position:absolute;transform:translateX(-50%) perspective(1px);z-index:50}  gallery[gallerize] gallery-item{cursor:pointer}  gallery-item,   gallery-thumb{display:block;height:100%;overflow:hidden;position:relative;width:100%}  gallery-item h2,   gallery-item h4,   gallery-thumb h2,   gallery-thumb h4{color:coral;margin:0}  gallery-item h2,   gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}  gallery-item h4,   gallery-thumb h4{font-size:1.6em}  gallery-item{z-index:10}  gallery-item iframe,   gallery-item video{height:100%;position:absolute;width:100%}  gallery-thumb{cursor:pointer;opacity:.5;transition:opacity .3s cubic-bezier(.5,0,.5,1)}  gallery-thumb.g-active-thumb{opacity:1}  .g-image-item{background-position:50%;background-repeat:no-repeat;background-size:cover;height:100%;width:100%}  .g-image-error-message,   .g-template{align-items:center;bottom:0;color:#fff;display:flex;flex-direction:column;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:10}  .g-loading{height:80px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:80px}  gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}  gallery-image{align-items:center;display:flex;height:100%;justify-content:center}  gallery{background-color:#000;display:block;height:500px;overflow:hidden;position:relative;z-index:1}  gallery *{box-sizing:border-box}  gallery,   gallery-core{overflow:hidden;position:relative}  .g-box,   .g-slider,   gallery-core{display:flex;height:100%;width:100%}  gallery[fluid]{left:50%;transform:translateX(-50vw);width:100vw}  gallery[fluid][fluid=false]{left:auto;transform:none;width:auto}  .g-no-transition{transition:unset!important}  .g-box,   gallery-slider{display:flex;flex:1;flex-direction:column;height:100%;order:1;overflow:hidden;position:relative}  .g-btn-close svg,   gallery-nav svg{-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px black);height:100%;opacity:.6;transition:opacity .2s linear;width:100%}  .g-btn-close svg:hover,   gallery-nav svg:hover{opacity:1}"], changeDetection: 0 });
GalleryComponent.ctorParameters = () => [
    { type: Gallery }
];
GalleryComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    zoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    counter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dotsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gestures: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumbWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumbHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disableThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    panSensitivity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    playerInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumbTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumbMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dotsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    counterPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slidingDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumbPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    destroyRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    skipInitConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    playingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    indexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <gallery-core [state]="galleryRef.state | async"
                  [config]="galleryRef.config | async"
                  (action)="onAction($event)"
                  (itemClick)="onItemClick($event)"
                  (thumbClick)="onThumbClick($event)"
                  (error)="onError($event)"></gallery-core>
    <ng-content></ng-content>
  `,
                styles: ["::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:0}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}::ng-deep gallery-dots{left:50%;margin:7px;position:absolute;transform:translateX(-50%)}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1;transform:scale(1.5)!important}::ng-deep .g-dot-inner{background-color:#fff;border-radius:50%;box-shadow:0 0 1px #000;height:30%;opacity:.6;transition:all .2s ease;width:30%}::ng-deep .g-dot,::ng-deep .g-dot-inner,::ng-deep gallery-dots{align-items:center;display:flex;justify-content:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{cursor:pointer;height:40px;position:absolute;top:50%;width:30px;z-index:999}::ng-deep .g-nav-next{right:.5em;transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-prev{left:.5em;transform:translateY(-50%) perspective(1px) scale(-1)}@media only screen and (max-width:480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep .g-items-container{height:100%}::ng-deep .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}::ng-deep gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}::ng-deep gallery-thumbs{display:block;overflow:unset;z-index:1}::ng-deep .g-thumbs-container{display:flex;height:100%;left:0;overflow:unset;position:relative;top:0;width:100%;z-index:206}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;left:50%;top:0}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumb,::ng-deep gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;left:0;top:50%}::ng-deep gallery-core[thumbPosition=left] gallery-thumb,::ng-deep gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{background-color:#262626;height:100%;overflow:hidden;position:relative}::ng-deep .g-thumb-loading:before{-webkit-animation:phAnimation .8s linear infinite;animation:phAnimation .8s linear infinite;background:linear-gradient(90deg,hsla(0,0%,100%,0) 46%,hsla(0,0%,100%,.35) 50%,hsla(0,0%,100%,0) 54%) 50% 50%;bottom:0;content:\"\";left:50%;margin-left:-250%;position:absolute;right:0;top:0;width:500%;z-index:1}@-webkit-keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{border-bottom-left-radius:4px;border-bottom-right-radius:4px;top:0}::ng-deep gallery-core[counterPosition=bottom] .g-counter{border-top-left-radius:4px;border-top-right-radius:4px;bottom:0}::ng-deep .g-counter{background-color:rgba(0,0,0,.5);color:#fff;font-size:12px;left:50%;padding:4px 10px;position:absolute;transform:translateX(-50%) perspective(1px);z-index:50}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-item,::ng-deep gallery-thumb{display:block;height:100%;overflow:hidden;position:relative;width:100%}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item{z-index:10}::ng-deep gallery-item iframe,::ng-deep gallery-item video{height:100%;position:absolute;width:100%}::ng-deep gallery-thumb{cursor:pointer;opacity:.5;transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-thumb.g-active-thumb{opacity:1}::ng-deep .g-image-item{background-position:50%;background-repeat:no-repeat;background-size:cover;height:100%;width:100%}::ng-deep .g-image-error-message,::ng-deep .g-template{align-items:center;bottom:0;color:#fff;display:flex;flex-direction:column;justify-content:center;left:0;position:absolute;right:0;top:0;z-index:10}::ng-deep .g-loading{height:80px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:80px}::ng-deep gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}::ng-deep gallery-image{align-items:center;display:flex;height:100%;justify-content:center}::ng-deep gallery{background-color:#000;display:block;height:500px;overflow:hidden;position:relative;z-index:1}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{overflow:hidden;position:relative}::ng-deep .g-box,::ng-deep .g-slider,::ng-deep gallery-core{display:flex;height:100%;width:100%}::ng-deep gallery[fluid]{left:50%;transform:translateX(-50vw);width:100vw}::ng-deep gallery[fluid][fluid=false]{left:auto;transform:none;width:auto}::ng-deep .g-no-transition{transition:unset!important}::ng-deep .g-box,::ng-deep gallery-slider{display:flex;flex:1;flex-direction:column;height:100%;order:1;overflow:hidden;position:relative}::ng-deep .g-btn-close svg,::ng-deep gallery-nav svg{-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px black);height:100%;opacity:.6;transition:opacity .2s linear;width:100%}::ng-deep .g-btn-close svg:hover,::ng-deep gallery-nav svg:hover{opacity:1}"]
            }]
    }], function () { return [{ type: Gallery }]; }, { nav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoomOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], counter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dotsSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gestures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableThumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], panSensitivity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dotsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], counterPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slidingDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], destroyRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], skipInitConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], thumbClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], playingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], indexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryIframeComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    set src(src) {
        this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(src);
    }
    set pauseVideo(shouldPause) {
        if (this.iframe.nativeElement) {
            if (shouldPause) {
                const iframe = this.iframe.nativeElement;
                iframe.src = null;
            }
        }
    }
}
GalleryIframeComponent.ɵfac = function GalleryIframeComponent_Factory(t) { return new (t || GalleryIframeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
GalleryIframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryIframeComponent, selectors: [["gallery-iframe"]], viewQuery: function GalleryIframeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iframe = _t.first);
    } }, inputs: { src: "src", pauseVideo: ["pause", "pauseVideo"], autoplay: "autoplay" }, decls: 2, vars: 2, consts: [["frameborder", "0", "allowfullscreen", "", 3, "src"], ["iframe", ""]], template: function GalleryIframeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iframeSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("allow", ctx.autoplay ? "autoplay" : "");
    } }, encapsulation: 2, changeDetection: 0 });
GalleryIframeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
GalleryIframeComponent.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src',] }],
    pauseVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pause',] }],
    autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    iframe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['iframe', { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryIframeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-iframe',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <iframe #iframe
            frameborder="0"
            allowfullscreen
            [attr.allow]="autoplay ? 'autoplay' : ''"
            [src]="iframeSrc">
    </iframe>
  `
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['src']
        }], pauseVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pause']
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iframe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['iframe', { static: true }]
        }] }); })();

class GalleryImageComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        /** Stream that emits the state */
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('loading');
        this.state = this._state.asObservable();
        /** Progress value */
        this.progress = 0;
        /** Stream that emits when an error occurs */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get imageLoadSuccess() {
        return !!this.imageUrl;
    }
    get imageLoadFailed() {
        return !!this.loadError;
    }
    ngOnInit() {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    }
    ngOnDestroy() {
        this._state.complete();
    }
    onProgress({ loaded, total }) {
        this.progress = loaded * 100 / total;
    }
    onLoaded(blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle(`url("${blobUrl}")`);
        this._state.next('success');
    }
    onError(err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    }
}
GalleryImageComponent.ɵfac = function GalleryImageComponent_Factory(t) { return new (t || GalleryImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
GalleryImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryImageComponent, selectors: [["gallery-image"]], hostVars: 4, hostBindings: function GalleryImageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("g-image-loaded", ctx.imageLoadSuccess)("g-image-error", ctx.imageLoadFailed);
    } }, inputs: { isThumbnail: "isThumbnail", src: "src", loadingIcon: "loadingIcon", loadingError: "loadingError" }, outputs: { error: "error" }, decls: 5, vars: 7, consts: [[3, "lazyImage", "ngSwitch", "progress", "loaded", "error"], ["class", "g-image-item", 3, "backgroundImage", 4, "ngSwitchCase"], ["class", "g-image-error-message", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "g-image-item"], [1, "g-image-error-message"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["defaultError", ""], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["isLarge", ""], ["class", "g-loading", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["defaultLoader", ""], [1, "g-loading", 3, "innerHTML"], ["class", "g-thumb-loading", 4, "ngIf"], [1, "g-thumb-loading"]], template: function GalleryImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("progress", function GalleryImageComponent_Template_ng_container_progress_0_listener($event) { return ctx.onProgress($event); })("loaded", function GalleryImageComponent_Template_ng_container_loaded_0_listener($event) { return ctx.onLoaded($event); })("error", function GalleryImageComponent_Template_ng_container_error_0_listener($event) { return ctx.onError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryImageComponent_div_2_Template, 1, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryImageComponent_div_3_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleryImageComponent_ng_container_4_Template, 4, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyImage", ctx.src)("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx.state));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "loading");
    } }, directives: function () { return [LazyImage, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]]; }, encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
                ])
            ])
        ] }, changeDetection: 0 });
GalleryImageComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
GalleryImageComponent.propDecorators = {
    isThumbnail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    imageLoadSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.g-image-loaded',] }],
    imageLoadFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.g-image-error',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-image',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
                        ])
                    ])
                ],
                template: `
    <ng-container [lazyImage]="src"
                  (progress)="onProgress($event)"
                  (loaded)="onLoaded($event)"
                  (error)="onError($event)"
                  [ngSwitch]="state | async">

      <div *ngSwitchCase="'success'"
           @fadeIn
           class="g-image-item"
           [style.backgroundImage]="imageUrl">
      </div>

      <div *ngSwitchCase="'failed'"
           class="g-image-error-message">
        <div *ngIf="errorTemplate; else defaultError"
             [innerHTML]="errorTemplate"></div>
        <ng-template #defaultError>
          <ng-container *ngIf="isThumbnail; else isLarge">
            <h4>⚠</h4>
          </ng-container>
          <ng-template #isLarge>
            <h2>⚠</h2>
            <p>Unable to load the image!</p>
          </ng-template>
        </ng-template>
      </div>

      <ng-container *ngSwitchCase="'loading'">
        <div *ngIf="loaderTemplate; else defaultLoader"
             class="g-loading"
             [innerHTML]="loaderTemplate">
        </div>
        <ng-template #defaultLoader>
          <div *ngIf="isThumbnail" class="g-thumb-loading"></div>
        </ng-template>
      </ng-container>
    </ng-container>
  `
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imageLoadSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.g-image-loaded']
        }], imageLoadFailed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.g-image-error']
        }], isThumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryVideoComponent {
    constructor() {
        /** Stream that emits when an error occurs */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set pauseVideo(shouldPause) {
        if (this.video.nativeElement) {
            const video = this.video.nativeElement;
            if (shouldPause && !video.paused) {
                video.pause();
            }
        }
    }
    set playVideo(shouldPlay) {
        if (this.video.nativeElement) {
            const video = this.video.nativeElement;
            if (shouldPlay) {
                video.play();
            }
        }
    }
    ngOnInit() {
        if (this.src instanceof Array) {
            // If video has multiple sources
            this.videoSources = [...this.src];
        }
        else {
            this.videoSources = [{ url: this.src }];
        }
        this.controls = typeof this.controlsEnabled === 'boolean' ? this.controlsEnabled : true;
    }
}
GalleryVideoComponent.ɵfac = function GalleryVideoComponent_Factory(t) { return new (t || GalleryVideoComponent)(); };
GalleryVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryVideoComponent, selectors: [["gallery-video"]], viewQuery: function GalleryVideoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, inputs: { pauseVideo: ["pause", "pauseVideo"], playVideo: ["play", "playVideo"], src: "src", poster: "poster", controlsEnabled: ["controls", "controlsEnabled"] }, outputs: { error: "error" }, decls: 3, vars: 3, consts: [[3, "controls", "poster", "error"], ["video", ""], [3, "src", "type", 4, "ngFor", "ngForOf"], [3, "src", "type"]], template: function GalleryVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function GalleryVideoComponent_Template_video_error_0_listener($event) { return ctx.error.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryVideoComponent_source_2_Template, 1, 2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controls", ctx.controls)("poster", ctx.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoSources);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
GalleryVideoComponent.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    poster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    controlsEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['controls',] }],
    pauseVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pause',] }],
    playVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['play',] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['video', { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-video',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <video #video [controls]="controls" [poster]="poster" (error)="error.emit($event)">
      <source *ngFor="let src of videoSources" [src]="src?.url" [type]="src?.type"/>
    </video>
  `
            }]
    }], function () { return []; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pauseVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pause']
        }], playVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['play']
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], poster: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controlsEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['controls']
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video', { static: true }]
        }] }); })();

class GalleryNavComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
    }
}
GalleryNavComponent.ɵfac = function GalleryNavComponent_Factory(t) { return new (t || GalleryNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
GalleryNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryNavComponent, selectors: [["gallery-nav"]], inputs: { state: "state", config: "config" }, outputs: { action: "action" }, decls: 2, vars: 2, consts: [["class", "g-nav-prev", "aria-label", "Previous", 3, "innerHtml", "tapClick", 4, "ngIf"], ["class", "g-nav-next", "aria-label", "Next", 3, "innerHtml", "tapClick", 4, "ngIf"], ["aria-label", "Previous", 1, "g-nav-prev", 3, "innerHtml", "tapClick"], ["aria-label", "Next", 1, "g-nav-next", 3, "innerHtml", "tapClick"]], template: function GalleryNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryNavComponent_i_0_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryNavComponent_i_1_Template, 1, 1, "i", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.loop || ctx.state.hasPrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.loop || ctx.state.hasNext);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], TapClick]; }, encapsulation: 2, changeDetection: 0 });
GalleryNavComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
GalleryNavComponent.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-nav',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <i *ngIf="config.loop || state.hasPrev"
       class="g-nav-prev"
       aria-label="Previous"
       (tapClick)="action.emit('prev')"
       [innerHtml]="navIcon"></i>

    <i *ngIf="config.loop || state.hasNext"
       class="g-nav-next"
       aria-label="Next"
       (tapClick)="action.emit('next')"
       [innerHtml]="navIcon"></i>
  `
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryCoreComponent {
    constructor() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** Set thumbnails position */
    get thumbPosition() {
        return this.config.thumbPosition;
    }
    /** Set sliding direction */
    get slidingDirection() {
        return this.config.slidingDirection;
    }
    /** Disable thumbnails clicks */
    get disableThumb() {
        return this.config.disableThumb;
    }
    /** Set gallery image size */
    get imageSize() {
        return this.config.imageSize;
    }
    /** Set gallery dots position */
    get dotsPosition() {
        return this.config.dotsPosition;
    }
    /** Set gallery counter position */
    get counterPosition() {
        return this.config.counterPosition;
    }
}
GalleryCoreComponent.ɵfac = function GalleryCoreComponent_Factory(t) { return new (t || GalleryCoreComponent)(); };
GalleryCoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryCoreComponent, selectors: [["gallery-core"]], hostVars: 6, hostBindings: function GalleryCoreComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("thumbPosition", ctx.thumbPosition)("slidingDirection", ctx.slidingDirection)("disableThumb", ctx.disableThumb)("imageSize", ctx.imageSize)("dotsPosition", ctx.dotsPosition)("counterPosition", ctx.counterPosition);
    } }, inputs: { state: "state", config: "config" }, outputs: { action: "action", itemClick: "itemClick", thumbClick: "thumbClick", error: "error" }, decls: 6, vars: 6, consts: [[3, "state", "config", "action", "thumbClick", 4, "ngIf"], [1, "g-box"], [3, "state", "config", "action", "itemClick", "error"], [3, "state", "config", "action", 4, "ngIf"], [3, "state", 4, "ngIf"], [3, "state", "config", "action", "thumbClick"], [3, "state", "config", "action"], [3, "state"]], template: function GalleryCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryCoreComponent_gallery_thumbs_0_Template, 1, 2, "gallery-thumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "gallery-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function GalleryCoreComponent_Template_gallery_slider_action_2_listener($event) { return ctx.action.emit($event); })("itemClick", function GalleryCoreComponent_Template_gallery_slider_itemClick_2_listener($event) { return ctx.itemClick.emit($event); })("error", function GalleryCoreComponent_Template_gallery_slider_error_2_listener($event) { return ctx.error.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryCoreComponent_gallery_nav_3_Template, 1, 2, "gallery-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleryCoreComponent_gallery_dots_4_Template, 1, 2, "gallery-dots", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryCoreComponent_gallery_counter_5_Template, 1, 1, "gallery-counter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.thumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.state)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.nav && ctx.state.items.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.dots);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.counter);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], GallerySliderComponent, GalleryThumbsComponent, GalleryNavComponent, GalleryDotsComponent, GalleryCounterComponent]; }, encapsulation: 2, changeDetection: 0 });
GalleryCoreComponent.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    thumbPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.thumbPosition',] }],
    slidingDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.slidingDirection',] }],
    disableThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disableThumb',] }],
    imageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.imageSize',] }],
    dotsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.dotsPosition',] }],
    counterPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.counterPosition',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryCoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-core',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <gallery-thumbs *ngIf="config.thumb"
                    [state]="state"
                    [config]="config"
                    (action)="action.emit($event)"
                    (thumbClick)="thumbClick.emit($event)">
    </gallery-thumbs>
    <div class="g-box">
      <gallery-slider [state]="state"
                      [config]="config"
                      (action)="action.emit($event)"
                      (itemClick)="itemClick.emit($event)"
                      (error)="error.emit($event)">

        <gallery-nav *ngIf="config.nav && state.items.length > 1"
                     [state]="state"
                     [config]="config"
                     (action)="action.emit($event)">
        </gallery-nav>

      </gallery-slider>

      <gallery-dots *ngIf="config.dots"
                    [state]="state"
                    [config]="config"
                    (action)="action.emit($event)">
      </gallery-dots>

      <gallery-counter *ngIf="config.counter"
                       [state]="state">
      </gallery-counter>
    </div>
  `
            }]
    }], function () { return []; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], thumbClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], thumbPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.thumbPosition']
        }], slidingDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.slidingDirection']
        }], disableThumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.disableThumb']
        }], imageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.imageSize']
        }], dotsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.dotsPosition']
        }], counterPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.counterPosition']
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryDotsComponent {
    constructor() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
GalleryDotsComponent.ɵfac = function GalleryDotsComponent_Factory(t) { return new (t || GalleryDotsComponent)(); };
GalleryDotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryDotsComponent, selectors: [["gallery-dots"]], inputs: { state: "state", config: "config" }, outputs: { action: "action" }, decls: 1, vars: 1, consts: [["class", "g-dot", 3, "g-dot-active", "width", "height", "tapClick", 4, "ngFor", "ngForOf"], [1, "g-dot", 3, "tapClick"], [1, "g-dot-inner"]], template: function GalleryDotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryDotsComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.state.items);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], TapClick]; }, encapsulation: 2, changeDetection: 0 });
GalleryDotsComponent.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryDotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-dots',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="g-dot"
         *ngFor="let item of state.items; let i = index"
         [class.g-dot-active]="i === state.currIndex"
         [style.width.px]="config?.dotsSize"
         [style.height.px]="config?.dotsSize"
         (tapClick)="action.emit(i)">
      <div class="g-dot-inner"></div>
    </div>
  `
            }]
    }], function () { return []; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryThumbsComponent {
    constructor(_el, _zone) {
        this._el = _el;
        this._zone = _zone;
        /** Sliding worker */
        this._slidingWorker$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ value: 0, active: false });
        /** Current slider position in free sliding mode */
        this._freeModeCurrentOffset = 0;
        /** Stream that emits when the active item should change */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Stream that emits when thumb is clicked */
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Stream that emits when an error occurs */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => ({
            style: this.getSliderStyles(state),
            active: state.active
        })));
    }
    ngOnChanges() {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
        this._freeModeCurrentOffset = 0;
    }
    ngOnInit() {
        if (this.config.gestures && !this.config.disableThumb && typeof Hammer !== 'undefined') {
            let direction;
            switch (this.config.thumbPosition) {
                case ThumbnailsPosition.Right:
                case ThumbnailsPosition.Left:
                    direction = Hammer.DIRECTION_VERTICAL;
                    break;
                case ThumbnailsPosition.Top:
                case ThumbnailsPosition.Bottom:
                    direction = Hammer.DIRECTION_HORIZONTAL;
                    break;
            }
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction });
            this._zone.runOutsideAngular(() => {
                // Move the slider
                switch (this.config.thumbMode) {
                    case ThumbnailsMode.Strict:
                        this._hammer.on('pan', (e) => this.strictMode(e));
                        break;
                    case ThumbnailsMode.Free:
                        this._hammer.on('pan', (e) => this.freeMode(e));
                }
            });
        }
    }
    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.destroy();
        }
    }
    /**
     * Sliding strict mode
     */
    strictMode(e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: e.deltaY, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.verticalPan(e);
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: e.deltaX, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.horizontalPan(e);
                }
        }
    }
    /**
     * Sliding free mode
     */
    freeMode(e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaY, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaY, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbHeight;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaY, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbHeight;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaY;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaX, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaX, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbWidth;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaX, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbWidth;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaX;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
        }
    }
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     */
    minFreeScrollExceeded(delta, width, height) {
        return -(this._freeModeCurrentOffset + delta - width / 2) > (this.state.items.length - this.state.currIndex) * height;
    }
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     */
    maxFreeScrollExceeded(delta, width, height) {
        return this._freeModeCurrentOffset + delta > (this.state.currIndex * width) + (height / 2);
    }
    /**
     * Convert sliding state to styles
     */
    getSliderStyles(state) {
        let value;
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.width = '100%';
                this.height = this.config.thumbHeight + 'px';
                value = -(this.state.currIndex * this.config.thumbWidth) - (this.config.thumbWidth / 2 - state.value);
                return {
                    transform: `translate3d(${value}px, 0, 0)`,
                    width: this.state.items.length * this.config.thumbWidth + 'px',
                    height: '100%'
                };
            case ThumbnailsPosition.Left:
            case ThumbnailsPosition.Right:
                this.width = this.config.thumbWidth + 'px';
                this.height = '100%';
                value = -(this.state.currIndex * this.config.thumbHeight) - (this.config.thumbHeight / 2 - state.value);
                return {
                    transform: `translate3d(0, ${value}px, 0)`,
                    width: '100%',
                    height: this.state.items.length * this.config.thumbHeight + 'px'
                };
        }
    }
    verticalPan(e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    }
    horizontalPan(e) {
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    }
    next() {
        this.action.emit('next');
    }
    prev() {
        this.action.emit('prev');
    }
    updateSlider(state) {
        const newState = Object.assign(Object.assign({}, this._slidingWorker$.value), state);
        this._slidingWorker$.next(newState);
    }
}
GalleryThumbsComponent.ɵfac = function GalleryThumbsComponent_Factory(t) { return new (t || GalleryThumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
GalleryThumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryThumbsComponent, selectors: [["gallery-thumbs"]], hostVars: 4, hostBindings: function GalleryThumbsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height);
    } }, inputs: { state: "state", config: "config" }, outputs: { action: "action", thumbClick: "thumbClick", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [["class", "g-thumbs-container", 4, "ngIf"], [1, "g-thumbs-container"], [1, "g-slider", 3, "ngStyle"], [3, "type", "config", "data", "currIndex", "index", "tapClickDisabled", "tapClick", "error", 4, "ngFor", "ngForOf"], [3, "type", "config", "data", "currIndex", "index", "tapClickDisabled", "tapClick", "error"]], template: function GalleryThumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryThumbsComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.sliderState$));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], GalleryThumbComponent, TapClick]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]]; }, encapsulation: 2, changeDetection: 0 });
GalleryThumbsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
GalleryThumbsComponent.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    thumbClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryThumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-thumbs',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div *ngIf="sliderState$ | async; let sliderState"
         class="g-thumbs-container">
      <div class="g-slider"
           [class.g-no-transition]="sliderState.active"
           [ngStyle]="sliderState.style">

        <gallery-thumb *ngFor="let item of state.items;let i = index"
                       [type]="item.type"
                       [config]="config"
                       [data]="item.data"
                       [currIndex]="state.currIndex"
                       [index]="i"
                       [tapClickDisabled]="config.disableThumb"
                       (tapClick)="thumbClick.emit(i)"
                       (error)="error.emit({itemIndex: i, error: $event})"></gallery-thumb>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], thumbClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GallerySliderComponent {
    constructor(_el, _zone, platform) {
        this._el = _el;
        this._zone = _zone;
        this.platform = platform;
        /** Sliding worker */
        this._slidingWorker$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ value: 0, active: false });
        /** Stream that emits when the active item should change */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Stream that emits when item is clicked */
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Stream that emits when an error occurs */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((state) => ({
            style: this.getSliderStyles(state),
            active: state.active
        })));
    }
    /** Item zoom */
    get zoom() {
        return { transform: `perspective(50px) translate3d(0, 0, ${-this.config.zoomOut}px)` };
    }
    ngOnChanges() {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
    }
    ngOnInit() {
        if (this.config.gestures && typeof Hammer !== 'undefined') {
            const direction = this.config.slidingDirection === SlidingDirection.Horizontal
                ? Hammer.DIRECTION_HORIZONTAL
                : Hammer.DIRECTION_VERTICAL;
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction });
            this._zone.runOutsideAngular(() => {
                // Move the slider
                this._hammer.on('pan', (e) => {
                    switch (this.config.slidingDirection) {
                        case SlidingDirection.Horizontal:
                            this.updateSlider({ value: e.deltaX, active: true });
                            if (e.isFinal) {
                                this.updateSlider({ value: 0, active: false });
                                this.horizontalPan(e);
                            }
                            break;
                        case SlidingDirection.Vertical:
                            this.updateSlider({ value: e.deltaY, active: true });
                            if (e.isFinal) {
                                this.updateSlider({ value: 0, active: false });
                                this.verticalPan(e);
                            }
                    }
                });
            });
        }
        // Rearrange slider on window resize
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platform)) {
            this._resizeSub$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.updateSlider(this._slidingWorker$.value))).subscribe();
        }
        setTimeout(() => this.updateSlider({ value: 0, active: false }));
    }
    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.destroy();
        }
        if (this._resizeSub$) {
            this._resizeSub$.unsubscribe();
        }
        this._slidingWorker$.complete();
    }
    /**
     * Convert sliding state to styles
     */
    getSliderStyles(state) {
        switch (this.config.slidingDirection) {
            case SlidingDirection.Horizontal:
                return {
                    transform: `translate3d(${-(this.state.currIndex * this._el.nativeElement.offsetWidth) + state.value}px, 0, 0)`,
                    width: `calc(100% * ${this.state.items.length})`,
                    height: '100%'
                };
            case SlidingDirection.Vertical:
                return {
                    transform: `translate3d(0, ${-(this.state.currIndex * this._el.nativeElement.offsetHeight) + state.value}px, 0)`,
                    width: '100%',
                    height: `calc(100% * ${this.state.items.length})`,
                };
        }
    }
    verticalPan(e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    }
    horizontalPan(e) {
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    }
    next() {
        this.action.emit('next');
    }
    prev() {
        this.action.emit('prev');
    }
    updateSlider(state) {
        const newState = Object.assign(Object.assign({}, this._slidingWorker$.value), state);
        this._slidingWorker$.next(newState);
    }
}
GallerySliderComponent.ɵfac = function GallerySliderComponent_Factory(t) { return new (t || GallerySliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
GallerySliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GallerySliderComponent, selectors: [["gallery-slider"]], inputs: { state: "state", config: "config" }, outputs: { action: "action", itemClick: "itemClick", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["class", "g-items-container", 3, "ngStyle", 4, "ngIf"], [1, "g-items-container", 3, "ngStyle"], [1, "g-slider", 3, "ngStyle"], [3, "type", "config", "data", "currIndex", "index", "tapClick", "error", 4, "ngFor", "ngForOf"], [3, "type", "config", "data", "currIndex", "index", "tapClick", "error"]], template: function GallerySliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GallerySliderComponent_div_0_Template, 3, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.sliderState$));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], GalleryItemComponent, TapClick]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]]; }, encapsulation: 2, changeDetection: 0 });
GallerySliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
GallerySliderComponent.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GallerySliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-slider',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div *ngIf="sliderState$ | async; let sliderState"
         class="g-items-container"
         [ngStyle]="zoom">

      <div class="g-slider"
           [class.g-no-transition]="sliderState.active"
           [ngStyle]="sliderState.style">

        <gallery-item *ngFor="let item of state.items; let i = index"
                      [type]="item.type"
                      [config]="config"
                      [data]="item.data"
                      [currIndex]="state.currIndex"
                      [index]="i"
                      (tapClick)="itemClick.emit(i)"
                      (error)="error.emit({itemIndex: i, error: $event})">
        </gallery-item>

      </div>
    </div>
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryCounterComponent {
}
GalleryCounterComponent.ɵfac = function GalleryCounterComponent_Factory(t) { return new (t || GalleryCounterComponent)(); };
GalleryCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryCounterComponent, selectors: [["gallery-counter"]], inputs: { state: "state" }, decls: 2, vars: 1, consts: [[1, "g-counter"]], template: function GalleryCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.currIndex + 1 + "/" + ctx.state.items.length);
    } }, encapsulation: 2, changeDetection: 0 });
GalleryCounterComponent.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-counter',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="g-counter">{{(state.currIndex + 1) + '/' + state.items.length}}</div>
  `
            }]
    }], null, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryItemComponent {
    constructor() {
        this.Types = GalleryItemType;
        /** Stream that emits when an error occurs */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isActive() {
        return this.index === this.currIndex;
    }
    get isAutoPlay() {
        if (this.isActive) {
            if (this.type === GalleryItemType.Video || this.type === GalleryItemType.Youtube) {
                return this.data.autoplay;
            }
        }
    }
    get youtubeSrc() {
        let autoplay = 0;
        if (this.isActive && this.type === GalleryItemType.Youtube && this.data.autoplay) {
            autoplay = 1;
        }
        const url = new URL(this.data.src);
        url.search = new URLSearchParams(Object.assign(Object.assign({ wmode: 'transparent' }, this.data.params), { autoplay })).toString();
        return url.href;
    }
    get load() {
        switch (this.config.loadingStrategy) {
            case LoadingStrategy.Preload:
                return true;
            case LoadingStrategy.Lazy:
                return this.currIndex === this.index;
            default:
                return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
        }
    }
}
GalleryItemComponent.ɵfac = function GalleryItemComponent_Factory(t) { return new (t || GalleryItemComponent)(); };
GalleryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryItemComponent, selectors: [["gallery-item"]], hostVars: 2, hostBindings: function GalleryItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("g-active-item", ctx.isActive);
    } }, inputs: { config: "config", index: "index", currIndex: "currIndex", type: "type", data: "data" }, outputs: { error: "error" }, decls: 1, vars: 1, consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "src", "poster", "controls", "play", "pause", "error", 4, "ngSwitchCase"], [3, "src", "autoplay", "pause", 4, "ngSwitchCase"], [3, "src", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "src", "loadingIcon", "loadingError", "error"], [1, "g-template", "g-item-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "src", "poster", "controls", "play", "pause", "error"], [3, "src", "autoplay", "pause"], [3, "src"]], template: function GalleryItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryItemComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], GalleryImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], GalleryVideoComponent, GalleryIframeComponent], encapsulation: 2, changeDetection: 0 });
GalleryItemComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    currIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.g-active-item',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-item',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *ngIf="load" [ngSwitch]="type">

      <ng-container *ngSwitchCase="Types.Image">

        <gallery-image [src]="data.src"
                       [loadingIcon]="config.loadingIcon"
                       [loadingError]="config.loadingError"
                       (error)="error.emit($event)"></gallery-image>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

      <gallery-video *ngSwitchCase="Types.Video"
                     [src]="data.src"
                     [poster]="data.poster"
                     [controls]="data.controls"
                     [play]="isAutoPlay"
                     [pause]="currIndex !== index"
                     (error)="error.emit($event)"></gallery-video>

      <gallery-iframe *ngSwitchCase="Types.Youtube"
                      [src]="youtubeSrc"
                      [autoplay]="isAutoPlay"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Iframe"
                      [src]="data.src"></gallery-iframe>

      <ng-container *ngSwitchDefault>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

    </ng-container>
  `
            }]
    }], function () { return []; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.g-active-item']
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryThumbComponent {
    constructor() {
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isActive() {
        return this.index === this.currIndex;
    }
}
GalleryThumbComponent.ɵfac = function GalleryThumbComponent_Factory(t) { return new (t || GalleryThumbComponent)(); };
GalleryThumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryThumbComponent, selectors: [["gallery-thumb"]], hostVars: 2, hostBindings: function GalleryThumbComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("g-active-thumb", ctx.isActive);
    } }, inputs: { config: "config", index: "index", currIndex: "currIndex", type: "type", data: "data" }, outputs: { error: "error" }, decls: 2, vars: 5, consts: [["mode", "indeterminate", 3, "src", "isThumbnail", "loadingIcon", "loadingError", "error"], ["class", "g-template g-thumb-template", 4, "ngIf"], [1, "g-template", "g-thumb-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GalleryThumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gallery-image", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function GalleryThumbComponent_Template_gallery_image_error_0_listener($event) { return ctx.error.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryThumbComponent_div_1_Template, 2, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.thumb)("isThumbnail", true)("loadingIcon", ctx.config.thumbLoadingIcon)("loadingError", ctx.config.thumbLoadingError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.thumbTemplate);
    } }, directives: [GalleryImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
GalleryThumbComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    currIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.g-active-thumb',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryThumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gallery-thumb',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <gallery-image [src]="data.thumb" 
                   mode="indeterminate"
                   [isThumbnail]="true" 
                   [loadingIcon]="config.thumbLoadingIcon"
                   [loadingError]="config.thumbLoadingError "
                   (error)="error.emit($event)"></gallery-image>

    <div *ngIf="config.thumbTemplate" class="g-template g-thumb-template">
      <ng-container
        *ngTemplateOutlet="config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }">
      </ng-container>
    </div>
  `
            }]
    }], function () { return []; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.g-active-thumb']
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class LazyImage {
    constructor(document) {
        this.document = document;
        this._imageLoader$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._loaderSub$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._loaderSub$ = this._imageLoader$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((imageSrc) => this.nativeLoader(imageSrc))).subscribe();
    }
    ngOnChanges(changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    }
    ngOnDestroy() {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    }
    loadImage(imagePath) {
        this._imageLoader$.next(imagePath);
    }
    /**
     * Native image loader, does not emit progress
     * @param url
     */
    nativeLoader(url) {
        const img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        const loadSuccess = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(img, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.loaded.emit(url)));
        // Image load failed
        const loadError = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(img, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.error.emit(new Error(`[lazyImage]: The image ${url} did not load`))));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(loadSuccess, loadError);
    }
}
LazyImage.ɵfac = function LazyImage_Factory(t) { return new (t || LazyImage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); };
LazyImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyImage, selectors: [["", "lazyImage", ""]], inputs: { src: ["lazyImage", "src"] }, outputs: { loaded: "loaded", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
LazyImage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
LazyImage.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['lazyImage',] }],
    loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[lazyImage]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['lazyImage']
        }] }); })();

/**
 * This directive uses tap event if HammerJS is loaded, otherwise it falls back to normal click event
 */
class TapClick {
    constructor(_el) {
        this._el = _el;
        this.clickListener = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this.tapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.activateClickEvent();
    }
    activateClickEvent() {
        if (typeof Hammer !== 'undefined') {
            // Use Hammer.js tap event
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.on('tap', () => {
                if (!this.tapClickDisabled) {
                    this.tapClick.emit(null);
                }
            });
        }
        else {
            // Use normal click event
            this.clickListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this._el.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !this.tapClickDisabled), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.tapClick.emit(null))).subscribe();
        }
    }
    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.destroy();
        }
        this.clickListener.unsubscribe();
    }
}
TapClick.ɵfac = function TapClick_Factory(t) { return new (t || TapClick)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TapClick.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TapClick, selectors: [["", "tapClick", ""]], inputs: { tapClickDisabled: "tapClickDisabled" }, outputs: { tapClick: "tapClick" } });
TapClick.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
TapClick.propDecorators = {
    tapClickDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TapClick, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tapClick]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { tapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tapClickDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class GalleryModule {
    static withConfig(config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
GalleryModule.ɵfac = function GalleryModule_Factory(t) { return new (t || GalleryModule)(); };
GalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryModule });
GalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryModule, { declarations: function () { return [GalleryComponent, GalleryNavComponent, GalleryDotsComponent, GalleryCoreComponent, GallerySliderComponent, GalleryCounterComponent, GalleryThumbsComponent, GalleryThumbComponent, GalleryItemComponent, GalleryImageComponent, GalleryVideoComponent, GalleryIframeComponent, LazyImage, TapClick]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [GalleryComponent, LazyImage, TapClick]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                declarations: [
                    GalleryComponent,
                    GalleryNavComponent,
                    GalleryDotsComponent,
                    GalleryCoreComponent,
                    GallerySliderComponent,
                    GalleryCounterComponent,
                    GalleryThumbsComponent,
                    GalleryThumbComponent,
                    GalleryItemComponent,
                    GalleryImageComponent,
                    GalleryVideoComponent,
                    GalleryIframeComponent,
                    LazyImage,
                    TapClick
                ],
                exports: [
                    GalleryComponent,
                    LazyImage,
                    TapClick
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-gallery.js.map

/***/ })

}]);
//# sourceMappingURL=default~tipo-servicio-tipo-servicio-module~tipo-trabajo-tipo-trabajo-module.js.map