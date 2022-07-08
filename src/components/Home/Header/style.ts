import styled from "styled-components";
import theme from "../../../styles";

export const Container = styled.div`
  display: flex;
  margin: 5rem 6rem 0px 10rem;

  justify-content: space-between;
  align-items: center;
  height: 60px;
  /* background-color: ${(props) => props.theme.colors.background}; */
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${theme.screenSize.desktop}) {
    display: none;
  }
`;
export const Button = styled.button`
  a {
    text-decoration: none;
  }
  background-color: transparent;
  font-family: ${theme.fonts.fat};
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  padding-right: 32px;
  cursor: pointer;
  @media (max-width: ${theme.screenSize.desktop}) {
    display: none;
  }
`;
