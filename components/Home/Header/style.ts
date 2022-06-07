import styled from 'styled-components'
import theme from '../../../src/styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`
export const Button = styled.button`
  background-color: transparent;
  font-family: ${theme.fonts.fat};
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background};
  padding-right: 32px;
  cursor: pointer;
`
