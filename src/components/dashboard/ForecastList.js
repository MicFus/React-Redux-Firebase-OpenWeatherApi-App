import React, { useState, useEffect } from "react";
import DivStyled from "../common/DivStyled";
import { connect } from "react-redux";
import {
  getWheaterForecast,
  getWheaterForecastNextPage,
  getWheaterForecastPrevPage,
} from "../../store/actions/weatherForecastActions";
import WeatherItem from "./WeatherItem";

const ForecastList = (props) => {
  const [coordinates, setCoordinates] = useState({
    latitude: 50,
    longitude: 19,
  });

  useEffect(() => {
    props.getForecast(coordinates);
  }, [coordinates]);

  return (
    <DivStyled className="card z-depth-0" actualColors={props.actualColors}>
      <div className="card-content">
        <span className="card-title">Weather in Cracow</span>
        {props.forecast.nav.list &&
          props.forecast.nav.list.slice(0, 5).map((forecast) => {
            return (
              <WeatherItem
                imageName={forecast.weather[0].icon}
                temperature={forecast.main.temp}
                date={forecast.dt}
                key={forecast.dt}
              ></WeatherItem>
            );
          })}
      </div>
      <div className="outer">
        {props.forecast.nav.hasPrev && (
          <div className="inner">
            <span
              onClick={props.getForecastPrevPage}
              style={{ cursor: "pointer" }}
            >
              ◀️
            </span>
          </div>
        )}
        {props.forecast.nav.hasNext && (
          <div className="inner">
            <span
              onClick={props.getForecastNextPage}
              style={{ cursor: "pointer" }}
            >
              ▶️
            </span>
          </div>
        )}
      </div>
    </DivStyled>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    actualColors: state.mode.actualColors,
    forecast: state.weatherForecast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getForecast: (coordinates) => dispatch(getWheaterForecast(coordinates)),
    getForecastNextPage: () => dispatch(getWheaterForecastNextPage()),
    getForecastPrevPage: () => dispatch(getWheaterForecastPrevPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList);
