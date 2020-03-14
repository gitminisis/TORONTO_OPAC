import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";

import Home from "./pages/home";
import Summary from "./pages/summary";
import Detail from "./pages/detail";
if (document.getElementById("home")) {
  ReactDom.render(<Home />, document.getElementById("home"));
} else if (document.getElementById("summary")) {
  ReactDom.render(<Summary />, document.getElementById("summary"));
} else if (document.getElementById("detail")) {
  ReactDom.render(<Detail />, document.getElementById("detail"));
}
