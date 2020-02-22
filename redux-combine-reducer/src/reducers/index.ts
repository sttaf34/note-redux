import { combineReducers } from "redux"
import decrement, { DecrementState } from "./decrement"
import increment, { IncrementState } from "./increment"

// 参考 -> https://qiita.com/usagi-f/items/ae568fb64c2eac882d05
export interface ApplicationState {
  decrement: DecrementState
  increment: IncrementState
}

export default combineReducers<ApplicationState>({
  decrement,
  increment
})
