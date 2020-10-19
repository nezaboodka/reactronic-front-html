// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Emitted, emit, RenderWithParent, Customize } from 'reactronic-front'
import { HtmlRtti, SvgRtti } from './WebRtti'

function nullRender(e: Element): void { /* nop */ }

export function RxDiv<O = void, S = void>(id: string, state: S, render: Render<HTMLDivElement, O, S>, customize?: Customize<O, HTMLDivElement, S>): Emitted<HTMLDivElement, O, S> { return emit(id, state, render, customize, Html.div) }
export function RxSpan<O = void, S = void>(id: string, state: S, render: Render<HTMLSpanElement, O, S>, customize?: Customize<O, HTMLSpanElement, S>): Emitted<HTMLSpanElement, O, S> { return emit(id, state, render, customize, Html.span) }
export function RxSection<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Emitted<HTMLElement, O, S> { return emit(id, state, render, customize, Html.section) }
export function RxNav<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Emitted<HTMLElement, O, S> { return emit(id, state, render, customize, Html.nav) }
export function RxLink<O = void, S = void>(id: string, state: S, render: Render<HTMLLinkElement, O, S>, customize?: Customize<O, HTMLLinkElement, S>): Emitted<HTMLLinkElement, O, S> { return emit(id, state, render, customize, Html.link) }
export function RxButton<O = void, S = void>(id: string, state: S, render: Render<HTMLButtonElement, O, S>, customize?: Customize<O, HTMLButtonElement, S>): Emitted<HTMLButtonElement, O, S> { return emit(id, state, render, customize, Html.button) }
export function RxImage<O = void, S = void>(id: string, state: S, render: Render<HTMLImageElement, O, S>, customize?: Customize<O, HTMLImageElement, S>): Emitted<HTMLImageElement, O, S> { return emit(id, state, render, customize, Html.image) }
export function RxInput<O = void, S = void>(id: string, state: S, render: Render<HTMLInputElement, O, S>, customize?: Customize<O, HTMLInputElement, S>): Emitted<HTMLInputElement, O, S> { return emit(id, state, render, customize, Html.input) }
export function RxSelect<O = void, S = void>(id: string, state: S, render: Render<HTMLSelectElement, O, S>, customize?: Customize<O, HTMLSelectElement, S>): Emitted<HTMLSelectElement, O, S> { return emit(id, state, render, customize, Html.select) }
export function RxOption<O = void, S = void>(id: string, state: S, render: Render<HTMLOptionElement, O, S>, customize?: Customize<O, HTMLOptionElement, S>): Emitted<HTMLOptionElement, O, S> { return emit(id, state, render, customize, Html.option) }
export function RxLabel<O = void, S = void>(id: string, state: S, render: Render<HTMLLabelElement, O, S>, customize?: Customize<O, HTMLLabelElement, S>): Emitted<HTMLLabelElement, O, S> { return emit(id, state, render, customize, Html.label) }
export function RxHeader<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Emitted<HTMLElement, O, S> { return emit(id, state, render, customize, Html.header) }
export function RxAudio<O = void, S = void>(id: string, state: S, render: Render<HTMLAudioElement, O, S>, customize?: Customize<O, HTMLAudioElement, S>): Emitted<HTMLAudioElement, O, S> { return emit(id, state, render, customize, Html.audio) }
export function RxVideo<O = void, S = void>(id: string, state: S, render: Render<HTMLVideoElement, O, S>, customize?: Customize<O, HTMLVideoElement, S>): Emitted<HTMLVideoElement, O, S> { return emit(id, state, render, customize, Html.video) }
export function RxIframe<O = void, S = void>(id: string, state: S, render: Render<HTMLIFrameElement, O, S>, customize?: Customize<O, HTMLIFrameElement, S>): Emitted<HTMLIFrameElement, O, S> { return emit(id, state, render, customize, Html.iframe) }
export function RxSource<O = void, S = void>(id: string, state: S, render: Render<HTMLSourceElement, O, S>, customize?: Customize<O, HTMLSourceElement, S>): Emitted<HTMLSourceElement, O, S> { return emit(id, state, render, customize, Html.source) }
export function RxI<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Emitted<HTMLElement, O, S> { return emit(id, state, render, customize, Html.i) }
export function RxB<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Emitted<HTMLElement, O, S> { return emit(id, state, render, customize, Html.b) }
export function RxU<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Emitted<HTMLElement, O, S> { return emit(id, state, render, customize, Html.u) }
export function RxOL<O = void, S = void>(id: string, state: S, render: Render<HTMLOListElement, O, S>, customize?: Customize<O, HTMLOListElement, S>): Emitted<HTMLOListElement, O, S> { return emit(id, state, render, customize, Html.ol) }
export function RxUL<O = void, S = void>(id: string, state: S, render: Render<HTMLUListElement, O, S>, customize?: Customize<O, HTMLUListElement, S>): Emitted<HTMLUListElement, O, S> { return emit(id, state, render, customize, Html.ul) }
export function RxLI<O = void, S = void>(id: string, state: S, render: Render<HTMLLIElement, O, S>, customize?: Customize<O, HTMLLIElement, S>): Emitted<HTMLLIElement, O, S> { return emit(id, state, render, customize, Html.li) }
export function RxTR<O = void, S = void>(id: string, state: S, render: Render<HTMLTableRowElement, O, S>, customize?: Customize<O, HTMLTableRowElement, S>): Emitted<HTMLTableRowElement, O, S> { return emit(id, state, render, customize, Html.tr) }
export function RxTH<O = void, S = void>(id: string, state: S, render: Render<HTMLTableHeaderCellElement, O, S>, customize?: Customize<O, HTMLTableHeaderCellElement, S>): Emitted<HTMLTableHeaderCellElement, O, S> { return emit(id, state, render, customize, Html.th) }
export function RxTD<O = void, S = void>(id: string, state: S, render: Render<HTMLTableDataCellElement, O, S>, customize?: Customize<O, HTMLTableDataCellElement, S>): Emitted<HTMLTableDataCellElement, O, S> { return emit(id, state, render, customize, Html.td) }
export function RxCaption<O = void, S = void>(id: string, state: S, render: Render<HTMLTableCaptionElement, O, S>, customize?: Customize<O, HTMLTableCaptionElement, S>): Emitted<HTMLTableCaptionElement, O, S> { return emit(id, state, render, customize, Html.caption) }

