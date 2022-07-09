import styled from "styled-components";
import theme from "../../styles";

export const Container = styled.div`
  background-image: url(${(props) => props.theme.backgroundImage.footer});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: fit-content;
  z-index: 1;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.text};
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.background} 0%,
    transparent 40%
  );
  padding: 10rem 5rem 0 5rem;
  gap: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 10rem 0 0;
  }
`;
export const Elements = styled.div`
  padding: 3rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  align-items: center;
  width: 80%;
  box-shadow: 0 0 40px 9px ${(props) => props.theme.colors.background};
  border-radius: 10px;
  @media screen and (max-width: 1070px) {
    padding: 3rem 1rem;
  }
`;
export const Header = styled.div`
  @media screen and (max-width: 1700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  display: flex;
  width: 100%;
  justify-content: space-between;
  h2 {
    font-family: ${theme.fonts.fat};
    font-weight: lighter;
    font-size: 6rem;
    line-height: 6rem;
    @media screen and (max-width: 1080px) {
      font-size: 3rem;
      line-height: 3rem;
      @media (max-width: 578px) {
        font-size: 2rem;
      }
    }
  }
  section {
    font-family: ${theme.fonts.body};
    text-align: end;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 1rem;
    h3 {
      font-size: 2rem;
      @media screen and (max-width: 1700px) {
        font-size: 1.5rem;
        text-align: center;
        margin: 0 auto;
      }
    }
    ul {
      font-size: 1.5rem;
      display: contents;
      @media screen and (max-width: 1700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        margin: 0 auto;
        @media screen and (max-width: 578px) {
          text-align: center;
        }
      }
      a {
        text-decoration: none;
        &:hover {
          transform: translateY(-4px);
        }
        @media screen and (max-width: 1700px) {
          &:hover {
            transform: none;
          }
        }
      }
      li {
        list-style: none;
        background-color: ${(props) => props.theme.colors.text};
        padding: 0 1rem;
        border-radius: 20px;
        text-transform: uppercase;
        font-weight: bolder;
        margin-bottom: 1rem;
        width: fit-content;
        color: ${(props) => props.theme.colors.background};
      }
    }
  }
`;
export const Caller = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-family: ${theme.fonts.body};
  font-weight: bolder;
  @media screen and (max-width: 1370px) {
    flex-direction: column;
    font-size: 1rem;
    text-align: center;
  }
  a {
    text-decoration: none;
    button {
      background-color: ${(props) => props.theme.colors.text};
      margin: 2rem;
      color: ${(props) => props.theme.colors.background};
      font-family: ${theme.fonts.body};
      text-transform: lowercase;
      font-weight: bolder;
      font-size: 2rem;
      height: 3rem;
      outline: ${(props) => props.theme.colors.text} auto;
      outline-offset: 4px;
      outline-width: 2px;
      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  font-size: 1rem;
  font-family: ${theme.fonts.code};
`;
