// import { put, select } from 'redux-saga/effects';
// import { API } from 'redux-saga-rest';

// import * as selectors from './selectors';
// import * as actions from './actions';

// const authMiddleware = () => function* (req, next) {
//     // request middleware
//     const user = yield select(selectors.user);
//     const headers = req.headers || new Headers();
//     headers.set('Authorization', `Bearer ${user.token}`);

//     // retrieve the response
//     const res = yield next(new Request(req, { headers }));

//     // response middleware
//     if (res.status === 401) {
//         yield put(actions.logout());
//     }

//     // return the response
//     return res;
// };

// export const auth = new API('/api/').use(authMiddleware());