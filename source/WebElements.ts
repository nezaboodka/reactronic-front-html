// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka-front-web/reactronic/master/LICENSE

import { Render, Token, emit, RenderWithParent, Customize } from 'reactronic-front'
import { WebRtti } from './WebRtti'

function nullRender(e: HTMLElement): void { /* nop */ }

export function HtmlDiv<O = void, S = void>(id: string, state: S, render: Render<HTMLDivElement, O, S>, customize?: Customize<O, HTMLDivElement, S>): Token<HTMLDivElement, O, S> { return emit(id, state, render, customize, Html.div) }
export function HtmlSpan<O = void, S = void>(id: string, state: S, render: Render<HTMLSpanElement, O, S>, customize?: Customize<O, HTMLSpanElement, S>): Token<HTMLSpanElement, O, S> { return emit(id, state, render, customize, Html.span) }
export function HtmlSection<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Token<HTMLElement, O, S> { return emit(id, state, render, customize, Html.section) }
export function HtmlNav<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Token<HTMLElement, O, S> { return emit(id, state, render, customize, Html.nav) }
export function HtmlLink<O = void, S = void>(id: string, state: S, render: Render<HTMLLinkElement, O, S>, customize?: Customize<O, HTMLLinkElement, S>): Token<HTMLLinkElement, O, S> { return emit(id, state, render, customize, Html.link) }
export function HtmlButton<O = void, S = void>(id: string, state: S, render: Render<HTMLButtonElement, O, S>, customize?: Customize<O, HTMLButtonElement, S>): Token<HTMLButtonElement, O, S> { return emit(id, state, render, customize, Html.button) }
export function HtmlImage<O = void, S = void>(id: string, state: S, render: Render<HTMLImageElement, O, S>, customize?: Customize<O, HTMLImageElement, S>): Token<HTMLImageElement, O, S> { return emit(id, state, render, customize, Html.image) }
export function HtmlInput<O = void, S = void>(id: string, state: S, render: Render<HTMLInputElement, O, S>, customize?: Customize<O, HTMLInputElement, S>): Token<HTMLInputElement, O, S> { return emit(id, state, render, customize, Html.input) }
export function HtmlSelect<O = void, S = void>(id: string, state: S, render: Render<HTMLSelectElement, O, S>, customize?: Customize<O, HTMLSelectElement, S>): Token<HTMLSelectElement, O, S> { return emit(id, state, render, customize, Html.select) }
export function HtmlOption<O = void, S = void>(id: string, state: S, render: Render<HTMLOptionElement, O, S>, customize?: Customize<O, HTMLOptionElement, S>): Token<HTMLOptionElement, O, S> { return emit(id, state, render, customize, Html.option) }
export function HtmlLabel<O = void, S = void>(id: string, state: S, render: Render<HTMLLabelElement, O, S>, customize?: Customize<O, HTMLLabelElement, S>): Token<HTMLLabelElement, O, S> { return emit(id, state, render, customize, Html.label) }
export function HtmlHeader<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Token<HTMLElement, O, S> { return emit(id, state, render, customize, Html.header) }
export function HtmlAudio<O = void, S = void>(id: string, state: S, render: Render<HTMLAudioElement, O, S>, customize?: Customize<O, HTMLAudioElement, S>): Token<HTMLAudioElement, O, S> { return emit(id, state, render, customize, Html.audio) }
export function HtmlVideo<O = void, S = void>(id: string, state: S, render: Render<HTMLVideoElement, O, S>, customize?: Customize<O, HTMLVideoElement, S>): Token<HTMLVideoElement, O, S> { return emit(id, state, render, customize, Html.video) }
export function HtmlIframe<O = void, S = void>(id: string, state: S, render: Render<HTMLIFrameElement, O, S>, customize?: Customize<O, HTMLIFrameElement, S>): Token<HTMLIFrameElement, O, S> { return emit(id, state, render, customize, Html.iframe) }
export function HtmlSource<O = void, S = void>(id: string, state: S, render: Render<HTMLSourceElement, O, S>, customize?: Customize<O, HTMLSourceElement, S>): Token<HTMLSourceElement, O, S> { return emit(id, state, render, customize, Html.source) }
export function HtmlI<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Token<HTMLElement, O, S> { return emit(id, state, render, customize, Html.i) }
export function HtmlB<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Token<HTMLElement, O, S> { return emit(id, state, render, customize, Html.b) }
export function HtmlU<O = void, S = void>(id: string, state: S, render: Render<HTMLElement, O, S>, customize?: Customize<O, HTMLElement, S>): Token<HTMLElement, O, S> { return emit(id, state, render, customize, Html.u) }
export function HtmlOL<O = void, S = void>(id: string, state: S, render: Render<HTMLOListElement, O, S>, customize?: Customize<O, HTMLOListElement, S>): Token<HTMLOListElement, O, S> { return emit(id, state, render, customize, Html.ol) }
export function HtmlUL<O = void, S = void>(id: string, state: S, render: Render<HTMLUListElement, O, S>, customize?: Customize<O, HTMLUListElement, S>): Token<HTMLUListElement, O, S> { return emit(id, state, render, customize, Html.ul) }
export function HtmlLI<O = void, S = void>(id: string, state: S, render: Render<HTMLLIElement, O, S>, customize?: Customize<O, HTMLLIElement, S>): Token<HTMLLIElement, O, S> { return emit(id, state, render, customize, Html.li) }
export function HtmlTR<O = void, S = void>(id: string, state: S, render: Render<HTMLTableRowElement, O, S>, customize?: Customize<O, HTMLTableRowElement, S>): Token<HTMLTableRowElement, O, S> { return emit(id, state, render, customize, Html.tr) }
export function HtmlTH<O = void, S = void>(id: string, state: S, render: Render<HTMLTableHeaderCellElement, O, S>, customize?: Customize<O, HTMLTableHeaderCellElement, S>): Token<HTMLTableHeaderCellElement, O, S> { return emit(id, state, render, customize, Html.th) }
export function HtmlTD<O = void, S = void>(id: string, state: S, render: Render<HTMLTableDataCellElement, O, S>, customize?: Customize<O, HTMLTableDataCellElement, S>): Token<HTMLTableDataCellElement, O, S> { return emit(id, state, render, customize, Html.td) }
export function HtmlCaption<O = void, S = void>(id: string, state: S, render: Render<HTMLTableCaptionElement, O, S>, customize?: Customize<O, HTMLTableCaptionElement, S>): Token<HTMLTableCaptionElement, O, S> { return emit(id, state, render, customize, Html.caption) }

