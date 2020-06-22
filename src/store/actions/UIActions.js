import * as actionType from "../actionTypes";

export const changeTheme = () => {
  return (dispatch, getState) => {
    dispatch({ type: actionType.CHANGE_THEME });
  };
};
