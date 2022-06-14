import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ScrollToTop from './ScrollToTop'

// import "./paper.css"

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
