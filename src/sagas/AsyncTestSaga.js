import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { increment, incrementAsync } from '../actions/AsyncTestPage';

export function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
function* delayIncrementAsync(action) {
    yield delay(1000)
    const dynamicValue = 2; //from server

    const valueFromAction = action.payload.defaultDelta; //from original action
    yield put(increment(dynamicValue || valueFromAction))
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync(action) {
    yield takeEvery('INCREMENT_ASYNC', delayIncrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}