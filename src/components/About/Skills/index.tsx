import React, { useState, useContext, useEffect } from "react";

import { SkillContext } from "../SkillContext";
import SkillTypes from "./SkillTypes";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import nc from "classnames";

import {
  Container,
  List,
  ListItem,
  Header,
  ListBody,
  PanelItems,
  PanelDescription,
  PanelCard,
} from "./Style";
import CV from "./CV";

////
type PanelProps = {
  title: string;
  onShow: () => void;
  isActive: boolean;
  color: string;
  children: any;
};
type CardProps = {
  color: string;
  alias: string;
  title: string;
  img: string;
};

// Main component
export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(3);
  const { setSkillTheme, SkillColor } = useContext(SkillContext);

  function handleIndex(index: number) {
    index === activeIndex ? setActiveIndex(3) : setActiveIndex(index);
  }
  useEffect(() => {
    setSkillTheme(activeIndex);
  }, [activeIndex]);

  return (
    <>
      <Container color={SkillColor}>
        <h2>
          <span className="bodyFont">Minhas</span> habilidades.
        </h2>
        <hr />
        <List
          color={SkillColor}
          className={nc(activeIndex !== 3 ? "Shadow" : "")}
        >
          {SkillTypes.map(({ description, skills, title }, index) => (
            <Panel
              key={index}
              title={title}
              onShow={() => handleIndex(index)}
              isActive={activeIndex === index}
              color={SkillColor}
            >
              <PanelDescription>{description} </PanelDescription>
              <PanelItems>
                {skills.map(({ alias, img, title }, index) => (
                  <CardItem
                    color={SkillColor}
                    key={index}
                    title={title}
                    img={"/about/" + img + ".svg"}
                    alias={alias}
                  />
                ))}
              </PanelItems>
            </Panel>
          ))}
        </List>
        <CV />
      </Container>
    </>
  );
}

function Panel({ title, children, isActive, onShow, color }: PanelProps) {
  return (
    <ListItem className="panel" color={color}>
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

function CardItem({ color, alias, title, img }: CardProps) {
  return (
    <PanelCard color={color}>
      <img src={img} alt={alias} />
      <h4>{title}</h4>
    </PanelCard>
  );
}
