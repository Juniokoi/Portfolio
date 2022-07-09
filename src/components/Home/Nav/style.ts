import styled from "styled-components";
import theme from "../../../styles";

export const Container = styled.nav`
  padding: 0 5rem;

  @media (max-width: ${theme.screenSize.desktop}) {
    ul,
    li {
      display: none;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5rem;

    margin-top: 4rem;
    margin-bottom: 8rem;
    @media screen and (max-width: 1024px) {
      margin-bottom: 0rem;
    }

    font-family: ${theme.fonts.fat};

    li {
      list-style: none;
      font-size: 3rem;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
