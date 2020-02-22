import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import App from "./App"
import counterReducer, { CounterState } from "./reducers/counter"
import { rootSaga } from "./sagas"

const initialState: CounterState = { count: 0 }
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  counterReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
