import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import temaLight from './themes/light'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import FormVagas from './components/FormVagas'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <FormVagas aoPesquisar={(termo) => console.log(termo)} />
      <ListaVagas />
    </ThemeProvider>
  )
}

export default App
