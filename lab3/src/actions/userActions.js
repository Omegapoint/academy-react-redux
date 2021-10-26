import { getUsers } from '../api';
import { getUser } from '../api';

export const USERS_RECEIVED = "USERS_RECEIVED";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const USER_RECEIVED = "USER_RECEIVED";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const getAllUsers = () => {
    /*
        Actions should generally be POJO (Plain JavaScript Object), but getting the users is made
        asynchronously.
        Thanks to the thunk middleware (declared in store.js) we can handle asynchronous events
        in our actions.
    */
    return dispatch => {
        getUsers() // Gets users from our API and returns a promise.
        .then((users) => {
            dispatch({
                type: USERS_RECEIVED,
                payload: users
            })
        })
        .catch((e) => {
            dispatch({
                type: GET_USERS_ERROR,
                payload: {
                    error: e
                }
            });
        })
    };
};

export const getUserById = (userId) => {
    return dispatch => {
        getUser(userId)
            .then((user) => {
                dispatch({
                    type: USER_RECEIVED,
                    payload: user
                });
            })
            .catch((e) => {
                dispatch({
                    type: GET_USER_ERROR,
                    payload: e
                });
            })
    };
};
