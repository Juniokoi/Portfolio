import styled from 'styled-components'
// import theme from './Styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 5vh 10vw;
  background-color: ${(props) => props.theme.colors.background};
`
