import React, { Component } from "react";
import styled from "styled-components";

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
    width: 86%;
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
  render() {
    return (
      <div>
        <Title>Web-log - Consulation Stock</Title>
        <Cadre>
          <form>
            <label>
              Référence :
              <input type="text" />
            </label>
            <label>
              Emplacement :
              <input type="text" />
            </label>
            <label>
              Date Recept :
              <input type="date" />
            </label>
            <Recherche type="submit">Rechercher</Recherche>
          </form>
        </Cadre>
      </div>
    );
  }
}

export default Stock;
