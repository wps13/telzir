import React from "react";

import { render, cleanup } from "@testing-library/react";
import Simulation from "./Simulation";

const renderElem = () => {
  const { getByTestId } = render(<Simulation />);
  return { getByTestId };
};

describe("Simulation", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderElem();
    const simulation = getByTestId("simulation");
    expect(simulation.children.length).toBeTruthy();
  });
});
