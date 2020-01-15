import React from "react";
import PhonePlanItem from "./PhonePlanItem/PhonePlanItem";
import PropTypes from "prop-types";

import "./PhonePlans.scss";

const PhonePlans = ({ setPlan }) => {
  return (
    <div className="plans" data-testid="plans">
      <p>Planos: </p>
      <PhonePlanItem
        labelText="FaleMais 30"
        value="30"
        nameText="faleMais"
        change={setPlan}
      />
      <PhonePlanItem
        labelText="FaleMais 60"
        value="60"
        nameText="faleMais"
        change={setPlan}
      />
      <PhonePlanItem
        labelText="FaleMais 120"
        value="120"
        nameText="faleMais"
        change={setPlan}
      />
    </div>
  );
};

export default PhonePlans;

PhonePlans.propTypes = {
  setPlan: PropTypes.func.isRequired
};
