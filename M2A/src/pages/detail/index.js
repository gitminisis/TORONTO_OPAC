import React from "react";
import PageLayout from "../../components/Layout";
import { xmlToJson } from "../../services";
import { Row, Col, Descriptions, Card, Button, Icon } from "antd";
import { extractData } from "../../services/m2a";
import Data from "./Data";
import Carousel from "./Carousel";
import Media from "./Media";
import { DETAIL_JSON_ARRAY_FIELD } from "../../services/index";
import { FaTree } from "react-icons/fa";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    let xml = document.querySelector("#detail_xml");

    let json = xmlToJson(xml, DETAIL_JSON_ARRAY_FIELD);

    this.state = {
      data: json.report
    };
    this.tree = React.createRef();
  }
  render() {
    let rawData = this.state.data;
    console.log(rawData);
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
          <Col sm={24} md={0} lg={0} id="mobileNavBar">
            <Button sm={8} className="detailMobileNavBarButton">
              <Icon type="arrow-left" />
            </Button>

            <Button sm={8} className="detailMobileNavBarButton">
              <Icon type="book" />
            </Button>
            <Button
              sm={8}
              className="detailMobileNavBarButton"
              onClick={this.openTree}
            >
              <FaTree />
            </Button>
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default Detail;
