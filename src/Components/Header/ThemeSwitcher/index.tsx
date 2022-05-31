import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import ThemeButton from './style'

import moon from '../../../Assets/icons/moon.svg'
import sun from '../../../Assets/icons/sun.svg'

interface Props {
  toggleTheme: () => void;
}

function ThemeSwitcher ({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext)

  return (
    <>
    <ThemeButton
    onClick={ toggleTheme }
    title={'Theme Switcher'}
    type="button"
    >
    {
    title === 'light'
      ? <img src={`${sun}`} alt="Sun Icon" />
      : <img src={`${moon}`} alt="Moon icon"
     />
     }
    </ThemeButton>
    </>
  )
}

export default ThemeSwitcher
