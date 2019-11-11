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

const Fiche = styled.div`
   {
    display: flex;
    flex-direction: column;

    label {
      margin: 5px 50px;
      width: 25%;
    }

    input {
      background: #827b7a;
      float: right;
    }
  }
`;

class TempClient extends Component {
  state = {
    societe: this.props.client.societe,
    nom: this.props.client.nom,
    prenom: this.props.client.prenom,
    fonction: this.props.client.fonction,
    telephone: this.props.client.telephone,
    mobile: this.props.client.mobile,
    email: this.props.client.email
  };

  render() {
    const cli = this.props.client ? (
      <Fiche>
        <label>
          Société: <input type="text" value={this.state.societe} />
        </label>
        <label>
          Nom: <input type="text" value={this.state.nom} />
        </label>
        <label>
          Prenom: <input type="text" value={this.state.prenom} />
        </label>
        <label>
          Fonction:
          <input type="text" value={this.state.fonction} />
        </label>
        <label>
          Téléphone:
          <input type="text" value={this.state.telephone} />
        </label>
        <label>
          Mobile:
          <input type="text" value={this.state.mobile} />
        </label>
        <label>
          E-mail:
          <input type="text" value={this.state.email} />
        </label>
      </Fiche>
    ) : (
      <span>Ce client existe pas ...</span>
    );
    return (
      <Wrapper>
        <div className="barreTache">
          <button className="btnModal">Créer client</button>
        </div>
        <Link to="/client" className="backPages">
          {"<  Retour"}
        </Link>
        <Title>Contact Client N°{this.props.client.id}</Title>
        {cli}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.client_id;
  return {
    client: state.client.find(post => post.id == id)
  };
};

export default connect(mapStateToProps)(TempClient);
