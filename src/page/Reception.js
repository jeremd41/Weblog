import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
  }
`;

const Cadre = styled.div`
   {
    width: 86%;
    height: 415px;
    background: #8f8887;
    border: 1px solid #a40808;
    margin: 25px 50px;

    label {
      margin: 10px;
    }

    select {
      width: 150px;
      margin: 5px;
      border: none;
    }
  }
`;

class Reception extends Component {
  state = {
    commande: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Title>Web-log - Contrôle Réception</Title>
        <Cadre>
          <label>
            N°Commande:
            <select
              name="commande"
              required
              onChange={this.handleChange}
              value={this.state.commande}
            >
              <option>Saisir ou Sélectionner</option>
              {this.props.commande.map(item => {
                return <option>{item.nCde}</option>;
              })}
            </select>
            <button>
              <Link to={"/controle/" + this.state.commande}>Valider</Link>
            </button>
          </label>
        </Cadre>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    commande: state.cdeA
  };
};

export default connect(mapStateToProps)(Reception);
