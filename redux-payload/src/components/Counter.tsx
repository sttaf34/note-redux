import * as React from "react"
import { CounterActionType } from "../actions/counter"

export interface CounterProps {
  count: number
  lastActionType: CounterActionType
  increment: () => void
  decrement: (value: number) => void
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { count, lastActionType, increment, decrement } = props
  return (
    <p>
      {lastActionType}
      <br />
      {count}
      <br />

      <button type="button" onClick={increment}>
        増
      </button>

      <button
        type="button"
        onClick={(): void => {
          decrement(3)
        }}
      >
        減
      </button>
    </p>
  )
}
