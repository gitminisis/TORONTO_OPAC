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
                  Artifact &amp; Fine Art Collection - Toronto History Museums |
                  City of Toronto
                </h1>
                <Col span={24} id="pageTitle">
                  <h1>Toronto History Museums Artifact Collection</h1>
                </Col>

                <Col span={24} id="pageDesc">
                  <h1>
                    Explore the City of Toronto's online collection including
                    150,000 artifacts, 1.1 million archaeological specimens, and
                    3,000 artworks.
                  </h1>
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
                  <SearchBar />
                </Col>
              </Row>{" "}
              <Row justify="center" align="middle">
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
