import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import App from "./App"
import rootReducer from "./reducers"

const store = createStore(rootReducer)

// combineReducers したことで状態の構造が変わっている
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
