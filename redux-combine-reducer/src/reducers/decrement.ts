import { Reducer } from "redux"
import { DecrementAction, DecrementActionType } from "../actions/decrement"

export interface DecrementState {
  count: number
}

const initialState: DecrementState = {
  count: 0
}

const decrementReducer: Reducer<DecrementState, DecrementAction> = (
  state: DecrementState = initialState,
  action: DecrementAction
): DecrementState => {
  switch (action.type) {
    case DecrementActionType.DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

export default decrementReducer
