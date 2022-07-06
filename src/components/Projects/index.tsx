import React from "react";

import Carousel from "./Carousel";

import { Container } from "./style";
import DashboardRoundedIcon from "@mui/icons-material/Dashboard";

export default function Projects() {
  return (
    <Container id="projects">
      <div className="Text">
        <div className="Header">
          <DashboardRoundedIcon />
          <h2>
            WEB <br />
            Projects
          </h2>
        </div>
        <div className="Body">
          <p>
            Meus principais projetos desenvolvidos para me desafiar criando
            soluções com linguagens e/ou ferramentas que estou aprendendo.
          </p>
        </div>
      </div>
      <hr />
      <Carousel />
    </Container>
  );
}
