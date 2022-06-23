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

interface SectionProps {
  isExpanded: boolean;
  color: string;
  BorderColor: string;
}
export const Section = styled.div<SectionProps>`
  margin: 1rem 0;
  padding: 1rem;
  /* width: 100%; */
  border: 2px solid ${(props) => props.BorderColor};
  border-radius: 15px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    h3 {
      display: inline;
      width: 100px;
      font-family: ${theme.fonts.body};
      font-size: 1.5rem;
    }
    .ArrowIcon {
      transition: all 0.3s ease-in-out !important;
      transition-delay: 1s;
      ${(props) =>
        props.isExpanded
          ? `transform: rotate(0deg)`
          : `transform: rotate(-45deg)`}
    }

    /* Snipped below is only active when user clicks on expand ↕ */
    ${(props) =>
      props.isExpanded &&
      `{
        padding-bottom: 1rem;
        border-bottom: 2px solid ${props.BorderColor}} ;
        margin-bottom: 1.5rem;
        width: 100%;
      }
        `}
  } // end of div

  p {
    font-size: 1.5rem;
    font-family: ${theme.fonts.body};
    text-align: justify;

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
