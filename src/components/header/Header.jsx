import React, { useContext } from "react";
import { Container, BackGroundContainer } from "./Header.style";
import Logo from "../logo/Logo";
import ChangeButton from "../change-theme-button/ChangeButton";
import { ThemeContext } from '../design/ThemeStyle';

function Header() {
  const ChangeTheme = useContext(ThemeContext); 

  return (
    <>
      <BackGroundContainer />
      <Container>
        <Logo />
        <ChangeButton func={ChangeTheme}/>
      </Container>
    </>
  );
}

export default Header;
