import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { Cart } from "../cart/cartSlice"

interface Order {
  id: string
  userId: string
  cart: Cart
  totalPrice: number
  discountAmount: number
  discountCode: string
  timestamp: number
}

const initialOrdersState: Order[] = []

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialOrdersState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload)
    },
  },
})

export const { addOrder } = ordersSlice.actions
// Selector to get orders from the state
export const selectOrders = (state: RootState) => state.orders

// Selector to get orders from the state by userId
export const selectOrdersByUser = (state: RootState, userId: string) =>
  state.orders.filter((order) => order.userId === userId)

// Selector to get the total items purchased
export const selectTotalItemsPurchased = (state: RootState): number => {
  const orders = selectOrders(state)
  return orders.reduce((total, order) => {
    return (
      total + order.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    )
  }, 0)
}

// Selector to get the total purchase amount
export const selectTotalPurchaseAmount = (state: RootState): number => {
  const orders = selectOrders(state)
  return orders.reduce((total, order) => total + order.totalPrice, 0)
}

// Selector to get unique discount codes
export const selectDiscountCodes = (state: RootState): string[] => {
  const orders = selectOrders(state)
  return orders
    .map((order) => order.discountCode)
    .filter((code) => Boolean(code))
    .reduce<string[]>((uniqueCodes, code) => {
      if (!uniqueCodes.includes(code)) {
        uniqueCodes.push(code)
      }
      return uniqueCodes
    }, [])
}
// Selector to get the total discount amount
export const selectTotalDiscountAmount = (state: RootState) =>
  state.orders.reduce((total, order) => total + order.discountAmount, 0)

export default ordersSlice.reducer
