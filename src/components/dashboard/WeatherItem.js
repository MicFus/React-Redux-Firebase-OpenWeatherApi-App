import React from "react";
import moment from "moment";

function setImageUrl(imageName) {
  return "https://openweathermap.org/img/wn/" + imageName + ".png";
}

function formatOWeather(textDate) {
  const parts = textDate.split(" ");
  let date = parts[0].split("-").reverse();
  date = date.join("-");
  return date + " " + parts[1];
}

const WeatherItem = (props) => {
  var date = new Date(props.date * 1000);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img src={setImageUrl(props.imageName)}></img>
        </div>
        <div className="col-sm">
          <p> Temp: {props.temperature}°C</p>
        </div>
        <div className="col-sm">
          <p> {date ? moment(date).calendar() : "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
