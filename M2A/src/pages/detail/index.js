import React from "react";
import PageLayout from "../../components/Layout";
import { xmlToJson } from "../../services";
import { Row, Col, Descriptions, Card } from "antd";
import { extractData } from "../../services/m2a";
import Data from "./Data";
import Carousel from "./Carousel";
import Media from "./Media";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    let xml = document.querySelector("#detail_xml");

    let json = xmlToJson(xml, "report.item", "report.item.item_subject");

    this.state = {
      data: json.report
    };
    this.tree = React.createRef();
  }
  render() {
    let rawData = this.state.data;

    return (
      <PageLayout>
        <Row>
          {" "}
          <Col lg={{ span: 18, offset: 3 }} md={24}>
            <Card style={{ width: "100%" }}>
              <Row gutter={16}>
                <Col md={24} lg={10} id="detailDescriptions">
                  <Data data={rawData} />
                </Col>
                <Col md={24} lg={14}>
                  <Carousel />
                </Col>
                <Col span={24}>
                  <Media />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default Detail;
