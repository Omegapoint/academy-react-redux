import {USERS_RECEIVED, GET_USERS_ERROR} from '../actions/userActions';

const initialState = {
  all: [],
  error: null
};

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case USERS_RECEIVED:
            return {
                all: action.payload,
                error: null
            }
        case GET_USERS_ERROR:
            return {
                all: [],
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default userReducer;
