import { connect } from "react-redux"

import { Counter } from "../components/Counter"
import { CounterState } from "../reducers/counter"

interface StateProps {
  count: number
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
})

export default connect(mapStateToProps, {})(Counter)
