import * as actionType from "../actionTypes";
import { getForecast } from "../../api/weatherApi/weatherApiForecast";

export const getWheaterForecast = (coordinates) => {
  return (dispatch, getState) => {
    getForecast(coordinates)
      .then((response) => {
        dispatch({
          type: actionType.GET_FORECAST_SUCCESS,
          forecast: response.list,
        });
      })
      .catch((err) => {
        dispatch({ type: actionType.GET_FORECAST_ERROR, err });
      });
  };
};

export const getWheaterForecastNextPage = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionType.GET_FORECAST_NEXT_PAGE,
    });
  };
};

export const getWheaterForecastPrevPage = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionType.GET_FORECAST_PREV_PAGE,
    });
  };
};
