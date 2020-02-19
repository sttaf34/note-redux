import { createStore } from "redux"
import counterReducer, { CounterState } from "../reducers/counter"

const initialState: CounterState = { count: 0 }

// Store をいろんな場所から参照したいので export してる
export const store = createStore(counterReducer, initialState)
