import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
   {
    margin-top: 30px;

    .cellPreview:hover {
      text-decoration: underline;
      cursor: pointer;
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

class cdeClient extends Component {
  render() {
    const { cdeC } = this.props;
    return (
      <Wrapper>
        <Title>Weblog - Commande Client</Title>
        <div className="divTable redTable">
          <div className="divTableHeading">
            <div className="divTableRow">
              <div className="divTableHead">Action</div>
              <div className="divTableHead">N°Cde</div>
              <div className="divTableHead">Client</div>
              <div className="divTableHead">Observation</div>
              <div className="divTableHead">Date Cde</div>
              <div className="divTableHead">Date Livraison</div>
            </div>
          </div>
          {cdeC.map(cde => {
            return (
              <div className="divTableBody" key={cde.nCde}>
                <div className="divTableRow">
                  <div className="divTableCell cellPreview">
                    <Link to={"/cdeclient/" + cde.nCde}>Aperçu</Link>
                  </div>
                  <div className="divTableCell">{cde.nCde}</div>
                  <div className="divTableCell">{cde.client}</div>
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
    cdeC: state.cdeC
  };
};

export default connect(mapStatetoProps)(cdeClient);
