import * as React from "react"

export interface IncrementProps {
  count: number
  increment: () => void
}

export const Increment: React.FC<IncrementProps> = (props: IncrementProps) => {
  const { count, increment } = props
  return (
    <p>
      {count}
      <br />
      <button type="button" onClick={increment}>
        増
      </button>
    </p>
  )
}
