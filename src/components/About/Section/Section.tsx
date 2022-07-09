import * as React from "react";
import { Container, Section } from "./SectionStyle";
import { ThemeContext } from "styled-components";
import { SkillContext } from "../SkillContext";
import { ScrollArea } from "@mantine/core";

export default function AboutSection() {
  const { TextColor } = React.useContext(SkillContext);

  const { colors } = React.useContext(ThemeContext);
  return (
    <Container>
      <h2>
        Sobre <span className="bodyFont">mim</span>.
      </h2>
      <hr />

      <Section color={colors.text} BorderColor={TextColor}>
        <ScrollArea
          type="always"
          offsetScrollbars={true}
          style={{ height: 500 }}
        >
          <AboutText />
        </ScrollArea>
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
