import React from "react";
import { Row, Col, Card, List, Avatar, Icon } from "antd";
const { Meta } = Card;
import noImage from "../../assets/images/no-image.png";
import FordCar from "../../assets/images/fordCar.jpg";
import { FiCameraOff } from "react-icons/fi";
const gridStyle = {
  width: "50%",
  textAlign: "center"
};
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
              <Row>
                <Col lg={16} md={24}>
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
                <Col lg={8} md={12}>
                  {" "}
                  <Card title="Media" className="mediaCard">
                    <Card.Grid
                      hoverable={false}
                      style={gridStyle}
                      className={index % 2 === 0 ? "mediaFile" : ""}
                    >
                      <Icon type="picture" />
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={gridStyle}>
                      <Icon type="audio" />
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                      <Icon type="video-camera" />
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                      <Icon type="file-text" />
                    </Card.Grid>
                  </Card>
                </Col>
              </Row>
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
