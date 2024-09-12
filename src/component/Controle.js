import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
   {
    margin-top: 20px;
    height: 390px;
    padding: 20px 0;
    border: 1px solid #a40808;
    position: relative;

    form {
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    label {
      color: #fff;
      margin: 5px;
      width: 30%;
      input {
        float: right;
        background: #827b7a;
      }
    }

    .divTableBody input {
      background: #eee7db;
    }

    .btnRecept {
      height: 35px;
      float: right;
      margin-right: 60px;
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
    margin-left: 50px;
    margin-top: 20px;
  }
`;

class Controle extends Component {
  state = {
    nCde: this.props.commande.nCde,
    emplacement: "",
    activeModif: false,
    count: 0
  };

  handleRecept = event => {
    event.preventDefault();

    this.props.deleteCdeA(this.state.nCde);
    this.props.history.push("/reception");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    this.setState({
      activeModif: !this.state.activeModif
    });
  };

  componentDidMount = () => {
    var init = 0;
    this.props.commande.reference.map(element => {
      return (init = init + element.qte);
    });

    this.setState({
      count: init
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Contrôle Réception - Commande {this.props.commande.nCde}</Title>
        <div>
          <form>
            <label>
              Fournisseur: <input value={this.props.commande.fournisseur} />
            </label>
            <label>
              Date Cde: <input value={this.props.commande.dateCde} />
            </label>
            <label>
              Date Liv: <input value={this.props.commande.dateLiv} />
            </label>
            <label>
              Observation: <input value={this.props.commande.observation} />
            </label>
          </form>
          <div className="divTable redTable">
            <div className="divTableHeading">
              <div className="divTableRow">
                <div className="divTableHead">Action</div>
                <div className="divTableHead">Reference</div>
                <div className="divTableHead">Dénomination</div>
                <div className="divTableHead">Qté</div>
                <div className="divTableHead">Unité</div>
              </div>
            </div>
            {this.props.commande.reference.map(ligne => {
              return (
                <div className="divTableBody" key={ligne.id}>
                  <div className="divTableRow">
                    <div className="divTableCell">
                      <button
                        className="btnControle"
                        style={{
                          display: ligne.qte > 0 ? "block" : "none"
                        }}
                      >
                        <Link
                          to={
                            "/controle/" +
                            this.props.commande.nCde +
                            "/" +
                            ligne.id
                          }
                        >
                          Controle
                        </Link>
                      </button>
                    </div>
                    <div className="divTableCell">
                      <input value={ligne.ref} />
                    </div>
                    <div className="divTableCell">
                      <input value={ligne.denomination} />
                    </div>
                    <div className="divTableCell">
                      <input value={ligne.qte} />
                    </div>
                    <div className="divTableCell">
                      <input value={ligne.unité} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={this.handleRecept}
            style={{ display: this.state.count === 0 ? "block" : "none" }}
            className="btnRecept"
          >
            Recep OK
          </button>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.commande;
  return {
    cmd: state.cdeA,
    commande: state.cdeA.find(post => post.nCde == id),
    stock: state.stock
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCdeA: nCde => {
      dispatch({ type: "DELETE_CDEA", nCde: nCde });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controle);
