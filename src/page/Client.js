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

class Client extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Weblog - Contact Client</Title>
        <div class="divTable redTable">
          <div class="divTableHeading">
            <div class="divTableRow">
              <div class="divTableHead">Action</div>
              <div class="divTableHead">Société</div>
              <div class="divTableHead">Nom</div>
              <div class="divTableHead">Prénom</div>
              <div class="divTableHead">Fonction</div>
              <div class="divTableHead">Téléphone</div>
              <div class="divTableHead">Mobile</div>
              <div class="divTableHead">E-mail</div>
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
              <div class="divTableCell">cell6_1</div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Client;
