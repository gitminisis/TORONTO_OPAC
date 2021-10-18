import React from "react";
import { Row, Col, Card, List, Icon, Button, Tooltip } from "antd";

import noImage from "../../assets/images/no-image.png";

import { FaImage, FaVolumeUp, FaPlayCircle, FaFileAlt } from "react-icons/fa";
import {
  extractData,
  getFirstImageAlt,
  getFirstImage,
  hasImage,
  hasAudio,
  hasVideo,
  hasTextual
} from "../../services/m3";
const gridStyle = {
  width: "50%",
  textAlign: "center"
};
class ListView extends React.Component {
  render() {
    let { data } = this.props;
    let dataJson = data.item.map(item => extractData(item));
    console.log(dataJson);
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={dataJson}
        footer={
          <div id="listViewFooter" style={{ textAlign: "center" }}>
            <Button.Group>
              <Button
                disabled={!data.prev_page}
                onClick={_ =>
                  (window.location = data.prev_page
                    ? data.prev_page.a._href
                    : "#")
                }
              >
                <Icon type="left" />
                Prev.
              </Button>
              <Button
                disabled={!data.next_page}
                onClick={_ =>
                  (window.location = data.next_page
                    ? data.next_page.a._href
                    : "#")
                }
              >
                Next
                <Icon type="right" />
              </Button>
            </Button.Group>
          </div>
        }
        renderItem={(item, index) => (
          <Row className="listRow" gutter={8}>
            <Col lg={5} md={10} className="listRowMediaCol">
              <Row>
                <Col
                  span={24}
                  className={`summaryListImageContainer ${
                    getFirstImage(item) ? "" : "noImage"
                  }`}
                >
                  <img
                    src={getFirstImage(item) ? getFirstImage(item) : noImage}
                    alt={
                      getFirstImage(item)
                        ? getFirstImageAlt(item)
                        : "No Image Available"
                    }
                    aria-describedby = {`summaryDescription-${index}`}
                  />
                </Col>
                <Col span={24} className="summaryMedia">
                  <Card
                    className="summaryMediaCard"
                    actions={[
                      <span
                        className={hasImage(item) ? "hasMedia" : ""}
                        aria-label={
                          hasImage(item)
                            ? "Contain Image File"
                            : "No Image File"
                        }
                      >
                        <Tooltip
                          title={
                            hasImage(item)
                              ? "Contain Image File"
                              : "No Image File"
                          }
                          placement="bottom"
                        >
                          <FaImage />
                        </Tooltip>
                      </span>,
                      <span
                        className={hasAudio(item) ? "hasMedia" : ""}
                        aria-label={
                          hasAudio(item)
                            ? "Contain Audio File"
                            : "No Audio File"
                        }
                      >
                        <Tooltip
                          title={
                            hasAudio(item)
                              ? "Contain Audio File"
                              : "No Audio File"
                          }
                          placement="bottom"
                        >
                          <FaVolumeUp />
                        </Tooltip>
                      </span>,
                      <span
                        className={hasVideo(item) ? "hasMedia" : ""}
                        aria-label={
                          hasVideo(item)
                            ? "Contain Video File"
                            : "No Video File"
                        }
                      >
                        <Tooltip
                          title={
                            hasVideo(item)
                              ? "Contain Video File"
                              : "No Video File"
                          }
                          placement="bottom"
                        >
                          <FaPlayCircle />
                        </Tooltip>
                      </span>,
                      <span
                        className={hasTextual(item) ? "hasMedia" : ""}
                        aria-label={
                          hasTextual(item)
                            ? "Contain Textual File"
                            : "No Textual File"
                        }
                      >
                        <Tooltip
                          title={
                            hasTextual(item)
                              ? "Contain Textual File"
                              : "No Textual File"
                          }
                          placement="bottom"
                        >
                          <FaFileAlt />
                        </Tooltip>
                      </span>
                    ]}
                  ></Card>
                </Col>
              </Row>
            </Col>
            <Col lg={19} md={14}>
              {" "}
              <Row>
                <Col lg={16} md={24}>
                  {" "}
                  <List.Item key={item.data.item_sisn.value}>
                    <List.Item.Meta
                      title={
                        <h3
                          className="summaryListTitle"
                          onClick={_ => window.open(item.item_link, "_blank")}
                        >
                          {`${item.data.item_object_name.value[0]}`}
                        </h3>
                      }
                      description={`Accession Number:  ${item.data.item_refd.value}`}
                    />
                    {/* <p>
                      {item.data.item_collection.value ? (
                        <>
                          <strong>Collection: </strong>
                          {item.data.item_collection.value.a.__text}
                        </>
                      ) : null}
                    </p> */}
                    <p>
                      {item.data.item_site.value ? (
                        <>
                          <strong>Site: </strong>
                          {item.data.item_site.value}
                        </>
                      ) : null}
                    </p>
                    <p>
                      {item.data.item_date.value ? (
                        <>
                          <strong>Date: </strong>
                          {item.data.item_date.value}
                        </>
                      ) : null}
                    </p>
                    <p>
                      {item.data.item_title.value ? (
                        <>
                          <strong>Title: </strong>
                          {item.data.item_title.value.length > 200
                            ? `${item.data.item_title.value.substring(
                                0,
                                200
                              )} ...`
                            : item.data.item_title.value}
                        </>
                      ) : null}
                    </p>{" "}
                    <p>
                      {item.data.item_maker.value ? (
                        <>
                          <strong>Maker: </strong>
                          <a href={item.data.item_maker.value[0].a._href}>
                            {item.data.item_maker.value[0].a.__text}
                          </a>
                        </>
                      ) : null}
                    </p>
                    <p id={`summaryDescription-${index}`}>
                      {item.data.item_desc.value ? (
                        <>
                          <strong>Description: </strong>
                          {item.data.item_desc.value.length > 200
                            ? `${item.data.item_desc.value.substring(
                                0,
                                200
                              )} ...`
                            : item.data.item_desc.value}
                        </>
                      ) : null}
                    </p>
                  </List.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      />
    );
  }
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default ListView;
