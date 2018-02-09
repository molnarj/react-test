import { takeEvery, put } from 'redux-saga/effects';
import * as actions from '../actions/API';
import { auth } from '../services/API';
import { GET_USER, API_USERS, POST_POST, API_POSTS } from '../constants/API';
import { getUserSuccess, postPostSuccess } from '../actions/API';

function* watchGetUser() {
    yield takeEvery(GET_USER, function* (action) {
        const res = yield auth.get(API_USERS, action.payload);
        if (res.ok) {
            const json = yield res.json();
            yield put(getUserSuccess(json));
        } else {
            yield put(actions.getUserError(res.error, action.payload));
        }
    });
}

function* watchPostPost() {
    yield takeEvery(POST_POST, function* (action) {
        const res = yield auth.post(API_POSTS, JSON.stringify(action.payload));
        if (res.ok) {
            const json = yield res.json();
            yield put(postPostSuccess(json));
        } else {
            yield put(actions.getUserError(res.error, action.payload));
        }
    })
}

export default function* () {
    yield [
        watchGetUser(),
        watchPostPost()
    ];
};