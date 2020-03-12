import React from "react";
import PageLayout from "../../components/Layout";

import {
  Row,
  Col,
  List,
  Layout,
  Card,
  PageHeader,
  Button,
  Icon,
  Radio
} from "antd";
const { Content } = Layout;
import { FaTh, FaList, FaTree } from "react-icons/fa";
import Tree from "../../components/Tree";

const { Meta } = Card;
class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true
    };
    this.tree = React.createRef();
  }
  openTree = _ => {
    this.tree.current.showDrawer();
  };
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }

    return (
      <PageLayout>
        <Row>
          <Row>
            <Col lg={{ span: 18, offset: 3 }} md={24}>
              <Row>
                <Col span={24}>
                  {" "}
                  <Tree ref={this.tree}></Tree>
                  <PageHeader
                    ghost={false}
                    title="SUMMARY LIST"
                    extra={[
                      <Button type="primary" onClick={this.openTree}>
                        <FaTree />
                      </Button>,
                      <Button type="primary" onClick={this.openTree}>
                        <FaTree />
                      </Button>,
                      <Button type="primary" onClick={this.openTree}>
                        <FaTree />
                      </Button>
                    ]}
                  ></PageHeader>
                </Col>
                <Col span={24}>
                  <div style={{ height: "1200px" }}></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </PageLayout>
    );
  }
}

export default Summary;
