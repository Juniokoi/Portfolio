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
        Sou desenvolvedor Fullstack orientado a frontend com experiências em
        bibliotecas e frameworks como Angular, Vue e React, além de
        conhecimento amplo em Design, UI/UX e ferramentas como Figma,
        Illustrator, Photoshop e outros. No backend tenho proficiência em Java
        e Spring, boa experiência em GIT e conhecimento de metodologias ágeis.
      </p>
    </>
  );
}