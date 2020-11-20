// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Manifest, manifest, RenderWithParent, Override } from 'reactronic-front'
import { HtmlRtti, SvgRtti } from './WebRtti'

function nullRender(e: Element): void { /* nop */ }

export function RxDiv<O = void, S = void>(id: string, state: S, render: Render<HTMLDivElement, O>, override?: Override<O, HTMLDivElement>): Manifest<HTMLDivElement, O> { return manifest(id, state, render, override, Html.div) }
export function RxSpan<O = void, S = void>(id: string, state: S, render: Render<HTMLSpanElement, O>, override?: Override<O, HTMLSpanElement>): Manifest<HTMLSpanElement, O> { return manifest(id, state, render, override, Html.span) }
export function RxSection<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O>, override?: Override<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, state, render, override, Html.section) }
export function RxNav<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O>, override?: Override<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, state, render, override, Html.nav) }
export function RxLink<O = void, S = void>(id: string, state: S, render: Render<HTMLLinkElement, O>, override?: Override<O, HTMLLinkElement>): Manifest<HTMLLinkElement, O> { return manifest(id, state, render, override, Html.link) }
export function RxButton<O = void, S = void>(id: string, state: S, render: Render<HTMLButtonElement, O>, override?: Override<O, HTMLButtonElement>): Manifest<HTMLButtonElement, O> { return manifest(id, state, render, override, Html.button) }
export function RxImage<O = void, S = void>(id: string, state: S, render: Render<HTMLImageElement, O>, override?: Override<O, HTMLImageElement>): Manifest<HTMLImageElement, O> { return manifest(id, state, render, override, Html.image) }
export function RxInput<O = void, S = void>(id: string, state: S, render: Render<HTMLInputElement, O>, override?: Override<O, HTMLInputElement>): Manifest<HTMLInputElement, O> { return manifest(id, state, render, override, Html.input) }
export function RxSelect<O = void, S = void>(id: string, state: S, render: Render<HTMLSelectElement, O>, override?: Override<O, HTMLSelectElement>): Manifest<HTMLSelectElement, O> { return manifest(id, state, render, override, Html.select) }
export function RxOption<O = void, S = void>(id: string, state: S, render: Render<HTMLOptionElement, O>, override?: Override<O, HTMLOptionElement>): Manifest<HTMLOptionElement, O> { return manifest(id, state, render, override, Html.option) }
export function RxLabel<O = void, S = void>(id: string, state: S, render: Render<HTMLLabelElement, O>, override?: Override<O, HTMLLabelElement>): Manifest<HTMLLabelElement, O> { return manifest(id, state, render, override, Html.label) }
export function RxHeader<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O>, override?: Override<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, state, render, override, Html.header) }
export function RxAudio<O = void, S = void>(id: string, state: S, render: Render<HTMLAudioElement, O>, override?: Override<O, HTMLAudioElement>): Manifest<HTMLAudioElement, O> { return manifest(id, state, render, override, Html.audio) }
export function RxVideo<O = void, S = void>(id: string, state: S, render: Render<HTMLVideoElement, O>, override?: Override<O, HTMLVideoElement>): Manifest<HTMLVideoElement, O> { return manifest(id, state, render, override, Html.video) }
export function RxIframe<O = void, S = void>(id: string, state: S, render: Render<HTMLIFrameElement, O>, override?: Override<O, HTMLIFrameElement>): Manifest<HTMLIFrameElement, O> { return manifest(id, state, render, override, Html.iframe) }
export function RxSource<O = void, S = void>(id: string, state: S, render: Render<HTMLSourceElement, O>, override?: Override<O, HTMLSourceElement>): Manifest<HTMLSourceElement, O> { return manifest(id, state, render, override, Html.source) }
export function RxI<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O>, override?: Override<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, state, render, override, Html.i) }
export function RxB<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O>, override?: Override<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, state, render, override, Html.b) }
export function RxU<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O>, override?: Override<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, state, render, override, Html.u) }
export function RxOL<O = void, S = void>(id: string, state: S, render: Render<HTMLOListElement, O>, override?: Override<O, HTMLOListElement>): Manifest<HTMLOListElement, O> { return manifest(id, state, render, override, Html.ol) }
export function RxUL<O = void, S = void>(id: string, state: S, render: Render<HTMLUListElement, O>, override?: Override<O, HTMLUListElement>): Manifest<HTMLUListElement, O> { return manifest(id, state, render, override, Html.ul) }
export function RxLI<O = void, S = void>(id: string, state: S, render: Render<HTMLLIElement, O>, override?: Override<O, HTMLLIElement>): Manifest<HTMLLIElement, O> { return manifest(id, state, render, override, Html.li) }
export function RxTR<O = void, S = void>(id: string, state: S, render: Render<HTMLTableRowElement, O>, override?: Override<O, HTMLTableRowElement>): Manifest<HTMLTableRowElement, O> { return manifest(id, state, render, override, Html.tr) }
export function RxTH<O = void, S = void>(id: string, state: S, render: Render<HTMLTableHeaderCellElement, O>, override?: Override<O, HTMLTableHeaderCellElement>): Manifest<HTMLTableHeaderCellElement, O> { return manifest(id, state, render, override, Html.th) }
export function RxTD<O = void, S = void>(id: string, state: S, render: Render<HTMLTableDataCellElement, O>, override?: Override<O, HTMLTableDataCellElement>): Manifest<HTMLTableDataCellElement, O> { return manifest(id, state, render, override, Html.td) }
export function RxCaption<O = void, S = void>(id: string, state: S, render: Render<HTMLTableCaptionElement, O>, override?: Override<O, HTMLTableCaptionElement>): Manifest<HTMLTableCaptionElement, O> { return manifest(id, state, render, override, Html.caption) }

