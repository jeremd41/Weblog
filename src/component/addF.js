import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
   {
    width: 45%;
    height: 400px;
    margin: 25px auto;
    background: #a40808;
    z-index: 5;
    position: absolute;
    top: 20%;
    right: 26%;
    box-shadow: 1px 2px 3px #111;

    .btnFermer {
      width: 22px;
      height: 20px;
      position: absolute;
      top: 3%;
      right: 3%;
      border: none;
      border: 1px solid #a40808;

      :hover {
        background: #8f8887;
      }
    }

    .form {
      padding-top: 20px;
    }

    h2 {
      color: #fff;
      text-align: left;
      margin-left: 40px;
    }

    label {
      padding-left: 35px;
      width: 60%;
    }

    input {
      float: right;
    }

    .btnAjouter {
      width: 50%;
      margin: 25px auto;
      height: 25px;
      border: 1px solid #a40808;

      :hover {
        background: #8f8887;
      }
    }
  }
`;

class FormAddF extends Component {
  state = {
    societe: "",
    nom: "",
    prenom: "",
    fonction: "",
    telephone: "",
    mobile: "",
    email: "",
    visible: true
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();

    this.props.addFournisseur(
      this.state.societe,
      this.state.nom,
      this.state.prenom,
      this.state.fonction,
      this.state.telephone,
      this.state.mobile,
      this.state.email
    );

    this.setState({
      societe: "",
      nom: "",
      prenom: "",
      fonction: "",
      telephone: "",
      mobile: "",
      email: "",
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <div className="overlay">
        <Wrapper>
          <h2>Ajouter un fournisseur dans la base</h2>
          <button className="btnFermer" onClick={this.props.cache}>
            X
          </button>
          <div className="form">
            <label>
              Société:{" "}
              <input
                type="text"
                name="societe"
                onChange={this.handleChange}
                value={this.state.societe}
              />
            </label>
            <label>
              Nom:{" "}
              <input
                type="text"
                name="nom"
                onChange={this.handleChange}
                value={this.state.nom}
              />
            </label>
            <label>
              Prenom:
              <input
                type="text"
                name="prenom"
                onChange={this.handleChange}
                value={this.state.prenom}
              />
            </label>
            <label>
              Fonction:
              <input
                type="text"
                name="fonction"
                onChange={this.handleChange}
                value={this.state.fonction}
              />
            </label>
            <label>
              Telephone:
              <input
                type="text"
                name="telephone"
                onChange={this.handleChange}
                value={this.state.telephone}
              />
            </label>
            <label>
              Mobile:
              <input
                type="text"
                name="mobile"
                onChange={this.handleChange}
                value={this.state.mobile}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </label>
            <button
              className="btnAjouter"
              type="submit"
              onClick={this.handleClick}
              name="societe"
            >
              Ajouter
            </button>
          </div>
        </Wrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFournisseur: (
      societe,
      nom,
      prenom,
      fonction,
      telephone,
      mobile,
      email
    ) => {
      dispatch({
        type: "ADD_FOURNISSEUR",
        id: Date.now() - 888888888888,
        societe,
        nom,
        prenom,
        fonction,
        telephone,
        mobile,
        email
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FormAddF);
