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
import { Input } from "antd";
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
          field: "OBJECT_NAME",
          title: "Name of Object",
          keyword: "",
          boolean: "and",
        },
        {
          field: "ACCESSION_NUMBER",
          title: "Accession Number",
          keyword: "",
          boolean: "and",
        },
        {
          field: "LEGAL_TITLE",
          title: "Title",
          keyword: "",
          boolean: "and",
        },
        {
          field: "MAKER_FULLNAME",
          title: "Maker",
          keyword: "",
          boolean: "and",
        },
        {
          field: "BUS_UNIT_OWNER",
          title: "Site",
          keyword: "",
          boolean: "and",
        },
        {
          field: "COLLECTION_TYPE",
          title: "Collection",
          keyword: "",
          boolean: "and",
        },
        {
          field: "MATERIAL_COO",
          title: "Material",
          keyword: "",
          boolean: "and",
        },
        {
          field: "PPG_ADD1",
          title: "Place of Production",
          keyword: "",
          boolean: "and",
        },
        {
          field: "SUB_KEYWORD",
          title: "Subject",
          keyword: "",
          boolean: "and",
        },
      ],
    };
  }
  updateClusterList = (data) => {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "text/xml");
    this.setState({ openModal: true, clusterList: xmlToJson(xml) });
  };

  openModal = (field) => {
    getClusterList(this.props.session, field)
      .then((res) => {
        this.updateClusterList(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  closeModal = (_) => {
    this.setState({ openModal: false });
  };

  getCluster = (keyvalue, keyname, url) => {
    let data = `KEYNAME=${keyname}&KEYVALUE=${keyvalue}`;
    getCluster(url, data)
      .then((res) => {
        this.updateClusterList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  pageAction = (url) => {
    url = url.replace(/--/g, "");
    pageAction(url)
      .then((res) => {
        if (url !== "#" && res.data && res.data !== "") {
          this.updateClusterList(res.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  selectCluster = (val, keyname) => {
    let searchExp = this.state.searchExp;
    let field = searchExp.filter(
      (e) => e.field.toLowerCase() === keyname.toLowerCase()
    )[0];
    let index = this.state.searchExp.indexOf(field);
    searchExp[index].keyword = val;
    this.setState({
      searchExp: searchExp,
    });
  };

  updateField = (value, index, field) => {
    let searchExp = this.state.searchExp;
    let searchInput = searchExp[index];
    searchInput[field] = value;
    this.setState({
      searchExp: searchExp,
    });
  };
  submitSearch = (_) => {
    let data = this.state.searchExp.filter((e) => e.keyword !== "");
    let len = data.length;
    data = data
      .map((exp, index) => {
        if (index === 0) {
          return `${exp.field} ${exp.keyword}`;
        }
        return `${exp.boolean} ${exp.field} "${exp.keyword}"`;
      })
      .join(" ");
    document.getElementById("advancedSearchInput").value = data;
    document.getElementById("advancedSearchForm").submit();
  };
  render() {
    let { searchExp } = this.state;

    const session = document.getElementById("session-id").innerText;
    return (
      <>
        {" "}
        <Form
          hidden
          method="POST"
          id="advancedSearchForm"
          action={`${session}/1/1?SEARCH&DATABASE=COLLECTIONS&ERRMSG=[COT_OPAC]/no-record.html`}
          method="POST"
        >
          <Input name="KEYWORD" hidden id="advancedSearchInput" />
          <label for="advancedSearchInput" style={{ display: "none" }}>
            Advanced Search Input
          </label>
        </Form>
        <Collapse in={this.props.open}>
          <Form>
            <Card className="text-center">
              <ClusterModal
                open={this.state.openModal}
                close={(_) => this.closeModal()}
                data={this.state.clusterList}
                getCluster={this.getCluster}
                pageAction={this.pageAction}
                submit={this.selectCluster}
              />
              <Card.Header as="h4">Advanced Search</Card.Header>
              <Card.Body>
                <Form.Group>
                  {/* <RadioGroup name="FIELD_OP_1" /> */}
                  {this.state.searchExp.map((exp, index) => (
                    <FieldGroup
                      update={this.updateField}
                      exp={exp}
                      handleClick={(field) => this.openModal(exp)}
                      form_name={exp.keyword}
                      field={exp.title}
                      val={this.state.searchExp[index].keyword}
                      index={index}
                    />
                  ))}
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button onClick={(_) => this.submitSearch()}>Search</Button>
              </Card.Footer>
            </Card>
          </Form>
        </Collapse>
      </>
    );
  }
}

const FieldGroup = (props) => {
  return (
    <InputGroup className="fieldGroup">
      <InputGroup.Prepend>
        <Form.Label
          style={{ display: "none" }}
          htmlFor={props.exp.field + "_operator"}
        >
          Operator
        </Form.Label>
        <Form.Control
          as="select"
          id={props.exp.field + "_operator"}
          onChange={(e) => props.update(e.target.value, props.index, "boolean")}
        >
          <option value="AND">And</option>
          <option value="OR">Or</option>
          <option value="AND NOT">Not</option>
        </Form.Control>
      </InputGroup.Prepend>
      <Form.Label style={{ display: "none" }} htmlFor={props.exp.field}>
        {props.field}
      </Form.Label>
      <Form.Control
        onChange={(e) => props.update(e.target.value, props.index, "keyword")}
        type="text"
        id={props.exp.field}
        name={props.form_name}
        placeholder={props.field}
        value={props.val}
      />
      <InputGroup.Append>
        <Button
          aria-label="Browse"
          title="Browse"
          onClick={(_) => props.handleClick(props.field)}
          variant="secondary"
        >
          <FaBars className="no-format-svg" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default AdvancedSearch;
