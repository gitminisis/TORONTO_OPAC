import React from "react";
import { Row, Col, Button, Switch } from "antd";
class DataAction extends React.Component {
  render() {
    return (
      <Row gutter={4}>
        <Col span={8}>
          <Switch onChange={e => this.props.switch(e)} />
          <span> Selected Records Only</span>
        </Col>
        <Col span={4}>
          <Button type="primary" ghost>
            PRINT ALL{" "}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default DataAction;
