import React from "react";
import { Row, Col, Button } from "antd";
class SortBar extends React.Component {
  render() {
    return (
      <Row gutter={4}>
        <Col span={4}>
          {" "}
          <Button className="sortButton" style={{ width: "100%" }}>
            SORT BY REFD
          </Button>
        </Col>
        <Col span={4}>
          {" "}
          <Button className="sortButton" style={{ width: "100%" }}>
            SORT BY TITLE
          </Button>
        </Col>
        <Col span={4}>
          {" "}
          <Button className="sortButton" style={{ width: "100%" }}>
            SORT BY DATE
          </Button>
        </Col>
        <Col span={4}>
          {" "}
          <Button className="sortButton" style={{ width: "100%" }}>
            SORT BY RELEVANCE
          </Button>
        </Col>
        <Col span={4}>
          {" "}
          <Button className="sortButton" style={{ width: "100%" }}>
            SORT BY LOCATION
          </Button>
        </Col>
        <Col span={4}>
          {" "}
          <Button className="sortButton" style={{ width: "100%" }}>
            SORT BY BOX
          </Button>
        </Col>
      </Row>
    );
  }
}

export default SortBar;
