import "babel-polyfill";
import "./styles/global.css";
import React from "react";
import ReactDom from "react-dom";

// import LibrarySummary from "./pages/library-summary";
// import LibraryDetail from "./pages/library-detail";
import Summary from "./pages/summary";
import Home from "./pages/home";
import Detail from "./pages/detail";
import AdvancedSearch from "./pages/advanced-search";
import { isLogged } from "./services/authentication";
import NoRecord from "./pages/no-record";
import ViewBag from "./pages/view-bag";
import ViewSearch from "./pages/view-search";
if (document.getElementById("home")) {
  ReactDom.render(<Home />, document.getElementById("home"));
} else if (document.getElementById("invalid-login")) {
  ReactDom.render(<Home />, document.getElementById("invalid-login"));
} else if (document.getElementById("bookmark")) {
  ReactDom.render(<ViewSearch />, document.getElementById("bookmark"));
} else if (document.getElementById("summary")) {
  ReactDom.render(<Summary />, document.getElementById("summary"));
} else if (document.getElementById("detail")) {
  ReactDom.render(<Detail />, document.getElementById("detail"));
} else if (document.getElementById("advanced")) {
  ReactDom.render(<AdvancedSearch />, document.getElementById("advanced"));
} else if (document.getElementById("no-record")) {
  ReactDom.render(<NoRecord />, document.getElementById("no-record"));
} else if (document.getElementById("view-bag")) {
  ReactDom.render(<ViewBag />, document.getElementById("view-bag"));
}
