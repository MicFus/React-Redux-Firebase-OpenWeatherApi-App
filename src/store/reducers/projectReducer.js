import initialState from "../initialState";

const projectReducer = (state = initialState.project, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    case "DELETE_PROJECT_SUCCESS":
      console.log("deleted project", action.id);
      return state;
    case "DELETE_PROJECT_ERROR":
      console.log("delete project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
