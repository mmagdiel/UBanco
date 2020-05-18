import { INCREMENT } from "./types"

export const setAmount = payload => {
  console.log(payload)
  return {
    type: INCREMENT,
    payload,
  }
}
