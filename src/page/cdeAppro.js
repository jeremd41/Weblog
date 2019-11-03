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

class cdeAppro extends Component {
  render() {
    const { cdeA } = this.props;
    return (
      <Wrapper>
        <Title>Weblog - Commande Appro</Title>
        <div className="divTable redTable">
          <div className="divTableHeading">
            <div className="divTableRow">
              <div className="divTableHead">Action</div>
              <div className="divTableHead">N°Cde</div>
              <div className="divTableHead">Fournisseur</div>
              <div className="divTableHead">Observation</div>
              <div className="divTableHead">Date Cde</div>
              <div className="divTableHead">Date Livraison</div>
            </div>
          </div>
          {cdeA.map(cde => {
            return (
              <div className="divTableBody" key={cde.nCde}>
                <div className="divTableRow">
                  <div className="divTableCell cellPreview">
                    <Link to={"/cdeappro/" + cde.nCde}>Aperçu</Link>
                  </div>
                  <div className="divTableCell">{cde.nCde}</div>
                  <div className="divTableCell">{cde.fournisseur}</div>
                  <div className="divTableCell">{cde.observation}</div>
                  <div className="divTableCell">{cde.dateCde}</div>
                  <div className="divTableCell">{cde.dateLiv}</div>
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
    cdeA: state.cdeA
  };
};

export default connect(mapStatetoProps)(cdeAppro);
