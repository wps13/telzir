import React from "react"
import PropTypes from "prop-types"
import "./InputNumber.scss"

const InputNumber = ({ change, label }) => (
  <div data-testid="input_number">
    <label data-testid="input_number__label">{label}</label>
    <input
      type="number"
      onChange={(e) => {
        change(e.target.value, "duration")
      }}
      data-testid="input_number__input"
    />
  </div>
)

export default InputNumber

InputNumber.propTypes = {
  change: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}
