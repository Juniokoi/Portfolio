import styled from 'styled-components'
import theme from '../../styles/index'

export const Container = styled.nav`
  ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  margin-top: 150px;
  
  
  font-family: ${theme.fonts.fat};
  
  li {
    list-style: none;
    font-size: 2rem;
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.text};
    }
  }
  }
`
