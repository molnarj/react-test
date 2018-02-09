import { GET_USER_SUCCESS } from "../constants/API";

export default function apiReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_SUCCESS: {
            alert(JSON.stringify(action.payload));
            return {
                ...state
            }
        }
        default:
            return state
    }
}