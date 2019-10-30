import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const Wrapper = styled.div`
   {
    h3 {
      color: #fff;
      text-align: center;
    }
  }
`;

class Graphique extends Component {
  state = {
    options: {
      /* Couleur des barres graphiques*/
      colors: ["#F44336"],
      chart: {
        /* Type de graphique */
        id: "basic-bar"
      },
      xaxis: {
        categories: ["J-3", "J-2", "J-3", "J", "J+1", "J+2", "J+3"]
      }
    },
    series: [
      {
        name: "Commandes",
        data: [30, 40, 45, 50, 49, 60, 70]
      }
    ]
  };

  render() {
    return (
      <Wrapper className="app">
        <div className="row">
          <div className="mixed-chart">
            <h3>{this.props.nom}</h3>
            <Chart
              options={this.state.options}
              series={this.props.series}
              type="bar"
              width="400"
              style={{ margin: 25 }}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Graphique;
