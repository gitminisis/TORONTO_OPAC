import React from "react";
import PageLayout from "../../components/Layout";

import { Row, Col, Layout } from "antd";
const { Content } = Layout;
import SearchCard from "./AdvancedSearch";

class AdvancedSearch extends React.Component {
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }

    return (
      <PageLayout>
        <Content>
          <Row>
            <Col span={22} offset={1}>
              <SearchCard searchLink={searchLink} />
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default AdvancedSearch;
