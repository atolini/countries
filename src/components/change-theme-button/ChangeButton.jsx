import React from 'react';
import Container from './ChangeButton.style';
import { useTheme } from "styled-components";

function ChangeButton({ func }) {
  const theme = useTheme();

  return (
    <Container onClick={func}>
      <img src={(theme.name === 'lightTheme') ? 'icons/moon-light.svg' : 'icons/moon-dark.svg'} alt="icon" />
      {(theme.name === 'lightTheme') ? 'Dark Mode' : 'Light Mode'}
    </Container>
  );
}

export default ChangeButton;