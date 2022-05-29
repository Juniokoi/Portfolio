import React, { useState } from "react"
import {ThemeProvider}  from "styled-components"
// import usePersistedState from "./Hooks/usePersistedState"

import { Header } from "./Components/Header"
import GlobalStyles from './Styles/global'
import dark from './Styles/themes/dark'
import light from './Styles/themes/light'

function App() {
const [theme, setTheme] = useState(dark);

function toggleTheme () {
  setTheme(theme === dark ?  light :  dark);
}
  
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Header
    toggleTheme={toggleTheme}
    />
    </ThemeProvider>
  )

}

export default App
