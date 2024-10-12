import React from "react"
import { render } from "@testing-library/react"
import ProductCard from "../ProductCard"
import { fallbackProduct } from "@/constants"

describe("ProductCard Component", () => {
  test("renders correctly", () => {
    render(
      <ProductCard
        product={fallbackProduct}
        disableBtn={false}
        handleAddCart={() => {}}
      ></ProductCard>
    )
  })
})
