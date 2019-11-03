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
  render() {
    console.log(this.props);
    const cli = this.props.client ? (
      <Fiche>
        <label>
          Société: <input type="text" value={this.props.client.societe} />
        </label>
        <label>
          Nom: <input type="text" value={this.props.client.nom} />
        </label>
        <label>
          Prenom: <input type="text" value={this.props.client.prenom} />
        </label>
        <label>
          Fonction:
          <input type="text" value={this.props.client.fonction} />
        </label>
        <label>
          Téléphone:
          <input type="text" value={this.props.client.telephone} />
        </label>
        <label>
          Mobile:
          <input type="text" value={this.props.client.mobile} />
        </label>
        <label>
          E-mail:
          <input type="text" value={this.props.client.email} />
        </label>
      </Fiche>
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
