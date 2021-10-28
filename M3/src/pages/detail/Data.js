import React from "react";
import {
  extractData,
  DETAIL_DATA_FIELD,
  hasChenhall,
  CHENHALL_FIELD,
} from "../../services/m3";

import { Descriptions, Collapse, Icon } from "antd";
const { Panel } = Collapse;
class Data extends React.Component {
  render() {
    let rawData = this.props.data;
    let data = extractData(rawData.item);
    data;
    return (
      <>
        {" "}
        <Descriptions
          id="dataDescriptions"
          title={<h3>{data.data.item_object_name.value[0]}</h3>}
          bordered
          style={{ fontSize: "16px" }}
          column={1}
        >
          {DETAIL_DATA_FIELD.map((field) => {
            let item = data.data[field];
            if (item.value) {
              if (item.type === "string") {
                return (
                  <Descriptions.Item label={item.title}>
                    {item.value}
                  </Descriptions.Item>
                );
              } else if (item.type === "link") {
                return (
                  <Descriptions.Item label={item.title}>
                    <a
                      href={item.value.a._href}
                      style={{
                        color: "#0056b3",
                      }}
                    >
                      {item.value.a.__text}
                    </a>
                  </Descriptions.Item>
                );
              } else if (item.type === "array" && item.value.length > 0) {
                return (
                  <Descriptions.Item label={item.title}>
                    {item.value.map((e, i) => (
                      <>
                        {e} {i < item.value.length - 1 ? <br></br> : null}
                      </>
                    ))}
                  </Descriptions.Item>
                );
              } else if (item.type === "array_link" && item.value.length > 0) {
                return (
                  <Descriptions.Item label={item.title}>
                    {item.value.map((e, i) => (
                      <>
                        <a
                          href={e.a._href}
                          style={{
                            color: "#0056b3",
                          }}
                        >
                          {e.a.__text}
                        </a>
                        {i < item.value.length - 1 ? <br></br> : null}
                      </>
                    ))}
                  </Descriptions.Item>
                );
              }
            }
            return null;
          })}
        </Descriptions>
        {data.dimension.length > 0 ? (
          <Collapse className="detailCollapse">
            <Panel
              showArrow={true}
              header={
                <p style={{ marginBottom: "0", fontWeight: "bold" }}>
                  Dimension
                </p>
              }
              key="1"
            >
              {data.dimension.length > 0
                ? data.dimension.map((e, i) => {
                    return (
                      <>
                        <strong>
                          {e.type.charAt(0).toUpperCase() + e.type.slice(1)}
                        </strong>
                        : {e.value}
                        {i < data.dimension.length - 1 ? <br></br> : null}
                      </>
                    );
                  })
                : null}
            </Panel>
          </Collapse>
        ) : null}
        {hasChenhall(data) ? (
          <Collapse
            className="detailCollapse"
           
          >
            <Panel
             showArrow={true}
              header={
                <p style={{ marginBottom: "0", fontWeight: "bold" }}>
                  Chenhall
                </p>
              }
              key="2"
            >
              {CHENHALL_FIELD.map((el) => {
                return data.data[el].value ? (
                  <>
                    <strong>{data.data[el].title}: </strong>
                    <a
                      href={data.data[el].value.a._href}
                      style={{
                        color: "#0056b3",
                      }}
                    >
                      {data.data[el].value.a.__text}
                    </a>
                    <br />
                  </>
                ) : null;
              })}
            </Panel>
          </Collapse>
        ) : null}
      </>
    );
  }
}

export default Data;
