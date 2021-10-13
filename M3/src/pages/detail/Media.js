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

const { TabPane } = Tabs;

import Image from "./Image";
import Video from "./Video";
import Audio from "./Audio";
import Text from "./Text";
import { extractData } from "../../services/m3";

import { FaImage, FaVolumeUp, FaPlayCircle, FaFileAlt } from "react-icons/fa";
class Media extends React.Component {
  render() {
    let rawData = this.props.data;
    let data = extractData(rawData.item);

    let image = data.media.filter((e) => e.type === "image");

    let audio = data.media.filter((e) => e.type === "audio");

    let video = data.media.filter((e) => e.type === "video");

    let text = data.media.filter((e) => e.type === "text");
    return (
      <div id="mediaTabs">
        <hr />
        <h3>Media</h3>
        <Tabs defaultActiveKey="2">
          {/* <TabPane
            tab={
              <span>
                <FaImage />
              </span>
            }
            key="1"
          >
            <Row gutter={16}>
              <Image item={image}></Image>
            </Row>
          </TabPane> */}
          <TabPane
            tab={
              <span>
                <FaPlayCircle />
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
                <FaVolumeUp />
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
                <FaFileAlt />
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
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          {" "}
         
        </div>
      </div>
    );
  }
}

export default Media;
