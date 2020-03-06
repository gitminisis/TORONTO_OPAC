import React from "react";
import PageLayout from "../../components/Layout";

import { Row, Col, List, Layout, Card, PageHeader, Button, Icon } from "antd";
const { Content } = Layout;
import { FaTh, FaList } from "react-icons/fa";
import Tree from "../../components/Tree";

const { Meta } = Card;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true
    };
  }
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }

    return (
      <PageLayout>
        <Content>
          <Row>
            <Col lg={6} md={0} sm={0} xs={0}>
              <Card
                className="sideBarCard"
                title="SUBJECT SEARCH"
                style={{ width: "100%" }}
                bordered={false}
              >
                <Tree />
              </Card>
            </Col>
            <Col lg={18} md={24}>
              <Row>
                <Col span={24}>
                  {" "}
                  <PageHeader
                    ghost={false}
                    title="FEATURE COLLECTION"
                    extra={[
                      <Button
                        key="2"
                        style={{ fontSize: "20px" }}
                        onClick={_ => this.setState({ grid: false })}
                      >
                        <FaList />
                      </Button>,
                      <Button
                        key="1"
                        style={{ fontSize: "20px" }}
                        onClick={_ => this.setState({ grid: true })}
                      >
                        <FaTh />
                      </Button>
                    ]}
                  ></PageHeader>
                </Col>
                <Col span={24}>
                  <Row gutter={4}>
                    {new Array(12).fill("").map(e => {
                      if (this.state.grid) {
                        return (
                          <Col lg={6} xs={24}>
                            <Card
                              hoverable
                              style={{ width: "100%", marginTop: "4px" }}
                              cover={
                                <img
                                  alt="example"
                                  src="https://www.perrys.co.uk/static/images/unity/default/templates/vehicles/new/ford/mustang-mach-e/u19/overview.jpg"
                                />
                              }
                            >
                              <Meta
                                title="Ford Sedan"
                                description="Search Ford Sedan"
                              />
                            </Card>
                          </Col>
                        );
                      }
                      return null;
                    })}
                    {!this.state.grid ? (
                      <List
                        bordered
                        itemLayout="vertical"
                        size="large"
                        dataSource={new Array(12).fill("")}
                        renderItem={item => (
                          <List.Item
                            style={{ paddingLeft: "20px" }}
                            extra={
                              <img
                                width={272}
                                alt="logo"
                                src="https://www.perrys.co.uk/static/images/unity/default/templates/vehicles/new/ford/mustang-mach-e/u19/overview.jpg"
                              />
                            }
                          >
                            <List.Item.Meta title={<h3>Ford Sedan</h3>} />
                            About Ford Sedans. The Ford Motor Company has a
                            long, storied and innovative history of building
                            cars, going all the way back to 1913, when the Ford
                            ...
                          </List.Item>
                        )}
                      ></List>
                    ) : null}
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

export default Home;
