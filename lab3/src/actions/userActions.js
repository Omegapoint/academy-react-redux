import { getUsers } from '../api';

export const GET_USERS = "GET_USERS";

export const getAllUsers = () => {
    return dispatch => {
        getUsers()
        .then((users) => {
            dispatch({
                type: GET_USERS,
                payload: {
                    users
                }
            });
        })
        .catch()
    };
};