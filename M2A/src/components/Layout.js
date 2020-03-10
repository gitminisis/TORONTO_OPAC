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
          <PageDrawer />
          <Row justify="center" align="middle">
            <Col lg={6} md={0}></Col>
            <Col
              lg={12}
              md={24}
              style={{
                paddingTop: "30px",
                paddingBottom: "30px"
              }}
            >
              {" "}
              <SearchBar />
            </Col>
          </Row>
          {this.props.children}

          <BackTop className="backTop">
            <Icon type="caret-up" />
          </BackTop>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
