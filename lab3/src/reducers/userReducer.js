import { GET_USERS } from '../actions/userActions';


const initialState = {
    users: []
};

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_USERS:
            return {
                users: action.payload.users
            };
        default:
            return state;
    }
};

export default userReducer;