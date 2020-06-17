export const createProject = (project) => {
  return (dispatch, getState) => {
    debugger;
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
