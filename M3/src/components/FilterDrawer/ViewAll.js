import React from "react";
import { Modal, Button, Card, Row, Col, Checkbox, Icon } from "antd";
class ViewAll extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    if (this.props.data === null) {
      return <></>;
    }
    let data = this.props.data.div.xml.filter;
    (data);

    return (
      <div>
        <Modal
          title={data._title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[<Button onClick={this.handleOk}>Close</Button>]}
        >
          <Card
            className="filterCard"
            key={data._name}
            headStyle={{
              fontSize: "15px !important",
              backgroundColor: "rgba(0,0,0,.03)",
            }}
            title={data._title.trim()}
            extra={<Icon type="caret-down" />}
          >
            <Row>
              {data.item_group.map((item) => (
                <Col
                  span={24}
                  className="filterCol"
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Checkbox
                    checked={item.item_selected !== "N"}
                    onClick={(_) => {
                      window.location = `${item.item_link}&DATABASE=COLLECTIONS`;
                    }}
                  >
                    {item.item_value} ({item.item_frequency})
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Card>
        </Modal>
      </div>
    );
  }
}

export default ViewAll;
