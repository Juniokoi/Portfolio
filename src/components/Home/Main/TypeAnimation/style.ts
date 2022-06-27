import styled from "styled-components";
import theme from "../../../../styles";

export const CodeBracket = styled.p`
  font-family: ${theme.fonts.code};
  font-size: 2rem;
  display: inline;
  color: ${(props) => props.theme.colors.brackets};
  font-weight: 400;
`;

export const Code = styled.p`
  font-family: ${theme.fonts.code};
  font-size: 2.6rem;
  display: inline;
  color: ${(props) => props.theme.colors.correct};
  max-height: 100px;
  font-weight: "700";

  .end-cursor:after {
    content: "|";
    color: ${(props) => props.theme.colors.text};
  }

  .end-cursor.blinking:after {
    animation: blink-cursor 1s step-end infinite;
    transition: 0.5s;
  }

  @keyframes blink-cursor {
    50% {
      opacity: 0;
    }
  }
`;
