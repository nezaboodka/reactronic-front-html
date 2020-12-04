// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { EventData } from './EventData'

export const SYM_EVENT_DATA: unique symbol = Symbol('eventData')

declare global {
  interface Element {
    eventData?: EventData
  }
}

const ElementType = global.Element

if (ElementType) {
  Object.defineProperty(ElementType.prototype, 'eventData', {
    configurable: false, enumerable: false,
    get(): unknown { return this[SYM_EVENT_DATA] },
    set(value: unknown) { this[SYM_EVENT_DATA] = value },
  })
}
