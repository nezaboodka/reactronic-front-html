// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE

export const SYM_BINDING: unique symbol = Symbol('binding')
export const SYM_FOCUS_BINDING: unique symbol = Symbol('focusBinding')
export const SYM_HOVER_BINDING: unique symbol = Symbol('hoverBinding')
// export const SYM_DRAGGING_BINDING: unique symbol = Symbol('draggingBinding')

declare global {

  interface Element {
    binding: unknown
    focusBinding: unknown
    hoverBinding: unknown
    // draggingBinding: unknown
  }
}

Object.defineProperty(Element.prototype, 'binding', {
  configurable: false, enumerable: false,
  get(): unknown { return this[SYM_BINDING] },
  set(value: unknown) { this[SYM_BINDING] = value },
})

Object.defineProperty(Element.prototype, 'focusBinding', {
  configurable: false, enumerable: false,
  get(): unknown { return this[SYM_FOCUS_BINDING] },
  set(value: unknown) { this[SYM_FOCUS_BINDING] = value },
})

Object.defineProperty(Element.prototype, 'hoverBinding', {
  configurable: false, enumerable: false,
  get(): unknown { return this[SYM_HOVER_BINDING] },
  set(value: unknown) { this[SYM_HOVER_BINDING] = value },
})

// Object.defineProperty(Element.prototype, 'draggingBinding', {
//   configurable: false, enumerable: false,
//   get(): unknown { return this[SYM_DRAGGING_BINDING] },
//   set(value: unknown) { this[SYM_DRAGGING_BINDING] = value }
// })
