import React from "react";
import { render, cleanup } from "@testing-library/react";
import Form from "./Form";

const renderElem = () => {
  const { getByTestId, getByText } = render(<Form />);
  return {
    getByTestId,
    getByText
  };
};

describe("Form", () => {
  afterEach(cleanup);
  it("should render correctly", () => {
    const { getByTestId } = renderElem();
    const form = getByTestId("form");
    expect(form).toBeDefined();
  });
  it("should render the submit button correctly", () => {
    const { getByTestId } = renderElem();
    const button = getByTestId("form__button");
    expect(button).toBeDefined();
  });
});
