import React from "react";
import { Card, Table, Button, Tooltip } from "antd";

import Tree from "../Tree";

import SearchHistory from "../SearchHistory";
import { logout } from "../../services/logout";

class SideBar extends React.Component {
  render() {
    let sessionId = document.getElementById("session-id").innerText;
    return (
      <>
        <div>
          <Card
            className="sideBarCard"
            title="Browse By Collection"
            style={{ width: "100%" }}
            bordered={false}
          >
            <Tree />
          </Card>
        </div>
        <div>
          <SearchHistory />
        </div>
        <div>
          <Card
            bordered={false}
            className="sideBarCard"
            title="Your Account"
            style={{ width: "100%" }}
            bodyStyle={{ textAlign: "center" }}
          >
            <Tooltip title="Your saved bag">
              <Button
                onClick={_ =>
                  (window.location = `${
                    document.getElementById("session-id").innerText
                  }?get&file=[MIT_ROOT]view-bag.html`)
                }
                size="large"
                className="accountButton"
                style={{ width: "75%" }}
              >
                SAVED BAG
              </Button>
            </Tooltip>
            <Tooltip title="Your saved search">
              {" "}
              <Button
                onClick={_ =>
                  (window.location = document.getElementById(
                    "view-bookmark"
                  ).innerText)
                }
                size="large"
                className="accountButton"
                style={{ width: "75%" }}
              >
                SAVED SEARCH
              </Button>
            </Tooltip>{" "}
            <Button
              onClick={_ => {
                logout(sessionId).then(res => {
                  window.location = "/";
                });
              }}
              size="large"
              className="accountButton"
              style={{ width: "75%", marginBottom: "30px" }}
            >
              LOGOUT
            </Button>
          </Card>
        </div>
      </>
    );
  }
}

export default SideBar;
