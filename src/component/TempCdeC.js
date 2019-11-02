import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
   {
    margin-top: 20px;
    padding: 20px 0;
    color: #fff;
    border: 1px solid #a40808;

    .backPages {
      font-size: 16px;
      margin-left: 50px;
      cursor: pointer;
      color: #fff;

      :hover {
        text-decoration: underline;
      }
    }

    label {
      margin: 5px;
      margin-left: 50px;
    }

    .flexbox {
      display: flex;
      flex-direction: column;
    }

    .commande {
      margin-top: 85px;
      color: #111;

      .detailtableau {
        color: #fff;
        margin-left: 50px;
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

class TempCdeA extends Component {
  render() {
    console.log(this.props);
    const details = this.props.commande.reference;
    const cde = this.props.commande ? (
      <div className="divTable redTable">
        <div className="divTableHeading">
          <div className="divTableRow">
            <div className="divTableHead">Ligne</div>
            <div className="divTableHead">Reference</div>
            <div className="divTableHead">Dénomination</div>
            <div className="divTableHead">Qté</div>
            <div className="divTableHead">Unité</div>
          </div>
        </div>
        {details.map(ligne => {
          return (
            <div className="divTableBody" key={ligne.id}>
              <div className="divTableRow">
                <div className="divTableCell">{ligne.id}</div>
                <div className="divTableCell">{ligne.ref}</div>
                <div className="divTableCell">{ligne.denomination}</div>
                <div className="divTableCell">{ligne.qte}</div>
                <div className="divTableCell">{ligne.unité}</div>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <Wrapper>
        <span>Cette commande existe pas ...</span>
      </Wrapper>
    );
    return (
      <Wrapper>
        <Link to="/cdeclient" className="backPages">
          {"<  Retour"}
        </Link>
        <Title>Fiche Commande Client N°{this.props.commande.nCde}</Title>
        <div className="flexbox">
          <label>
            Date commande :
            <input type="text" readonly value={this.props.commande.dateCde} />
          </label>
          <label>
            Date Liv :{" "}
            <input type="text" readonly value={this.props.commande.dateLiv} />
          </label>
          <label>
            Fournisseur :
            <input
              type="text"
              readonly
              value={this.props.commande.fournisseur}
            />
          </label>
        </div>
        <div className="commande">
          <h3 className="detailtableau">Détails commande : </h3>
          {cde}
        </div>
        <label>
          Observation :
          <input type="text" readonly value={this.props.commande.observation} />
        </label>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.cde_nCde;
  return {
    commande: state.cdeC.find(post => post.nCde == id)
  };
};

export default connect(mapStateToProps)(TempCdeA);
