import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
   {
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
  }
`;

const Backpages = styled.h4`
  .back {
    color: #fff;
    margin-left: 50px;
    margin-top: 20px;
  }

  .back:hover {
    text-decoration: underline;
  }
`;

class Page404 extends Component {
  render() {
    return (
      <div>
        <Title>Erreur 404 -- Cette page existe pas ...</Title>
        <Backpages>
          <Link to="/" className="back">
            {"< Retour à l'index de l'application "}
          </Link>
        </Backpages>
      </div>
    );
  }
}

export default Page404;
