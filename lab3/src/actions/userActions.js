import { getUsers } from '../api';

export const GET_USERS = "GET_USERS";
export const GET_USERS_ERROR = "GET_USERS";

export const getAllUsers = () => {
    return dispatch => {
        getUsers()
        .then((users) => {
            // TODO: Task 2 - dispatch asych action. 
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