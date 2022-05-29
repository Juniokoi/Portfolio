import React from "react";

import {Container} from './style'
import ThemeSwitcher from "../ThemeSwitcher";

interface Props {
  toggleTheme: () => void;
}
export function Header( {toggleTheme} : Props) {

  return (
    <Container>
      Hello World
      <ThemeSwitcher 
      toggleTheme={toggleTheme}
      />
    </Container>
  );
}