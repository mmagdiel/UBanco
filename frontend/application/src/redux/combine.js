import { createStore } from "redux"
import { countReducer } from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"

const globalStore = () => createStore(countReducer, composeWithDevTools())

export default globalStore
