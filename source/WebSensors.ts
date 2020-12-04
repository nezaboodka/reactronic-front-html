// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { transactional, trace, TraceLevel, unobservable } from 'reactronic'
import { Sensors, EventData, EventDataPayload, EventDataPrimacy } from 'reactronic-front'
import { SYM_EVENT_DATA } from './WebApiExt'

export class WebSensors extends Sensors {
  @unobservable currentEvent: Event | undefined = undefined
  element?: HTMLElement | null

  constructor() {
    super()
    this.element = undefined
  }

  preventDefault(): void {
    if (this.currentEvent !== undefined)
      this.currentEvent.preventDefault()
  }

  stopPropagation(): void {
    if (this.currentEvent !== undefined)
      this.currentEvent.stopPropagation()
  }

  @transactional
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.element
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('focusin', this.onFocusIn, true)
        existing.removeEventListener('focusout', this.onFocusOut, true)
        existing.removeEventListener('pointermove', this.onPointerMove, false)
        existing.removeEventListener('pointerdown', this.onPointerDown, false)
        existing.removeEventListener('pointerup', this.onPointerUp, false)
        existing.removeEventListener('dblclick', this.onDblClick, false)
        existing.removeEventListener('touchstart', this.onTouchStart, false)
        existing.removeEventListener('touchend', this.onTouchEnd, false)
        existing.removeEventListener('wheel', this.onWheel, false)
        existing.removeEventListener('keydown', this.onKeyDown, true)
        existing.removeEventListener('keyup', this.onKeyUp, true)
      }
      this.element = element
      if (element && enabled) {
        element.addEventListener('focusin', this.onFocusIn, true)
        element.addEventListener('focusout', this.onFocusOut, true)
        element.addEventListener('pointerover', this.onPointerOver, false)
        element.addEventListener('pointermove', this.onPointerMove, false)
        element.addEventListener('pointerdown', this.onPointerDown, false)
        element.addEventListener('pointerup', this.onPointerUp, false)
        element.addEventListener('dblclick', this.onDblClick, false)
        element.addEventListener('touchstart', this.onTouchStart, false)
        element.addEventListener('touchend', this.onTouchEnd, false)
        element.addEventListener('wheel', this.onWheel, false)
        element.addEventListener('keydown', this.onKeyDown, true)
        element.addEventListener('keyup', this.onKeyUp, true)
      }
    }
  }

  @transactional @trace(TraceLevel.Suppress)
  resetFocus(): void {
    const eventData = this.element?.eventData?.focus
    this.trackFocus(eventData ? [eventData] : [], true)
    this.element?.focus()
  }

  @transactional @trace(TraceLevel.Suppress)
  onFocusIn(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusIn(
      grabEventDataMix(path, SYM_EVENT_DATA, 'focus', 'focusPrimacy', this.focus.eventDataMix))
  }

  @transactional @trace(TraceLevel.Suppress)
  onFocusOut(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusOut(
      grabEventDataMix(path, SYM_EVENT_DATA, 'focus', 'focusPrimacy', this.focus.eventDataMix))
  }

  @transactional @trace(TraceLevel.Suppress)
  onPointerOver(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerOver(
      grabEventDataMix(path, SYM_EVENT_DATA, 'pointer', 'pointerPrimacy', this.pointer.eventDataMix),
      grabEventDataMix(path, SYM_EVENT_DATA, 'hover', 'hoverPrimacy', this.hover.eventDataMix),
      e.clientX, e.clientY)
  }

  @transactional @trace(TraceLevel.Suppress)
  onPointerMove(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerMove(
      grabEventDataMix(path, SYM_EVENT_DATA, 'pointer', 'pointerPrimacy', this.pointer.eventDataMix),
      e.pointerId, e.clientX, e.clientY)
  }

  @transactional @trace(TraceLevel.Suppress)
  onPointerDown(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerDown(
      grabEventDataMix(path, SYM_EVENT_DATA, 'pointer', 'pointerPrimacy', this.pointer.eventDataMix),
      grabEventDataMix(path, SYM_EVENT_DATA, 'focus', 'focusPrimacy', this.focus.eventDataMix),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transactional @trace(TraceLevel.Suppress)
  onPointerUp(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerUp(
      grabEventDataMix(path, SYM_EVENT_DATA, 'pointer', 'pointerPrimacy', this.pointer.eventDataMix),
      grabEventDataMix(path, SYM_EVENT_DATA, 'focus', 'focusPrimacy', this.focus.eventDataMix),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transactional @trace(TraceLevel.Suppress)
  onDblClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDblClick(
      grabEventDataMix(path, SYM_EVENT_DATA, 'pointer', 'pointerPrimacy', this.pointer.eventDataMix),
      grabEventDataMix(path, SYM_EVENT_DATA, 'focus', 'focusPrimacy', this.focus.eventDataMix),
      e.buttons, e.clientX, e.clientY)
  }

  @transactional @trace(TraceLevel.Suppress)
  onTouchStart(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchStart(
      grabEventDataMix(path, SYM_EVENT_DATA, 'pointer', 'pointerPrimacy', this.pointer.eventDataMix),
      grabEventDataMix(path, SYM_EVENT_DATA, 'focus', 'focusPrimacy', this.focus.eventDataMix))
  }

  @transactional @trace(TraceLevel.Suppress)
  onTouchEnd(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchEnd(
      grabEventDataMix(path, SYM_EVENT_DATA, 'pointer', 'pointerPrimacy', this.pointer.eventDataMix))
  }

  @transactional @trace(TraceLevel.Suppress)
  onWheel(e: WheelEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doWheel(
      grabEventDataMix(path, SYM_EVENT_DATA, 'scroll', 'scrollPrimacy', this.scroll.eventDataMix),
      grabEventDataMix(path, SYM_EVENT_DATA, 'focus', 'focusPrimacy', this.focus.eventDataMix),
      e.deltaX, e.deltaY, e.clientX, e.clientY)
  }

  @transactional @trace(TraceLevel.Suppress)
  onKeyDown(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyDown(
      grabEventDataMix(path, SYM_EVENT_DATA, 'keyboard', 'keyboardPrimacy', this.keyboard.eventDataMix), e.key)
  }

  @transactional @trace(TraceLevel.Suppress)
  onKeyUp(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyUp(
      grabEventDataMix(path, SYM_EVENT_DATA, 'keyboard', 'keyboardPrimacy', this.keyboard.eventDataMix), e.key)
  }

  protected setPointerCapture(pointerId: number): boolean {
    this.element?.setPointerCapture(pointerId)
    return this.element instanceof HTMLElement
  }

  protected releasePointerCapture(pointerId: number): boolean {
    this.element?.releasePointerCapture(pointerId)
    return false
  }
}

export function grabEventDataMix<T = unknown>(path: any[], sym: symbol,
  dataKey: keyof EventDataPayload, primacyKey: keyof EventDataPrimacy,
  existing: Array<T>): T[] {
  let result = existing
  let i = 0
  let j = 0
  while (i < path.length) {
    const item = path[i][sym] as EventData | undefined
    if (item !== undefined) {
      const d = item[dataKey] as T | undefined
      if (d !== undefined) {
        if (result !== existing)
          result.push(d)
        else if (d !== existing[j])
          result = existing.slice(0, j), result.push(d)
        else
          j++
      }
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = []
  return result
}