export function div(id: string, render: Render<HTMLDivElement> = nullRender): Emitted<HTMLDivElement> { return emit(id, RenderWithParent, render, undefined, Html.div) }
export function span(id: string, render: Render<HTMLSpanElement> = nullRender): Emitted<HTMLSpanElement> { return emit(id, RenderWithParent, render, undefined, Html.span) }
export function section(id: string, render: Render<HTMLElement> = nullRender): Emitted<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.section) }
export function nav(id: string, render: Render<HTMLElement> = nullRender): Emitted<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.nav) }
export function link(id: string, render: Render<HTMLLinkElement> = nullRender): Emitted<HTMLLinkElement> { return emit(id, RenderWithParent, render, undefined, Html.link) }
export function button(id: string, render: Render<HTMLButtonElement> = nullRender): Emitted<HTMLButtonElement> { return emit(id, RenderWithParent, render, undefined, Html.button) }
export function img(id: string, render: Render<HTMLImageElement> = nullRender): Emitted<HTMLImageElement> { return emit(id, RenderWithParent, render, undefined, Html.image) }
export function input(id: string, render: Render<HTMLInputElement> = nullRender): Emitted<HTMLInputElement> { return emit(id, RenderWithParent, render, undefined, Html.input) }
export function select(id: string, render: Render<HTMLSelectElement> = nullRender): Emitted<HTMLSelectElement> { return emit(id, RenderWithParent, render, undefined, Html.select) }
export function option(id: string, render: Render<HTMLOptionElement> = nullRender): Emitted<HTMLOptionElement> { return emit(id, RenderWithParent, render, undefined, Html.option) }
export function label(id: string, render: Render<HTMLLabelElement> = nullRender): Emitted<HTMLLabelElement> { return emit(id, RenderWithParent, render, undefined, Html.label) }
export function header(id: string, render: Render<HTMLElement> = nullRender): Emitted<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.header) }
export function audio(id: string, render: Render<HTMLAudioElement> = nullRender): Emitted<HTMLAudioElement> { return emit(id, RenderWithParent, render, undefined, Html.audio) }
export function video(id: string, render: Render<HTMLVideoElement> = nullRender): Emitted<HTMLVideoElement> { return emit(id, RenderWithParent, render, undefined, Html.video) }
export function iframe(id: string, render: Render<HTMLIFrameElement> = nullRender): Emitted<HTMLIFrameElement> { return emit(id, RenderWithParent, render, undefined, Html.iframe) }
export function source(id: string, render: Render<HTMLSourceElement> = nullRender): Emitted<HTMLSourceElement> { return emit(id, RenderWithParent, render, undefined, Html.source) }
export function i(id: string, render: Render<HTMLElement> = nullRender): Emitted<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.i) }
export function b(id: string, render: Render<HTMLElement> = nullRender): Emitted<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.b) }
export function u(id: string, render: Render<HTMLElement> = nullRender): Emitted<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.u) }
export function ol(id: string, render: Render<HTMLOListElement> = nullRender): Emitted<HTMLOListElement> { return emit(id, RenderWithParent, render, undefined, Html.ol) }
export function ul(id: string, render: Render<HTMLUListElement> = nullRender): Emitted<HTMLUListElement> { return emit(id, RenderWithParent, render, undefined, Html.ul) }
export function li(id: string, render: Render<HTMLLIElement> = nullRender): Emitted<HTMLLIElement> { return emit(id, RenderWithParent, render, undefined, Html.li) }
export function tr(id: string, render: Render<HTMLTableRowElement> = nullRender): Emitted<HTMLTableRowElement> { return emit(id, RenderWithParent, render, undefined, Html.tr) }
export function th(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender): Emitted<HTMLTableHeaderCellElement> { return emit(id, RenderWithParent, render, undefined, Html.th) }
export function td(id: string, render: Render<HTMLTableDataCellElement> = nullRender): Emitted<HTMLTableDataCellElement> { return emit(id, RenderWithParent, render, undefined, Html.td) }
export function caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender): Emitted<HTMLTableCaptionElement> { return emit(id, RenderWithParent, render, undefined, Html.caption) }

