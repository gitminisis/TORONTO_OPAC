import React from "react";
import { Col, Card } from "antd";
const { Meta } = Card;
import noImage from "../../assets/images/no-image.png";
import FordCar from "../../assets/images/fordCar.jpg";
import { FiCameraOff } from "react-icons/fi";
class GridView extends React.Component {
  render() {
    let { data } = this.props;
    return data.item.map((item, index) => (
      <Col md={8} xs={24}>
        <Card
          bordered
          onClick={_ => (window.location = item.item_link)}
          className="summaryCard"
          hoverable
          style={{
            width: "100%",
            marginTop: "2px",
            height: "auto",
            textAlign: "center"
          }}
        >
          <div
            className="summaryImageContainer"
            style={{
              backgroundImage: `url(${index % 2 === 0 ? FordCar : noImage})`
            }}
          ></div>
          <Meta title={item.item_title} description={item.item_level_desc} />
        </Card>
      </Col>
    ));
  }
}

export default GridView;
