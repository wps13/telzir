import React, { useState } from "react"

import PropTypes from "prop-types"

import "./Simulation.scss"

import InputNumber from "./InputNumber/InputNumber"
import PhonePlans from "./PhonePlans/PhonePlans"
import DDDS from "./DDDS/DDDS"

const Simulation = ({ getResults }) => {
  let [simulationData, setSimulationData] = useState({
    origin: 11,
    plan: 0,
    destiny: 11,
    duration: 0,
  })

  const submitCalc = (e) => {
    e.preventDefault()
    getResults(simulationData)
  }

  const handleDataChanged = (value, key) => {
    setSimulationData((previousData) => ({ ...previousData, [key]: value }))
  }

  return (
    <div className="simulation" data-testid="simulation">
      <p>
        Calcule aqui quanto custaria uma ligação, considerando o tempo, em
        minutos, e os DDD de origem e destino
      </p>
      <form onSubmit={submitCalc} className="form_simulation">
        <DDDS setData={handleDataChanged} />
        <PhonePlans
          setPlan={handleDataChanged}
          selected={simulationData?.plan}
        />
        <InputNumber
          label="Tempo da Ligação (em minutos)"
          change={handleDataChanged}
        />
        <button type="submit" className="form_simulation__submit_button">
          Calcular
        </button>
      </form>
    </div>
  )
}

export default Simulation

Simulation.propTypes = {
  getResults: PropTypes.func,
}