export function div(id: string, render: Render<HTMLDivElement> = nullRender): Token<HTMLDivElement> { return emit(id, RenderWithParent, render, undefined, Html.div) }
export function span(id: string, render: Render<HTMLSpanElement> = nullRender): Token<HTMLSpanElement> { return emit(id, RenderWithParent, render, undefined, Html.span) }
export function section(id: string, render: Render<HTMLElement> = nullRender): Token<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.section) }
export function nav(id: string, render: Render<HTMLElement> = nullRender): Token<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.nav) }
export function link(id: string, render: Render<HTMLLinkElement> = nullRender): Token<HTMLLinkElement> { return emit(id, RenderWithParent, render, undefined, Html.link) }
export function button(id: string, render: Render<HTMLButtonElement> = nullRender): Token<HTMLButtonElement> { return emit(id, RenderWithParent, render, undefined, Html.button) }
export function img(id: string, render: Render<HTMLImageElement> = nullRender): Token<HTMLImageElement> { return emit(id, RenderWithParent, render, undefined, Html.image) }
export function input(id: string, render: Render<HTMLInputElement> = nullRender): Token<HTMLInputElement> { return emit(id, RenderWithParent, render, undefined, Html.input) }
export function select(id: string, render: Render<HTMLSelectElement> = nullRender): Token<HTMLSelectElement> { return emit(id, RenderWithParent, render, undefined, Html.select) }
export function option(id: string, render: Render<HTMLOptionElement> = nullRender): Token<HTMLOptionElement> { return emit(id, RenderWithParent, render, undefined, Html.option) }
export function label(id: string, render: Render<HTMLLabelElement> = nullRender): Token<HTMLLabelElement> { return emit(id, RenderWithParent, render, undefined, Html.label) }
export function header(id: string, render: Render<HTMLElement> = nullRender): Token<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.header) }
export function audio(id: string, render: Render<HTMLAudioElement> = nullRender): Token<HTMLAudioElement> { return emit(id, RenderWithParent, render, undefined, Html.audio) }
export function video(id: string, render: Render<HTMLVideoElement> = nullRender): Token<HTMLVideoElement> { return emit(id, RenderWithParent, render, undefined, Html.video) }
export function iframe(id: string, render: Render<HTMLIFrameElement> = nullRender): Token<HTMLIFrameElement> { return emit(id, RenderWithParent, render, undefined, Html.iframe) }
export function source(id: string, render: Render<HTMLSourceElement> = nullRender): Token<HTMLSourceElement> { return emit(id, RenderWithParent, render, undefined, Html.source) }
export function i(id: string, render: Render<HTMLElement> = nullRender): Token<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.i) }
export function b(id: string, render: Render<HTMLElement> = nullRender): Token<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.b) }
export function u(id: string, render: Render<HTMLElement> = nullRender): Token<HTMLElement> { return emit(id, RenderWithParent, render, undefined, Html.u) }
export function ol(id: string, render: Render<HTMLOListElement> = nullRender): Token<HTMLOListElement> { return emit(id, RenderWithParent, render, undefined, Html.ol) }
export function ul(id: string, render: Render<HTMLUListElement> = nullRender): Token<HTMLUListElement> { return emit(id, RenderWithParent, render, undefined, Html.ul) }
export function li(id: string, render: Render<HTMLLIElement> = nullRender): Token<HTMLLIElement> { return emit(id, RenderWithParent, render, undefined, Html.li) }
export function tr(id: string, render: Render<HTMLTableRowElement> = nullRender): Token<HTMLTableRowElement> { return emit(id, RenderWithParent, render, undefined, Html.tr) }
export function th(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender): Token<HTMLTableHeaderCellElement> { return emit(id, RenderWithParent, render, undefined, Html.th) }
export function td(id: string, render: Render<HTMLTableDataCellElement> = nullRender): Token<HTMLTableDataCellElement> { return emit(id, RenderWithParent, render, undefined, Html.td) }
export function caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender): Token<HTMLTableCaptionElement> { return emit(id, RenderWithParent, render, undefined, Html.caption) }

