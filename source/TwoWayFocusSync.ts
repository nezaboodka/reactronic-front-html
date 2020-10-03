// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE

import { BoolRef, Ref } from 'reactronic'
import { Trigger } from 'reactronic-front'

export function TwoWayFocusSync(
  id: string,
  target: HTMLElement,
  focusToggleRef: BoolRef<any>,
  setNativeFocus?: (() => void)
): void {
  target.focusBinding = focusToggleRef
  if (setNativeFocus === undefined)
    setNativeFocus = () => target.focus()
  Trigger(id, { focusToggleRef }, (e, o, state) => {
    const v = state.focusToggleRef.deref
    const v1 = state.focusToggleRef.value1
    const active = v === state.focusToggleRef.value1 || (
      v instanceof Ref && v1 instanceof Ref && Ref.sameRefs(v, v1))
    // console.log(`${(entity as any).constructor.name}.${member.toString()} === ${entity[member]} => ${member}:${activeValue}.setFocused(${active}) // ${Reactronic.why()}`)
    active && setNativeFocus && setNativeFocus()
  })
}
