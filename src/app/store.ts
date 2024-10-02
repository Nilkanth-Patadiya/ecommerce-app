import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "@/app/products/productsSlice"
import usersReducer, { User } from "@/app/login/usersSlice"
import loggedInUserReducer from "@/app/login/loggedInUserSlice"
import cartProductsReducer from "@/app/cart/cartSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedInUser: loggedInUserReducer,
    products: productsReducer,
    cartProducts: cartProductsReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = Omit<
  ReturnType<AppStore["getState"]>,
  "loggedInUser"
> & {
  loggedInUser: User | null
}
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
