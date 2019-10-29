import React, { Component } from "react";
import styled from "styled-components";

const Cadre = styled.div`
   {
    width: 85%;
    height: 100px;
    background: #eee7db;
    border: 1px solid #a40808;
    margin: 25px 50px;
  }
`;

class Tabbtn extends Component {
  render() {
    return <Cadre>TEST</Cadre>;
  }
}

export default Tabbtn;
