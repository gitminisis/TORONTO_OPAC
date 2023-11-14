import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Layout, Row, Col, Card, Button, Menu, Icon } from "antd";
const { Sider } = Layout;
import { BackTop } from "antd";
import SearchBar from "./SearchBar";
import PageDrawer from "./PageDrawer";

class PageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header />
          {/* <PageDrawer /> */}
          <Row id="layoutMainRow">
            <Col span={24}>
              <Row justify="center" align="middle">
                <h1 hidden>
                  Toronto History Museums Art and Artifact Collection Home -
                  City of Toronto
                </h1>
                <Col span={24} id="pageTitle">
                  <h1>Toronto History Museums Art and Artifact Collection</h1>
                </Col>

                <Col span={24} id="pageDesc">
                  <p style={{ fontSize: "20px" }}>
                    Explore the City of Toronto's online collection including
                    150,000 artifacts, 1.1 million archaeological specimens, and
                    3,000 artworks.
                  </p>
                </Col>
                <Col
                  lg={{ offset: 6, span: 12 }}
                  md={24}
                  style={{
                    paddingTop: "30px",

                    paddingBottom: "30px",
                  }}
                >
                  {" "}
                  <h2 hidden>New Search</h2>
                  <SearchBar />
                </Col>
              </Row>{" "}
              <Row justify="center" align="middle"  style={{ marginTop: "20px" }}>
                <Col span={24}>{this.props.children}</Col>
              </Row>
              <BackTop className="backTop">
                <Icon type="caret-up" />
              </BackTop>
            </Col>
          </Row>

          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
