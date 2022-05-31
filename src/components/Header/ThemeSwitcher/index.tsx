import * as React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import ThemeButton from './style'


interface Props {
  toggleTheme: () => void;
}

function ThemeSwitcher({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext)

  return (
    <>
      <ThemeButton
        onClick={toggleTheme}
        title={'Theme Switcher'}
        type="button"
      >
        {
          title === 'light'
            ? <img src={'assets/icons/sun.svg'} alt="Sun Icon" />
            : <img src={'assets/icons/moon.svg'} alt="Moon icon"
            />
        }
      </ThemeButton>
    </>
  )
}

export default ThemeSwitcher
