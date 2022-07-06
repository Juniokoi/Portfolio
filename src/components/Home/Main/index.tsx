import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { FatFont, Container, Wrapper } from './style'
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
        <img className="firstStar" src={star} alt="Star Icon" />

        <div className="wavy">
          <img src={wavy} alt="Simple wavy icon" />
        </div>

        <FatFont>
          Oi!<span>Eu sou</span>
          <br />
          Junio Koi
        </FatFont>

        <img className="lastStar" src={star} alt="Star Icon" />

        {/* <TypeAnimation /> */}
      </Container>
      <img
        className="profile"
        src={profile}
        alt="Uma foto de perfil do Junio Koi"
      />
    </Wrapper>
  )
}
