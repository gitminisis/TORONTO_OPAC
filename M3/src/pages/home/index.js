import React from "react";
import PageLayout from "../../components/Layout";

import { Row, Col, Card, PageHeader } from "antd";

import GridView from "./GridView";
import ListView from "./ListView";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true,
    };
  }

  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }

    return (
      <PageLayout>
        <Row>
          <Col lg={{ span: 18, offset: 3 }} md={24}>
            <Row>
              <Col span={24}>
                <Row>{this.state.grid ? <GridView /> : <ListView />}</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default Home;
