import React from "react";
import { Card, Input, Form, Button, Row, Col, Modal } from "antd";

import Tree from "../../components/Tree";

import { isLogged } from "../../services/authentication";
import FieldSelect from "./FieldSelect";
class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    let sessionId = document.getElementById("session-id").innerText;
    let action = `${sessionId}?UNIONSEARCH&APPLICATION=UNION_VIEW&LANGUAGE=144&SIMPLE_EXP=Y&ERRMSG=[MIT_ROOT]no-record.html`;
    let isLoggedOn = isLogged();
    return (
      <>
        <Card
          bodyStyle={{ textAlign: "center" }}
          style={{ marginTop: 16, marginBottom: "30px" }}
          type="inner"
          title={<strong>ADVANCED SEARCH</strong>}
        >
          <Row gutter={4}>
            <Col span={22} offset={1} style={{ marginBottom: "50px" }}>
              <Form
                id="simpleSearch"
                layout="inline"
                action={action}
                className="login-form"
                method="POST"
                onSubmit={e => {}}
                style={{ width: "100%" }}
              ></Form>

              <FieldSelect />
            </Col>
          </Row>

          <Col gutter={36}>
            <Col span={8}>
              <Button
                style={{ width: "75%" }}
                onClick={this.showModal}
                disabled={!isLoggedOn}
              >
                Browse
              </Button>
            </Col>
            <Col span={8}>
              <Button
                style={{ width: "75%" }}
                onClick={_ =>
                  (window.location = `${
                    document.getElementById("session-id").innerText
                  }?get&file=[MIT_ROOT]home.html`)
                }
              >
                Simple Search
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "75%" }}>Help</Button>
            </Col>
          </Col>
        </Card>
        <Modal
          footer={null}
          title="Browse"
          visible={this.state.visible}
          style={{ width: "500px" }}
          onCancel={this.handleCancel}
        >
          <Tree />
        </Modal>
      </>
    );
  }
}

export default AdvancedSearch;
