import React from "react"

import { render } from "@testing-library/react"
import Simulation from "./Simulation"

describe("Simulation", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<Simulation getResults={jest.fn} />)
    const simulation = getByTestId("simulation")
    expect(simulation.children.length).toBe(2)
  })
})
