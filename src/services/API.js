import { put, select } from 'redux-saga/effects';
import { API } from 'redux-saga-rest';

// import * as selectors from './selectors'; //TODO
// import * as accountActions from '../actions/Account';

const authMiddleware = () => function* (req, next) {
    // // request middleware
    // const user = yield select(selectors.user);
    // const headers = req.headers || new Headers();
    // headers.set('Authorization', `Bearer ${user.token}`);

    // retrieve the response
    const res = yield next(new Request(req, { headers }));

    // // response middleware
    // if (res.status === 401) {
    //     yield put(accountActions.logout());
    // }

    // return the response
    return res;
};

// export const auth = new API('/api/').use(authMiddleware());
export const auth = new API('https://jsonplaceholder.typicode.com/').use(authMiddleware());