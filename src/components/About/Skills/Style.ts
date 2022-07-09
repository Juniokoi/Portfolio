import styled from "styled-components";
import theme from "../../../styles";

type SkillProps = {
  isExpanded?: boolean;
  color?: string;
  itemColor?: string;
  backgroundColor?: string;
  isDark?: boolean;
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
    @media screen and (max-width: 1150px) {
      margin: 0 auto;
    }
  }
  .Glow {
    box-shadow: 0 0px 20px 10px ${(props) => props.color + "50"};
    ${(props) =>
      props.isDark
        ? ` color: ${props.theme.colors.background};`
        : ` color: ${props.theme.colors.text} ;  `}
  }
  .baseBgColor {
    background-color: ${(props) => props.theme.colors.background};
  }
  .insideBorder,
  .insideBorder * {
    ${(props) =>
      props.isDark
        ? ` border-color: ${props.theme.colors.background} !important;`
        : ` border-color: ${props.theme.colors.text} !important;`}
  }
`;

// Represents the whole section
export const List = styled.ul<SkillProps>`
  margin-top: 1.5rem;
  border: 1px solid;
  border-width: 2px 1px;
  border-color: ${(props) => props.color};
  border-radius: 15px;
  width: 90%;
  @media screen and (max-width: 1150px) {
    width: 100%;
    margin: 0 auto;
  }
`;

// Each skill is an item. ie(Frontend, Backend, Design UI)
export const ListItem = styled.li<SkillProps>`
  transition: none !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};

  padding: 1rem;
  font-family: ${theme.fonts.body};
  font-size: 1.5rem;

  &:first-child {
    border-radius: 14px 14px 0 0;
  }
  &:last-child {
    border-radius: 0 0 14px 14px;
  }

  &:hover {
    background-color: ${(props) => props.itemColor};
    ${(props) =>
      props.isDark
        ? `color: ${props.theme.colors.background} ;`
        : ` color: ${props.theme.colors.text} ;  `}
  }

  &:not(:last-child) {
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.colors.text};
  }
`;

// List of skills
export const Header = styled.div<SkillProps>`
  display: flex;
  flex-direction: row;
  font-weight: bolder;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 1150px) {
    width: 100%;
    margin: 0 auto;
  }
  .ArrowIcon {
    transition: transform 0.3s ease-in-out !important;
    /* transition-delay: 1s; */
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
  align-self: center;
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
  cursor: pointer;

  &:hover {
    img {
      filter: grayscale(0%);
    }
    transition: transform 0.15s ease !important;
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

export const CVButton = styled.div`
  a {
    text-decoration: none;
  }
  button {
    width: 37%;
    min-width: 250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};

    font-family: ${theme.fonts.fat};
    text-transform: capitalize;
    font-size: 2rem;

    border-radius: 10px;
    padding: 0.5rem 0rem;
    margin-top: 4rem;
    margin-left: 10px;

    img {
      width: 42px;
      height: 42px;
      transition: 0.1s;
    }

    animation: scale-up-center 1500ms ease-out infinite;
    @keyframes scale-up-center {
      20% {
        outline: 5px solid ${(props) => props.theme.colors.text + "ff"};
      }
      70% {
        outline-offset: 10px;
      }
      75% {
        outline: 5px solid ${(props) => props.theme.colors.text + "00"};
      }
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      animation: paused;
      outline: 5px solid ${(props) => props.theme.colors.text};
      outline-offset: 10px;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.text};

      img {
        background-color: ${(props) => props.theme.colors.text};
        padding: 2px;
        border-radius: 25%;
        scale: 1.2;
      }
    }

    @media (max-width: ${theme.screenSize.desktop}) {
      width: 50%;
      align-items: center;
      margin: 4rem auto;
    }
    @media screen and (max-width: 500px) {
      width: 90%;
    }
  }
`;
