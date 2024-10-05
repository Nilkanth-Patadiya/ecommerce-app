"use client"
import React from "react"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Button from "@mui/material/Button"
import Menu, { menuClasses } from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

const ProfileMenuButton = ({
  label = "Profile",
  handleLogOut,
}: {
  label: string
  handleLogOut: () => void
}) => {
  const buttonRef = React.useRef<null | HTMLButtonElement>(null)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        ref={buttonRef}
        startIcon={
          <AccountCircleIcon
            sx={{
              color: "primary.light",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        }
        endIcon={
          <ExpandMoreIcon
            sx={{
              color: "primary.light",
              userSelect: "none",
              pointerEvents: "none",
              transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        }
        onClick={handleClick}
        sx={{
          minWidth: 140,
          background: "white",
          fontWeight: 500,
          textTransform: "capitalize",
          borderColor: "primary.light",
          borderStyle: "solid",
          borderWidth: "2px",
          borderRadius: "4px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          [`& .${menuClasses.paper}`]: {
            minWidth: 140,
            borderRadius: "4px",
            marginTop: "8px",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            handleLogOut()
            handleClose()
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </>
  )
}

export default ProfileMenuButton
