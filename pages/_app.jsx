import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.white};
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #3A3A3A;
    
  }

  a {
    color: #f9c731;
    font-weight: bold;
    text-decoration: none;
  }

  p {
    font-size: 16px;
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
