// import { takeEvery, put } from 'redux-saga/effects';

// import * as constants from './constants';
// import * as actions from './actions';
// import { auth } from '../services/API';

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