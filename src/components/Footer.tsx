import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"
import { BRAND_NAME, githubProfile } from "@/constants"

function Footer() {
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
        <MuiLink
          color="inherit"
          href={githubProfile}
          target="_blank"
          rel="noopener"
        >
          {BRAND_NAME}
        </MuiLink>
        {` ${new Date().getFullYear()}`}.
      </Typography>
    </footer>
  )
}
export default Footer
