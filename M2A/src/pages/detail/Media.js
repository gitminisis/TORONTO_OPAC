import React from "react";
import { Tabs, Icon, Col, Row, Card, Tooltip, message, Empty } from "antd";
const { Meta } = Card;
const { TabPane } = Tabs;
import { save } from "../../services/savedBag";
import Image from "./Image";
import Video from "./Video";
class Media extends React.Component {
  render() {
    let image = [
      "https://media.ford.com/content/dam/fordmedia/North%20America/US/2019/11/05/DHF24672_C1.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg",
      "https://media.ford.com/content/dam/fordmedia/North%20America/US/Events/19-SEMA/SUVs/goodboydaisy-expedition/SEMA2019p0009%20402.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg",
      "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/exterior/DJI_0200_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg",
      "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/exterior/DSC09949_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg"
    ];

    let audio = [];

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
              {image.map(item => (
                <Image item={item}></Image>
              ))}
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
              {video.map(item => (
                <Video item={item} />
              ))}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="audio" />
              </span>
            }
            key="3"
          ></TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="file-text" />
              </span>
            }
            key="4"
          ></TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Media;
