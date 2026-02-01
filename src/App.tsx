import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temaLight from './Themes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <ListaVagas />
    </ThemeProvider>
  )
}

export default App
