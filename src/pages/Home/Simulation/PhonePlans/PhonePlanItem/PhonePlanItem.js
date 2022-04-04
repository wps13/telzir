import React from "react"
import PropTypes from "prop-types"

import "./PhonePlanItem.scss"

const PhonePlanItem = ({ labelText, value, nameText, change, checked }) => {
  return (
    <div>
      <input
        type="radio"
        name={nameText}
        value={value}
        onChange={(e) => change(e.currentTarget.value)}
        data-testid="plan_item__input"
        checked={checked}
      />
      <label className="plan_item__label" data-testid="plan_item__label">
        {labelText}
      </label>
    </div>
  )
}

export default PhonePlanItem

PhonePlanItem.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  nameText: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}
