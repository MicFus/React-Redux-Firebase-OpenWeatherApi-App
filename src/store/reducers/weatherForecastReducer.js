import initialState from "../initialState";
import * as actionType from "../actionTypes";

const weatherForecastReducer = (
  state = initialState.weatherForecast,
  action
) => {
  switch (action.type) {
    case actionType.GET_FORECAST_SUCCESS:
      var pageNr = state.nav.pageNr;
      var pageSize = state.nav.pageSize;
      var actualList = action.forecast.slice(
        (pageNr - 1) * pageSize,
        pageNr * pageSize
      );
      var newNav = {
        list: actualList,
        pageNr,
        pageSize,
        hasPrev: pageNr > 1,
        hasNext: pageNr * pageSize < action.forecast.length - 1,
      };
      return {
        ...state,
        list: action.forecast,
        nav: newNav,
      };
    case actionType.GET_FORECAST_ERROR:
      console.log("GET_FORECAST_ERROR", action.err);
      return state;
    case actionType.GET_FORECAST_NEXT_PAGE:
      if (!state.nav.hasNext) {
        return state;
      }
      var pageNr = state.nav.pageNr + 1;
      var pageSize = state.nav.pageSize;
      var actualList = state.list.slice(
        (pageNr - 1) * pageSize,
        pageNr * pageSize
      );
      var newNav = {
        list: actualList,
        pageNr,
        pageSize,
        hasPrev: pageNr > 1,
        hasNext: pageNr * pageSize < state.list.length - 1,
      };
      return {
        ...state,
        nav: newNav,
      };
    case actionType.GET_FORECAST_PREV_PAGE:
      if (!state.nav.hasPrev) {
        return state;
      }
      var pageNr = state.nav.pageNr - 1;
      var pageSize = state.nav.pageSize;
      var actualList = state.list.slice(
        (pageNr - 1) * pageSize,
        pageNr * pageSize
      );
      var newNav = {
        list: actualList,
        pageNr,
        pageSize,
        hasPrev: pageNr > 1,
        hasNext: pageNr * pageSize < state.list.length - 1,
      };
      return {
        ...state,
        nav: newNav,
      };
    default:
      return state;
  }
};

export default weatherForecastReducer;
