import styled from 'styled-components';

const Container = styled.button`
  display: flex; 
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.fontColor};
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;

  border: none; 
  background-color: ${props => props.theme.primaryColor}; 
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  border-radius: 2px; 

  width: 104px; 
  height: 32px; 

  @media screen and (min-width: 768px) { 
    width: 136px;
    height: 40px;
    font-size: 16px;
  }

  :hover { 
    cursor: pointer; 
    background-color: ${props => props.theme.hoverColor};
  }

  img { 
    width: 18px; 
    height: 18px;

    @media screen and (min-width: 768px) { 
      width: 20px; 
      height: 20px; 
    }
  }
`;

export default Container