const initialState = {
  theme: (localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
}

export default function theme(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_THEME": {
      const theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return {theme: theme};
    }

    default:
      return state;
  }
}
