import React, { createContext, useState } from "react";

interface IskillTheme {
  setSkillTheme: React.Dispatch<React.SetStateAction<number>>;
  SkillTheme: number;
}

export const SkillContext = createContext({} as IskillTheme);
function SkillContextProvider(props: any) {
  const [SkillTheme, setSkillTheme] = useState(3);

  return (
    <>
      <SkillContext.Provider value={{ SkillTheme, setSkillTheme }}>
        {props.children}
      </SkillContext.Provider>
    </>
  );
}

export default SkillContextProvider;
