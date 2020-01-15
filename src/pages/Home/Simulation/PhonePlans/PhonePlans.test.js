import React from "react";
import { render, cleanup } from "@testing-library/react";

import PhonePlans from "./PhonePlans";

const renderElem = () => {
  const { getByTestId } = render(<PhonePlans setPlan={console.log} />);
  return { getByTestId };
};

describe("PhonePlans", () => {
  afterEach(cleanup);
  it("should render all children", () => {
    const { getByTestId } = renderElem();
    const plans = getByTestId("plans");
    expect(plans.children.length).toBeTruthy();
  });
});
