import React, { useState, useEffect } from "react";
import DivStyled from "../common/DivStyled";
import { connect } from "react-redux";
import { getWheaterForecast } from "../../store/actions/weatherForecastActions";
import WeatherItem from "./WeatherItem";

const ForecastList = (props) => {
  const [coordinates, setCoordinates] = useState({
    latitude: 50,
    longitude: 19,
  });

  useEffect(() => {
    props.getForecast(coordinates);
  }, [coordinates]);

  function HandlePrev() {}
  function HandleNext() {}
  return (
    <DivStyled className="card z-depth-0" actualColors={props.actualColors}>
      <div className="card-content">
        <span className="card-title">Weather in Cracow</span>
        {props.forecasts &&
          props.forecasts.slice(0, 5).map((forecast) => {
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
        <div className="inner">
          <span onClick={HandlePrev} style={{ cursor: "pointer" }}>
            ◀️
          </span>
        </div>
        <div className="inner">
          <span onClick={HandleNext} style={{ cursor: "pointer" }}>
            ▶️
          </span>
        </div>
      </div>
    </DivStyled>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    ...ownProps,
    actualColors: state.mode.actualColors,
    forecasts: state.weatherForecast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getForecast: (coordinates) => dispatch(getWheaterForecast(coordinates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList);
