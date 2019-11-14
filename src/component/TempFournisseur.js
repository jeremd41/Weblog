import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
   {
    padding: 20px 0;
    color: #fff;
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

    label {
      margin: 5px;
      width: 100%;
    }

    input {
      background: #827b7a;
      float: right;
    }

    .ficheClient{
      display: flex;
      width: 100%;
    }

    .form{
      width: 40%;
      display: flex;
      flex-direction: column;

        input{
        float : left;
        background:#fff ;
        }
    }

    .formStatic{
      width: 40%;
      display: flex;
      flex-direction: column;
      margin-right: 25px;
    }

    .btnValider{
      position:absolute;
      top: 79%;
      right:3%
    }

  }
`;

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
  }
`;

const Fiche = styled.div`
   {
    display: flex;
    flex-direction: column;
    border: 1px solid #a40808;
    width: 90%;
    padding: 20px 0;
    margin-left: 50px;
    position: relative;
  }
`;

class TempFournisseur extends Component {
  state = {
    id: this.props.fournisseur.id,
    societe: this.props.fournisseur.societe,
    nom: this.props.fournisseur.nom,
    prenom: this.props.fournisseur.prenom,
    fonction: this.props.fournisseur.fonction,
    telephone: this.props.fournisseur.telephone,
    mobile: this.props.fournisseur.mobile,
    email: this.props.fournisseur.email,
    visibleModif: false
  };

  handleUpdate = event => {
    event.preventDefault();

    this.props.updateFournisseur(
      this.state.id,
      this.state.societe,
      this.state.nom,
      this.state.prenom,
      this.state.fonction,
      this.state.telephone,
      this.state.mobile,
      this.state.email
    );

    this.setState({
      visibleModif: !this.state.visibleModif
    });
  };

  handleDelete = event => {
    event.preventDefault();

    this.props.deleteClient(this.state.id);
    this.props.history.push("/fournisseur");
  };

  handleClick = () => {
    this.setState({
      visibleModif: !this.state.visibleModif
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const afficherModif = this.state.visibleModif;
    let formModif;
    let valider;

    if (afficherModif) {
      formModif = (
        <div className="form">
          <label>
            <input
              name="societe"
              value={this.state.societe}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="nom"
              value={this.state.nom}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="prenom"
              value={this.state.prenom}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="fonction"
              value={this.state.fonction}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="telephone"
              value={this.state.telephone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </div>
      );
      valider = (
        <button className="btnValider" onClick={this.handleUpdate}>
          Valider
        </button>
      );
    }

    const cli = this.props.fournisseur ? (
      <Fiche>
        <div className="ficheClient">
          <div className="formStatic">
            <label>
              Société:{" "}
              <input type="text" value={this.props.fournisseur.societe} />
            </label>
            <label>
              Nom: <input type="text" value={this.props.fournisseur.nom} />
            </label>
            <label>
              Prenom:{" "}
              <input type="text" value={this.props.fournisseur.prenom} />
            </label>
            <label>
              Fonction:
              <input type="text" value={this.props.fournisseur.fonction} />
            </label>
            <label>
              Téléphone:
              <input type="text" value={this.props.fournisseur.telephone} />
            </label>
            <label>
              Mobile:
              <input type="text" value={this.props.fournisseur.mobile} />
            </label>
            <label>
              E-mail:
              <input type="text" value={this.props.fournisseur.email} />
            </label>
          </div>
          {formModif}
        </div>
        {valider}
      </Fiche>
    ) : (
      <span>Ce client existe pas ...</span>
    );
    return (
      <Wrapper>
        <Link to="/fournisseur" className="backPages">
          {"<  Retour"}
        </Link>
        <Title>Contact Fournisseur N°{this.props.fournisseur.id}</Title>
        <div className="barreTache">
          <button className="btnModif" onClick={this.handleClick}>
            Modifier
          </button>
          <button onClick={this.handleDelete}>Supprimer</button>
        </div>
        {cli}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.fournisseur_id;
  return {
    fournisseur: state.fournisseur.find(post => post.id == id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFournisseur: (
      id,
      societe,
      nom,
      prenom,
      fonction,
      telephone,
      mobile,
      email
    ) => {
      dispatch({
        type: "UPDATE_FOURNISSEUR",
        id,
        societe,
        nom,
        prenom,
        fonction,
        telephone,
        mobile,
        email
      });
    },
    deleteClient: id => {
      dispatch({ type: "DELETE_FOURNISSEUR", id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TempFournisseur);
