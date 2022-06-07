const colors = {
  brand: '#0070f3',
  text: '#f0f0f5',
  backgroundBase: '#aaa',
} as const

const fonts = {
  body: '"Source Sans Pro", Helvetica, Arial, sans-serif',
  fat: '"Abril Fatface", Helvetica, Arial, sans-serif',
  code: '"JetBrains Mono", Consolas , Courier, monospace',
} as const

const fontWeights = {
  regular: 400,
  Bold: 700,
} as const

export default { colors, fonts, fontWeights }
