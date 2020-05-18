import { INCREMENT } from "./types"
import { initialCount } from "./states"

export const countReducer = (state = initialCount, { type, payload }) => {
  if (type === INCREMENT) {
    return {
      ...state,
      amount: payload,
    }
  }
  return state
}
