// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export const SYM_EVENT_DATA: unique symbol = Symbol('eventData')
export const SYM_FOCUS_EVENT_DATA: unique symbol = Symbol('focusEventData')
export const SYM_HOVER_EVENT_DATA: unique symbol = Symbol('hoverEventData')
// export const SYM_DRAGGING_EVENT_DATA: unique symbol = Symbol('draggingEventData')

declare global {

  interface Element {
    eventData: unknown
    focusEventData: unknown
    hoverEventData: unknown
    // draggingEventData: unknown
  }
}

const ElementType = global.Element

if (ElementType) {
  Object.defineProperty(ElementType.prototype, 'eventData', {
    configurable: false, enumerable: false,
    get(): unknown { return this[SYM_EVENT_DATA] },
    set(value: unknown) { this[SYM_EVENT_DATA] = value },
  })

  Object.defineProperty(ElementType.prototype, 'focusEventData', {
    configurable: false, enumerable: false,
    get(): unknown { return this[SYM_FOCUS_EVENT_DATA] },
    set(value: unknown) { this[SYM_FOCUS_EVENT_DATA] = value },
  })

  Object.defineProperty(ElementType.prototype, 'hoverEventData', {
    configurable: false, enumerable: false,
    get(): unknown { return this[SYM_HOVER_EVENT_DATA] },
    set(value: unknown) { this[SYM_HOVER_EVENT_DATA] = value },
  })

  // Object.defineProperty(ElementType.prototype, 'draggingEventData', {
  //   configurable: false, enumerable: false,
  //   get(): unknown { return this[SYM_DRAGGING_EVENT_DATA] },
  //   set(value: unknown) { this[SYM_DRAGGING_EVENT_DATA] = value }
  // })
}
