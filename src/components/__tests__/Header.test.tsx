import React from "react"
import { render } from "@testing-library/react"
import Header from "../Header"
import { useRouter } from "next/navigation" // Ensure you're using the correct import
import { useDispatch, useSelector } from "react-redux"

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe("Header Component", () => {
  test("renders correctly", () => {
    const mockDispatch = jest.fn()
    const mockUseSelector = jest.fn()

    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockImplementation(mockUseSelector);
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    render(<Header></Header>)
  })
})
