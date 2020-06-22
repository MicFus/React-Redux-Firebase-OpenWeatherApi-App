import { handleResponse, handleError, addQueryString } from "../utils";
import { settings } from "./config";

const baseUrl = settings.url + "/forecast";

export function getForecast(coordinates) {
  const headers = {
    lat: coordinates.latitude,
    lon: coordinates.longitude,
    appid: settings.appid,
  };
  return fetch(addQueryString(baseUrl, headers))
    .then(handleResponse)
    .catch(handleError);
}
