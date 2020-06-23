import { themes } from "../../src/design/Colors";

const initialState = {
  auth: {
    authError: null,
  },
  project: {
    projects: [
      { id: "1", title: "help me find peach", content: "blah blah blah" },
    ],
  },
  ui: {
    darkActive: true,
    actualColors: themes.darkTheme,
  },
  weatherForecast: {
    list: null,
    nav: {
      list: null,
      pageSize: 5,
      pageNr: 1,
      hasNext: false,
      hasPrev: false,
    },
  },
};

export default initialState;
