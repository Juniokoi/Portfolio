import React, { useContext } from 'react'
import Animating from 'react-typed'

import { ThemeContext } from 'styled-components'
import { FatFont, BodyFont, Container, CodeBracket, Code } from './style'

import darkStar from '../../Assets/icons/darkStar.svg'
import whiteStar from '../../Assets/icons/whiteStar.svg'
import whiteWavy from '../../Assets/icons/whiteWavy.svg'
import darkWavy from '../../Assets/icons/darkWavy.svg'

export function Main () {
  const { title } = useContext(ThemeContext)
  let star: string
  let wavy: string

  if (title === 'dark') {
    star = whiteStar
    wavy = whiteWavy
  } else {
    star = darkStar
    wavy = darkWavy
  }

  const TypeAnimation = () => (
  <>
    <Animating
      strings={[
        'Eu sou um <em>Full Stack Developer</em> 🧑‍💻',
        'Eu sou um <strong>apaixonado</strong> por desenvolvimento 🧑‍💻',
        'Eu sou um <strong>apaixonado</strong> por tecnologia ✨',
        'Eu amo Web Design ✒️'
      ]}
      typeSpeed={50}
      backSpeed={50}
      backDelay={2000}
      fadeOut={false}
      loop
      shuffle={false}
      showCursor={true}
      autoInsertCss={true}
      smartBackspace={true}
      bindInputFocusEvents={true}
    />
  </>
  )

  return (
    <Container>

      <div className="firstStar">
        <img src={star} alt="Star Icon" />
      </div>
      <div className="wavy">
        <img src={wavy} alt="" />
      </div>

      <FatFont>Oi! <BodyFont>Eu sou</BodyFont><br/>
      Junio Koi</FatFont>

      <div className="lastStar">
        <img src={star} alt="Star Icon" />
      </div>

      <CodeBracket>&lt;</CodeBracket>
      <Code>
        <TypeAnimation />
      </Code>
      <CodeBracket>&#47;&gt; </CodeBracket>
    </Container>
  )
}
