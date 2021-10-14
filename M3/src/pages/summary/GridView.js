import React from "react";
import { Col, Card, Button, Icon } from "antd";
const { Meta } = Card;
import noImage from "../../assets/images/no-image.png";

import {
  extractData,
  getFirstImage,
  getFirstImageAlt,
} from "../../services/m3";
class GridView extends React.Component {
  render() {
    let { data } = this.props;
    let dataJson = data.item.map((item) => extractData(item));
    dataJson;

    return (
      <>
        {" "}
        {dataJson.map((item, index) => {
          let load = getFirstImage(item) === null ? true : false;
          if (!load) {
            let image = new Image();
            image.src = getFirstImage(item);
            if (!image.complete) {
              load = false;
            } else {
              load = true;
            }
          }
          console.log(load);

          return (
            <Col lg={8} md={12} xs={24}>
              <Card
                bordered
                onClick={(_) => (window.location = item.item_link)}
                className="summaryCard"
                hoverable
                style={{
                  width: "100%",
                  marginTop: "2px",
                  height: "auto",
                  textAlign: "center",
                }}
              >
                <div
                  className={`summaryImageContainer ${
                    getFirstImage(item) ? "" : "noImage"
                  }`}
                  style={{
                    backgroundImage: `url(${
                      getFirstImage(item) ? getFirstImage(item) : noImage
                    })`,
                  }}
                >
                  <span
                    className="background-image"
                    role="img"
                    aria-label={
                      getFirstImage(item)
                        ? getFirstImageAlt(item)
                        : "No Image Available"
                    }
                  >
                    {" "}
                  </span>

                  {/* {!load ? (
                    <img
                      alt={
                        getFirstImage(item)
                          ? getFirstImageAlt(item)
                          : "No Image Available"
                      }
                    />
                  ) : null} */}
                </div>
                <Meta
                  title={`${item.data.item_object_name.value[0]}`}
                  description={`Accession Number:  ${item.data.item_refd.value}`}
                />
              </Card>
            </Col>
          );
        })}{" "}
        <Col span={24}>
          {" "}
          <div
            id="listViewFooter"
            style={{ textAlign: "center", marginTop: "40px" }}
          >
            <Button.Group>
              <Button
                disabled={!data.prev_page}
                onClick={(_) =>
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
                onClick={(_) =>
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
        </Col>
      </>
    );
  }
}

export default GridView;
