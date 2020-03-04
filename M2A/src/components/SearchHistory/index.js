import React from "react";
import { Card, Table } from "antd";
const { Column } = Table;
import { getSearchHistory } from "../../services/searchHistory";
const data = getSearchHistory().map((item, index) => {
  item.key = index;
  return item;
});
class SearchHistory extends React.Component {
  render() {
    let sessid = document.getElementById("session-id").innerText;
    return (
      <Card
        bordered={false}
        id="searchHistoryCard"
        className="sideBarCard"
        title="Search History"
        style={{ width: "100%" }}
        bodyStyle={{ textAlign: "center" }}
      >
        <p>To return to a previous search, click on the search string below</p>
        <Table
          id="searchHistoryTable"
          dataSource={data}
          pagination={false}
          bordered={true}
          size="small"
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                window.location = `${sessid}?UNIONSEARCH&application=UNION_VIEW&exp=${record.keyword}`;
              }, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {}, // right button click row
              onMouseEnter: event => {}, // mouse enter row
              onMouseLeave: event => {} // mouse leave row
            };
          }}
        >
          <Column
            width="150px"
            title="String"
            dataIndex="search_term"
            key="search_term"
          ></Column>
          <Column title="Results" dataIndex="hit" key="hit"></Column>
        </Table>
        <p>Search History is only retained for the current session</p>
      </Card>
    );
  }
}
export default SearchHistory;
