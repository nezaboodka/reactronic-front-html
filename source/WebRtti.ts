// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE

import { Reactronic } from 'reactronic'
import { render, unmount, Token, Rtti } from 'reactronic-front'

// eslint-disable-next-line prefer-const
export let isDebugAttributeEnabled: boolean = false

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
  constructor(
    readonly name: string,
    readonly sorting: boolean = false) {
  }

  render(t: Token<E, any, any>): void {
    const outer = WebRtti.current
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mounted = t.mounted! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const e = mounted.instance!.native!
      WebRtti.current = e // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}render(${e.id} r${ref.mounted!.cycle})`)
      render(t) // proceed
      WebRtti.blinkingEffect && blink(e, mounted.cycle)
      if (isDebugAttributeEnabled)
        e.setAttribute('rdbg', `${mounted.cycle}:    ${Reactronic.why()}`)
    }
    finally {
      WebRtti.current = outer
    }
  }

  mount(t: Token<E, any, any>, owner: Token, sibling?: Token): void {
    const parent = owner.mounted?.instance?.native as HTMLElement ?? WebRtti.current // TODO: To get rid of this workaround
    const e = document.createElement(t.rtti.name) as E // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    e.id = t.id // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.appendChild(${e.id} r${ref.mounted!.cycle})`)
    if (!owner.rtti.sorting) {
      if (sibling !== undefined) {
        const prev = sibling.mounted?.instance?.native
        if (prev instanceof HTMLElement)
          parent.insertBefore(e, prev.nextSibling)
      }
      else
        parent.insertBefore(e, parent.firstChild)
    }
    else
      parent.appendChild(e)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    t.mounted!.instance!.native = e
  }

  reorder(t: Token<E, any, any>, owner: Token, sibling?: Token): void {
    const parent = owner.mounted?.instance?.native as HTMLElement ?? WebRtti.current // TODO: To get rid of this workaround
    const prev = sibling?.mounted?.instance?.native
    const e = t.mounted?.instance?.native
    if (e && prev instanceof HTMLElement && prev.nextSibling !== e) { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.insertBefore(${(prev.nextSibling! as any)?.id})`)
      parent.insertBefore(e, prev.nextSibling)
    }
  }

  unmount(t: Token<E, any, any>, owner: Token, cause: Token): void {
    const e = t.mounted?.instance?.native
    if (!WebRtti.unmounting && e && e.parentElement) {
      WebRtti.unmounting = e // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${e.parentElement.id}.removeChild(${e.id} r${ref.mounted!.cycle})`)
        e.remove()
        unmount(t, owner, cause) // proceed
      }
      finally {
        WebRtti.unmounting = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}???.unmount(${ref.id} r${ref.mounted!.cycle})`)
      unmount(t, owner, cause) // proceed
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
