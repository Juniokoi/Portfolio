import * as React from "react";

import { Button, Container } from "./style";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  toggleTheme: () => void;
}
export function Header({ toggleTheme }: Props) {
  return (
    <Container>
      <Button>minhas redes</Button>
      <ThemeSwitcher toggleTheme={toggleTheme} />
    </Container>
  );
}
