import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
// import Link from "@mui/material/Link"
// import NextLink from "next/link"
import products from "@/data/products.json"
export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.map((prod, i) => (
          <Box key={i} sx={{ display: "flex", columnGap: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {prod.productName}
            </Typography>
            <Typography variant="h5" component="h1">
              {prod.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              })}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
    // <Link href="/about" color="secondary" component={NextLink}>
    //   Go to the about page
    // </Link>
  )
}
