import React from "react";
import { Routes as RoutesSwitch, HashRouter, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Plans from "pages/Plans/Plans";
import Header from "components/Header/Header";

const Routes = () => (
  <HashRouter>
    <Header />
    <RoutesSwitch>
      <Route path="/planos" element={<Plans />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/" exact element={<Home />} />
      <Route render={() => <h1>Nada a ver aqui</h1>} />
    </RoutesSwitch>
  </HashRouter>
);

export default Routes;
