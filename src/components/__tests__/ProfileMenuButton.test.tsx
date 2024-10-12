import React from "react"
import { render } from "@testing-library/react"
import ProfileMenuButton from "../ProfileMenuButton"

describe("ProfileMenuButton Component", () => {
  test("renders correctly", () => {
    render(<ProfileMenuButton handleLogOut={() => {}}></ProfileMenuButton>)
  })
})