const Html = {
  div: new WebRtti<HTMLDivElement>('div'),
  span: new WebRtti<HTMLSpanElement>('span'),
  section: new WebRtti<HTMLElement>('section'),
  nav: new WebRtti<HTMLElement>('nav'),
  link: new WebRtti<HTMLLinkElement>('a'),
  button: new WebRtti<HTMLButtonElement>('button'),
  image: new WebRtti<HTMLImageElement>('img'),
  input: new WebRtti<HTMLInputElement>('input'),
  select: new WebRtti<HTMLSelectElement>('select'),
  option: new WebRtti<HTMLOptionElement>('option'),
  label: new WebRtti<HTMLLabelElement>('label'),
  header: new WebRtti<HTMLElement>('header'),
  audio: new WebRtti<HTMLAudioElement>('audio'),
  video: new WebRtti<HTMLVideoElement>('video'),
  iframe: new WebRtti<HTMLIFrameElement>('iframe'),
  source: new WebRtti<HTMLSourceElement>('source'),
  i: new WebRtti<HTMLElement>('i'),
  b: new WebRtti<HTMLElement>('b'),
  u: new WebRtti<HTMLElement>('u'),
  ol: new WebRtti<HTMLOListElement>('ol'),
  ul: new WebRtti<HTMLUListElement>('ul'),
  li: new WebRtti<HTMLLIElement>('li'),
  tr: new WebRtti<HTMLTableRowElement>('tr'),
  th: new WebRtti<HTMLTableHeaderCellElement>('th'),
  td: new WebRtti<HTMLTableDataCellElement>('td'),
  caption: new WebRtti<HTMLTableCaptionElement>('caption'),
}
