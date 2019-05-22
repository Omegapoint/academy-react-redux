import {USERS_RECEIVED, GET_USERS_ERROR, USER_RECEIVED, GET_USER_ERROR} from '../actions/userActions';


const initialState = {
  all: [],
  user: null,
  error: null
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USERS_RECEIVED:
      return {
        ...state,
        all: action.payload,
        error: null
      }
    case USER_RECEIVED:
      return {
        ...state,
        user: action.payload,
        error: null
      }
    case GET_USERS_ERROR:
    case GET_USER_ERROR:
      return {
        ...state,
        all: [],
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default userReducer;
