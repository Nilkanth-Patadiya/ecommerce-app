"use client"
import { Roboto } from "next/font/google"
import { createTheme } from "@mui/material/styles"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#212121", // Very dark gray for primary text
      secondary: "#757575", // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme
