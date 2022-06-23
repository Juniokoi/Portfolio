import React from "react";

import Carousel from "./Carousel";

import { Container } from "./style";
import DashboardRoundedIcon from "@mui/icons-material/Dashboard";

export default function Projects() {
  return (
    <Container>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            atque consequuntur aut iure autem! Quidem obcaecati natus laborum
            molestias voluptas hic harum, quia officiis!
          </p>
        </div>
      </div>
      <hr />
      <Carousel />
    </Container>
  );
}
