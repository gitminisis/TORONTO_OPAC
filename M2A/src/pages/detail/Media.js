import React from "react";
import { Tabs, Icon } from "antd";

const { TabPane } = Tabs;
class Media extends React.Component {
  render() {
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
          ></TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="video-camera" />
              </span>
            }
            key="2"
          ></TabPane>
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
