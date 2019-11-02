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
  }
`;

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
  }
`;

class TempFournisseur extends Component {
  render() {
    console.log(this.props);
    const frs = this.props.fournisseur ? (
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
      </div>
    ) : (
      <Wrapper>
        <span>Ce client existe pas ...</span>
      </Wrapper>
    );
    return (
      <Wrapper>
        <Link to="/client" className="backPages">
          {"<  Retour"}
        </Link>
        <Title>Fournisseur N°{this.props.fournisseur.id}</Title>
        {frs}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.fournisseur_id;
  return {
    fournisseur: state.fournisseur.find(post => post.id === id)
  };
};

export default connect(mapStateToProps)(TempFournisseur);
