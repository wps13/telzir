import React from "react";

import PropType from "prop-types";

import "./SelectDDD.scss";

const SelectPlan = ({ change, labelText }) => {
  return (
    <>
      <label>{labelText}</label>
      <select onChange={e => change(e.target.value)}>
        <option value={11}>11 </option>
        <option value={16}>16</option>
        <option value={17}>17</option>
        <option value={18}>18</option>
      </select>
    </>
  );
};

export default SelectPlan;

SelectPlan.propTypes = {
  labelText: PropType.string.isRequired,
  change: PropType.func.isRequired
};
