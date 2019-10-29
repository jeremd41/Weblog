import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
   {
    margin-top: 30px;
  }
`;

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
  }
`;

class Expedition extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Weblog - Expedition</Title>
      </Wrapper>
    );
  }
}

export default Expedition;
