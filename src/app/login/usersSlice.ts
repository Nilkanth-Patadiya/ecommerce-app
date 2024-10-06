import { createSlice } from "@reduxjs/toolkit"
import usersData from "@/data/users.json"
import { RootState } from "../store"

export interface User {
  id: string
  email: string
  password: string
  role: "customer" | "admin"
  discountFrequency?: number
}
const users = usersData as User[]

const usersSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    setUsers: (_state, action) => action.payload,
  },
})

export const { setUsers } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users
export const selectUserRoleByID = (
  state: RootState,
  userId: string
): "customer" | "admin" | undefined =>
  state.users.find((user) => user.id === userId)?.role
export const selectUserDiscountFrequency = (state: RootState, userId: string) =>
  state.users.find((user) => user.id === userId)?.discountFrequency
export default usersSlice.reducer
