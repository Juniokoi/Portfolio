import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 100%;
  line-height: 1.5;
  font-weight: 400;
  color: #333;
  background-color: ${props => props.theme.colors.background};
}
`