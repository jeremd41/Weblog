import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
  }
`;

const Recherche = styled.button`
   {
    border: none;
    width: 100px;
    height: 23px;
    margin-top: 8px;

    :hover {
      background: #a40808;
    }
  }
`;

const Cadre = styled.div`
   {
    width: 90%;
    height: 50px;
    background: #8f8887;
    border: 1px solid #a40808;
    margin: 25px 50px;

    form {
      display: flex;
      justify-content: space-evenly;
      margin-top: 2px;
    }

    form label {
      margin: 5px;
    }

    form label input {
      margin: 3px;
    }
  }
`;

class Stock extends Component {
  state = {
    ref: "",
    emplacement: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const filtre = this.props.stock.filter(item => {
      return (
        item.ref == this.state.ref ||
        item.emplacement === this.state.emplacement
      );
    });

    const search = filtre.map(item => {
      return (
        <div className="divTableBody" key={item.id}>
          <div className="divTableRow">
            <div className="divTableCell">{item.ref}</div>
            <div className="divTableCell">{item.denomination}</div>
            <div className="divTableCell">{item.qte}</div>
            <div className="divTableCell">{item.unite}</div>
            <div className="divTableCell">{item.emplacement}</div>
          </div>
        </div>
      );
    });

    const noSearch = this.props.stock.map(item => {
      return (
        <div className="divTableBody" key={item.id}>
          <div className="divTableRow">
            <div className="divTableCell">{item.ref}</div>
            <div className="divTableCell">{item.denomination}</div>
            <div className="divTableCell">{item.qte}</div>
            <div className="divTableCell">{item.unite}</div>
            <div className="divTableCell">{item.emplacement}</div>
          </div>
        </div>
      );
    });

    let result;

    if (this.state.emplacement.length > 0 || this.state.ref.length > 0) {
      result = search;
    } else {
      result = noSearch;
    }
    return (
      <div>
        <Title>Web-log - Consultation Stock</Title>
        <Cadre>
          <form>
            <label>
              Référence :
              <input
                name="ref"
                type="text"
                onChange={this.handleChange}
                value={this.state.ref}
              />
            </label>
            <label>
              Emplacement :
              <input
                name="emplacement"
                type="text"
                onChange={this.handleChange}
                value={this.state.emplacement}
              />
            </label>
          </form>
        </Cadre>
        <div className="divTable redTable">
          <div className="divTableHeading">
            <div className="divTableRow">
              <div className="divTableHead">Reference</div>
              <div className="divTableHead">Dénomination</div>
              <div className="divTableHead">Qté</div>
              <div className="divTableHead">Unité</div>
              <div className="divTableHead">Emplacement</div>
            </div>
          </div>
          {result}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

export default connect(mapStateToProps)(Stock);
