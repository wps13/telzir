import React from "react";
import { render, cleanup } from "@testing-library/react";

import FormItem from "./FormItem";

const renderElem = () => {
  const { getByTestId } = render(
    <FormItem labelText="Email" type="email" change={console.log} />
  );
  return { getByTestId };
};

describe("FormItem", () => {
  afterEach(cleanup);
  it("should render correctly the label", () => {
    const { getByTestId } = renderElem();
    const label = getByTestId("form_item__label");
    expect(label).toBeDefined();
    expect(label.innerHTML).toBe("Email");
  });
  it("should render the input correctly", () => {
    const { getByTestId } = renderElem();
    const input = getByTestId("form_item__input");
    expect(input).toBeDefined();
  });
});
