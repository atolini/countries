import styled from 'styled-components'; 

const Container = styled.button`
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.fontColor};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  display: flex; 
  flex-flow: row nowrap; 
  align-items: flex-end;
  gap: 8px;
  height: 20px;

  background-color: ${props => props.theme.primaryColor};
  border: none;

  img { 
    width: 20px; 
    height: 20px;
  }

  @media screen and (min-width: 768px) { 
    font-size: 16px;
  }

  :hover {
    cursor: pointer;
  }
`; 

export default Container; 