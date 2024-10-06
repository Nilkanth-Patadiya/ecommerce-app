import theme from "@/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { Provider } from "react-redux"
import { store } from "./store"

const RootProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Provider store={store}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </Provider>
  )
}

export default RootProvider
