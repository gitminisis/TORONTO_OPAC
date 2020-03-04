import React from "react";
import "./index.css";
import PageLayout from "../../components/Layout";
import { xmlToJson } from "../../services";

import { Row, Col, Layout, Icon, Menu, Button, Breadcrumb } from "antd";

const { Content } = Layout;
import SideBar from "../../components/SideBar";
import TopBar from "./TopBar";
import Data from "../summary/Data";
import DetailData from "./DetailData";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    let xml = document.querySelector("#detail_xml");

    let json = xmlToJson(xml, [
      "report.item.item_corporate_grp.item_corporate",
      "report.item.item_box_group"
    ]);
    console.log(json);
    this.state = {
      data: json.report
    };
  }
  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <PageLayout>
        <Content>
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
                    {data.return_summary ? (
                      <>
                        <Breadcrumb.Separator>></Breadcrumb.Separator>
                        <Breadcrumb.Item href={data.return_summary.a._href}>
                          SEARCH RESULTS
                        </Breadcrumb.Item>
                      </>
                    ) : null}
                    <Breadcrumb.Separator>></Breadcrumb.Separator>
                    <Breadcrumb.Item href="#">RECORD VIEW</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
                <Col span={24} style={{ padding: "20px 15px 20px 15px" }}>
                  <TopBar data={data} />
                </Col>
                <Col
                  span={24}
                  style={{ padding: "0 15px 0px 15px" }}
                  id="generalDetailData"
                >
                  <Data data={data.item} bordered={true} />
                </Col>
                <Col span={24} style={{ padding: "0 15px 20px 15px" }}>
                  <DetailData data={data.item}></DetailData>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </PageLayout>
    );
  }
}

export default Detail;
