// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Manifest, manifest, RenderWithParent, Customize } from 'reactronic-front'
import { HtmlRtti, SvgRtti } from './WebRtti'

function nullRender(e: Element): void { /* nop */ }

export function RxDiv<O = void, S = void>(id: string, state: S, render: Render<HTMLDivElement, O, S>, customize?: Customize<O, HTMLDivElement, S>): Manifest<HTMLDivElement, O, S> { return manifest(id, state, render, customize, Html.div) }
export function RxSpan<O = void, S = void>(id: string, state: S, render: Render<HTMLSpanElement, O, S>, customize?: Customize<O, HTMLSpanElement, S>): Manifest<HTMLSpanElement, O, S> { return manifest(id, state, render, customize, Html.span) }
export function RxSection<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Manifest<HTMLElement, O, S> { return manifest(id, state, render, customize, Html.section) }
export function RxNav<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Manifest<HTMLElement, O, S> { return manifest(id, state, render, customize, Html.nav) }
export function RxLink<O = void, S = void>(id: string, state: S, render: Render<HTMLLinkElement, O, S>, customize?: Customize<O, HTMLLinkElement, S>): Manifest<HTMLLinkElement, O, S> { return manifest(id, state, render, customize, Html.link) }
export function RxButton<O = void, S = void>(id: string, state: S, render: Render<HTMLButtonElement, O, S>, customize?: Customize<O, HTMLButtonElement, S>): Manifest<HTMLButtonElement, O, S> { return manifest(id, state, render, customize, Html.button) }
export function RxImage<O = void, S = void>(id: string, state: S, render: Render<HTMLImageElement, O, S>, customize?: Customize<O, HTMLImageElement, S>): Manifest<HTMLImageElement, O, S> { return manifest(id, state, render, customize, Html.image) }
export function RxInput<O = void, S = void>(id: string, state: S, render: Render<HTMLInputElement, O, S>, customize?: Customize<O, HTMLInputElement, S>): Manifest<HTMLInputElement, O, S> { return manifest(id, state, render, customize, Html.input) }
export function RxSelect<O = void, S = void>(id: string, state: S, render: Render<HTMLSelectElement, O, S>, customize?: Customize<O, HTMLSelectElement, S>): Manifest<HTMLSelectElement, O, S> { return manifest(id, state, render, customize, Html.select) }
export function RxOption<O = void, S = void>(id: string, state: S, render: Render<HTMLOptionElement, O, S>, customize?: Customize<O, HTMLOptionElement, S>): Manifest<HTMLOptionElement, O, S> { return manifest(id, state, render, customize, Html.option) }
export function RxLabel<O = void, S = void>(id: string, state: S, render: Render<HTMLLabelElement, O, S>, customize?: Customize<O, HTMLLabelElement, S>): Manifest<HTMLLabelElement, O, S> { return manifest(id, state, render, customize, Html.label) }
export function RxHeader<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Manifest<HTMLElement, O, S> { return manifest(id, state, render, customize, Html.header) }
export function RxAudio<O = void, S = void>(id: string, state: S, render: Render<HTMLAudioElement, O, S>, customize?: Customize<O, HTMLAudioElement, S>): Manifest<HTMLAudioElement, O, S> { return manifest(id, state, render, customize, Html.audio) }
export function RxVideo<O = void, S = void>(id: string, state: S, render: Render<HTMLVideoElement, O, S>, customize?: Customize<O, HTMLVideoElement, S>): Manifest<HTMLVideoElement, O, S> { return manifest(id, state, render, customize, Html.video) }
export function RxIframe<O = void, S = void>(id: string, state: S, render: Render<HTMLIFrameElement, O, S>, customize?: Customize<O, HTMLIFrameElement, S>): Manifest<HTMLIFrameElement, O, S> { return manifest(id, state, render, customize, Html.iframe) }
export function RxSource<O = void, S = void>(id: string, state: S, render: Render<HTMLSourceElement, O, S>, customize?: Customize<O, HTMLSourceElement, S>): Manifest<HTMLSourceElement, O, S> { return manifest(id, state, render, customize, Html.source) }
export function RxI<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Manifest<HTMLElement, O, S> { return manifest(id, state, render, customize, Html.i) }
export function RxB<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Manifest<HTMLElement, O, S> { return manifest(id, state, render, customize, Html.b) }
export function RxU<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Manifest<HTMLElement, O, S> { return manifest(id, state, render, customize, Html.u) }
export function RxOL<O = void, S = void>(id: string, state: S, render: Render<HTMLOListElement, O, S>, customize?: Customize<O, HTMLOListElement, S>): Manifest<HTMLOListElement, O, S> { return manifest(id, state, render, customize, Html.ol) }
export function RxUL<O = void, S = void>(id: string, state: S, render: Render<HTMLUListElement, O, S>, customize?: Customize<O, HTMLUListElement, S>): Manifest<HTMLUListElement, O, S> { return manifest(id, state, render, customize, Html.ul) }
export function RxLI<O = void, S = void>(id: string, state: S, render: Render<HTMLLIElement, O, S>, customize?: Customize<O, HTMLLIElement, S>): Manifest<HTMLLIElement, O, S> { return manifest(id, state, render, customize, Html.li) }
export function RxTR<O = void, S = void>(id: string, state: S, render: Render<HTMLTableRowElement, O, S>, customize?: Customize<O, HTMLTableRowElement, S>): Manifest<HTMLTableRowElement, O, S> { return manifest(id, state, render, customize, Html.tr) }
export function RxTH<O = void, S = void>(id: string, state: S, render: Render<HTMLTableHeaderCellElement, O, S>, customize?: Customize<O, HTMLTableHeaderCellElement, S>): Manifest<HTMLTableHeaderCellElement, O, S> { return manifest(id, state, render, customize, Html.th) }
export function RxTD<O = void, S = void>(id: string, state: S, render: Render<HTMLTableDataCellElement, O, S>, customize?: Customize<O, HTMLTableDataCellElement, S>): Manifest<HTMLTableDataCellElement, O, S> { return manifest(id, state, render, customize, Html.td) }
export function RxCaption<O = void, S = void>(id: string, state: S, render: Render<HTMLTableCaptionElement, O, S>, customize?: Customize<O, HTMLTableCaptionElement, S>): Manifest<HTMLTableCaptionElement, O, S> { return manifest(id, state, render, customize, Html.caption) }

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

