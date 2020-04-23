// Redux
import { combineReducers } from "redux";

import auth from "./auth";
import theme from "./theme";
import plans from "./plans";


export default combineReducers({
  auth,
  theme,
  plans
})
