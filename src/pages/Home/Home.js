import React, { useState } from "react";

import Simulation from "./Simulation/Simulation";
import Results from "./Results/Results";

import { returnResults } from "sistema/main";

import "./Home.scss";

const Home = () => {
  let [hasResults, setHasResults] = useState(false);

  let [results, setResults] = useState([]);

  const getResults = ({ origin, destiny, duration, plan }) => {
    const finalResults = returnResults({ origin, destiny, duration, plan });
    setResults(finalResults);
    setHasResults(true);
  };
  return (
    <div className="home">
      <h1>Inicio</h1>
      <section>
        <h3>Simulação dos custos</h3>
        {hasResults ? (
          <Results setHasResults={setHasResults} {...results} />
        ) : (
          <Simulation getResults={getResults} />
        )}
      </section>
    </div>
  );
};

export default Home;
