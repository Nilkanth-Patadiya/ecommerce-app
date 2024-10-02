import { createSlice } from "@reduxjs/toolkit"
import { User } from "./usersSlice"
import { RootState } from "../store"

const initialState: User | null = null
const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    login: (_state, action) => action.payload,
    logout: () => null,
  },
})

export const { login, logout } = loggedInUserSlice.actions
export const selectLoggedInUserRole = (
  state: RootState
): "customer" | "admin" | undefined => state.loggedInUser?.role
export default loggedInUserSlice.reducer
