import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"
import { BRAND_NAME } from "@/constants"

export default function Footer() {
  return (
    <footer>
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "text.secondary",
          py: 1,
        }}
      >
        {"Copyright © "}
        <MuiLink color="inherit" href="https://mui.com/">
          {BRAND_NAME}
        </MuiLink>
        {` ${new Date().getFullYear()}`}.
      </Typography>
    </footer>
  )
}
