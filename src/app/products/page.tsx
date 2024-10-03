"use client"
import * as React from "react"
import Container from "@mui/material/Container"
import { useAppSelector } from "../hooks"
import { selectProducts } from "./productsSlice"
import Grid from "@mui/material/Grid2"
import ProductCard from "@/components/ProductCard"

function Home() {
  const products = useAppSelector(selectProducts)
  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid size={{ xs: 12, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default Home