const Html = {
  div: new HtmlRtti<HTMLDivElement>('div'),
  span: new HtmlRtti<HTMLSpanElement>('span'),
  section: new HtmlRtti<HTMLElement>('section'),
  nav: new HtmlRtti<HTMLElement>('nav'),
  link: new HtmlRtti<HTMLLinkElement>('a'),
  button: new HtmlRtti<HTMLButtonElement>('button'),
  image: new HtmlRtti<HTMLImageElement>('img'),
  input: new HtmlRtti<HTMLInputElement>('input'),
  select: new HtmlRtti<HTMLSelectElement>('select'),
  option: new HtmlRtti<HTMLOptionElement>('option'),
  label: new HtmlRtti<HTMLLabelElement>('label'),
  header: new HtmlRtti<HTMLElement>('header'),
  audio: new HtmlRtti<HTMLAudioElement>('audio'),
  video: new HtmlRtti<HTMLVideoElement>('video'),
  iframe: new HtmlRtti<HTMLIFrameElement>('iframe'),
  source: new HtmlRtti<HTMLSourceElement>('source'),
  i: new HtmlRtti<HTMLElement>('i'),
  b: new HtmlRtti<HTMLElement>('b'),
  u: new HtmlRtti<HTMLElement>('u'),
  ol: new HtmlRtti<HTMLOListElement>('ol'),
  ul: new HtmlRtti<HTMLUListElement>('ul'),
  li: new HtmlRtti<HTMLLIElement>('li'),
  tr: new HtmlRtti<HTMLTableRowElement>('tr'),
  th: new HtmlRtti<HTMLTableHeaderCellElement>('th'),
  td: new HtmlRtti<HTMLTableDataCellElement>('td'),
  caption: new HtmlRtti<HTMLTableCaptionElement>('caption'),
}

