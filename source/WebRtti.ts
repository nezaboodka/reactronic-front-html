// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reactronic } from 'reactronic'
import { render, unmount, Emitted, Rtti } from 'reactronic-front'

export function usingParent<T>(e: HTMLElement, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = WebRtti.current
  try {
    return func(...args)
  }
  finally {
    WebRtti.current = outer
  }
}

export class WebRtti<E extends HTMLElement> implements Rtti<E, any, any> {
  static isDebugAttributeEnabled: boolean = false

  constructor(
    readonly name: string,
    readonly sorting: boolean = false) {
  }

  render(e: Emitted<E, any, any>): void {
    const outer = WebRtti.current
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mounted = e.mounted! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const native = mounted.instance!.native!
      WebRtti.current = native // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}render(${e.id} r${ref.mounted!.cycle})`)
      render(e) // proceed
      WebRtti.blinkingEffect && blink(native, mounted.cycle)
      if (WebRtti.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${mounted.cycle}:    ${Reactronic.why()}`)
    }
    finally {
      WebRtti.current = outer
    }
  }

  mount(e: Emitted<E, any, any>, owner: Emitted, sibling?: Emitted): void {
    const parent = owner.mounted?.instance?.native as HTMLElement ?? WebRtti.current // TODO: To get rid of this workaround
    const native = document.createElement(e.rtti.name) as E // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    native.id = e.id // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.appendChild(${e.id} r${ref.mounted!.cycle})`)
    if (!owner.rtti.sorting) {
      if (sibling !== undefined) {
        const prev = sibling.mounted?.instance?.native
        if (prev instanceof HTMLElement)
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

  reorder(e: Emitted<E, any, any>, owner: Emitted, sibling?: Emitted): void {
    const parent = owner.mounted?.instance?.native as HTMLElement ?? WebRtti.current // TODO: To get rid of this workaround
    const prev = sibling?.mounted?.instance?.native
    const native = e.mounted?.instance?.native
    if (native && prev instanceof HTMLElement && prev.nextSibling !== native) { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.insertBefore(${(prev.nextSibling! as any)?.id})`)
      parent.insertBefore(native, prev.nextSibling)
    }
  }

  unmount(e: Emitted<E, any, any>, owner: Emitted, cause: Emitted): void {
    const native = e.mounted?.instance?.native
    if (!WebRtti.unmounting && native && native.parentElement) {
      WebRtti.unmounting = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${e.parentElement.id}.removeChild(${e.id} r${ref.mounted!.cycle})`)
        native.remove()
        unmount(e, owner, cause) // proceed
      }
      finally {
        WebRtti.unmounting = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}???.unmount(${ref.id} r${ref.mounted!.cycle})`)
      unmount(e, owner, cause) // proceed
    }
  }

  static current: HTMLElement = document.body
  static unmounting?: HTMLElement = undefined
  static blinkingEffect: string | undefined = undefined
}

function blink(e: HTMLElement, cycle: number): void {
  const n1 = cycle % 2 + 1
  const n2 = n1 % 2 + 1
  e.classList.toggle(`${WebRtti.blinkingEffect}-${n1}`, true)
  e.classList.toggle(`${WebRtti.blinkingEffect}-${n2}`, false)
}
