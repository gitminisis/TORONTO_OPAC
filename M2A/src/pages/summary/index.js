import React from "react";
import PageLayout from "../../components/Layout";

import { xmlToJson } from "../../services";
import {
  Row,
  Col,
  Layout,
  Card,
  Button,
  Table,
  Breadcrumb,
  Descriptions,
  Switch,
  Input,
  Icon
} from "antd";
const { Column, ColumnGroup } = Table;
const { Content } = Layout;
import axios from "axios";
import LoginModal from "../../components/LoginModal";
import { isLogged } from "../../services/authentication";
import Tree from "../../components/Tree";
import SideBar from "../../components/SideBar";
import SortBar from "./SortBar";
import Filter from "./Filter";
import Data from "./Data";
import { JSON_ARRAY_FIELD } from "../../services/index";
import { bookmark, deleteBookmark } from "../../services/bookmark";
import DataAction from "./DataAction";
import ButtonGroup from "antd/lib/button/button-group";
import { getSearchHistory } from "../../services/searchHistory";
import { save } from "../../services/savedSearch";
class Summary extends React.Component {
  constructor(props) {
    super(props);

    let xml = document.querySelector("#summary_xml");

    let json = xmlToJson(xml, JSON_ARRAY_FIELD);

    this.state = {
      data: json.report,
      display: json.report,
      next: json.report.next_page ? json.report.next_page.a._href : null,
      try: 0,
      simpleExp: true,
      exp: ""
    };
    console.log(this.state.data);
  }
  handleScroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      // you're at the bottom of the page
      let item = this.state.data.item;
      item = item.concat(...item);
      let data = this.state.data;
      data.item = item;
      this.setState({ data: data });
    }
    // let lastLi = document.querySelector(".summaryDataCard:last-child");
    // var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    // var pageOffset = window.pageYOffset + window.innerHeight;
    // console.log(lastLiOffset, pageOffset);
    // if (pageOffset / 1.5 > lastLiOffset) {
    //   let item = this.state.data.item;
    //   console.log(item.concat(...item));
    // }
  };
  filter = exp => {
    let sessionId = document.getElementById("session-id").innerText;
    let searchUrl = `${sessionId}??UNIONSEARCH&APPLICATION=UNION_VIEW&LANGUAGE=144&EXP=`;
    console.log(exp);
  };
  loadRecord = _ => {
    console.log("123");
    // this.scrollListener = window.addEventListener("scroll", e => {
    //   this.handleScroll(e);
    // });
    let { next } = this.state;
    if (next) {
      console.log(next);
      axios.get(next).then(res => {
        let dataXML = res.data;
        let newDocument = document
          .createRange()
          .createContextualFragment(dataXML);
        let xml = newDocument.querySelector("#summary_xml");

        let json = xmlToJson(xml, JSON_ARRAY_FIELD);
        console.log(json);

        let newItem = json.report.item;
        let newNext = json.report.next_page
          ? json.report.next_page.a._href
          : null;
        let item = this.state.data.item;
        item = item.concat(...newItem);
        let data = this.state.data;
        data.item = item;
        this.setState({ data: data, next: newNext });
      });
    }
  };
  fakeLoad = a => {
    if (this.state.try < a) {
      axios.get(this.state.next).then(res => {
        let dataXML = res.data;
        let newDocument = document
          .createRange()
          .createContextualFragment(dataXML);
        let xml = newDocument.querySelector("#summary_xml");

        let json = xmlToJson(xml, [
          "report.item",
          "report.item.item_box_group",
          "report.item.item_subject_group",
          "report.filters.div.xml.filter",
          "report.filters.div.xml.filter.item_group"
        ]);
        console.log(json);

        let newItem = json.report.item;

        let item = this.state.data.item;
        item = item.concat(...newItem);
        let data = this.state.data;
        data.item = item;
        this.setState({ data: data, try: this.state.try + 1 });
      });
    }
  };
  updateData = strData => {
    let newDocument = document.createRange().createContextualFragment(strData);
    let xml = newDocument.querySelector("#summary_xml");
    let json = xmlToJson(xml, [
      "report.item",
      "report.item.item_box_group",
      "report.item.item_subject_group",
      "report.filters.div.xml.filter",
      "report.filters.div.xml.filter.item_group"
    ]);
    this.setState({ data: json.report, display: json.report });
  };
  bookmark = sisn => {
    let url = this.state.data.bookmark.add;
    bookmark(url, sisn)
      .then(res => {
        console.log(res);
        let data = res.data;
        this.updateData(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteBookmark = sisn => {
    let url = this.state.data.bookmark.delete;
    console.log(url);
    deleteBookmark(url, sisn)
      .then(res => {
        console.log(res);
        let data = this.state.data;
        let item = data.item.filter(e => e.item_sisn === sisn)[0];
        let index = data.item.indexOf(item);
        console.log(index);
        data.item[index].item_status = "false";
        this.setState({ data: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  switch = e => {
    let newData = Object.create(this.state.data);
    console.log(this.state.data.item.length, newData.item.length);
    if (e === true) {
      newData.item = newData.item.filter(item => item.item_status === "true");
    }

    this.setState({ display: newData });
  };
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }
    let { data, display } = this.state;
    console.log(data.item.length);
    // this.loadRecord();

    return (
      <PageLayout>
        <Content>
          {/* <LoginModal visible={!isLoggedOn}></LoginModal> */}

          <Row gutter={0}>
            <Col span={6}>
              <SideBar />
            </Col>
            <Col span={18}>
              <Row gutter={0}>
                {" "}
                <Col
                  span={24}
                  style={{
                    background: "#CED1D0",
                    padding: "18px 15px 14px 15px"
                  }}
                >
                  {" "}
                  <Breadcrumb separator="" id="breadcrumb">
                    <Breadcrumb.Item
                      href={`${
                        document.getElementById("session-id").innerText
                      }?get&file=[MIT_ROOT]home.html`}
                    >
                      HOME
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>></Breadcrumb.Separator>
                    <Breadcrumb.Item href="#">SEARCH RESULTS</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>{" "}
                <Col span={24} style={{ padding: "20px 15px 20px 15px" }}>
                  <SortBar />
                </Col>
                <Col
                  span={24}
                  style={{ padding: "0 15px 10px 15px", fontSize: "16px" }}
                >
                  <Row gutter={4}>
                    <Col span={8}>
                      <p>
                        Keyword Search:{" "}
                        <strong>{display.search_statement}</strong>
                        <br />
                        Showing <strong>{display.item.length}</strong> of
                        <strong> {display.record_count}</strong> results
                      </p>
                    </Col>
                    <Col
                      span={8}
                      style={{
                        textAlign: "center",
                        fontSize: "20px !important"
                      }}
                    >
                      <ButtonGroup>
                        <Button
                          onClick={_ => {
                            let searchHistories = getSearchHistory();
                            console.log(searchHistories);
                            let lastSearch = searchHistories[0];
                            console.log(lastSearch);
                            save(lastSearch);
                          }}
                        >
                          <Icon type="pushpin" theme="filled" />
                        </Button>
                        <Button>
                          <Icon type="book" theme="filled" />
                        </Button>
                        <Button>
                          <Icon type="printer" theme="filled" />
                        </Button>
                      </ButtonGroup>
                    </Col>
                    <Col span={8} style={{ textAlign: "right" }}>
                      <Switch onChange={e => this.switch(e)} />
                      <span> Selected Records Only</span>
                    </Col>
                  </Row>
                </Col>
                <Col span={18} style={{ padding: "0 15px 20px 15px" }}>
                  {display.item.map(item => (
                    <Data
                      data={item}
                      bordered={true}
                      bookmark={this.bookmark}
                      deleteBookmark={this.deleteBookmark}
                    />
                  ))}
                </Col>
                <Col
                  span={6}
                  id="filterCol"
                  style={{
                    backgroundColor: "#EBECEE",
                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    overflowY: "scroll"
                  }}
                >
                  <Button id="searchFilterButton">SEARCH FILTER</Button>
                  <Filter
                    data={data.filters.div.xml.filter}
                    filter={this.filter}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default Summary;
