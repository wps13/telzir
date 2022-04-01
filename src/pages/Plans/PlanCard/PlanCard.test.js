import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from "@testing-library/react";

import PlanCard from "./PlanCard";

const renderComponent = () => {
  const { getByText, getByTestId } = render(
    <PlanCard planValue={30} clickPlan={console.log} />, {wrapper: MemoryRouter}
  );
  return { getByTestId, getByText };
};
describe("PlanCard", () => {
  afterEach(cleanup);
  it("render title correctly", () => {
    const { getByText } = renderComponent();
    const titleElement = getByText(/FaleMais 30/i);
    expect(titleElement).toBeInTheDocument();
  });
  it("render the simulation button correctly", () => {
    const { getByTestId } = renderComponent();
    const simulationButton = getByTestId("plan_card__simulation");

    expect(simulationButton).toBeDefined();
  });
  it("render the contract button with correct text", () => {
    const { getByTestId } = renderComponent();
    const contractButton = getByTestId("plan_card__contract");

    expect(contractButton).toBeDefined();
  });
});
