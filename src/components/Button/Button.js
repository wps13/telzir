import React from "react"
import PropType from "prop-types"

import "./Button.scss"

const Button = ({ title, onClick, type, className, testID }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${className}`}
      data-testid={testID}>
      {title}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  className: "",
  onClick: () => {},
  testID: "",
}

export default Button

Button.propTypes = {
  type: PropType.string,
  className: PropType.string,
  onClick: PropType.func,
  title: PropType.string.isRequired,
  testID: PropType.string,
}
