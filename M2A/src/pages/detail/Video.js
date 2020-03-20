import React from "react";
import { Tabs, Icon, Col, Row, Card, Tooltip, message, Empty } from "antd";
import { save } from "../../services/savedBag";
import video from "../../assets/video/video.mp4";
class Image extends React.Component {
  render() {
    let item = this.props.item;
    if (item.length === 0) {
      return <Empty />;
    }
    return (
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
            <video
              style={{ width: "100%" }}
              src={`/m2a/dist/${video}`}
              controls
            ></video>
          </div>
        </Card>
      </Col>
    );
  }
}

export default Image;
