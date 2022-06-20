import styled from "styled-components";
import theme from "../../../styles";

type SkillProps = {
  isExpanded?: boolean;
  color?: string;
};
// Defines the major structure of this component
export const Container = styled.section<SkillProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    width: 33rem;
    top: -0.5rem !important;
  }

  @media (max-width: ${theme.screenSize.desktop}) {
    max-width: 100vw;
    margin: 0 auto;
  }
  .Shadow {
    box-shadow: 0 0px 20px 10px ${props => props.color+'50'};
  }
`;

// Represents the whole section
export const List = styled.ul<SkillProps>`
  margin-top: 1.5rem;
  border: 1px solid;
  border-width: 2px 1px;
  border-color: ${(props) => props.color};
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background};
  /* box-shadow: 0 5px 10px 0 ${(props) => props.color + "90"} */

`;

// Each skill is an item. ie(Frontend, Backend, Design UI)
export const ListItem = styled.li<SkillProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: ${theme.fonts.fat};
  font-size: 1.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.color};
  }
`;

// List of skills
export const Header = styled.div<SkillProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;

  .ArrowIcon {
    transition: all 0.3s ease-in-out !important;
    transition-delay: 1s;
    ${(props) =>
      props.isExpanded
        ? `transform: rotate(0deg) !important;`
        : `transform: rotate(-45deg) !important;`}
  }
`;

// Group which contain the Panel description and group of items
export const ListBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${theme.screenSize.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;

// Div that only contains the description
export const PanelDescription = styled.div`
  width: 50%;
  text-align: start;
  align-self: flex-end;
  font-family: ${theme.fonts.body};
  font-size: 1.5rem;
  height: 100%;
  padding: 1rem;
  @media (max-width: ${theme.screenSize.tablet}) {
    margin: 1rem 0;
    align-self: center;
    text-align: start;
    width: 100%;
  }
`;

export const PanelItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  border-left: 4px solid;
  @media (max-width: ${theme.screenSize.tablet}) {
    border: none;
    width: 100%;
  }
`;

// Each icon is an item. ie(HTML, CSS, Javascript, React, etc)
export const PanelCard = styled.div<SkillProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-family: ${theme.fonts.body};
  font-size: 1.5rem;
  text-align: center;

  min-width: 84px;
  margin: 1rem;
  padding: 1rem;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.text};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.color};
  transition: 0 !important;
  cursor: pointer;

  &:hover {
    img {
      filter: grayscale(0%);
    }
    transition: all 0.15s ease !important;
    transform: translate(0, -0.5rem);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  }

  img {
    width: 64px;
    height: auto;
    filter: grayscale(100%);
  }
  h4 {
    font-family: ${theme.fonts.code};
    color: #000;
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    filter: grayscale(0);
    @media (max-width: 550px) {
      width: 70%;
    }
  }
`;
