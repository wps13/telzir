import React from "react";
import PropTypes from "prop-types";

import "./DDDS.scss";

import InputNumber from "../InputNumber/InputNumber";

const DDDS = ({ setDestiny, setOrigin }) => {
  return (
    <div className="simulation__ddds" data-testid="ddds">
      <InputNumber label="DDD de Origem" change={setOrigin} />
      <InputNumber label="DDD de Destino" change={setDestiny} />
    </div>
  );
};

export default DDDS;

DDDS.propTypes = {
  setDestiny: PropTypes.func.isRequired,
  setOrigin: PropTypes.func.isRequired
};
