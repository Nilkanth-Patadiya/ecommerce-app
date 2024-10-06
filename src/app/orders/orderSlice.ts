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
export const selectOrders = (state: RootState) => state.orders
export const selectOrdersByUser = (state: RootState, userId: string) =>
  state.orders.filter((order) => order.userId === userId)

export default ordersSlice.reducer
