import styled from "styled-components";
import theme from "../../../styles";

export const FatFont = styled.h2`
  font-family: ${theme.fonts.fat};
  font-size: 4rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 4rem;
  display: inline;

  span {
    margin-left: 2.2rem;
    font-family: ${theme.fonts.body};
    font-size: 3rem;
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    line-height: 2rem;
    display: inline;

    @media (max-width: ${theme.screenSize.desktop}) {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  align-items: left;
  justify-content: end;
  margin: 0 8rem;

  .firstStar {
    position: relative;
    left: -4rem;
    top: 4rem;
  }

  .lastStar {
    position: relative;
    right: -1rem;
    top: 2rem;
    max-width: 270px;
  }

  .wavy {
    position: relative;
    left: 0.5rem;
    top: 0.5rem;
    * {
      width: 32px;
      height: auto;
    }
  }
  .typing {
    margin: 4rem 0;
    height: 200px;
    text-align: center;
    width: 100%;
  }
  @media (max-width: ${theme.screenSize.desktop}) {
    justify-content: center;
    align-items: center;
    max-width: 297px;
    .typing {
      margin: 0 auto;
    }
    .firstStar {
      left: -1rem;
      top: 2rem;
    }

    .lastStar {
      right: -17rem;
      top: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 5rem;
  .profile {
    width: auto;
    height: 100%;
  }
  @media (max-width: ${theme.screenSize.desktop}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;

    @media (max-width: ${theme.screenSize.tablet}) {
      img.profile {
        width: auto;
        margin-top: 100px;
      }
      padding: 0;

      @media (max-width: 380px) {
        img.profile {
          width: 100%;
        }
      }
    }
  }
`;
