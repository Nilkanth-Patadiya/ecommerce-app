"use client"
import Container from "@mui/material/Container"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import React from "react"
import { TypographyHeading } from "@/components/StyledComponents"
import { useAppDispatch, useAppSelector } from "../hooks"
import { selectUsersByRole, updateDiscountFrequency } from "../login/usersSlice"
import Button from "@mui/material/Button"
import EditIcon from "@mui/icons-material/Edit"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
    },
  },
}

const Customers = () => {
  const values = Array.from({ length: 20 }, (_, i) => i + 1)
  const customers = useAppSelector((state) =>
    selectUsersByRole(state, "customer")
  )
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)
  const [activeCustomer, setActiveCustomer] = React.useState("")
  const [discountFrequency, setDiscountFrequency] = React.useState("")

  const handleClickOpen = (id: string, discountN: number) => {
    setOpen(true)
    setActiveCustomer(id)
    setDiscountFrequency(discountN.toString())
  }

  const handleClose = () => {
    setOpen(false)
    setActiveCustomer("")
    setDiscountFrequency("")
  }

  const handleChange = (event: SelectChangeEvent) => {
    setDiscountFrequency(event.target.value)
  }

  const handleConfirm = () => {
    dispatch(
      updateDiscountFrequency({
        id: activeCustomer,
        discountFrequency: parseInt(discountFrequency),
      })
    )
    handleClose()
  }
  return (
    <Container>
      <TypographyHeading variant={"h4"} gutterBottom mt={1}>
        Customers
      </TypographyHeading>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>Customer Email</TableCell>
              <TableCell align="center">Customer Discount Frequency</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell align="center">
                  {customer.discountFrequency}
                </TableCell>
                <TableCell align="center">
                  <Button
                    startIcon={<EditIcon color="primary" />}
                    sx={{ textTransform: "capitalize" }}
                    onClick={() =>
                      handleClickOpen(
                        customer.id,
                        customer.discountFrequency as number
                      )
                    }
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Customer Discount Frequency</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "1rem", mb: 1 }}>
            Every nth order from this customer receives a coupon code for a 10%
            discount, which can be applied to their cart.
          </DialogContentText>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={discountFrequency}
              onChange={handleChange}
              MenuProps={MenuProps}
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              {values.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Customers
