import styled from "styled-components";
import theme from "../src/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1920px;
  overflow-x: hidden;
  background: ${(props) => props.theme.colors.background + "aa"};
  box-shadow: 0 0 60px 10px #00000050;
  /* @media (max-width: ${theme.screenSize.desktop}) {
    padding: 0 4vw;
  } */

  .header {
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;

      background: linear-gradient(
        to bottom,
        ${(props) => props.theme.colors.background},
        ${(props) => props.theme.colors.background + "00"}
      );
    }
  }
`;
