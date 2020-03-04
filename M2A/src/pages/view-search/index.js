import React from "react";
import PageLayout from "../../components/Layout";
import { xmlToJson } from "../../services";
import {
  Row,
  Col,
  Layout,
  Card,
  Empty,
  Breadcrumb,
  Tooltip,
  Icon,
  Menu,
  Tabs
} from "antd";
const { Meta } = Card;
import Data from "../summary/Data";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import SideBar from "../../components/SideBar";
const { TabPane } = Tabs;
import { getAll } from "../../services/savedSearch";
import axios from "axios";
import { bookmark, deleteBookmark } from "../../services/bookmark";
class ViewSearch extends React.Component {
  constructor(props) {
    super(props);
    let xml = document.querySelector("#bookmark_xml");

    let json = xmlToJson(xml);

    this.state = {
      data: [],
      report: json.report
    };
  }
  deleteBookmark = sisn => {
    let url = this.state.report.bookmark.delete;
    console.log(url);
    deleteBookmark(url, sisn)
      .then(res => {
        console.log(res);
        // console.log(res);
        // let data = this.state.data;
        // let item = data.item.filter(e => e.item_sisn === sisn)[0];
        // let index = data.item.indexOf(item);
        // console.log(index);
        // data.item[index].item_status = "false";
        // this.setState({ data: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount = _ => {
    getAll().map((search, i) => {
      this.getData(search.keyword);
    });
  };
  getData = search_term => {
    let sessionId = document.getElementById("session-id").innerText;
    let url = `${sessionId}?UNIONSEARCH&application=UNION_VIEW&exp=${search_term}`;

    axios
      .get(url)
      .then(res => {
        let data = res.data;
        let newDocument = document.createRange().createContextualFragment(data);
        let xml = newDocument.querySelector("#summary_xml");
        let json = xmlToJson(xml, [
          "report.item",
          "report.item.item_box_group",
          "report.item.item_subject_group",
          "report.filters.div.xml.filter",
          "report.filters.div.xml.filter.item_group"
        ]);
        let dataObject = json.report;
        let stateData = Object.create(this.state.data);
        stateData.push(dataObject);
        console.log(dataObject);
        this.setState({ data: stateData });
      })
      .catch(err => console.log(err));
  };
  render() {
    let { data } = this.state;

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
                    <Breadcrumb.Item href="#">SAVED SEARCH</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col span={24} style={{ padding: "20 15px 20px 15px" }}>
                  <Tabs defaultActiveKey="1" tabPosition={"left"}>
                    {this.state.data.map((search, i) => {
                      return (
                        <TabPane tab={search.search_statement} key={i}>
                          {search.item
                            .filter(item => item.item_status === "true")
                            .map(item => (
                              <Data
                                data={item}
                                bordered={true}
                                deleteBookmark={this.deleteBookmark}
                              ></Data>
                            ))}
                        </TabPane>
                      );
                    })}
                    {/* {getAll().map((search, i) => {
                      console.log(search);
                      return (
                        <TabPane tab={`Tab-${i}`} key={i}>
                          {this.getData(search.keyword).item.map(item => (
                            <Data data={item} bordered={true}></Data>
                          ))}
                        </TabPane>
                      );
                    })} */}
                  </Tabs>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default ViewSearch;
