import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DarkModeContextProvide from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvide>
      <App />
    </DarkModeContextProvide>
  </React.StrictMode>
);
