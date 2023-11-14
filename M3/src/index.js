import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";

import Home from "./pages/home";
import Summary from "./pages/summary";
import Detail from "./pages/detail";

import NoRecord from "./pages/no-record";
import ReactGA from "react-ga";
ReactGA.initialize("UA-171539982-1");
ReactGA.pageview(window.location.pathname + window.location.search);

if (document.getElementById("home")) {
  ReactDom.render(<Home />, document.getElementById("home"));
  document.getElementsByClassName("logo-desktop")[0].style.marginTop = "12px";
} else if (document.getElementById("summary")) {
  ReactDom.render(<Summary />, document.getElementById("summary"));
} else if (document.getElementById("detail")) {
  ReactDom.render(<Detail />, document.getElementById("detail"));
} else if (document.getElementById("no-record")) {
  ReactDom.render(<NoRecord />, document.getElementById("no-record"));
}
