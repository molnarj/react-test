import { takeEvery, put } from 'redux-saga/effects';
// import * as constants from '../constants/API';
import * as actions from '../actions/API';
import { auth } from '../services/API';
import { GET_USER, API_USERS } from '../constants/API';
import { getUserSuccess } from '../actions/API';

// function* watchUpdateProfile() {
//     yield takeEvery(constants.UPDATE_PROFILE, function* (action) {
//         const res = yield auth.patch('/profile/', action.payload);

//         if (res.ok) {
//             yield put(actions.updateProfileSuccess());
//         } else {
//             yield put(actions.updateProfileFailure());
//         }
//     });
// }

// export default function* () {
//     yield [
//         watchUpdateProfile(),
//     ];
// };

function* watchGetUser() {
    yield takeEvery(GET_USER, function* (action) {
        const res = yield auth.get(API_USERS, action.payload);
        if (res.ok) {
            const json = yield res.json();
            const param = json[0] || null;
            yield put(getUserSuccess(param));
        } else {
            yield put(actions.getUserError(res.error, action.payload));
        }
    });
}

export default function* () {
    yield [
        watchGetUser(),
    ];
};