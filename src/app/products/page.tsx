"use client"
import * as React from "react"
import Container from "@mui/material/Container"
import { useAppDispatch, useAppSelector } from "../hooks"
import { selectProducts } from "./productsSlice"
import Grid from "@mui/material/Grid2"
import ProductCard from "@/components/ProductCard"
import { addProduct, selectCartItems } from "../cart/cartSlice"

function Products() {
  const products = useAppSelector(selectProducts)
  const cartItems = useAppSelector(selectCartItems)
  const dispatch = useAppDispatch()

  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid size={{ xs: 12, md: 4 }} key={product.id}>
            <ProductCard
              product={product}
              handleAddCart={() => {
                dispatch(
                  addProduct({
                    productId: product.id,
                    quantity: 1,
                    price: product.price,
                  })
                )
              }}
              disableBtn={cartItems.some(
                (item) => item.productId === product.id
              )}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default Products
