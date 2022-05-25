import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