export function RxSvg<O = void, S = void>(id: string, state: S, render: Render<SVGSVGElement, O, S>, customize?: Customize<O, SVGSVGElement, S>): Emitted<SVGSVGElement, O, S> { return emit(id, state, render, customize, Svg.svg) }
export function RxSvgLink<O = void, S = void>(id: string, state: S, render: Render<SVGAElement, O, S>, customize?: Customize<O, SVGAElement, S>): Emitted<SVGAElement, O, S> { return emit(id, state, render, customize, Svg.link) }
export function RxAnimate<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateElement, O, S>, customize?: Customize<O, SVGAnimateElement, S>): Emitted<SVGAnimateElement, O, S> { return emit(id, state, render, customize, Svg.animate) }
export function RxAnimateMotion<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateMotionElement, O, S>, customize?: Customize<O, SVGAnimateMotionElement, S>): Emitted<SVGAnimateMotionElement, O, S> { return emit(id, state, render, customize, Svg.animateMotion) }
export function RxAnimateTransform<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateTransformElement, O, S>, customize?: Customize<O, SVGAnimateTransformElement, S>): Emitted<SVGAnimateTransformElement, O, S> { return emit(id, state, render, customize, Svg.animateTransform) }
export function RxCircle<O = void, S = void>(id: string, state: S, render: Render<SVGCircleElement, O, S>, customize?: Customize<O, SVGCircleElement, S>): Emitted<SVGCircleElement, O, S> { return emit(id, state, render, customize, Svg.circle) }
export function RxClipPath<O = void, S = void>(id: string, state: S, render: Render<SVGClipPathElement, O, S>, customize?: Customize<O, SVGClipPathElement, S>): Emitted<SVGClipPathElement, O, S> { return emit(id, state, render, customize, Svg.clipPath) }
export function RxDefs<O = void, S = void>(id: string, state: S, render: Render<SVGDefsElement, O, S>, customize?: Customize<O, SVGDefsElement, S>): Emitted<SVGDefsElement, O, S> { return emit(id, state, render, customize, Svg.defs) }
export function RxDesc<O = void, S = void>(id: string, state: S, render: Render<SVGDescElement, O, S>, customize?: Customize<O, SVGDescElement, S>): Emitted<SVGDescElement, O, S> { return emit(id, state, render, customize, Svg.desc) }
export function RxEllipse<O = void, S = void>(id: string, state: S, render: Render<SVGEllipseElement, O, S>, customize?: Customize<O, SVGEllipseElement, S>): Emitted<SVGEllipseElement, O, S> { return emit(id, state, render, customize, Svg.ellipse) }
export function RxForeignObject<O = void, S = void>(id: string, state: S, render: Render<SVGForeignObjectElement, O, S>, customize?: Customize<O, SVGForeignObjectElement, S>): Emitted<SVGForeignObjectElement, O, S> { return emit(id, state, render, customize, Svg.foreignObject) }
export function RxG<O = void, S = void>(id: string, state: S, render: Render<SVGGElement, O, S>, customize?: Customize<O, SVGGElement, S>): Emitted<SVGGElement, O, S> { return emit(id, state, render, customize, Svg.g) }
export function RxSvgImage<O = void, S = void>(id: string, state: S, render: Render<SVGImageElement, O, S>, customize?: Customize<O, SVGImageElement, S>): Emitted<SVGImageElement, O, S> { return emit(id, state, render, customize, Svg.image) }
export function RxLine<O = void, S = void>(id: string, state: S, render: Render<SVGLineElement, O, S>, customize?: Customize<O, SVGLineElement, S>): Emitted<SVGLineElement, O, S> { return emit(id, state, render, customize, Svg.line) }
export function RxLinearGradient<O = void, S = void>(id: string, state: S, render: Render<SVGLinearGradientElement, O, S>, customize?: Customize<O, SVGLinearGradientElement, S>): Emitted<SVGLinearGradientElement, O, S> { return emit(id, state, render, customize, Svg.linearGradient) }
export function RxMarker<O = void, S = void>(id: string, state: S, render: Render<SVGMarkerElement, O, S>, customize?: Customize<O, SVGMarkerElement, S>): Emitted<SVGMarkerElement, O, S> { return emit(id, state, render, customize, Svg.marker) }
export function RxMask<O = void, S = void>(id: string, state: S, render: Render<SVGMaskElement, O, S>, customize?: Customize<O, SVGMaskElement, S>): Emitted<SVGMaskElement, O, S> { return emit(id, state, render, customize, Svg.mask) }
export function RxPath<O = void, S = void>(id: string, state: S, render: Render<SVGPathElement, O, S>, customize?: Customize<O, SVGPathElement, S>): Emitted<SVGPathElement, O, S> { return emit(id, state, render, customize, Svg.path) }
export function RxPattern<O = void, S = void>(id: string, state: S, render: Render<SVGPatternElement, O, S>, customize?: Customize<O, SVGPatternElement, S>): Emitted<SVGPatternElement, O, S> { return emit(id, state, render, customize, Svg.pattern) }
export function RxPolygon<O = void, S = void>(id: string, state: S, render: Render<SVGPolygonElement, O, S>, customize?: Customize<O, SVGPolygonElement, S>): Emitted<SVGPolygonElement, O, S> { return emit(id, state, render, customize, Svg.polygon) }
export function RxPolyline<O = void, S = void>(id: string, state: S, render: Render<SVGPolylineElement, O, S>, customize?: Customize<O, SVGPolylineElement, S>): Emitted<SVGPolylineElement, O, S> { return emit(id, state, render, customize, Svg.polyline) }
export function RxRadialGradient<O = void, S = void>(id: string, state: S, render: Render<SVGRadialGradientElement, O, S>, customize?: Customize<O, SVGRadialGradientElement, S>): Emitted<SVGRadialGradientElement, O, S> { return emit(id, state, render, customize, Svg.radialGradient) }
export function RxRect<O = void, S = void>(id: string, state: S, render: Render<SVGRectElement, O, S>, customize?: Customize<O, SVGRectElement, S>): Emitted<SVGRectElement, O, S> { return emit(id, state, render, customize, Svg.rect) }
export function RxText<O = void, S = void>(id: string, state: S, render: Render<SVGTextElement, O, S>, customize?: Customize<O, SVGTextElement, S>): Emitted<SVGTextElement, O, S> { return emit(id, state, render, customize, Svg.text) }
export function RxTextPath<O = void, S = void>(id: string, state: S, render: Render<SVGTextPathElement, O, S>, customize?: Customize<O, SVGTextPathElement, S>): Emitted<SVGTextPathElement, O, S> { return emit(id, state, render, customize, Svg.textPath) }
export function RxUse<O = void, S = void>(id: string, state: S, render: Render<SVGUseElement, O, S>, customize?: Customize<O, SVGUseElement, S>): Emitted<SVGUseElement, O, S> { return emit(id, state, render, customize, Svg.use) }
export function RxView<O = void, S = void>(id: string, state: S, render: Render<SVGViewElement, O, S>, customize?: Customize<O, SVGViewElement, S>): Emitted<SVGViewElement, O, S> { return emit(id, state, render, customize, Svg.view) }

