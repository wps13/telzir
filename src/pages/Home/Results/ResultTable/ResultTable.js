import React from "react";
import PropType from "prop-types";

import "./ResultTable.scss";
import ResultsTableHeader from "./ResultsTableHeader/ResultsTableHeader";
import ResultsTableBody from "./ResultsTableBody/ResultsTableBody";

const ResultTable = ({
  originDDD,
  destinyDDD,
  callDuration,
  costWithPlan,
  costWithoutPlan,
  planValue
}) => {
  return (
    <table>
      <ResultsTableHeader planValue={planValue} />
      <ResultsTableBody
        destinyDDD={destinyDDD}
        callDuration={callDuration}
        costWithPlan={costWithPlan}
        costWithoutPlan={costWithoutPlan}
        originDDD={originDDD}
      />
    </table>
  );
};

export default ResultTable;

ResultTable.propTypes = {
  originDDD: PropType.number.isRequired,
  destinyDDD: PropType.number.isRequired,
  callDuration: PropType.number.isRequired,
  costWithPlan: PropType.string.isRequired,
  costWithoutPlan: PropType.string.isRequired,
  planValue: PropType.number.isRequired
};
