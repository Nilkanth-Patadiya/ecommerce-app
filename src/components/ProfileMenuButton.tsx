"use client"
import React, { useState } from "react"
import { Button, Menu, MenuItem } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const ProfileMenuButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        startIcon={<AccountCircleIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        Profile
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            width: anchorEl ? anchorEl.clientWidth : "auto", // Match the width of the button
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </div>
  )
}

export default ProfileMenuButton
