import {
  GET_FILTER_DATA,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === GET_FILTER_DATA) {
    const { msg } = action.payload;
    console.log("action", action);
    return {
      action,
    };
  }
  // ---------------------Register User------------------------//
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    const { user, token, location } = action.payload;
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
      user,
      token,
      userLocation: location,
      jobLocation: location,
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      alertText: action.payload.msg,
    };
  }

  // --------------------Login User----------------------------//

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    const { user, token, location } = action.payload;
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successfull! Redirecting...",
      user,
      token,
      userLocation: location,
      jobLocation: location,
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      alertText: action.payload.msg,
    };
  }
};

export default reducer;
