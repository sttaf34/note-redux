import * as React from "react"
import Counter from "./containers/Counter"
import { Log } from "./components/Log"

const App = (): JSX.Element => {
  return (
    <>
      <Counter />
      <Log />
    </>
  )
}

export default App
