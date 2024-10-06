import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface CartItem {
  productId: number
  quantity: number
}

export interface Cart {
  id: number
  userId: string
  items: CartItem[]
  totalPrice: number
}

const initialCartState: Cart = {
  id: 0,
  userId: "",
  items: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{
        productId: number
        quantity: number
        price: number
      }>
    ) => {
      const { productId, quantity, price } = action.payload
      const existingItem = state.items.find(
        (item) => item.productId === productId
      )

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ productId, quantity })
      }

      state.totalPrice += price * quantity
    },
    removeProduct: (
      state,
      action: PayloadAction<{ productId: number; price: number }>
    ) => {
      const { productId, price } = action.payload
      const existingItem = state.items.find(
        (item) => item.productId === productId
      )

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
          state.totalPrice -= price
        } else {
          state.totalPrice -= existingItem.quantity * price
          state.items = state.items.filter(
            (item) => item.productId !== productId
          )
        }
      }
    },
    clearCart: () => initialCartState,
  },
})

export const { addProduct, removeProduct, clearCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart
export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0)

export default cartSlice.reducer
