import React, { Component } from "react";
import Graphique from "../component/Graphique";
import styled from "styled-components";

const Wrapper = styled.div`
   {
    display: flex;
  }
`;

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
  }
`;

class Acceuil extends Component {
  state = {
    client: {
      series: [
        {
          name: "Commandes",
          data: [6, 15, 45, 50, 20, 66, 70]
        }
      ]
    },
    appro: {
      series: [
        {
          name: "Commandes",
          data: [10, 5, 45, 70, 3, 25, 33]
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <Title>Web-log - Dashboard</Title>
        <Wrapper>
          <Graphique series={this.state.appro.series} nom="Commande Appro" />
          <Graphique series={this.state.client.series} nom="Commande Client" />
        </Wrapper>
      </div>
    );
  }
}

export default Acceuil;
