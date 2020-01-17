import React from "react";
import PropTypes from "prop-types";

import "./DDDS.scss";

import SelectDDD from "./SelectDDD/SelectDDD";

const DDDS = ({ setDestiny, setOrigin }) => {
  return (
    <div className="simulation__ddds" data-testid="ddds">
      <SelectDDD labelText="DDD de Origem" change={setOrigin} />
      <SelectDDD labelText="DDD de Destino" change={setDestiny} />
    </div>
  );
};

export default DDDS;

DDDS.propTypes = {
  setDestiny: PropTypes.func.isRequired,
  setOrigin: PropTypes.func.isRequired
};
