import React, {useContext}  from 'react';
import  {ThemeContext}  from "styled-components";

import Switch from "react-switch";
import { shade } from "polished";


interface Props {
  toggleTheme: () => void;
}

function ThemeSwitcher({toggleTheme}: Props) {
const {colors, title} = useContext(ThemeContext);

return (
    <>
            <Switch
        checked={title === 'dark'}
        onChange={toggleTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.primary}
        offColor={colors.secondary}
        width={40}
        height={10}
        handleDiameter={20}
      />
    </>
  );
}

export default ThemeSwitcher;