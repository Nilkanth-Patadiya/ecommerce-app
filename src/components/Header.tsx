"use client"
import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import Link from "@mui/material/Link"
import NextLink from "next/link"
import Badge from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Tooltip from "@mui/material/Tooltip"
import ProfileMenuButton from "./ProfileMenuButton"
import { BRAND_NAME } from "@/constants"
import { usePathname, useRouter } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { logout, selectLoggedInUser } from "@/app/login/loggedInUserSlice"
import { selectUserRoleByID } from "@/app/login/usersSlice"
import { allPages } from "@/constants"
import { selectCartItemCount } from "@/app/cart/cartSlice"

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [options] = React.useState(allPages)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const router = useRouter()
  const handleMenuItemClick = (path: string) => {
    router.push(path)
    handleCloseNavMenu()
  }

  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const cartItemCount = useAppSelector(selectCartItemCount)
  const userId = useAppSelector(selectLoggedInUser)
  const loggedInUserRole = useAppSelector((state) =>
    selectUserRoleByID(state, userId)
  )
  const userPages =
    loggedInUserRole === "admin" ? options.slice(3) : options.slice(0, 2)

  const handleLogOut = () => {
    dispatch(logout())
    router.push("/login")
  }

  return (
    <AppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* This is for large screens md */}
          <LocalMallIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "cursive",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {BRAND_NAME}
          </Typography>
          <Box
            sx={{
              ml: 2,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {userPages.map(({ label, path }) => (
              <Link
                key={label}
                component={NextLink}
                color="inherit"
                underline={pathname === path ? "always" : "hover"}
                href={path}
                fontWeight={pathname === path ? "600" : "400"}
              >
                {label}
              </Link>
            ))}
          </Box>
          {/* This is for small screens xs */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {userPages.map(({ label, path }) => (
                <MenuItem key={label} onClick={() => handleMenuItemClick(path)}>
                  <Typography sx={{ textAlign: "center" }}>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalMallIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "cursive",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {BRAND_NAME}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {loggedInUserRole === "customer" && (
              <Tooltip title="View Cart" arrow>
                <IconButton
                  color="inherit"
                  aria-label="cart"
                  sx={{ mr: 2 }}
                  onClick={() => router.push("/cart")}
                >
                  <Badge
                    color="secondary"
                    badgeContent={cartItemCount}
                    showZero
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}
            <ProfileMenuButton
              label={loggedInUserRole as string}
              handleLogOut={handleLogOut}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
