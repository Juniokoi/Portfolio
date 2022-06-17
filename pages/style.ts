import styled from 'styled-components'
import theme from '../src/styles'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 5vh 10vw;
  max-width: 1920px;
  background: ${(props) => props.theme.colors.background + 'aa'};
  @media (max-width: ${theme.screenSize.tablet}) {
    padding: 2vh 4vw;
  }
  .header {
    &::before {
      content: '';
      position: absolute;
      width: 100vw;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
      background: linear-gradient(
        to bottom,
        ${(props) => props.theme.colors.background},
        ${(props) => props.theme.colors.background + '00'}
      );
    }
  }
`
