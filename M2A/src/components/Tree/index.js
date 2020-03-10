import { TREE_DATA } from "../../services/treeData";
import React from "react";
import { Tree } from "antd";
const { TreeNode, DirectoryTree } = Tree;
class TreeView extends React.Component {
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
      <DirectoryTree showLine showIcon={false} selectable={false}>
        {this.renderTreeNodes(TREE_DATA.data)}
      </DirectoryTree>
    );
  }
}

export default TreeView;
