import React from "react";
import { render, cleanup } from "@testing-library/react";
import PhonePlanItem from "./PhonePlanItem";

const renderElem = () => {
  const { getByTestId } = render(
    <PhonePlanItem
      labelText="FaleMais 30"
      value="30"
      nameText="FaleMais"
      change={console.log}
    />
  );
  return { getByTestId };
};

describe("PhonePlanItem", () => {
  afterEach(cleanup);
  it("should render the input correctly", () => {
    const { getByTestId } = renderElem();
    expect(getByTestId("plan_item__input")).toBeDefined();
  });
  it("should render the label correctly", () => {
    const { getByTestId } = renderElem();
    expect(getByTestId("plan_item__label")).toBeDefined();
  });
});
