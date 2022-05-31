import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
// import usePersistedState from "./Hooks/usePersistedState"

import dark from './Styles/themes/dark'
import light from './Styles/themes/light'

import GlobalStyles from './Styles/global'
import { Container } from './AppStyle'
import { Header } from './Components/Header'
import { Main } from './Components/Main'

function App () {
  const [theme, setTheme] = useState(dark)

  function toggleTheme () {
    setTheme(theme === dark ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Container>
    <Header
    toggleTheme={toggleTheme}
    />
    <Main />
    </Container>
    </ThemeProvider>
  )
}

export default App
