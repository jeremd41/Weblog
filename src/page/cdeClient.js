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

class cdeClient extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Weblog - Commande Client</Title>
        <div class="divTable redTable">
          <div class="divTableHeading">
            <div class="divTableRow">
              <div class="divTableHead">Action</div>
              <div class="divTableHead">N°Cde</div>
              <div class="divTableHead">Client</div>
              <div class="divTableHead">Nb Pal</div>
              <div class="divTableHead">Destinataire</div>
              <div class="divTableHead">Date commande</div>
              <div class="divTableHead">Date Livraison</div>
            </div>
          </div>
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">cell1_1</div>
              <div class="divTableCell">cell2_1</div>
              <div class="divTableCell">cell3_1</div>
              <div class="divTableCell">cell4_1</div>
              <div class="divTableCell">cell5_1</div>
              <div class="divTableCell">cell6_1</div>
              <div class="divTableCell">cell6_1</div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default cdeClient;
