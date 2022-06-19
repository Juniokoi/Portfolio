import styled from "styled-components";
import theme from "../../../styles";

type ArrowProps = {
  isExpanded: boolean;
};

// Defines the major structure of this component
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    width: 33rem;
    top: -0.5rem !important;
  }

  @media (max-width: 1366px) {
    h2 {
      /* margin-top: 1rem; */
      /* line-height: 4rem; */
    }
    @media (max-width: ${theme.screenSize.desktop}) {
      max-width: 100vw;
      margin: 0 auto;
    }
  }
`;

// Represents the whole section
export const List = styled.ul`
  margin-top: 1.5rem;
  border: 1px solid;
  border-width: 2px 1px;
  border-color: ${(props) => props.theme.colors.text};
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background};
`;

// Each skill is an item. ie(Frontend, Backend, Design UI)
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: ${theme.fonts.fat};
  font-size: 1.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
  }
`;

// List of skills
export const Header = styled.div<ArrowProps>`
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
        ? `transform: rotate(0deg)`
        : `transform: rotate(-45deg)`}
  }
`;

// Group which contain the Panel description and group of items
export const ListBody = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  /* margin: 0 auto; */
  /* gap: 4rem; */
`;

// Div that only contains the description
export const PanelDescription = styled.div`
  width: 49%;
  text-align: start;
  align-self: flex-end;
  font-family: ${theme.fonts.body};
  font-size: 1.5rem;
  height: 100%;
`;

export const PanelItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 49%;
`;

// Each icon is an item. ie(HTML, CSS, Javascript, React, etc)
export const PanelCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${theme.fonts.body};
  font-size: 1.5rem;
  text-align: center;
  width: 84px;
  /* width: 150px; */
  background-color: ${(props) => props.theme.colors.text};
  margin: 1rem;
  img {
    width: 64px;
    height: auto;
  }
  h4 {
    font-family: ${theme.fonts.code};
    color: ${(props) => props.theme.colors.background};
  }
`;
