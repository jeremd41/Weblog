import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

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

class Fournisseur extends Component {
  render() {
    const { fournisseur } = this.props;
    return (
      <Wrapper>
        <Title>Weblog - Contact Fournisseur</Title>
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
          {fournisseur.map(ligne => {
            return (
              <div class="divTableBody" key={ligne.id}>
                <div class="divTableRow">
                  <div class="divTableCell">Voir</div>
                  <div class="divTableCell">{ligne.societe}</div>
                  <div class="divTableCell">{ligne.nom}</div>
                  <div class="divTableCell">{ligne.prenom}</div>
                  <div class="divTableCell">{ligne.fonction}</div>
                  <div class="divTableCell">{ligne.telephone}</div>
                  <div class="divTableCell">{ligne.mobile}</div>
                  <div class="divTableCell">{ligne.email}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
}

const mapStatetoProps = state => {
  return {
    fournisseur: state.fournisseur
  };
};

export default connect(mapStatetoProps)(Fournisseur);
