import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
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
export const selectOrders = (state: RootState) => state.orders
export const selectOrdersByUser = (state: RootState, userId: string) =>
  state.orders.filter((order) => order.userId === userId)
export const selectTotalItemsPurchased = createSelector(
  [selectOrders],
  (orders) =>
    orders.reduce((total, order) => {
      return (
        total + order.cart.items.reduce((sum, item) => sum + item.quantity, 0)
      )
    }, 0)
)

export const selectTotalPurchaseAmount = createSelector(
  [selectOrders],
  (orders) => orders.reduce((total, order) => total + order.totalPrice, 0)
)

export const selectDiscountCodes = createSelector([selectOrders], (orders) =>
  orders
    .map((order) => order.discountCode)
    .reduce<string[]>((uniqueCodes, code) => {
      if (!uniqueCodes.includes(code)) {
        uniqueCodes.push(code)
      }
      return uniqueCodes
    }, [])
)

export const selectTotalDiscountAmount = createSelector(
  [selectOrders],
  (orders) => orders.reduce((total, order) => total + order.discountAmount, 0)
)
export default ordersSlice.reducer
