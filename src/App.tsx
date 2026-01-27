import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle from './GlobalStyle'
import temaLight from './Themes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
