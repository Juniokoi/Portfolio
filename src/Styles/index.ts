import theme from 'styled-theming'

const colors = {
    brand: '#0070f3',
    text: '#f0f0f5',
    backgroundBase: '#aaa' ,
} as const

const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

export default {colors, backgroundColor};