"use client"
import React from "react"
import Grid from "@mui/material/Grid2"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { useAppSelector } from "../hooks"
import {
  selectTotalItemsPurchased,
  selectTotalPurchaseAmount,
  selectTotalDiscountAmount,
} from "../orders/orderSlice"
import { Container } from "@mui/material"

const AdminDashboard = () => {
  const totalItemsPurchased = useAppSelector((state) =>
    selectTotalItemsPurchased(state)
  )
  const totalPurchaseAmount = useAppSelector((state) =>
    selectTotalPurchaseAmount(state)
  )
  const totalDiscountAmount = useAppSelector((state) =>
    selectTotalDiscountAmount(state)
  )

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="textSecondary">
                Count of Items Purchased
              </Typography>
              <Typography variant="h4">{totalItemsPurchased}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="textSecondary">
                Total Purchase Amount
              </Typography>
              <Typography variant="h4">
                ₹{totalPurchaseAmount.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="textSecondary">
                Total Discount Amount
              </Typography>
              <Typography variant="h4">
                ₹{totalDiscountAmount.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdminDashboard
