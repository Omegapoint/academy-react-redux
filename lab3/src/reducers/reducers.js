import { combineReducers } from 'redux';
import backgroundReducer from './backgroundReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    background: backgroundReducer,
    users: userReducer
});

export default rootReducer;