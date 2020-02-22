export enum CounterActionType {
  INCREMENT_ASYNC = "COUNTER/INCREMENT_ASYNC"
}

export interface CounterAction {
  type: CounterActionType
}

export const incrementAsync = (): CounterAction => ({
  type: CounterActionType.INCREMENT_ASYNC
})
