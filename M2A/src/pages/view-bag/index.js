import React from "react";
import PageLayout from "../../components/Layout";
import { Row, Col, Layout, Card, Empty, Breadcrumb, Tooltip, Icon } from "antd";
const { Meta } = Card;
const { Content } = Layout;
import SideBar from "../../components/SideBar";
import { getAll, deleteItem, copyURL } from "../../services/savedBag";
class ViewBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bag: getAll()
    };
  }
  updateBag = _ => {
    this.setState({ bag: getAll() });
  };
  render() {
    return (
      <PageLayout>
        <Content>
          <Row gutter={0}>
            <Col span={6}>
              <SideBar />
            </Col>
            <Col span={18}>
              <Row gutter={0}>
              
                <Col
                  span={24}
                  style={{
                    background: "#CED1D0",
                    padding: "18px 15px 14px 15px"
                  }}
                >
                 
                  <Breadcrumb separator="" id="breadcrumb">
                    <Breadcrumb.Item
                      href={`${
                        document.getElementById("session-id").innerText
                      }?get&file=[MIT_ROOT]home.html`}
                    >
                      HOME
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>></Breadcrumb.Separator>
                    <Breadcrumb.Item href="#">SAVED BAG</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col span={24} style={{ padding: "0 15px 20px 15px" }}>
                  <Row gutter={16}>
                    {this.state.bag.length === 0 ? (
                      <Empty
                        style={{ marginTop: "100px" }}
                        description={<h1>No Digital Assets Found</h1>}
                      ></Empty>
                    ) : null}
                    {this.state.bag.map(item => (
                      <Col lg={8} md={24}>
                        <Card
                          hoverable
                          style={{ width: "100%", margin: "0 auto" }}
                          cover={
                            <img
                              style={{
                                objectFit: "scale-down",
                                height: "200px"
                              }}
                              alt="example"
                              src={item}
                            />
                          }
                          actions={[
                            <Tooltip title="Download">
                              <Icon type="download" />
                            </Tooltip>,
                            <Tooltip title="Remove From Bag">
                              <Icon
                                type="delete"
                                onClick={_ => {
                                  deleteItem(item);
                                  this.updateBag();
                                }}
                              />
                            </Tooltip>,
                            <Tooltip title="Copy URL">
                              <input
                                style={{
                                  height: 0,
                                  position: "absolute",
                                  zIndex: "-1",
                                  opacity: ".01"
                                }}
                                id={item}
                                value={item}
                              ></input>
                              <Icon
                                style={{ zIndex: 0 }}
                                type="link"
                                onClick={_ => {
                                  copyURL(item);
                                }}
                              />
                            </Tooltip>
                          ]}
                        >
                          <Meta title="MIT Campus" description="MIT Campus" />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default ViewBag;
