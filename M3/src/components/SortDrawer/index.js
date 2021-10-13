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
  Col,
  List,
} from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
class SortDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    let { data } = this.props;

    let current = data.current;
    return (
      <>
        {" "}
        <Drawer
          id="leftDrawer"
          placement={this.props.dir}
          width={"100vw"}
          zIndex={9001}
          title="SORT"
          closable
          onClose={this.onClose}
          visible={this.state.visible}
          draggable={true}
        >
          <List size="large" bordered>
            <List.Item
              className="sortItem"
              onClick={(_) => {
                window.location = data.default_sort;
              }}
            >
              {" "}
              Default
            </List.Item>
            <List.Item
              className="sortItem"
              onClick={(_) => {
                window.location = data.object_name_asc_sort;
              }}
            >
              Object Name Ascending
            </List.Item>
            <List.Item
              className="sortItem"
              onClick={(_) => {
                window.location = data.object_name_dsc_sort;
              }}
            >
              {" "}
              Object Name Descending
            </List.Item>
            <List.Item
              className="sortItem"
              onClick={(_) => {
                window.location = data.date_asc_sort;
              }}
            >
              {" "}
              Date Ascending
            </List.Item>
            <List.Item
              className="sortItem"
              onClick={(_) => {
                window.location = data.date_dsc_sort;
              }}
            >
              {" "}
              Date Descending
            </List.Item>
          </List>
        </Drawer>
      </>
    );
  }
}

export default SortDrawer;
