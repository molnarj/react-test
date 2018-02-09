import { GET_USER, GET_USERS, GET_USER_SUCCESS, GET_USER_ERROR, GET_USERS_SUCCESS, GET_USERS_ERROR, POST_POST, POST_POST_SUCCESS } from "../constants/API";

export const getUser = (id) => ({
    type: GET_USER,
    payload: {
        id
    }
});

export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: {
            user
        }
    }
};

export const getUserError = (error, data) => ({
    type: GET_USER_ERROR,
    payload: {
        id,
        data
    }
});



export const getUsers = () => ({
    type: GET_USERS,
    payload: {}
});

export const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: {
        users
    }
});

export const getUsersError = (error, data) => ({
    type: GET_USERS_ERROR,
    payload: {
        error, data
    }
});

export const postPost = (userId, title, body) => ({
    type: POST_POST,
    payload: {
        userId, title, body
    }
});

export const postPostSuccess = (post) => ({
    type: POST_POST_SUCCESS,
    payload: {
        post
    }
})