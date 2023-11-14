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
  message,

  Radio
} from "antd";
import axios from "axios";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
import { xmlStrToJson } from "../../services/index";
import ViewAll from "./ViewAll";
class FilterDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      viewAllData: null,
      currentURL: null,
    };
    this.viewAll = React.createRef();
  }
  showModal() {
    this.viewAll.current.showModal();
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
    document.getElementById('simpleSearchInput').focus();
  };

  render() {
    let filter = this.props.data;
    return (
      <>
        <ViewAll ref={this.viewAll} data={this.state.viewAllData}></ViewAll>
        <Drawer
          id="leftDrawer"
          placement={this.props.dir}
          width={"100vw"}
          zIndex={9001}
          title="FILTER"
          closable
          onClose={this.onClose}
          visible={this.state.visible}
          draggable={true}
        >
          
          {filter
            ? filter.map((item_group) => (
                <Card
                  className="filterCard"
                  key={item_group._name}
                  headStyle={{
                    fontSize: "15px !important",
                    backgroundColor: "rgba(0,0,0,.03)",
                  }}
                  title={item_group._title.trim()}
                  extra={<Icon type="caret-down" />}
                >
                  <Row>
                    <Radio.Group>
                    {item_group.item_group.map((item) => (
                      <Col
                        span={24}
                        className="filterCol"
                        style={{
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        {" "}
                        {item.item_value !== "View all..." ? (
                          <Checkbox
                            defaultChecked={item.item_selected !== "N"}
                            disabled ={this.state.currentURL!==null && !this.state.currentURL.includes(item.item_link)}
                            // checked={item.item_selected !== "N"}
                            onChange={e => {
                             let check = e.target.checked;
                              // window.location = `${item.item_link}&DATABASE=COLLECTIONS`;
                              let currentURL ;
                              if(item.item_selected === "Y"){
                                this.setState({
                                  currentURL: !check?`${item.item_link}&DATABASE=COLLECTIONS`:null,
                                
                                });
                              }else{
                                this.setState({
                                  currentURL: check?`${item.item_link}&DATABASE=COLLECTIONS`:null,
                                
                                });
                              }
                            
                            }}
                          >
                            {item.item_value} ({item.item_frequency})
                          </Checkbox>
                          // <Radio value={`${item.item_link}&DATABASE=COLLECTIONS`}>  {item.item_value} ({item.item_frequency})</Radio>
                        ) : (
                          <Checkbox
                            checked={false}
                            onClick={(_) => {
                              item.item_link;
                              let url = item.item_link
                                .split('ViewXmlAll("')[1]
                                .split('")')[0];
                              // this.props.filter(
                              //   `${item_group._name} ${item.item_value}`
                              // );
                              axios
                                .get(url)
                                .then((res) => {
                                  res;
                                  let data = res.data;
                                  let json = xmlStrToJson(data, []);
                                  json;
                                  this.setState({
                                    viewAllData: json,
                                    visible: false,
                                  });
                                  this.showModal();
                                })
                                .catch((err) => console.log(err));
                            }}
                          >
                            {item.item_value}
                          </Checkbox>
                        )}
                      </Col>
                    ))}
                   
                   </Radio.Group>
                  </Row>
                </Card>
              ))
            : null}
            <div style={{marginTop:'20px',textAlign:'center'}}> <Button
                      type="primary"
                      onClick={(_) => {
                        
						
                        if (this.state.currentURL) {
                          window.location = this.state.currentURL;
                        } else {
                          // message.warn("Please select one filter");
                        }
                      }}
                    >
                      Apply Filter
                    </Button></div>
        </Drawer>
      </>
    );
  }
}

export default FilterDrawer;
