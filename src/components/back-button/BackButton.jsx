import React from 'react';
import Container from './BackButton.style';
import { useTheme } from "styled-components";

function BackButton({ func }) {
  const theme = useTheme();

  return (
    <Container onClick={func}>
      <img src={(theme.name === 'lightTheme') ? 'icons/back-light.svg' : 'icons/back-dark.svg'} alt="icon" />
      Back
    </Container>
  );
}

export default BackButton;