export function svg(id: string, render: Render<SVGSVGElement> = nullRender): Emitted<SVGSVGElement> { return emit(id, RenderWithParent, render, undefined, Svg.svg) }
export function svgLink(id: string, render: Render<SVGAElement> = nullRender): Emitted<SVGAElement> { return emit(id, RenderWithParent, render, undefined, Svg.link) }
export function animate(id: string, render: Render<SVGAnimateElement> = nullRender): Emitted<SVGAnimateElement> { return emit(id, RenderWithParent, render, undefined, Svg.animate) }
export function animateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender): Emitted<SVGAnimateMotionElement> { return emit(id, RenderWithParent, render, undefined, Svg.animateMotion) }
export function animateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender): Emitted<SVGAnimateTransformElement> { return emit(id, RenderWithParent, render, undefined, Svg.animateTransform) }
export function circle(id: string, render: Render<SVGCircleElement> = nullRender): Emitted<SVGCircleElement> { return emit(id, RenderWithParent, render, undefined, Svg.circle) }
export function clipPath(id: string, render: Render<SVGClipPathElement> = nullRender): Emitted<SVGClipPathElement> { return emit(id, RenderWithParent, render, undefined, Svg.clipPath) }
export function defs(id: string, render: Render<SVGDefsElement> = nullRender): Emitted<SVGDefsElement> { return emit(id, RenderWithParent, render, undefined, Svg.defs) }
export function desc(id: string, render: Render<SVGDescElement> = nullRender): Emitted<SVGDescElement> { return emit(id, RenderWithParent, render, undefined, Svg.desc) }
export function ellipse(id: string, render: Render<SVGEllipseElement> = nullRender): Emitted<SVGEllipseElement> { return emit(id, RenderWithParent, render, undefined, Svg.ellipse) }
export function foreignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender): Emitted<SVGForeignObjectElement> { return emit(id, RenderWithParent, render, undefined, Svg.foreignObject) }
export function g(id: string, render: Render<SVGGElement> = nullRender): Emitted<SVGGElement> { return emit(id, RenderWithParent, render, undefined, Svg.g) }
export function svgImage(id: string, render: Render<SVGImageElement> = nullRender): Emitted<SVGImageElement> { return emit(id, RenderWithParent, render, undefined, Svg.image) }
export function line(id: string, render: Render<SVGLineElement> = nullRender): Emitted<SVGLineElement> { return emit(id, RenderWithParent, render, undefined, Svg.line) }
export function linearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender): Emitted<SVGLinearGradientElement> { return emit(id, RenderWithParent, render, undefined, Svg.linearGradient) }
export function marker(id: string, render: Render<SVGMarkerElement> = nullRender): Emitted<SVGMarkerElement> { return emit(id, RenderWithParent, render, undefined, Svg.marker) }
export function mask(id: string, render: Render<SVGMaskElement> = nullRender): Emitted<SVGMaskElement> { return emit(id, RenderWithParent, render, undefined, Svg.mask) }
export function path(id: string, render: Render<SVGPathElement> = nullRender): Emitted<SVGPathElement> { return emit(id, RenderWithParent, render, undefined, Svg.path) }
export function pattern(id: string, render: Render<SVGPatternElement> = nullRender): Emitted<SVGPatternElement> { return emit(id, RenderWithParent, render, undefined, Svg.pattern) }
export function polygon(id: string, render: Render<SVGPolygonElement> = nullRender): Emitted<SVGPolygonElement> { return emit(id, RenderWithParent, render, undefined, Svg.polygon) }
export function polyline(id: string, render: Render<SVGPolylineElement> = nullRender): Emitted<SVGPolylineElement> { return emit(id, RenderWithParent, render, undefined, Svg.polyline) }
export function radialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender): Emitted<SVGRadialGradientElement> { return emit(id, RenderWithParent, render, undefined, Svg.radialGradient) }
export function rect(id: string, render: Render<SVGRectElement> = nullRender): Emitted<SVGRectElement> { return emit(id, RenderWithParent, render, undefined, Svg.rect) }
export function text(id: string, render: Render<SVGTextElement> = nullRender): Emitted<SVGTextElement> { return emit(id, RenderWithParent, render, undefined, Svg.text) }
export function textPath(id: string, render: Render<SVGTextPathElement> = nullRender): Emitted<SVGTextPathElement> { return emit(id, RenderWithParent, render, undefined, Svg.textPath) }
export function use(id: string, render: Render<SVGUseElement> = nullRender): Emitted<SVGUseElement> { return emit(id, RenderWithParent, render, undefined, Svg.use) }
export function view(id: string, render: Render<SVGViewElement> = nullRender): Emitted<SVGViewElement> { return emit(id, RenderWithParent, render, undefined, Svg.view) }

