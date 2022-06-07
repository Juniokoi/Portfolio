import * as React from 'react'
import { useState } from 'react'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import dark from '../src/styles/themes/dark'
import light from '../src/styles/themes/light'
import GlobalStyles from '../src/styles/global'

import { Container } from './style'
import { Header } from '../components/Home/Header'
import { Main } from '../components/Home/Main'
import { Nav } from '../components/Home/Nav'

export default function Home() {
  const [theme, setTheme] = useState(dark)

  function toggleTheme() {
    setTheme(theme === dark ? light : dark)
  }

  return (
    <>
      <Head>
        <title>Junio KOI - Portfolio</title>
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Container>
          <Header toggleTheme={toggleTheme} />
          <Main />
          <Nav />
        </Container>
      </ThemeProvider>
    </>
  )
}
