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

      openHelp: false
    };
  }

  closeHelp = _ => {
    this.setState({ openHelp: false });
  };
  openHelp = _ => {
    this.setState({ openHelp: true });
  };

  render() {
    const action = document.getElementById("search-link").innerText;
    const session = document.getElementById("session-id").innerText;
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
                  title="Simple Search Help"
                  aria-label="Simple Search Help"
                >
                  <span className="sr-only">Simple Search Help</span>
                  <FaQuestionCircle className="no-format-svg" />
                </Button>{" "}
                <HelpModal
                  open={this.state.openHelp}
                  close={_ => this.closeHelp()}
                />
              </InputGroup.Prepend>

              <Form.Control
                id="simpleSearchInput"
                size="lg"
                type="text"
                placeholder="Search keyword"
                name="KEYWORD_CL"
                required
              />
              <InputGroup.Append>
                <Button type="submit" size="lg" className="searchButton">
                  Go
                </Button>
                <span className="sr-only">Search Button</span>
                <Button
                  className="expandedButton"
                  aria-label="Expand Advanced Search"
                  title="Expand Advanced Search"
                  variant="secondary"
                  size="lg"
                  onClick={() => this.setState({ open: !this.state.open })}
                >
                  <FaCaretDown className="no-format-svg" />
                  <span className="sr-only">Expand Advanced Search</span>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <AdvancedSearch
          session={session}
          action={action}
          open={this.state.open}
        />
      </Col>
    );
  }
}

export default SearchBar;
