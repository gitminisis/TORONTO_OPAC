import React from "react";
import { Row, Col, List } from "antd";

import { HOME_TILES } from "../../services/home";
const gridStyle = {
  width: "50%",
  textAlign: "center"
};
class ListView extends React.Component {
  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={HOME_TILES}
        renderItem={(item, index) => (
          <Row className="listRow" gutter={0} style={{ background: "white" }}>
            <Col lg={6} md={10} className="listRowMediaCol">
              {" "}
              <Row>
                <Col span={24} className="summaryListImageContainer">
                  <img src={item.image} />
                </Col>
              </Row>
            </Col>
            <Col lg={18} md={14}>
              <Row>
                <Col lg={16} md={24}>
                  <List.Item>
                    <List.Item.Meta title={item.title} />
                    <p>{item.description}</p>
                  </List.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      />
    );
  }
}

export default ListView;
