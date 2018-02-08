import { takeEvery, put } from 'redux-saga/effects';
// import * as constants from '../constants/API';
import * as actions from '../actions/API';
import { auth } from '../services/API';
import { GET_USER } from '../constants/API';
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
        const res = yield auth.get('/users/', action.payload);
        if (res.ok) {
            // todo use response user record
            yield put(getUserSuccess(2));
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