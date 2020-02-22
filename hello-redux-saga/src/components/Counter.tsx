import * as React from "react"

export interface CounterProps {
  count: number
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { count } = props
  return <p>{count}</p>
}
