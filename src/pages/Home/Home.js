import React, { useState } from "react"

import Simulation from "./Simulation/Simulation"
import Results from "./Results/Results"

import { returnResults } from "sistema/main"

import "./Home.scss"

const Home = () => {
  let [results, setResults] = useState([])

  const getResults = (simulationData) => {
    const finalResults = returnResults(simulationData)
    setResults(finalResults)
  }

  const handleClickedSimulateAgain = () => {
    setResults([])
  }

  return (
    <div className="home">
      <h1 className="home__title">Inicio</h1>
      <section>
        <h2 className="home__simulation-title">Simulação dos custos</h2>
        {results.length === 0 ? (
          <Simulation getResults={getResults} />
        ) : (
          <Results
            {...results}
            onClickedSimulateAgain={handleClickedSimulateAgain}
          />
        )}
      </section>
    </div>
  )
}

export default Home
