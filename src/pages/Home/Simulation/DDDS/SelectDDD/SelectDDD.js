import React from "react"

import PropType from "prop-types"

import "./SelectDDD.scss"

const dddsValues = [11, 16, 17, 18]

const SelectPlan = ({ change, labelText }) => {
  return (
    <div className="home__select_ddd">
      <label>{labelText}</label>
      <select onChange={(e) => change(e.target.value)}>
        {dddsValues.map((ddd) => (
          <option value={ddd} key={ddd}>
            {ddd}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectPlan

SelectPlan.propTypes = {
  labelText: PropType.string.isRequired,
  change: PropType.func.isRequired,
}
