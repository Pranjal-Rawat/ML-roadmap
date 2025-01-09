import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove or comment out the following line if not using reportWebVitals
// reportWebVitals();