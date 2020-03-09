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
      collection: "",
      searchExp: [
        {
          field: "BOX_QUALIFIER",
          title: "Box Qualifier",
          keyword: "",
          boolean: "and"
        },
        {
          field: "ORIGINATOR",
          title: "Creator/Author",
          keyword: "",
          boolean: "and"
        },
        {
          field: "SUBJECT",
          title: "Major Subjects",
          keyword: "",
          boolean: "and"
        },
        {
          field: "FORD_YEAR",
          title: "Year",
          keyword: "",
          boolean: "and"
        },
        {
          field: "A_MEDIA_MAKE",
          title: "Make",
          keyword: "",
          boolean: "and"
        },
        {
          field: "A_MEDIA_MODEL",
          title: "Model",
          keyword: "",
          boolean: "and"
        },
        {
          field: "A_MATERIAL",
          title: "Material",
          keyword: "",
          boolean: "and"
        }
      ]
    };
  }
  updateClusterList(data) {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "text/xml");
    this.setState({ openModal: true, clusterList: xmlToJson(xml) });
  }
  openModal(field) {
    getClusterList(this.props.session, field)
      .then(res => {
        console.log(res);
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
    let { searchExp } = this.state.searchExp;
    console.log(searchExp);
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
                {this.state.searchExp.map((exp, index) => (
                  <FieldGroup
                    handleClick={field => this.openModal(exp)}
                    form_name={exp.keyword}
                    field={exp.title}
                    val={this.state.searchExp[index].keyword}
                  />
                ))}
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
        <Form.Control as="select" onChange={e => console.log(e.target.value)}>
          <option value="AND">And</option> <option value="OR">Or</option>
          <option value="NOT">Not</option>
        </Form.Control>
      </InputGroup.Prepend>
      <Form.Control
        onChange={e => console.log(e.target.value)}
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

export default AdvancedSearch;
