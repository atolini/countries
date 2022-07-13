import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;

  position: fixed; 
  right: 10px; 
  bottom: 40px;
  
  background-color: ${props => props.theme.segundaryColor};
  cursor: pointer;

  border: none;
  border-radius: 100px;

  @media screen and (min-width: 375px) { 
    right: 40px; 
    bottom: 40px;
  }

  :active {
    box-shadow: ${props => (props.theme.name === 'lightTheme') ? '3px 2px 22px 1px rgba(0, 0, 0, 0.24);' : '3px 2px 22px 1px rgba(137, 158, 174, 0.24);'} 
  }
`; 

export default Button;