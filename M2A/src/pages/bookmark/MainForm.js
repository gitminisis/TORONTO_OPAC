import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import axios from "axios";
class MainForm extends React.Component {
  handleSubmit = (e) => {
    // document.getElementById("comment").value = "Hello";
    let subject = "Additional Clearance Request";
    let sessid = document.getElementById("session-id").innerText;
    let url = `${sessid}?save_mail_form&async=y&xml=y&subject_default=${subject}`;
    axios
      .post(
        url,
        `firstName=${document.getElementById("firstName").value}&lastName=${
          document.getElementById("lastName").value
        }&phone=${document.getElementById("phone").value}&email=${
          document.getElementById("email").value
        }&comment=Henol`
      )
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    let subject = "Additional Clearance Request";
    let sessid = document.getElementById("session-id").innerText;
    let url = `${sessid}?save_mail_form&async=n&xml=y&subject_default=${subject}`;
    return (
      <Form id="main-form" action={url} type="POST">
        <Form.Item>
          <Input
            id="firstName"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="First Name"
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="lastName"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Last Name"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            id="email"
            placeholder="Email Address"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
            id="phone"
            placeholder="Phone Number"
          />
        </Form.Item>
        <Form.Item style={{ display: "none" }}>
          <Input name="comment" id="comment" />
        </Form.Item>
      </Form>
    );
  }
}

export default MainForm;
