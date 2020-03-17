import React from "react";
import PageLayout from "../../components/Layout";
import { MdTune, MdSort } from "react-icons/md";

import { xmlToJson } from "../../services";
import {
  Row,
  Col,
  List,
  Layout,
  Card,
  PageHeader,
  Button,
  Icon,
  Radio,
  Collapse,
  Select,
  Pagination
} from "antd";
const { Content } = Layout;
import { FaTh, FaList, FaTree } from "react-icons/fa";
import Tree from "../../components/Tree";
import FilterDrawer from "../../components/FilterDrawer";
import { JSON_ARRAY_FIELD } from "../../services/index";
import GridView from "./GridView";
import ListView from "./ListView";
const { Meta } = Card;
const { Option } = Select;
import Filter from "./Filter";
class Summary extends React.Component {
  constructor(props) {
    super(props);
    let xml = document.querySelector("#summary_xml");

    let json = xmlToJson(xml, JSON_ARRAY_FIELD);

    this.state = {
      data: json.report,
      grid: false
    };
    this.tree = React.createRef();
    this.filter = React.createRef();
  }
  openTree = _ => {
    this.tree.current.showDrawer();
  };
  openFilter = _ => {
    this.filter.current.showDrawer();
  };
  render() {
    let searchLink = document.getElementById("search-link").innerText;
    let { data } = this.state;

    return (
      <PageLayout>
        <Row>
          <Row>
            <Col lg={{ span: 18, offset: 3 }} md={24}>
              <Row>
                <Col span={24}>
                  <Card
                    title={
                      <h4>
                        {data.record_count} results for "{data.search_statement}
                        "
                      </h4>
                    }
                    extra={
                      <Button.Group id="summaryButtonGroup">
                        {" "}
                        <Button onClick={this.openTree}>
                          <FaTree />
                        </Button>
                        <Button
                          type={this.state.grid ? "primary" : ""}
                          onClick={_ => this.setState({ grid: true })}
                          value="grid"
                        >
                          {" "}
                          <FaTh />
                        </Button>
                        <Button
                          type={!this.state.grid ? "primary" : ""}
                          onClick={_ => this.setState({ grid: false })}
                          value="list"
                        >
                          {" "}
                          <FaList />
                        </Button>
                      </Button.Group>
                    }
                  >
                    {" "}
                    <Filter data={data.filters.div.xml.filter} />
                    <Row>
                      {" "}
                      <Col lg={{ span: 8, offset: 16 }} md={{ span: 24 }}>
                        {" "}
                        <div style={{ float: "right", maxWidth: "420px" }}>
                          {" "}
                          {/* <Select
                            defaultValue="default"
                            style={{ width: "200px" }}
                          >
                            <Option value="default">Relevance</Option>
                            <Option value="title">Title</Option>
                            <Option value="date-asc">Date Ascending</Option>
                            <Option value="date-desc">Date Descending</Option>
                          <Option value="location-asc">
                              Location Ascending
                            </Option>
                            <Option value="location-desc">
                              Location Descending
                            </Option>
                            <Option value="box">box</Option>
                            <Option value="folder">Folder</Option>
                          </Select> */}
                          <Tree ref={this.tree}></Tree>
                          <FilterDrawer
                            data={data.filters.div.xml.filter}
                            ref={this.filter}
                          ></FilterDrawer>
                        </div>
                      </Col>
                      <Col span={24}>
                        <Row>
                          {this.state.grid ? (
                            <GridView data={data} />
                          ) : (
                            <ListView data={data} />
                          )}
                        </Row>
                        {/* {data.pagination ? (
                          <Pagination
                            onChange={e => {
                              let url = data.pagination.a[e - 1]._href;
                              window.location = url;
                            }}
                            defaultCurrent={Number.parseInt(
                              data.pagination.a.filter(e => e.b)[0].b
                            )}
                            total={data.pagination.a.length}
                          />
                        ) : null} */}
                      </Col>
                      <Col sm={24} md={0} lg={0} id="sumNavBar">
                        <Button
                          sm={6}
                          className="sumNavBarButton"
                          onClick={this.openFilter}
                        >
                          <MdTune />
                        </Button>
                        <Button sm={6} className="sumNavBarButton">
                          <MdSort />
                        </Button>
                        <Button
                          sm={6}
                          className="sumNavBarButton"
                          onClick={this.openTree}
                        >
                          <FaTree />
                        </Button>
                        <Button
                          sm={6}
                          className="sumNavBarButton"
                          onClick={_ =>
                            this.setState({ grid: !this.state.grid })
                          }
                        >
                          {!this.state.grid ? <FaTh /> : <FaList />}
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </PageLayout>
    );
  }
}

export default Summary;