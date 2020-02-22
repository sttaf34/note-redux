export enum DecrementActionType {
  DECREMENT = "DECREMENT/DECREMENT"
}

export interface DecrementAction {
  type: DecrementActionType
}

export const decrement = (): DecrementAction => ({
  type: DecrementActionType.DECREMENT
})
