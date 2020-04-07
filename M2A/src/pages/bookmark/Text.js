import React from "react";
import { Tabs, Icon, Col, Row, Card, Tooltip, message, Empty } from "antd";
import { save } from "../../services/savedBag";
import audio from "../../assets/audio/audio.mp3";
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
          actions={[
            <Tooltip title="Remove">
              <Button onClick={(_) => this.props.remove(item, "Textual")}>
                {" "}
                <Icon type="close-circle" /> Remove
              </Button>
            </Tooltip>,
            <Tooltip title="Copy URL">
              {" "}
              <input
                style={{
                  height: 0,
                  position: "absolute",
                  zIndex: "-1",
                  opacity: ".01",
                }}
                id={item}
                value={item}
              ></input>
              <Button onClick={(_) => this.props.copy(item)}>
                <Icon type="link" /> Copy
              </Button>
            </Tooltip>,
          ]}
        >
          <div className="detailVideoContainer">
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
