import React from "react";

import { render, cleanup } from "@testing-library/react";

import InputNumber from "./InputNumber";

const renderElem = () => {
  const { getByTestId, container } = render(
    <InputNumber change={console.log} label="Email" />
  );
  return { getByTestId, container };
};

describe("InputNumber", () => {
  afterEach(cleanup);
  it("render children correctly", () => {
    const { getByTestId } = renderElem();
    expect(getByTestId("input_number").children.length).toBe(2);
  });
  it("should render correctly the label", () => {
    const { getByTestId } = renderElem();
    const label = getByTestId("input_number__label");
    expect(label).toBeDefined();
    expect(label.innerHTML).toBe("Email");
  });
  it("should render the input correctly", () => {
    const { getByTestId } = renderElem();
    const input = getByTestId("input_number__input");
    expect(input).toBeDefined();
  });
});