export function RxSvg<O = void, S = void>(id: string, state: S, render: Render<SVGSVGElement, O, S>, customize?: Customize<O, SVGSVGElement, S>): Manifest<SVGSVGElement, O, S> { return manifest(id, state, render, customize, Svg.svg) }
export function RxSvgLink<O = void, S = void>(id: string, state: S, render: Render<SVGAElement, O, S>, customize?: Customize<O, SVGAElement, S>): Manifest<SVGAElement, O, S> { return manifest(id, state, render, customize, Svg.link) }
export function RxAnimate<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateElement, O, S>, customize?: Customize<O, SVGAnimateElement, S>): Manifest<SVGAnimateElement, O, S> { return manifest(id, state, render, customize, Svg.animate) }
export function RxAnimateMotion<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateMotionElement, O, S>, customize?: Customize<O, SVGAnimateMotionElement, S>): Manifest<SVGAnimateMotionElement, O, S> { return manifest(id, state, render, customize, Svg.animateMotion) }
export function RxAnimateTransform<O = void, S = void>(id: string, state: S, render: Render<SVGAnimateTransformElement, O, S>, customize?: Customize<O, SVGAnimateTransformElement, S>): Manifest<SVGAnimateTransformElement, O, S> { return manifest(id, state, render, customize, Svg.animateTransform) }
export function RxCircle<O = void, S = void>(id: string, state: S, render: Render<SVGCircleElement, O, S>, customize?: Customize<O, SVGCircleElement, S>): Manifest<SVGCircleElement, O, S> { return manifest(id, state, render, customize, Svg.circle) }
export function RxClipPath<O = void, S = void>(id: string, state: S, render: Render<SVGClipPathElement, O, S>, customize?: Customize<O, SVGClipPathElement, S>): Manifest<SVGClipPathElement, O, S> { return manifest(id, state, render, customize, Svg.clipPath) }
export function RxDefs<O = void, S = void>(id: string, state: S, render: Render<SVGDefsElement, O, S>, customize?: Customize<O, SVGDefsElement, S>): Manifest<SVGDefsElement, O, S> { return manifest(id, state, render, customize, Svg.defs) }
export function RxDesc<O = void, S = void>(id: string, state: S, render: Render<SVGDescElement, O, S>, customize?: Customize<O, SVGDescElement, S>): Manifest<SVGDescElement, O, S> { return manifest(id, state, render, customize, Svg.desc) }
export function RxEllipse<O = void, S = void>(id: string, state: S, render: Render<SVGEllipseElement, O, S>, customize?: Customize<O, SVGEllipseElement, S>): Manifest<SVGEllipseElement, O, S> { return manifest(id, state, render, customize, Svg.ellipse) }
export function RxForeignObject<O = void, S = void>(id: string, state: S, render: Render<SVGForeignObjectElement, O, S>, customize?: Customize<O, SVGForeignObjectElement, S>): Manifest<SVGForeignObjectElement, O, S> { return manifest(id, state, render, customize, Svg.foreignObject) }
export function RxG<O = void, S = void>(id: string, state: S, render: Render<SVGGElement, O, S>, customize?: Customize<O, SVGGElement, S>): Manifest<SVGGElement, O, S> { return manifest(id, state, render, customize, Svg.g) }
export function RxSvgImage<O = void, S = void>(id: string, state: S, render: Render<SVGImageElement, O, S>, customize?: Customize<O, SVGImageElement, S>): Manifest<SVGImageElement, O, S> { return manifest(id, state, render, customize, Svg.image) }
export function RxLine<O = void, S = void>(id: string, state: S, render: Render<SVGLineElement, O, S>, customize?: Customize<O, SVGLineElement, S>): Manifest<SVGLineElement, O, S> { return manifest(id, state, render, customize, Svg.line) }
export function RxLinearGradient<O = void, S = void>(id: string, state: S, render: Render<SVGLinearGradientElement, O, S>, customize?: Customize<O, SVGLinearGradientElement, S>): Manifest<SVGLinearGradientElement, O, S> { return manifest(id, state, render, customize, Svg.linearGradient) }
export function RxMarker<O = void, S = void>(id: string, state: S, render: Render<SVGMarkerElement, O, S>, customize?: Customize<O, SVGMarkerElement, S>): Manifest<SVGMarkerElement, O, S> { return manifest(id, state, render, customize, Svg.marker) }
export function RxMask<O = void, S = void>(id: string, state: S, render: Render<SVGMaskElement, O, S>, customize?: Customize<O, SVGMaskElement, S>): Manifest<SVGMaskElement, O, S> { return manifest(id, state, render, customize, Svg.mask) }
export function RxPath<O = void, S = void>(id: string, state: S, render: Render<SVGPathElement, O, S>, customize?: Customize<O, SVGPathElement, S>): Manifest<SVGPathElement, O, S> { return manifest(id, state, render, customize, Svg.path) }
export function RxPattern<O = void, S = void>(id: string, state: S, render: Render<SVGPatternElement, O, S>, customize?: Customize<O, SVGPatternElement, S>): Manifest<SVGPatternElement, O, S> { return manifest(id, state, render, customize, Svg.pattern) }
export function RxPolygon<O = void, S = void>(id: string, state: S, render: Render<SVGPolygonElement, O, S>, customize?: Customize<O, SVGPolygonElement, S>): Manifest<SVGPolygonElement, O, S> { return manifest(id, state, render, customize, Svg.polygon) }
export function RxPolyline<O = void, S = void>(id: string, state: S, render: Render<SVGPolylineElement, O, S>, customize?: Customize<O, SVGPolylineElement, S>): Manifest<SVGPolylineElement, O, S> { return manifest(id, state, render, customize, Svg.polyline) }
export function RxRadialGradient<O = void, S = void>(id: string, state: S, render: Render<SVGRadialGradientElement, O, S>, customize?: Customize<O, SVGRadialGradientElement, S>): Manifest<SVGRadialGradientElement, O, S> { return manifest(id, state, render, customize, Svg.radialGradient) }
export function RxRect<O = void, S = void>(id: string, state: S, render: Render<SVGRectElement, O, S>, customize?: Customize<O, SVGRectElement, S>): Manifest<SVGRectElement, O, S> { return manifest(id, state, render, customize, Svg.rect) }
export function RxText<O = void, S = void>(id: string, state: S, render: Render<SVGTextElement, O, S>, customize?: Customize<O, SVGTextElement, S>): Manifest<SVGTextElement, O, S> { return manifest(id, state, render, customize, Svg.text) }
export function RxTextPath<O = void, S = void>(id: string, state: S, render: Render<SVGTextPathElement, O, S>, customize?: Customize<O, SVGTextPathElement, S>): Manifest<SVGTextPathElement, O, S> { return manifest(id, state, render, customize, Svg.textPath) }
export function RxUse<O = void, S = void>(id: string, state: S, render: Render<SVGUseElement, O, S>, customize?: Customize<O, SVGUseElement, S>): Manifest<SVGUseElement, O, S> { return manifest(id, state, render, customize, Svg.use) }
export function RxView<O = void, S = void>(id: string, state: S, render: Render<SVGViewElement, O, S>, customize?: Customize<O, SVGViewElement, S>): Manifest<SVGViewElement, O, S> { return manifest(id, state, render, customize, Svg.view) }

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
