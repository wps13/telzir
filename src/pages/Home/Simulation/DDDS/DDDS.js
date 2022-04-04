import React from "react"
import PropTypes from "prop-types"

import "./DDDS.scss"

import SelectDDD from "./SelectDDD/SelectDDD"

const DDDS = ({ setData }) => {
  const handleOriginChanged = (value) => setData(value, "origin")

  const handleDestinyChanged = (value) => setData(value, "destiny")

  return (
    <div className="simulation__ddds" data-testid="ddds">
      <SelectDDD labelText="DDD de Origem" change={handleOriginChanged} />
      <SelectDDD labelText="DDD de Destino" change={handleDestinyChanged} />
    </div>
  )
}

export default DDDS

DDDS.propTypes = {
  setData: PropTypes.func.isRequired,
}
