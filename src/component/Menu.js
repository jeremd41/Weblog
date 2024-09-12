import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
   {
    width: 180px;
    height: 100%;
    position: absolute;
    top: 0;

    p {
      color: #fff;
      margin-left: 5px;
    }
  }
`;

const Nav = styled.ul`
   {
    list-style-type: none;
    padding: 0;
    margin-left: 5px;
    display: flex;
    width: 180px;
    flex-direction: column;
    background: #a40808;

    li:hover {
      background: #b65d56;
    }

    li a {
      color: #fff;
      display: block;
      padding: 10px;
    }
  }
`;

const Title = styled.h2`
   {
    color: #111;
    width: 160px;
    background: #fff;
    text-align: center;
    padding: 10px;
    margin-left: 5px;
    text-decoration: none;
  }
`;

const Search = styled.input`
   {
    padding: 10px;
    width: 180px;
    height: 35px;
    border: none;
    margin-bottom: 10px;
    margin-left: 5px;
  }
`;

class Menu extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <Link to="/">Web-log</Link>
        </Title>
        <Search type="search" placeholder="Recherche cde...       🔎 " />
        <Nav>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/cdeappro">CdE Appro</Link>
          </li>
          <li>
            <Link to="/reception">Reception</Link>
          </li>
          <li>
            <Link to="/stock">Stock</Link>
          </li>
          <li>
            <Link to="/cdeclient">CdE Client</Link>
          </li>
          <li>
            <Link to="/preparation">Preparation CdE</Link>
          </li>
          <li>
            <Link to="/expedition">Expedition</Link>
          </li>
          <li>
            <Link to="/fournisseur">Fournisseur</Link>
          </li>
          <li>
            <Link to="/client">Client</Link>
          </li>
        </Nav>
        <p>Copyright Webizy</p>
      </Wrapper>
    );
  }
}

export default Menu;
