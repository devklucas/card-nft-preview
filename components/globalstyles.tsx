import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Outfix', sans-serif;
    color:var(--white);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  :root{
    --soft-blue: hsl(215, 51%, 70%);
    --cyan: hsl(178, 100%, 50%);
    --very-dark-main: hsl(217, 54%, 11%);
    --very-dark-card: hsl(216, 50%, 16%);
    --very-dark-line: hsl(215, 32%, 27%);
    --white: hsl(0, 0%, 100%);
  }
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
