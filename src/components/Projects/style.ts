import styled from "styled-components";
import theme from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4rem;
  color: ${(props) => props.theme.colors.text};

  .Text {
    display: flex;
    flex-direction: row;
    gap: 2rem;
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
    p {
      text-align: start;
      width: 80%;
      font-size: 1.5rem;
      font-family: ${theme.fonts.body};
    }
  }
  hr {
    width: 100%;
    height: 4px;
    border: 1px solid #a58bf499;
    margin-top: 1rem;
    box-shadow: 0 0 16px 1px #a58bf499;
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  .openCard {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 25%;
    margin: 0 auto;
    padding: 40px 0;
    border-radius: 25px;
    background-color: ${(props) => props.theme.colors.background};
    z-index: 3;
    width: 700px;
    height: 500px;
    button {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 4;
      cursor: pointer;
      svg {
        stroke: ${(props) => props.theme.colors.text};
        stroke-width: 4px;
      }
    }
  }
  .Blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: #00000080;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px) t;
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

    height: 600px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 25px;
      object-fit: cover;
    }
  }
  .bullet-point {
    width: auto !important;
    height: auto !important;
    padding: 10px 1rem !important;
    text-align: center;
    line-height: 20px !important;
    font-size: 12px !important;
    color: #000 !important;
    border-radius: 2px !important;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    color: #000 !important;
    background: #d2c5f9;
    border-radius: 50% !important;
  }
`;
