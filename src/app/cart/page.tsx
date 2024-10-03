import React from "react"
import { Box, Typography } from "@mui/material"

const Cart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Typography variant="h2">Cart</Typography>
    </Box>
  )
}

export default Cart
