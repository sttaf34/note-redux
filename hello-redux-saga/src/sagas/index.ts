import { delay, put, fork } from "redux-saga/effects"
import { CounterActionType } from "../actions/counter"

export function* incrementAsync(): Generator {
  // 5000ミリ秒待機
  yield delay(5000)

  // put は Action を dispatch する
  // Action を dispatch すると Redux が動いてくれるので
  // State が変更されて、最終的に表示も変更される
  yield put({ type: CounterActionType.INCREMENT_ASYNC })
}

// アプリケーション起動すると rootSaga() が動き出す
export function* rootSaga(): Generator<unknown, void, unknown> {
  // fork -> 別のタスクの開始
  yield fork(incrementAsync)
}
