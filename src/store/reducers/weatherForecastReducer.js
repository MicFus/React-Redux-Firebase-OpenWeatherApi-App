import initialState from "../initialState";
import * as actionType from "../actionTypes";

const weatherForecastReducer = (
  state = initialState.weatherForecast,
  action
) => {
  switch (action.type) {
    case actionType.GET_FORECAST_SUCCESS:
      console.log("GET_FORECAST_SUCCESS", action.forecast);
      return action.forecast;
    case actionType.GET_FORECAST_ERROR:
      console.log("GET_FORECAST_ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default weatherForecastReducer;
