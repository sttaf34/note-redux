import { connect } from "react-redux"
import { Dispatch } from "redux"

import { decrement, increment, CounterAction } from "../actions/counter"
import { Counter } from "../components/Counter"
import { CounterState } from "../reducers/counter"

interface StateProps {
  count: number
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
})

interface DispatchProps {
  increment: () => void
  decrement: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: (): CounterAction => dispatch(increment()),
  decrement: (): CounterAction => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
