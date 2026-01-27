import { createGlobalStyle } from 'styled-components'
import { Fonts } from './components/Fonts/fonts'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    font-family: ${Fonts.family.base}; /* Lato */
    font-weight: ${Fonts.weight.regular};
    padding-bottom: 120px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${Fonts.family.title}; /* Gloock */
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .container {
    max-width: 80%;
  }
}

`

export default GlobalStyle
