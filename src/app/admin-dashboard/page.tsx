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
  selectDiscountCodes,
} from "../orders/orderSlice"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import { TypographyHeading } from "@/components/StyledComponents"

const AdminDashboard = () => {
  const totalItemsPurchased = useAppSelector(selectTotalItemsPurchased)
  const totalPurchaseAmount = useAppSelector(selectTotalPurchaseAmount)
  const totalDiscountAmount = useAppSelector(selectTotalDiscountAmount)
  const discountCodes = useAppSelector(selectDiscountCodes)

  return (
    <Container>
      <TypographyHeading variant={"h4"} gutterBottom mt={1}>
        Admin Dashboard
      </TypographyHeading>
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
                {totalPurchaseAmount.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
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
                {totalDiscountAmount.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h5" gutterBottom color="textSecondary">
            List of Used Discount Codes
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} spacing={2}>
            {discountCodes.map((discountCode, i) => (
              <Chip
                key={i}
                label={discountCode}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdminDashboard
