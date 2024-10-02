import { createSlice } from "@reduxjs/toolkit"
import productsData from "@/data/products.json"
import { RootState } from "../store"

export interface Product {
  id: number
  productName: string
  category: string
  price: number
  description: string
  stock: number
  imageURL: string
}
const products: Product[] = productsData

const productsSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    setProducts: (_state, action) => action.payload,
  },
})

export const { setProducts } = productsSlice.actions
export const selectProducts = (state: RootState) => state.products
export default productsSlice.reducer