const Svg = {
  svg: new SvgRtti<SVGSVGElement>('svg'),
  link: new SvgRtti<SVGAElement>('a'),
  animate: new SvgRtti<SVGAnimateElement>('animate'),
  animateMotion: new SvgRtti<SVGAnimateMotionElement>('animateMotion'),
  animateTransform: new SvgRtti<SVGAnimateTransformElement>('animateTransform'),
  circle: new SvgRtti<SVGCircleElement>('circle'),
  clipPath: new SvgRtti<SVGClipPathElement>('clipPath'),
  defs: new SvgRtti<SVGDefsElement>('defs'),
  desc: new SvgRtti<SVGDescElement>('desc'),
  ellipse: new SvgRtti<SVGEllipseElement>('ellipse'),
  foreignObject: new SvgRtti<SVGForeignObjectElement>('foreignObject'),
  g: new SvgRtti<SVGGElement>('g'),
  image: new SvgRtti<SVGImageElement>('image'),
  line: new SvgRtti<SVGLineElement>('line'),
  linearGradient: new SvgRtti<SVGLinearGradientElement>('linearGradient'),
  marker: new SvgRtti<SVGMarkerElement>('marker'),
  mask: new SvgRtti<SVGMaskElement>('mask'),
  path: new SvgRtti<SVGPathElement>('path'),
  pattern: new SvgRtti<SVGPatternElement>('pattern'),
  polygon: new SvgRtti<SVGPolygonElement>('polygon'),
  polyline: new SvgRtti<SVGPolylineElement>('polyline'),
  radialGradient: new SvgRtti<SVGRadialGradientElement>('radialGradient'),
  rect: new SvgRtti<SVGRectElement>('rect'),
  text: new SvgRtti<SVGTextElement>('text'),
  textPath: new SvgRtti<SVGTextPathElement>('textPath'),
  use: new SvgRtti<SVGUseElement>('use'),
  view: new SvgRtti<SVGViewElement>('view'),
}
