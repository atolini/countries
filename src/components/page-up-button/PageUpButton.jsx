import Button from "./PageUpButton.style";
import { useTheme } from "styled-components";

function PageUp() { 
  const theme = useTheme();

  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Button>
      <img src={(theme.name === 'lightTheme') ? 'icons/arrow-light.svg' : 'icons/arrow-dark.svg'} 
      alt="icon"
      onClick={pageUp} />
    </Button> 
  ); 
}

export default PageUp;