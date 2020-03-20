import React from "react";
import { Tabs, Icon, Col, Row, Card, Tooltip, message, Empty } from "antd";
import { save } from "../../services/savedBag";

class Image extends React.Component {
  render() {
    let item = this.props.item;
    if (item.length === 0) {
      return <Empty />;
    }
    return (
      <Col lg={6} md={24}>
        <Card
          hoverable
          bodyStyle={{ display: "none" }}
          style={{ width: "100%", margin: "30px auto" }}
          cover={
            <video id="video-overlay_html5_api" data-video-id="6103839363001" style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;" poster="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5793224005001/dd5c321d-cfa8-41bc-b459-ec78c5e5934b/a3e8a309-af9e-478a-8f24-ef29b62373ac/1280x720/match/image.jpg" data-account="5793224005001" data-player="ryVB9iveX" data-embed="default" data-application-id="" class="vjs-tech" tabindex="-1" src="blob:https://media.ford.com/2ebe498a-3db7-4a8a-b777-635ab52288bc" />
          }
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
        ></Card>
      </Col>
    );
  }
}

export default Image;
