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
    position: relative;

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
      width: 30%;
    }

    input {
      float: right;
      background: #827b7a;
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

    .barreTache {
      height: 50px;
      background: #aaaaaa;
      width: 90%;
      margin: 25px 50px;
      border: 1px solid #a40808;
    }

    button {
      cursor: pointer;
      margin-top: 10px;
      margin-right: 10px;
      border: none;
      height: 25px
      width: 10%;
      border: 1px solid #8f8887;

      :hover {
        background: #8f8887;
      }
    }

    .btnModif{
      margin-left: 10px;
    }

    .btnValider{
      position:absolute;
      top: 49%;
      left:40%
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
  state = {
    nCde: this.props.commande.nCde,
    fournisseur: this.props.commande.fournisseur,
    reference: this.props.commande.reference,
    dateCde: this.props.commande.dateCde,
    dateLiv: this.props.commande.dateLiv,
    observation: this.props.commande.observation,
    visibleModif: false
  };

  handleClick = () => {
    this.setState({
      visibleModif: !this.state.visibleModif
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUpdate = event => {
    event.preventDefault();

    this.props.updateCdeA(
      this.state.nCde,
      this.state.client,
      this.state.reference,
      this.state.dateCde,
      this.state.dateLiv,
      this.state.observation
    );

    this.setState({
      visibleModif: !this.state.visibleModif
    });
  };

  handleDelete = event => {
    event.preventDefault();

    this.props.deleteCdeA(this.state.nCde);
    this.props.history.push("/cdeappro");
  };

  render() {
    let valider;

    if (this.state.visibleModif) {
      valider = (
        <button className="btnValider" onClick={this.handleUpdate}>
          Valider
        </button>
      );
    }

    const details = this.props.commande.reference;
    const cde = this.props.commande ? (
      <div className="divTable redTable">
        <div className="divTableHeading">
          <div className="divTableRow">
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
        <Link to="/cdeappro" className="backPages">
          {"<  Retour"}
        </Link>
        <Title>Fiche Commande Appro N°{this.props.commande.nCde}</Title>
        <div className="barreTache">
          <button className="btnModif" onClick={this.handleClick}>
            Modifier
          </button>
          <button onClick={this.handleDelete}>Supprimer</button>
        </div>
        <div className="flexbox">
          <label>
            Date commande :
            <input type="text" value={this.props.commande.dateCde} />
          </label>
          <label>
            Date Liv :{" "}
            <input
              style={{
                background: this.state.visibleModif ? "white" : "#827b7a"
              }}
              name="dateLiv"
              type="text"
              value={
                this.state.visibleModif
                  ? this.state.dateLiv
                  : this.props.commande.dateLiv
              }
              onChange={this.handleChange}
            />
          </label>
          <label>
            Fournisseur :
            <input
              style={{
                background: this.state.visibleModif ? "white" : "#827b7a"
              }}
              name="fournisseur"
              type="text"
              value={
                this.state.visibleModif
                  ? this.state.fournisseur
                  : this.props.commande.fournisseur
              }
              onChange={this.handleChange}
            />
          </label>
          <label>
            Observation :
            <input
              style={{
                background: this.state.visibleModif ? "white" : "#827b7a"
              }}
              name="observation"
              type="text"
              value={
                this.state.visibleModif
                  ? this.state.observation
                  : this.props.commande.observation
              }
              onChange={this.handleChange}
            />
          </label>
          {valider}
        </div>
        <div className="commande">
          <h3 className="detailtableau">Détails commande : </h3>
          {cde}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.cde_nCde;
  return {
    commande: state.cdeA.find(post => post.nCde == id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCdeA: (
      nCde,
      fournisseur,
      reference,
      dateCde,
      dateLiv,
      observation
    ) => {
      dispatch({
        type: "UPDATE_CDEA",
        nCde,
        fournisseur,
        reference,
        dateCde,
        dateLiv,
        observation
      });
    },
    deleteCdeA: nCde => {
      dispatch({ type: "DELETE_CDEA", nCde: nCde });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TempCdeA);
