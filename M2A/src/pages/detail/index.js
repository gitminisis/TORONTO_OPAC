import React from "react";
import PageLayout from "../../components/Layout";
import { xmlToJson } from "../../services";
import { Row, Col, Descriptions, Card } from "antd";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    let xml = document.querySelector("#detail_xml");

    let json = xmlToJson(xml, "report.item", "report.item.item_subject");

    this.state = {
      data: json.report
    };
    this.tree = React.createRef();
  }
  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <PageLayout>
        <Row>
          {" "}
          <Col lg={{ span: 18, offset: 3 }} md={24}>
            <Card style={{ width: "100%" }}>
              <Row>
                <Col md={24} lg={10}>
                  <Descriptions
                    title={data.item.item_title}
                    bordered
                    column={1}
                  >
                    <Descriptions.Item label="Reference Code">
                      {data.item.item_id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Date of Creation">
                      {data.item.item_date}
                    </Descriptions.Item>

                    {data.item.item_subject ? (
                      <Descriptions.Item label="Subject(s)">
                        {data.item.item_subject.map(e => (
                          <>
                            {e}
                            <br />
                          </>
                        ))}
                      </Descriptions.Item>
                    ) : null}
                  </Descriptions>
                </Col>
                <Col md={24} lg={14}></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default Detail;
