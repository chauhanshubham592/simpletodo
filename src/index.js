import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./reducers/reducer";

const MY_STORE = {
  task: [],
  taskid: 0,
};

const store = createStore(Reducer, MY_STORE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
