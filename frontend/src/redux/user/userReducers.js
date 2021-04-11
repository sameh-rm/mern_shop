import { userActionTypes } from "./userActionTypes";

export const userReducer = (state = { userDetails: {} }, action) => {
  switch (action.type) {
    // USER LOGIN CASES
    case userActionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case userActionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userActionTypes.USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    case userActionTypes.USER_LOGOUT:
      return {};
    // USER REGISTER CASES
    case userActionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case userActionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userActionTypes.USER_REGISTER_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (
  state = { userDetails: undefined },
  action
) => {
  switch (action.type) {
    // USER DETAILS CASES
    case userActionTypes.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case userActionTypes.USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload,
      };
    case userActionTypes.USER_DETAILS_FAILED:
      return { loading: false, error: action.payload };

    // UPDATE USER DETAILS CASES
    case userActionTypes.USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case userActionTypes.USER_UPDATE_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload,
        message: "Profile Updated!",
      };
    case userActionTypes.USER_UPDATE_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
