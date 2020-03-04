import React from "react";
import { Row, Col, Button, Input, Form, Menu, Dropdown, Icon } from "antd";
const { Search } = Input;
import { isLogged, invalidLogin } from "../../services/authentication";
import LoginModal from "../LoginModal";
import { logout } from "../../services/logout";
import { getAll } from "../../services/savedBag";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  openModal = _ => {
    this.setState({
      showModal: true
    });
  };
  closeModal = _ => {
    this.setState({
      showModal: false
    });
  };

  render() {
    let isLoggedOn = isLogged();

    let user = document.getElementById("userid").innerText;

    let sessionId = document.getElementById("session-id").innerText;

    return (
      <Row gutter={0}>
        <LoginModal
          visible={this.state.showModal}
          closeHandler={this.closeModal}
        ></LoginModal>
        {isLoggedOn ? (
          <>
            <Col span={6}>
              <Dropdown
                overlay={
                  <Menu style={{ textAlign: "center" }}>
                    <Menu.Item
                      key="1"
                      onClick={_ => {
                        window.location = `${
                          document.getElementById("session-id").innerText
                        }?get&file=[MIT_ROOT]view-bag.html`;
                      }}
                    >
                      Saved Bag
                    </Menu.Item>

                    <Menu.Item key="2">Saved Search</Menu.Item>
                    <Menu.Item key="3">
                      <Button
                        onClick={_ => {
                          logout(sessionId).then(res => {
                            window.location = "/";
                          });
                        }}
                        type="danger"
                        ghost
                      >
                        LOGOUT
                      </Button>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button id="welcome-button">
                  Welcome <strong> {user}</strong> <Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
          </>
        ) : (
          <Col span={6}>
            <Button id="welcome-button" onClick={_ => this.openModal()}>
              Login
            </Button>
          </Col>
        )}

        <Col span={18}>
          <Form
            style={{ marginTop: "1px" }}
            method="POST"
            id="searchBarForm"
            action={`${sessionId}?UNIONSEARCH&APPLICATION=UNION_VIEW&LANGUAGE=144&SIMPLE_EXP=Y&ERRMSG=[MIT_ROOT]no-record.html`}
          >
            <Search
              allowClear
              disabled={!isLoggedOn}
              prefix={
                <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              name="KEYWORD_CL"
              placeholder="Search Term"
              enterButton={
                <Button type="submit" id="searchSubmitBtn">
                  Search
                </Button>
              }
              onSearch={value =>
                document.getElementById("searchBarForm").submit()
              }
            />
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
