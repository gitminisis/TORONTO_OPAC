import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { FaQuestionCircle, FaCaretDown } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import "./searchBar.css";
import AdvancedSearch from "./AdvancedSearch";
import HelpModal from "./HelpModal";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      isHover: false,
      openHelp: false
    };
  }

  closeHelp = _ => {
    this.setState({ openHelp: false });
    console.log(this.state);
  };
  openHelp = _ => {
    this.setState({ openHelp: true });
  };

  render() {
    const action = document.getElementById("search-link").innerText;
    return (
      <Col xs={12} className="searchBar">
        <Form action={action} method="POST">
          <Form.Group controlId="simpleSearch">
            <InputGroup>
              <InputGroup.Prepend>
                <Button
                  variant="secondary"
                  id="simpleSearchHelp"
                  onClick={_ => this.openHelp()}
                >
                  <FaQuestionCircle className="no-format-svg" />
                </Button>{" "}
                <HelpModal
                  open={this.state.openHelp}
                  close={_ => this.closeHelp()}
                />
              </InputGroup.Prepend>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Search keyword"
                aria-describedby="simpleSearchHelp"
                name="KEYWORD_CL"
                required
              />
              <InputGroup.Append>
                <Button type="submit" size="lg">
                  Go
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onMouseEnter={() => {
                    this.setState({ isHover: !this.state.isHover });
                  }}
                  onMouseLeave={() => {
                    this.setState({ isHover: !this.state.isHover });
                  }}
                  onClick={() => this.setState({ open: !this.state.open })}
                >
                  {this.state.isHover ? (
                    <FaCaretDown className="no-format-svg" />
                  ) : (
                    <FaCaretDown className="no-format-svg" />
                  )}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <AdvancedSearch
          session={this.props.session}
          action={action}
          open={this.state.open}
        />
      </Col>
    );
  }
}

export default SearchBar;
