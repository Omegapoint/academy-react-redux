import { getUsers } from '../api';

export const USERS_RECEIVED = "USERS_RECEIVED";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

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
