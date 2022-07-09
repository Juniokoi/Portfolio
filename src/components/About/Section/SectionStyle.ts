import styled from "styled-components";
import theme from "../../../styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  width: 100%;
  hr {
    width: 19rem;
  }

  @media (max-width: 1150px) {
    max-width: 100vw;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Section = styled.div<SectionProps>`
  margin: 1rem 0;
  padding: 1rem;
  /* width: 100%; */
  border: 2px solid ${(props) => props.BorderColor};
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.background};
  .mantine-ScrollArea-thumb {
    background-color: ${(props) => props.theme.colors.text + "99"};
    position: relative;
    &:hover {
      background-color: ${(props) => props.theme.colors.text + "99"} !important;
    }
  }
  .mantine-ScrollArea-corner {
    background-color: ${(props) => props.theme.colors.background};
  }

  .mantine-1r7b8iq:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
  max-width: 600px;

  p {
    font-size: 1.5rem;
    font-family: ${theme.fonts.body};
    text-align: justify;

    padding-right: 8px;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    &::first-letter {
      margin-left: 1rem;
    }

    @media (max-width: ${theme.screenSize.tablet}) {
      text-align: justify;
    }
  }
`;

interface SectionProps {
  color: string;
  BorderColor: string;
}
