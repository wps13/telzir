import React from "react";
import PropTypes from "prop-types";

const PhonePlanItem = ({ labelText, value, nameText, change }) => {
  return (
    <>
      <input
        type="radio"
        name={nameText}
        value={value}
        onChange={e => change(e.currentTarget.value)}
        data-testid="plan_item__input"
      />
      <label data-testid="plan_item__label">{labelText}</label>
    </>
  );
};

export default PhonePlanItem;

PhonePlanItem.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  nameText: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired
};
