import { GET_USER_SUCCESS, POST_POST_SUCCESS } from "../constants/API";

export default function apiReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_SUCCESS: {
            alert(JSON.stringify(action.payload));
            return {
                ...state
            }
        }
        case POST_POST_SUCCESS: {
            alert(JSON.stringify(action.payload));
            return {
                ...state
            }
        }
        default:
            return state
    }
}