// React
import React from "react";
import ReactDOM from "react-dom";
// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger"; // For debugging, REMOVE ON PROD
// Service Worker
import * as serviceWorker from "./serviceWorker";
// Root Container
import Root from "./containers/Root";


// Redux Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    logger // TODO: Remove on prod
  )
);

// App Render
ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById("root")
);

// Service Worker (PWA)
serviceWorker.register();
