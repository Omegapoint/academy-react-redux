import {getUsers, getUser} from '../api';

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USERS_ERROR = "GET_USERS";

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
            type: GET_USER,
            payload: {
              user
            }
          });
        })
        .catch((e) => {
          dispatch({
            type: GET_USER_ERROR,
            payload: {
              error: e
            }
          });
        })
  };
};
