import React from "react";
import { Row, Col, Card, List, Avatar, Icon } from "antd";
const { Meta } = Card;
import noImage from "../../assets/images/no-image.png";
import FordCar from "../../assets/images/fordCar.jpg";
import { FiCameraOff } from "react-icons/fi";
class ListView extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.item}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item, index) => (
          <Row className="listRow" gutter={8}>
            <Col lg={5} md={10} className="listRowMediaCol">
              {" "}
              <Row>
                {" "}
                <Col span={24} className="summaryListImageContainer">
                  <img src={index % 2 === 0 ? FordCar : noImage} />
                </Col>
              </Row>
            </Col>
            <Col lg={19} md={14}>
              {" "}
              <List.Item key={item.item_sisn}>
                <List.Item.Meta
                  title={
                    <a href={item.item_link}>
                      <strong>{item.item_title}</strong>
                    </a>
                  }
                  description={`Level: ${item.item_level_desc}`}
                />
                <p> {`Reference Code: ${item.item_id}`}</p>
              </List.Item>
            </Col>
          </Row>
        )}
      />
    );
  }
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default ListView;
