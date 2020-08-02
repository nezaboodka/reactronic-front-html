// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka-front-web/reactronic/master/LICENSE

import { transaction, logging, LogLevel, stateless } from 'reactronic'
import * as UI from 'reactronic-front'
import { SYM_FOCUS_BINDING, SYM_BINDING, SYM_HOVER_BINDING } from './WebApiExt'

export class WebInputDevices extends UI.InputDevices {
  @stateless currentEvent: Event | undefined = undefined
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

  @transaction
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

  @transaction @logging(LogLevel.Suppress)
  resetFocus(): void {
    this.trackFocus(this.element?.focusBinding ? [this.element.focusBinding] : [], true)
    this.element?.focus()
  }

  @transaction @logging(LogLevel.Suppress)
  onFocusIn(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusIn(
      UI.grabBindings(path, SYM_FOCUS_BINDING, this.context.focus))
  }

  @transaction @logging(LogLevel.Suppress)
  onFocusOut(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusOut(
      UI.grabBindings(path, SYM_FOCUS_BINDING, this.context.focus))
  }

  @transaction @logging(LogLevel.Suppress)
  onPointerOver(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerOver(
      UI.grabBindings(path, SYM_BINDING, this.pointer.bindings),
      UI.grabBindings(path, SYM_HOVER_BINDING, this.context.hover),
      e.clientX, e.clientY)
  }

  @transaction @logging(LogLevel.Suppress)
  onPointerMove(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerMove(
      UI.grabBindings(path, SYM_BINDING, this.pointer.bindings),
      e.pointerId, e.clientX, e.clientY)
  }

  @transaction @logging(LogLevel.Suppress)
  onPointerDown(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerDown(
      UI.grabBindings(path, SYM_BINDING, this.pointer.bindings),
      UI.grabBindings(path, SYM_FOCUS_BINDING, this.context.focus),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @logging(LogLevel.Suppress)
  onPointerUp(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerUp(
      UI.grabBindings(path, SYM_BINDING, this.pointer.bindings),
      UI.grabBindings(path, SYM_FOCUS_BINDING, this.context.focus),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @logging(LogLevel.Suppress)
  onDblClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDblClick(
      UI.grabBindings(path, SYM_BINDING, this.pointer.bindings),
      UI.grabBindings(path, SYM_FOCUS_BINDING, this.context.focus),
      e.buttons, e.clientX, e.clientY)
  }

  @transaction @logging(LogLevel.Suppress)
  onTouchStart(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchStart(
      UI.grabBindings(path, SYM_BINDING, this.pointer.bindings),
      UI.grabBindings(path, SYM_FOCUS_BINDING, this.context.focus))
  }

  @transaction @logging(LogLevel.Suppress)
  onTouchEnd(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchEnd(
      UI.grabBindings(path, SYM_BINDING, this.pointer.bindings))
  }

  @transaction @logging(LogLevel.Suppress)
  onWheel(e: WheelEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doWheel(
      UI.grabBindings(path, SYM_BINDING, this.scroll.bindings),
      UI.grabBindings(path, SYM_FOCUS_BINDING, this.context.focus),
      e.deltaX, e.deltaY, e.clientX, e.clientY)
  }

  @transaction @logging(LogLevel.Suppress)
  onKeyDown(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyDown(
      UI.grabBindings(path, SYM_BINDING, this.keyboard.bindings), e.key)
  }

  @transaction @logging(LogLevel.Suppress)
  onKeyUp(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyUp(
      UI.grabBindings(path, SYM_BINDING, this.keyboard.bindings), e.key)
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
