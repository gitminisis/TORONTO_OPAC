import React from "react";
import { Modal, Form, Icon, Input, Button, Checkbox } from "antd";
import MainForm from "./MainForm";
class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.form = React.createRef();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.form.current.submit();
    this.form.current.resetFields();
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
              form="mainForm"
              key="submit"
              htmlType="submit"
            
            >
              Submit
            </Button>,
          ]}
        >
          <MainForm ref={this.form} close={this.handleCancel} />
          <Button hidden   onClick={(_) => {
                this.handleOk();
              }} id="hiddenModalButton"></Button>
        </Modal>
      </div>
    );
  }
}

export default MailForm;