export function div(id: string, render: Render<HTMLDivElement> = nullRender): Manifest<HTMLDivElement> { return manifest(id, RenderWithParent, render, undefined, Html.div) }
export function span(id: string, render: Render<HTMLSpanElement> = nullRender): Manifest<HTMLSpanElement> { return manifest(id, RenderWithParent, render, undefined, Html.span) }
export function section(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RenderWithParent, render, undefined, Html.section) }
export function nav(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RenderWithParent, render, undefined, Html.nav) }
export function link(id: string, render: Render<HTMLLinkElement> = nullRender): Manifest<HTMLLinkElement> { return manifest(id, RenderWithParent, render, undefined, Html.link) }
export function button(id: string, render: Render<HTMLButtonElement> = nullRender): Manifest<HTMLButtonElement> { return manifest(id, RenderWithParent, render, undefined, Html.button) }
export function img(id: string, render: Render<HTMLImageElement> = nullRender): Manifest<HTMLImageElement> { return manifest(id, RenderWithParent, render, undefined, Html.image) }
export function input(id: string, render: Render<HTMLInputElement> = nullRender): Manifest<HTMLInputElement> { return manifest(id, RenderWithParent, render, undefined, Html.input) }
export function select(id: string, render: Render<HTMLSelectElement> = nullRender): Manifest<HTMLSelectElement> { return manifest(id, RenderWithParent, render, undefined, Html.select) }
export function option(id: string, render: Render<HTMLOptionElement> = nullRender): Manifest<HTMLOptionElement> { return manifest(id, RenderWithParent, render, undefined, Html.option) }
export function label(id: string, render: Render<HTMLLabelElement> = nullRender): Manifest<HTMLLabelElement> { return manifest(id, RenderWithParent, render, undefined, Html.label) }
export function header(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RenderWithParent, render, undefined, Html.header) }
export function audio(id: string, render: Render<HTMLAudioElement> = nullRender): Manifest<HTMLAudioElement> { return manifest(id, RenderWithParent, render, undefined, Html.audio) }
export function video(id: string, render: Render<HTMLVideoElement> = nullRender): Manifest<HTMLVideoElement> { return manifest(id, RenderWithParent, render, undefined, Html.video) }
export function iframe(id: string, render: Render<HTMLIFrameElement> = nullRender): Manifest<HTMLIFrameElement> { return manifest(id, RenderWithParent, render, undefined, Html.iframe) }
export function source(id: string, render: Render<HTMLSourceElement> = nullRender): Manifest<HTMLSourceElement> { return manifest(id, RenderWithParent, render, undefined, Html.source) }
export function i(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RenderWithParent, render, undefined, Html.i) }
export function b(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RenderWithParent, render, undefined, Html.b) }
export function u(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RenderWithParent, render, undefined, Html.u) }
export function ol(id: string, render: Render<HTMLOListElement> = nullRender): Manifest<HTMLOListElement> { return manifest(id, RenderWithParent, render, undefined, Html.ol) }
export function ul(id: string, render: Render<HTMLUListElement> = nullRender): Manifest<HTMLUListElement> { return manifest(id, RenderWithParent, render, undefined, Html.ul) }
export function li(id: string, render: Render<HTMLLIElement> = nullRender): Manifest<HTMLLIElement> { return manifest(id, RenderWithParent, render, undefined, Html.li) }
export function tr(id: string, render: Render<HTMLTableRowElement> = nullRender): Manifest<HTMLTableRowElement> { return manifest(id, RenderWithParent, render, undefined, Html.tr) }
export function th(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender): Manifest<HTMLTableHeaderCellElement> { return manifest(id, RenderWithParent, render, undefined, Html.th) }
export function td(id: string, render: Render<HTMLTableDataCellElement> = nullRender): Manifest<HTMLTableDataCellElement> { return manifest(id, RenderWithParent, render, undefined, Html.td) }
export function caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender): Manifest<HTMLTableCaptionElement> { return manifest(id, RenderWithParent, render, undefined, Html.caption) }

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

