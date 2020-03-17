import React from "react";
import { Col, Card } from "antd";
const { Meta } = Card;
import noImage from "../../assets/images/no-image.png";
import FordCar from "../../assets/images/fordCar.jpg";
import { FiCameraOff } from "react-icons/fi";
class GridView extends React.Component {
  render() {
    return new Array(12).fill("").map((item, index) => (
      <Col lg={8} md={12} xs={24}>
        <Card
          bordered
          onClick={_ => {}}
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
              backgroundImage: `url(https://pbs.twimg.com/media/EEEfO2JU8AApJZO.jpg)`
            }}
          ></div>
          <Meta title={"FORD Mustang"} description={"Search FORD Mustang"} />
        </Card>
      </Col>
    ));
  }
}

export default GridView;
