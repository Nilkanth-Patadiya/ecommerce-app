"use client"
import * as React from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "@/theme"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Box from "@mui/material/Box"
import { usePathname } from "next/navigation"
import { Provider } from "react-redux"
import { store } from "./store"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                {!isLoginPage && <Header />}
                <Box
                  component={"main"}
                  sx={{ flex: 1, pt: !isLoginPage ? 10 : 0 }}
                >
                  {children}
                </Box>
                {!isLoginPage && <Footer />}
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  )
}
