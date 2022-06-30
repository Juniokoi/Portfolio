import React, { createContext, useContext, useState } from "react";
import { ThemeContext } from "styled-components";

interface IskillTheme {
  setSkillTheme: React.Dispatch<React.SetStateAction<number>>;
  SkillTheme: number;
  TextColor: string;
  BackgroundColor: string;
}
export const SkillContext = createContext({} as IskillTheme);
function SkillContextProvider(props: any) {
  const { colors } = useContext(ThemeContext);
  const TextColorScheme = ["#d2c5f9", "#ffb6b6", "#f8fabe", `${colors.text}`];
  const BackgroundColorScheme = [
    "#d2c5f9",
    "#ffb6b6",
    "#f8fabe",
    `${colors.background}`,
  ];

  const [SkillTheme, setSkillTheme] = useState(3);
  const TextColor = TextColorScheme[SkillTheme];
  const BackgroundColor = BackgroundColorScheme[SkillTheme];

  return (
    <>
      <SkillContext.Provider
        value={{ SkillTheme, setSkillTheme, TextColor, BackgroundColor }}
      >
        {props.children}
      </SkillContext.Provider>
    </>
  );
}

export default SkillContextProvider;
