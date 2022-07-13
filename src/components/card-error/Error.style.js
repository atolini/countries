import styled from 'styled-components'

const Wrapper = styled.div`
  width: 264px;  
  height: 160px;

  display: flex; 
  flex-flow: column nowrap; 
  gap: 8px;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.primaryColor};

  p { 
    font-family: ${props => props.theme.fontPrimary};
    font-size: 14px;
    color: ${props => props.theme.fontColor}; 
  }

  img { 
    width: 32px; 
    height: 32px; 
  }
`; 

export default Wrapper