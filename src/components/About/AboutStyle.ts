import styled from "styled-components";
import theme from "../../styles";

export const Container = styled.main`
  padding-top: 8rem;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 5rem;
  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 0;
    height: 1300px;
  }
  .ArrowIcon {
    transform: rotate(-45deg);
    height: 42px;
    width: 42px;
  }
  color: ${(props) => props.theme.colors.text};
  h2 {
    font-size: 4rem;
    font-family: ${theme.fonts.fat};
    .bodyFont {
      font-family: ${theme.fonts.body};
      font-size: 3rem;
      font-weight: ${theme.fontWeights.regular};
    }

    @media (max-width: ${theme.screenSize.tablet}) {
      font-size: 3rem;
    }
  }

  hr {
    position: relative;
    top: -1rem;
    /* background-color: ${(props) => props.theme.colors.text}; */
    border: 1px solid ${(props) => props.theme.colors.text};
    height: 2px;
    @media (max-width: ${theme.screenSize.tablet}) {
      display: none;
    }
  }
`;
