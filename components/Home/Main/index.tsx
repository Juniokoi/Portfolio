import Image from 'next/image'
import * as React from 'react'
import { useContext } from 'react'
import Animating from 'react-typed'

import { ThemeContext } from 'styled-components'
import {
  FatFont,
  BodyFont,
  Container,
  CodeBracket,
  Code,
  Wrapper,
} from './style'

export function Main() {
  const { title } = useContext(ThemeContext)
  let star, wavy, profile: string

  if (title === 'dark') {
    star = '/icons/whiteStar.svg'
    wavy = '/icons/whiteWavy.svg'
    profile = '/images/profileDark.png'
  } else {
    star = '/icons/darkStar.svg'
    wavy = '/icons/darkWavy.svg'
    profile = '/images/profile.png'
  }

  const TypeAnimation = () => (
    <>
      <Animating
        strings={[
          'Eu sou um <em>Front End Developer</em> 🧑‍💻',
          'Eu sou <strong>apaixonado</strong> por <em>tecnologia</em> ✨',
          'Eu sou <strong>apaixonado</strong> por <em>desenvolvimento</em>',
          'Eu <strong>amo</strong> Web Design ✒️',
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
    <Wrapper>
      <Container>
        <div className="firstStar">
          <Image src={star} alt="Star Icon" width={64} height={64} />
        </div>
        <div className="wavy">
          <Image src={wavy} alt="" width={64} height={16} />
        </div>

        <FatFont>Oi! </FatFont>
        <BodyFont>Eu sou</BodyFont>
        <br />
        <FatFont>Junio Koi</FatFont>

        <div className="lastStar">
          <Image src={star} alt="Star Icon" width={64} height={64} />
        </div>
        <div className="code">
          <CodeBracket>&lt;</CodeBracket>
          <Code>
            <TypeAnimation />
          </Code>
          <CodeBracket>&#47;&gt; </CodeBracket>
        </div>
      </Container>
      <div className="profile">
        <Image src={profile} alt="" width={384} height={352} />
      </div>
    </Wrapper>
  )
}
