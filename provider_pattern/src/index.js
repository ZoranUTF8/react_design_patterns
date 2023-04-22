import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AppDataContext from "./AppContext";
import ThemeContext from "./ThemeContext";
import themes from "./ThemeContext";
const appData = { name: "Ola from the app context" };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppDataContext.Provider value={appData}>
      <ThemeContext.Provider value={themes}>
        <App />
      </ThemeContext.Provider>
    </AppDataContext.Provider>
  </React.StrictMode>
);
