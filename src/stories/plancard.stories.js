import React from "react";
import PlanCard from "pages/Plans/PlanCard/PlanCard";

export default {
  title: "Plan Card",
  component: PlanCard
};

export const planCard = () => (
  <PlanCard
    planValue={30}
    clickPlan={e => console.log("button value", e.target.value)}
  />
);
