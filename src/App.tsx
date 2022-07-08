import * as React from "react";
import { useState } from "react";

import { ThemeProvider } from "styled-components";

import dark from "../src/styles/themes/dark";
import light from "../src/styles/themes/light";
import GlobalStyles from "../src/styles/global";

import { Container } from "./style";
import { Header } from "./components/Home/Header";
import { Main } from "./components/Home/Main";
import { Nav } from "./components/Home/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";

export default function Home() {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme === dark ? light : dark);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Container>
          <div className="header">
            <Header toggleTheme={toggleTheme} />
            <Main />
            <Nav />
          </div>
          <About />
          <Projects />
          <Contact />
        </Container>
      </ThemeProvider>
    </>
  );
}
