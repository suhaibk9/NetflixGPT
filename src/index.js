import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Clarity from "@microsoft/clarity";
import appStore from "./utils/appStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
if (process.env.REACT_APP_CLARITY_KEY) {
  Clarity.init(process.env.REACT_APP_CLARITY_KEY);
}

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
