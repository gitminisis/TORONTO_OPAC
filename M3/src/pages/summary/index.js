import React from "react";
import PageLayout from "../../components/Layout";
import { MdTune, MdSort } from "react-icons/md";

import { xmlToJson, BASE_URL } from "../../services";
import { Row, Col, Card, Button, Breadcrumb, Icon } from "antd";

import { FaTh, FaList, FaTree, FaHome } from "react-icons/fa";

import FilterDrawer from "../../components/FilterDrawer";
import { JSON_ARRAY_FIELD } from "../../services/index";
import GridView from "./GridView";
import ListView from "./ListView";

import SortDrawer from "../../components/SortDrawer";
class Summary extends React.Component {
  constructor(props) {
    super(props);
    let xml = document.querySelector("#summary_xml");

    let json = xmlToJson(xml, JSON_ARRAY_FIELD);
    // console.log(xml);
    this.state = {
      data: json.report,
      grid: false
    };
    this.tree = React.createRef();
    this.filter = React.createRef();
    this.sort = React.createRef();
  }
  openTree = _ => {
    this.tree.current.showDrawer();
  };
  openFilter = _ => {
    this.filter.current.showDrawer();
  };
  openSort = _ => {
    this.sort.current.showDrawer();
  };
  render() {
    let searchLink = document.getElementById("search-link").innerText;
    let { data } = this.state;
    data;
    return (
      <PageLayout>
        <Row>
          <Row>
            <Col lg={{ span: 18, offset: 3 }} md={24}>
              <Row>
                <Col span={24}>
                  <Breadcrumb
                    className="pageBreadcrumb"
              
                  >
                    <Breadcrumb.Item href="/">
                      <Icon type="home" />
                      <span>Toronto History Museums Artifact Collection</span>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>Search Result</Breadcrumb.Item>
                  </Breadcrumb>
                  <Card
                    className="summaryHeader"
                    title={
                      <h2 style={{ fontSize: "1.5rem" }}>
                        {data.record_count} results for "{data.search_statement}
                        "
                      </h2>
                    }
                    extra={
                      <Button.Group id="summaryButtonGroup">
                        {" "}
                        <Button
                          onClick={this.openFilter}
                          aria-label="Filter"
                          title="Filter"
                        >
                          <MdTune />
                        </Button>
                        <Button
                          onClick={this.openSort}
                          aria-label="Sort"
                          title="Sort"
                        >
                          <MdSort />
                        </Button>
                        <Button
                          type={this.state.grid ? "primary" : ""}
                          onClick={_ => this.setState({ grid: true })}
                          value="grid"
                          aria-label="Grid View"
                          title="Grid View"
                        >
                          {" "}
                          <FaTh />
                        </Button>
                        <Button
                          type={!this.state.grid ? "primary" : ""}
                          onClick={_ => this.setState({ grid: false })}
                          value="list"
                          aria-label="List View"
                          title="List View"
                        >
                          {" "}
                          <FaList />
                        </Button>
                      </Button.Group>
                    }
                  >
                    {" "}
                    {/* <Filter data={data.filters.div.xml.filter} />
                    <Sort data={data.sorts} /> */}
                    <Row>
                      {" "}
                      <Col lg={{ span: 8, offset: 16 }} md={{ span: 24 }}>
                        {" "}
                        <div style={{ float: "right", maxWidth: "420px" }}>
                          <FilterDrawer
                            dir="right"
                            data={
                              data.filters.div
                                ? data.filters.div.xml.filter
                                : null
                            }
                            ref={this.filter}
                          ></FilterDrawer>
                          <SortDrawer
                            dir="right"
                            data={data.sorts}
                            ref={this.sort}
                          ></SortDrawer>
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
                      </Col>
                      <Col sm={24} md={0} lg={0} id="mobileNavBar">
                        <Button
                          sm={6}
                          className="mobileNavBarButton"
                          onClick={this.openFilter}
                          aria-label="Filter"
                          title="Filter"
                        >
                          <MdTune />
                        </Button>
                        <Button
                          sm={6}
                          className="mobileNavBarButton"
                          onClick={this.openSort}
                          aria-label="Sort"
                          title="Sort"
                        >
                          <MdSort />
                        </Button>
                        <Button
                          sm={6}
                          className="mobileNavBarButton"
                          onClick={_ => (window.location = BASE_URL)}
                          aria-label="Home"
                          title="Home"
                        >
                          <FaHome />
                        </Button>
                        <Button
                          sm={6}
                          className="mobileNavBarButton"
                          onClick={_ =>
                            this.setState({ grid: !this.state.grid })
                          }
                          aria-label="Switch View"
                          title="Switch View"
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
