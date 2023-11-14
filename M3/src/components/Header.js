import React from "react";
import { Layout, Row, Col } from "antd";
const { Header } = Layout;
import logo from "../assets/images/logo.png";
import banner from "../assets/images/banner.png";
class PageHeader extends React.Component {
  render() {
    return (
      <Layout>
        {" "}
        <Header
          id="headerBar"
          style={{
            paddingTop: "2px",
            paddingBottom: "3px",
            background: "#165788",
          
          }}
        >
          <Row gutter={0}>
            <Col
              lg={3}
              md={24}
            
              id="banner"
              style={{
                cursor: "pointer",
                textAlign: "left",
                
              }}
              
            >
              <img
                className="logo logo-desktop"
                alt="City of Toronto Logo"
                src={logo}
                onClick={(_) => (window.location = "https://www.toronto.ca")}
                style={{
                  width: "100%",
                  maxWidth: "160px",
                  minWidth: "112px",
                  height: "auto",
                }}
              ></img>
                <img
                className="logo logo-mobile"
                alt="City of Toronto Logo"
                src={logo}
                onClick={(_) => (window.location = "https://www.toronto.ca")}
                style={{
                  width: "100%",
                  maxWidth: "160px",
                  minWidth: "112px",
                  height: "auto",
                }}
              ></img>
            </Col>
            
          </Row>
        </Header>
      </Layout>
    );
  }
}

export default PageHeader;
