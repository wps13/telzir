import React from "react";

import PlanCard from "./PlanCard/PlanCard";

import "./Plans.scss";

const Plans = () => {
  return (
    <div className="plans">
      <h1>Planos</h1>
      <div className="plans__cards">
        <PlanCard planValue={30} />
        <PlanCard planValue={60} />
        <PlanCard planValue={120} />
      </div>
    </div>
  );
};

export default Plans;
