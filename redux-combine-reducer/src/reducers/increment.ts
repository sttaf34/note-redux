import { Reducer } from "redux"
import { IncrementAction, IncrementActionType } from "../actions/increment"

export interface IncrementState {
  count: number
}

const initialState: IncrementState = {
  count: 0
}

const IncrementReducer: Reducer<IncrementState, IncrementAction> = (
  state: IncrementState = initialState,
  action: IncrementAction
): IncrementState => {
  switch (action.type) {
    case IncrementActionType.INCREMENT:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

export default IncrementReducer
