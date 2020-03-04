import React from "react";
import PageLayout from "../../components/Layout";
import { Row, Col, Layout, Empty } from "antd";
import SimpleSearch from "../home/SimpleSearch";
const { Content } = Layout;
class NoRecord extends React.Component {
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
              <Empty
                style={{ marginTop: "50px", marginBottom: "40px" }}
                description={<h2>No search results were found.</h2>}
              />
              <SimpleSearch searchLink={searchLink} />
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}
export default NoRecord;
