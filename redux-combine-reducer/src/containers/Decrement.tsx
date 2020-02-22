import { connect } from "react-redux"
import { Dispatch } from "redux"

import { decrement, DecrementAction } from "../actions/decrement"
import { Decrement } from "../components/Decrement"
import { ApplicationState } from "../reducers"

interface StateProps {
  count: number
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return { count: state.decrement.count }
}

interface DispatchProps {
  decrement: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  decrement: (): DecrementAction => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Decrement)
