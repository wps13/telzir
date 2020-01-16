import React from "react";
import PropType from "prop-types";

const ResultsTableBody = ({
  originDDD,
  destinyDDD,
  callDuration,
  costWithPlan,
  costWithoutPlan
}) => (
  <tbody>
    <tr>
      <td>{originDDD}</td>
      <td>{destinyDDD}</td>
      <td>{callDuration}</td>
      <td>{costWithoutPlan}</td>
      <td>{costWithPlan}</td>
    </tr>
  </tbody>
);

export default ResultsTableBody;

ResultsTableBody.propTypes = {
  originDDD: PropType.number.isRequired,
  destinyDDD: PropType.number.isRequired,
  callDuration: PropType.number.isRequired,
  costWithPlan: PropType.string.isRequired,
  costWithoutPlan: PropType.string.isRequired
};
