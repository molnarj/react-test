import { put, select } from 'redux-saga/effects';
import { API } from 'redux-saga-rest';

const authMiddleware = () => function* (req, next) {
    const headers = req.headers || new Headers();
    // Add auth token here when needed: headers.set('Authorization', `Bearer ${token}`);
    const res = yield next(new Request(req, { headers }));
    if (res.status === 401) {
    }
    return res;
};

// export const auth = new API('/api/').use(authMiddleware());
export const auth = new API('https://jsonplaceholder.typicode.com/').use(authMiddleware());