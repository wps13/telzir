import React from "react"
import PhonePlanItem from "./PhonePlanItem/PhonePlanItem"
import PropTypes from "prop-types"

import "./PhonePlans.scss"

const plans = [
  { labelText: "FaleMais 30", value: "30", nameText: "faleMais30" },
  { labelText: "FaleMais 60", value: "60", nameText: "faleMais60" },
  { labelText: "FaleMais 120", value: "120", nameText: "faleMais120" },
]

const PhonePlans = ({ setPlan, selected }) => {
  const handlePlanChanged = (value) => setPlan(value, "plan")

  return (
    <div className="home__phone_plans" data-testid="plans">
      <h4>Planos: </h4>
      {plans.map((plan) => (
        <PhonePlanItem
          {...plan}
          change={handlePlanChanged}
          key={plan.nameText}
          checked={selected === plan.value}
        />
      ))}
    </div>
  )
}

export default PhonePlans

PhonePlans.propTypes = {
  setPlan: PropTypes.func.isRequired,
  selectec: PropTypes.string.isRequired,
}