export function RxSvg<O = void, S = void>(id: string, state: S, render: Render<SVGSVGElement, O>, override?: Override<O, SVGSVGElement>): Manifest<SVGSVGElement, O> { return manifest(id, state, render, override, Svg.svg) }
export function RxSvgLink<O = void, S = void>(id: string, state: S, render: Render<SVGAElement, O>, override?: Override<O, SVGAElement>): Manifest<SVGAElement, O> { return manifest(id, state, render, override, Svg.link) }
export function RxAnimate<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateElement, O>, override?: Override<O, SVGAnimateElement>): Manifest<SVGAnimateElement, O> { return manifest(id, state, render, override, Svg.animate) }
export function RxAnimateMotion<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateMotionElement, O>, override?: Override<O, SVGAnimateMotionElement>): Manifest<SVGAnimateMotionElement, O> { return manifest(id, state, render, override, Svg.animateMotion) }
export function RxAnimateTransform<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateTransformElement, O>, override?: Override<O, SVGAnimateTransformElement>): Manifest<SVGAnimateTransformElement, O> { return manifest(id, state, render, override, Svg.animateTransform) }
export function RxCircle<O = void, S = void>(id: string, state: S, render: Render<SVGCircleElement, O>, override?: Override<O, SVGCircleElement>): Manifest<SVGCircleElement, O> { return manifest(id, state, render, override, Svg.circle) }
export function RxClipPath<O = void, S = void>(id: string, state: S, render: Render<SVGClipPathElement, O>, override?: Override<O, SVGClipPathElement>): Manifest<SVGClipPathElement, O> { return manifest(id, state, render, override, Svg.clipPath) }
export function RxDefs<O = void, S = void>(id: string, state: S, render: Render<SVGDefsElement, O>, override?: Override<O, SVGDefsElement>): Manifest<SVGDefsElement, O> { return manifest(id, state, render, override, Svg.defs) }
export function RxDesc<O = void, S = void>(id: string, state: S, render: Render<SVGDescElement, O>, override?: Override<O, SVGDescElement>): Manifest<SVGDescElement, O> { return manifest(id, state, render, override, Svg.desc) }
export function RxEllipse<O = void, S = void>(id: string, state: S, render: Render<SVGEllipseElement, O>, override?: Override<O, SVGEllipseElement>): Manifest<SVGEllipseElement, O> { return manifest(id, state, render, override, Svg.ellipse) }
export function RxForeignObject<O = void, S = void>(id: string, state: S, render: Render<SVGForeignObjectElement, O>, override?: Override<O, SVGForeignObjectElement>): Manifest<SVGForeignObjectElement, O> { return manifest(id, state, render, override, Svg.foreignObject) }
export function RxG<O = void, S = void>(id: string, state: S, render: Render<SVGGElement, O>, override?: Override<O, SVGGElement>): Manifest<SVGGElement, O> { return manifest(id, state, render, override, Svg.g) }
export function RxSvgImage<O = void, S = void>(id: string, state: S, render: Render<SVGImageElement, O>, override?: Override<O, SVGImageElement>): Manifest<SVGImageElement, O> { return manifest(id, state, render, override, Svg.image) }
export function RxLine<O = void, S = void>(id: string, state: S, render: Render<SVGLineElement, O>, override?: Override<O, SVGLineElement>): Manifest<SVGLineElement, O> { return manifest(id, state, render, override, Svg.line) }
export function RxLinearGradient<O = void, S = void>(id: string, state: S, render: Render<SVGLinearGradientElement, O>, override?: Override<O, SVGLinearGradientElement>): Manifest<SVGLinearGradientElement, O> { return manifest(id, state, render, override, Svg.linearGradient) }
export function RxMarker<O = void, S = void>(id: string, state: S, render: Render<SVGMarkerElement, O>, override?: Override<O, SVGMarkerElement>): Manifest<SVGMarkerElement, O> { return manifest(id, state, render, override, Svg.marker) }
export function RxMask<O = void, S = void>(id: string, state: S, render: Render<SVGMaskElement, O>, override?: Override<O, SVGMaskElement>): Manifest<SVGMaskElement, O> { return manifest(id, state, render, override, Svg.mask) }
export function RxPath<O = void, S = void>(id: string, state: S, render: Render<SVGPathElement, O>, override?: Override<O, SVGPathElement>): Manifest<SVGPathElement, O> { return manifest(id, state, render, override, Svg.path) }
export function RxPattern<O = void, S = void>(id: string, state: S, render: Render<SVGPatternElement, O>, override?: Override<O, SVGPatternElement>): Manifest<SVGPatternElement, O> { return manifest(id, state, render, override, Svg.pattern) }
export function RxPolygon<O = void, S = void>(id: string, state: S, render: Render<SVGPolygonElement, O>, override?: Override<O, SVGPolygonElement>): Manifest<SVGPolygonElement, O> { return manifest(id, state, render, override, Svg.polygon) }
export function RxPolyline<O = void, S = void>(id: string, state: S, render: Render<SVGPolylineElement, O>, override?: Override<O, SVGPolylineElement>): Manifest<SVGPolylineElement, O> { return manifest(id, state, render, override, Svg.polyline) }
export function RxRadialGradient<O = void, S = void>(id: string, state: S, render: Render<SVGRadialGradientElement, O>, override?: Override<O, SVGRadialGradientElement>): Manifest<SVGRadialGradientElement, O> { return manifest(id, state, render, override, Svg.radialGradient) }
export function RxRect<O = void, S = void>(id: string, state: S, render: Render<SVGRectElement, O>, override?: Override<O, SVGRectElement>): Manifest<SVGRectElement, O> { return manifest(id, state, render, override, Svg.rect) }
export function RxText<O = void, S = void>(id: string, state: S, render: Render<SVGTextElement, O>, override?: Override<O, SVGTextElement>): Manifest<SVGTextElement, O> { return manifest(id, state, render, override, Svg.text) }
export function RxTextPath<O = void, S = void>(id: string, state: S, render: Render<SVGTextPathElement, O>, override?: Override<O, SVGTextPathElement>): Manifest<SVGTextPathElement, O> { return manifest(id, state, render, override, Svg.textPath) }
export function RxUse<O = void, S = void>(id: string, state: S, render: Render<SVGUseElement, O>, override?: Override<O, SVGUseElement>): Manifest<SVGUseElement, O> { return manifest(id, state, render, override, Svg.use) }
export function RxView<O = void, S = void>(id: string, state: S, render: Render<SVGViewElement, O>, override?: Override<O, SVGViewElement>): Manifest<SVGViewElement, O> { return manifest(id, state, render, override, Svg.view) }

