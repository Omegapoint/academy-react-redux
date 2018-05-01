import { GET_USERS, GET_USERS_ERROR } from '../actions/userActions';


const initialState = {
    users: [],
    error: null
};

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        // TODO: Task 3 - handle the action from getAllUsers()
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