import { connect } from "react-redux"
import { Dispatch } from "redux"

import {
  decrement,
  increment,
  CounterAction,
  CounterActionType
} from "../actions/counter"
import { Counter } from "../components/Counter"
import { CounterState } from "../reducers/counter"

interface StateProps {
  count: number
  lastActionType: CounterActionType
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
  lastActionType: state.lastActionType
})

interface DispatchProps {
  increment: () => void
  decrement: (value: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: (): CounterAction => dispatch(increment()),
  decrement: (value: number): CounterAction => dispatch(decrement(value))
})

// 最終的には components/Counter に Redux と関わる機能を付与したものになる
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
