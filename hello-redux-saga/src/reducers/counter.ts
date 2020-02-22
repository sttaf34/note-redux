import { Reducer } from "redux"
import { CounterAction, CounterActionType } from "../actions/counter"

export interface CounterState {
  count: number
}

const initialState: CounterState = { count: 0 }

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT_ASYNC:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

export default counterReducer
