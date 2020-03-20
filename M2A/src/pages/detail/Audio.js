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
    return data.map(item => (
      <Col xl={8} lg={12} md={12} sm={24}>
        <Card
          bordered
          className="detailCard"
          hoverable
          style={{
            width: "100%",
            marginTop: "40px",

            textAlign: "center"
          }}
          actions={[
            <Tooltip title="Download">
              <span>
                <Icon type="download" /> Low
              </span>
            </Tooltip>,
            <Tooltip title="Download">
              <span>
                <Icon type="download" /> High
              </span>
            </Tooltip>,
            <Tooltip title="Additional Clearance">
              <span>
                <Icon
                  type="save"
                  onClick={_ => {
                    let res = save(item);
                    if (res) {
                      message.success("This asset was succesfully saved !");
                    } else {
                      message.warning("This asset has already been saved");
                    }
                  }}
                />{" "}
                Save
              </span>
            </Tooltip>
          ]}
        >
          <div className="detailVideoContainer">
            {" "}
            <Icon
              type="audio"
              style={{
                fontSize: "6rem",
                marginBottom: "20px",
                marginTop: "20px"
              }}
            />
            <audio style={{ width: "100%" }} src={audio} controls></audio>
          </div>
        </Card>
      </Col>
    ));
  }
}

export default Audio;
