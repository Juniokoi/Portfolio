import * as React from 'react'
import { useContext } from 'react'
import Animating from 'react-typed'

import { ThemeContext } from 'styled-components'
import { FatFont, BodyFont, Container, CodeBracket, Code } from './style'

export function Main() {
  const { title } = useContext(ThemeContext)
  let star, wavy: string

  if (title === 'dark') {
    star = 'assets/icons/whiteStar.svg'
    wavy = 'assets/icons/whiteWavy.svg'
  } else {
    star = 'assets/icons/darkStar.svg'
    wavy = 'assets/icons/darkWavy.svg'
  }

  const TypeAnimation = () => (
    <>
      <Animating
        strings={[
          'Eu sou um <em>Front End Developer</em> 🧑‍💻',
          'Eu sou um <strong>apaixonado</strong> por <em>tecnologia</em> ✨',
          'Eu sou um <strong>apaixonado</strong> por <em>desenvolvimento</em> 🧑‍💻',
          'Eu <strong>amo</strong> Web Design ✒️'
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

      <FatFont>Oi! <BodyFont>Eu sou</BodyFont><br />
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
