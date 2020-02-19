import { connect } from "react-redux"
import { Dispatch } from "redux"

import { decrement, increment, CounterAction } from "../actions/counter"
import { Counter } from "../components/Counter"
import { CounterState } from "../reducers/counter"

interface StateProps {
  count: number
  label: string
}

interface OwnProps {
  label: string
}

const mapStateToProps = (
  state: CounterState,
  ownProps: OwnProps
): StateProps => {
  const { label } = ownProps
  return {
    count: state.count,
    label
  }
}

interface DispatchProps {
  increment: () => void
  decrement: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: (): CounterAction => dispatch(increment()),
  decrement: (): CounterAction => dispatch(decrement())
})

// 最終的には components/Counter に Redux と関わる機能を付与したものになる
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
