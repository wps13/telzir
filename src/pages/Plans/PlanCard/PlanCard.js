import React from "react";
import PropType from "prop-types";

import "./PlanCard.scss";

const PlanCard = ({ planValue, clickPlan }) => {
  return (
    <div className="plan_card" data-testid="plan_card">
      <h3 data-testid="plan_card__title">FaleMais {planValue}</h3>
      <p data-testid="plan_card__description">
        Esse plano dá direito a {planValue} minutos de ligações para qualquer
        DDD. Os minutos excedentes custarão 10% do valor cobrado normalmente.
      </p>
      <button data-testid="plan_card__simulation">Simular custo</button>
      <button
        type="button"
        value={planValue}
        onClick={clickPlan}
        data-testid="plan_card__contract"
      >
        Contratar
      </button>
    </div>
  );
};

export default PlanCard;

PlanCard.propTypes = {
  planValue: PropType.number.isRequired,
  clickPlan: PropType.func.isRequired
};
