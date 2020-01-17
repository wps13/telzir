import React, { useState } from "react";

import PropTypes from "prop-types";

import "./Simulation.scss";

import InputNumber from "./InputNumber/InputNumber";
import PhonePlans from "./PhonePlans/PhonePlans";
import DDDS from "./DDDS/DDDS";

const Simulation = ({ getResults }) => {
  let [DDDOrigin, setDDDOrigin] = useState(11);
  let [plan, setPlan] = useState(0);
  let [DDDDestiny, setDDDDestiny] = useState(11);
  let [callDuration, setCallDuration] = useState(0);

  const submitCalc = e => {
    e.preventDefault();
    getResults({
      origin: DDDOrigin,
      destiny: DDDDestiny,
      duration: callDuration,
      plan
    });
  };
  return (
    <div className="simulation" data-testid="simulation">
      <p>
        Calcule aqui quanto custaria uma ligação, considerando o tempo, em
        minutos, e os DDD de origem e destino
      </p>
      <form onSubmit={submitCalc} className="form_simulation">
        <DDDS setOrigin={setDDDOrigin} setDestiny={setDDDDestiny} />
        <PhonePlans setPlan={setPlan} />
        <InputNumber
          label="Tempo da Ligação (em minutos)"
          change={setCallDuration}
        />
        <button type="submit" className="form_simulation__submit_button">
          Calcular
        </button>
      </form>
    </div>
  );
};

export default Simulation;

Simulation.propTypes = {
  getResults: PropTypes.func
};
