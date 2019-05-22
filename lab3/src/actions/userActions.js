import {getUsers, getUser} from '../api';

export const USERS_RECEIVED = "USERS_RECEIVED";
export const USER_RECEIVED = "USER_RECEIVED";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USERS_ERROR = "USERS_RECEIVED";

export const getAllUsers = () => {
  return dispatch => {
    getUsers()
        .then((users) => {
          dispatch({
            type: USERS_RECEIVED,
            payload: users
          });
        })
        .catch((e) => {
          dispatch({
            type: GET_USERS_ERROR,
            payload: e
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
