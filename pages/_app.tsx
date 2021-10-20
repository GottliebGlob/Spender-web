import "../styles/globals.css";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: '#282e3b',
      main: '#17212b',
      dark: '#0e1621'
    },
    secondary: {
      main: '#ffb600'
    },
    error: {
      main: '#b71c1c'
    },
    success: {
      main: '#008b00'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp;
