import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"
import { BRAND_NAME, githubRepoLink } from "@/constants"

function Footer() {
  return (
    <footer>
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "text.secondary",
          py: 2,
        }}
      >
        {"Copyright © "}
        <MuiLink
          fontWeight={"bold"}
          color="inherit"
          href={githubRepoLink}
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
