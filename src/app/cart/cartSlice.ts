import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../products/productsSlice"

interface CartProduct extends Product {
  quantity: number
}
const initialState: CartProduct[] = []
const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id)
    },
  },
})

export const { addProduct, removeProduct } = cartProductsSlice.actions
export default cartProductsSlice.reducer
