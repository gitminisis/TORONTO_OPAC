import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Layout, Row, Col, Card, Button } from "antd";

import { BackTop } from "antd";
import SearchBar from "./SearchBar";

class PageLayout extends React.Component {
  render() {
    return (
      <Row>
        <Layout>
          <Header />

          <Layout>
            <Row justify="center" align="middle">
              <Col lg={6} md={0}></Col>
              <Col
                lg={12}
                md={24}
                style={{
                 
                  padding: "30px"
                }}
              >
                {" "}
                <SearchBar />
              </Col>
            </Row>
            {this.props.children}

            <BackTop />
          </Layout>

          <Footer />
        </Layout>
      </Row>
    );
  }
}

export default PageLayout;
