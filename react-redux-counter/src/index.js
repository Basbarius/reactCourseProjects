import React from "react";
import ReactDOM from "react-dom";
//Provider is needed to provide access to a redux store
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
//store is the redux store that will be provided to the app
import store from "./store/index";

//the app component is wrapped in the provider with the store attribute in order to grant access to the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
