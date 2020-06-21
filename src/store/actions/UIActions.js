export const changeTheme = () => {
  return (dispatch, getState) => {
    dispatch({ type: "CHANGE_THEME" });
  };
};
