import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  
  *{
    box-sizing: border-box;
  }

  html, body {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.white};
  }
  
`
  
function MyApp ({ Component, pageProps }) {
  return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
