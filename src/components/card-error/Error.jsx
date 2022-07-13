import Wrapper from './Error.style'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

function Error() {
  const theme = useContext(ThemeContext)

  return(
    <Wrapper>
      <img src={(theme.name === 'lightTheme') ? 'icons/exclamation-light.svg' : 'icons/exclamation-dark.svg'} alt="icon" />
      <p>Error, please reload the page</p>
    </Wrapper>
  ); 
}

export default Error;