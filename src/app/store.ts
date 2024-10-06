import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "@/app/products/productsSlice"
import usersReducer from "@/app/login/usersSlice"
import loggedInUserReducer from "@/app/login/loggedInUserSlice"
import cartReducer from "@/app/cart/cartSlice"
import ordersReducer from "@/app/orders/orderSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedInUser: loggedInUserReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
