import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { CVButton } from "./Style";

function CV() {
  const { title } = useContext(ThemeContext);
  let icon: string;

  (() => {
    if (title === "dark") {
      icon = "/icons/darkDownload.svg";
    } else {
      icon = "/icons/whiteDownload.svg";
    }
  })();

  return (
    <>
      <CVButton>
        <a
          href="https://drive.google.com/file/d/1DhOHY6VsQOyaYv70FFsIse0re_lNwcTD/view"
          target="_blank"
        >
          <Button variant="contained">
            <img src={icon} alt="Icon para baixar" />
            Baixar CV
          </Button>
        </a>
      </CVButton>
    </>
  );
}

export default CV;
