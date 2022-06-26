import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-transition:all .3s ease-out;
  transition:all .3s ease-out;
  -moz-transition: all .3s ease-out;
}

body {
  font-size: 100%;
  line-height: 1.5;
  font-weight: 400;
  color: #333;

  button {
    border: none;
    background-color: transparent;
  }

    background: repeat center url(
      ${(props) => props.theme.backgroundImage.src});
    background-color: #333;

}
`
