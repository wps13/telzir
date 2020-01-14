import React from "react";
import PropType from "prop-types";

const FormItem = ({ type, labelText, change }) => {
  return (
    <>
      <label data-testid="form_item__label">{labelText}</label>
      <input type={type} onChange={change} data-testid="form_item__input" />
    </>
  );
};

export default FormItem;

FormItem.propTypes = {
  type: PropType.string.isRequired,
  labelText: PropType.string.isRequired,
  change: PropType.func.isRequired
};
