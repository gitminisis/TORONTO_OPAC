import React from "react";
import PageLayout from "../../components/Layout";
import Card from "react-bootstrap/Card";
import { Row, Col, List, Layout, PageHeader, Button, Icon, Radio } from "antd";
const { Content } = Layout;

import { FaExclamationCircle, FaSearch } from "react-icons/fa";

class NoRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true,
    };
    this.tree = React.createRef();
  }
  openTree = (_) => {
    this.tree.current.showDrawer();
  };
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }

    return (
      <PageLayout>
        <Row>
          <Col lg={{ span: 18, offset: 3 }} md={24}>
            <Row>
              <Col span={24}>
                <Card
                  className="text-center no-record-background"
                  style={{ marginBottom: "80px" }}
                >
                  <Card.Body>
                    {/* <Image src={noRecord}></Image> */}
                    {/* <ImageHolder /> */}
                    <Card.Title as="h2" style={{ textAlign: "left" }}>
                      <FaExclamationCircle style={{ fontSize: "20px" }} />
                      No Records Found
                    </Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      <p> There are no results with your search term.</p>
                      <p>Suggestions:</p>
                      <ul>
                        <li>Make sure all words are spelled correctly.</li>
                        <li>Use similar words or synonyms.</li>
                        <li>Try the Advanced Search.</li>
                      </ul>
                    </Card.Text>
                   
                    {/* <Carousel /> */}
                  </Card.Body>
                  <Card.Footer>
                    <Button type="primary" href="/">
                      Back to home page
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default NoRecord;
