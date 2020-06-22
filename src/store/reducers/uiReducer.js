import initialState from "../initialState";
import * as actionType from "../actionTypes";
import { themes } from "../../design/Colors";

const uiReducer = (state = initialState.ui, action) => {
  switch (action.type) {
    case actionType.CHANGE_THEME:
      console.log("theme changed");
      let actual = !state.darkActive;

      const actualColors = actual ? themes.darkTheme : themes.lightTheme;

      return { ...state, darkActive: actual, actualColors };
    default:
      return state;
  }
};

export default uiReducer;
