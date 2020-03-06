import React from "react";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";

import axios from "axios";
import { xmlToJson } from "../../services/index";
import { getClusterList, getCluster, pageAction } from "../../services/cluster";
import ClusterModal from "./ClusterModal";

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      clusterList: null,
      title: "",
      originator: "",
      date: "",
      collection: ""
    };
    this.getCluster = this.getCluster.bind(this);
    this.updateClusterList = this.updateClusterList.bind(this);
    this.pageAction = this.pageAction.bind(this);
    this.selectCluster = this.selectCluster.bind(this);
  }
  updateClusterList(data) {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "text/xml");
    this.setState({ openModal: true, clusterList: xmlToJson(xml) });
  }
  openModal(field) {
    getClusterList(this.props.session, field)
      .then(res => {
        this.updateClusterList(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  getCluster(keyvalue, keyname, url) {
    let data = `KEYNAME=${keyname}&KEYVALUE=${keyvalue}`;
    getCluster(url, data)
      .then(res => {
        this.updateClusterList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  pageAction(url) {
    url = url.replace(/--/g, "");
    pageAction(url)
      .then(res => {
        if (url !== "#" && res.data && res.data !== "") {
          this.updateClusterList(res.data);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  selectCluster(val, keyname) {
    switch (keyname) {
      case "title":
        this.setState({ title: val });
        break;
      case "originator":
        this.setState({ originator: val });
        break;
      case "date_search":
        this.setState({ date: val });
        break;
      case "tag":
        this.setState({ collection: val });
        break;
    }
  }

  render() {
    return (
      <Collapse in={this.props.open}>
        <Form action={this.props.action} method="POST">
          <Card className="text-center">
            <ClusterModal
              open={this.state.openModal}
              close={_ => this.closeModal()}
              data={this.state.clusterList}
              getCluster={this.getCluster}
              pageAction={this.pageAction}
              submit={this.selectCluster}
            />
            <Card.Header as="h4">Advanced Search</Card.Header>
            <Card.Body>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="advanced-keyword">
                      Keyword
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Search keyword"
                    aria-describedby="advanced-keyword"
                    name="KEYWORD_CL"
                  />
                  <InputGroup.Append>
                    <Button type="submit">Go</Button>
                  </InputGroup.Append>
                </InputGroup>
                {/* <RadioGroup name="FIELD_OP_1" /> */}
                <FieldGroup
                  handleClick={field => this.openModal(field)}
                  form_name="BOOL_TITLE"
                  select_name="BOOL1"
                  field="Title"
                  val={this.state.title}
                />
                {/* <RadioGroup name="FIELD_OP_2" /> */}
                <FieldGroup
                  handleClick={field => this.openModal(field)}
                  form_name="BOOL_ORIGINATOR"
                  select_name="BOOL2"
                  field="Author"
                  val={this.state.originator}
                />
                {/* <RadioGroup name="FIELD_OP_3" /> */}
                <FieldGroup
                  handleClick={field => this.openModal(field)}
                  form_name="BOOL_DATE"
                  select_name="BOOL3"
                  field="Date"
                  val={this.state.date}
                />
                <FieldGroup
                  handleClick={field => this.openModal(field)}
                  form_name="BOOL_COLLECTION"
                  select_name="BOOL4"
                  field="Collection"
                  val={this.state.collection}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button type="submit">Search</Button>
            </Card.Footer>
          </Card>
        </Form>
      </Collapse>
    );
  }
}

const FieldGroup = props => {
  return (
    <InputGroup className="fieldGroup">
      <InputGroup.Prepend>
        <Form.Control as="select" name={props.select_name}>
          <option value="AND">And</option> <option value="OR">Or</option>
          <option value="NOT">Not</option>
        </Form.Control>
      </InputGroup.Prepend>
      <Form.Control
        type="text"
        id={props.form_name}
        name={props.form_name}
        placeholder={props.field}
        defaultValue={props.val}
      />
      <InputGroup.Append>
        <Button
          onClick={_ => props.handleClick(props.field)}
          variant="secondary"
        >
          <FaBars className="no-format-svg" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

const RadioGroup = props => {
  return (
    <InputGroup className="radioGroup">
      <Col xs={4}>
        <Form.Check
          inline
          label="All Words"
          type="radio"
          name={props.name}
          value="AND_WORD"
          readOnly
        />
      </Col>
      <Col xs={4}>
        <Form.Check
          inline
          label="Any Words"
          type="radio"
          name={props.name}
          value="OR_WORD"
          readOnly
        />
      </Col>
      <Col xs={4}>
        <Form.Check
          inline
          label="Exact Phrase"
          type="radio"
          name={props.name}
          value="ADJ_WORD"
          readOnly
        />
      </Col>
    </InputGroup>
  );
};
export default AdvancedSearch;
