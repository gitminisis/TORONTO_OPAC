import React from "react";
import { Modal, Form, Icon, Input, Button, Checkbox } from "antd";
import MainForm from "./MainForm";
class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.form = React.createRef();
  }
  submit() {
    this.form.current.handleSubmit();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.submit();
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="Additional Clearance Request"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <MainForm ref={this.form} />
        </Modal>
      </div>
    );
  }
}

export default MailForm;
