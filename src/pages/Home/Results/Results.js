import React from "react"
import PropType from "prop-types"

import ResultTable from "./ResultTable/ResultTable"

import Button from "../../../components/Button/Button"

const Results = ({
  originDDD,
  destinyDDD,
  callDuration,
  costWithPlan,
  costWithoutPlan,
  planValue,
  onClickedSimulateAgain,
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
      <Button title="Simular novamente" onClick={onClickedSimulateAgain} />
    </div>
  )
}

export default Results

ResultTable.propTypes = {
  originDDD: PropType.number.isRequired,
  destinyDDD: PropType.number.isRequired,
  callDuration: PropType.number.isRequired,
  costWithPlan: PropType.string.isRequired,
  costWithoutPlan: PropType.string.isRequired,
  planValue: PropType.number.isRequired,
  onClickedSimulateAgain: PropType.func,
}
