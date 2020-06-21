const initialMode = {
  darkActive: false,
  colors: {
    light: "white",
    light0: "#ffffff",
    light1: "#eeeeee",
    light2: "#dddddd",
    light3: "#cccccc",
    light4: "#bbbbbb",
    light5: "#aaaaaa",
    dark: "black",
    dark0: "#000000",
    dark1: "#111111",
    dark2: "#222222",
    dark3: "#333333",
    dark4: "#444444",
    dark5: "#555555",
  },
};

const uiReducer = (state = initialMode, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      console.log("theme changed");
      let actual = !state.darkActive;
      return { ...state, darkActive: actual };
    default:
      return state;
  }
};

export default uiReducer;
