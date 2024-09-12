import React, { Component } from "react";
import Menu from "./Menu";
import styled from "styled-components";

const Content = styled.div`
   {
    width: 90%;
    margin-left: 200px;
  }
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Menu />
        <Content className="content">{children}</Content>
      </div>
    );
  }
}

export default Layout;
