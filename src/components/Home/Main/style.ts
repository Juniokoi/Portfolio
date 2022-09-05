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
    animation: rotateFirstStar 6s ease-in-out infinite;
  }

  .lastStar {
    position: relative;
    right: -1rem;
    top: 2rem;
    max-width: 270px;
    animation: rotateLastStar 8s ease-in-out infinite;
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
    text-align: start;
    width: 130%;
  }
  @keyframes rotateFirstStar {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes rotateLastStar {
    0% {
      transform: rotate(0deg);
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "30"} 0%,
        transparent 30%
      );
    }
    10% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "80"} 0%,
        transparent 20%
      );
    }
    20% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "aa"} 0%,
        transparent 30%
      );
    }
    25% {
      transform: rotate(10deg);
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "cc"} 0%,
        transparent 30%
      );
    }
    30% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "ff"} 0%,
        transparent 30%
      );
    }
    40% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "bb"} 0%,
        transparent 20%
      );
    }
    50% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "30"} 0%,
        transparent 50%
      );
    }
    60% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "ff"} 0%,
        transparent 30%
      );
    }
    75% {
      transform: rotate(-10deg);
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "aa"} 0%,
        transparent 10%
      );
    }
    80% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "30"} 0%,
        transparent 40%
      );
    }
    90% {
      background: radial-gradient(
        ${(props) => props.theme.colors.text + "bb"} 0%,
        transparent 20%
      );
    }
    100% {
      transform: rotate(0deg);
      background: radial-gradient(
        ${(props) => props.theme.colors.text} 0%,
        transparent 50%
      );
    }
  }
  @media (max-width: ${theme.screenSize.desktop}) {
    justify-content: center;
    align-items: center;
    max-width: 297px;
    width: 100%;
    .typing {
      margin: 0 auto;
    }
    .firstStar {
      left: -1rem;
      top: 2rem;
      transition: all 0.3s;
    }

    .lastStar {
      right: -16rem;
      top: 0;
      animation: rotateLastStar 8s ease-in-out infinite;
      transition: all 0.2s ease-in-out !important;
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
