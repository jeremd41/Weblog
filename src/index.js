import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers/rootReducer";

import Layout from "./component/Layout";

import App from "./page/App";
import cdeClient from "./page/cdeClient";
import cdeAppro from "./page/cdeAppro";
import Reception from "./page/Reception";
import Stock from "./page/Stock";
import Preparation from "./page/Preparation";
import Expedition from "./page/Expedition";
import Client from "./page/Client";
import Fournisseur from "./page/Fournisseur";
import TempCdeA from "./component/TempCdeA";

const store = createStore(rootReducer);

function Index() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Route exact path="/" component={App} />
          <Route path="/cdeclient" component={cdeClient} />
          <Route exact path="/cdeappro" component={cdeAppro} />
          <Route path="/stock" component={Stock} />
          <Route path="/preparation" component={Preparation} />
          <Route path="/reception" component={Reception} />
          <Route path="/expedition" component={Expedition} />
          <Route path="/client" component={Client} />
          <Route path="/Fournisseur" component={Fournisseur} />
          <Route path="/cdeappro/:cde_nCde" component={TempCdeA} />
        </div>
      </Layout>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  rootElement
);
