import React from "react";
import Container from "./ChangeButton.style";
import { useTheme } from "styled-components";
import { ReactComponent as MoonLightIcon } from "./moon-light.svg";
import { ReactComponent as MoonDarkIcon } from "./moon-dark.svg";

function ChangeButton({ func }) {
  const theme = useTheme();

  return (
    <Container onClick={func}>
      {theme.name === "lightTheme" ? <MoonLightIcon /> : <MoonDarkIcon />}
      {theme.name === "lightTheme" ? "Dark Mode" : "Light Mode"}
    </Container>
  );
}

export default ChangeButton;
