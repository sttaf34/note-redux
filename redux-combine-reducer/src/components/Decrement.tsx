import * as React from "react"

export interface DecrementProps {
  count: number
  decrement: () => void
}

export const Decrement: React.FC<DecrementProps> = (props: DecrementProps) => {
  const { count, decrement } = props
  return (
    <p>
      {count}
      <br />
      <button type="button" onClick={decrement}>
        減
      </button>
    </p>
  )
}
