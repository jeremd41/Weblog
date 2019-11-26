import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import TempCdeC from "./component/TempCdeC";
import TempFournisseur from "./component/TempFournisseur";
import Page404 from "./page/404";
import TempClient from "./component/TempClient";
import Controle from "./component/Controle";
import addRef from "./component/addRef";

const store = createStore(rootReducer);

function Index() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/cdeclient" component={cdeClient} />
            <Route exact path="/cdeappro" component={cdeAppro} />
            <Route path="/stock" component={Stock} />
            <Route path="/preparation" component={Preparation} />
            <Route path="/reception" component={Reception} />
            <Route path="/expedition" component={Expedition} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/Fournisseur" component={Fournisseur} />
            <Route path="/cdeappro/:cde_nCde" component={TempCdeA} />
            <Route path="/cdeclient/:cde_nCde" component={TempCdeC} />
            <Route exact path="/controle/:commande" component={Controle} />
            <Route exact path="/controle/:commande/:ref" component={addRef} />
            <Route
              path="/fournisseur/:fournisseur_id"
              component={TempFournisseur}
            />
            <Route path="/client/:client_id" component={TempClient} />
            <Route exact component={Page404} />
          </Switch>
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
