import initialState from "../initialState";
import * as actionType from "../actionTypes";

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case actionType.LOGIN_ERROR:
      return { ...state, authError: "Login failed" };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionType.SIGNOUT_SUCCESS:
      console.log("signed out");
      return state;
    case actionType.SIGNUP_SUCCESS:
      console.log("signed up");
      return { ...state, authError: null };
    case actionType.SIGNUP_ERROR:
      console.log("sign up error", action.err.message);
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
