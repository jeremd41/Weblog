import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
   {
    margin-top: 20px;
    color: #fff;

    .backPages {
      font-size: 12px;
      margin-left: 50px;
      cursor: pointer;
      color: #fff;
      :hover {
        text-decoration: underline;
      }
    }

    .commande {
      background: #8f8887;
    }
  }
`;

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
    margin-top: 30px;
  }
`;

class TempCdeA extends Component {
  render() {
    console.log(this.props);
    const details = this.props.commande.reference;
    const cde = this.props.commande ? (
      <div>
        {details.map(ligne => {
          return <Title key={ligne.id}>{ligne.ref}</Title>;
        })}
      </div>
    ) : (
      <Wrapper>
        <span>Cette commande existe pas ...</span>
      </Wrapper>
    );
    return (
      <Wrapper>
        <Link to="/cdeappro" className="backPages">
          {"<  Retour"}
        </Link>
        <Title>Fiche Commande Appro N°{this.props.commande.nCde}</Title>
        <div className="commande">{cde}</div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.cde_nCde;
  return {
    commande: state.cdeA.find(post => post.nCde === id)
  };
};

export default connect(mapStateToProps)(TempCdeA);
