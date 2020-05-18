import { createStore } from "redux"
import { reducer } from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import { initial } from "./states"

const globalStore = () => createStore(reducer, initial, composeWithDevTools())

export default globalStore
