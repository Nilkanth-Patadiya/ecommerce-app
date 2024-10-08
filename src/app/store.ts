import { configureStore, combineReducers } from "@reduxjs/toolkit"
import productsReducer from "@/app/products/productsSlice"
import usersReducer from "@/app/login/usersSlice"
import loggedInUserReducer from "@/app/login/loggedInUserSlice"
import cartReducer from "@/app/cart/cartSlice"
import ordersReducer from "@/app/orders/orderSlice"
import storageSession from "redux-persist/lib/storage/session"
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"

const rootReducer = combineReducers({
  users: usersReducer,
  loggedInUser: loggedInUserReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
})
const persistConfig = {
  key: "root",
  storage: storageSession,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
