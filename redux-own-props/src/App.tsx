import * as React from "react"
import Counter from "./container/Counter"

const App = (): JSX.Element => {
  return (
    <>
      <p>Hello, Redux!</p>
      <Counter label="〇〇用カウンター" />
      <Counter label="△△用カウンター" />
    </>
  )
}

export default App
