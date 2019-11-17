import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
   {
    width: 80%;
    height: 600px;
    margin: 25px auto;
    background: #111;
    z-index: 5;
    position: absolute;
    top: 1%;
    right: 5%;
    box-shadow: 1px 2px 3px #111;
    color: #fff;

    .btnFermer {
      width: 22px;
      height: 20px;
      position: absolute;
      top: 3%;
      right: 3%;
      border: none;
      color: #111;
      border: 1px solid #8f8887;

      :hover {
        background: #8f8887;
      }
    }

    .formLigne {
      display: flex;
      flex-direction: column;
      width:50%;
    }

    h2 {
      color: #fff;
      text-align: left;
      margin-left: 40px;
    }

    h3{
      position: absolute;
      top: 3%;
      left: 25%;
    }

    label {
      padding-left: 35px;
      width: 70%;
      margin: 5px;
    }

    input {
      float: right;
    }

    .btnAjouter {
      width: 10%;
      position: absolute;
      height: 25px;
      border: 1px solid #8f8887;
      top: 35%;
      left: 4%;

      :hover {
        background: #8f8887;
      }
    }
    
    .ligne {
      color: #111;
      margin-top: 100px;
    }

    .btnValider {
      width: 15%;
      height: 25px;
      border: 1px solid #8f8887;
      position: absolute;
      bottom: 5%;
      right: 5%;
    }

    .btnClose{
      width: 15%;
      height: 25px;
      border: 1px solid #8f8887;
      position: absolute;
      bottom: 5%;
      right: 25%;
    }

    .read {
      background: #827b7a;
    }

    form {
      width:100%
      display: flex;
    }
  }
`;

const auj = new Date();
var increment = 1;

class AddCdeC extends Component {
  state = {
    fournisseur: "",
    reference: [],
    dateCde:
      auj.getDate() + "/" + (auj.getMonth() + 1) + "/" + auj.getFullYear(),
    dateLiv: "",
    observation: "",

    id: increment++,
    ref: "",
    denomination: "",
    qte: "",
    unité: "",

    visibleModal: false,
    visibleCommande: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLigne = event => {
    event.preventDefault();

    const objLigne = {
      id: this.state.id,
      ref: this.state.ref,
      denomination: this.state.denomination,
      qte: this.state.qte,
      unité: this.state.unité
    };

    this.state.reference.push(objLigne);

    this.setState({
      id: increment++,
      ref: "",
      denomination: "",
      qte: "",
      unité: ""
    });
  };

  handleCde = event => {
    event.preventDefault();

    this.props.addCdeC(
      this.state.fournisseur,
      this.state.dateCde,
      this.state.dateLiv,
      this.state.observation,
      this.state.reference
    );

    this.setState({
      fournisseur: "",
      dateLiv: "",
      observation: "",
      reference: [],
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <div className="overlay">
        <Wrapper>
          <h2>Créer une commande Client</h2>
          <button className="btnFermer" onClick={this.props.cache}>
            X
          </button>
          <form>
            <div className="formLigne">
              <label>
                Reference:
                <input
                  name="ref"
                  value={this.state.ref}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Denomination:
                <input
                  name="denomination"
                  value={this.state.denomination}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Quantité:
                <input
                  name="qte"
                  value={this.state.qte}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Unité:
                <input
                  name="unité"
                  value={this.state.unité}
                  onChange={this.handleChange}
                />
              </label>
              <button className="btnAjouter" onClick={this.handleLigne}>
                Ajouter ref
              </button>
            </div>
            <div className="formLigne">
              <label>
                Client:
                <input
                  name="fournisseur"
                  value={this.state.fournisseur}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Date commande:
                <input className="read" value={this.state.dateCde} />
              </label>
              <label>
                Date livraison:
                <input
                  name="dateLiv"
                  value={this.state.dateLiv}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Observation:
                <input
                  name="observation"
                  value={this.state.observation}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <button className="btnValider" onClick={this.handleCde}>
              Valider
            </button>
            <button className="btnClose" onClick={this.props.cache}>
              Fermer
            </button>
          </form>
          <div className="divTable redTable ligne">
            <div className="divTableHeading">
              <div className="divTableRow">
                <div className="divTableHead">Reference</div>
                <div className="divTableHead">Dénomination</div>
                <div className="divTableHead">Qté</div>
                <div className="divTableHead">Unité</div>
              </div>
            </div>
            {this.state.reference.map(ligne => {
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
        </Wrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCdeC: (client, dateCde, dateLiv, observation, reference) => {
      dispatch({
        type: "ADD_CDEC",
        client,
        dateCde,
        dateLiv,
        observation,
        reference
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCdeC);
