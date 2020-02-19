import * as React from "react"
import { store } from "../others/store"

interface State {
  count: number
}

// このコンポーネントは、Redux の Store のデータを表示するだけのもの
export class Log extends React.Component<{}, State> {
  public constructor(props) {
    super(props)
    this.state = { count: 0 }

    // 別な場所で Redux の Store が変更されると実行される
    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }

  public render(): JSX.Element {
    const { count } = this.state
    return (
      <>
        <p>{`状態 ${count}`}</p>
      </>
    )
  }
}
