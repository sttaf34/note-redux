import * as React from "react"
import CounterDecrement from "./containers/Decrement"
import CounterIncrement from "./containers/Increment"

const App = (): JSX.Element => {
  return (
    <>
      <CounterDecrement />
      <CounterIncrement />
    </>
  )
}

export default App
