"use client"
import React from "react"
import Image from "next/image"
import MuiLink from "@mui/material/Link"
import NextLink from "next/link"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import Close from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import {
  TypographyHeading,
  ImgImage,
  SpanDescr,
  RowBox,
} from "@/components/StyledComponents"
import DailyInteger from "@/components/DailyInteger"
import { useAppDispatch, useAppSelector } from "../hooks"
import { Product, selectProducts } from "../products/productsSlice"
import {
  addProduct,
  clearCart,
  removeProduct,
  selectCart,
  selectCartItems,
  selectCartTotalPrice,
} from "./cartSlice"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { addOrder, selectOrdersByUser } from "../orders/orderSlice"
import { selectLoggedInUser } from "../login/loggedInUserSlice"
import { selectUserDiscountFrequency } from "../login/usersSlice"
import Chip from "@mui/material/Chip"

const Cart = () => {
  const [isOrderPlaced, setIsOrderPlaced] = React.useState(false)
  const [input, setInput] = React.useState("")
  const orderNumber = React.useRef(
    `ON${Math.floor(1000 + Math.random() * 9000)}`
  )
  const [errorMessage, setErrorMessage] = React.useState("")
  const [availableCode, setAvailableCode] = React.useState("")
  const [appliedCode, setAppliedCode] = React.useState("")
  const products = useAppSelector(selectProducts)
  const cart = useAppSelector(selectCart)
  const cartItems = useAppSelector(selectCartItems)
  const cartTotalPrice = useAppSelector(selectCartTotalPrice)
  const userId = useAppSelector(selectLoggedInUser)
  const orderCount =
    useAppSelector((state) => selectOrdersByUser(state, userId))?.length + 1
  const userDiscountFrequency = useAppSelector((state) =>
    selectUserDiscountFrequency(state, userId)
  )
  const shippingCharge = 0
  const discountAmount = appliedCode ? cartTotalPrice * 0.1 : 0
  const finalAmount = cartTotalPrice - discountAmount - shippingCharge
  const dispatch = useAppDispatch()

  const fallbackProduct: Product = {
    id: 0,
    name: "Product1",
    category: "category1",
    price: 0,
    description: "No description available",
    stock: 0,
    imageURL: "default-image-url",
  }
  // Function to get product details by ID
  function getProductById(productId: number): Product {
    return (
      products.find((product) => product.id === productId) || fallbackProduct
    )
  }

  function handleApplyCode() {
    if (availableCode === input) {
      setAppliedCode(input)
      setAvailableCode("")
      setErrorMessage("")
    } else setErrorMessage("Invalid coupon code, please check.")
  }

  function handleDeleteCode() {
    setAvailableCode(appliedCode)
    setAppliedCode("")
    setInput("")
  }

  function handlePlaceOrder() {
    dispatch(
      addOrder({
        id: orderNumber.current,
        userId,
        cart,
        totalPrice: finalAmount,
        discountAmount,
        discountCode: appliedCode,
        timestamp: new Date().getTime(),
      })
    )
    dispatch(clearCart())
    setIsOrderPlaced(true)
  }

  // Generate coupon code if criteria meets
  React.useEffect(() => {
    if (userDiscountFrequency && orderCount % userDiscountFrequency === 0) {
      const couponCode = `DISCOUNT${orderCount}` // Generate a simple coupon code
      setAvailableCode(couponCode)
    }
  }, [orderCount, userDiscountFrequency])

  if (!cartItems.length && !isOrderPlaced) {
    return (
      <Container>
        <Grid container alignItems={"center"} justifyContent={"center"} p={2}>
          <Grid size={4}>
            <Box sx={{ width: 1, height: 250, position: "relative" }}>
              <Image src={"/empty_cart.svg"} alt={"empty_cart"} fill />
            </Box>
            <Typography
              variant="h5"
              align="center"
              my={2}
              color="textSecondary"
            >
              Your cart is empty, start shopping!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  }
  if (isOrderPlaced) {
    return (
      <Container>
        <Grid container alignItems={"center"} justifyContent={"center"} p={2}>
          <Grid size={4}>
            <Box sx={{ width: 1, height: 250, position: "relative" }}>
              <Image
                src={"/order_confirmed.svg"}
                alt={"order_confirmed"}
                fill
              />
            </Box>
            <Typography
              variant="h5"
              align="center"
              my={2}
              color="textSecondary"
            >
              Thank you for your order!
            </Typography>
            <Typography align="center">
              Your order number is{" "}
              <MuiLink component={NextLink} href={"/orders"}>
                {"#" + orderNumber.current}
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  }
  return (
    <Container>
      <Grid container columnSpacing={4}>
        <Grid size={{ xs: 12, md: 9 }}>
          <TypographyHeading variant={"h4"} gutterBottom mt={1}>
            Shopping Cart.
          </TypographyHeading>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((cartItem) => {
                  const product = getProductById(cartItem.productId)
                  return (
                    <TableRow key={product.name}>
                      <TableCell component="th" scope="row">
                        <Box display={"flex"} alignItems={"center"}>
                          <Box width={80} height={80}>
                            <ImgImage
                              alt={product.name}
                              src={product.imageURL}
                            />
                          </Box>
                          <Box ml={2}>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: 16,
                                margin: "0 0 8px 0",
                              }}
                            >
                              {product.name}
                            </Typography>
                            <SpanDescr>{product.description}</SpanDescr>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <DailyInteger
                          handleAdd={() => {
                            dispatch(
                              addProduct({
                                productId: product.id,
                                quantity: 1,
                                price: product?.price,
                              })
                            )
                          }}
                          handleRemove={() => {
                            dispatch(
                              removeProduct({
                                productId: product.id,
                                price: product.price,
                              })
                            )
                          }}
                        >
                          {cartItem.quantity}
                        </DailyInteger>
                      </TableCell>
                      <TableCell>
                        {(
                          cartItem.quantity * (product?.price ?? 1)
                        ).toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                          maximumFractionDigits: 0,
                        })}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() =>
                            dispatch(
                              removeProduct({
                                productId: product.id,
                                price: product.price,
                              })
                            )
                          }
                        >
                          <Close />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack sx={{ p: 2 }} spacing={1}>
            <Typography variant="h6" color="textSecondary">
              Order Summary
            </Typography>
            <Divider />
            <RowBox>
              <Typography>Subtotal</Typography>
              <Typography>
                {cartTotalPrice.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </Typography>
            </RowBox>
            <RowBox>
              <Typography>Discount</Typography>
              <Typography color={appliedCode ? "success" : "textPrimary"}>
                {discountAmount.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </Typography>
            </RowBox>
            <RowBox>
              <Typography>Shipping Charges</Typography>
              <Typography>
                {shippingCharge.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </Typography>
            </RowBox>
            <Divider />
            <RowBox>
              <Typography fontWeight={"700"}>Total Amount</Typography>
              <Typography fontWeight={"700"}>
                {finalAmount.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </Typography>
            </RowBox>
            <Box sx={{ width: 1 }}>
              <RowBox>
                <TextField
                  id="coupon"
                  variant="outlined"
                  disabled={!!appliedCode}
                  error={!!errorMessage}
                  fullWidth
                  placeholder="Enter coupon code"
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value)
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      py: 1,
                    },
                    "& .MuiInputBase-root": {
                      borderRadius: 0,
                    },
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 0 }}
                  onClick={handleApplyCode}
                  disabled={!!appliedCode}
                >
                  Apply
                </Button>
              </RowBox>
              {!!errorMessage && (
                <Typography variant="caption" color="error">
                  {errorMessage}
                </Typography>
              )}
            </Box>
            <Typography>Applied coupon code:</Typography>
            {appliedCode ? (
              <Chip
                sx={{ width: 120 }}
                color="success"
                label={appliedCode}
                onDelete={handleDeleteCode}
              />
            ) : (
              <Typography sx={{ fontWeight: "bold" }}>{"None"}</Typography>
            )}
            <Typography>Available coupon code:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {availableCode || "None"}
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ my: 2 }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
