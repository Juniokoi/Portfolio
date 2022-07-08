import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-transition:all .15s ease-out;
  transition:all .15s ease-out;
  -moz-transition: all .15s ease-out;
}

body {
  font-size: 100%;
  line-height: 1.5;
  font-weight: 400;
  color: #333;

  margin: 0 auto;
  button {
    border: none;
    background-color: transparent;
  }

    background: repeat center url(
      ${(props) => props.theme.backgroundImage.src});
    background-color: #333;

}
`;
