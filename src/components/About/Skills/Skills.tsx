import React, { useState, useContext } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { SkillContext } from "../SkillContext";
import SkillTypes from "./SkillTypes";

import {
  Container,
  List,
  ListItem,
  Header,
  ListBody,
  PanelDescription,
  PanelItems,
  PanelCard,
} from "./SkillStyle";
////

// Main component
export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(3);
  const { setSkillTheme } = useContext(SkillContext);

  function handleIndex(index: number) {
    index === activeIndex ? setActiveIndex(3) : setActiveIndex(index);
  }

  return (
    <>
      <Container>
        <h2>
          <span className="bodyFont">Minhas</span> habilidades.
        </h2>
        <hr />
        <List>
          {SkillTypes.map((skillType, index) => (
            <Panel
              title={skillType.title}
              key={index}
              isActive={activeIndex === index}
              onShow={() => handleIndex(index)}
            >
              <PanelDescription>{skillType.description}</PanelDescription>

              <PanelItems className="PanelItems">
                {skillType.skills?.map((skill, index) => (
                  <PanelCards
                    alias={skill.alias}
                    img={"/about/" + skill.img + ".svg"}
                    title={skill.title}
                    key={index}
                  />
                ))}
              </PanelItems>
            </Panel>
          ))}
        </List>
      </Container>
    </>
  );
}

interface PanelProps {
  title: string;
  children?: any;
  isActive: boolean;
  onShow: () => void;
}
interface PanelCardsProps {
  title: string;
  img: string;
  alias: string;
}

function Panel({ title, children, isActive, onShow }: PanelProps) {
  return (
    <ListItem className="panel">
      <Header onClick={onShow} isExpanded={isActive}>
        <h3>{title}</h3>

        <ArrowDownwardIcon
          className="ArrowIcon"
          sx={{ width: "42px", height: "42px" }}
        />
      </Header>

      {isActive && <ListBody>{children}</ListBody>}
    </ListItem>
  );
}

function PanelCards({ title, img, alias }: PanelCardsProps) {
  return (
    <PanelCard>
      <img src={img} alt={alias} height={64} width={32} />
      <h4>{title}</h4>
    </PanelCard>
  );
}
