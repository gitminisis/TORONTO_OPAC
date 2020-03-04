import React from "react";
import { Tabs, Row, Col, Card, Icon, Tooltip, message } from "antd";
import DataRow from "./DataRow";

const { TabPane } = Tabs;
const { Meta } = Card;
import { save } from "../../services/savedBag";
class DetailData extends React.Component {
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab={<strong>ADDITIONAL DETAILS</strong>} key="1">
          <DataRow title="Material Type:" content={data.item_form}></DataRow>
          {data.item_phys_extent && data.item_phys_extunit ? (
            <DataRow
              title="Physical Extent #:"
              content={`${data.item_phys_extent} ${data.item_phys_extunit}`}
            ></DataRow>
          ) : null}
          {data.item_virt_extent && data.item_virt_extunit ? (
            <DataRow
              title="Virtual Extent #:"
              content={`${data.item_virt_extent} ${data.item_virt_extunit}`}
            ></DataRow>
          ) : null}
          <DataRow
            title="Extent Details:"
            content={data.item_physical_desc}
          ></DataRow>

          <DataRow
            title="Related Material:"
            content={data.item_related_mat}
          ></DataRow>
          <DataRow title="Scope Note:" content={data.item_scope}></DataRow>
          <DataRow title="General Notes:" content={data.item_notes}></DataRow>
          <DataRow
            title="General Physical Description Notes:"
            content={data.item_conservation}
          ></DataRow>
          <DataRow
            title="Corporate Taxonomy Term(s):"
            content={
              data.item_corporate_grp
                ? data.item_corporate_grp.item_corporate.map((el, idx) => {
                    if (
                      idx !==
                      data.item_corporate_grp.item_corporate.length - 1
                    ) {
                      return `${el} ; `;
                    }
                    return el;
                  })
                : null
            }
          ></DataRow>
        </TabPane>
        <TabPane tab={<strong>DIGITAL ASSETS</strong>} key="2">
          <Row gutter={16}>
            <Col lg={8} md={24}>
              <Card
                hoverable
                style={{ width: "100%", margin: "0 auto" }}
                cover={
                  <img
                    style={{ objectFit: "scale-down", height: "200px" }}
                    alt="example"
                    src="https://cdn.vox-cdn.com/thumbor/rowh9pZ4aD7IAbAUxjN4NhxVJY0=/0x0:639x426/1200x800/filters:focal(269x162:371x264)/cdn.vox-cdn.com/uploads/chorus_image/image/61774029/MIT_Computer_Announce_01_0.0.jpg"
                  />
                }
                actions={[
                  <Tooltip title="Download">
                    <Icon type="download" />
                  </Tooltip>,
                  <Tooltip title="Save To Bag">
                    <Icon
                      type="save"
                      onClick={_ => {
                        let res = save(
                          "https://cdn.vox-cdn.com/thumbor/rowh9pZ4aD7IAbAUxjN4NhxVJY0=/0x0:639x426/1200x800/filters:focal(269x162:371x264)/cdn.vox-cdn.com/uploads/chorus_image/image/61774029/MIT_Computer_Announce_01_0.0.jpg"
                        );
                        if (res) {
                          message.success("This asset was succesfully saved !");
                        } else {
                          message.warning("This asset has already been saved");
                        }
                      }}
                    />
                  </Tooltip>,
                  <Tooltip title="Copy URL">
                    <Icon type="link" />
                  </Tooltip>
                ]}
              >
                <Meta title="MIT Campus" description="MIT Campus" />
              </Card>
            </Col>
            <Col lg={8} md={24}>
              <Card
                hoverable
                style={{ width: "100%", margin: "0 auto" }}
                cover={
                  <img
                    style={{ objectFit: "scale-down", height: "200px" }}
                    alt="example"
                    src="https://s3.amazonaws.com/files.technologyreview.com/p/pub/images/1565670471100457bd2c9b.jpg"
                  />
                }
                actions={[
                  <Tooltip title="Download">
                    <a href="/m2a/src/assets/images/minisis.png" download>
                      {" "}
                      <Icon type="download" />
                    </a>
                  </Tooltip>,
                  <Tooltip title="Save To Bag">
                    <Icon type="save" />
                  </Tooltip>,
                  <Tooltip title="Copy URL">
                    <Icon type="link" />
                  </Tooltip>
                ]}
              >
                <Meta title="MIT Campus" description="MIT Campus" />
              </Card>
            </Col>
            <Col lg={8} md={24}>
              <Card
                hoverable
                style={{ width: "100%", margin: "0 auto" }}
                cover={
                  <img
                    style={{ objectFit: "scale-down", height: "200px" }}
                    alt="example"
                    src="https://math.mit.edu/images/simons850.jpg"
                  />
                }
                actions={[
                  <Tooltip title="Download">
                    <Icon type="download" />
                  </Tooltip>,
                  <Tooltip title="Save To Bag">
                    <Icon type="save" />
                  </Tooltip>,
                  <Tooltip title="Copy URL">
                    <Icon type="link" />
                  </Tooltip>
                ]}
              >
                <Meta title="MIT Campus" description="MIT Campus" />
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    );
  }
}

export default DetailData;
