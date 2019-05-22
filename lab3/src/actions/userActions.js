import { getUsers } from '../api';

export const BLAHA = "BLAHA";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const getAllUsers = () => {
    return dispatch => {
        getUsers()
        .then((users) => {
            // TODO: Task 3 - Dispatch async action. getUsers is a function from out api that returns a promise.
          dispatch({
            type: BLAHA,
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
