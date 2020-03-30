import React from "react";
import { Tabs, Icon, Col, Row, Card, Tooltip, message, Empty } from "antd";
const { Meta } = Card;
const { TabPane } = Tabs;
import { save } from "../../services/savedBag";
import Image from "./Image";
import Video from "./Video";
import Audio from "./Audio";
import Text from "./Text";
import { extractData } from "../../services/m2a";
import noImage from "../../assets/images/no-image.png";
class Media extends React.Component {
  render() {
    let rawData = this.props.data;
    let data = extractData(rawData.item);

    let image = data.media.filter(e => (e.type = "Image"));

    let audio = ["s"];

    let video = [
      "blob:https://media.ford.com/2ebe498a-3db7-4a8a-b777-635ab52288bc"
    ];

    let text = [];
    return (
      <div id="mediaTabs">
        <hr />
        <h3>Graphics</h3>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <Icon type="picture" />
              </span>
            }
            key="1"
          >
            <Row gutter={16}>
              <Image item={image}></Image>
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="video-camera" />
              </span>
            }
            key="2"
          >
            <Row gutter={16}>
              <Video item={video} />
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="audio" />
              </span>
            }
            key="3"
          >
            {" "}
            <Row gutter={16}>
              <Audio item={audio} />
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="file-text" />
              </span>
            }
            key="4"
          >
            {" "}
            <Row gutter={16}>
              <Text item={text} />
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Media;
