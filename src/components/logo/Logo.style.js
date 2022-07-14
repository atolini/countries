import styled from 'styled-components'; 

const Container = styled.h1`  
  margin-left: 0; 

  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.fontColor}; 
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`; 

export default Container;