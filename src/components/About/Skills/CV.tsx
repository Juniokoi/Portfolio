import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

function CV() {
  const { title } = useContext(ThemeContext);
  let img: string;

  (() => {
    if (title === "dark") {
      img = "/icons/darkDownload.svg";
    } else {
      img = "/icons/whiteDownload.svg";
    }
  })();

  return (
    <>
      <Button variant="contained">
        <img src={img} />
        Baixar CV
      </Button>
    </>
  );
}

export default CV;
