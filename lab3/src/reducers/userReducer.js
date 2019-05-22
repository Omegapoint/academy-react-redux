import { BLAHA, GET_USERS_ERROR } from '../actions/userActions';

const initialState = {
    users: [],
    error: null
};

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        // TODO: Task 4 - Handle the action received from getAllUsers()
        case GET_USERS_ERROR:
            return {
                users: [],
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userReducer;
