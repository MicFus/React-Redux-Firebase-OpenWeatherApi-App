import initialState from "../initialState";
import * as actionType from "../actionTypes";

const projectReducer = (state = initialState.project, action) => {
  switch (action.type) {
    case actionType.CREATE_PROJECT:
      console.log("created project", action.project);
      return state;
    case actionType.CREATE_PROJECT_ERROR:
      console.log("create project error", action.err);
      return state;
    case actionType.DELETE_PROJECT_SUCCESS:
      console.log("deleted project", action.id);
      return state;
    case actionType.DELETE_PROJECT_ERROR:
      console.log("delete project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
