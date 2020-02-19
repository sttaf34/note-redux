import * as React from "react"

export interface CounterProps {
  count: number
  increment: () => void
  decrement: () => void

  // <Counter label=""> の形で Container 経由で渡されるが、
  // Component の表示に使われるだけで変更はされないもの
  label: string
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { count, label, increment, decrement } = props
  return (
    <p>
      <span>{label}</span> {count}
      <br />
      <button type="button" onClick={increment}>
        増
      </button>
      <button type="button" onClick={decrement}>
        減
      </button>
    </p>
  )
}
