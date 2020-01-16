import React from "react";
import PropType from "prop-types";

import ResultTable from "./ResultTable/ResultTable";

const Results = ({
  originDDD,
  destinyDDD,
  callDuration,
  costWithPlan,
  costWithoutPlan,
  planValue
}) => {
  return (
    <div>
      <p>Esse é o custo para realizar a ligação:</p>
      <ResultTable
        originDDD={originDDD}
        destinyDDD={destinyDDD}
        callDuration={callDuration}
        costWithPlan={costWithPlan}
        costWithoutPlan={costWithoutPlan}
        planValue={planValue}
      />
      <button>Simular novamente</button>
    </div>
  );
};

export default Results;

ResultTable.propTypes = {
  originDDD: PropType.number.isRequired,
  destinyDDD: PropType.number.isRequired,
  callDuration: PropType.number.isRequired,
  costWithPlan: PropType.string.isRequired,
  costWithoutPlan: PropType.string.isRequired,
  planValue: PropType.number.isRequired
};
