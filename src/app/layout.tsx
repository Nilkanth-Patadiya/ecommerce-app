"use client"
import * as React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Box from "@mui/material/Box"
import { usePathname } from "next/navigation"

import RootProvider from "./RootProvider"
function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

  return (
    <html lang="en">
      <body>
        <RootProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            {!isLoginPage && <Header />}
            <Box component={"main"} sx={{ flex: 1, pt: !isLoginPage ? 10 : 0 }}>
              {children}
            </Box>
            {!isLoginPage && <Footer />}
          </Box>
        </RootProvider>
      </body>
    </html>
  )
}
export default RootLayout
