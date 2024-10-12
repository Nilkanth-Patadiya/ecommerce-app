"use client"
import Container from "@mui/material/Container"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import React from "react"
import { TypographyHeading } from "@/components/StyledComponents"
import { selectOrders } from "./orderSlice"
import { useAppSelector } from "../hooks"

const Orders = () => {
  const orders = useAppSelector(selectOrders)
  const sortedOrders = orders
    ? [...orders].sort((a, b) => b.timestamp - a.timestamp)
    : []

  return (
    <Container>
      <TypographyHeading variant={"h4"} gutterBottom mt={1}>
        Order History
      </TypographyHeading>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  {new Date(order.timestamp).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>
                  {order.totalPrice.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
