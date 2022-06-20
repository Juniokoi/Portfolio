import React, { createContext, useContext, useState } from "react";
import { ThemeContext } from "styled-components";

interface IskillTheme {
  setSkillTheme: React.Dispatch<React.SetStateAction<number>>;
  SkillTheme: number;
  SkillColor: string;
}
export const SkillContext = createContext({} as IskillTheme);
function SkillContextProvider(props: any) {
  const { colors } = useContext(ThemeContext);
  const SkillColorScheme = ["#d2c5f9", "#ffb6b6", "#f8fabe", `${colors.text}`];

  const [SkillTheme, setSkillTheme] = useState(3);
  const SkillColor = SkillColorScheme[SkillTheme];

  return (
    <>
      <SkillContext.Provider value={{ SkillTheme, setSkillTheme, SkillColor }}>
        {props.children}
      </SkillContext.Provider>
    </>
  );
}

export default SkillContextProvider;
