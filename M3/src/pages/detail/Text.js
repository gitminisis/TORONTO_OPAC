import React from "react";
import {
  Tabs,
  Icon,
  Col,
  Row,
  Card,
  Tooltip,
  message,
  Empty,
  Button,
} from "antd";
import { save } from "../../services/savedBag";
import { downloadMedia } from "../../services/index";
class Audio extends React.Component {
  render() {
    let data = this.props.item;
    if (data.length === 0) {
      return <Empty className="noMedia" />;
    }
    return data.map((item) => (
      <Col xl={8} lg={12} md={12} sm={24}>
        <Card
          bordered
          className="detailCard"
          hoverable
          style={{
            width: "100%",
            marginTop: "40px",

            textAlign: "center",
          }}
        >
          <div
            className="detailVideoContainer"
            onClick={(_) => window.open(item.ref, "_blank")}
          >
            {" "}
            <Icon
              type="file-text"
              style={{
                fontSize: "6rem",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            />
          </div>
        </Card>
      </Col>
    ));
  }
}

export default Audio;
