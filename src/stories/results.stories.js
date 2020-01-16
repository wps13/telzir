import React from "react";
import Results from "pages/Home/Results/Results";

export default {
  title: "Results",
  component: Results
};

export const resultsSection = () => (
  <Results
    originDDD={11}
    destinyDDD={16}
    callDuration={20}
    costWithPlan="R$ 0"
    costWithoutPlan="R$ 20"
    planValue={30}
  />
);
