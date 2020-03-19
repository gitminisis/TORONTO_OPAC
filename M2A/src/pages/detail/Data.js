import React from "react";
import { extractData } from "../../services/m2a";

import { Descriptions } from "antd";
class Data extends React.Component {
  render() {
    let rawData = this.props.data;
    let data = extractData(rawData.item);

    return (
      <Descriptions title={data.item_title} bordered column={1}>
        <Descriptions.Item label="Reference Code">
          {data.item_refd}
        </Descriptions.Item>
        <Descriptions.Item label="Date of Creation">
          {data.item_date}
        </Descriptions.Item>
        <Descriptions.Item label="Box Qualifier">
          {data.item_box.qualifier}
        </Descriptions.Item>
        <Descriptions.Item label="Box Number">
          {data.item_box}
        </Descriptions.Item>
        <Descriptions.Item label="Folder Number">
          {data.item_folder}
        </Descriptions.Item>
        <Descriptions.Item label="Collection">
          {data.item_collection}
        </Descriptions.Item>
        <Descriptions.Item label="Location(s)">
          {data.item_location.map(e => (
            <>
              {e}
              <br />
            </>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Level of Description">
          {data.item_level_desc}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {data.item_desc}
        </Descriptions.Item>
        {data.item_subject ? (
          <Descriptions.Item label="Subject(s)">
            {data.item_subject.map(e => (
              <>
                {e}
                <br />
              </>
            ))}
          </Descriptions.Item>
        ) : null}
      </Descriptions>
    );
  }
}

export default Data;
