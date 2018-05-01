import { GET_USERS, GET_USERS_ERROR, GET_USER, GET_USER_ERROR } from '../actions/userActions';


const initialState = {
    users: [],
    user: null,
    error: null
};

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_USERS:
        return {
            ...state,
            users: action.payload.users,
            error: null
        }
        case GET_USER:
        return {
            ...state,
            user: action.payload.user,
            error: null
        }
        case GET_USERS_ERROR:
        case GET_USER_ERROR:
            return {
                ...state,
                users: [],
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userReducer;