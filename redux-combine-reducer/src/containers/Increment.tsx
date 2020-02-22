import { connect } from "react-redux"
import { Dispatch } from "redux"

import { increment, IncrementAction } from "../actions/increment"
import { Increment } from "../components/Increment"
import { ApplicationState } from "../reducers"

interface StateProps {
  count: number
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  count: state.increment.count
})

interface DispatchProps {
  increment: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: (): IncrementAction => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Increment)
