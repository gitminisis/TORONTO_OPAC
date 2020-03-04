import React from "react";
import { Row, Col } from "antd";

class DataRow extends React.Component {
  createMarkUp(str) {
    return { __html: str };
  }
  render() {
    return (
      <div>
        {this.props.content ? (
          <Row className="detailRow">
            <Col className="detailRowTitle" span={24}>
              {this.props.title}
            </Col>
            <Col className="detailRowContent" span={24}>
              <pre>{this.props.content}</pre>
            </Col>
          </Row>
        ) : null}
      </div>
    );
  }
}

export default DataRow;
