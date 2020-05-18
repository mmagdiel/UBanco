import { createStore } from "redux"
import { initialCount } from "./states"
import { countReducer } from "./reducers"

const globalStore = () => createStore(countReducer, initialCount)

export default globalStore
