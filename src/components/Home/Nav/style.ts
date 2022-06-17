import styled from 'styled-components'
import theme from '../../../styles'

export const Container = styled.nav`
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

    margin-top: 100px;

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
`
