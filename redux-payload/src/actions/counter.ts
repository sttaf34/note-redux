export enum CounterActionType {
  INCREMENT = "COUNTER/INCREMENT",
  DECREMENT = "COUNTER/DECREMENT"
}

export interface CounterAction {
  type: CounterActionType
  payload: {
    value: number
  }
}

// 変化量は定数で管理されている想定
export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
  payload: {
    value: 3
  }
})

// 変化量はユーザの入力等で変化する想定
export const decrement = (value: number): CounterAction => ({
  type: CounterActionType.DECREMENT,
  payload: {
    value
  }
})
