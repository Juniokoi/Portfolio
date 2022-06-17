import styled from 'styled-components'
import theme from './../../../src/styles'

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40vw;
  height: auto;

  @media (max-width: ${theme.screenSize.desktop}) {
    max-width: 100vw;
    align-items: center;
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
    width: 19rem;
    @media (max-width: ${theme.screenSize.tablet}) {
      display: none;
    }
  }

  p {
    font-size: 1.5rem;
    font-family: ${theme.fonts.body};
    text-align: justify;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    &::first-letter {
      margin-left: 1rem;
    }
  }
`

export const Section = styled.section`
  margin: 1rem 0;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 25px;
`
