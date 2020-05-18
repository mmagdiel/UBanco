import { INCREMENT, SETEMAIL, SETPASSWORD } from "./types"
import { initial } from "./states"

export const reducer = (state = initial, { type, payload }) => {
  if (type === INCREMENT) {
    return {
      ...state,
      amount: payload,
    }
  }
  if (type === SETEMAIL) {
    return {
      ...state,
      email: payload,
    }
  }
  if (type === SETPASSWORD) {
    return {
      ...state,
      password: payload,
    }
  }
  return state
}
