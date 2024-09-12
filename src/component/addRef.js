import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
   {
    padding: 25px;
    width: 50%;
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
    border: 1px solid #a40808;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    label {
      margin: 5px;
      width: 70%;
    }

    input {
      float: right;
    }

    select {
      float: right;
      width: 35%;
      border: none;
      margin-right: 45px;
    }

    .btnMes {
      height: 25px;
      margin-top: 25px;
      border: 1px solid #8f8887;
      :hover {
        background: #827b7a;
      }
    }
  }
`;

const Title = styled.h2`
   {
    color: #fff;
  }
`;

class AddRef extends Component {
  state = {
    id: this.props.mes.id,
    ref: this.props.mes.ref,
    denomination: this.props.mes.denomination,
    qte: this.props.mes.qte,
    unite: this.props.mes.unité,
    emplacement: "",
    nCde: this.props.cde.nCde
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleStock = event => {
    event.preventDefault();

    this.props.addRecept(
      this.state.ref,
      this.state.denomination,
      this.state.qte,
      this.state.unite,
      this.state.emplacement
    );

    this.props.updateRecept(this.state.id, this.state.qte, this.state.nCde);

    this.props.history.push("/controle/" + this.state.nCde);
  };

  render() {
    return (
      <Wrapper>
        <Title>Mise en stock </Title>
        <form>
          <label>
            Ref :
            <input
              name="ref"
              type="text"
              value={this.state.ref}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Denomination :
            <input
              name="denomination"
              type="text"
              value={this.state.denomination}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Qte :
            <input
              name="qte"
              type="text"
              value={this.state.qte}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Unite :
            <input
              name="qte"
              type="text"
              value={this.state.unite}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Emplacement :
            <select
              name="emplacement"
              required
              onChange={this.handleChange}
              value={this.state.emplacement}
            >
              <option>Emplacement ></option>
              {this.props.emp.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </label>
        </form>
        <button onClick={this.handleStock} className="btnMes">
          Mise en stock
        </button>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.ref;
  let cmd = ownProps.match.params.commande;
  return {
    cde: state.cdeA.find(post => post.nCde == cmd),
    mes: state.cdeA
      .find(post => post.nCde == cmd)
      .reference.find(item => item.id == id),
    emp: state.emplacement
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRecept: (ref, denomination, qte, unite, emplacement) => {
      dispatch({
        type: "ADD_RECEPT",
        ref,
        denomination,
        qte,
        unite,
        emplacement
      });
    },
    updateRecept: (id, qte, nCde) => {
      dispatch({
        type: "UPDATE_RECEPT",
        id,
        qte,
        nCde
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRef);
