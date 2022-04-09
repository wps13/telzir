import React from "react"
import { render, cleanup } from "@testing-library/react"

import DDDS from "./DDDS"

const renderElem = () => {
  const { getByTestId } = render(<DDDS setData={jest.fn} />)
  return { getByTestId }
}

describe("DDDS", () => {
  afterEach(cleanup)
  it("should render children correctly", () => {
    const { getByTestId } = renderElem()
    const ddds = getByTestId("ddds")
    expect(ddds.children.length).toBeTruthy()
  })
})
