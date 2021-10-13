import React from "react";
import { Col, Card, Collapse, Icon, Row } from "antd";
const { Panel } = Collapse;
const { Meta } = Card;
import placeholder from "../../assets/images/placeholder.png";
import { HOME_TILES, FEATURED_TILES } from "../../services/home";
class GridView extends React.Component {
  render() {
    return (
      <Collapse
        defaultActiveKey="1"
        accordion
        expandIconPosition={"right"}
        expandIcon={({ isActive }) =>
          isActive ? <Icon type="minus" /> : <Icon type="plus" />
        }
      >
        <Panel
          header={<h1 style={{ fontSize: "1.5rem" }}>Featured Collections</h1>}
          key="1"
        >
          <Row gutter={16}>
            {FEATURED_TILES.map((item) => {
              return (
                <Col xl={{ span: 4 }} lg={12} md={12} xs={24} className="s5">
                  <Card
                    bordered
                    onClick={(_) => {
                      window.location = `/scripts/mwimain.dll/144/COLLECTIONS/WEB_SUM_M3/${item.expression}?SESSIONSEARCH`;
                    }}
                    className="homeCard"
                    hoverable
                    style={{
                      width: "100%",
                      marginTop: "2px",
                      height: "auto",
                      textAlign: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      className="featureImageContainer"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>
                    <span
                      class="background-image"
                      role="img"
                      aria-label={item.alt}
                    ></span>
                    <Meta
                      id="featureMeta"
                      title={item.title}
                      description={item.description}
                      style={{ height: "150px" }}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Panel>
        <Panel
          header={<h1 style={{ fontSize: "1.5rem" }}>Collection by Site</h1>}
          key="2"
        >
          <Row gutter={16}>
            {HOME_TILES.map((item, index) => (
              <Col lg={8} md={12} xs={24} style={{ paddingBottom: "16px" }}>
                <Card
                  bordered
                  onClick={(_) => {
                    window.location = `/scripts/mwimain.dll/144/COLLECTIONS/WEB_SUM_M3/SITE%20"${item.expression}"?SESSIONSEARCH`;
                  }}
                  className="homeCard"
                  hoverable
                  style={{
                    width: "100%",
                    marginTop: "2px",
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="homeImageContainer"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  <Meta
                    title={item.title}
                    description={item.description}
                    style={{ height: "135px" }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Panel>
      </Collapse>
    );
  }
}

export default GridView;
