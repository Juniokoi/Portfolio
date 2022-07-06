import * as React from "react";

import { Button, Container } from "./style";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  toggleTheme: () => void;
}
export function Header({ toggleTheme }: Props) {
  return (
    <Container id="home">
      <a href="https://linktr.ee/juniokoi" target="_blank">
        <Button>minhas redes</Button>
      </a>
      <ThemeSwitcher toggleTheme={toggleTheme} />
    </Container>
  );
}
