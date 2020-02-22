export enum IncrementActionType {
  INCREMENT = "INCREMENT/INCREMENT"
}

export interface IncrementAction {
  type: IncrementActionType
}

export const increment = (): IncrementAction => ({
  type: IncrementActionType.INCREMENT
})
