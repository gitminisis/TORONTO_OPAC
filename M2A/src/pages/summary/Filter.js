import React from "react";
import {
  Menu,
  Layout,
  Icon,
  Drawer,
  Button,
  Card,
  Checkbox,
  Row,
  Col
} from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
class Filter extends React.Component {
  render() {
    let filter = this.props.data;
    console.log(filter);
    return (
      <>
        {filter.map(item_group => (
          <Card
            className="filterCard"
            key={item_group._name}
            headStyle={{
              fontSize: "15px !important",
              backgroundColor: "rgba(0,0,0,.03)"
            }}
            title={item_group._title.trim()}
            extra={<Icon type="caret-down" />}
          >
            <Row>
              {item_group.item_group.map(item => (
                <Col
                  span={24}
                  className="filterCol"
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px"
                  }}
                >
                  {" "}
                  <Checkbox
                    checked={item.item_selected !== "N"}
                    onClick={_ => {
                      window.location = item.item_link;
                      // this.props.filter(
                      //   `${item_group._name} ${item.item_value}`
                      // );
                    }}
                  >
                    {item.item_value} ({item.item_frequency})
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Card>
        ))}
      </>
    );
  }
}

export default Filter;
