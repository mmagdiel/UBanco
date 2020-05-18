import { INCREMENT, SETEMAIL, SETPASSWORD } from "./types"

export const setAmount = payload => {
  return {
    type: INCREMENT,
    payload,
  }
}

export const setEmail = payload => {
  return {
    type: SETEMAIL,
    payload,
  }
}

export const setPassword = payload => {
  return {
    type: SETPASSWORD,
    payload,
  }
}
