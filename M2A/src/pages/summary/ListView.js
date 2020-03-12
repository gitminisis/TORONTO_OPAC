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
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={data.item}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item, index) => (
          <Row className="listRow">
            <Col lg={4} md={12} className="listRowMediaCol">
              {" "}
              <Row>
                {" "}
                <Col span={24} className="summaryListImageContainer">
                  <img src={index % 2 === 0 ? FordCar : noImage} />
                </Col>
              </Row>
            </Col>
            <Col lg={20} md={12}>
              {" "}
              <List.Item
                key={item.item_sisn}
                actions={[
                  <IconText
                    type="star-o"
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    type="like-o"
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    type="message"
                    text="2"
                    key="list-vertical-message"
                  />
                ]}
              >
                <List.Item.Meta
                  title={
                    <a href={item.item_link}>
                      <strong>{item.item_title}</strong>
                    </a>
                  }
                  description={item.item_level_desc}
                />
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
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
