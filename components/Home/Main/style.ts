import styled from 'styled-components'
import theme from '../../../src/styles'

export const FatFont = styled.h2`
  font-family: ${theme.fonts.fat};
  font-size: 4rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 4rem;
  display: inline;
`
export const BodyFont = styled.h2`
  font-family: ${theme.fonts.body};
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  line-height: 2rem;
  display: inline;
`
export const Container = styled.div`
  align-items: left;
  justify-content: end;

  .firstStar {
    * {
      position: relative;
      left: -4rem;
      top: 4rem;
    }
  }
  .lastStar {
    * {
      position: relative;
      right: -18rem;
      top: -2.2rem;
      width: auto;
      height: auto;
    }
  }
  .wavy {
    position: relative;
    left: 0.5rem;
    top: 0rem;
    * {
      width: 75px;
      height: auto;
    }
  }

  .code {
    height: 150px;
    max-width: 542px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`

export const CodeBracket = styled.p`
  font-family: ${theme.fonts.code};
  font-size: 2rem;
  display: inline;
  color: ${(props) => props.theme.colors.brackets};
  font-weight: 400;
`
export const Code = styled.p`
  font-family: ${theme.fonts.code};
  font-size: 2.6rem;
  display: inline;
  color: ${(props) => props.theme.colors.correct};
  max-height: 100px;
  font-weight: '700';
  .typed-cursor {
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
  }
`
