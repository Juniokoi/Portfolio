import * as React from 'react'
import { useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { FatFont, BodyFont, Container, Wrapper } from './style'
import TypeAnimation from './TypeAnimation'

let star: string, wavy: string, profile: string

function changeImages(theme: string) {
  if (theme === 'dark') {
    star = '/icons/whiteStar.svg'
    wavy = '/icons/whiteWavy.svg'
    profile = '/images/profileDark.png'
  } else {
    star = '/icons/darkStar.svg'
    wavy = '/icons/darkWavy.svg'
    profile = '/images/profile.png'
  }
}

export function Main() {
  const { title } = useContext(ThemeContext)

  changeImages(title)

  return (
    <Wrapper>
      <Container>
        <img
          className="firstStar"
          src={star}
          alt="Star Icon"
          width={64}
          height={64}
        />

        <div className="wavy">
          <img src={wavy} alt="" width={64} height={16} />
        </div>

        <FatFont>Oi! </FatFont>
        <BodyFont>Eu sou</BodyFont>
        <br />
        <FatFont>Junio Koi</FatFont>

        <img
          className="lastStar"
          src={star}
          alt="Star Icon"
          width={64}
          height={64}
        />

        {/* <TypeAnimation /> */}
      </Container>
      <div className="profile">
        <img src={profile} alt="" width={384} height={352} />
      </div>
    </Wrapper>
  )
}
