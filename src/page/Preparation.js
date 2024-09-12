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

class Preparation extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Weblog - Préparation de commande</Title>
        <Title>Pas disponible dans la version Démo...</Title>
      </Wrapper>
    );
  }
}

export default Preparation;