export function svg(id: string, render: Render<SVGSVGElement> = nullRender): Manifest<SVGSVGElement> { return manifest(id, RenderWithParent, render, undefined, Svg.svg) }
export function svgLink(id: string, render: Render<SVGAElement> = nullRender): Manifest<SVGAElement> { return manifest(id, RenderWithParent, render, undefined, Svg.link) }
export function animate(id: string, render: Render<SVGAnimateElement> = nullRender): Manifest<SVGAnimateElement> { return manifest(id, RenderWithParent, render, undefined, Svg.animate) }
export function animateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender): Manifest<SVGAnimateMotionElement> { return manifest(id, RenderWithParent, render, undefined, Svg.animateMotion) }
export function animateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender): Manifest<SVGAnimateTransformElement> { return manifest(id, RenderWithParent, render, undefined, Svg.animateTransform) }
export function circle(id: string, render: Render<SVGCircleElement> = nullRender): Manifest<SVGCircleElement> { return manifest(id, RenderWithParent, render, undefined, Svg.circle) }
export function clipPath(id: string, render: Render<SVGClipPathElement> = nullRender): Manifest<SVGClipPathElement> { return manifest(id, RenderWithParent, render, undefined, Svg.clipPath) }
export function defs(id: string, render: Render<SVGDefsElement> = nullRender): Manifest<SVGDefsElement> { return manifest(id, RenderWithParent, render, undefined, Svg.defs) }
export function desc(id: string, render: Render<SVGDescElement> = nullRender): Manifest<SVGDescElement> { return manifest(id, RenderWithParent, render, undefined, Svg.desc) }
export function ellipse(id: string, render: Render<SVGEllipseElement> = nullRender): Manifest<SVGEllipseElement> { return manifest(id, RenderWithParent, render, undefined, Svg.ellipse) }
export function foreignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender): Manifest<SVGForeignObjectElement> { return manifest(id, RenderWithParent, render, undefined, Svg.foreignObject) }
export function g(id: string, render: Render<SVGGElement> = nullRender): Manifest<SVGGElement> { return manifest(id, RenderWithParent, render, undefined, Svg.g) }
export function svgImage(id: string, render: Render<SVGImageElement> = nullRender): Manifest<SVGImageElement> { return manifest(id, RenderWithParent, render, undefined, Svg.image) }
export function line(id: string, render: Render<SVGLineElement> = nullRender): Manifest<SVGLineElement> { return manifest(id, RenderWithParent, render, undefined, Svg.line) }
export function linearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender): Manifest<SVGLinearGradientElement> { return manifest(id, RenderWithParent, render, undefined, Svg.linearGradient) }
export function marker(id: string, render: Render<SVGMarkerElement> = nullRender): Manifest<SVGMarkerElement> { return manifest(id, RenderWithParent, render, undefined, Svg.marker) }
export function mask(id: string, render: Render<SVGMaskElement> = nullRender): Manifest<SVGMaskElement> { return manifest(id, RenderWithParent, render, undefined, Svg.mask) }
export function path(id: string, render: Render<SVGPathElement> = nullRender): Manifest<SVGPathElement> { return manifest(id, RenderWithParent, render, undefined, Svg.path) }
export function pattern(id: string, render: Render<SVGPatternElement> = nullRender): Manifest<SVGPatternElement> { return manifest(id, RenderWithParent, render, undefined, Svg.pattern) }
export function polygon(id: string, render: Render<SVGPolygonElement> = nullRender): Manifest<SVGPolygonElement> { return manifest(id, RenderWithParent, render, undefined, Svg.polygon) }
export function polyline(id: string, render: Render<SVGPolylineElement> = nullRender): Manifest<SVGPolylineElement> { return manifest(id, RenderWithParent, render, undefined, Svg.polyline) }
export function radialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender): Manifest<SVGRadialGradientElement> { return manifest(id, RenderWithParent, render, undefined, Svg.radialGradient) }
export function rect(id: string, render: Render<SVGRectElement> = nullRender): Manifest<SVGRectElement> { return manifest(id, RenderWithParent, render, undefined, Svg.rect) }
export function text(id: string, render: Render<SVGTextElement> = nullRender): Manifest<SVGTextElement> { return manifest(id, RenderWithParent, render, undefined, Svg.text) }
export function textPath(id: string, render: Render<SVGTextPathElement> = nullRender): Manifest<SVGTextPathElement> { return manifest(id, RenderWithParent, render, undefined, Svg.textPath) }
export function use(id: string, render: Render<SVGUseElement> = nullRender): Manifest<SVGUseElement> { return manifest(id, RenderWithParent, render, undefined, Svg.use) }
export function view(id: string, render: Render<SVGViewElement> = nullRender): Manifest<SVGViewElement> { return manifest(id, RenderWithParent, render, undefined, Svg.view) }

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
