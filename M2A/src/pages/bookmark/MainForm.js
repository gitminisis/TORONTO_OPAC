import React from "react";
import { Form, Icon, Input, Button, Checkbox, Tooltip, Modal } from "antd";
import axios from "axios";
import { getAll } from "../../services/savedBag";
class MainForm extends React.Component {
  generateMailBody() {
    let email = document.getElementById("form_email").value;
    let name = document.getElementById("form_name").value;
    let plannedUsage = document.getElementById("form_plannedUsage").value;
    let lengthUsage = document.getElementById("form_lengthUsage").value;
    let recipient = document.getElementById("form_recipient").value;
    let project = document.getElementById("form_project").value;
    let detailUsage = document.getElementById("form_detailUsage").value;
    let videos = getAll("Moving Image").join("\n");
    let images = getAll("Image").join("\n");
    let texts = getAll("Textual").join("\n");
    let audios = getAll("Audio").join("\n");
    let form = `Request Detail:\n Full Name: ${name}\n Email: ${email}\n Planned Usage: ${plannedUsage}\n Length Usage: ${lengthUsage}\n Recipient: ${recipient}\n Project/Order: ${project}\n Detail Usage: ${detailUsage}\n\n Requested Assets:\n Image:\n${images}\n Moving Image:\n${videos}\n Audio:\n${audios}\n Textual:\n${texts}\n\nEnd Of Email`
    return form;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let subject = "Additional Clearance Request";
        let sessid = document.getElementById("session-id").innerText;
        let email = document.getElementById("form_email").value;
        let url = `${sessid}?save_mail_form&async=y&xml=y&subject_default=${subject}&from_default=noreply@minisisinc.com&to_default=${email}`;
        axios
          .post(
            url,
            `sender=noreply@minisisinc.com&receiver=${email}&cc=noreply@minisisinc.com&subject=${subject}&mailbody=${this.generateMailBody()}`
          )
          .then((res) => {
            // console.log(res);
            this.props.form.resetFields();
            let hiddenButton = document.getElementById("hiddenModalButton");
            hiddenButton.click();
          });
      }
    });
  };
  render() {
    console.log(this.props.form);
    const { getFieldDecorator } = this.props.form;
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} id="mainForm">
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Full Name</span>}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your full name!",
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Planned Usage</span>}>
          {getFieldDecorator("plannedUsage", {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input.TextArea />)}
        </Form.Item>

        <Form.Item label={<span>Length Usage</span>}>
          {getFieldDecorator("lengthUsage", {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label={<span>Recipient</span>}>
          {getFieldDecorator("recipient", {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Project/Order</span>}>
          {getFieldDecorator("project", {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Detailed Usage</span>}>
          {getFieldDecorator("detailUsage", {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input.TextArea />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked",
            initialValue: false,
            rules: [
              {
                required: true,
                message: "You must accept the Terms of Use",
                transform: (value) => value || undefined,
                type: "boolean",
              },
            ],
          })(
            <Checkbox>
              I have read the <a href="">Term of Use</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

class WrappedForm extends React.Component {
  handleSubmit = (e) => {
    console.log(123);
    // document.getElementById("comment").value = "Hello";
  };
  close = (_) => {
    this.props.close();
  };
}
WrappedForm = Form.create({
  name: "form",
  mapPropsToFields(props) {
    const close = props.close;
  },
})(MainForm);
export default WrappedForm;
