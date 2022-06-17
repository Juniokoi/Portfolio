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
  @media (max-width: ${theme.screenSize.desktop}) {
    width: 100%;
  }
`
export const Container = styled.div`
  align-items: left;
  justify-content: end;

  & img:first-child {
    position: relative;
    left: -4rem;
    top: 4rem !important;
  }
  .lastStar {
    * {
      position: relative;
      right: -18rem;
      top: -2.2rem;
      max-width: 270px;
      height: 0;
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

  @media (max-width: ${theme.screenSize.desktop}) {
    justify-content: center;
    align-items: center;
    max-width: 277px;
    .firstStar {
      * {
        left: -2rem;
      }
    }
    .lastStar {
      * {
        right: -10rem;
      }
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: ${theme.screenSize.desktop}) {
    flex-direction: column;
    align-items: center;
  }
`
