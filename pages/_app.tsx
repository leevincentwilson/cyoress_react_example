import '../styles/globals.css'
import Header from '../components/header'
import type { AppProps } from 'next/app'
import theme  from '../theme/theme'

import { ThemeProvider } from '@mui/material/styles';
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
    if(typeof window !== "undefined" && window?.location?.origin){
        return (
            <Auth0Provider
                domain="cypress-example.eu.auth0.com"
                clientId="Big449JfRRIDGMfoQrUF6Y5q9rctP5Ov"
                redirectUri={window?.location?.origin}
            >
              <ThemeProvider theme={theme}>
                <Header/>
                <Component {...pageProps} />
              </ThemeProvider>
            </Auth0Provider>
        )
    }
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
