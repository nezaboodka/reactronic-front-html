// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Emitted, emit, RenderWithParent, Customize } from 'reactronic-front'
import { WebRtti } from './WebRtti'

function nullRender(e: HTMLElement): void { /* nop */ }

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
