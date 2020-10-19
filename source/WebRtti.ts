// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reactronic } from 'reactronic'
import { render, unmount, Emitted, Rtti } from 'reactronic-front'

export function usingParent<T>(e: HTMLElement, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = WebElementRtti.current
  try {
    return func(...args)
  }
  finally {
    WebElementRtti.current = outer
  }
}

abstract class WebElementRtti<E extends Element> implements Rtti<E, any, any> {
  static isDebugAttributeEnabled: boolean = false

  constructor(
    readonly name: string,
    readonly sorting: boolean = false) {
  }

  render(e: Emitted<E, any, any>): void {
    const outer = WebElementRtti.current
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mounted = e.mounted! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const native = mounted.instance!.native!
      WebElementRtti.current = native // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}render(${e.id} r${ref.mounted!.cycle})`)
      render(e) // proceed
      WebElementRtti.blinkingEffect && blink(native, mounted.cycle)
      if (WebElementRtti.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${mounted.cycle}:    ${Reactronic.why()}`)
    }
    finally {
      WebElementRtti.current = outer
    }
  }

  mount(e: Emitted<E, any, any>, owner: Emitted, sibling?: Emitted): void {
    const parent = owner.mounted?.instance?.native as Element ?? WebElementRtti.current // TODO: To get rid of this workaround
    const native = this.createElement(e) // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    native.id = e.id // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.appendChild(${e.id} r${ref.mounted!.cycle})`)
    if (!owner.rtti.sorting) {
      if (sibling !== undefined) {
        const prev = sibling.mounted?.instance?.native
        if (prev instanceof Element)
          parent.insertBefore(native, prev.nextSibling)
      }
      else
        parent.insertBefore(native, parent.firstChild)
    }
    else
      parent.appendChild(native)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    e.mounted!.instance!.native = native
  }

  protected abstract createElement(e: Emitted<E, any, any>): E

  reorder(e: Emitted<E, any, any>, owner: Emitted, sibling?: Emitted): void {
    const parent = owner.mounted?.instance?.native as Element ?? WebElementRtti.current // TODO: To get rid of this workaround
    const prev = sibling?.mounted?.instance?.native
    const native = e.mounted?.instance?.native
    if (native && prev instanceof Element && prev.nextSibling !== native) { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.insertBefore(${(prev.nextSibling! as any)?.id})`)
      parent.insertBefore(native, prev.nextSibling)
    }
  }

  unmount(e: Emitted<E, any, any>, owner: Emitted, cause: Emitted): void {
    const native = e.mounted?.instance?.native
    if (!WebElementRtti.unmounting && native && native.parentElement) {
      WebElementRtti.unmounting = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${e.parentElement.id}.removeChild(${e.id} r${ref.mounted!.cycle})`)
        native.remove()
        unmount(e, owner, cause) // proceed
      }
      finally {
        WebElementRtti.unmounting = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}???.unmount(${ref.id} r${ref.mounted!.cycle})`)
      unmount(e, owner, cause) // proceed
    }
  }

  static current: Element = document.body
  static unmounting?: Element = undefined
  static blinkingEffect: string | undefined = undefined
}

function blink(e: Element, cycle: number): void {
  const n1 = cycle % 2 + 1
  const n2 = n1 % 2 + 1
  e.classList.toggle(`${WebElementRtti.blinkingEffect}-${n1}`, true)
  e.classList.toggle(`${WebElementRtti.blinkingEffect}-${n2}`, false)
}

export class WebRtti<E extends HTMLElement> extends WebElementRtti<E> {
  protected createElement(e: Emitted<E, any, any>): E {
    return document.createElement(e.rtti.name) as E
  }
}

export class WebSvgRtti<E extends SVGElement> extends WebElementRtti<E> {
  protected createElement(e: Emitted<E, any, any>): E {
    return document.createElementNS('http://www.w3.org/2000/svg', e.rtti.name) as E
  }
}
