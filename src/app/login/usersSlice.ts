import { createSlice, PayloadAction } from "@reduxjs/toolkit"
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
    updateDiscountFrequency: (
      state,
      action: PayloadAction<{ id: string; discountFrequency: number }>
    ) => {
      const { id, discountFrequency } = action.payload
      const user = state.find((user) => user.id === id)
      if (user) {
        user.discountFrequency = discountFrequency
      }
    },
  },
})

export const { setUsers, updateDiscountFrequency } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users

export const selectUserRoleByID = (
  state: RootState,
  userId: string
): "customer" | "admin" | undefined =>
  state.users.find((user) => user.id === userId)?.role

export const selectUserDiscountFrequency = (state: RootState, userId: string) =>
  state.users.find((user) => user.id === userId)?.discountFrequency

export const selectUsersByRole = (state: RootState, role: string) =>
  state.users.filter((user) => user.role === role)

export default usersSlice.reducer
