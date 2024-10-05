import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

const initialState: string = ""
const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    login: (_state, action: PayloadAction<string>) => action.payload,
    logout: () => "",
  },
})

export const { login, logout } = loggedInUserSlice.actions
export const selectLoggedInUser = (state: RootState): string =>
  state.loggedInUser
export default loggedInUserSlice.reducer
