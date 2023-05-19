import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./Reducer";
import App from "./App";
import "./index.css";

export const store = createStore(reducer, applyMiddleware(thunk));

/* ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
