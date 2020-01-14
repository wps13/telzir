import React from "react";
import { Switch, HashRouter, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Plans from "pages/Plans/Plans";
import Header from "components/Header/Header";

const Routes = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path="/planos" component={Plans} />
      <Route path="/contato" component={Contact} />
      <Route path="/" exact component={Home} />
      <Route render={() => <h1>Nada a ver aqui</h1>} />
    </Switch>
  </HashRouter>
);

export default Routes;
