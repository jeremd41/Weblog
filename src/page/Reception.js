import React, { Component } from "react";
import styled from "styled-components";

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

    form {
      margin: 15px;
    }

    form label {
      margin: 10px;
    }

    form select {
      width: 130px;
      margin: 5px;
      border: none;
    }

    form input {
      width: 130px;
      margin: 5px;
      border: none;
    }
  }
`;

const auj = new Date();

class Reception extends Component {
  render() {
    return (
      <div>
        <Title>Web-log - Contrôle Réception</Title>
        <Cadre>
          <form>
            <label>
              Date Commande <input type="text" readonly value="jj/ mm/aaaa" />
            </label>
            <label>
              Date Livraison <input type="text" readonly value="jj/ mm/aaaa" />
            </label>
            <label>
              Date réception
              <input
                type="text"
                readonly
                value={
                  auj.getDate() +
                  "/" +
                  (auj.getMonth() + 1) +
                  "/" +
                  auj.getFullYear()
                }
              />
            </label>
            <label>
              N°CDE
              <select name="ncde">
                <option value="">Taper votre n°cde</option>
              </select>
            </label>
            <label>
              Emplacement
              <select name="emplacement">
                <option value="" />
              </select>
            </label>
            <label>
              Fournisseur <input type="text" readonly value="Fournisseur" />
            </label>
            <label>
              Référence
              <input type="text" readonly value="ref" />
            </label>
            <label>
              Dénomination
              <input type="text" readonly value="Dénomination" />
            </label>
            <label>
              Quantité
              <input type="number" readonly value="0" />
              <button>Modifier</button>
            </label>
            <label>
              Unité
              <input type="text" readonly value="Pal" />
              <button>Modifier</button>
            </label>

            <input type="submit" value="Valider" />
          </form>
        </Cadre>
      </div>
    );
  }
}

export default Reception;
