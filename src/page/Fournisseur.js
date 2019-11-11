import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import FormAddF from "../component/addF";

const Wrapper = styled.div`
   {
    margin-top: 30px;

    .form {
      display: flex;
      flex-direction: column;
    }

    label {
      color: #fff;
      margin: 5px;
    }

    button {
      cursor: pointer;
    }

    .barreTache {
      height: 50px;
      background: #aaaaaa;
      width: 90%;
      margin: 25px 50px;
      border: 1px solid #a40808;
    }

    .btnModal {
      margin-left: 25px;
      margin-top: 12px;
      height: 25px;
      border: 1px solid #8f8887;

      :hover {
        background: #8f8887;
      }
    }
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
  state = {
    visible: false
  };

  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const afficherModal = this.state.visible;
    let modal;

    if (afficherModal) {
      modal = <FormAddF cache={this.handleClick} />;
    }

    const { fournisseur } = this.props;
    return (
      <Wrapper>
        <Title>Weblog - Contact Fournisseur</Title>
        <div className="barreTache">
          <button className="btnModal" onClick={this.handleClick}>
            Créer fournisseur
          </button>
        </div>
        {modal}
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
                  <div class="divTableCell cellPreview">
                    <Link to={"/fournisseur/" + ligne.id}>Voir</Link>
                  </div>
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
