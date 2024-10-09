import React from "react"
import { render } from "@testing-library/react"
import DailyInteger from "../DailyInteger"

describe("DailyInteger Component", () => {
  test("renders children correctly", () => {
    render(
      <DailyInteger handleAdd={() => {}} handleRemove={() => {}}>
        5
      </DailyInteger>
    )
  })
})
