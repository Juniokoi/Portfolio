import styled from "styled-components";
import theme from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 4rem;
  padding-top: 8rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  .Text {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
  .Header {
    display: flex;
    flex-direction: row;
    text-align: end;
    font-size: 4rem;
    line-height: 5rem;
    font-family: ${theme.fonts.body};
    svg {
      position: relative;
      top: -0.2rem;
      left: 5rem;
      height: 84px;
      width: 84px;
      fill: ${(props) => props.theme.colors.text};
    }
  }
  .Body {
    align-self: flex-end;
    p {
      text-align: start;
      width: 50%;
      font-size: 1.5rem;
      align-self: flex-end;
      font-family: ${theme.fonts.body};
    }
  }
  hr {
    width: 100%;
    height: 4px;
    border: 1px solid #a58bf499;
    margin-top: 2rem;
    box-shadow: 0 0 16px 1px #a58bf499;
  }

  /* Style for the card when user click on it */
  .openCard {
    --border: 6px;
    --cardWidth: 50vw;
    --cardHeight: 80vh;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: calc(var(--cardHeight) / -2);
    margin-left: calc(var(--cardWidth) / -2);
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 40px 20%;

    z-index: 3;
    background-color: pink;

    width: var(--cardWidth);
    height: var(--cardHeight);

    border: var(--border) solid transparent;
    border-radius: 25px;

    font-family: ${theme.fonts.body};
    h5 {
      font-size: 4rem;
      width: max-content;
    }

    img {
      height: 300px;
      width: 508px;
    }

    &:before {
      content: "";
      position: absolute;
      top: -1px;
      bottom: 0;
      right: -1.3px;
      border-radius: 21px;
      width: calc(100% + var(--border) / 2);
      height: calc(100% + var(--border) / 2);
      background-color: ${(props) => props.theme.colors.background};
      z-index: -1;
    }
    @media (max-width: 1024px) {
      --cardWidth: 90vw;
    }
  }
  .Blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: #000000b0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .bullet-point {
    --topMarginDistance: 90px;
    position: relative;
    top: var(--topMarginDistance);

    width: auto;
    height: auto;

    padding: 10px 1rem;
    margin: 0.5rem;

    font-size: 1rem !important;
    font-family: ${theme.fonts.body};
    font-weight: 600;
    text-align: center;
    line-height: 20px;
    font-size: 12px;

    color: #000;
    box-shadow: 0 4px 8px 0 #00000088;
    border-radius: 15px;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    color: #000;
    background: #d2c5f9;
    box-shadow: 0 8px 12px 0 #00000060;
    position: relative !important;
    font-weight: 900px !important;
    top: calc(var(--topMarginDistance) - 16px);
  }
  overflow-x: hidden !important;

  /** Carousel styles */
  .swiper {
    width: 100%;
    height: 120%;
    margin: 150px auto;
    overflow: visible !important;
    overflow-y: visible;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #222;
    border-radius: 25px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d2c5f9;
    border-radius: 25px;

    height: 400px;
  }
`;
export const MainCard = styled.img<imgProps>`
  width: auto;
  height: 101%;
  border-radius: 25px;
  box-shadow: 0 8px 60px 4px ${(props) => props.color + "50"};
  /* border: 2px solid ${(props) => props.color}; */
`;

type imgProps = {
  color: string;
};

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  svg {
    stroke: ${(props) => props.theme.colors.text};
    stroke-width: 4px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;

  a {
    text-decoration: none;
    --borderColor: rgba(165, 139, 244, 0.25);
    &:nth-child(even) {
      --borderColor: rgba(255, 121, 198, 0.25);
    }
  }

  .DescriptionBox {
    align-self: flex-start;
    margin: 0 1rem;
    width: 300px;
    padding: 1rem;
    height: 100%;
    border-radius: 10px;
    box-shadow: 2px 0px 8px rgba(84, 199, 244, 0.25),
      0px -2px 8px rgba(241, 245, 126, 0.25),
      0px 4px 8px rgba(151, 71, 255, 0.25),
      -2px 0px 8px rgba(255, 121, 198, 0.25);

    h6 {
      filter: opacity(0.7);
      font-style: italic;
    }
  }
  .Buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    button {
      color: ${(props) => props.theme.colors.text};

      width: 200px;
      height: 75px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-self: stretch;
      justify-content: space-between;

      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0px 4px 4px var(--borderColor), 0 -1px 0 0 var(--borderColor);

      font-size: 1rem;
      text-align: start;

      cursor: pointer;

      strong {
        font-size: 2rem;
      }

      svg {
        width: 42px;
        height: 42px;
        order: 2;
      }

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;
