// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE

import { Trigger, ToggleRef } from 'reactronic-front'

export function TwoWayFocusSync(
  id: string,
  target: HTMLElement,
  focusToggleRef: ToggleRef<any>,
  setNativeFocus?: (() => void)
): void {
  target.focusBinding = focusToggleRef
  if (setNativeFocus === undefined)
    setNativeFocus = () => target.focus()
  Trigger(id, { focusToggleRef }, (e, o, state) => {
    const active = state.focusToggleRef.value === state.focusToggleRef.value1
    // console.log(`${(entity as any).constructor.name}.${member.toString()} === ${entity[member]} => ${member}:${activeValue}.setFocused(${active}) // ${Reactronic.why()}`)
    active && setNativeFocus && setNativeFocus()
  })
}
