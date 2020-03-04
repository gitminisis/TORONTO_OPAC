import React from "react";
import { Row, Col, Button } from "antd";
class TopBar extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <Row gutter={4}>
        {data.return_summary ? (
          <Col span={6}>
            <Button
              className="sortButton"
              style={{ width: "100%" }}
              href={data.return_summary.a._href}
            >
              BACK TO SEARCH RESULTS
            </Button>{" "}
          </Col>
        ) : (
          <></>
        )}

        {data.prev_page ? (
          <Col span={5}>
            <Button
              className="sortButton"
              style={{ width: "100%" }}
              href={data.prev_page.a._href}
            >
              PREVIOUS RECORD
            </Button>
          </Col>
        ) : (
          <></>
        )}
        {data.next_page ? (
          <Col span={5}>
            {" "}
            <Button
              className="sortButton"
              style={{ width: "100%" }}
              href={data.next_page.a._href}
            >
              NEXT RECORD
            </Button>
          </Col>
        ) : (
          <></>
        )}
        <Col span={4}>
          {" "}
          <Button className="sortButton" style={{ width: "100%" }}>
            PRINT RECORD
          </Button>
        </Col>
        <Col span={4}>
          {" "}
          <Button
            className="sortButton"
            style={{ width: "100%" }}
            href={`${
              document.getElementById("session-id").innerText
            }?get&file=[MIT_ROOT]home.html`}
          >
            NEW SEARCH
          </Button>
        </Col>
      </Row>
    );
  }
}

export default TopBar;
