import { Reducer } from "redux"
import { CounterAction, CounterActionType } from "../actions/counter"

// Reduxで管理する状態
export interface CounterState {
  count: number
  lastActionType: CounterActionType
}

// Reducerとは、前の状態とアクションを元に、次の状態を返す純粋な関数
const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        count: state.count + action.payload.value,
        lastActionType: action.type
      }
    case CounterActionType.DECREMENT:
      return {
        count: state.count - action.payload.value,
        lastActionType: action.type
      }
    default:
      return state
  }
}

export default counterReducer
