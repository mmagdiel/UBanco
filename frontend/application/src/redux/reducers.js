import { INCREMENT } from "./types"
import { initialCount } from "./states"

export const countReducer = (state = initialCount, { type }) => {
  if (type === INCREMENT) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}
