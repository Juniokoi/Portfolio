import * as React from "react";
import { Container, Section } from "./SectionStyle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ThemeContext } from "styled-components";
import { SkillContext } from "../SkillContext";

export default function AboutSection() {
  const [isOpen, setIsOpen] = React.useState(true);
  const { SkillColor } = React.useContext(SkillContext);
  function SpreadText() {
    return setTimeout(() => {
      setIsOpen(!isOpen);
    }, 150);
  }

  const { colors } = React.useContext(ThemeContext);
  return (
    <Container>
      <h2>
        Sobre <span className="bodyFont">mim</span>.
      </h2>
      <hr />
      <Section isExpanded={isOpen} color={colors.text} BorderColor={SkillColor}>
        <div onClick={() => SpreadText()}>
          <h3>{isOpen ? "Diminuir" : "Expandir"}</h3>

          <ArrowDownwardIcon
            className="ArrowIcon"
            sx={{
              transform: "45deg",
              fill: colors.text,
            }}
          />
        </div>
        {isOpen && <AboutText />}
      </Section>
    </Container>
  );
}

function AboutText() {
  return (
    <>
      <p>
        Fabio Junio “Koi” dos Santos é um jovem rapaz que teve seu primeiro
        contato ao customizar sua página no Tumblr em meados de 2013, porém, foi
        cursando Engenharia Elétrica ao estudar a linguagem C que descobriu que
        sua vocação é realmente programação!
      </p>
      <p>
        Desde então vem dedicando-se com diversos cursos e bootcamps afim de
        criar PWAs mais eficientes, chamativas (no bom sentido) e com
        acessibilidade.
      </p>
      <p>
        Ama arte, cores e afins, sempre se inspirando e trazendo elementos aos
        seus websites feitos além de fazer publicações semanais sobre tópicos
        que acha necessário e útil para ajudar outros desenvolvedores na trilha
        da programação.
      </p>
    </>
  );
}
