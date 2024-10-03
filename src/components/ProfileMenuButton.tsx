"use client"
import React from "react"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
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
        variant="contained"
        disableElevation
        startIcon={<AccountCircleIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: buttonRef.current?.clientWidth,
            },
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
