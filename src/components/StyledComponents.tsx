"use client"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"

export const TypographyHeading = styled(Typography)(
  ({ theme: { breakpoints } }) => ({
    fontWeight: 900,
    textAlign: "center",
    [breakpoints.up("sm")]: {
      textAlign: "left",
    },
  })
)

export const ImgImage = styled("img")(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}))

export const RowBox = styled(Box)(({}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}))

export const PName = styled("p")(({}) => ({
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",

  fontWeight: "bold",
  fontSize: 16,
  margin: "0 0 8px 0",
}))

export const SpanDescr = styled("span")(({ theme: { palette } }) => ({
  fontSize: 14,
  color: palette.text.secondary,
}))
