import uiReducer from "./uiReducer";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import weatherForecastReducer from "./weatherForecastReducer";

const rootReducer = combineReducers({
  mode: uiReducer,
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  weatherForecast: weatherForecastReducer,
});

export default rootReducer;
