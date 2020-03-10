import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";

import Home from "./pages/home";

if (document.getElementById("home")) {
  ReactDom.render(<Home />, document.getElementById("home"));
}
