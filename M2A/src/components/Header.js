import React from "react";
import { Layout, Row, Col } from "antd";
const { Header } = Layout;
import logo from "../assets/images/logo.png";

class PageHeader extends React.Component {
  render() {
    return (
      <>
        <Header
          style={{
            height: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
            background: "#1B394E"
          }}
        >
          <Row gutter={0}>
            <Col
              lg={4}
              md={24}
              id="banner"
              style={{ cursor: "pointer", textAlign: "center" }}
              onClick={_ =>
                (window.location = `${
                  document.getElementById("session-id").innerText
                }?get&file=[MIT_ROOT]home.html`)
              }
            >
              <img
                src={logo}
                style={{ width: "100%", maxWidth: "250px", minWidth: "200px" }}
              ></img>
            </Col>
          </Row>
        </Header>
      </>
    );
  }
}

export default PageHeader;
