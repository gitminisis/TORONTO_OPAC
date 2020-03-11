import React from "react";
import { Tree, Drawer, Button } from "antd";
const { TreeNode, DirectoryTree } = Tree;
import axios from "axios";
import { xmlToJson } from "../../services";
import { FaTree } from "react-icons/fa";
class TreeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      placement: "left"
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  loadNode = (exp, node) => {
    let session = document.getElementById("session-id").innerText;
    axios
      .get(
        `${session}/1/1?SEARCH&&DATABASE=FORD_SUBJECT_OPAC&EXP=${exp}&ERRMSG=[FORD_OPAC]/no-record.html`
      )
      .then(res => {
        let dataXML = res.data;
        let newDocument = document
          .createRange()
          .createContextualFragment(dataXML);

        let xml = newDocument.querySelector("#subject_xml");

        let json = xmlToJson(xml, ["report.terms.lower", "report.terms.upper"]);
        let data = json.report.terms;
        if (!data.lower) {
          node.props.dataRef.isLeaf = true;
        }
        node.props.dataRef.children = data.lower
          ? data.lower.map(e => {
              return {
                title: e,
                isLeaf: false
              };
            })
          : null;

        this.setState({ data: [...this.state.data] });
      });
  };
  initTree = exp => {
    let session = document.getElementById("session-id").innerText;
    axios
      .get(
        `${session}/1/1?SEARCH&&DATABASE=FORD_SUBJECT_OPAC&EXP=${exp}&ERRMSG=[FORD_OPAC]/no-record.html`
      )
      .then(res => {
        console.log(res);
        let dataXML = res.data;
        let newDocument = document
          .createRange()
          .createContextualFragment(dataXML);
        console.log(newDocument);
        let xml = newDocument.querySelector("#subject_xml");

        let json = xmlToJson(xml, [
          "report.terms",
          "report.terms.lower",
          "report.terms.upper"
        ]);
        console.log(json);
        let data = json.report.terms.map(e => {
          return {
            title: e.term,
            isLeaf: !e.lower,
            children: e.lower
              ? e.lower.map(c => {
                  return {
                    title: c
                  };
                })
              : null
          };
        });
        this.setState({ data: data });
      });
  };
  componentDidMount() {
    this.initTree("sisn present and eng_desc present and not eng_bt present");
  }

  onLoadData = treeNode =>
    new Promise(resolve => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        this.loadNode(`eng_term "${treeNode.props.title}"`, treeNode);
        resolve();
      }, 1000);
    });

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.title}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }

      return <TreeNode key={item.title} {...item} dataRef={item} />;
    });

  render() {
    return (
      <div>
        <Drawer
          width={800}
          title="SUBJECT SEARCH"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.state.data.length ? (
            <Tree
              showLine
              showIcon={false}
              selectable={false}
              loadData={this.onLoadData}
            >
              {this.renderTreeNodes(this.state.data)}
            </Tree>
          ) : (
            <> loading tree</>
          )}
        </Drawer>
      </div>
    );
  }
}

export default TreeView;
