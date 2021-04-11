import { userActionTypes } from "./userActionTypes";
import axios from "axios";

const userLoginRequest = () => ({
  type: userActionTypes.USER_LOGIN_REQUEST,
});
const userLoginSuccess = (data) => ({
  type: userActionTypes.USER_LOGIN_SUCCESS,
  payload: data,
});
const userLoginFailed = (err) => ({
  type: userActionTypes.USER_LOGIN_FAILED,
  payload:
    err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
});

export const login = (email, password) => async (dispatch) => {
  dispatch(userLoginRequest());
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch(userLoginSuccess(data));
  } catch (err) {
    dispatch(userLoginFailed(err));
  }
};

export const logout = () => ({
  type: userActionTypes.USER_LOGOUT,
});

const userRegisterRequest = () => ({
  type: userActionTypes.USER_REGISTER_REQUEST,
});
const userRegisterSuccess = (data) => ({
  type: userActionTypes.USER_REGISTER_SUCCESS,
  payload: data,
});
const userRegisterFailed = (err) => ({
  type: userActionTypes.USER_REGISTER_FAILED,
  payload:
    err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
});

export const register = (name, email, password) => async (dispatch) => {
  dispatch(userRegisterRequest());
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );
    dispatch(userRegisterSuccess(data));
    dispatch(userLoginSuccess(data));
  } catch (err) {
    dispatch(userRegisterFailed(err));
  }
};

const userDetailsRequest = () => ({
  type: userActionTypes.USER_DETAILS_REQUEST,
});
const userDetailsSuccess = (data) => ({
  type: userActionTypes.USER_DETAILS_SUCCESS,
  payload: data,
});
const userDetailsFailed = (err) => ({
  type: userActionTypes.USER_DETAILS_FAILED,
  payload:
    err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
});

export const getUserDetails = () => async (dispatch, getState) => {
  dispatch(userDetailsRequest());
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().user.userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.get("/api/users/profile", config);
    dispatch(userDetailsSuccess(data));
  } catch (err) {
    console.error(err);
    dispatch(userDetailsFailed(err));
  }
};
const updateUserDetailsRequest = () => ({
  type: userActionTypes.USER_UPDATE_REQUEST,
});
const updateUserDetailsSuccess = (data) => ({
  type: userActionTypes.USER_UPDATE_SUCCESS,
  payload: data,
});
const updateUserDetailsFailed = (err) => ({
  type: userActionTypes.USER_UPDATE_FAILED,
  payload:
    err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
});
export const updateUserDetails = (
  name,
  email,
  password,
  currentPassword
) => async (dispatch, getState) => {
  dispatch(updateUserDetailsRequest());
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getState().user.userInfo.token}`,
    },
  };
  try {
    const { data } = await axios.put(
      "/api/users/profile",
      { name, email, password, currentPassword },
      config
    );
    dispatch(updateUserDetailsSuccess(data));
    dispatch(userLoginSuccess(data));
  } catch (err) {
    console.error(err);
    dispatch(updateUserDetailsFailed(err));
  }
};
