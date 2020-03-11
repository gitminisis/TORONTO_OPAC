import React from "react";
import PageLayout from "../../components/Layout";
import Car from "../../assets/images/ford_car.jpeg";
import {
  Row,
  Col,
  List,
  Layout,
  Card,
  PageHeader,
  Button,
  Icon,
  Radio
} from "antd";
const { Content } = Layout;
import { FaTh, FaList, FaTree } from "react-icons/fa";
import Tree from "../../components/Tree";

const { Meta } = Card;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true
    };
    this.tree = React.createRef();
  }
  openTree = _ => {
    this.tree.current.showDrawer();
  };
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }

    return (
      <PageLayout>
        <Row>
          <Row>
            <Col lg={{ span: 18, offset: 3 }} md={24}>
              <Row>
                <Col span={24}>
                  {" "}
                  <Tree ref={this.tree}></Tree>
                  <PageHeader
                    ghost={false}
                    title="FEATURE COLLECTION"
                    extra={[
                      <Button type="primary" onClick={this.openTree}>
                        <FaTree />
                      </Button>,
                      <Radio.Group defaultValue="grid" buttonStyle="solid">
                        <Radio.Button
                          onClick={_ => this.setState({ grid: true })}
                          value="grid"
                        >
                          {" "}
                          <FaTh />
                        </Radio.Button>
                        <Radio.Button
                          onClick={_ => this.setState({ grid: false })}
                          value="list"
                        >
                          {" "}
                          <FaList />
                        </Radio.Button>
                      </Radio.Group>
                    ]}
                  ></PageHeader>
                </Col>
                <Col span={24}>
                  <Row>
                    {new Array(12).fill("").map(e => {
                      if (this.state.grid) {
                        return (
                          // <Col md={8} xs={24}>
                          //   <Card
                          //     className="homeCard"
                          //     hoverable
                          //     style={{
                          //       width: "100%",
                          //       marginTop: "2px",
                          //       height: "25vw",
                          //       backgroundImage: `url(${Car})`,
                          //       backgroundRepeat: "no-repeat",
                          //       backgroundPosition: "center",
                          //       backgroundSize: "contain"
                          //     }}
                          //   >
                          //     <div
                          //       style={{
                          //         width: "100%",
                          //         height: "100%"
                          //       }}
                          //     >
                          //       <Meta
                          //         title="Ford Sedan"
                          //         description="Search Ford Sedan"
                          //       />
                          //     </div>
                          //   </Card>
                          // </Col>
                          <Col md={8} xs={24}>
                            <Card
                              className="homeCard"
                              hoverable
                              style={{
                                width: "100%",
                                marginTop: "2px",
                                height: "auto"
                              }}
                            >
                              <img className="cardImage" src={Car} />

                              <Meta
                                title="Ford Mustang"
                                description="Search Ford Mustang"
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
                          <List.Item className="homeList">
                            <Row gutter={12}>
                              <Col span={5} sm={5} xs={7}>
                                {" "}
                                <div className="cardListImage">
                                  <img src={Car} />
                                </div>
                              </Col>
                              <Col
                                lg={{ offset: 6 }}
                                sm={{ offset: 6 }}
                                xs={{ offset: 7 }}
                              >
                                {" "}
                                <div className="cardListDesc">
                                  <h3>Ford Mustang</h3>
                                  <p>
                                    The Ford Mustang is an American car
                                    manufactured by Ford. It was originally
                                    conceived by Lee Iacocca. The Mustang
                                    debuted in 1964 with a price of $2,368, ...
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </List.Item>
                        )}
                      ></List>
                    ) : null}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </PageLayout>
    );
  }
}

export default Home;
