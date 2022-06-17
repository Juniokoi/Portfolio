import styled from 'styled-components'
import theme from '../../../styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  ul {
    margin-top: 1.5rem;
    border: 1px solid;
    border-width: 2px 1px;
    border-color: ${(props) => props.theme.colors.text};
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.background};
  }

  ul li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-family: ${theme.fonts.fat};
    font-size: 1.5rem;

    &:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.colors.text};
    }
  }

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
`
