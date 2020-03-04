import React from "react";
import "./index.css";
import { Button, Icon, Row, Col, Card } from "antd";
import { PageViewContext } from "../../context";
import { extractTopBarData } from "../../services";

class TopBar extends React.Component {
  render() {
    const data = extractTopBarData(this.props.data);

    return (
      <Card
        className="topBar-card"
        title={`Search Keyword: ${data.keyword}`}
        extra={
          <Button.Group style={{ float: "right" }}>
            <Button
              onClick={_ => (window.location = data.grid)}
              size="large"
              type={data.grid === "#" ? "primary" : "default"}
            >
              <Icon type="appstore" />
            </Button>
            <Button
              onClick={_ => (window.location = data.list)}
              size="large"
              type={data.list === "#" ? "primary" : "default"}
            >
              <Icon type="bars" />
            </Button>
          </Button.Group>
        }
      >
        <Row>
          <Col span={12}>
            <p>
              Displaying: {data.range} of {data.total} record(s)
            </p>
          </Col>

          <Col span={12}>
            <Button.Group style={{ float: "right" }}>
              <Button
                size="large"
                disabled={data.prev === "#"}
                onClick={_ => (window.location = data.prev)}
              >
                <Icon type="caret-left" theme="filled" />
              </Button>
              <Button
                size="large"
                disabled={data.next === "#"}
                onClick={_ => (window.location = data.next)}
              >
                <Icon type="caret-right" theme="filled" />
              </Button>
            </Button.Group>
          </Col>
        </Row>
      </Card>
    );
  }
}
TopBar.contextType = PageViewContext;
export default TopBar;
