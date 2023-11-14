import React from "react";
import { List, Layout } from "antd";
const { Footer } = Layout;
import logo from "../assets/images/logo.png";

class PageFooter extends React.Component {
  render() {
    return (
      <Footer
        id="footer"
        style={{
          textAlign: "left",

          backgroundColor: "#165788",
          color: "white",
        }}
      >
        <a href="https://www.toronto.ca/home/copyright-information/">
          &copy; City of Toronto 1998 - {new Date().getFullYear()}
        </a>
      </Footer>
    );
  }
}

export default PageFooter;
